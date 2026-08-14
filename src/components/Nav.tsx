'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

const links = [
  { label: 'Download', href: '/download' },
  { label: 'Features', href: '/features' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Docs', href: '/docs' },
  { label: 'Team', href: '/team' },
  { label: 'Support us', href: '/support' },
];

/**
 * Sticky, but with the page's own ground and no rule or blur -- so it reads as
 * type on the page rather than as a bar sitting on top of it.
 */
export default function Nav({ onWaitlist }: { onWaitlist: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-5 md:px-16 md:py-7">
        <Link href="/" className="flex items-center gap-3" aria-label="Solar Browser, home">
          <Image src="/logo.svg" alt="" width={28} height={17} className="h-4 w-auto" priority />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em]">
            Solar
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-8 md:flex">
          <ThemeSwitch />
          <button
            type="button"
            onClick={onWaitlist}
            className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent transition-opacity duration-200 hover:opacity-70"
          >
            Join waitlist →
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="v3-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="label md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="v3-mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-bg md:hidden"
          >
            <nav aria-label="Mobile" className="px-6 pb-8 pt-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-3xl font-semibold tracking-tight"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onWaitlist();
                }}
                className="mt-4 block py-2.5 text-3xl font-semibold tracking-tight text-accent"
              >
                Join waitlist →
              </button>

              <ThemeSwitch className="mt-8" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
