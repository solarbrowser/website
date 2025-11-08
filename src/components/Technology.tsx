'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Technology() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32 px-6">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Huge Text */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-12 sm:mb-16">
          <span className={`block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>BUILT</span>
          <span className={`block ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>WITH CARE</span>
        </h2>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={`text-xs sm:text-sm mb-2 font-mono ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>01</div>
            <h3 className={`text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Solar Engine</h3>
            <p className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
              Our proprietary rendering engine built from the ground up for maximum performance and efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`text-xs sm:text-sm mb-2 font-mono ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>02</div>
            <h3 className={`text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Quanta JavaScript</h3>
            <p className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
              Next-generation JavaScript engine that executes code faster than ever before.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}





