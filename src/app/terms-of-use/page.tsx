'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function TermsOfUse() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen py-24 px-6 ${theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-[#FAF9F7] text-[#1a1a1a]'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/60">Last updated: July 7, 2025</p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 mb-8 border-b border-white/10"
        >
          <button
            onClick={() => setActiveTab('desktop')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'desktop'
                ? 'text-white border-b-2 border-white'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'mobile'
                ? 'text-white border-b-2 border-white'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            Mobile
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {activeTab === 'desktop' ? (
            <div>
              {/* Desktop Terms */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">Solar Terms of Service – Desktop Version</h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">1. Licensing</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Desktop is licensed under the Mozilla Public License 2.0 (MPL 2.0).</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>The Solar name, logo, and branding are trademarks and cannot be used without permission.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">2. Acceptable Use</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You may not use Solar Desktop for illegal activities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You must not interfere with server operations or security measures.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>AI features are for personal use only.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">3. Account and Data</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You may delete your account at any time.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>When sync is disabled or limited to a single device, data on our servers is deleted unless backup is enabled.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>We do not keep your private data longer than necessary for functionality.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">4. Service Changes</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Desktop may modify, add, or remove features at any time without notice.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>PWA, AI, or sync features may be deprecated or replaced.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">5. AI Disclaimer</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar is not responsible for AI-generated content.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>All AI output is created and managed by third-party providers.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">6. Liability Disclaimer</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Desktop is provided as-is with no warranty.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>We are not liable for any loss, damage, or data exposure caused by user behavior or third-party websites.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You are responsible for how you use the browser and which sites you visit.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">7. Children</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Desktop does not restrict access by age.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Guardians are responsible for monitoring use by minors.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">8. Legal Jurisdiction</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>These Terms are governed by the laws of the Republic of Türkiye.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Any disputes shall be resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">9. Contact</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <p className="text-white/80">
                      For all legal or support inquiries:<br/>
                      <a href="mailto:support@browser.solar" className="text-white hover:text-white/80 underline">
                        support@browser.solar
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Pages */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 mb-4">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/privacy-policy" 
                    className="text-white hover:text-white/80 underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/cookie-policy" 
                    className="text-white hover:text-white/80 underline"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Mobile Terms */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">Solar Terms of Service – Mobile Version</h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">1. Licensing</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Mobile is licensed under the GNU General Public License v3 (GPLv3).</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>The Solar name, logo, and branding are trademarks and cannot be used without permission.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">2. Acceptable Use</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You may not use Solar Mobile for illegal activities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You must not attempt to interfere with app stability or security.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>AI features are for personal use only.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">3. Account and Data</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Mobile does not have accounts or sync features.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>No user data is stored on our servers from the mobile app.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You can delete the app at any time to remove all local data.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">4. Service Changes</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Mobile may modify, add, or remove features at any time without notice.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>PWA, AI, or other features may be deprecated or replaced.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">5. AI Disclaimer</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar is not responsible for AI-generated content.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>AI outputs are created and managed by third-party providers (e.g., Gemini 2.0 Flash).</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">6. Liability Disclaimer</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Mobile is provided as-is without warranty.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>We are not liable for any loss, damage, or data exposure caused by user actions or third-party websites.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>You are responsible for how you use the app and which websites you visit.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">7. Children</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Solar Mobile does not restrict access by age.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Guardians are responsible for monitoring and controlling use by minors.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">6. Legal Jurisdiction</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>These Terms are governed by the laws of the Republic of Türkiye.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Any disputes shall be resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">9. Contact</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <p className="text-white/80">
                      For all legal or support inquiries:<br/>
                      <a href="mailto:support@browser.solar" className="text-white hover:text-white/80 underline">
                        support@browser.solar
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Pages */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 mb-4">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/privacy-policy" 
                    className="text-white hover:text-white/80 underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/cookie-policy" 
                    className="text-white hover:text-white/80 underline"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}








