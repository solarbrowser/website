import { createHash, createHmac, randomInt, timingSafeEqual } from 'node:crypto';
import { getStore } from '@netlify/blobs';

const CAPTCHA_TTL_MS = 10 * 60 * 1000;
const MAX_PER_HOUR = 5;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const sign = (secret, payload) =>
  createHmac('sha256', secret).update(payload).digest('hex');

const sha = (value) => createHash('sha256').update(value).digest('hex');

function checkToken(secret, token, answer) {
  const [a, b, exp, sig] = String(token).split('.');
  if (!a || !b || !exp || !sig) return false;
  const expected = sign(secret, `${a}.${b}.${exp}`);
  if (sig.length !== expected.length) return false;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  if (Date.now() > Number(exp)) return false;
  return Number(answer) === Number(a) + Number(b);
}

export default async (req, context) => {
  const secret = process.env.WAITLIST_SECRET;
  if (!secret) return json({ error: 'Server is not configured.' }, 500);

  // Issue a captcha. Stateless: the answer is bound to an HMAC, so the
  // browser cannot forge a token for a different sum.
  if (req.method === 'GET') {
    const a = randomInt(1, 10);
    const b = randomInt(1, 10);
    const exp = Date.now() + CAPTCHA_TTL_MS;
    return json({ a, b, token: `${a}.${b}.${exp}.${sign(secret, `${a}.${b}.${exp}`)}` });
  }

  if (req.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot: real visitors never see this field. Pretend it worked.
  if (body.website) return json({ ok: true });

  const email = String(body.email ?? '').trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ error: 'Enter a valid email address.' }, 400);
  }

  if (!checkToken(secret, body.token, body.answer)) {
    return json({ error: 'That answer is not right. Try again.' }, 400);
  }

  // Per-IP limit, keyed by hashed IP + hour so no raw IPs are stored.
  const limits = getStore('waitlist-ratelimit');
  const bucket = `${sha(context.ip ?? 'unknown')}-${Math.floor(Date.now() / 3_600_000)}`;
  const count = Number((await limits.get(bucket)) ?? 0);
  if (count >= MAX_PER_HOUR) {
    return json({ error: 'Too many attempts. Try again later.' }, 429);
  }
  await limits.set(bucket, String(count + 1));

  const list = getStore('waitlist');
  const key = sha(email);
  if (!(await list.get(key))) {
    await list.setJSON(key, { email, createdAt: new Date().toISOString() });
  }

  return json({ ok: true });
};

export const config = { path: '/api/waitlist' };
