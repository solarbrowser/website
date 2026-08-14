import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'There is no software to agree to terms about yet. What applies to this website today.',
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of use"
      updated="14 August 2026"
      href="/terms-of-use"
      intro="There is no software to agree to terms about yet. This page says so plainly instead of pretending otherwise."
    >
      <h2>Nothing has been released</h2>
      <p>
        Solar has not shipped a build. There is no application to install, no
        account to create, and no service being provided -- so there is nothing
        for terms of service to govern.
      </p>
      <p>
        Terms written now would describe a product that does not exist, and
        they would be wrong by the time it does. They get written when there is
        something real to write them about, and the date at the top of this page
        will change when that happens.
      </p>

      <h2>What applies today</h2>
      <p>
        This website is all there is right now. It is a set of static pages: no
        accounts, no login, no payment, nothing to subscribe to. Use it as you
        would any other public site.
      </p>
      <ul>
        <li>
          The only thing you can submit here is an email address, through the
          waitlist form. What happens to it is described in the{' '}
          <a href="/privacy-policy">privacy policy</a>.
        </li>
        <li>
          What this site stores in your browser is described in the{' '}
          <a href="/cookie-policy">cookie policy</a>.
        </li>
        <li>
          The Solar name, logo and branding are trademarks and cannot be used
          without permission, whether or not any software has shipped.
        </li>
        <li>
          Solar&apos;s source code is public on{' '}
          <a href="https://github.com/solarbrowser" target="_blank" rel="noreferrer">
            GitHub
          </a>
          , and each repository carries its own licence. That licence, not this
          page, is what governs the code.
        </li>
      </ul>

      <h2>No warranty</h2>
      <p>
        This site is provided as-is. Everything described on it is work in
        progress, and nothing here is a promise that any particular feature will
        ship, or ship in the form described.
      </p>

      <h2>Contact</h2>
      <p>
        For anything legal or otherwise:{' '}
        <a href="mailto:support@browser.solar">support@browser.solar</a>
      </p>
    </LegalPage>
  );
}
