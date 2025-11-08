'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistModal from '@/components/WaitlistModal';
import { useTheme } from '@/context/ThemeContext';

export default function RoadmapPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { theme } = useTheme();

  const milestones = [
    {
      phase: 'Phase 1',
      title: 'The Beginning',
      period: 'Q4 2024',
      status: 'completed',
      items: [
        'Initial concept and planning',
        'Core team formation',
        'Technology stack selection',
        'Brand identity creation'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Prototype Development',
      period: 'H1 2025',
      status: 'completed',
      items: [
        'First working prototype',
        'UI/UX design system',
        'Basic navigation features',
        'Foundation architecture'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Engine Development',
      period: 'H2 2025',
      status: 'in-progress',
      items: [
        'Browser engine development',
        'Performance optimization',
        'Privacy architecture',
        'Extension compatibility layer'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Alpha Release',
      period: 'Q3 2026',
      status: 'upcoming',
      items: [
        'Internal testing program',
        'Core features implementation',
        'Security audits',
        'Bug fixes and stability'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Beta Launch',
      period: 'H2 2026',
      status: 'upcoming',
      items: [
        'Public beta release',
        'Community feedback integration',
        'Cross-platform support',
        'Sync features rollout'
      ]
    },
    {
      phase: 'Phase 6',
      title: 'Official Release',
      period: 'H1 2027',
      status: 'upcoming',
      items: [
        'Stable release for all platforms',
        'Marketing campaign',
        'Extension marketplace',
        'Premium features launch'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-400/20';
      case 'upcoming': return 'text-blue-400 bg-blue-400/20';
      default: return theme === 'dark' ? 'text-white/40 bg-white/5' : 'text-black/40 bg-[#F0EBE3]';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'upcoming': return 'Upcoming';
      default: return 'Planned';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'in-progress':
        return (
          <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'upcoming':
        return (
          <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

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
            className={`inline-flex items-center transition-colors mb-6 ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}
          >
            ← Back to Home
          </Link>
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Development Roadmap</h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}>
            From concept to reality. Here&apos;s our journey building the future of web browsing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 hidden md:block ${
            theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
          }`} />

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative mb-12 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 top-0 w-5 h-5 rounded-full border-4 hidden md:block ${
                theme === 'dark' ? 'border-[#232223]' : 'border-[#FAE9D5]'
              } ${
                milestone.status === 'completed' ? 'bg-green-400' :
                milestone.status === 'in-progress' ? 'bg-yellow-400' :
                theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
              }`} />

              <div className={`border rounded-lg p-6 transition-all ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-[#F0EBE3] border-black/10 hover:bg-[#E4DED4]'
              }`}>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <div>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/40' : 'text-black/40'
                    }`}>{milestone.phase}</span>
                    <h3 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>{milestone.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(milestone.status)}`}>
                      {getStatusIcon(milestone.status)}
                      {getStatusText(milestone.status)}
                    </span>
                    <div className={`text-sm mt-1 ${
                      theme === 'dark' ? 'text-white/40' : 'text-black/40'
                    }`}>{milestone.period}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {milestone.items.map((item, j) => (
                    <li key={j} className={`flex items-start gap-2 ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>
                      <span className={theme === 'dark' ? 'text-white/40 mt-1' : 'text-black/40 mt-1'}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`text-center mt-16 pt-12 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Join Us on This Journey</h2>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          }`}>
            Be part of the Solar Browser story. Get early access and help shape the future.
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









