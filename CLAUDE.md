# SpaceDev Clone — CLAUDE.md

> Proyecto: clon pixel-faithful de **https://spacedev.io/** en Astro 5 + Tailwind v4 + Vercel.  
> Repo: `https://github.com/SpaceUY/web-space-2026`  
> Assets de referencia (HTML originals, CSS Framer): `/Users/kl/Documents/Claude/spacedev-assets/`  
> El proyecto **ya está iniciado y funcional** — NO crear desde cero, continuar desde aquí.

---

## ESTADO ACTUAL DEL PROYECTO (al 2026-05-12)

### ✅ COMPLETADO

**Infraestructura**
- Setup Astro 5 + Tailwind v4 CSS-first + TypeScript strict
- Vercel adapter (`@astrojs/vercel/static`)
- `@astrojs/sitemap` + sitemap generado automáticamente
- `astro.config.mjs` configurado con `site: 'https://spacedev.io'`
- `public/robots.txt` y `public/llms.txt` (legibilidad para AIs)
- `public/manifest.webmanifest`
- Fuentes locales (WOFF2) en `public/fonts/`: Geist 600, Open Sans 300/500, Saira 300/500/700, Inter

**Design system (`src/styles/global.css`)**
- Todos los tokens de color `--sd-*` extraídos exactamente del CSS de Framer producción
- `@theme {}` de Tailwind v4 con todos los tokens (colores, fuentes, breakpoints)
- `@layer base` con reset correcto (fix: `a { color: inherit }` dentro de layer para no override Tailwind utilities)
- Animaciones: `@keyframes fade-in-up`, `@keyframes sd-marquee`
- `.sd-marquee` con `animation: sd-marquee 8s linear infinite`
- `.sd-marquee-wrapper` con `mask-image` fade en los bordes
- `@media (prefers-reduced-motion: reduce)` aplicado

**Layouts**
- `src/layouts/BaseLayout.astro` — HTML shell con GTM (GTM-WKM5KGV), GA4 (G-J43N5T0K82), HotJar (5330235), View Transitions, fuentes
- `src/layouts/ServicePageLayout.astro` — layout reutilizable para páginas de servicio

**Componentes UI (`src/components/ui/`)**
- `Button.astro` — variants: primary, secondary, ghost
- `Badge.astro`
- `Card.astro`
- `SectionHeading.astro` — props: eyebrow, title, description, align, tone ("light"|"dark"), level ("h1"|"h2"|"h3"), class
- `AnimatedCounter.astro`
- `StarRating.astro`
- `FAQ.astro` — accordion con animación CSS
- `CTA.astro` — sección reutilizable
- `CaseStudyCard.astro` — card con imagen real, acento de color, zoom on hover
- `AuthorAvatar.astro`

**Componentes Layout (`src/components/layout/`)**
- `Header.astro` — nav completa con dropdowns, mobile menu
- `MobileMenu.astro`
- `Footer.astro` — columnas completas con links

**Componentes SEO (`src/components/seo/`)**
- `SEOHead.astro` — meta tags, OG, Twitter Cards, canonical
- `JsonLD.astro` — JSON-LD structured data

**Otros componentes**
- `src/components/HubSpotForm.astro` — embed HubSpot (portalId: 22632737, formId: acdc5149-7c32-48f4-9137-ab4212538377)

**Data (`src/data/`)**
- `case-studies.ts` — 20 case studies con slug, name, tagline, category, accent, image, summary, objectives, deliverables, outcome, gallery
- `authors.ts`
- `services.ts`
- `site-content.ts` — FAQs, testimonials, stats, engagement models y más

**Content Collections (`src/content/`)**
- `src/content.config.ts` — schema de blog + case-studies
- `src/content/blog/` — 5 posts en Markdown
- `src/content/case-studies/` — 20 case studies en Markdown

**Páginas (53 en total)**
- `/` — Home completa con todas las secciones
- `/about-us`
- `/our-work` — filtros Web2/Web3 funcionales
- `/contact`
- `/careers`
- `/faqs`
- `/blog/` + `/blog/[...slug]`
- `/case-study/[...slug]` — 20 case studies
- `/author/[slug]`
- `/blockchain-development-services/` + 5 sub-páginas (dapp, banks, smart-contract, partner, tokenization)
- `/innovative-web-and-mobile-solutions`
- `/staff-augmentation`
- `/product-discovery`
- `/blockaudit-smart-contract-and-blockchain-security`
- `/digital-library`, `/events-calendar`, `/newsletter`
- `/terms-and-conditions`, `/privacy-policy`
- `/404`

**Assets**
- `public/images/content/` — 433 imágenes (extraídas de Framer)
- `public/images/clients/` — 16 logos del ticker marquee (dimensiones exactas del original)
- `public/images/logo/` — logo SVG y wordmark
- `public/images/og-default.png`

