# PROMPT MAESTRO — Clonar spacedev.io en Astro + Vercel

> **CLAUDE.md del proyecto SpaceDev Clone** — leído automáticamente por Claude Code en cada sesión.  
> Proyecto: `/Users/kl/Documents/Claude/spacedev-clone/`  
> Assets de referencia (HTML originals, CSS Framer): `/Users/kl/Documents/Claude/spacedev-assets/`  
> Imágenes y fuentes ya copiadas en `public/`

---

## CONTEXTO DEL PROYECTO

Quiero clonar el sitio web **https://spacedev.io/** de Framer a código propio. El objetivo es tener una réplica pixel-perfect del diseño, contenido, animaciones y funcionalidad, con la mejor base técnica posible para:

1. **SEO máximo** (ranking en Google, Bing, etc.)
2. **Legibilidad para AIs** (los LLMs deben poder leer e indexar el contenido limpio)
3. **Vibecoding** con Claude Code (fácil de mantener y extender)

---

## STACK TECNOLÓGICO (no negociable)

| Capa | Tecnología | Razón |
|---|---|---|
| Framework | **Astro 5** | HTML estático puro = SEO perfecto, cero JS innecesario |
| Estilos | **Tailwind CSS v4** | Utility-first, ideal para vibecoding |
| Lenguaje | **TypeScript** | Type safety, mejor autocompletado |
| Deploy | **Vercel** (`@astrojs/vercel/static`) | Edge CDN, deploy automático desde GitHub |
| Imágenes | `@astrojs/image` + **Sharp** | Optimización automática, WebP/AVIF |
| Blog/Cases | **Astro Content Collections** | MDX o Markdown para posts y case studies |
| Animaciones | **CSS nativo + Intersection Observer** | Cero dependencias extra, máximo rendimiento |
| Formularios | **HubSpot Forms embed** | Integración con el CRM existente |
| Analytics | **Google Tag Manager** (via `<script>`) | Carga diferida, no bloquea render |
| Transiciones | **Astro View Transitions** | SPA-like sin framework completo |
| SEO extras | `@astrojs/sitemap` + JSON-LD manual | Sitemap automático + datos estructurados |

### Instalación inicial

```bash
npm create astro@latest . -- --template minimal --typescript strict --git
npx astro add tailwind vercel sitemap image
npm install sharp
```

---

## ARQUITECTURA DE ARCHIVOS

