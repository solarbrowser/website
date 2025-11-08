'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Experience() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 px-6 sm:px-12">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 sm:mb-12 leading-none ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          DESIGNED FOR
          <br />
          <span className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}>EVERYONE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-base sm:text-xl md:text-2xl max-w-3xl ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}
        >
          A browser that respects your privacy, values your time, and elevates your browsing experience to unprecedented levels.
        </motion.p>
      </motion.div>
    </section>
  );
}





