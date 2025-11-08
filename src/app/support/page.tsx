'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistModal from '@/components/WaitlistModal';
import { useTheme } from '@/context/ThemeContext';

export default function SupportPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { theme } = useTheme();

  const donationPlatforms = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      name: 'GitHub Sponsors',
      description: 'Support us through GitHub Sponsors with recurring or one-time donations',
      link: 'https://github.com/sponsors/solarbrowser',
      buttonText: 'Sponsor on GitHub'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
        </svg>
      ),
      name: 'Buy Me a Coffee',
      description: 'Send a one-time donation to fuel our development with coffee',
      link: 'https://buymeacoffee.com/solarbrowser',
      buttonText: 'Buy Us a Coffee'
    }
  ];

  const supporters = [
    {
      name: 'No one supported yet.',
      avatar: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      role: 'Be the first!',
      amount: ''
    }
  ];

  return (
    <div className={`min-h-screen py-24 px-6 ${theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-[#FAF9F7] text-[#1a1a1a]'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link 
            href="/"
            className={`inline-flex items-center transition-colors mb-6 ${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Support Us</h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Help us build the future of web browsing. Your support makes Solar Browser possible.
          </p>
        </motion.div>

        {/* Donation Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ways to Support</h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Choose your preferred platform to support Solar Browser&apos;s development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donationPlatforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all group text-center relative overflow-hidden"
              >
                {/* Coming Soon Badge for GitHub Sponsors only */}
                {i === 0 && (
                  <div className="absolute -right-8 top-8 rotate-45 bg-yellow-500 text-black text-xs font-bold py-1.5 px-10 shadow-lg">
                    COMING SOON
                  </div>
                )}
                
                <div className={`transition-colors mb-4 flex justify-center ${theme === 'dark' ? 'text-white/60 group-hover:text-white' : 'text-black/60 group-hover:text-black'}`}>
                  {platform.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{platform.name}</h3>
                <p className={`text-sm mb-6 leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{platform.description}</p>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-semibold transition-all ${
                    i === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-white/20 hover:scale-105'
                  }`}
                  {...(i === 0 && { 
                    onClick: (e: React.MouseEvent) => e.preventDefault(),
                    'aria-disabled': 'true'
                  })}
                >
                  {platform.buttonText}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-lg p-12 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Support Solar Browser?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>100% Independent</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  We&apos;re not backed by big tech. Your support keeps us independent and user-focused.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Privacy First</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  No ads, no tracking, no selling your data. We&apos;re funded by users, not advertisers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Open Source</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  All code is open source and transparent. See exactly where your support goes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Full-Time Development</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  Your contributions help us work on Solar Browser full-time for faster progress.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Supporters</h2>
          <p className={`text-center mb-12 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Thank you to everyone supporting Solar Browser&apos;s development
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supporters.map((supporter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all text-center"
              >
                <div className={`mb-4 flex justify-center ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                  {supporter.avatar}
                </div>
                <h3 className={`text-xl font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{supporter.name}</h3>
                <div className="text-purple-400 text-sm mb-2">{supporter.role}</div>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{supporter.amount}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Ways to Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Star on GitHub</h3>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                    Give us a star on GitHub to help increase visibility and attract more contributors.
                  </p>
                  <a
                    href="https://github.com/solarbrowser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
                  >
                    Visit Repository →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Spread the Word</h3>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                    Share Solar Browser with friends, post on social media, and help us grow our community.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://x.com/solarbrowser"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
                    >
                      Follow on X →
                    </a>
                    <a
                      href="https://instagram.com/solarbrowser"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
                    >
                      Follow on Instagram →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-12 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className={`mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Be part of Solar Browser from the beginning. Join the waitlist for early access.
          </p>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="group relative px-8 py-4 bg-[#FAF9F7] text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">Join Waitlist for Early Access</span>
            <div className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </motion.div>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}










