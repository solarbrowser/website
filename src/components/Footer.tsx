'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Instagram, Mail } from 'lucide-react';
import { X as XLogo } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission logic
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const navigationLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Security', href: '/security' },
    { name: 'Developers', href: '/developers' },
    { name: 'Vision', href: '/vision' },
    { name: 'Blog', href: '/blog' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-use' },
  ];

  const socialLinks = [
    { name: 'X', href: 'https://x.com/solarbrowser', icon: XLogo },
    { name: 'Instagram', href: 'https://instagram.com/solarbrowser', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/solarbrowser', icon: Github },
    { name: 'Email', href: 'mailto:support@browser.solar', icon: Mail },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section removed as requested */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Solar Browser Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">Solar</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The future of web browsing is here. Experience AI-powered browsing that learns, 
              protects, and adapts to you. Join the revolution.
            </p>

            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  style={{ marginRight: '8px' }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Built with ❤️ by Vertex Corporation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vertex Corporation. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Designed for the future. Built for today.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
