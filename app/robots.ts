import { MetadataRoute } from 'next';

/**
 * robots.ts — generated via Next.js App Router
 *
 * Google Ads compliance notes:
 *  - AdsBot-Google MUST NOT be blocked, otherwise Google Ads cannot crawl
 *    landing pages and ads will be disapproved / paused.
 *  - AdsBot-Google-Mobile covers mobile landing-page quality checks.
 *  - Googlebot-Image allows image ad assets to be indexed.
 *  - All sensitive/internal paths are disallowed for generic crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Google Ads crawlers — must stay fully open ──────────────────
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: '/',
      },
      // ── Standard Googlebot ──────────────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/_next/image/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // ── All other crawlers ──────────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://ukcasinowin.com/sitemap.xml',
    host: 'https://ukcasinowin.com',
  };
}