```
/
├── public/
│   ├── fonts/                    # Fuentes locales (ver sección diseño)
│   ├── images/                   # Logos, iconos SVG, imágenes estáticas
│   ├── robots.txt
│   └── llms.txt                  # Archivo especial para legibilidad de AIs
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileMenu.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Card.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── AnimatedCounter.astro
│   │   │   └── StarRating.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Services.astro
│   │   │   ├── CaseStudies.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── CTA.astro
│   │   │   └── Stats.astro
│   │   └── seo/
│   │       ├── SEOHead.astro     # Meta tags, OG, Twitter Cards
│   │       └── JsonLD.astro      # JSON-LD structured data
│   ├── content/
│   │   ├── config.ts             # Content Collections schema
│   │   ├── blog/                 # Posts en MDX
│   │   └── case-studies/         # Case studies en MDX
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   ├── BlogPostLayout.astro
│   │   └── CaseStudyLayout.astro
│   ├── pages/
│   │   ├── index.astro                                    # Home
│   │   ├── about-us.astro
│   │   ├── our-work.astro
│   │   ├── careers.astro
│   │   ├── contact.astro
│   │   ├── faqs.astro
│   │   ├── events-calendar.astro
│   │   ├── newsletter.astro
│   │   ├── digital-library.astro
│   │   ├── terms-and-conditions.astro
│   │   ├── privacy-policy.astro
│   │   ├── 404.astro
│   │   ├── blog/
│   │   │   ├── index.astro       # Listado de posts
│   │   │   └── [slug].astro      # Post individual
│   │   ├── case-study/
│   │   │   └── [slug].astro      # Case study individual
│   │   ├── author/
│   │   │   └── [slug].astro      # Página de autor
│   │   └── blockchain-development-services/
│   │       ├── index.astro
│   │       ├── dapp-development.astro
│   │       ├── blockchain-for-banks.astro
│   │       ├── smart-contract-development.astro
│   │       ├── blockchain-partner.astro
│   │       └── asset-tokenization.astro
│   ├── styles/
│   │   └── global.css            # Variables CSS, reset, animaciones globales
│   └── lib/
│       ├── seo.ts                # Helpers para meta tags y JSON-LD
│       └── animations.ts         # Intersection Observer setup
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## SISTEMA DE DISEÑO

### Paleta de colores EXACTA (mapa completo de tokens Framer, extraído del `body{}` CSS de producción)

```css
/* src/styles/global.css — copiar EXACTAMENTE */
:root {
  /* === COLORES DE FONDO === */
  --sd-dark:         #141414;   /* Fondo oscuro principal */
  --sd-dark-2:       #1e1e1e;   /* Cards/secciones oscuras */
  --sd-navy:         #17171d;   /* Navy muy oscuro */
  --sd-purple-deep:  #191429;   /* Hero, CTA sections */
  --sd-purple-mid:   #312652;   /* Secciones intermedias oscuras */
  --sd-light:        #fafafa;   /* Fondo claro principal */
  --sd-light-2:      #f5f5f5;   /* Fondo claro alternativo */
  --sd-light-3:      #f4f4f4;   /* Fondo muy claro */
  --sd-light-4:      #f2f2f2;   /* Background cards claras */
  --sd-gray-border:  #e8e8e8;   /* Bordes claros */
  --sd-gray-border2: #e9e9e7;   /* Bordes claros alt */

  /* === ACENTOS === */
  --sd-purple:       #673ae4;   /* Púrpura primario — botones, CTAs */
  --sd-purple-2:     #4a397c;   /* Púrpura gradiente */
  --sd-purple-3:     #8572bc;   /* Púrpura claro — hover */
  --sd-cyan:         #44cdf3;   /* Cyan/azul eléctrico */
  --sd-green:        #00ffb2;   /* Verde neón */
  --sd-black:        #000000;
  --sd-white:        #ffffff;

  /* === TEXTO === */
  --sd-text-primary:   #ffffff; /* Texto sobre fondos oscuros */
  --sd-text-secondary: #858585; /* Texto secundario */
  --sd-text-muted:     #aaaaaa; /* Texto muted */
  --sd-text-dark:      #141414; /* Texto sobre fondos claros */
  --sd-text-gray:      #4e5052; /* Texto gris medio */
  --sd-overlay:        #0d0d0d4d; /* Overlay semitransparente */

  /* === GRADIENTE PRINCIPAL === */
  --sd-gradient-hero: linear-gradient(135deg, #4a397c 17%, #191429 105%);
}
```

**Referencia original tokens Framer → nombre semántico:**
```
--token-02420fc0 → #141414  (sd-dark)
--token-072581d4 → #1e1e1e  (sd-dark-2)
--token-9007919a → #17171d  (sd-navy)
--token-45482024 → #191429  (sd-purple-deep)
--token-0a80d9bb → #312652  (sd-purple-mid)
--token-c9dd2b58 → #673ae4  (sd-purple — CTA principal)
--token-512ba138 → #4a397c  (sd-purple-2)
--token-b784eaf9 → #8572bc  (sd-purple-3)
--token-8d04b188 → #44cdf3  (sd-cyan)
--token-d8314751 → #00ffb2  (sd-green)
--token-c07d7342 → #fafafa  (sd-light)
--token-698f467f → #f5f5f5  (sd-light-2)
--token-588d8708 → #f4f4f4  (sd-light-3)
--token-a2f28738 → #f2f2f2  (sd-light-4)
--token-f2060d4e → #e8e8e8  (sd-gray-border)
--token-e3c240f3 → #e9e9e7  (sd-gray-border2)
--token-9d8ac831 → #aaaaaa  (sd-text-muted)
--token-58858343 → #858585  (sd-text-secondary)
--token-f30f47b6 → #4e5052  (sd-text-gray)
--token-36726788 → #000000  (sd-black)
--token-694e8440 → #ffffff  (sd-white)
--token-f071febb → #0d0d0d4d (sd-overlay)
```

### Tipografía EXACTA (3 fuentes confirmadas en el CSS de producción)

```
1. Geist       — weight 600           — Títulos principales
2. Open Sans   — weights 300, 500     — Cuerpo y texto general
3. Saira       — múltiples weights    — Elementos de UI específicos
4. Inter       — weights 300-700      — Fallback / elementos UI
```

Los archivos WOFF2 ya están descargados en:
```
/Users/kl/Documents/Claude/spacedev-assets/fonts/
├── geist/
│   ├── geist-600-latin.woff2
│   └── geist-600-latin-ext.woff2
├── open-sans/
│   ├── open-sans-300-latin.woff2
│   ├── open-sans-300-latin-ext.woff2
│   ├── open-sans-500-latin.woff2
│   └── open-sans-500italic-latin.woff2
├── saira/
│   ├── saira-a169fc18.woff2  (weight 300)
│   ├── saira-ff503512.woff2  (weight 500)
│   └── saira-585d14a7.woff2  (weight 700)
└── inter/
    └── [7 variantes woff2]
```

Copiar a `/public/fonts/` del proyecto Astro y usar `@font-face` — NO usar `<link>` a Google Fonts (penaliza CLS y LCP).

### Animaciones

Todas las animaciones deben ser:
1. **CSS-first**: `@keyframes`, `transition`, `animation` nativo
2. **Respetando `prefers-reduced-motion`**: Envolver en media query
3. **Scroll-triggered**: Usando Intersection Observer (sin GSAP ni librerías)

Animaciones a implementar:
- **Fade-in desde abajo**: Para secciones al hacer scroll (`opacity: 0 → 1`, `translateY(20px → 0)`)
- **Contador animado**: Stats de la empresa (70 team members, 160 projects, etc.)
- **Hover cards**: `transform: translateY(-4px)` con `box-shadow` que se ilumina
- **Gradient border**: Bordes con gradiente animado en cards destacadas
- **Typing effect**: Para el hero headline (opcional, si el original lo tiene)
- **Parallax sutil**: En el hero, background se mueve a 0.3x velocidad del scroll
- **Marquee/ticker**: Para logos de clientes o tecnologías

```typescript
// src/lib/animations.ts
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
}
```

---

## SEO — MEJORES PRÁCTICAS (implementar en cada página)

### 1. Meta tags (componente SEOHead.astro)

```astro
---
// Cada página pasa estas props
interface Props {
  title: string;          // "Blockchain Development Services | SpaceDev"
  description: string;    // Max 160 chars
  canonical?: string;     // URL canónica absoluta
  ogImage?: string;       // /images/og/page-name.png (1200x630)
  noindex?: boolean;      // Para páginas que no deben indexarse
}
---
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SpaceDev" />
<!-- Twitter/X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />
```

### 2. JSON-LD Structured Data

Implementar en cada tipo de página:

```json
// Página principal — Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SpaceDev",
  "url": "https://spacedev.io",
  "logo": "https://spacedev.io/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-754-249-6595",
    "email": "info@spacedev.io",
    "contactType": "customer service"
  },
  "address": [
    { "@type": "PostalAddress", "addressLocality": "Miami", "addressRegion": "FL", "addressCountry": "US" },
    { "@type": "PostalAddress", "addressLocality": "Montevideo", "addressCountry": "UY" },
    { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" },
    { "@type": "PostalAddress", "addressLocality": "Medellín", "addressCountry": "CO" }
  ],
  "sameAs": ["https://www.linkedin.com/company/spacedev-io", "https://twitter.com/spacedev_io"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "40"
  }
}

