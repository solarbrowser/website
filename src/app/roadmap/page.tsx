import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Rise from '@/components/Rise';
import PageHeader from '@/components/PageHeader';
import CtaBlock from '@/components/CtaBlock';

type Status = 'done' | 'active' | 'planned';

const milestones: {
  phase: string;
  title: string;
  period: string;
  status: Status;
  items: string[];
}[] = [
  {
    phase: 'Phase 1',
    title: 'The beginning',
    period: 'H2 2024',
    status: 'done',
    items: [
      'Initial concept and planning',
      'Core team formation',
      'Technology stack selection',
      'Brand identity creation',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Prototype',
    period: 'H1 2025',
    status: 'done',
    items: [
      'First working prototype',
      'UI and design system',
      'Basic navigation features',
      'Foundation architecture',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Engine development',
    period: 'H2 2025 -- present',
    status: 'active',
    items: ['JavaScript engine development', 'Layout engine development'],
  },
  {
    phase: 'Phase 4',
    title: 'Alpha release',
    period: 'H1 2027',
    status: 'planned',
    items: [
      'Internal testing program',
      'Core features implementation',
      'Security audits',
      'Bug fixes and stability',
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Beta launch',
    period: 'H2 2027',
    status: 'planned',
    items: [
      'Public beta release',
      'Community feedback integration',
      'Cross-platform support',
      'Extension store',
      'Marketing campaign',
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Official release',
    period: 'H1 2028',
    status: 'planned',
    items: ['Stable release for all platforms', 'Sync features rollout'],
  },
];

const statusCopy: Record<Status, string> = {
  done: 'Done',
  active: 'In progress',
  planned: 'Planned',
};

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Where the work on Solar actually is. Dates are intentions rather than commitments.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapPage() {
  const active = milestones.find((m) => m.status === 'active');

  return (
    <PageShell>
      <PageHeader
        eyebrow="Project / Roadmap"
        title="Roadmap"
        intro="Where the work actually is. Dates are intentions rather than commitments -- an engine takes as long as it takes."
        meta={[
          { label: 'Now', value: active ? active.phase : '--' },
          { label: 'Phases', value: `${milestones.length}` },
        ]}
      />

      <div className="mx-auto w-full max-w-[110rem] px-6 md:px-16">
        <ol>
          {milestones.map((milestone, i) => (
            <li key={milestone.phase} className="border-t border-line">
              <Rise
                as="article"
                className="grid gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-16"
              >
                <div className="md:col-span-4">
                  <div className="mb-4 flex items-center gap-3">
                    <p className="label">{String(i + 1).padStart(2, '0')}</p>
                    <p
                      className={`font-mono text-[0.6875rem] uppercase tracking-[0.14em] ${
                        milestone.status === 'active'
                          ? 'text-accent'
                          : milestone.status === 'done'
                            ? 'text-fg-2'
                            : 'text-fg-3'
                      }`}
                    >
                      {statusCopy[milestone.status]}
                    </p>
                  </div>

                  <h2
                    className={`text-3xl font-semibold tracking-tight md:text-4xl ${
                      milestone.status === 'planned' ? 'text-fg-3' : ''
                    }`}
                  >
                    {milestone.title}
                  </h2>
                  <p className="label mt-3">{milestone.period}</p>
                </div>

                <ul className="md:col-span-8">
                  {milestone.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 border-t border-line py-4 first:border-t-0 md:first:border-t"
                    >
                      <span
                        aria-hidden
                        className={
                          milestone.status === 'done' ? 'text-accent' : 'text-fg-3'
                        }
                      >
                        {milestone.status === 'done' ? '✓' : '--'}
                      </span>
                      <span
                        className={`text-sm leading-relaxed md:text-base ${
                          milestone.status === 'planned' ? 'text-fg-3' : 'text-fg-2'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Rise>
            </li>
          ))}
        </ol>
      </div>

      <CtaBlock title="Follow along" />
    </PageShell>
  );
}
