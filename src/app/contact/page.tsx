'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistModal from '@/components/WaitlistModal';
import { useTheme } from '@/context/ThemeContext';

export default function ContactPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { theme } = useTheme();

  const contacts = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'support@browser.solar',
      link: 'mailto:support@browser.solar'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      title: 'Twitter/X',
      value: '@solarbrowser',
      link: 'https://x.com/solarbrowser'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/solarbrowser',
      link: 'https://github.com/solarbrowser'
    }
  ];

  return (
    <div className={`min-h-screen py-24 px-6 ${theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-[#FAF9F7] text-[#1a1a1a]'}`}>
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Have questions? Want to collaborate? we&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all text-center group"
            >
              <div className={`transition-colors mb-4 flex justify-center ${theme === 'dark' ? 'text-white/60 group-hover:text-white' : 'text-black/60 group-hover:text-black'}`}>{contact.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{contact.title}</h3>
              <p className={`transition-colors ${theme === 'dark' ? 'text-white/60 group-hover:text-white' : 'text-black/60 group-hover:text-black'}`}>{contact.value}</p>
            </a>
          ))}
        </motion.div>

        {/* Info Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 mb-16"
        >
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className={`w-6 h-6 flex-shrink-0 mt-0.5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>General Inquiries</h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              For general questions about Solar Browser, feature requests, or partnership opportunities, 
              please email us at <a href="mailto:support@browser.solar" className={`hover:underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>support@browser.solar</a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className={`w-6 h-6 flex-shrink-0 mt-0.5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Bug Reports</h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Found a bug? Please report it on our <a href="https://github.com/solarbrowser" target="_blank" rel="noopener noreferrer" className={`hover:underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>GitHub repository</a>. 
              Make sure to include steps to reproduce the issue.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className={`w-6 h-6 flex-shrink-0 mt-0.5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Security</h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              If you&apos;ve discovered a security vulnerability, please email us directly at{' '}
              <a href="mailto:support@browser.solar" className={`hover:underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>support@browser.solar</a> with details. 
              We take security seriously and will respond promptly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className={`w-6 h-6 flex-shrink-0 mt-0.5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Press & Media</h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              For press inquiries, interviews, or media kits, please contact us at{' '}
              <a href="mailto:support@browser.solar" className={`hover:underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>support@browser.solar</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center pt-12 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4">Want Early Access?</h2>
          <p className={`mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Join our waitlist to be notified when Solar Browser launches.
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









