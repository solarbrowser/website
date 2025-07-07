import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center py-32 px-4">
        <div className="flex flex-col items-center">
          <Ghost className="w-20 h-20 text-gray-300 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-500 mb-8 text-center max-w-md">
            Sorry, the page you are looking for does not exist or has been moved.<br />
            If you think this is a mistake, please contact <a href="mailto:support@browser.solar" className="underline">support@browser.solar</a>.
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-colors duration-200">
            Go to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
