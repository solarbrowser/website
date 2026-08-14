import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const platforms = [
  {
    name: 'Buy Me a Coffee',
    description: 'A one-time amount, no account needed.',
    href: 'https://buymeacoffee.com/solarbrowser',
    action: 'Donate',
  },
];

const free = [
  {
    name: 'Star the repository',
    description: 'It costs nothing and it is how most people find the project.',
    href: 'https://github.com/solarbrowser',
  },
  {
    name: 'Report what breaks',
    description: 'A precise bug report is worth more than most donations.',
    href: 'https://github.com/solarbrowser',
  },
  {
    name: 'Tell someone',
    description: 'A browser with no users is a hobby. Word of mouth is the whole marketing budget.',
    href: 'https://x.com/solarbrowser',
  },
];

export const metadata: Metadata = {
  title: 'Support us',
  description: 'Solar has no advertising business and no investor. What pays for it is people who want it to exist.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project / Support"
        title="Support us"
        intro="Solar has no advertising business and no investor. What pays for it is people who want it to exist."
      />

      <Section eyebrow="001 / Why" title="Where it goes">
        <div className="grid max-w-4xl gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Staying independent
            </h3>
            <p className="text-sm leading-relaxed text-fg-2 md:text-base">
              The reason Solar can keep collection down to a single anonymised
              counter is that no part of the project depends on knowing what you
              browse. Donations are what keep that true -- the moment the money
              has to come from somewhere else, the promise gets harder to keep.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Time on the engine
            </h3>
            <p className="text-sm leading-relaxed text-fg-2 md:text-base">
              Writing a rendering engine and a JavaScript runtime is a lot of
              hours. Support translates directly into more of them going into
              Solar instead of into unrelated work.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="002 / Money" title="Ways to give">
        <ul>
          {platforms.map((platform, i) => (
            <li key={platform.name} className={i !== 0 ? 'border-t border-line' : ''}>
              <Link
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-4 py-6"
              >
                <span className="flex-1">
                  <span className="block text-2xl font-semibold tracking-tight md:text-3xl">
                    {platform.name}
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-fg-2">
                    {platform.description}
                  </span>
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent transition-opacity duration-200 group-hover:opacity-70">
                  {platform.action}
                  <span aria-hidden className="ml-2 inline-block">
                    ↗
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="003 / Free" title="Without money">
        <ul>
          {free.map((item, i) => (
            <li key={item.name} className={i !== 0 ? 'border-t border-line' : ''}>
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-4 py-6"
              >
                <span className="flex-1">
                  <span className="block text-xl font-semibold tracking-tight md:text-2xl">
                    {item.name}
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-fg-2">
                    {item.description}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-fg-3 transition-all duration-200 group-hover:translate-x-1 group-hover:text-fg"
                >
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="004 / Supporters" title="Who has">
        <p className="text-sm leading-relaxed text-fg-2 md:text-base">
          Nobody yet. This list fills in as people appear on it -- be the first
          and it will say your name instead of this sentence.
        </p>
      </Section>
    </PageShell>
  );
}