**Client logos marquee (sección especial, ya correcta)**
- Implementado en `src/pages/index.astro`
- 174×174px cells, SVGs con background FAFAFA baked-in rendereados a tamaño exacto
- Logos naturales (Apple 62×74, Acton 118×44, UTE 110×50, Rarible 133×31, UFC 145×22) en cells de 174px
- Velocidad: 8s por ciclo
- Fade mask en bordes

**SEO**
- `src/lib/seo.ts` — helpers para JSON-LD
- `src/lib/animations.ts` — Intersection Observer setup
- JSON-LD Organization en homepage
- Sitemap automático

---

### 🔴 PENDIENTE — TRABAJO PRINCIPAL QUE QUEDA

El objetivo es hacer el sitio **lo más parecido posible a https://spacedev.io/** visualmente. Los HTML originales de cada página están en `/Users/kl/Documents/Claude/spacedev-assets/pages/`. **Siempre leer el HTML original antes de trabajar en una página.**

#### 1. FIDELIDAD VISUAL (máxima prioridad)

Para cada página, comparar con el original en https://spacedev.io/ y ajustar hasta quedar pixel-faithful. Las principales áreas pendientes:

**Homepage (`/`)**
- [ ] Verificar que todas las secciones existen y tienen el contenido exacto del original
- [ ] Stats section: animación de contadores (70 team members, 160 projects, 7 years, 40 ratings)
- [ ] "Why SpaceDev" section: 6 diferenciadores con íconos correctos
- [ ] Industries section: 8 sectores con íconos SVG correctos
- [ ] Engagement Models section: MVP Builder + IT Staff Aug con 4 pasos cada uno
- [ ] Testimonials: carrusel/grid con fotos y quotes reales
- [ ] Awards section: Clutch badges, Forbes, etc.
- [ ] CTA final section

**About Us (`/about-us`)**
- [ ] Team grid con fotos reales (están en `public/images/team/`)
- [ ] Leadership quotes con fotos
- [ ] Offices map/cards
- [ ] Timeline o historia de la empresa

**Our Work (`/our-work`)**
- [ ] Filtros JavaScript funcionando (All / Web2 / Web3)
- [ ] Grid de 20 case studies con imágenes

**Case Studies (`/case-study/[slug]`)**
- [ ] Template completo: hero image, objectives, deliverables, outcome, gallery
- [ ] Contenido real en los 20 MDX files

**Blog (`/blog/`)**
- [ ] Solo hay 5 posts — necesita más posts (hay ~20+ en el original)
- [ ] Filtros por categoría funcionando
- [ ] Cards con imagen, autor, fecha, tiempo de lectura

**Páginas de servicio**
- [ ] Revisar cada página contra el original (contenido, imágenes, secciones)
- [ ] Blockchain Dev Services: grid de 9 servicios, 6 beneficios, quote CTO
- [ ] Staff Augmentation: proceso en 4 pasos, 9 industrias, 7 beneficios
- [ ] Product Discovery: 6 paquetes expandibles
- [ ] BlockAudit: proceso de auditoría, tipos de vulnerabilidades

**Contact (`/contact`)**
- [ ] HubSpot form embed funcionando
- [ ] HubSpot meetings calendar embed
- [ ] 4 office cards

**Careers (`/careers`)**
- [ ] 5 job cards con link a people@spacedev.io
- [ ] Benefits grid con íconos

#### 2. ANIMACIONES

- [ ] `data-animate` — scroll-triggered fade-in-up en todas las secciones
- [ ] Animated counters en Stats section
- [ ] Hover effects en cards (translateY -4px, shadow)
- [ ] Parallax sutil en hero

#### 3. RESPONSIVO MOBILE

El breakpoint mobile es `< 1000px` (no 768px como en Tailwind default).
- [ ] Verificar todas las páginas en mobile
- [ ] Mobile menu animado
- [ ] Imágenes y grids adaptados

#### 4. BLOG POSTS

Agregar los ~15 posts que faltan. Las fuentes están en:
- `/Users/kl/Documents/Claude/spacedev-assets/pages/post-*.html`
- Los archivos de texto plano en `/Users/kl/Documents/Claude/spacedev-assets/pages/post-*-text.txt`

#### 5. CONTENIDO FALTANTE

- [ ] Páginas `/digital-library`, `/events-calendar`, `/newsletter` — solo tienen placeholder, revisar HTML original
- [ ] Autor pages: fotos y bios reales

---

## ARQUITECTURA DEL PROYECTO

