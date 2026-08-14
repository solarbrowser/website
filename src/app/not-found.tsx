import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const elsewhere = [
  { label: 'Home', href: '/' },
  { label: 'Download', href: '/download' },
  { label: 'Features', href: '/features' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Error / 404"
        title="Not found"
        intro="This page does not exist. It may never have, or it may have moved while the site was being rebuilt."
        meta={[{ label: 'Code', value: '404' }]}
      />

      <Section eyebrow="001 / Elsewhere" title="Try these">
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {elsewhere.map((item, i) => (
            <li
              key={item.href}
              className={i > 1 ? 'border-t border-line' : 'sm:border-t sm:border-line'}
            >
              <Link
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-baseline justify-between py-5"
              >
                <span className="text-xl font-semibold tracking-tight md:text-2xl">
                  {item.label}
                </span>
                <span
                  aria-hidden
                  className="text-fg-3 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                >
                  {item.href.startsWith('http') ? '↗' : '→'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
