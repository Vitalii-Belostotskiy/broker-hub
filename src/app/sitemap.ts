import type { MetadataRoute } from 'next';

const BASE_URL = 'https://luxury-hub-phi.vercel.app';
const LAST_MODIFIED = new Date('2026-04-28');

const locales = ['en', 'ru', 'uk', 'fr', 'it', 'es', 'zh', 'nl', 'ja', 'ko', 'he', 'ar', 'de', 'sv', 'hi', 'tw'];

export default function sitemap(): MetadataRoute.Sitemap {
  const main = locales.map((lang, i) => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: i === 0 ? 1 : 0.9,
  }));

  const privacy = locales.map((lang) => ({
    url: `${BASE_URL}/${lang}/privacy`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...main, ...privacy];
}
