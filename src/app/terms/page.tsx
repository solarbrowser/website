import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Scale className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Legal Terms</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-xl text-gray-600 leading-relaxed">These Terms govern your use of Solar Browser and related services. By using Solar, you agree to the following terms.</p>
          <p className="text-sm text-gray-500 mt-6">Last updated: July 7, 2025</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Licensing</h2>
            <ul>
              <li>Mobile version: Licensed under GNU GPL v3</li>
              <li>Desktop version: Licensed under Mozilla Public License 2.0 (MPL 2.0)</li>
              <li>The Solar name, logo, and branding are trademarked and cannot be used without permission.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">2. Acceptable Use</h2>
            <ul>
              <li>You may not use Solar for illegal activities.</li>
              <li>You must not attempt to interfere with server operations or security measures.</li>
              <li>AI features are for personal use only.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">3. Account and Data</h2>
            <ul>
              <li>You may delete your account at any time.</li>
              <li>When sync is disabled or limited to a single device, any data on our servers is deleted unless backup is enabled.</li>
              <li>We do not keep your private data longer than necessary for functionality.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">4. Service Changes</h2>
            <ul>
              <li>Solar may modify, add, or remove features at any time without notice.</li>
              <li>PWA, AI, or sync features may be deprecated or replaced.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">5. AI Disclaimer</h2>
            <ul>
              <li>We are not responsible for AI-generated content.</li>
              <li>All AI output is created and managed by third-party providers.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">6. Liability Disclaimer</h2>
            <ul>
              <li>Solar is provided as-is with no warranty.</li>
              <li>We are not liable for any loss, damage, or data exposure caused by user behavior or third-party websites.</li>
              <li>You are responsible for how you use the browser and which sites you visit.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">7. Children</h2>
            <ul>
              <li>Solar does not restrict access by age, but guardians are responsible for monitoring use by minors.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">8. Legal Jurisdiction</h2>
            <ul>
              <li>These Terms are governed by the laws of the Republic of Türkiye.</li>
              <li>Any disputes shall be resolved in Istanbul Anadolu Courts.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">9. Contact</h2>
            <p>For all legal or support inquiries:<br />📧 <a href="mailto:support@browser.solar">support@browser.solar</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
