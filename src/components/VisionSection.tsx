'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Custom Grid Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="vision-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#bfc6d1" strokeWidth="1.5" opacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vision-grid)" />
        </svg>
        {/* Decorative blurred orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Vision Manifesto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Solar exists and how we're reshaping the digital landscape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Quote className="w-16 h-16 text-gray-300 mb-8" />
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
              "The internet has given us limitless information, but our tools to navigate it remain 
              fundamentally unchanged. We believe it's time for browsing to evolve – to become as 
              intelligent and adaptive as the minds using it."
            </blockquote>
            <div className="flex items-center space-x-4">
              <img
                src="/vertex.jpg"
                alt="Vertex Corporation Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow"
              />
              <div>
                <div className="font-semibold text-gray-900">Vertex Corporation</div>
                <div className="text-gray-600">Founding Team</div>
              </div>
            </div>
          </motion.div>

          {/* Vision Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {[
              {
                title: 'Intelligence First',
                description: 'Every interaction should learn from you, anticipate your needs, and continuously improve your digital experience.',
              },
              {
                title: 'Privacy by Design',
                description: 'Your data belongs to you. Our AI works locally, learning your patterns without compromising your privacy.',
              },
              {
                title: 'Universal Compatibility',
                description: 'Breaking down the walls between browser ecosystems. One platform, endless possibilities.',
              },
              {
                title: 'Infinite Adaptability',
                description: 'Your browser should be as unique as you are. Complete customization without limitation.',
              },
            ].map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section removed as requested */}
      </div>
    </section>
  );
};

export default VisionSection;
