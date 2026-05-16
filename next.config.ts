import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ksurvivalkit.com' }],
        destination: 'https://ksurvivalkit.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
