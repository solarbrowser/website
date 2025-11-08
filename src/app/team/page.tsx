'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistModal from '@/components/WaitlistModal';
import { useTheme } from '@/context/ThemeContext';

export default function TeamPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { theme } = useTheme();

  const team = [
    {
      name: 'ataturkcu',
      role: 'Lead of the Solar',
      avatar: 'https://github.com/ataturkcu.png',
      github: 'https://github.com/ataturkcu'
    },
    {
      name: 'milanhuzz',
      role: 'Core Contributor',
      avatar: 'https://github.com/milanhuzz.png',
      github: 'https://github.com/milanhuzz'
    },
    {
      name: 'mustawtfa',
      role: 'Core Contributor',
      avatar: 'https://github.com/mustawtfa.png',
      github: 'https://github.com/mustawtfa'
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
            className={`inline-flex items-center transition-colors mb-6 ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}
          >
            ← Back to Home
          </Link>
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Meet the Team</h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}>
            we&apos;re a small but dedicated team building the future of web browsing.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {team.map((member, i) => (
            <motion.a
              key={i}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`border rounded-lg p-8 transition-all text-center group cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-[#F0EBE3] border-black/10 hover:bg-[#E4DED4]'
              }`}
            >
              <div className="mb-4">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className={`w-32 h-32 rounded-full mx-auto object-cover border-4 transition-all ${
                    theme === 'dark' 
                      ? 'border-white/10 group-hover:border-white/20' 
                      : 'border-black/10 group-hover:border-black/20'
                  }`}
                />
              </div>
              <h3 className={`text-2xl font-semibold mb-1 transition-colors ${
                theme === 'dark' ? 'text-white group-hover:text-purple-300' : 'text-black group-hover:text-purple-500'
              }`}>{member.name}</h3>
              <div className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>{member.role}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-center mt-16 pt-12 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Join Our Community</h2>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}>
            Be part of Solar&apos;s journey from the beginning
          </p>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className={`group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 ${
              theme === 'dark' ? 'bg-[#FAF9F7] text-black' : 'bg-black text-white'
            }`}
          >
            <span className="relative z-10">Join Waitlist for Early Access</span>
            <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
              theme === 'dark' ? 'bg-black/10' : 'bg-white/10'
            }`}></div>
          </button>
        </motion.div>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}