// Páginas de servicio — Service
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Blockchain Development",
  "provider": { "@type": "Organization", "name": "SpaceDev" },
  "description": "...",
  "areaServed": "Worldwide"
}

// Blog posts — Article
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "dateModified": "...",
  "publisher": { "@type": "Organization", "name": "SpaceDev" }
}

// FAQ — FAQPage
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer free consultation?",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

### 3. Sitemap automático

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://spacedev.io',
  integrations: [sitemap()],
});
```

### 4. robots.txt

```
User-agent: *
Allow: /
Sitemap: https://spacedev.io/sitemap-index.xml

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /
```

### 5. HTML semántico (regla de oro)

- SIEMPRE usar `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>`
- NUNCA usar `<div>` cuando corresponda una etiqueta semántica
- Cada sección debe tener un `<h2>` o `<h3>` apropiado
- Imágenes SIEMPRE con `alt` descriptivo
- Links SIEMPRE con texto descriptivo (no "click here")
- Solo UN `<h1>` por página

---

## LEGIBILIDAD PARA AIs — llms.txt

Crear `/public/llms.txt` siguiendo el estándar (https://llmstxt.org/):

```
# SpaceDev

> Blockchain development company offering Web3 engineering, traditional software development, IT staff augmentation, and blockchain security auditing.

## Services

