import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Import',
  description: 'Bringing bookmarks, history and passwords into Solar.',
  alternates: { canonical: '/import' },
};

export default function ImportPage() {
  return (
    <ComingSoon
      eyebrow="Product / Migration"
      title="Import"
      intro="Bookmarks, history and passwords should move with you. Leaving a browser is the part everyone underestimates."
      body="The import tools ship with the first alpha, alongside a guide per browser. Until there is a build to import into, there is nothing to document here."
      link={{
        label: 'Migration docs',
        href: '/docs',
      }}
    />
  );
}
