'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

export default function FeaturesPage() {
  const { theme } = useTheme();
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Blazing Fast',
      tagline: 'Speed that never slows down',
      description: 'Experience lightning-fast performance with our optimized rendering engine. Pages load instantly, animations are buttery smooth, and your browsing feels effortless. We\'ve built Solar from the ground up to prioritize speed without compromising on features.',
      features: [
        'Instant page loads with advanced caching',
        'Optimized JavaScript execution',
        'Hardware-accelerated rendering',
        'Smart resource preloading'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy First',
      tagline: 'Your data, your control',
      description: 'We believe privacy is a fundamental right. Solar blocks trackers by default, encrypts your data, and never sells your information. Browse with confidence knowing that your digital footprint stays private.',
      features: [
        'Built-in tracker blocking',
        'End-to-end encryption',
        'No data collection or selling',
        'Private browsing by default'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      title: 'Universal Extensions',
      tagline: 'One extension, all browsers',
      description: 'Run extensions from other major browsers seamlessly in Solar. Our universal extension system provides maximum compatibility while maintaining security and performance. No need to choose between your favorite extensions and your favorite browser.',
      features: [
        'Compatible with extensions from other browsers',
        'Full API support for modern extensions',
        'Enhanced security sandboxing',
        'Optimized performance'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Seamless Sync',
      tagline: 'Your browser, everywhere',
      description: 'Access your bookmarks, history, passwords, and settings across all your devices. Solar\'s encrypted sync ensures your data stays private while being available whenever and wherever you need it. Switch devices without missing a beat.',
      features: [
        'End-to-end encrypted synchronization',
        'Cross-platform support (Windows, Mac, Linux, Mobile)',
        'Instant sync with conflict resolution',
        'Selective sync options'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Infinite Customization',
      tagline: 'Make it truly yours',
      description: 'Customize every pixel of your browsing experience. From themes and layouts to keyboard shortcuts and gestures, Solar adapts to your workflow. Create the perfect browser that feels like it was made just for you.',
      features: [
        'Custom themes and color schemes',
        'Flexible layout options',
        'Personalized shortcuts',
        'Extension ecosystem'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Built-in AI',
      tagline: 'Your intelligent browsing companion',
      description: 'Integrated AI assistance helps you browse smarter. Summarize articles, translate pages, generate content, and get instant answers without leaving your browser. The future of browsing is here.',
      features: [
        'Smart page summaries',
        'Real-time translation',
        'Content generation tools',
        'Context-aware suggestions'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Resource Efficient',
      tagline: 'Power without the bloat',
      description: 'Use less memory and CPU while getting more done. Solar is engineered to be lightweight and efficient, giving you smooth performance even on older hardware. Say goodbye to browser slowdowns.',
      features: [
        'Minimal memory footprint',
        'Optimized CPU usage',
        'Battery-friendly on laptops',
        'Efficient tab management'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Advanced Controls',
      tagline: 'Professional-grade tools',
      description: 'Fine-tune every aspect of your browsing with advanced settings and developer tools. Whether you\'re a power user or a developer, Solar gives you the control you need without overwhelming simplicity.',
      features: [
        'Granular privacy controls',
        'Advanced developer tools',
        'Network inspection',
        'Performance profiling'
      ]
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center px-6 sm:px-12 pt-20 ${theme === 'dark' ? 'bg-[#232223]' : 'bg-[#FAF9F7]'}`}>
        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none ${theme === 'dark' ? 'text-[#f9f9f9]' : 'text-[#1a1a1a]'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">
                {['B', 'R', 'O', 'W', 'S', 'E', 'R'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className={`inline-block ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>
                {['F', 'E', 'A', 'T', 'U', 'R', 'E', 'S'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className={`text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}
            >
              Best features for best browsing
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={theme === 'dark' ? 'text-white/30' : 'text-black/30'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Detail */}
      <section className={`py-20 sm:py-32 px-6 sm:px-12 ${theme === 'dark' ? 'bg-[#232223]' : 'bg-[#FAF9F7]'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Note about planned features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto rounded-2xl p-6 backdrop-blur-sm ${
              theme === 'dark' 
                ? 'text-white/50 border-white/10 bg-white/5' 
                : 'text-black/50 border-black/10 bg-[#F0EBE3]'
            }`}>
              The features listed below are planned features and represent our vision for Solar Browser. 
              Development is ongoing and specifications may change.
            </p>
          </motion.div>

          <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon & Title */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`mb-6 inline-block ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}
                >
                  {feature.icon}
                </motion.div>
                
                <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-[#f9f9f9]' : 'text-[#1a1a1a]'}`}>
                  {feature.title}
                </h2>
                
                <p className={`text-2xl mb-8 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                  {feature.tagline}
                </p>
                
                <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  {feature.description}
                </p>

                <ul className="space-y-4">
                  {feature.features.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className={`flex items-center gap-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}
                    >
                      <svg className={`w-5 h-5 flex-shrink-0 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`aspect-square rounded-3xl bg-gradient-to-br backdrop-blur-sm p-12 flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'from-white/10 to-white/5 border-white/10' 
                      : 'from-black/10 to-black/5 border-black/10'
                  } border`}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}







