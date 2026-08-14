'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

/**
 * Scroll reveal that cannot leave content invisible.
 *
 * The obvious implementation — render at opacity 0 and wait for an
 * IntersectionObserver — has a failure mode that actually bit us: if the
 * element is already past the trigger point when the observer attaches (fast
 * scroll during hydration, a restored scroll position, a client-side
 * navigation), the "entered view" event never fires and the block stays
 * invisible forever. That is how the first feature on /features disappeared
 * until a hard reload.
 *
 * So the default is visible. An element is hidden only once we have measured
 * it below the fold and therefore know an observer can still un-hide it.
 * Server HTML is visible too, which means the page reads fine with no JS.
 */

// useLayoutEffect warns during SSR; the effect only ever matters on the client.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Rise({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  /** Rendered tag. Kept loose so callers can keep their semantics. */
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Anything at or above the fold is left alone — it is already being read.
    const belowFold = el.getBoundingClientRect().top > window.innerHeight * 0.9;
    if (!belowFold) return;

    setHidden(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? 'translateY(24px)' : 'none',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </Tag>
  );
}
