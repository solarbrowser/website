'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const bandCopy: Record<string, string> = {
  dawn: 'Dawn palette',
  day: 'Day palette',
  dusk: 'Dusk palette',
  night: 'Night palette',
};

/**
 * A type specimen, not a hero card: one word at full width, the rest of the
 * information set small and placed rather than boxed. No borders, no panels,
 * no fills -- hierarchy comes only from size and position.
 */
export default function Hero() {
  const { mode, band } = useTheme();
  const reduceMotion = useReducedMotion();
  const [clock, setClock] = useState<string | null>(null);

  // Rendered only after mount: the server has no idea what time it is here.
  useEffect(() => {
    const read = () =>
      setClock(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    read();
    const tick = window.setInterval(read, 30_000);
    return () => window.clearInterval(tick);
  }, []);

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="mx-auto w-full max-w-[110rem] px-6 pb-24 pt-10 md:px-16 md:pb-40 md:pt-16">
      <motion.p {...rise(0.05)} className="label mb-16 md:mb-28">
        In development
      </motion.p>

      <motion.h1
        {...rise(0.15)}
        className="display flex flex-wrap items-baseline gap-x-[0.12em] text-[clamp(3.5rem,22vw,19rem)] leading-[0.8]"
      >
        Solar
        <span className="text-[0.18em] font-medium tracking-[0.1em] text-fg-3">
          browser
        </span>
      </motion.h1>

      <div className="mt-16 flex flex-col gap-12 md:mt-24 md:flex-row md:items-end md:justify-between md:gap-16">
        <motion.p
          {...rise(0.35)}
          className="max-w-xl text-[clamp(1.4rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em]"
        >
          A browser built from the ground up on today&apos;s standards.
        </motion.p>

        <motion.div {...rise(0.5)} className="shrink-0 md:text-right">
          <p className="label mb-2">
            {clock ? `${clock} local` : 'Local time'}
          </p>
          <p className="label">
            {mode === 'auto'
              ? bandCopy[band]
              : `${mode === 'light' ? 'Light' : 'Dark'} palette -- pinned`}
          </p>
        </motion.div>
      </div>

      {/* The arrow nudges rather than bounces: enough motion to read as
          "scroll", not enough to pull the eye away from the type. */}
      <motion.p {...rise(0.65)} className="label mt-20 md:mt-32">
        <motion.span
          aria-hidden
          className="mr-2 inline-block"
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 0.6,
          }}
        >
          ↓
        </motion.span>
        Five reasons
      </motion.p>
    </section>
  );
}
