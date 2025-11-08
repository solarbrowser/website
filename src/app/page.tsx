'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Technology from '@/components/Technology';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <main className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-dark' : 'bg-[#FAF9F7]'}`}>
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <Experience />
      <Footer />
    </main>
  );
}








