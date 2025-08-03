'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DemoVideoBanner = () => {
  const handleDemoClick = () => {
    // Demo video dosyasını yeni sekmede aç
    window.open('/demo_video.mp4', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <button
            onClick={handleDemoClick}
            className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-200 group"
          >
            <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium text-sm">Demo Video for the Solar Project</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DemoVideoBanner;
