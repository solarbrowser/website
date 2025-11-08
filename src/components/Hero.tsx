'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import WaitlistModal from './WaitlistModal';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const speedWords = ['Fast', 'Lightning-Quick', 'Optimized', 'Blazing'];
const securityWords = ['Secure', 'Private', 'Encrypted'];
const designWords = ['Beautifully minimal', 'Elegantly personal', 'Seamlessly yours', 'Tailored to you'];

const allWords = [
  ...speedWords,
  ...securityWords,
  ...designWords
];

export default function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allWords.length);
    }, 2000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-32"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10 text-white/80'
              : 'bg-[#F0EBE3] border-black/10 text-black/80'
          } border`}>
            <span className="relative flex h-2 w-2 mr-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme === 'dark' ? 'bg-[#FAF9F7]' : 'bg-black'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${theme === 'dark' ? 'bg-[#FAF9F7]' : 'bg-black'}`}></span>
            </span>
            Currently in Development
          </span>
        </motion.div>

        {/* Main Heading - Huge */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold mb-8 leading-none"
        >
          <span className={`block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>SOLAR</span>
          <span className={`block -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 ${theme === 'dark' ? 'text-white/10' : 'text-black/10'}`}>BROWSER</span>
        </motion.h1>

        {/* Rotating Subtitle with Effects */}
        <div className={`max-w-4xl mx-auto mb-12 flex flex-wrap items-center justify-center px-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
          <span className="text-sm sm:text-base md:text-xl lg:text-2xl">The future of web browsing.&nbsp;</span>
          
          {/* Single Word Slot - Otomatik boyutlandırma */}
          <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`inline-block ${
                  // Speed words - Yellow/Orange gradients
                  allWords[currentIndex] === 'Fast' ? 'bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent' :
                  allWords[currentIndex] === 'Lightning-Quick' ? 'bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent' :
                  allWords[currentIndex] === 'Optimized' ? 'bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent' :
                  allWords[currentIndex] === 'Blazing' ? 'bg-gradient-to-r from-orange-300 via-red-200 to-orange-300 bg-clip-text text-transparent' :
                  
                  // Security words - Green/Blue/Purple gradients
                  allWords[currentIndex] === 'Secure' ? 'bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 bg-clip-text text-transparent' :
                  allWords[currentIndex] === 'Private' ? 'bg-gradient-to-r from-purple-200 via-violet-200 to-purple-200 bg-clip-text text-transparent' :
                  allWords[currentIndex] === '*******' ? 'bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-wider' :
                  allWords[currentIndex] === 'Encrypted' ? 'bg-gradient-to-r from-green-300 via-teal-200 to-green-300 bg-clip-text text-transparent' :
                  
                  // Design words - Rainbow gradients
                  'bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent'
                }`}
              >
                {allWords[currentIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="text-sm sm:text-base md:text-xl lg:text-2xl">.</span>
          </span>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className={`group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 ${
              theme === 'dark'
                ? 'bg-[#FAF9F7] text-black'
                : 'bg-black text-white'
            }`}
          >
            <span className="relative z-10">Join Waitlist</span>
            <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
              theme === 'dark' ? 'bg-black/10' : 'bg-white/10'
            }`}></div>
          </button>
          
          <Link 
            href="/support"
            className={`group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                : 'bg-[#F0EBE3] border-black/10 text-black hover:bg-[#E4DED4]'
            }`}
          >
            <span className="relative z-10">Support Us ❤️</span>
          </Link>
        </motion.div>

        {/* Waitlist Modal */}
        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}
          >
            ↓ Scroll
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}






