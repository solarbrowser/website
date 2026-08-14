import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Customize',
  description: 'Layout, tabs, shortcuts and themes are meant to be configuration in Solar, not fixed product decisions.',
  alternates: { canonical: '/customize' },
};

export default function CustomizePage() {
  return (
    <ComingSoon
      eyebrow="Product / Customization"
      title="Customize"
      intro="Layout, tabs, shortcuts and themes are meant to be configuration here -- not product decisions you have to live with."
      body="The full reference lands when the first alpha does, because writing it before the settings are stable would only mean writing it twice."
      link={{ label: 'Docs', href: '/docs' }}
    />
  );
}
