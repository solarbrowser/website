'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`relative border-t ${theme === 'dark' ? 'border-white/10 bg-[#232223]' : 'border-black/10 bg-[#FAF9F7]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Solar Browser" className="w-8 h-8" />
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Solar</h3>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
              The future of web browsing. Fast, secure, and beautifully minimal.
            </p>
          </div>

          {/* Getting Started */}
          <div>
            <h4 className={`font-semibold mb-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Getting Started</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/download" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Download
                </Link>
              </li>
              <li>
                <Link href="/customize" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Customize Your Browser
                </Link>
              </li>
              <li>
                <Link href="/import" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Import Data
                </Link>
              </li>
              <li>
                <Link href="/shortcuts" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Keyboard Shortcuts
                </Link>
              </li>
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h4 className={`font-semibold mb-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>For Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/quanta" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Quanta Engine
                </Link>
              </li>
              <li>
                <Link href="/documentation" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://github.com/solarbrowser" target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/api" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className={`font-semibold mb-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/roadmap" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/team" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Team
                </Link>
              </li>
              <li>
                <Link href="/support" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-semibold mb-4 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className={`text-sm transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
            © {new Date().getFullYear()} Solar Browser. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
              aria-label="Twitter/X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://github.com/solarbrowser"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="mailto:support@browser.solar"
              className={`transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}






