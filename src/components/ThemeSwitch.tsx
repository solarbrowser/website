'use client';

import { useTheme, type Mode } from '@/context/ThemeContext';

const modes: { value: Mode; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

/**
 * Three flat words, no chrome. System is the default and follows the device preference;
 * the other two pin the palette.
 */
export default function ThemeSwitch({ className = '' }: { className?: string }) {
  const { mode, setMode } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Colour mode"
      className={`flex items-center gap-4 ${className}`}
    >
      {modes.map((item) => {
        const active = mode === item.value;
        return (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setMode(item.value)}
            className={`font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors duration-200 ${
              active ? 'text-accent' : 'text-fg-3 hover:text-fg'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
