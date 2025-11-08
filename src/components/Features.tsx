'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Features() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Blazing Fast',
      desc: 'Lightning-fast performance that keeps up with your workflow'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy First',
      desc: 'Your data stays yours. Always encrypted, never tracked'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      title: 'Universal Extensions',
      desc: 'Run extensions from other major browsers seamlessly'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Seamless Sync',
      desc: 'Access your data across all devices with encrypted sync'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Infinite Customization',
      desc: 'Personalize every aspect to match your unique style'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Built-in AI',
      desc: 'Smart assistance powered by advanced AI technology'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Resource Efficient',
      desc: 'Optimized memory usage without compromising speed'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Advanced Controls',
      desc: 'Fine-tune every detail with powerful options'
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 px-6 sm:px-12">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto w-full"
      >
        {/* Big Statement */}
        <motion.h2 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 sm:mb-16 leading-none ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          BLAZING
          <br />
          <span className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}>FEATURES</span>
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, i) => (
            <Link key={i} href="/features">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 sm:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer h-full flex flex-col border ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    : 'bg-[#F0EBE3] border-black/10 hover:bg-[#E4DED4] hover:border-black/20'
                }`}
              >
                <div className={`mb-4 transition-colors ${
                  theme === 'dark'
                    ? 'text-white/80 group-hover:text-white'
                    : 'text-black/80 group-hover:text-black'
                }`}>
                  {item.icon}
                </div>
                <div className={`text-xl sm:text-2xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.title}</div>
                <div className={`text-sm sm:text-base leading-relaxed flex-grow ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{item.desc}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}






