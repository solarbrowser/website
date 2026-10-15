'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Mode = 'system' | 'light' | 'dark';

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  /** Resolved light/dark, after applying the device preference. */
  theme: 'light' | 'dark';
}

const MODE_KEY = 'solar-mode';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Runs in <head> before first paint so there is no flash. System mode follows
 * the device's prefers-color-scheme; an old stored 'auto' counts as system.
 */
export const themeInitScript = `(function(){try{var m=localStorage.getItem('${MODE_KEY}');if(m!=='light'&&m!=='dark'){m='system'}var d=document.documentElement;d.setAttribute('data-mode',m);d.setAttribute('data-theme',m==='system'?(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):m)}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('system');
  const [systemLight, setSystemLight] = useState(false);

  useEffect(() => {
    const stored = document.documentElement.getAttribute('data-mode');
    setModeState(stored === 'light' || stored === 'dark' ? stored : 'system');

    const query = window.matchMedia('(prefers-color-scheme: light)');
    setSystemLight(query.matches);
    const onChange = (e: MediaQueryListEvent) => setSystemLight(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const theme: 'light' | 'dark' =
    mode === 'system' ? (systemLight ? 'light' : 'dark') : mode;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-mode', mode);
    root.setAttribute('data-theme', theme);
  }, [mode, theme]);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    try {
      localStorage.setItem(MODE_KEY, next);
    } catch {
      // Private mode can reject writes; the choice still applies this session.
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
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
