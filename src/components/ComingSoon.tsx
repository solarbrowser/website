'use client';

import Link from 'next/link';
import PageShell from './PageShell';
import PageHeader from './PageHeader';
import Section from './Section';
import CtaBlock from './CtaBlock';

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  intro: string;
  /** What will land here, stated plainly rather than as a teaser. */
  body: string;
  /** Where the information already exists today, if anywhere. */
  link?: { label: string; href: string };
}

/**
 * Several pages exist only to hold a place until the first build ships.
 * They were three copies of the same markup; this is the one copy.
 */
export default function ComingSoon({
  eyebrow,
  title,
  intro,
  body,
  link,
}: ComingSoonProps) {
  return (
    <PageShell>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        meta={[{ label: 'Status', value: 'Not written yet' }]}
      />

      <Section eyebrow="001 / Status" title="Nothing here yet">
        <p className="max-w-xl text-sm leading-relaxed text-fg-2 md:text-base">
          {body}
        </p>

        {link && (
          <Link
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group mt-8 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              {link.href.startsWith('http') ? '↗' : '→'}
            </span>
          </Link>
        )}
      </Section>

      <CtaBlock title="Tell me when it lands" />
    </PageShell>
  );
}
