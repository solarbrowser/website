'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Brain, Shield, Puzzle, Palette, ArrowRight, Sparkles } from 'lucide-react';

import Link from 'next/link';
import WaitlistModal from './WaitlistModal';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Core',
      subtitle: 'Intelligent Browsing Engine',
      description: 'Solar learns from your browsing patterns to proactively manage tabs, optimize performance, and anticipate your needs. Experience browsing that gets smarter every day.',
      highlights: ['Predictive tab management', 'Intelligent resource allocation', 'Adaptive performance optimization'],
      gradient: 'from-blue-500/20 via-purple-500/20 to-blue-600/20',
      glowColor: 'shadow-blue-500/25',
      iconBg: 'bg-gradient-to-r from-blue-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Proactive AI Security',
      subtitle: 'Beyond Traditional Protection',
      description: 'Revolutionary behavioral analysis detects and blocks zero-day threats in real-time. Our AI security doesn\'t just react – it predicts and prevents.',
      highlights: ['Zero-day threat detection', 'Real-time behavioral analysis', 'Proactive threat prevention'],
      gradient: 'from-green-500/20 via-emerald-500/20 to-green-600/20',
      glowColor: 'shadow-green-500/25',
      iconBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
    },
    {
      icon: Puzzle,
      title: 'Universal Extension Ecosystem',
      subtitle: 'Unlimited Compatibility',
      description: 'Support for extensions from all major browsers in one unified ecosystem. Developers enjoy unlimited creative freedom in our platform-agnostic environment.',
      highlights: ['Cross-browser compatibility', 'Unified ecosystem', 'Developer-friendly APIs'],
      gradient: 'from-purple-500/20 via-violet-500/20 to-purple-600/20',
      glowColor: 'shadow-purple-500/25',
      iconBg: 'bg-gradient-to-r from-purple-500 to-violet-600',
    },
    {
      icon: Palette,
      title: 'Infinite Customization',
      subtitle: 'Your Personal Canvas',
      description: 'Transform every pixel and interaction to match your workflow. From interface aesthetics to core functionality – make Solar truly yours.',
      highlights: ['Pixel-perfect customization', 'Workflow optimization', 'Personal theming engine'],
      gradient: 'from-orange-500/20 via-red-500/20 to-orange-600/20',
      glowColor: 'shadow-orange-500/25',
      iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
    },
  ];

  // Stats block moved to StatsBlock component

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-rotate-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-semibold text-gray-600">Revolutionary Technology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-gradient">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four pillars of innovation that redefine what a browser can be.
            Each feature designed to elevate your digital experience to unprecedented heights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`relative group glass-effect rounded-3xl p-8 border border-gray-200/50 backdrop-blur-xl bg-gradient-to-br ${feature.gradient} hover:${feature.glowColor} hover:shadow-2xl transition-all duration-500 transform-gpu perspective-1000`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Floating icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 360,
                  transition: { duration: 0.6 }
                }}
                className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl mb-6 shadow-lg transform-gpu`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  {feature.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Highlights with enhanced styling */}
              <div className="space-y-3 mb-6 relative z-10">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <motion.div 
                    key={highlightIndex} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + highlightIndex * 0.1 }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="text-sm text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Learn More Link */}
              <Link href="/features" className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:text-gray-700 transition-all duration-200 cursor-pointer relative z-10 group/link">
                <span className="relative">
                  Learn more
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/link:w-full"></div>
                </span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* 3D border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gray-300/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gray-300/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Homepage Stats removed as requested */}

        {/* ...existing code... */}
      </div>
    </section>
  );
};

export default FeaturesSection;
