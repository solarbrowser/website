import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TabView from '@/components/TabView';

const mobileContent = (
  <div className="prose prose-lg max-w-none">
    <h2 className="text-2xl font-bold mb-2">Solar Terms of Use – Mobile Version</h2>
    <p className="text-sm text-gray-500 mb-6"><strong>Last updated:</strong> July 7, 2025</p>
    <ul className="space-y-6">
      <li>
        <h3 className="font-semibold text-lg mb-1">1. Licensing</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile is licensed under the GNU General Public License v3 (GPLv3).</li>
          <li>The Solar name, logo, and branding are trademarks and cannot be used without permission.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">2. Acceptable Use</h3>
        <ul className="ml-4 list-disc">
          <li>You may not use Solar Mobile for illegal activities.</li>
          <li>You must not attempt to interfere with app stability or security.</li>
          <li>AI features are for personal use only.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">3. Account and Data</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile does not have accounts or sync features.</li>
          <li>No user data is stored on our servers from the mobile app.</li>
          <li>You can delete the app at any time to remove all local data.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">4. Service Changes</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile may modify, add, or remove features at any time without notice.</li>
          <li>PWA, AI, or other features may be deprecated or replaced.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">5. AI Disclaimer</h3>
        <ul className="ml-4 list-disc">
          <li>Solar is not responsible for AI-generated content.</li>
          <li>AI outputs are created and managed by third-party providers (e.g., Gemini 2.0 Flash).</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">6. Liability Disclaimer</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile is provided as-is without warranty.</li>
          <li>We are not liable for any loss, damage, or data exposure caused by user actions or third-party websites.</li>
          <li>You are responsible for how you use the app and which websites you visit.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">7. Children</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile does not restrict access by age.</li>
          <li>Guardians are responsible for monitoring and controlling use by minors.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">8. Legal Jurisdiction</h3>
        <ul className="ml-4 list-disc">
          <li>These Terms are governed by the laws of the Republic of Türkiye.</li>
          <li>Any disputes shall be resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">9. Contact</h3>
        <ul className="ml-4 list-disc">
          <li>For all legal or support inquiries:</li>
          <li>📧 <a href="mailto:support@browser.solar">support@browser.solar</a></li>
        </ul>
      </li>
    </ul>
  </div>
);

const desktopContent = (
  <div className="prose prose-lg max-w-none">
    <h2 className="text-2xl font-bold mb-2">Solar Terms of Use – Desktop Version</h2>
    <p className="text-sm text-gray-500 mb-6"><strong>Last updated:</strong> July 7, 2025</p>
    <ul className="space-y-6">
      <li>
        <h3 className="font-semibold text-lg mb-1">1. Licensing</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Desktop is licensed under the Mozilla Public License 2.0 (MPL 2.0).</li>
          <li>The Solar name, logo, and branding are trademarks and cannot be used without permission.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">2. Acceptable Use</h3>
        <ul className="ml-4 list-disc">
          <li>You may not use Solar Desktop for illegal activities.</li>
          <li>You must not interfere with server operations or security measures.</li>
          <li>AI features are for personal use only.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">3. Account and Data</h3>
        <ul className="ml-4 list-disc">
          <li>You may delete your account at any time.</li>
          <li>When sync is disabled or limited to a single device, data on our servers is deleted unless backup is enabled.</li>
          <li>We do not keep your private data longer than necessary for functionality.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">4. Service Changes</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Desktop may modify, add, or remove features at any time without notice.</li>
          <li>PWA, AI, or sync features may be deprecated or replaced.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">5. AI Disclaimer</h3>
        <ul className="ml-4 list-disc">
          <li>Solar is not responsible for AI-generated content.</li>
          <li>All AI output is created and managed by third-party providers.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">6. Liability Disclaimer</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Desktop is provided as-is with no warranty.</li>
          <li>We are not liable for any loss, damage, or data exposure caused by user behavior or third-party websites.</li>
          <li>You are responsible for how you use the browser and which sites you visit.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">7. Children</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Desktop does not restrict access by age.</li>
          <li>Guardians are responsible for monitoring use by minors.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">8. Legal Jurisdiction</h3>
        <ul className="ml-4 list-disc">
          <li>These Terms are governed by the laws of the Republic of Türkiye.</li>
          <li>Any disputes shall be resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">9. Contact</h3>
        <ul className="ml-4 list-disc">
          <li>For all legal or support inquiries:</li>
          <li>📧 <a href="mailto:support@browser.solar">support@browser.solar</a></li>
        </ul>
      </li>
    </ul>
  </div>
);

export default function TermsPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-8">
            {/* Icon can stay here if desired */}
            <span className="text-sm font-medium text-blue-600">Legal Terms</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-xl text-gray-600 leading-relaxed">These Terms govern your use of Solar Browser and related services. By using Solar, you agree to the following terms.</p>
          <p className="text-sm text-gray-500 mt-6">Last updated: July 7, 2025</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <TabView
            tabs={[
              { label: 'Mobile', content: mobileContent },
              { label: 'Desktop', content: desktopContent },
            ]}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
