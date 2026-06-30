Date: 2026-05-18
Developer: Vero

- [13:00] Rewrote careers hero with dark photo overlay and matching font weight — src/pages/careers.astro
- [13:15] Adjusted careers gallery to 8 photos, removed t-shirt image, fixed grid — src/pages/careers.astro
- [13:30] Removed font-semibold across faqs, dark CTA background, dark "Get in touch" button — src/pages/faqs.astro
- [13:45] Increased "Who We Are" body text to text-xl md:text-2xl — src/pages/about-us.astro
- [14:00] Rewrote digital-library hero (dark overlay), contributions as cards, dark CTA — src/pages/digital-library.astro
- [14:15] Created LATAM deep-dive page with access form + full article — src/pages/digital-library/why-we-should-care-about-latam.astro
- [14:30] Rewrote blog listing: dark hero, featured latest post, "Keep exploring" section with category filters — src/pages/blog/index.astro
- [16:02] Added article OG image, article:published_time/author/section meta tags — src/components/seo/SEOHead.astro, src/layouts/BaseLayout.astro, src/pages/blog/[...slug].astro
- [16:02] Created RSS feed at /rss.xml — src/pages/rss.xml.ts
- [16:16] Blog cards: uniform height, author inside card, hover shadow+zoom — src/pages/blog/index.astro
- [16:16] Article: cover image displayed below hero, h1 font-display, prose headings weight 500 — src/pages/blog/[...slug].astro, src/styles/prose.css
- [16:33] Blog article body switched to light theme, prose colors updated for white bg — src/pages/blog/[...slug].astro, src/styles/prose.css
- [16:47] Blog article: pill aligned, prose #1d1d1d weight-400, related posts light theme — src/pages/blog/[...slug].astro, src/styles/prose.css
- [16:49] Blog listing: full light theme for cards/section/filters — src/pages/blog/index.astro
- [10:00] Created 16 blog post markdown files (batch 2) — src/content/blog/
- [11:30] Added cover: frontmatter to 9 blog posts (batch 2) with locally available hero images — src/content/blog/
- [10:00] Replaced person-photo covers on 8 blog posts with abstract/tech images — src/content/blog/
- [10:30] About nav item → dropdown (About Us, FAQs, Events Calendar, Space in the Media); removed FAQs/Events from Explore — Header.astro, MobileMenu.astro
- [10:30] Created /spacedev-in-the-media index with FAQs hero, photo cards, 9 items — src/pages/spacedev-in-the-media.astro
- [10:30] Created /spacedev-in-the-media/[slug] detail pages with full article content — src/pages/spacedev-in-the-media/[slug].astro
- [10:30] Created media-items data file with 9 events + full body text — src/data/media-items.ts
- [10:30] Downloaded 9 event photos from Framer CDN — public/images/content/

Date: 2026-06-10
Developer: Vero

