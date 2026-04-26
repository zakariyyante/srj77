import { MetadataRoute } from 'next';

/**
 * sitemap.ts — XML sitemap submitted to Google Search Console.
 * Keeps Google (and AdsBot) aware of every indexable URL and
 * its update frequency, which improves landing-page quality scores.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ukcasinowin.com';
  const now  = new Date();

  return [
    {
      url:             `${base}/`,
      lastModified:    now,
      changeFrequency: 'daily',
      priority:        1.0,
    },
    {
      url:             `${base}/terms`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.4,
    },
    {
      url:             `${base}/privacy`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.4,
    },
  ];
}
