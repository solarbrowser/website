import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';

const platforms = [
  { name: 'Windows', detail: 'x64 · ARM64', status: 'Planned' },
  { name: 'macOS', detail: 'Apple silicon · Intel', status: 'Planned' },
  { name: 'Linux', detail: 'AppImage · deb · rpm', status: 'Planned' },
];

export const metadata: Metadata = {
  title: 'Download',
  description: 'Solar has not shipped a build yet. Download links appear here when the first alpha is ready.',
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Product / Download"
        title="Download"
        intro="Solar has not shipped a build yet. Nothing on this page is downloadable -- the links appear here the day the first alpha is ready."
        meta={[{ label: 'Status', value: 'In development' }]}
      />

      <Section eyebrow="001 / Targets" title="Platforms">
        <ul>
          {platforms.map((platform, i) => (
            <li
              key={platform.name}
              className={`flex flex-wrap items-baseline justify-between gap-4 py-6 ${
                i !== 0 ? 'border-t border-line' : ''
              }`}
            >
              <span>
                <span className="block text-2xl font-semibold tracking-tight md:text-3xl">
                  {platform.name}
                </span>
                <span className="mt-1 block text-sm text-fg-2">
                  {platform.detail}
                </span>
              </span>
              <span className="label">{platform.status}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        title="Tell me when it ships"
        note="One email, once. That is the only thing the waitlist is for."
      />
    </PageShell>
  );
}
