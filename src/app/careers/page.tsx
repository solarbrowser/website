'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistModal from '@/components/WaitlistModal';
import { useTheme } from '@/context/ThemeContext';

export default function CareersPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { theme } = useTheme();

  const positions = [
    {
      title: 'Senior Browser Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Build the core browser engine with cutting-edge web technologies.',
      requirements: [
        'Expert in C++ and JavaScript',
        'Experience with browser engines (Chromium, Gecko, WebKit)',
        'Strong understanding of web standards',
        'Performance optimization experience'
      ]
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      description: 'Design beautiful, intuitive interfaces that users love.',
      requirements: [
        'Strong portfolio of UI/UX work',
        'Proficiency in Figma/Sketch',
        'Understanding of design systems',
        'Experience with user research'
      ]
    },
    {
      title: 'Security Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Security',
      description: 'Ensure Solar is the most secure browser available.',
      requirements: [
        'Security research background',
        'Knowledge of web security vulnerabilities',
        'Experience with penetration testing',
        'Cryptography expertise'
      ]
    },
    {
      title: 'Extension Developer',
      type: 'Contract',
      location: 'Remote',
      department: 'Platform',
      description: 'Build the extension platform and developer tools.',
      requirements: [
        'WebExtensions API expertise',
        'JavaScript/TypeScript mastery',
        'API design experience',
        'Developer advocacy skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Remote First',
      desc: 'Work from anywhere in the world'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexible Hours',
      desc: 'Choose your own schedule'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Competitive Pay',
      desc: 'Top market rates and equity'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Health Coverage',
      desc: 'Comprehensive health benefits'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Learning Budget',
      desc: 'Conferences, courses, and books'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Unlimited PTO',
      desc: 'Take time when you need it'
    }
  ];

  return (
    <div className={`min-h-screen py-24 px-6 ${theme === 'dark' ? 'bg-[#232223] text-[#f9f9f9]' : 'bg-[#FAF9F7] text-[#1a1a1a]'}`}>
      <div className="max-w-6xl mx-auto">
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
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Join Our Mission</h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            Help us build the future of web browsing. we&apos;re looking for talented people who share our vision.
          </p>
        </motion.div>

        {/* Why Join */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`border rounded-lg p-8 mb-16 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-[#F0EBE3] border-black/10'
          }`}
        >
          <h2 className={`text-3xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Why Join Solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className={`w-12 h-12 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Impact</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                Build a product used by millions and shape the future of the web
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className={`w-12 h-12 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Innovation</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                Work on cutting-edge technologies and solve challenging problems
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className={`w-12 h-12 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Team</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                Collaborate with talented, passionate people from around the world
              </p>
            </div>
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                        📍 {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className={`mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{position.description}</p>
                <div className="mb-4">
                  <div className={`font-semibold mb-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Requirements:</div>
                  <ul className="space-y-1">
                    {position.requirements.map((req, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-semibold transition-all"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className={`mb-3 flex justify-center ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{benefit.icon}</div>
                <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{benefit.title}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-16"
        >
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Applications Opening Soon</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                We&apos;re finalizing our hiring process. Join the waitlist to be notified when applications 
                officially open. We&apos;ll reach out to early subscribers first!
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className={`mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            We&apos;re always looking for exceptional talent. Join our waitlist and we&apos;ll keep you updated.
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










