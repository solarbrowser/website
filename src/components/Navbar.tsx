'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: 'Getting Started',
      items: [
        { title: 'Download', desc: 'Get Solar for your platform', href: '/download' },
        { title: 'Customize Your Browser', desc: 'Make it your own', href: '/customize' },
        { title: 'Import Data', desc: 'Bring your bookmarks and history', href: '/import' },
        { title: 'Keyboard Shortcuts', desc: 'Navigate like a pro', href: '/shortcuts' }
      ]
    },
    {
      name: 'For Developers',
      items: [
        { title: 'Quanta Engine', desc: 'Our JavaScript engine', href: '/quanta' },
        { title: 'Documentation', desc: 'Complete API reference', href: '/documentation' },
        { title: 'GitHub', desc: 'View our source code', href: 'https://github.com/solarbrowser' },
        { title: 'API Reference', desc: 'Build extensions and tools', href: '/api' }
      ]
    },
    {
      name: 'About',
      items: [
        { title: 'Roadmap', desc: 'Our development timeline', href: '/roadmap' },
        { title: 'Team', desc: 'Meet the creators', href: '/team' },
        { title: 'Support', desc: 'Help us grow', href: '/support' },
        { title: 'Contact', desc: 'Get in touch', href: '/contact' }
      ]
    }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? theme === 'dark' 
              ? 'bg-[#232223]/95 backdrop-blur-lg border-b border-white/10' 
              : 'bg-white/95 backdrop-blur-lg border-b border-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <img src="/logo.png" alt="Solar Browser" className="w-8 h-8" />
                <div className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Solar
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu with Dropdowns */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {menuItems.map((menu, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(menu.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`text-sm transition-colors duration-200 flex items-center gap-1 ${
                      theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {menu.name}
                    <svg 
                      className={`w-3 h-3 transition-transform duration-200 ${openDropdown === menu.name ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {openDropdown === menu.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden shadow-xl p-2 ${
                          theme === 'dark' 
                            ? 'bg-[#232223]/95 backdrop-blur-lg border border-white/10' 
                            : 'bg-white/95 backdrop-blur-lg border border-black/10'
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {menu.items.map((item, idx) => {
                            const isExternal = item.href.startsWith('http');
                            if (isExternal) {
                              return (
                                <a
                                  key={idx}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`group block px-4 py-3 rounded-lg transition-all duration-200 ${
                                    theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-[#FFF3DA] hover:bg-[#FFFAED]'
                                  }`}
                                >
                                  <div className={`text-sm font-semibold transition-colors ${
                                    theme === 'dark' ? 'text-white' : 'text-black'
                                  }`}>
                                    {item.title}
                                  </div>
                                  <div className={`text-xs transition-colors mt-0.5 ${
                                    theme === 'dark' ? 'text-white/50 group-hover:text-white/70' : 'text-black/50 group-hover:text-black/70'
                                  }`}>
                                    {item.desc}
                                  </div>
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className={`group block px-4 py-3 rounded-lg transition-all duration-200 ${
                                  theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-[#FFF3DA] hover:bg-[#FFFAED]'
                                }`}
                              >
                                <div className={`text-sm font-semibold transition-colors ${
                                  theme === 'dark' ? 'text-white' : 'text-black'
                                }`}>
                                  {item.title}
                                </div>
                                <div className={`text-xs transition-colors mt-0.5 ${
                                  theme === 'dark' ? 'text-white/50 group-hover:text-white/70' : 'text-black/50 group-hover:text-black/70'
                                }`}>
                                  {item.desc}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Coming Soon Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 lg:px-6 py-2 lg:py-2.5 text-xs lg:text-sm font-medium rounded-full transition-all ${
                  theme === 'dark'
                    ? 'bg-[#FAF9F7] text-black hover:bg-white/90'
                    : 'bg-[#E07A5F] text-[#1a1a1a] hover:bg-[#D16B4E]'
                }`}
              >
                Coming Soon
              </motion.button>
            </div>            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 relative z-50 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-0.5 block ${theme === 'dark' ? 'bg-[#FAF9F7]' : 'bg-black'}`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-0.5 block ${theme === 'dark' ? 'bg-[#FAF9F7]' : 'bg-black'}`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-0.5 block ${theme === 'dark' ? 'bg-[#FAF9F7]' : 'bg-black'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed inset-0 z-40 md:hidden overflow-y-auto ${
              theme === 'dark' ? 'bg-[#232223]' : 'bg-[#FAF9F7]'
            }`}
          >
            <div className="flex flex-col items-start justify-start h-full pt-24 px-8 gap-6">
              {menuItems.map((menu, i) => (
                <div key={i} className="w-full">
                  <motion.button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === menu.name ? null : menu.name)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-2xl transition-colors duration-200 flex items-center gap-2 w-full ${
                      theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
                    }`}
                  >
                    {menu.name}
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${mobileOpenDropdown === menu.name ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {mobileOpenDropdown === menu.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 ml-4 space-y-3 overflow-hidden"
                      >
                        {menu.items.map((item, idx) => {
                          const isExternal = item.href.startsWith('http');
                          if (isExternal) {
                            return (
                              <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block text-base transition-colors ${
                                  theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                                }`}
                              >
                                {item.title}
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block text-base transition-colors ${
                                theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                              }`}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-8 py-3 text-base font-medium rounded-full transition-all mt-4 ${
                  theme === 'dark' 
                    ? 'bg-[#FAF9F7] text-black hover:bg-white/90' 
                    : 'bg-[#E07A5F] text-[#1a1a1a] hover:bg-[#D16B4E]'
                }`}
              >
                Coming Soon
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}







