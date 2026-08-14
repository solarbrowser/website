import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'The two things this site stores in your browser, and why.',
  alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie policy"
      updated="14 August 2026"
      href="/cookie-policy"
      intro="This site stores two things in your browser. Neither identifies you, and neither follows you anywhere else."
    >
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help a site remember your preferences and actions.
        Browsers also offer <strong>local storage</strong>, which works the same
        way from your point of view but is never sent to a server.
      </p>

      <h2>What this site stores</h2>
      <p>
        Two entries, both created only when you do something that needs them.
      </p>

      <h3>Colour mode -- local storage</h3>
      <ul>
        <li>
          <strong>Key:</strong> <code>solar-mode</code>
        </li>
        <li>
          <strong>Type:</strong> local storage, not a cookie -- it is never
          transmitted to us
        </li>
        <li>
          <strong>Purpose:</strong> to remember whether you chose Auto, Light or
          Dark
        </li>
        <li>
          <strong>Value:</strong> one of <code>auto</code>, <code>light</code>{' '}
          or <code>dark</code>
        </li>
        <li>
          <strong>Duration:</strong> until you clear site data
        </li>
        <li>
          <strong>Written:</strong> only when you pick a mode. In the default
          Auto mode, the palette is chosen from your device clock and nothing is
          stored at all.
        </li>
      </ul>

      <h3>Waitlist -- cookie</h3>
      <ul>
        <li>
          <strong>Name:</strong> <code>solar_waitlist</code>
        </li>
        <li>
          <strong>Type:</strong> essential cookie, for spam prevention
        </li>
        <li>
          <strong>Purpose:</strong> to remember that you have already joined the
          waitlist
        </li>
        <li>
          <strong>Value:</strong> a single <code>true</code> flag
        </li>
        <li>
          <strong>Duration:</strong> 365 days
        </li>
        <li>
          <strong>Written:</strong> only after you successfully submit the
          waitlist form
        </li>
      </ul>

      <p>
        Neither entry stores personal information, tracking data, or anything
        identifiable about you.
      </p>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We do not use tracking cookies</li>
        <li>We do not use advertising cookies</li>
        <li>We do not use analytics cookies</li>
        <li>We do not share cookie data with third parties</li>
        <li>We do not use cookies to follow you across other websites</li>
      </ul>

      <h2>Third-party content</h2>
      <p>
        This site embeds a Buy Me a Coffee support widget, which is loaded from
        that provider and may set its own storage under its own policy. That is
        the only third-party script on the site.
      </p>

      <h2>Managing what is stored</h2>
      <p>You have full control:</p>
      <ul>
        <li>
          You can delete either entry at any time through your browser settings
        </li>
        <li>You can block cookies entirely in your browser preferences</li>
        <li>
          Deleting the waitlist cookie will let you submit the form again,
          though there is no reason to
        </li>
        <li>
          Deleting the colour mode entry simply returns the site to Auto
        </li>
      </ul>

      <h2>How to clear cookies in your browser</h2>
      <h3>Chrome / Edge</h3>
      <p>
        Settings → Privacy and security → Clear browsing data → Cookies and
        other site data
      </p>
      <h3>Firefox</h3>
      <p>Settings → Privacy &amp; Security → Cookies and Site Data → Clear Data</p>
      <h3>Safari</h3>
      <p>Settings → Privacy → Manage Website Data → Remove All</p>

      <h2>GDPR and privacy compliance</h2>
      <p>
        Our use of storage is minimal. The waitlist cookie is a
        &quot;strictly necessary&quot; cookie: it exists to prevent duplicate
        and spam submissions. The colour mode entry is local storage set only on
        your explicit action.
      </p>
      <p>
        Under GDPR and similar laws, strictly necessary cookies do not require
        explicit consent as they are essential to the site&apos;s legitimate
        operation. We list them here anyway so you know exactly what is stored
        and why.
      </p>

      <h2>Updates to this policy</h2>
      <p>
        We may update this policy from time to time. If we make significant
        changes, the &quot;Updated&quot; date at the top of this page changes
        with them.
      </p>

      <h2>Questions</h2>
      <p>
        Write to{' '}
        <a href="mailto:support@browser.solar">support@browser.solar</a>.
      </p>
    </LegalPage>
  );
}
