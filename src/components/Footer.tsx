import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Download', href: '/download' },
      { label: 'Features', href: '/features' },
      // These have their own pages; pointing both at /docs collided on the
      // href key and lost a link, and buried two pages nothing else links to.
      { label: 'Customization', href: '/customize' },
      { label: 'Import data', href: '/import' },
      { label: 'Shortcuts', href: '/shortcuts' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Quanta engine', href: 'https://quanta.js.org/' },
      { label: 'Documentation', href: '/docs' },
      { label: 'GitHub', href: 'https://github.com/solarbrowser' },
      { label: 'API reference', href: '/api' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Team', href: '/team' },
      { label: 'Support us', href: '/support' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms of use', href: '/terms-of-use' },
      { label: 'Cookie policy', href: '/cookie-policy' },
      { label: 'support@browser.solar', href: 'mailto:support@browser.solar' },
    ],
  },
];

const social = [
  { label: 'X', href: 'https://x.com/solarbrowser' },
  { label: 'Instagram', href: 'https://instagram.com/solarbrowser' },
  { label: 'GitHub', href: 'https://github.com/solarbrowser' },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[110rem] px-6 pb-12 md:px-16 md:pb-16">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="label mb-5">{column.title}</h2>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-sm text-fg-2 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-6 md:mt-28 md:flex-row md:items-center md:justify-between">
        <p className="label">
          © {new Date().getFullYear()} Solar Browser
        </p>

        <ThemeSwitch />

        <ul className="flex gap-6">
          {social.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="label transition-colors duration-200 hover:text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
