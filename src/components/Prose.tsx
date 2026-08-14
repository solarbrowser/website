import type { ReactNode } from 'react';

/**
 * Long-form text (the legal pages, mostly). Styles are applied by element via
 * arbitrary variants so the page bodies stay clean markup instead of a class
 * soup repeated on every paragraph.
 */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-3xl text-fg-2
        [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fg md:[&_h2]:text-2xl
        [&_h2:first-child]:mt-0
        [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-fg
        [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed md:[&_p]:text-base
        [&_ul]:mb-5 [&_ul]:space-y-2
        [&_li]:relative [&_li]:pl-5 [&_li]:text-sm [&_li]:leading-relaxed md:[&_li]:text-base
        [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-accent [&_li]:before:content-['--']
        [&_a]:text-fg [&_a]:underline [&_a]:decoration-line-strong [&_a]:underline-offset-4 hover:[&_a]:decoration-accent
        [&_strong]:font-semibold [&_strong]:text-fg
        [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-accent
      "
    >
      {children}
    </div>
  );
}
