import type { ReactNode } from 'react';

interface SectionProps {
  /** Mono index/eyebrow shown in the left column on wide screens. */
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * The one layout sub-pages share: a narrow mono column on the left, content on
 * the right. Rules are hairlines only -- nothing here is a card.
 */
export default function Section({
  eyebrow,
  title,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-[110rem] border-t border-line px-6 py-16 md:px-16 md:py-24 ${className}`}
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        {(eyebrow || title) && (
          <div className="md:col-span-3">
            {eyebrow && <p className="label mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight md:sticky md:top-28 md:text-3xl">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={eyebrow || title ? 'md:col-span-9' : 'md:col-span-12'}>
          {children}
        </div>
      </div>
    </section>
  );
}
