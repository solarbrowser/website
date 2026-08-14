'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import WaitlistModal from '@/components/WaitlistModal';

interface WaitlistContextType {
  open: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

/**
 * One modal instance per page. Anything below can open it without threading a
 * callback through every component.
 */
export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={close} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
}