- [10:00] SEO audit completo: URLs, sitemap, GTM, redirects /post/* → /blog/* verificados — vercel.json, astro.config.mjs
- [10:30] Noindex + exclusión de sitemap en about-us-v1 y our-work-v1 — PR #44
- [11:00] Reemplazado contenido boilerplate con contenido real en 15 case studies desde PDFs/docs — PR #45
- [11:30] Footer: eliminado teléfono, Terms & Privacy movidos al bottom bar, agregados links Our Work/Blog/Careers/Media — Footer.astro
- [11:45] Button component: agregado variant "dark" (fix Apply button invisible en Careers) — Button.astro
- [12:00] CaseStudyCard: fix efecto mobile spotlight (funciona en homepage con 3 cards, no solo Our Work) — CaseStudyCard.astro
- [12:15] Homepage mobile: hero min-h-[100dvh], título clamp responsive, awards 2 cols, industries 1 col, CTA ancho completo — index.astro
- [12:30] Stats actualizados en todo el sitio: 40→50 Clutch, 160→200 proyectos, 7→8 años — site-content.ts, seo.ts, about-us, our-work, blockchain-dev
- [13:00] Terms/Privacy: fondo blanco (contraste fix), padding hero aumentado — terms.astro, privacy-policy.astro
- [13:15] Borrados about-us-v1 y our-work-v1 definitivamente — PR #46
- [13:30] Em dashes limpiados en contenido visible: 15 case studies, 6 blog posts, services.ts, media-items.ts — PR #46
- [14:00] about-us: sección de 3 blog posts recientes con mismo card UI que homepage — about-us.astro
- [14:15] Case study hero: items-start (contenido alineado arriba) — case-study/[...slug].astro
- [14:30] Breadcrumbs universales via BaseLayout: auto-generados desde URL, tone claro/oscuro, removidos manuales de 11 páginas — PR #49
- [15:00] Hero estandarizado en todas las páginas: min-h-[80vh], pt-36, H1 text-4xl md:text-6xl lg:text-7xl — PR #49
- [15:30] ContactForm custom: integración HubSpot API (sin embed/iframe), campos según form actual — ContactForm.astro
- [15:45] NewsletterForm custom: integración Brevo via /api/subscribe serverless, variante compact inline — NewsletterForm.astro, subscribe.ts
- [16:00] Newsletter page: layout 2 columnas, value props animadas derecha, fondo dark — newsletter.astro
- [16:15] Events-calendar y digital-library: form newsletter en columna en mobile — PR #49

- [09:00] Construido el cerebro de marketing de SpaceDev desde cero — /Users/verob/Documents/SpaceDev Marketing/
- [10:00] Research con Chrome: Twitter @fede_sendra y @juanmsobral — skills/skill-voice-federico.md, skill-voice-juanmanuel.md
- [11:00] Procesados 30 archivos de analytics de LinkedIn (Federico + JM + SpaceDev empresa) — intelligence/content-performance.md
- [12:00] Procesados 30 use cases de clientes (PDFs + DOCXs) — intelligence/use-cases.md
- [13:00] Creados 6 skills de voz y scoring con patrones reales y reglas anti-delirio — skills/
- [14:00] Iterado post de Federico sobre Pump.fun GO hasta score 90/100 — skills/skill-voice-federico.md (Patrón 6)
- [15:00] Creado marketing dashboard en Next.js + shadcn + Recharts con filtros, leaderboard y recomendaciones — /Users/verob/Documents/dashboard-marketing/
- [15:30] Deploy en Vercel: marketing-dashboard-zeta-eight.vercel.app con Basic Auth

Date: 2026-06-29
Developer: Vero

- [10:00] Reescrito Header.astro con nueva estructura de nav: Our Expertise (mega-dropdown), Industries, Our Work, About, Blog — Header.astro
- [10:00] Reescrito MobileMenu.astro con accordions <details>/<summary> para cada sección — MobileMenu.astro
- [10:30] Fix ts(18047): renombrado el → node dentro del if para preservar narrowing en closures — src/pages/index.astro
- [11:00] Related articles sort changed to pure date DESC (newest first) — src/layouts/ServicePageLayout.astro
- [11:15] Narrowed blog post tags for 3 catch-all posts to be topic-specific — src/content/blog/
- [11:30] Redesigned relatedTags per money page to use narrow specific tags — src/data/services.ts
- [12:00] Created /author/ index page listing all authors with circular avatars — src/pages/author/index.astro
- [12:15] Fixed author hero breadcrumb collision, increased padding and photo size — src/pages/author/[slug].astro
- [12:30] Linked About Us team cards to author profile pages — src/pages/about-us.astro
- [12:45] Redesigned author index cards with circular avatars, better layout — src/pages/author/index.astro
- [13:00] Reordered authors array: CEO (Federico) → CTO (Juan Manuel) → COO (Diego) — src/data/authors.ts
- [13:15] Fixed pixelated author avatar in blog featured post (size="xl") — src/pages/blog/index.astro
- [13:30] Added ISO certification logo to footer below Contact Us (156px) — src/components/layout/Footer.astro
- [14:00] Case study service tags: mapped to money page URLs, unmapped tags omitted — src/pages/case-study/[...slug].astro
- [14:30] Case studies: breadcrumbs enabled (tone light), hero badge changed to "Case Study" only (category moved to meta bar) — src/pages/case-study/[...slug].astro
- [15:30] Restored 9 SpaceDev events to in-the-media page: data file, detail pages with photos, events grid section — src/data/media-items.ts, src/pages/spacedev-in-the-media/
- [16:55] Added 10 new 2023 media events (Blockchain Summit x2, GX30, CUTI, WeaveDB, IT Builders, Eth Argentina, Eth Uruguay, Federico interviews) — src/data/media-items.ts
- [16:55] Detail page: YouTube embed + gradient fallback when no image; index cards: gradient placeholder for imageless items — src/pages/spacedev-in-the-media/[slug].astro, spacedev-in-the-media.astro

Date: 2026-06-30
Developer: Vero

- [10:35] Created /blockchain-development-services/industry/real-estate — use cases table, benefits, tech stack, process, related services, FAQs — real-estate.astro, services.ts
- [10:35] Created /blockchain-development-services/industry/compliance-web3 — infrastructure table, use cases, regulatory frameworks, tech stack, 4-step process — compliance-web3.astro, services.ts
- [10:50] Added Real Estate and Web3 Compliance to Industries navbar dropdown — Header.astro
- [11:30] Added isometric pixel-building SMIL animation to Real Estate industry hero — IndustryHeroAnim.astro (fixed width:0 CSS scoping bug, switched to inline styles)
