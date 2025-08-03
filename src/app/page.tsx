import Navigation from '@/components/Navigation';
import DemoVideoBanner from '@/components/DemoVideoBanner';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import VisionSection from '@/components/VisionSection';
import Footer from '@/components/Footer';

import StatsBlock from '@/components/StatsBlock';

export default function Home() {
  return (
    <main>
      <Navigation />
      <DemoVideoBanner />
      <div className="pt-32" />
      <HeroSection />
      <FeaturesSection />
      <VisionSection />
      {/* Stats block below Vision Manifesto */}
      <div className="pb-8" />
      <StatsBlock />
      <Footer />
    </main>
  );
}
