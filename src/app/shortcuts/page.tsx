'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistModal from '@/components/WaitlistModal';
import { useTheme } from '@/context/ThemeContext';

export default function ShortcutsPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen py-24 px-6 ${theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-[#FAF9F7] text-[#1a1a1a]'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Keyboard Shortcuts</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Navigate Solar like a pro. Master keyboard shortcuts for maximum productivity.
          </p>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-lg p-12 text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="mb-6">
            <svg className="w-24 h-24 mx-auto text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Keyboard Shortcuts Coming Soon</h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            This page will be updated with complete keyboard shortcuts reference once our alpha release is ready. Join the waitlist to be notified.
          </p>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="group relative px-8 py-4 bg-[#FAF9F7] text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">Join Waitlist for Early Access</span>
            <div className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </motion.div>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}








