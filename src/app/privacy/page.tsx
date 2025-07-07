import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-600">Privacy First</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">This Privacy Policy explains how Solar Browser ("Solar", "we", "our") handles your data when you use the application and its services.</p>
          <p className="text-sm text-gray-500 mt-6">Last updated: July 7, 2025</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose and Philosophy</h2>
            <p>Solar is designed to make you feel at home while browsing — safe, free, and in control. Your data stays yours. Our goal is to offer a browser that prioritizes customization, speed, and safety, without compromising your privacy.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">2. Data We Do and Do Not Collect</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">2.1 We Do Not Collect:</h3>
            <ul>
              <li>Any personally identifiable information (PII) by default (such as names, emails, device IDs)</li>
              <li>Your browsing history, search terms, or form inputs</li>
            </ul>
            <p className="mt-2"><strong>Important note:</strong> If you create a Solar account or join a waitlist related to Solar, you voluntarily provide your email address and/or other contact info. In these cases, we use this information solely to communicate service updates, security notifications, and related information. We never sell or share your data with third parties.</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">2.2 Data We Temporarily Process:</h3>
            <ul>
              <li>Crash reports (anonymized, for stability improvement)</li>
              <li>AI summary requests in the mobile version: These are sent directly to the AI provider (Gemini 2.0 Flash) if you’re a free user. Users must explicitly consent before using this feature. We advise against submitting sensitive or confidential information as the AI provider may use data for model training.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2">2.3 Server Usage and Synchronization:</h3>
            <ul>
              <li>Mobile: Firebase is used to deliver news or updates to the app. No data is sent back from your device.</li>
              <li>Desktop and multi-device sync is optional. When syncing your browsing data (tabs, history, etc.), an encrypted request including your device name (e.g., "Desktop-Solar") is sent to our servers. We cannot access this data in plaintext.</li>
              <li>Encrypted sync data is shared only between your devices under the same account as per your sync settings.</li>
              <li>If only one device is syncing, this data remains on the server for a period you specify (for example, “keep my history for 1 week”).</li>
              <li>When you delete your account, all data associated with your main account ID, including sync data, is permanently deleted from our servers.</li>
              <li>Password Manager: Your passwords are stored on our servers encrypted using multiple layers of encryption. Only you have the master key to decrypt your passwords.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">3. AI Data Usage Disclaimer</h2>
            <p>Free-tier users of Solar's AI summary feature must understand: The data you submit is sent directly to the AI provider, not to us. The provider may use this data for model training.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">4. Cookies and Third-Party Content</h2>
            <p>Solar does not place cookies. However, websites you visit might. We do not control or take responsibility for third-party sites and their cookies.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">5. Children and Responsibility</h2>
            <p>Solar is suitable for users of all ages. However: Accessing harmful content via the internet is the responsibility of the user and/or their guardians. We do not moderate the web itself.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">6. Your Rights</h2>
            <ul>
              <li>Delete your Solar account anytime</li>
              <li>Stop using Solar or any of its services at will</li>
              <li>Request support at: <a href="mailto:support@browser.solar">support@browser.solar</a></li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">7. Data Breach Notification and Contact Information</h2>
            <p>Solar Browser is committed to informing affected users in case of any data breach affecting servers within 72 hours, in compliance with relevant regulations.</p>
            <p>For users who have provided contact information (e.g., via account or waitlist), breach notifications will be sent to the registered email address within 72 hours.</p>
            <p>For users without contact info, notifications will be delivered via in-app messages, official social media channels, or public announcements on our website.</p>
            <p>We strictly do not sell, rent, or share your contact information with third parties.</p>
            <p>If you have any questions or need support, please contact us at: <a href="mailto:support@browser.solar">support@browser.solar</a></p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">8. Jurisdiction and GDPR Compliance</h2>
            <p>Our Terms specify that Turkish law and Istanbul courts govern disputes. However, GDPR applies to European users, and they may have rights to initiate proceedings in their jurisdiction. We respect applicable laws and will comply with GDPR requirements for EU users.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">9. Security and Software Audits</h2>
            <p>Your passwords are stored encrypted on our servers using multiple layers of encryption. Only you possess the master key to decrypt them. Solar regularly audits its software to detect vulnerabilities. Any critical security flaws will be promptly addressed. Legal responsibilities apply in cases of gross negligence or intentional misconduct.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">10. Marketing and Privacy Expectations</h2>
            <p>Solar emphasizes safety, freedom, and control, but it is not a privacy tool like Tor or VPN. This is clearly stated throughout our communications and policies to avoid misunderstandings or misleading impressions.</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">11. Data Deletion and Account Removal</h2>
            <p>When you delete your Solar account, all associated data including sync data is permanently erased from our servers. Users will be notified if any issues arise during deletion and corrective actions will be taken.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
