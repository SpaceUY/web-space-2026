import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://spacedev.io',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  integrations: [sitemap({
    filter: (page) =>
      !page.endsWith('/404') &&
      !page.endsWith('/terms-and-conditions/') &&
      !page.endsWith('/privacy-policy/'),
    serialize(item) {
      const url = item.url;
      // Home gets the highest priority and weekly updates
      if (url === 'https://spacedev.io/') {
        return { ...item, priority: 1.0, changefreq: 'weekly' };
      }
      // Service pages — high priority
      if (
        url.includes('/blockchain-development-services') ||
        url.includes('/innovative-web-and-mobile-solutions') ||
        url.includes('/staff-augmentation') ||
        url.includes('/product-discovery') ||
        url.includes('/blockaudit-')
      ) {
        return { ...item, priority: 0.9, changefreq: 'monthly' };
      }
      // Blog index + posts — refreshed regularly
      if (url.includes('/blog')) {
        return { ...item, priority: 0.7, changefreq: 'weekly' };
      }
      // Case studies — relatively stable
      if (url.includes('/case-study/') || url.includes('/our-work')) {
        return { ...item, priority: 0.7, changefreq: 'monthly' };
      }
      // Default for everything else
      return { ...item, priority: 0.5, changefreq: 'monthly' };
    },
  })],
});