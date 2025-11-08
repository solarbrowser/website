'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex items-center justify-center px-6 ${
      theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-white text-[#1a1a1a]'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Giant 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className={`text-[12rem] sm:text-[16rem] md:text-[20rem] font-bold leading-none select-none ${
            theme === 'dark' ? 'text-white/10' : 'text-black/10'
          }`}>
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="-mt-32 sm:-mt-48 md:-mt-64 mb-12"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Page Not Found
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}>
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void. 
            It might have been moved, deleted, or perhaps it never existed.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/"
            className={`group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 ${
              theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            <span className="relative z-10">Go Home</span>
            <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
              theme === 'dark' ? 'bg-black/10' : 'bg-white/10'
            }`}></div>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className={`group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                : 'bg-[#FFF3DA] border-black/10 text-black hover:bg-[#FFFAED]'
            }`}
          >
            <span className="relative z-10">Go Back</span>
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={`mt-16 pt-8 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <p className={`mb-4 text-sm ${
            theme === 'dark' ? 'text-white/40' : 'text-black/40'
          }`}>Maybe you were looking for:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/features" className={`transition-colors underline ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}>
              Features
            </Link>
            <span className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}>•</span>
            <Link href="/privacy-policy" className={`transition-colors underline ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}>
              Privacy Policy
            </Link>
            <span className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}>•</span>
            <Link href="/terms-of-use" className={`transition-colors underline ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}>
              Terms of Service
            </Link>
            <span className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}>•</span>
            <Link href="/cookie-policy" className={`transition-colors underline ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}>
              Cookie Policy
            </Link>
          </div>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}


