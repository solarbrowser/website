import Link from 'next/link';
import type { ReactNode } from 'react';
import PageShell from './PageShell';
import PageHeader from './PageHeader';
import Prose from './Prose';

const documents = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms of use', href: '/terms-of-use' },
  { label: 'Cookie policy', href: '/cookie-policy' },
];

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  href: string;
  children: ReactNode;
}

export default function LegalPage({
  title,
  updated,
  intro,
  href,
  children,
}: LegalPageProps) {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title={title}
        intro={intro}
        meta={[{ label: 'Updated', value: updated }]}
      />

      <section className="mx-auto w-full max-w-[110rem] border-t border-line px-6 py-16 md:px-16 md:py-24">
        <Prose>{children}</Prose>
      </section>

      <section className="mx-auto w-full max-w-[110rem] border-t border-line px-6 py-12 md:px-16 md:py-16">
        <p className="label mb-6">Related documents</p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3">
          {documents
            .filter((doc) => doc.href !== href)
            .map((doc) => (
              <li key={doc.href}>
                <Link
                  href={doc.href}
                  className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fg-2 transition-colors duration-200 hover:text-accent"
                >
                  {doc.label}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </PageShell>
  );
}
