import type { MetadataRoute } from 'next';

const BASE_URL = 'https://luxury-hub-phi.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
