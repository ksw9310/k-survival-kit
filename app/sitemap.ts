import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

const baseUrl = 'https://ksurvivalkit.com';

const categoryRoutes = [
  '',
  '/getting-started',
  '/daily-life',
  '/health',
  '/housing',
  '/culture',
  '/visa',
  '/nearby',
  '/transport',
  '/making-friends',
  '/emergency-contacts',
  '/emergency-korean',
  '/about',
];

const blogRoutes = [
  '/arc-card-korea-guide',
  '/best-bank-account-for-foreigners-korea',
  '/how-to-get-sim-card-in-korea',
  '/korea-delivery-apps-guide',
  '/korea-rent-deposit-system',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const categoryEntries = locales.flatMap((lang) =>
    categoryRoutes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
  );

  const blogEntries = locales.flatMap((lang) =>
    blogRoutes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...categoryEntries, ...blogEntries];
}
