'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function PrivacyPolicy() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
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
              {/* Desktop Privacy Policy */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">Solar Privacy Policy – Desktop Version</h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">1. Purpose and Philosophy</h3>
                  <p className="text-white/80 leading-relaxed">
                    Solar Desktop aims to provide a fast, customizable, and privacy-respecting browsing experience. Sync, accounts, and AI features are optional and transparent, giving you full control of your data.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">2. Data We Do and Do Not Collect</h3>
                  
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">We Do Not Collect by Default:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Any personally identifiable information (PII) such as names, emails, or device IDs unless you create an account</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Browsing history, search queries, or form inputs unless sync is enabled</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Passwords or credentials unless you enable the password manager</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">Data We May Temporarily Process:</h4>
                    <ul className="space-y-3 text-white/80">
                      <li>
                        <strong className="text-white">Crash reports:</strong> Anonymized and used to improve software stability.
                      </li>
                      <li>
                        <strong className="text-white">AI summary requests:</strong>
                        <ul className="ml-6 mt-2 space-y-2">
                          <li className="flex items-start">
                            <span className="text-white/40 mr-2">→</span>
                            <span>Free-tier users&apos; data is sent to the external AI provider (Gemini 2.0 Flash).</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-white/40 mr-2">→</span>
                            <span>Premium users using cloud mode do not have their data sent outside Solar servers.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-white/40 mr-2">→</span>
                            <span>Local AI mode keeps all data on your device.</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">Server Usage and Synchronization:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Sync is optional and encrypted end-to-end.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Sync data (tabs, history, bookmarks) is sent encrypted and only readable by your devices.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>If syncing on a single device, data is stored encrypted on our servers for a user-specified time period.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Account deletion permanently removes all server-stored sync data.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Password manager data is encrypted on servers and only decryptable by you.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">3. AI Data Usage Disclaimer</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Free-tier AI summary data is sent to the external provider (Gemini 2.0 Flash) for processing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Premium cloud mode processes data internally without sharing externally.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Local AI mode processes data on your machine only, without network transmission.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">4. Cookies and Third-Party Content</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Solar does not place cookies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Third-party websites may place cookies and trackers. Solar is not responsible for these.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">5. Children and Responsibility</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Suitable for all ages.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Guardians are responsible for managing access to harmful content. Solar does not moderate content.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">6. Your Rights</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>You may delete your Solar account at any time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Account deletion removes all synced data and password storage permanently.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>For support, contact: <a href="mailto:support@browser.solar" className="text-white hover:text-white/80 underline">support@browser.solar</a></span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">7. Data Breach Notification and Contact Information</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>If a breach affects server-stored data, we commit to notifying affected users within 72 hours as per regulations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Users with accounts receive email notifications; others are notified via app or public channels.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>We do not sell, rent, or share your data with third parties.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">8. Jurisdiction and GDPR Compliance</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Governed by Turkish law; disputes resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>GDPR is fully respected for European users.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">9. Security and Software Audits</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Passwords and sync data are stored encrypted with multiple layers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Only you hold the master decryption key.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Regular security audits are performed, and critical issues are addressed promptly.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">10. Marketing and Privacy Expectations</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Solar emphasizes user safety, freedom, and control but is not a privacy tool like Tor or VPN.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>We clearly communicate this to avoid misleading impressions.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">11. Data Deletion and Account Removal</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Account deletion permanently erases all associated data from servers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Users are informed if any issue occurs during deletion, and corrective steps are taken.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Related Pages */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 mb-4">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/terms-of-use" 
                    className="text-white hover:text-white/80 underline"
                  >
                    Terms of Service
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
              {/* Mobile Privacy Policy */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">Solar Privacy Policy – Mobile Version</h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">1. Purpose and Philosophy</h3>
                  <p className="text-white/80 leading-relaxed">
                    Solar Mobile is designed to offer you a safe, free, and private browsing experience. Your data stays on your device — we do not track or store it. Our goal is to give you speed, customization, and control without compromising privacy.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">2. Data We Do and Do Not Collect</h3>
                  
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">We Do Not Collect:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Any personally identifiable information (PII) such as names, emails etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Your browsing history, search queries, or form inputs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Passwords or any credential data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Sync data — there is no sync or account system on mobile</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">Data We Temporarily Process:</h4>
                    <ul className="space-y-3 text-white/80">
                      <li>
                        <strong className="text-white">Crash reports:</strong> These are anonymized and used only to improve app stability. No personal info is included.
                      </li>
                      <li>
                        <strong className="text-white">AI summary requests:</strong> When you use the optional AI summary feature, selected text is sent directly to the AI provider (Gemini 2.0 Flash). This only happens if you explicitly enable the feature.
                      </li>
                      <li>
                        We advise against submitting sensitive or confidential data, as the AI provider may use this information for model training.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">Server Usage and Synchronization:</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>Mobile uses Firebase only to deliver app news.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        <span>No data is sent back from your device to our servers.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">3. AI Data Usage Disclaimer</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Users of the AI summary feature must understand that data sent to the AI provider goes directly to the provider, not Solar.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>The AI provider may use the data for training and improvements.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">4. Cookies and Third-Party Content</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Solar Mobile does not place cookies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Websites you visit may use cookies or trackers, which Solar does not control.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">5. Children and Responsibility</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Suitable for all ages.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Accessing harmful or inappropriate content on the web is the responsibility of users and/or their guardians. Solar does not moderate web content.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">6. Your Rights</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>You may delete the app or stop using Solar Mobile at any time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Since no accounts or personal data are stored, no deletion requests are needed for server data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>For support, contact: <a href="mailto:support@browser.solar" className="text-white hover:text-white/80 underline">support@browser.solar</a></span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">7. Data Breach Notification and Contact</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Since no personal data is stored server-side, a data breach involving user data is not possible for the mobile app.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Notifications about app issues or security updates will be provided via app updates or official channels.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">8. Jurisdiction and GDPR Compliance</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Governed by Turkish law and disputes resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>GDPR rights are respected for EU users and enforced as applicable.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">9. Security and Software Audits</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Mobile app data stays locally and no personal data is transmitted or stored remotely.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>We regularly audit app code for vulnerabilities and security.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">10. Marketing and Privacy Expectations</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Solar Mobile is not a privacy tool like Tor or VPN.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>It emphasizes safety, speed, and control without misleading claims.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-3 text-white">11. Data Deletion and Account Removal</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>Uninstalling the app removes all data on your device.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/40 mr-2">•</span>
                      <span>There is no server-side account or data to delete on mobile.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Related Pages */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 mb-4">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/terms-of-use" 
                    className="text-white hover:text-white/80 underline"
                  >
                    Terms of Service
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









