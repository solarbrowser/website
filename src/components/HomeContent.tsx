'use client';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ArgumentFlow from '@/components/ArgumentFlow';
import Outro from '@/components/Outro';
import Footer from '@/components/Footer';
import { WaitlistProvider, useWaitlist } from '@/components/WaitlistProvider';

function Shell() {
  const { open } = useWaitlist();

  return (
    <>
      <Nav onWaitlist={open} />
      <main>
        <Hero />
        <ArgumentFlow />
        <Outro onWaitlist={open} />
      </main>
      <Footer />
    </>
  );
}

/**
 * Split out of app/page.tsx so the route itself stays a server component and
 * can export metadata -- a client page cannot.
 */
export default function HomeContent() {
  return (
    <WaitlistProvider>
      <Shell />
    </WaitlistProvider>
  );
}
