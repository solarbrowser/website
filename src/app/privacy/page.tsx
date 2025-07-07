import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TabView from '@/components/TabView';



const desktopContent = (
  <div className="prose prose-lg max-w-none">
    <h2 className="text-2xl font-bold mb-2">Solar Privacy Policy – Desktop Version</h2>
    <p className="text-sm text-gray-500 mb-6"><strong>Last updated:</strong> July 7, 2025</p>
    <ul className="space-y-6">
      <li>
        <h3 className="font-semibold text-lg mb-1">1. Purpose and Philosophy</h3>
        <p>Solar Desktop aims to provide a fast, customizable, and privacy-respecting browsing experience. Sync, accounts, and AI features are optional and transparent, giving you full control of your data.</p>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">2. Data We Do and Do Not Collect</h3>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <span className="font-semibold">We Do Not Collect by Default:</span>
            <ul className="ml-4 list-[circle]">
              <li>Any personally identifiable information (PII) such as names, emails, or device IDs unless you create an account</li>
              <li>Browsing history, search queries, or form inputs unless sync is enabled</li>
              <li>Passwords or credentials unless you enable the password manager</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Data We May Temporarily Process:</span>
            <ul className="ml-4 list-[circle]">
              <li>Crash reports: Anonymized and used to improve software stability.</li>
              <li>AI summary requests:
                <ul className="ml-4 list-[square]">
                  <li>Free-tier users’ data is sent to the external AI provider (Gemini 2.0 Flash).</li>
                  <li>Premium users using cloud mode do not have their data sent outside Solar servers.</li>
                  <li>Local AI mode keeps all data on your device.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Server Usage and Synchronization:</span>
            <ul className="ml-4 list-[circle]">
              <li>Sync is optional and encrypted end-to-end.</li>
              <li>Sync data (tabs, history, bookmarks) is sent encrypted and only readable by your devices.</li>
              <li>If syncing on a single device, data is stored encrypted on our servers for a user-specified time period.</li>
              <li>Account deletion permanently removes all server-stored sync data.</li>
              <li>Password manager data is encrypted on servers and only decryptable by you.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">3. AI Data Usage Disclaimer</h3>
        <ul className="ml-4 list-disc">
          <li>Free-tier AI summary data is sent to the external provider (Gemini 2.0 Flash) for processing.</li>
          <li>Premium cloud mode processes data internally without sharing externally.</li>
          <li>Local AI mode processes data on your machine only, without network transmission.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">4. Cookies and Third-Party Content</h3>
        <ul className="ml-4 list-disc">
          <li>Solar does not place cookies.</li>
          <li>Third-party websites may place cookies and trackers. Solar is not responsible for these.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">5. Children and Responsibility</h3>
        <ul className="ml-4 list-disc">
          <li>Suitable for all ages.</li>
          <li>Guardians are responsible for managing access to harmful content. Solar does not moderate content.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">6. Your Rights</h3>
        <ul className="ml-4 list-disc">
          <li>You may delete your Solar account at any time.</li>
          <li>Account deletion removes all synced data and password storage permanently.</li>
          <li>For support, contact: <a href="mailto:support@browser.solar">support@browser.solar</a></li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">7. Data Breach Notification and Contact Information</h3>
        <ul className="ml-4 list-disc">
          <li>If a breach affects server-stored data, we commit to notifying affected users within 72 hours as per regulations.</li>
          <li>Users with accounts receive email notifications; others are notified via app or public channels.</li>
          <li>We do not sell, rent, or share your data with third parties.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">8. Jurisdiction and GDPR Compliance</h3>
        <ul className="ml-4 list-disc">
          <li>Governed by Turkish law; disputes resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</li>
          <li>GDPR is fully respected for European users.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">9. Security and Software Audits</h3>
        <ul className="ml-4 list-disc">
          <li>Passwords and sync data are stored encrypted with multiple layers.</li>
          <li>Only you hold the master decryption key.</li>
          <li>Regular security audits are performed, and critical issues are addressed promptly.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">10. Marketing and Privacy Expectations</h3>
        <ul className="ml-4 list-disc">
          <li>Solar emphasizes user safety, freedom, and control but is not a privacy tool like Tor or VPN.</li>
          <li>We clearly communicate this to avoid misleading impressions.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">11. Data Deletion and Account Removal</h3>
        <ul className="ml-4 list-disc">
          <li>Account deletion permanently erases all associated data from servers.</li>
          <li>Users are informed if any issue occurs during deletion, and corrective steps are taken.</li>
        </ul>
      </li>
    </ul>
  </div>
);

