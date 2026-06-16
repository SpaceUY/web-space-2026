import { defineConfig } from 'astro/config';
import { readFileSync, readdirSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

/**
 * Build a slug → lastmod map from content frontmatter so the sitemap can emit
 * honest <lastmod> values (Google uses lastmod for recrawl prioritization;
 * it ignores changefreq/priority). Only blog posts and case studies have
 * reliable dates — other pages omit lastmod rather than faking it.
 */
function contentDates(dir) {
  const map = {};
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md')) continue;
    const src = readFileSync(`${dir}/${f}`, 'utf8');
    const updated = src.match(/^updatedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m);
    const published = src.match(/^publishedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m);
    const date = (updated ?? published)?.[1];
    if (date) map[f.replace(/\.md$/, '')] = date;
  }
  return map;
}

const blogDates = contentDates('./src/content/blog');
const caseDates = contentDates('./src/content/case-studies');

// https://astro.build/config
export default defineConfig({
  site: 'https://spacedev.io',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  integrations: [sitemap({
    filter: (page) =>
      !page.endsWith('/404') &&
      !page.endsWith('/terms-and-conditions/') &&
      !page.endsWith('/privacy-policy/') &&
      !page.endsWith('/coming-soon/') &&
      !page.endsWith('/ui-kit/') &&
      !page.includes('/post/'),
    serialize(item) {
      const url = item.url;

      // lastmod from content frontmatter (blog posts and case studies)
      const blogMatch = url.match(/\/blog\/([^/]+)\/?$/);
      const caseMatch = url.match(/\/case-study\/([^/]+)\/?$/);
      const lastmod =
        (blogMatch && blogDates[blogMatch[1]]) ||
        (caseMatch && caseDates[caseMatch[1]]) ||
        undefined;
      if (lastmod) item = { ...item, lastmod };

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
