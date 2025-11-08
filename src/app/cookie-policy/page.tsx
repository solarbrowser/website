'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function CookiePolicy() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-white/60">Last updated: November 2, 2025</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">What Are Cookies?</h2>
            <p className="text-white/80 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. 
              They help the website remember your preferences and actions.
            </p>
          </div>

          {/* How We Use Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">How We Use Cookies</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We use minimal cookies on our website. We believe in transparency and simplicity.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Theme Preference Cookie</h3>
              <div className="space-y-3 text-white/80">
                <p><strong className="text-white">Cookie Name:</strong> <code className="bg-white/10 px-2 py-1 rounded">solar-theme</code></p>
                <p><strong className="text-white">Purpose:</strong> To remember your theme preference (dark/light mode)</p>
                <p><strong className="text-white">Duration:</strong> 365 days (1 year)</p>
                <p><strong className="text-white">Type:</strong> Essential cookie (required for site functionality)</p>
                <p><strong className="text-white">Data Stored:</strong> Either &quot;dark&quot; or &quot;light&quot; - your preferred theme setting</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Waitlist Cookie</h3>
              <div className="space-y-3 text-white/80">
                <p><strong className="text-white">Cookie Name:</strong> <code className="bg-white/10 px-2 py-1 rounded">solar_waitlist</code></p>
                <p><strong className="text-white">Purpose:</strong> To remember that you&apos;ve already joined our waitlist</p>
                <p><strong className="text-white">Duration:</strong> 365 days (1 year)</p>
                <p><strong className="text-white">Type:</strong> Local storage cookie (stored only on your device)</p>
                <p><strong className="text-white">Data Stored:</strong> A simple true/false value indicating waitlist participation</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              These cookies are used solely for essential site functionality and spam prevention. They store no personal information, 
              no tracking data, and no identifiable details about you.
            </p>
          </div>

          {/* What We Don't Do */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">What We Don&apos;t Do</h2>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>We do not use tracking cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>We do not use advertising cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>We do not use analytics cookies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>We do not share cookie data with third parties</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>We do not use cookies to track your browsing across other websites</span>
              </li>
            </ul>
          </div>

          {/* Managing Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Managing Your Cookies</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              You have full control over cookies:
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <span className="text-white/40 mr-2">•</span>
                <span>You can delete the waitlist cookie at any time through your browser settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/40 mr-2">•</span>
                <span>You can block cookies entirely in your browser preferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/40 mr-2">•</span>
                <span>Deleting the cookie will allow you to submit the waitlist form again (though we recommend not doing so)</span>
              </li>
            </ul>
          </div>

          {/* Browser Cookie Settings */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">How to Clear Cookies in Your Browser</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-white mb-2">Chrome / Edge</p>
                <p className="text-white/80 text-sm">Settings → Privacy and Security → Clear browsing data → Cookies and other site data</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-white mb-2">Firefox</p>
                <p className="text-white/80 text-sm">Settings → Privacy & Security → Cookies and Site Data → Clear Data</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-white mb-2">Safari</p>
                <p className="text-white/80 text-sm">Preferences → Privacy → Manage Website Data → Remove All</p>
              </div>
            </div>
          </div>

          {/* GDPR Compliance */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">GDPR & Privacy Compliance</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Our use of cookies is minimal and privacy-focused. The waitlist cookie is considered a &quot;strictly necessary&quot; 
              cookie as it&apos;s required for the basic functionality of preventing spam submissions.
            </p>
            <p className="text-white/80 leading-relaxed">
              Under GDPR and similar privacy laws, strictly necessary cookies do not require explicit consent as they 
              are essential for the website&apos;s legitimate operation. However, we believe in transparency and want you 
              to understand exactly what we store and why.
            </p>
          </div>

          {/* Updates to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Updates to This Policy</h2>
            <p className="text-white/80 leading-relaxed">
              We may update this Cookie Policy from time to time. If we make significant changes, we&apos;ll update 
              the &quot;Last updated&quot; date at the top of this page. We recommend checking this page periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Questions?</h2>
            <p className="text-white/80 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:support@browser.solar" className="text-white hover:text-white/80 underline">
                support@browser.solar
              </a>
            </p>
          </div>

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
                href="/terms-of-use" 
                className="text-white hover:text-white/80 underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}









