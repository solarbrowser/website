'use client';

import Nav from './Nav';
import Footer from './Footer';
import { WaitlistProvider, useWaitlist } from './WaitlistProvider';

function ShellNav() {
  const { open } = useWaitlist();
  return <Nav onWaitlist={open} />;
}

/**
 * Every page gets the same navigation, ground and footer. Sub-pages used to
 * ship none of it -- just a "back to home" link -- which left the whole site
 * unreachable from anywhere but the homepage.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <WaitlistProvider>
      <ShellNav />
      <main>{children}</main>
      <Footer />
    </WaitlistProvider>
  );
}
