// StatsBlock.tsx
'use client';

import React from 'react';

const stats = [
  { number: '16', label: 'Age of Developers', description: 'Solar is built by a team of passionate 16-year-old developers.' },
  { number: '0', label: 'Investment', description: 'Developed with zero budget. 100% indie, 100% passion.' },
  { number: '0', label: 'Compromises on Privacy', description: 'We never collect, sell, or compromise your personal data. Ever.' },
  { number: '\u221e', label: 'Possibilities Ahead', description: 'With AI at the core, the potential for innovation is truly limitless.' }
];

export default function StatsBlock() {
  return (
    <section className="py-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-700 mb-4">{stat.label}</div>
              <p className="text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