- [Blockchain Development Services](https://spacedev.io/blockchain-development-services): End-to-end blockchain development including DeFi, dApps, NFTs, DAOs, smart contracts, and white-label exchanges.
- [Web & Mobile Solutions](https://spacedev.io/innovative-web-and-mobile-solutions): Full-stack web and mobile app development.
- [IT Staff Augmentation](https://spacedev.io/staff-augmentation): Pre-vetted engineers available in under 2 weeks.
- [Product Discovery](https://spacedev.io/product-discovery): From strategy sprints to MVP definition and go-to-market planning.
- [BlockAudit](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security): Smart contract and blockchain security auditing.

## Company

- 7 years in business
- 70+ team members across 5 countries (USA, Uruguay, Argentina, Colombia)
- 160+ successful projects delivered
- 40+ perfect 5-star ratings on Clutch
- Top 5 Blockchain Companies worldwide (Clutch)

## Contact

- Email: info@spacedev.io
- Phone: +1 754-249-6595
- Offices: Miami FL, Montevideo, Buenos Aires, Medellín
```

---

## ASSETS DESCARGADOS — UBICACIÓN LOCAL

Todo está en `/Users/kl/Documents/Claude/spacedev-assets/`:

```
spacedev-assets/
├── images/              ← 425 imágenes descargadas (101 MB)
│   ├── logo/            ← spacedev-logo.svg + favicon.png
│   └── IMAGE_MANIFEST.md ← mapa imagen → página donde se usa
├── pages/               ← 55 páginas HTML completas de Framer
│   ├── index.html       ← Home
│   ├── about-us.html
│   ├── careers.html
│   ├── contact.html
│   ├── faqs.html
│   ├── blog.html
│   ├── blockchain-development-services.html
│   ├── innovative-web-and-mobile-solutions.html
│   ├── staff-augmentation.html
│   ├── product-discovery.html
│   ├── blockaudit-*.html
│   ├── case-study-*.html  ← 20 case studies
│   ├── post-*.html        ← Blog posts
│   └── *-text.txt         ← Texto extraído (sin HTML) por página
├── fonts/               ← Geist, Open Sans, Saira, Inter
└── css/                 ← CSS inline de Framer (tokens de diseño)
    ├── inline-style-0.css  ← @font-face declarations
    └── inline-style-2.css  ← Tokens de colores + layout completo
```

**Assets ya copiados** en `public/images/` (433 archivos) y `public/fonts/` (17 woff2). Proyecto Astro ya inicializado con Tailwind v4, Vercel adapter y sitemap.

---

## ASSETS Y DATOS EXACTOS DEL SITIO ACTUAL

### Tracking (extraído del HTML de producción)
- **Google Tag Manager**: `GTM-WKM5KGV`
- **Google Analytics 4**: `G-J43N5T0K82`
- **HotJar ID**: `5330235`

### Assets visuales
- **Logo SVG**: descargar de `https://framerusercontent.com/assets/KD9R4h94YxLSpWDK8gSxftGd7U.svg` → guardar en `/public/images/logo.svg`
- **Favicon**: descargar de `https://framerusercontent.com/images/IkKd49plXHEJHJ2r7gZ3aJDAtwY.png` → guardar en `/public/favicon.png`

### Redes sociales (del JSON-LD oficial)
- Twitter/X: `https://x.com/SpaceDevUy`
- LinkedIn: `https://www.linkedin.com/company/spacedev-uy/`
- Instagram: `https://www.instagram.com/spacedev.io`
- Clutch: `https://clutch.co/profile/spacedev`
- Crunchbase: `https://crunchbase.com/organization/spacedev`

### HubSpot Meetings
- General: `https://meetings.hubspot.com/federico-sendra/meet-space`
- Web meetings: `https://meetings.hubspot.com/federico-sendra/web-meetings-calendar`

### Breakpoints reales de Framer (configurar en Tailwind)
- Mobile: `< 1000px`
- Tablet: `1000px – 1439px`
- Desktop: `1440px – 1919px`
- Wide: `1920px – 2559px`
- 4K: `≥ 2560px`

---

## PÁGINAS Y CONTENIDO COMPLETO

### HOME (`/`)

**Hero Section**
- Headline: "Finally: Your Fast Flexible Reliable Tech Partner"
- Subheadline: SpaceDev is a blockchain development firm that transforms ideas into scalable digital products, combining Web3 engineering and traditional software development with startup agility.
- CTAs: "Book a call" → HubSpot meeting | "See our work" → /our-work

**Stats Section** (animación de contadores)
- +70 talented team members
- +160 successful projects
- 7 years helping clients
- +40 perfect 5-star ratings on Clutch

**Core Services** (5 cards)
1. Blockchain Software Development
2. Web/Mobile App Development  
3. IT Staff Augmentation
4. Product Discovery
5. BlockAudit Security Services

**Why SpaceDev** (6 diferenciadores)
1. Full-cycle product ownership
2. Web2 & mobile expertise
3. Web3 & blockchain expertise
4. Flexible team models
5. Proven track record (40+ five-star ratings)
6. Global presence with nearshore options

**Industries** (8 sectores, grid de iconos)
- Fintech/DeFi | Gaming/NFTs | Healthcare | Logistics
- Real estate | Education | Energy/Oil & Gas | Startups

**Case Studies** (4 destacados)
- Blockchain For Energy (B4E) — Web3/Blockchain
- FightFI — "The ultimate fight-fan experience"
- ApeBond — "On-Chain OTC Marketplace"
- Drata — "On a Mission to Build Trust Across the Cloud"
- Tabs/filtros: All | Web2 | Web3

**Engagement Models** (2 opciones)
- **MVP Builder** (proceso en 4 fases)
- **IT Staff Augmentation** (proceso en 4 fases)

**Testimonials** (social proof)
- "Over 40 perfect 5-star ratings"
- Clientes: Ubicuity, Ulta Beauty, Blockus, Boto

**FAQ** (accordion interactivo)

**CTA Final**
- "Ready to build the future with SpaceDev?"
- Botón: "Schedule a call"

---

### ABOUT US (`/about-us`)

**Hero**: "Meet the team behind the technology"

**Stats**
- +70 talented team members
- +160 successful projects  
- 7 years helping clients succeed
- 5 countries
- +40 perfect 5-star ratings on Clutch
- Top 5 Blockchain Companies worldwide (Clutch)

**Valores** (5 tarjetas)
1. We are here to help
2. We are tech-savvy
3. We are professional
4. We are flexible
5. We are human

**Liderazgo**
- Diego Priliac — COO: "SpaceDev's edge is the blend of craft and care..."
- Grecia Tardáguila — Head of People (mencionada en Careers)
- Juan Manuel Sobral — CTO & Co-founder (mencionado en Blockchain page)
- Federico Sendra — CEO (HubSpot meetings: federico-sendra)

**Oficinas** (mapa interactivo o tarjetas)
- 🇺🇸 United States: 25 SW 9th Street, 4th Floor, Miami, FL
- 🇺🇾 Uruguay: Cornelio Cantera 2857, Montevideo
- 🇦🇷 Argentina: El Salvador 5707 Palermo Hollywood, CABA
- 🇨🇴 Colombia: Carrera 30 # 7AA - 207 Medellín

**Awards**: Top 5 Blockchain Companies (Clutch), International event speakers

---

### OUR WORK (`/our-work`)

**Filtros**: All | Web2 | Web3

**Case Studies** (20 proyectos — generar tarjeta para cada uno):
- Blockchain For Energy (B4E)
- FightFI
- ApeBond
- Drata
- Rarible
- NDAX Canada
- Blockus
- Ubicuity
- AthleteAI
- Twispi
- Mostaza
- Glowy Music
- PiggyGPT
- Bondi Finance
- Gallery
- Genba
- iAffirm
- ACME
- W3E
- NGA

Cada tarjeta debe tener: nombre, descripción breve, categoría (Web2/Web3), imagen placeholder, link al case study.

---

### CAREERS (`/careers`)

**Hero**: "Join the SpaceDev team"

**Posiciones abiertas** (5 roles, todos 100% remote):
1. Full Stack Web3 Developer
2. Backend Web3 Developer
3. Frontend React Web3 Developer
4. React Native Developer
5. Blockchain Developer

Cada tarjeta: título, modalidad (Remote), botón "Apply" → people@spacedev.io

**Cultura & Valores**
- "High-performance culture with strong human values"
- Liderazgo multidisciplinario

**Beneficios** (grid de iconos)
- Flexible vacation scheduling
- Remote-first (opcional in-person)
- International certifications & training
- Structured mentorship programs
- Holistic wellness programs
- After-work socials & team bonding
- Annual international retreats
- Monetary perks

**Quote**: Grecia Tardáguila, Head of People — énfasis en crecimiento, bienestar y balance.

---

### BLOG (`/blog`)

**Categorías** (tabs):
- All | Blockchain Trends | Web2 Trends | Product Development | AI | Augmented Reality | Techy Trends

**Posts recientes** (Content Collections):
1. Web3 Marketing: Strategies That Actually Drive Sustainable Growth (Mar 10, 2026) — 6 min
2. We're Now AWS Select Partners! (Jan 14, 2026) — 4 min
3. What Are Memecoins in Crypto? (Jan 11, 2026) — 8 min
4. Save Time With A Smart Contract Audit Checklist (Oct 20, 2025) — 8 min
5. Web2 → Web3 Migration Guide for Fintech (Oct 20, 2025) — 12 min
6. + muchos más (ver sitemap completo)

**Load More** (paginación lazy)

---

### CONTACT (`/contact`)

**Hero**: "Ready to reach the stars?"

**Formulario HubSpot embed** (campos típicos):
- Name
- Email
- Company
- Message
- Service of interest (dropdown)

**Calendly/HubSpot Meeting Links**:
- General: `https://meetings.hubspot.com/federico-sendra/meet-space`
- Web meetings: `https://meetings.hubspot.com/federico-sendra/web-meetings-calendar`

**Información de contacto**:
- Email: info@spacedev.io
- Phone: +1 754-249-6595
- Careers: people@spacedev.io

**Oficinas** (4 ubicaciones)

---

### BLOCKCHAIN DEVELOPMENT SERVICES (`/blockchain-development-services`)

**Headline**: "Blockchain Development Services for Scalable Solutions"

**9 servicios** (grid de cards):
1. Blockchain Technical Research
2. Blockchain Development (Layer 1, enterprise chains)
3. DeFi Platforms
4. dApps
5. NFTs and Play-to-Earn Ecosystems
6. DAOs
7. Cryptocurrencies and Tokens
8. Smart Contracts
9. White-Label Crypto Exchanges

**6 beneficios**:
- Increased Security | Greater Transparency | Improved Efficiency
- Higher Reliability | Cost Optimization | Enhanced Traceability

**Quote CTO**: Juan Manuel Sobral — "There's no question that blockchain will change the world; the real question is when."

**Case Studies**: B4E, FightFI, ApeBond, Rarible

**6 diferenciadores**: Fast MVP, Exceptional Talent, High Quality, Measurable Results, End-to-End Expertise, Flexible Models

**Sub-páginas** (misma estructura, contenido específico):
- `/blockchain-development-services/dapp-development`
- `/blockchain-development-services/blockchain-for-banks`
- `/blockchain-development-services/smart-contract-development`
- `/blockchain-development-services/blockchain-partner`
- `/blockchain-development-services/asset-tokenization`

---

### WEB & MOBILE (`/innovative-web-and-mobile-solutions`)

**Headline**: "Innovative Web & Mobile Solutions"

Servicios de desarrollo web y mobile full-stack. Incluir:
- Full-stack web development
- Mobile app development (React Native)
- UI/UX design
- Cloud infrastructure
- AI integration

---

### STAFF AUGMENTATION (`/staff-augmentation`)

**Hero**: "Access pre-vetted engineers, designers, and specialists who integrate effortlessly with your existing setup."

**Propuesta de valor**: "Scale your project without the weight of long hiring cycles or overhead costs." — En menos de 2 semanas.

**Proceso en 4 pasos**:
1. Identify Your Needs
2. Candidate Screening
3. Welcome Aboard
4. Management and Scaling

**9 industrias servidas** (con iconos)

**7 beneficios** (grid):
- Cost Efficiency | Flexibility to Scale | Assured Quality
- Access to Global Expertise | Enhanced Productivity | Risk Reduction | Focus on Core Business

**3 CTAs diferenciados**:
- "Book a call" (general)
- "I want to hire Blockchain developers"
- "I want to hire UX/UI Designers, Project Manager, Product Owner or QA"
→ Todos apuntan a HubSpot meetings

**FAQ** (temas: staff aug vs outsourcing, timeline, roles, calidad)

---

### PRODUCT DISCOVERY (`/product-discovery`)

**Hero**: "We transform your project ideas into tangible success!"

**Estadística**: "Over 60% of projects fail due to poor planning"

**6 paquetes de servicio** (cards expandibles):
1. Product Strategy Sprint — business model, hypotheses, profitability
2. Brand Strategy Sprint — brand vision, visual assets
3. MVP Discovery Sprint — UX, wireframes, tech stack, MVP scope
4. Go-To-Market Package — launch strategy, app store, community
5. Continuous Discovery Sprint — product assessment, iteration roadmap
6. Scale Stage — growth, advanced design systems

**Quote CEO**: Federico Sendra — "speeds up innovation", "problem solving smarter"

**CTA**: "Get started!" → /contact

---

### BLOCKAUDIT (`/blockaudit-smart-contract-and-blockchain-security`)

**Headline**: "Smart Contract & Blockchain Security"

Servicio de auditoría de seguridad para smart contracts y blockchain.
Incluir: proceso de auditoría, tipos de vulnerabilidades detectadas, entregables del audit, CTA para solicitar auditoría.

---

### FAQ (`/faqs`)

**8 preguntas** (accordion con animación):
1. Do you offer free consultation?
2. What are your rates?
3. What kind of services do you offer?
4. What technologies do you work with? (Full-Stack)
5. Which Blockchain Tech-Stack do you use?
6. What is an MVP?
7. In simple words, what does the Discovery Sprint include?
8. What's the difference between IT Staff Augmentation vs. Consulting and Development Services?

---

### PÁGINAS LEGALES

**Terms and Conditions** (`/terms-and-conditions`)
**Privacy Policy** (`/privacy-policy`)
— Placeholder con estructura correcta de accesibilidad semántica

**404** (`/404`)
— Creativa, con temática espacial acorde al brand "Space"Dev

---

## INTEGRACIONES

### HubSpot

**Datos exactos:**
- Portal ID: `22632737`
- Form ID: `acdc5149-7c32-48f4-9137-ab4212538377`
- Region: `na1`

Usar el embed script directamente en Astro (mejor que la API REST — el script de HubSpot maneja validación, estilos, y envío):

```astro
<!-- src/components/HubSpotForm.astro -->
<!-- Usar is:inline para que Astro no procese el script -->
<div id="hubspot-form-container"></div>
<script is:inline>
  (function() {
    var script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.onload = function() {
      hbspt.forms.create({
        portalId: "22632737",
        formId: "acdc5149-7c32-48f4-9137-ab4212538377",
        region: "na1",
        target: "#hubspot-form-container"
      });
    };
    document.head.appendChild(script);
  })();
</script>
```

> **Por qué el script embed y no la API**: En Astro estático, el embed de HubSpot es la opción correcta — maneja validación, GDPR, estilos, y tracking automáticamente. La API REST requeriría un endpoint serverless y lógica de envío manual. Usar `is:inline` + lazy load para no bloquear el LCP.

**HubSpot Meetings (Calendly embed):**
```astro
<div 
  class="meetings-iframe-container" 
  data-src="https://meetings.hubspot.com/federico-sendra/meet-space?embed=true"
></div>
<script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" defer></script>
```

### Google Tag Manager + Analytics + HotJar (IDs reales extraídos del HTML)

```astro
<!-- En BaseLayout.astro, dentro de <head> -->
<!-- GTM ID real: GTM-WKM5KGV -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKM5KGV');</script>

<!-- GA4 ID real: G-J43N5T0K82 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J43N5T0K82"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-J43N5T0K82');
</script>

<!-- HotJar ID real: 5330235 -->
<script>
  (function(c,s,q,u,a,r,e){
    c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
    c._hjSettings={hjid:a};
    r=s.getElementsByTagName('head')[0];
    e=s.createElement('script');e.async=true;
    e.src=q+c._hjSettings.hjid+u;
    r.appendChild(e);
  })(window,document,'https://static.hj.contentsquare.net/c/csq-','.js',5330235);
</script>

<!-- En <body>, primer elemento -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKM5KGV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Formulario de contacto (sin HubSpot Forms)

Si el formulario de contacto no usa el embed de HubSpot Forms, crear un formulario nativo que envíe a un endpoint Astro API Route:

```typescript
// src/pages/api/contact.ts
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  // Enviar a HubSpot API v3 o a un servicio de email (Resend, etc.)
};
```

---

## PERFORMANCE & CORE WEB VITALS

- Todas las imágenes: `loading="lazy"` excepto las above-the-fold
- Hero image: `loading="eager"` + `fetchpriority="high"`
- Fuentes: `font-display: swap`
- CSS crítico: inline en `<head>` para above-the-fold
- JS: siempre `defer` o `type="module"`
- Videos: no autoplay sin `muted` y `playsinline`
- Evitar layout shifts: definir `width` y `height` en todas las imágenes

---

## ACCESIBILIDAD (a11y)

- Todos los botones y links con `aria-label` cuando el texto no es descriptivo
- Imágenes decorativas: `alt=""` (vacío, no omitir)
- Skip navigation: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>`
- Contraste mínimo WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande
- Focus visible en todos los elementos interactivos
- Modales y menú mobile: trap focus + cerrar con Escape

---

## ORDEN DE CONSTRUCCIÓN (seguir este orden)

```
FASE 1 — Fundamentos (no avanzar sin completar)
☐ Setup del proyecto (Astro + dependencias)
☐ astro.config.mjs con site URL, sitemap, vercel adapter
☐ global.css con CSS variables, reset, animaciones base
☐ tailwind.config.mjs con colores del sistema de diseño
☐ BaseLayout.astro (HTML shell con GTM, fonts, meta base)
☐ SEOHead.astro (meta tags completos)
☐ JsonLD.astro (datos estructurados)
☐ Header.astro con navegación completa + mobile menu
☐ Footer.astro con todas las columnas y links
☐ robots.txt y llms.txt

FASE 2 — Componentes UI
☐ Button.astro (variants: primary, secondary, ghost)
☐ Badge.astro
☐ Card.astro
☐ SectionHeading.astro
☐ AnimatedCounter.astro
☐ FAQ.astro (accordion)
☐ CTA.astro (sección reutilizable)

FASE 3 — Páginas principales
☐ Home (/)
☐ About (/about-us)
☐ Our Work (/our-work)
☐ Contact (/contact)

FASE 4 — Páginas de servicio
☐ Blockchain Development Services
☐ Sub-páginas de blockchain (5)
☐ Web & Mobile (/innovative-web-and-mobile-solutions)
☐ Staff Augmentation (/staff-augmentation)
☐ Product Discovery (/product-discovery)
☐ BlockAudit (/blockaudit-smart-contract-and-blockchain-security)

FASE 5 — Contenido dinámico
☐ Content Collections config (blog + case studies)
☐ Blog index + post template
☐ Case study template + 20 case studies (placeholders)
☐ Author pages
☐ Careers
☐ FAQ page
☐ Events Calendar
☐ Newsletter

FASE 6 — SEO final & polish
☐ OG images (una por página principal)
☐ JSON-LD en todas las páginas
☐ Sitemap validation
☐ Lighthouse audit → arreglar issues
☐ Test en mobile
☐ 404 page
☐ Terms & Privacy Policy
```

---

## PRIMER MENSAJE PARA ARRANCAR

Cuando abras una nueva sesión de Claude Code, usar exactamente este mensaje luego del prompt:

> "Arrancá por FASE 1. Todos los datos están en este prompt y en `/Users/kl/Documents/Claude/spacedev-assets/`. Los 425 assets (imágenes, fuentes) ya están descargados. El HTML completo de cada página está en `spacedev-assets/pages/*.html` — leélos para replicar el contenido y diseño exactos. Creá el proyecto Astro: setup, astro.config.mjs, global.css con los tokens de color EXACTOS del mapa en este prompt (usando los nombres semánticos `--sd-*`), tailwind.config.mjs con los 5 breakpoints reales de Framer, y luego BaseLayout + Header + Footer + SEOHead + robots.txt + llms.txt. Para cada página, leé el HTML correspondiente de `spacedev-assets/pages/` antes de escribir el componente."

---

## MODELO Y CONFIGURACIÓN RECOMENDADA

### Modelo

| Situación | Modelo | Razón |
|---|---|---|
| **Arquitectura inicial + componentes complejos** | `claude-opus-4-7` | El más capaz para decisiones arquitectónicas, contexto largo, y código complejo multi-archivo |
| **Generación de páginas repetitivas** | `claude-sonnet-4-6` | 3-5x más rápido y más barato, mantiene calidad para páginas con patrón definido |
| **Fixes rápidos y ajustes** | `claude-sonnet-4-6` | Suficiente para cambios puntuales |

### Configuración en Claude Code

```bash
# Al arrancar la sesión de arquitectura:
/model claude-opus-4-7

# Para generación masiva de páginas (FASES 4-5):
/model claude-sonnet-4-6
```

### Settings recomendados en `.claude/settings.json`

```json
{
  "permissions": {
    "allow": [
      "Bash(npm:*)",
      "Bash(npx:*)",
      "Bash(node:*)",
      "Bash(git:*)"
    ]
  },
  "env": {
    "HUBSPOT_PORTAL_ID": "TU_PORTAL_ID",
    "HUBSPOT_FORM_ID": "TU_FORM_ID",
    "GTM_ID": "GTM-XXXXXXX"
  }
}
```

### Tips para vibecoding efectivo

1. **Trabajar fase por fase** — No saltear pasos. Si el Header no está bien, el resto se rompe.
2. **Un componente a la vez** — Pedir un componente, revisarlo, aprobar, seguir.
3. **Pedir screenshots frecuentes** — Usá el browser preview de Claude Code para verificar el diseño.
4. **Tener spacedev.io abierta en otra pantalla** — Comparar visualmente en tiempo real.
5. **Guardar variables de entorno** — HubSpot Portal ID, GTM ID, etc., antes de arrancar.
6. **Si algo no cierra con el diseño** — Decirle a Claude exactamente qué elemento está mal y mandá un screenshot de la referencia.

---

## DATOS REALES A TENER A MANO

Todo lo de abajo ya fue extraído del HTML — ✅ listo para usar:

- ✅ GTM: `GTM-WKM5KGV`
- ✅ GA4: `G-J43N5T0K82`
- ✅ HotJar: `5330235`
- ✅ Fuentes: **Geist 600** (títulos) + **Open Sans 300/500** (cuerpo)
- ✅ Colores: todos en la sección "Paleta de colores EXACTA"
- ✅ Logo y favicon: URLs para descargar
- ✅ Redes sociales: todas en la sección "Assets y datos"

Todo listo ✅ — lo único pendiente:
- [ ] Credenciales de Vercel para conectar el repo de GitHub

---

*Prompt generado el 2026-04-29 por Claude Code*  
*Sitio de referencia: https://spacedev.io/*  
*Stack: Astro 5 + Tailwind CSS v4 + TypeScript + Vercel*
