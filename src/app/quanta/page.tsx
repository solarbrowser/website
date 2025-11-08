'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

interface TestCategory {
  name: string;
  passed: number;
  failed: number;
  skipped: number;
  total: number;
  failedTests: string[];
  skippedTests: string[];
}

interface TestResults {
  lastUpdated: string;
  categories: TestCategory[];
}

export default function QuantaPage() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [testResults, setTestResults] = useState<TestResults | null>(null);
  const { theme } = useTheme();

  // Default test categories (fallback)
  const defaultCategories: TestCategory[] = [
    { name: 'ES2026 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'ES2025 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'ES2024 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'ES2023 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'ES2022 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'ES2021 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'ES2020 Features', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] },
    { name: 'Core Language', passed: 0, failed: 0, skipped: 0, total: 0, failedTests: [], skippedTests: [] }
  ];

  // Load test results from JSON
  useEffect(() => {
    fetch('/test-results.json')
      .then(res => res.json())
      .then(data => setTestResults(data))
      .catch(err => console.log('Test results not available yet'));
  }, []);

  const testCategories = testResults?.categories || defaultCategories;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-[#FAF9F7] text-[#1a1a1a]'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <Link 
              href="/"
              className={`inline-flex items-center transition-colors ${
                theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}
            >
              ← Back to Home
            </Link>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
          >
            <span className={`block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>QUANTA</span>
            <span className={`block -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 ${theme === 'dark' ? 'text-white/10' : 'text-black/10'}`}>ENGINE</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-sm sm:text-base md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 ${
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            }`}
          >
            The JavaScript engine powering Solar Browser. Built for speed, security, and modern standards.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <a
              href="https://github.com/solarbrowser/quanta"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-8 py-4 font-semibold rounded-full transition-all hover:scale-105 ${
                theme === 'dark' ? 'bg-[#FAF9F7] text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={`text-xs uppercase tracking-wider mb-6 ${
              theme === 'dark' ? 'text-white/40' : 'text-black/40'
            }`}>Target Goals</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>2x</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>Faster Execution on Heavy Tasks</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>50%</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>Less Memory Usage</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>0</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>Memory Leaks</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Big Statement */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 sm:mb-16 leading-none ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            OUR
            <br />
            <span className={theme === 'dark' ? 'text-white/20' : 'text-black/20'}>VISION</span>
          </motion.h2>

          {/* Vision Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Performance First',
                desc: 'Built from the ground up for blazing-fast JavaScript execution without compromise'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'First Principles',
                desc: 'Starting from scratch with cutting-edge optimization techniques and simplicity'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Open Source',
                desc: 'Transparent development, community-driven, and built in public from day one'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'One Goal',
                desc: 'Make the web faster for everyone. No compromises, no shortcuts, just speed'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 sm:p-8 border rounded-2xl backdrop-blur-sm transition-all duration-300 h-full flex flex-col ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                    : 'bg-[#F0EBE3] border-black/10 hover:bg-[#E4DED4] hover:border-black/20'
                }`}
              >
                <div className={`transition-colors mb-4 ${
                  theme === 'dark' ? 'text-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'
                }`}>
                  {item.icon}
                </div>
                <div className={`text-xl sm:text-2xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>{item.title}</div>
                <div className={`text-sm sm:text-base leading-relaxed flex-grow ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ECMAScript Compatibility Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>ECMAScript Compatibility</h2>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            }`}>
              Test suite results will be available once development progresses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`border rounded-2xl p-8 md:p-12 ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-[#F0EBE3] border-black/10'
            }`}
          >
            {/* Test Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {testCategories.reduce((sum, cat) => sum + cat.passed, 0)}
                </div>
                <div className={`text-sm uppercase tracking-wider ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>Passed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  {testCategories.reduce((sum, cat) => sum + cat.failed, 0)}
                </div>
                <div className={`text-sm uppercase tracking-wider ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>Failed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {testCategories.reduce((sum, cat) => sum + cat.skipped, 0)}
                </div>
                <div className={`text-sm uppercase tracking-wider ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>Skipped</div>
              </div>
            </div>

            {/* Test Categories */}
            <div className="space-y-4">
              {testCategories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={theme === 'dark' ? 'bg-white/5 rounded-lg overflow-hidden' : 'bg-[#E4DED4] rounded-lg overflow-hidden'}
                >
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === i ? null : i)}
                    className={`w-full p-4 transition-colors text-left ${
                      theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-[#F0EBE3]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>{category.name}</span>
                        {category.total > 0 && (
                          <div className="flex gap-2 text-xs">
                            {category.passed > 0 && (
                              <span className="text-green-400">{category.passed} passed</span>
                            )}
                            {category.failed > 0 && (
                              <span className="text-red-400">{category.failed} failed</span>
                            )}
                            {category.skipped > 0 && (
                              <span className="text-yellow-400">{category.skipped} skipped</span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-white/60' : 'text-black/60'
                        }`}>
                          {category.passed}/{category.total}
                        </span>
                        <svg 
                          className={`w-5 h-5 transition-transform ${
                            theme === 'dark' ? 'text-white/60' : 'text-black/60'
                          } ${expandedCategory === i ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className={`relative h-2 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                    }`}>
                      <div 
                        className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-1000"
                        style={{ width: category.total > 0 ? `${(category.passed / category.total) * 100}%` : '0%' }}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedCategory === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-t ${
                          theme === 'dark' ? 'border-white/10' : 'border-black/10'
                        }`}
                      >
                        <div className="p-4 space-y-4">
                          {/* Passed Section */}
                          {category.passed > 0 && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-green-400 font-semibold text-sm">
                                  {category.passed} Passed
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Failed Section */}
                          {category.failed > 0 ? (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="text-red-400 font-semibold text-sm">
                                  {category.failed} Failed
                                </span>
                              </div>
                              <div className="ml-6 space-y-1">
                                {category.failedTests.map((test, idx) => (
                                  <div key={idx} className={`text-xs font-mono ${
                                    theme === 'dark' ? 'text-white/60' : 'text-black/60'
                                  }`}>
                                    • {test}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : category.total === 0 ? (
                            <div className={`text-sm text-center py-4 ${
                              theme === 'dark' ? 'text-white/40' : 'text-black/40'
                            }`}>
                              No tests available yet
                            </div>
                          ) : null}

                          {/* Skipped Section */}
                          {category.skipped > 0 && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                                <span className="text-yellow-400 font-semibold text-sm">
                                  {category.skipped} Skipped
                                </span>
                              </div>
                              <div className="ml-6 space-y-1">
                                {category.skippedTests.map((test, idx) => (
                                  <div key={idx} className={`text-xs font-mono ${
                                    theme === 'dark' ? 'text-white/60' : 'text-black/60'
                                  }`}>
                                    • {test}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon Badge */}
            <div className="mt-8 text-center">
              <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-semibold">
                Test Suite Coming Soon
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}








