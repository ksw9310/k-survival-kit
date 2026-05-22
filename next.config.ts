import type { NextConfig } from "next";

// Page slugs that exist under /[lang]/ — redirected to /en/ when accessed without lang prefix
const PAGE_SLUGS = [
  'getting-started',
  'daily-life',
  'health',
  'housing',
  'visa',
  'how-to-get-sim-card-in-korea',
  'culture',
  'transport',
  'nearby',
  'making-friends',
  'emergency-korean',
  'emergency-contacts',
  'arc-card-korea-guide',
  'best-bank-account-for-foreigners-korea',
  'how-to-send-money-from-korea',
  'korea-delivery-apps-guide',
  'korea-health-insurance-guide',
  'korea-rent-deposit-system',
  'part-time-jobs-korea',
  'about',
  'terms',
].join('|');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www (301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ksurvivalkit.com' }],
        destination: 'https://ksurvivalkit.com/:path*',
        permanent: true,
      },
      // /:slug (no lang prefix) → /en/:slug (301)
      // Catches URLs like /health, /arc-card-korea-guide that Google found without lang prefix
      {
        source: `/:slug(${PAGE_SLUGS})`,
        destination: '/en/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
