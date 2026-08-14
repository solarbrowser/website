import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'API',
  description: 'Extension and automation surfaces for Solar, once they are stable enough to depend on.',
  alternates: { canonical: '/api' },
};

export default function ApiPage() {
  return (
    <ComingSoon
      eyebrow="Developers / API"
      title="API"
      intro="Extension and automation surfaces for Solar, once they are stable enough to be worth depending on."
      body="The engine APIs are still moving week to week. A reference published now would document something that no longer exists by the time anyone builds against it. The source and the developer docs are the current answer."
      link={{ label: 'Extension docs', href: '/docs' }}
    />
  );
}
