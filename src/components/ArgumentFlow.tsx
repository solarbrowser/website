'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

const steps = [
  {
    claim: 'They’re watching you.',
    answer: 'be private',
    // The only collection Solar plans. Stated exactly, everywhere it appears,
    // because "no telemetry" would be the easy claim and it would be false.
    note: 'The only thing collected is an anonymised ID, used to count daily searches and unique users -- and you can switch it off. No profile building, nothing sold, and your history never leaves the device unencrypted.',
    href: '/features',
    linkLabel: 'How privacy works',
  },
  {
    claim: 'You’re using a layout standardised twenty years ago.',
    answer: 'be unique',
    // "Chrome" in the browser-UI sense reads as Google Chrome to everyone who
    // is not an engine developer, which is most of the audience.
    note: 'Layout, tabs, shortcuts and themes are configuration here -- not product decisions you have to live with.',
    href: '/docs',
    linkLabel: 'Customization docs',
  },
  {
    claim: 'Almost every browser is the same engine in a different coat.',
    answer: 'be independent',
    // Accurate as of now: Quanta exists, the renderer has not been started.
    // If that changes, change this -- it is the one place the site makes a
    // claim about what is already built.
    note: 'Solar is not a fork. Quanta, the JavaScript engine, is written from scratch and already passes 80% of test262. The rendering engine is next, and gets built the same way.',
    href: 'https://quanta.js.org/',
    linkLabel: 'The Quanta engine',
  },
  {
    claim: 'Your extensions belong to a store, not to you.',
    answer: 'be portable',
    note: 'Extensions written for other major browsers run here without a rewrite or a compatibility shim.',
    href: '/docs',
    linkLabel: 'Extension docs',
  },
  {
    claim: 'Your browser wants every gigabyte you have.',
    answer: 'be light',
    note: 'Our next-generation architecture aims to use 30% less memory, with more battery life.',
    href: '/features',
    linkLabel: 'What it does',
  },
];

const LEFT = 0.1;
const RIGHT = 0.9;
const MOBILE_X = 0.08;

/**
 * Builds the route in real pixel coordinates.
 *
 * An earlier version drew this in a normalised 0--100 viewBox with
 * preserveAspectRatio="none". That stretched the box roughly tenfold
 * vertically, which broke two things at once: the browser measures a path for
 * stroke dashes in untransformed user units but paints them through the
 * transform, so the scroll-drawn segment came out in disconnected chunks; and
 * the same stretch flattened the curves into one lazy diagonal.
 *
 * Drawing at 1:1 keeps the dash geometry honest and lets the corners hold a
 * constant radius, which reads as a deliberate flow chart rather than a skew.
 */
function buildRoute(w: number, h: number, isDesktop: boolean): string {
  if (w <= 0 || h <= 0) return '';

  if (!isDesktop) {
    const x = w * MOBILE_X;
    return `M ${x} 0 L ${x} ${h}`;
  }

  const xL = w * LEFT;
  const xR = w * RIGHT;
  // Corners stay circular and never eat more than a quarter of the run.
  const r = Math.max(24, Math.min(110, w * 0.08, h * 0.04));

  // Rows are equal height, so nodes sit at 10/30/50/70/90% and the sideways
  // jogs belong exactly halfway between them.
  const mids = [0.2, 0.4, 0.6, 0.8].map((f) => h * f);

  let x = xL;
  let d = `M ${xL} 0`;

  mids.forEach((m, i) => {
    const goRight = i % 2 === 0;
    const target = goRight ? xR : xL;

    d += ` L ${x} ${m - r}`;
    if (goRight) {
      // down → right, then right → down
      d += ` A ${r} ${r} 0 0 0 ${x + r} ${m}`;
      d += ` L ${target - r} ${m}`;
      d += ` A ${r} ${r} 0 0 1 ${target} ${m + r}`;
    } else {
      // down → left, then left → down
      d += ` A ${r} ${r} 0 0 1 ${x - r} ${m}`;
      d += ` L ${target + r} ${m}`;
      d += ` A ${r} ${r} 0 0 0 ${target} ${m + r}`;
    }
    x = target;
  });

  return `${d} L ${x} ${h}`;
}

export default function ArgumentFlow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [box, setBox] = useState({ w: 0, h: 0 });

  // The route must match the track box exactly, padding included, so measure
  // the border box rather than the content box.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => setBox({ w: el.offsetWidth, h: el.offsetHeight });
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isDesktop = box.w >= 768;
  const route = useMemo(
    () => buildRoute(box.w, box.h, isDesktop),
    [box.w, box.h, isDesktop]
  );

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 80%', 'end 70%'],
  });

  const drawn = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const pathLength = reduceMotion ? 1 : drawn;

  return (
    <section
      aria-labelledby="argument-heading"
      className="mx-auto w-full max-w-[110rem] py-24 md:py-40"
    >
      <h2 id="argument-heading" className="sr-only">
        Why Solar exists
      </h2>

      <div ref={trackRef} className="relative">
        {route && (
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${box.w} ${box.h}`}
            width={box.w}
            height={box.h}
            fill="none"
          >
            <path d={route} stroke="var(--line)" strokeWidth="1.5" />
            <motion.path
              d={route}
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>
        )}

        {/* Arrowhead in its own square viewBox so it is never distorted. */}
        <svg
          aria-hidden
          className="absolute bottom-0 h-6 w-6 -translate-x-1/2 translate-y-1/2"
          style={{ left: `${(isDesktop ? LEFT : MOBILE_X) * 100}%` }}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 0v15M3.5 9.5l6.5 7 6.5-7"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <ol className="relative">
          {steps.map((step, i) => {
            const onRight = i % 2 === 1;

            return (
              <li
                key={step.claim}
                // Fixed height on desktop: equal rows are what keep the nodes
                // aligned with the turns the route draws.
                className="flex min-h-[62vh] items-center md:h-[58vh] md:min-h-0"
              >
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    onRight
                      ? 'w-full pl-14 pr-6 md:ml-[46%] md:w-[40%] md:p-0 md:text-right'
                      : 'w-full pl-14 pr-6 md:ml-[14%] md:w-[40%] md:p-0'
                  }
                >
                  <p className="label mb-5">{String(i + 1).padStart(2, '0')}</p>

                  <p className="text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                    {step.claim}
                  </p>

                  <p className="mt-5 text-[clamp(1.05rem,1.8vw,1.5rem)] font-medium tracking-tight text-accent">
                    {step.answer}
                  </p>

                  <p
                    className={`mt-6 max-w-md text-sm leading-relaxed text-fg-2 md:text-base ${
                      onRight ? 'md:ml-auto' : ''
                    }`}
                  >
                    {step.note}
                  </p>

                  <Link
                    href={step.href}
                    target={step.href.startsWith('http') ? '_blank' : undefined}
                    rel={step.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fg-3 transition-colors duration-200 hover:text-fg"
                  >
                    {step.linkLabel}
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
