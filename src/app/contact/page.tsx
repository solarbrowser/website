import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';

const channels = [
  {
    title: 'General',
    detail: 'Questions, feedback, anything that is not a bug.',
    action: 'support@browser.solar',
    href: 'mailto:support@browser.solar',
  },
  {
    title: 'Bugs',
    detail: 'Open an issue so it is public and tracked. Email gets lost.',
    action: 'GitHub issues',
    href: 'https://github.com/solarbrowser',
  },
  {
    title: 'Press',
    detail: 'Interviews, coverage, assets.',
    action: 'support@browser.solar',
    href: 'mailto:support@browser.solar',
  },
];

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the Solar team: general questions, bug reports and press.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project / Contact"
        title="Contact"
        intro="A small team reads everything that comes in. Replies are not instant, but they do happen."
      />

      <Section eyebrow="001 / Channels" title="Where to write">
        <ul>
          {channels.map((channel, i) => (
            <li key={channel.title} className={i !== 0 ? 'border-t border-line' : ''}>
              <Link
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex flex-wrap items-baseline justify-between gap-4 py-6"
              >
                <span className="flex-1">
                  <span className="block text-2xl font-semibold tracking-tight md:text-3xl">
                    {channel.title}
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-fg-2">
                    {channel.detail}
                  </span>
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent transition-opacity duration-200 group-hover:opacity-70">
                  {channel.action}
                  <span aria-hidden className="ml-2 inline-block">
                    {channel.href.startsWith('http') ? '↗' : '→'}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock title="Or just wait for it" />
    </PageShell>
  );
}
