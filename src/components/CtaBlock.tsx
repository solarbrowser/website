'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useWaitlist } from './WaitlistProvider';

interface CtaBlockProps {
  title?: string;
  note?: string;
}

/**
 * The closing note shared by sub-pages. Same shape as the homepage outro so
 * the site ends the same way wherever you are.
 */
export default function CtaBlock({
  title = 'Get it first',
  note = 'One email, once -- on the day the first build is downloadable.',
}: CtaBlockProps) {
  const { open } = useWaitlist();
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-[110rem] border-t border-line px-6 py-20 md:px-16 md:py-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16"
      >
        <h2 className="display max-w-[12ch] text-[clamp(2.5rem,9vw,7rem)] leading-[0.85]">
          {title}
        </h2>

        <div className="shrink-0 md:text-right">
          <button
            type="button"
            onClick={open}
            className="group text-[clamp(1.3rem,2.6vw,2rem)] font-medium leading-none tracking-[-0.02em] text-accent transition-opacity duration-200 hover:opacity-70"
          >
            Join the waitlist
            <span
              aria-hidden
              className="ml-3 inline-block transition-transform duration-200 group-hover:translate-x-2"
            >
              →
            </span>
          </button>
          <p className="label mt-4 max-w-xs md:ml-auto">{note}</p>
        </div>
      </motion.div>
    </section>
  );
}
