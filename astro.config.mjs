import { defineConfig } from 'astro/config';
import { readFileSync, readdirSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { rehypeImageDimensions } from './src/lib/rehype-image-dimensions.mjs';

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

// Static pages with no frontmatter date: set by hand, and only updated when
// this page's actual visible content changes (not on every deploy).
const manualLastmod = {
  '/faqs': '2026-07-28',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://spacedev.io',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeImageDimensions],
  },
  adapter: vercel(),
  integrations: [partytown({
    // `forward` patches these globals on the main thread so calls made from our
    // own code reach the worker. Both entries are required, not just one:
    // BaseLayout, HubSpotForm, AgenticLeadForm and the agentic-ai page fire the
    // book_call_click and generate_lead conversions through `dataLayer.push`
    // *and* through `gtag(...)`. Without forwarding, those globals only exist
    // inside the worker and every conversion is dropped silently.
    // `debug` defaults to true in dev and preview, and the debug runtime throws
    // an async "Cannot read properties of undefined (reading 'apply')" whenever a
    // forwarded gtag() call lands before the worker has defined gtag. Pinning it
    // to false makes dev behave like production (where that error does not
    // happen) and keeps the console clean. Flip it to true temporarily if you
    // need Partytown's worker logs while debugging.
    config: { forward: ['dataLayer.push', 'gtag'], debug: false },
  }), sitemap({
    filter: (page) => {
      // Normalize: site uses trailingSlash 'never', so compare paths without
      // a trailing slash (the old endsWith('/x/') checks never matched the
      // real no-slash URLs, leaking noindex pages into the sitemap).
      const path = new URL(page).pathname.replace(/\/+$/, "") || "/";
      const excluded = [
        "/404",
        "/gone",
        "/terms-and-conditions",
        "/privacy-policy",
        "/legal/whatsapp-privacy",
        "/legal/whatsapp-terms",
        "/coming-soon",
        "/ui-kit",
        "/blockchain-development-services/industry",
      ];
      if (excluded.includes(path)) return false;
      if (path.includes("/post/")) return false;
      if (path.includes("/blog/tag")) return false;
      return true;
    },
    serialize(item) {
      const url = item.url;
      const path = new URL(url).pathname.replace(/\/+$/, "") || "/";

      // lastmod from content frontmatter (blog posts and case studies)
      const blogMatch = url.match(/\/blog\/([^/]+)\/?$/);
      const caseMatch = url.match(/\/our-work\/([^/]+)\/?$/);
      const lastmod =
        (blogMatch && blogDates[blogMatch[1]]) ||
        (caseMatch && caseDates[caseMatch[1]]) ||
        manualLastmod[path] ||
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
      if (url.includes('/our-work')) {
        return { ...item, priority: 0.7, changefreq: 'monthly' };
      }
      // Default for everything else
      return { ...item, priority: 0.5, changefreq: 'monthly' };
    },
  })],
});
