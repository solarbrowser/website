import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Docs',
  description: 'There is no browser to document yet. Quanta, the JavaScript engine, keeps its own reference.',
  alternates: { canonical: '/docs' },
};

export default function DocsPage() {
  return (
    <ComingSoon
      eyebrow="Developers / Docs"
      title="Docs"
      intro="There is no browser to document yet, so there is nothing to read here."
      body="Documentation written before the thing it describes exists is documentation you write twice, and the second version contradicts the first. It gets written when there is a build to write it against. Quanta, the JavaScript engine, is further along and keeps its own reference."
      link={{ label: 'Quanta docs', href: 'https://quanta.js.org/docen/' }}
    />
  );
}
