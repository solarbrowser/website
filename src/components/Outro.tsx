'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Where the flow arrow lands: the argument resolves into the product.
 */
export default function Outro({ onWaitlist }: { onWaitlist: () => void }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-[110rem] px-6 pb-32 pt-8 md:px-16 md:pb-48">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="label mb-10">So --</p>

        <h2 className="display text-[clamp(4rem,26vw,22rem)] leading-[0.8]">
          Solar
        </h2>

        <div className="mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-end md:justify-between md:gap-16">
          <p className="max-w-xl text-[clamp(1.4rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em]">
            A browser that&apos;s actually yours.
          </p>

          <div className="shrink-0 md:text-right">
            <button
              type="button"
              onClick={onWaitlist}
              className="group text-[clamp(1.4rem,3vw,2.4rem)] font-medium leading-none tracking-[-0.02em] text-accent transition-opacity duration-200 hover:opacity-70"
            >
              Join the waitlist
              <span
                aria-hidden
                className="ml-3 inline-block transition-transform duration-200 group-hover:translate-x-2"
              >
                →
              </span>
            </button>
            <p className="label mt-4">One email, once. Nothing else.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
