import type { MetadataRoute } from 'next';

const SITE = 'https://browser.solar';

export const dynamic = 'force-static';

/**
 * Priorities are relative, not absolute: the homepage and the pages someone
 * would actually search for rank above the placeholders and the legal text.
 */
const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/roadmap', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/download', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/team', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/letter', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/support', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/docs', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/api', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/customize', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/import', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/shortcuts', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms-of-use', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
