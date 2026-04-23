import type { MetadataRoute } from 'next'

// TODO: replace with actual domain when ready
const BASE_URL = 'https://propertyhub.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // allow: '/',
      disallow: '/'
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