const mobileContent = (
  <div className="prose prose-lg max-w-none">
    <h2 className="text-2xl font-bold mb-2">Solar Privacy Policy – Mobile Version</h2>
    <p className="text-sm text-gray-500 mb-6"><strong>Last updated:</strong> July 7, 2025</p>
    <ul className="space-y-6">
      <li>
        <h3 className="font-semibold text-lg mb-1">1. Purpose and Philosophy</h3>
        <p>Solar Mobile is designed to offer you a safe, free, and private browsing experience. Your data stays on your device — we do not track or store it. Our goal is to give you speed, customization, and control without compromising privacy.</p>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">2. Data We Do and Do Not Collect</h3>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <span className="font-semibold">We Do Not Collect:</span>
            <ul className="ml-4 list-[circle]">
              <li>Any personally identifiable information (PII) such as names, emails etc.</li>
              <li>Your browsing history, search queries, or form inputs</li>
              <li>Passwords or any credential data</li>
              <li>Sync data — there is no sync or account system on mobile</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Data We Temporarily Process:</span>
            <ul className="ml-4 list-[circle]">
              <li>Crash reports: These are anonymized and used only to improve app stability. No personal info is included.</li>
              <li>AI summary requests: When you use the optional AI summary feature, selected text is sent directly to the AI provider (Gemini 2.0 Flash). This only happens if you explicitly enable the feature.</li>
              <li>We advise against submitting sensitive or confidential data, as the AI provider may use this information for model training.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Server Usage and Synchronization:</span>
            <ul className="ml-4 list-[circle]">
              <li>Mobile uses Firebase only to deliver app news.</li>
              <li>No data is sent back from your device to our servers.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">3. AI Data Usage Disclaimer</h3>
        <ul className="ml-4 list-disc">
          <li>Users of the AI summary feature must understand that data sent to the AI provider goes directly to the provider, not Solar.</li>
          <li>The AI provider may use the data for training and improvements.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">4. Cookies and Third-Party Content</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile does not place cookies.</li>
          <li>Websites you visit may use cookies or trackers, which Solar does not control.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">5. Children and Responsibility</h3>
        <ul className="ml-4 list-disc">
          <li>Suitable for all ages.</li>
          <li>Accessing harmful or inappropriate content on the web is the responsibility of users and/or their guardians. Solar does not moderate web content.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">6. Your Rights</h3>
        <ul className="ml-4 list-disc">
          <li>You may delete the app or stop using Solar Mobile at any time.</li>
          <li>Since no accounts or personal data are stored, no deletion requests are needed for server data.</li>
          <li>For support, contact: <a href="mailto:support@browser.solar">support@browser.solar</a></li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">7. Data Breach Notification and Contact</h3>
        <ul className="ml-4 list-disc">
          <li>Since no personal data is stored server-side, a data breach involving user data is not possible for the mobile app.</li>
          <li>Notifications about app issues or security updates will be provided via app updates or official channels.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">8. Jurisdiction and GDPR Compliance</h3>
        <ul className="ml-4 list-disc">
          <li>Governed by Turkish law and disputes resolved in Istanbul Çağlayan Courthouse (Çağlayan Adliyesi).</li>
          <li>GDPR rights are respected for EU users and enforced as applicable.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">9. Security and Software Audits</h3>
        <ul className="ml-4 list-disc">
          <li>Mobile app data stays locally and no personal data is transmitted or stored remotely.</li>
          <li>We regularly audit app code for vulnerabilities and security.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">10. Marketing and Privacy Expectations</h3>
        <ul className="ml-4 list-disc">
          <li>Solar Mobile is not a privacy tool like Tor or VPN.</li>
          <li>It emphasizes safety, speed, and control without misleading claims.</li>
        </ul>
      </li>
      <li>
        <h3 className="font-semibold text-lg mb-1">11. Data Deletion and Account Removal</h3>
        <ul className="ml-4 list-disc">
          <li>Uninstalling the app removes all data on your device.</li>
          <li>There is no server-side account or data to delete on mobile.</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-8">
            {/* Icon can stay here if desired */}
            <span className="text-sm font-medium text-green-600">Privacy First</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">This Privacy Policy explains how Solar Browser (&quot;Solar&quot;, &quot;we&quot;, &quot;our&quot;) handles your data when you use the application and its services.</p>
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