```
/
├── public/
│   ├── fonts/                    # Geist, Open Sans, Saira, Inter (WOFF2)
│   ├── images/
│   │   ├── content/              # 433 imágenes de Framer (IDs originales)
│   │   ├── clients/              # 16 logos del ticker marquee
│   │   ├── logo/                 # Logo SVG y variants
│   │   ├── hero/, team/, services/, icons/  # Subcarpetas organizadas
│   │   └── IMAGE_MANIFEST.md     # Mapa imagen → página donde se usa
│   ├── robots.txt
│   └── llms.txt
├── src/
│   ├── components/
│   │   ├── layout/               # Header, Footer, MobileMenu
│   │   ├── ui/                   # Button, Badge, Card, SectionHeading, FAQ, CaseStudyCard, etc.
│   │   ├── seo/                  # SEOHead, JsonLD
│   │   └── HubSpotForm.astro
│   ├── content/
│   │   ├── blog/                 # 5 posts Markdown
│   │   └── case-studies/         # 20 case studies Markdown
│   ├── content.config.ts         # Content Collections schema
│   ├── data/
│   │   ├── case-studies.ts       # 20 case studies con todos los campos
│   │   ├── authors.ts
│   │   ├── services.ts
│   │   └── site-content.ts       # FAQs, stats, testimonials, etc.
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML shell con tracking, fonts
│   │   └── ServicePageLayout.astro
│   ├── lib/
│   │   ├── seo.ts                # JSON-LD helpers
│   │   └── animations.ts         # Intersection Observer
│   ├── pages/                    # 53 páginas Astro
│   └── styles/
│       ├── global.css            # Variables CSS, Tailwind theme, animaciones
│       └── prose.css             # Estilos para content Markdown
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## SISTEMA DE DISEÑO

### Paleta de colores (tokens `--sd-*`)

```css
:root {
  --sd-dark:         #141414;   /* Fondo oscuro principal */
  --sd-dark-2:       #1e1e1e;
  --sd-navy:         #17171d;
  --sd-purple-deep:  #191429;   /* Hero, CTA sections */
  --sd-purple-mid:   #312652;
  --sd-light:        #fafafa;   /* Fondo claro principal */
  --sd-light-2:      #f5f5f5;
  --sd-light-3:      #f4f4f4;
  --sd-light-4:      #f2f2f2;
  --sd-gray-border:  #e8e8e8;
  --sd-gray-border2: #e9e9e7;
  --sd-purple:       #673ae4;   /* Acento primario */
  --sd-purple-2:     #4a397c;
  --sd-purple-3:     #8572bc;
  --sd-cyan:         #44cdf3;
  --sd-green:        #00ffb2;
  --sd-text-primary:   #ffffff;
  --sd-text-secondary: #858585;
  --sd-text-muted:     #aaaaaa;
  --sd-text-dark:      #141414;
  --sd-text-gray:      #4e5052;
  --sd-gradient-hero: linear-gradient(135deg, #4a397c 17%, #191429 105%);
}
```

### Tipografía

```css
font-family: 'Geist', sans-serif;        /* Títulos — weight 600 */
font-family: 'Open Sans', sans-serif;    /* Cuerpo — weights 300, 500 */
font-family: 'Saira', sans-serif;        /* UI elements */
font-family: 'Inter', sans-serif;        /* Fallback */
```

En Tailwind v4 los alias son: `font-display` (Geist), `font-body` (Open Sans), `font-ui` (Saira).

### Breakpoints (Framer originales)

```
mobile:  < 1000px
tablet:  1000px – 1439px
desktop: 1440px – 1919px
wide:    1920px – 2559px
4k:      ≥ 2560px
```

En Tailwind: `sm: 1000px`, `md: 1440px`, `lg: 1920px`, `xl: 2560px`

---

## ASSETS DE REFERENCIA

Todo está en `/Users/kl/Documents/Claude/spacedev-assets/`:

```
spacedev-assets/
├── images/
│   └── IMAGE_MANIFEST.md     ← LEER SIEMPRE — mapa imagen → página
├── pages/
│   ├── index.html            ← Home (HTML completo de Framer)
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
│   ├── case-study-*.html     ← 20 case studies
│   ├── post-*.html           ← Blog posts
│   └── *-text.txt            ← Texto extraído (sin HTML) por página
├── fonts/                    ← Fuentes WOFF2 originales
└── css/
    ├── inline-style-0.css    ← @font-face declarations
    └── inline-style-2.css    ← Tokens + layout completo
```

**Regla de oro**: SIEMPRE leer el HTML y el `-text.txt` de una página antes de escribir o editar su componente Astro.

---

## INTEGRACIONES

### HubSpot
- Portal ID: `22632737`
- Form ID: `acdc5149-7c32-48f4-9137-ab4212538377`
- Region: `na1`
- Meetings general: `https://meetings.hubspot.com/federico-sendra/meet-space`
- Meetings web: `https://meetings.hubspot.com/federico-sendra/web-meetings-calendar`
- Careers: `people@spacedev.io`

### Tracking
- GTM: `GTM-WKM5KGV`
- GA4: `G-J43N5T0K82`
- HotJar: `5330235`

### Redes sociales
- Twitter/X: `https://x.com/SpaceDevUy`
- LinkedIn: `https://www.linkedin.com/company/spacedev-uy/`
- Instagram: `https://www.instagram.com/spacedev.io`
- Clutch: `https://clutch.co/profile/spacedev`

---

## DATOS DE LA EMPRESA

- **Email**: info@spacedev.io | **Teléfono**: +1 754-249-6595
- **Oficinas**: Miami FL (25 SW 9th St, 4th Floor) | Montevideo (Cornelio Cantera 2857) | Buenos Aires (El Salvador 5707) | Medellín (Carrera 30 # 7AA-207)
- **Equipo**: +70 personas | **Proyectos**: +160 | **Años**: 7 | **Ratings**: +40 (5★ en Clutch)
- **CEO**: Federico Sendra | **COO**: Diego Priliac | **CTO**: Juan Manuel Sobral | **Head of People**: Grecia Tardáguila

---

## CÓMO TRABAJAR EN EL PROYECTO

### ⚠️ REGLA DE GIT — SIEMPRE USAR BRANCHES Y PRs

**NUNCA commitear directo a `main`.** Todo cambio debe ir en una rama separada y mergearse vía Pull Request.

```bash
# 1. Crear rama para el trabajo (nombre descriptivo)
git checkout -b fix/homepage-stats-section
git checkout -b feat/blog-posts-batch-2
git checkout -b fix/mobile-responsiveness

# 2. Hacer los cambios, commitear normalmente
git add src/pages/index.astro
git commit -m "fix: animate counters in stats section"

# 3. Pushear la rama
git push origin fix/homepage-stats-section

# 4. Crear PR en GitHub
gh pr create --title "fix: animate counters in stats section" --body "..."
# o abrir manualmente: https://github.com/SpaceUY/web-space-2026/compare/fix/homepage-stats-section
```

**Convención de nombres de ramas:**
- `fix/descripcion` — correcciones visuales o bugs
- `feat/descripcion` — nuevas secciones o funcionalidades
- `content/descripcion` — agregar posts, case studies, copy
- `chore/descripcion` — updates de dependencias, configs

---

### Flujo recomendado para mejorar una página

1. Crear una rama nueva (`git checkout -b fix/nombre-pagina`)
2. Abrir la página en el browser y en `https://spacedev.io/` simultáneamente
3. Leer `/Users/kl/Documents/Claude/spacedev-assets/pages/[page]-text.txt` para el contenido exacto
4. Leer `/Users/kl/Documents/Claude/spacedev-assets/pages/[page].html` para el HTML/CSS de Framer
5. Consultar `public/images/IMAGE_MANIFEST.md` para las imágenes de esa página
6. Editar la página Astro correspondiente
7. Verificar con `npx astro check` (0 errores)
8. Verificar con `npx astro build` (build limpio)
9. Comparar visualmente con el original
10. Pushear rama y abrir PR

### Comandos útiles

```bash
# Dev server
npx astro dev

# Type check
npx astro check

# Build
npx astro build

# Preview del build
npx astro preview
```

### Reglas críticas de CSS

- Los estilos de reset/base DEBEN estar dentro de `@layer base {}` en `global.css`
- Si no están en `@layer base`, las utilidades de Tailwind (que sí están en `@layer utilities`) no pueden overridearlos
- Bug ya corregido: `a { color: inherit }` está en `@layer base` ✓

### SectionHeading — props correctas

```astro
<SectionHeading
  eyebrow="optional label"
  title="Main title"
  description="Optional subtitle"
  align="left" | "center"
  tone="light" | "dark"   <!-- "dark" para fondos claros, "light" para fondos oscuros -->
  level="h1" | "h2" | "h3"
  class="additional-classes"
/>
```
⚠️ NO existe prop `invert`. Usar `tone="dark"` para secciones de fondo blanco/claro.

### Client logos marquee — ya correcto, no tocar

El marquee está en `src/pages/index.astro` y usa `clientLogos` definido en el frontmatter. Los SVGs de 174×174 tienen background FAFAFA baked-in. Velocidad: 8s. No cambiar sin necesidad.

---

## ESTADO DE BUILD

- ✅ `npx astro check` — 0 errores, 0 warnings (solo ts(6133) ignorados)
- ✅ `npx astro build` — 53 páginas generadas sin errores
- ✅ Commit inicial pusheado a `https://github.com/SpaceUY/web-space-2026`

---

*CLAUDE.md actualizado el 2026-05-12*  
*Stack: Astro 5 + Tailwind CSS v4 + TypeScript + Vercel*  
*Sitio de referencia: https://spacedev.io/*
