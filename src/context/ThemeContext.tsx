'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Mode = 'auto' | 'light' | 'dark';
export type Band = 'dawn' | 'day' | 'dusk' | 'night';

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  /** Which time band auto is currently showing. */
  band: Band;
  /** Resolved light/dark, kept for components that only care about polarity. */
  theme: 'light' | 'dark';
}

const MODE_KEY = 'solar-mode';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function bandForHour(hour: number): Band {
  if (hour >= 5 && hour < 9) return 'dawn';
  if (hour >= 9 && hour < 17) return 'day';
  if (hour >= 17 && hour < 21) return 'dusk';
  return 'night';
}

function polarity(mode: Mode, band: Band): 'light' | 'dark' {
  if (mode === 'light') return 'light';
  if (mode === 'dark') return 'dark';
  return band === 'dawn' || band === 'day' ? 'light' : 'dark';
}

/**
 * Runs in <head> before first paint. The markup stays server-rendered while
 * the stored mode and the visitor's local hour are applied without a flash.
 * Kept deliberately terse -- it is inlined into every page.
 */
export const themeInitScript = `(function(){try{var m=localStorage.getItem('${MODE_KEY}');if(m!=='light'&&m!=='dark'&&m!=='auto'){m='auto'}var h=new Date().getHours();var b=h>=5&&h<9?'dawn':h>=9&&h<17?'day':h>=17&&h<21?'dusk':'night';var d=document.documentElement;d.setAttribute('data-mode',m);d.setAttribute('data-band',b);d.setAttribute('data-theme',m==='light'?'light':m==='dark'?'dark':(b==='dawn'||b==='day'?'light':'dark'))}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('auto');
  const [band, setBand] = useState<Band>('night');

  const apply = useCallback((nextMode: Mode, nextBand: Band) => {
    const root = document.documentElement;
    root.setAttribute('data-mode', nextMode);
    root.setAttribute('data-band', nextBand);
    root.setAttribute('data-theme', polarity(nextMode, nextBand));
  }, []);

  // Adopt whatever the pre-paint script decided, then keep the band honest as
  // the clock crosses a boundary while the tab stays open.
  useEffect(() => {
    const root = document.documentElement;
    const storedMode = root.getAttribute('data-mode') as Mode | null;
    const initialMode: Mode =
      storedMode === 'light' || storedMode === 'dark' || storedMode === 'auto'
        ? storedMode
        : 'auto';

    setModeState(initialMode);
    setBand(bandForHour(new Date().getHours()));

    const tick = window.setInterval(() => {
      setBand((prev) => {
        const next = bandForHour(new Date().getHours());
        return next === prev ? prev : next;
      });
    }, 60_000);

    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    apply(mode, band);
  }, [apply, mode, band]);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    try {
      localStorage.setItem(MODE_KEY, next);
    } catch {
      // Private mode can reject writes; the choice still applies this session.
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ mode, setMode, band, theme: polarity(mode, band) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
