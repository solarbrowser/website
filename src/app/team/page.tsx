import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';

const team = [
  {
    name: 'ataturkcu',
    role: 'Lead',
    avatar: 'https://github.com/ataturkcu.png',
    github: 'https://github.com/ataturkcu',
  },
];

/**
 * Listed separately and labelled plainly. Crediting the tooling is the honest
 * thing to do, but it does not belong in a list of people.
 */
const robots = [
  {
    name: 'Claude',
    maker: 'Anthropic',
    role: 'Quanta -- design review and implementation',
    note: 'The architecture is ours, but it was argued into shape: we brought designs, Claude found the holes, we pushed back and went and read how the other engines actually do it. Claude then wrote a large share of the engine against the result. Saying so costs nothing and hiding it would be a lie.',
    href: 'https://claude.ai',
  },
];

export const metadata: Metadata = {
  title: 'Team',
  description: 'The people building Solar, and the tooling that helped -- listed rather than hidden.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project / Team"
        title="Team"
        intro="Solar is built by a small group in the open. Everyone listed here has code in the repository -- including the tooling, which we list rather than hide."
        meta={[
          { label: 'People', value: `${team.length}` },
          { label: 'Robots', value: `${robots.length}` },
        ]}
      />

      <Section eyebrow="001 / People" title="Who builds it">
        <ul>
          {team.map((member, i) => (
            <li key={member.name} className={i !== 0 ? 'border-t border-line' : ''}>
              <Link
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-6 py-6"
              >
                <Image
                  src={member.avatar}
                  alt=""
                  width={72}
                  height={72}
                  unoptimized
                  className="h-16 w-16 shrink-0 rounded-full object-cover md:h-[72px] md:w-[72px]"
                />
                <span className="flex-1">
                  <span className="block text-2xl font-semibold tracking-tight md:text-3xl">
                    {member.name}
                  </span>
                  <span className="mt-1 block text-sm text-fg-2">{member.role}</span>
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

      <Section eyebrow="002 / Robots" title="What helped">
        <ul>
          {robots.map((robot, i) => (
            <li
              key={robot.name}
              className={`flex items-start gap-6 py-6 ${
                i !== 0 ? 'border-t border-line' : ''
              }`}
            >
              {/* A typographic monogram rather than a borrowed logo. */}
              <span
                aria-hidden
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-lg text-fg-3 md:h-[72px] md:w-[72px]"
              >
                {robot.name.slice(0, 2).toUpperCase()}
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <Link
                    href={robot.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group text-2xl font-semibold tracking-tight transition-colors duration-200 hover:text-accent md:text-3xl"
                  >
                    {robot.name}
                    <span
                      aria-hidden
                      className="ml-2 inline-block text-fg-3 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </Link>
                  <span className="label">by {robot.maker}</span>
                </div>

                <p className="mt-1 text-sm text-fg-2">{robot.role}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-2">
                  {robot.note}
                </p>

                <Link
                  href="/letter"
                  target="_blank"
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent transition-opacity duration-200 hover:opacity-70"
                >
                  Message from the developer
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="003 / Contributing" title="Join in">
        <p className="max-w-xl text-sm leading-relaxed text-fg-2 md:text-base">
          The engine, the runtime and this site are all public. Issues, patches
          and hard questions are all welcome -- there is no contributor agreement
          to sign and no gatekeeping beyond code review.
        </p>
        <Link
          href="https://github.com/solarbrowser"
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent transition-opacity duration-200 hover:opacity-70"
        >
          Solar on GitHub
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            ↗
          </span>
        </Link>
      </Section>

      <CtaBlock />
    </PageShell>
  );
}
