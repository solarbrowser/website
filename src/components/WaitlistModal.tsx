'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [nums, setNums] = useState({ a: 0, b: 0 });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    openerRef.current = document.activeElement as HTMLElement;
    setNums({
      a: Math.floor(Math.random() * 9) + 1,
      b: Math.floor(Math.random() * 9) + 1,
    });
    setCaptcha('');
    setEmail('');
    setStatus('idle');
    setMessage('');
    setHasSubmitted(document.cookie.includes('solar_waitlist=true'));

    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => emailRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = '';
      window.clearTimeout(focusTimer);
      openerRef.current?.focus();
    };
  }, [isOpen]);

  // Escape closes; Tab is kept inside the dialog.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hasSubmitted) {
      setStatus('error');
      setMessage('You are already on the list.');
      return;
    }

    if (parseInt(captcha, 10) !== nums.a + nums.b) {
      setStatus('error');
      setMessage('That answer is not right. Try again.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xdkzvrwj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
        return;
      }

      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 365);
      document.cookie = `solar_waitlist=true; expires=${expiry.toUTCString()}; path=/`;

      setHasSubmitted(true);
      setStatus('success');
    } catch {
      setStatus('error');
      setMessage('Network error. Check your connection.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/85 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg border border-line-strong bg-bg p-7 sm:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="label mb-3">Early access</p>
                <h2
                  id="waitlist-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Join the waitlist
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="shrink-0 border border-line p-2 text-fg-2 transition-colors duration-200 hover:border-line-strong hover:text-fg"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <path
                    d="M2 2l10 10M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {status === 'success' || hasSubmitted ? (
              <div className="border-t border-line pt-8">
                <p className="mb-2 text-lg font-medium">
                  <span className="text-accent">◆</span> You are on the list.
                </p>
                <p className="text-sm leading-relaxed text-fg-2">
                  We will email you once, when the first build is ready. Nothing
                  before that.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 w-full border border-fg bg-fg py-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-bg transition-colors duration-200 hover:bg-transparent hover:text-fg"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border-t border-line pt-8">
                <label htmlFor="waitlist-email" className="label mb-3 block">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mb-7 w-full border-b border-line-strong bg-transparent pb-3 text-lg text-fg outline-none transition-colors duration-200 placeholder:text-fg-3 focus:border-accent"
                />

                <label htmlFor="waitlist-captcha" className="label mb-3 block">
                  Verify — what is {nums.a} + {nums.b}?
                </label>
                <input
                  id="waitlist-captcha"
                  type="text"
                  inputMode="numeric"
                  required
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  placeholder="Answer"
                  className="w-full border-b border-line-strong bg-transparent pb-3 text-lg text-fg outline-none transition-colors duration-200 placeholder:text-fg-3 focus:border-accent"
                />

                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-5 min-h-[1.25rem] text-sm ${
                    status === 'error' ? 'text-accent' : 'text-fg-2'
                  }`}
                >
                  {status === 'error' ? message : ''}
                </p>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-4 w-full border border-fg bg-fg py-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-bg transition-colors duration-200 hover:bg-transparent hover:text-fg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending…' : 'Join the waitlist'}
                </button>

                <p className="mt-5 text-xs leading-relaxed text-fg-3">
                  One email, once. No newsletter, no sharing, no tracking pixel.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
