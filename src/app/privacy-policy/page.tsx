import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'What Solar collects, what this website collects, and what happens to it.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="14 August 2026"
      href="/privacy-policy"
      intro="The browser does not exist yet, so it has no privacy policy. This website does exist, and it collects one thing -- that part is documented in full below."
    >
      <h2>The browser</h2>
      <p>
        Solar has not shipped a build. It collects nothing because there is
        nothing to collect with. A privacy policy for the browser gets written
        against a real product -- what it actually sends, when, and to whom --
        rather than against intentions, and it will appear here when there is
        something to describe.
      </p>
      <p>
        The design commitments are stated on the rest of the site: a single
        anonymised usage ID -- used only to count daily searches and unique
        users, and switchable off in settings -- no profile building, no selling
        or sharing, and end-to-end encrypted sync. Those are goals, stated as
        goals. They are not a policy and you should not read them as one.
      </p>

      <h2>This website</h2>
      <p>
        This part is not hypothetical. The site is static, has no accounts and
        no analytics, and there is exactly one place where you can hand over
        personal data.
      </p>

      <h3>The waitlist</h3>
      <ul>
        <li>
          <strong>What is collected:</strong> your email address, and nothing
          else. No name, no IP logging by us, no tracking pixel.
        </li>
        <li>
          <strong>Why:</strong> to send you one email on the day the first build
          is downloadable.
        </li>
        <li>
          <strong>Where it goes:</strong> the form submits to{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer">
            Formspree
          </a>
          , a third-party form service that receives and stores the submission
          on our behalf, under its own privacy policy.
        </li>
        <li>
          <strong>How long:</strong> until the launch email goes out, or until
          you ask for it to be removed -- whichever comes first.
        </li>
        <li>
          <strong>Never:</strong> sold, rented, or shared with anyone beyond the
          form service that carries it.
        </li>
      </ul>

      <h3>Storage in your browser</h3>
      <p>
        Two entries, both minimal, both described in detail in the{' '}
        <a href="/cookie-policy">cookie policy</a>: a colour-mode preference in
        local storage, and a waitlist flag cookie. Neither identifies you.
      </p>

      <h3>Third-party content</h3>
      <p>
        The site loads a Buy Me a Coffee support widget from that provider. It
        is the only third-party script here, and it operates under its own
        policy. There are no analytics, no advertising scripts and no social
        trackers.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>
          You can ask what we hold about you, and ask for it to be deleted, by
          writing to{' '}
          <a href="mailto:support@browser.solar">support@browser.solar</a>. In
          practice the answer is either an email address or nothing at all.
        </li>
        <li>
          You can clear the browser storage yourself at any time through your
          browser settings.
        </li>
        <li>
          GDPR rights are respected for users in the EU and applied as
          applicable.
        </li>
      </ul>

      <h2>Jurisdiction</h2>
      <p>
        Governed by the laws of the Republic of Türkiye; disputes resolved in
        Istanbul Küçükçekmece Courthouse (Küçükçekmece Adliyesi).
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:support@browser.solar">support@browser.solar</a>
      </p>
    </LegalPage>
  );
}
