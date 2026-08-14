import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Shortcuts',
  description: 'Every binding in Solar is meant to be remappable, including the ones other browsers hardcode.',
  alternates: { canonical: '/shortcuts' },
};

export default function ShortcutsPage() {
  return (
    <ComingSoon
      eyebrow="Product / Shortcuts"
      title="Shortcuts"
      intro="Every binding is meant to be remappable, including the ones other browsers hardcode."
      body="The full keymap is published once the bindings stop moving. Publishing it now would mean a reference that is wrong within a week."
      link={{
        label: 'Customization docs',
        href: '/docs',
      }}
    />
  );
}
