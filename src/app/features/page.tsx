import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import CtaBlock from '@/components/CtaBlock';
import Rise from '@/components/Rise';

const features = [
  {
    title: 'Speed',
    tagline: 'Designed together, not accumulated',
    description:
      'Our next-generation architecture is built for the hardware people actually have, rather than retrofitted onto twenty years of compatibility debt. The compositor, the style system and the DOM were designed against each other instead of arriving one at a time.',
    // No sub-points here on purpose: specific speed claims belong next to a
    // benchmark, and there is no benchmark yet.
    points: [],
  },
  {
    title: 'Privacy',
    tagline: 'One number, and you can turn it off',
    description:
      'Solar collects exactly one thing: an anonymised ID, used only to produce two figures -- how many searches happen per day, and how many unique people use the browser. It can be switched off in settings. Nothing else is collected, nothing is ever sold, and your history never leaves the device unencrypted.',
    points: [
      'Anonymised usage ID, off-switch in settings',
      'Built-in tracker blocking',
      'No selling or sharing of data, ever',
      'Private browsing by default',
    ],
  },
  {
    title: 'Extensions',
    tagline: 'Yours, not a store’s',
    description:
      'Extensions written for other major browsers run here without a rewrite or a compatibility shim. Moving browsers should not mean abandoning the tools you have built your work around.',
    points: [
      'Compatible with extensions from other browsers',
      'Full API support for modern extensions',
      'May not work if the extension relies on something specific to that browser',
      'Enhanced security sandboxing',
    ],
  },
  {
    title: 'Sync',
    tagline: 'We cannot read it either',
    description:
      'Bookmarks, history, passwords and settings move between your machines sealed end to end. The keys never leave your devices, which means the sync server holds ciphertext and nothing else.',
    points: [
      'End-to-end encrypted synchronization',
      'Cross-platform across Windows, macOS and Linux',
      'Instant sync with conflict resolution',
      'Selective sync options',
    ],
  },
  {
    title: 'Customization',
    tagline: 'Configuration, not product decisions',
    description:
      'Themes, layout, keyboard shortcuts and gestures are configuration files rather than choices made for you. If a default annoys you, it should be a setting -- not a fork.',
    points: [
      'Custom themes and colour schemes',
      'Flexible layout options',
      'Personalized shortcuts',
      'Extension ecosystem',
    ],
  },
  {
    title: 'Memory',
    tagline: 'A hundred tabs should not cost a machine',
    description:
      'Our next-generation architecture aims to use 30% less memory, with more battery life.',
    points: [
      'Minimal memory footprint',
      'Optimized CPU usage',
      'Battery-friendly on laptops',
      'Efficient tab management',
    ],
  },
  {
    title: 'Control',
    tagline: 'Exposed instead of buried',
    description:
      'Per-site permissions, network rules and engine flags are reachable rather than hidden three menus deep behind a warning screen. Power users and developers get the same browser as everyone else, with the panels open.',
    points: [
      'Granular privacy controls',
      'Advanced developer tools',
      'Network inspection',
      'Performance profiling',
    ],
  },
];

export const metadata: Metadata = {
  title: 'What it does',
  description: 'Seven things Solar is being built to do. None of it has shipped yet -- this is the specification, not a changelog.',
  alternates: { canonical: '/features' },
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Product / Features"
        title="What it does"
        intro={`${features.length} things Solar is being built to do. None of it has shipped yet -- this is the specification, not a changelog.`}
        meta={[
          { label: 'Count', value: `${features.length}` },
          { label: 'Status', value: 'In development' },
        ]}
      />

      <div className="mx-auto w-full max-w-[110rem] px-6 md:px-16">
        <ol>
          {features.map((feature, i) => (
            <li key={feature.title} className="border-t border-line">
              <Rise as="article" className="grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-20">
                <div className="md:col-span-4">
                  <p className="label mb-4">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-base font-medium tracking-tight text-accent">
                    {feature.tagline}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <p className="max-w-2xl text-base leading-relaxed text-fg-2 md:text-lg">
                    {feature.description}
                  </p>

                  {feature.points.length > 0 && (
                    <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
                      {feature.points.map((point) => (
                        <li
                          key={point}
                          className="border-t border-line py-3 font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.1em] text-fg-3"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Rise>
            </li>
          ))}
        </ol>
      </div>

      <CtaBlock />
    </PageShell>
  );
}
