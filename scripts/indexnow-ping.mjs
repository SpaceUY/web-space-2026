#!/usr/bin/env node
/**
 * Pings IndexNow (Bing, Yandex, Seznam, Naver) with every URL in the live sitemap.
 * Run AFTER the DNS switch, once https://spacedev.io serves the new site:
 *   node scripts/indexnow-ping.mjs
 */
const HOST = "spacedev.io";
const KEY = "abde11749d2401d5a08c76f66af3a586";
const SITEMAP_INDEX = `https://${HOST}/sitemap-index.xml`;

async function fetchXml(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const sitemaps = extractLocs(await fetchXml(SITEMAP_INDEX));
const urls = (
  await Promise.all(sitemaps.map((s) => fetchXml(s).then(extractLocs)))
).flat();

console.log(`Submitting ${urls.length} URLs to IndexNow…`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow response: HTTP ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log("✓ URLs accepted. Bing/Yandex/Seznam/Naver notified.");
} else {
  console.error(await res.text());
  process.exit(1);
}
