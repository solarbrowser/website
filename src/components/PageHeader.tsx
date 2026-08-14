'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface PageHeaderProps {
  /** Small mono eyebrow, e.g. "Project / Team". */
  eyebrow: string;
  title: string;
  intro?: string;
  /** Optional right-hand metadata, set small like the homepage clock. */
  meta?: { label: string; value: string }[];
}

/**
 * Sub-page equivalent of the homepage specimen: one word or phrase at full
 * width, everything else set small and placed. No boxes.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: PageHeaderProps) {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <header className="mx-auto w-full max-w-[110rem] px-6 pb-16 pt-10 md:px-16 md:pb-28 md:pt-16">
      <motion.p {...rise(0.05)} className="label mb-14 md:mb-24">
        {eyebrow}
      </motion.p>

      <motion.h1
        {...rise(0.15)}
        className="display max-w-[14ch] text-[clamp(2.75rem,11vw,9rem)] leading-[0.85]"
      >
        {title}
      </motion.h1>

      {(intro || meta) && (
        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between md:gap-16">
          {intro && (
            <motion.p
              {...rise(0.3)}
              className="max-w-xl text-[clamp(1.1rem,2vw,1.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-fg-2"
            >
              {intro}
            </motion.p>
          )}

          {meta && meta.length > 0 && (
            <motion.dl {...rise(0.4)} className="shrink-0 space-y-2 md:text-right">
              {meta.map((item) => (
                <div key={item.label} className="flex gap-3 md:justify-end">
                  <dt className="label">{item.label}</dt>
                  <dd className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      )}
    </header>
  );
}
