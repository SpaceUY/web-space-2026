# Migración SEO: Framer → Astro/Vercel (spacedev.io)

> Guía operativa para el switch de plataforma sin perder indexación ni posicionamiento.
> Mismo dominio (`spacedev.io`), cambia el hosting (Framer → Vercel) y la estructura de algunas URLs.

---

## 1. Estado del mapeo de URLs (auditado 2026-06-10)

**104 URLs en el sitemap live** vs **132 páginas en el sitio nuevo**.

### ✅ URLs idénticas (conservan posicionamiento automáticamente)
Todas las páginas core, servicios, case studies, autores, digital-library, events-calendar, FAQs, legal.

### ⚠️ URLs que CAMBIAN — cubiertas por redirects 301 en `vercel.json`
- **Todos los blog posts**: `/post/<slug>` → `/blog/<slug>` (catch-all)
- **6 slugs renombrados** con regla específica (antes del catch-all):
  | Live | Nuevo |
  |---|---|
  | `/post/marketing-web-3` | `/blog/web3-marketing-strategies` |
  | `/post/real-world-assets-(rwas)-explained` | `/blog/real-world-assets-rwas-explained` |
  | `/post/save-time-with-a-smart-contract-audit-checklist` | `/blog/smart-contract-audit-checklist` |
  | `/post/simply-put-what-are-memecoins` | `/blog/what-are-memecoins` |
  | `/post/web2-web3-migration-guide-for-fintech-the-first-90-days` | `/blog/web2-to-web3-fintech` |
  | `/post/we're-now-an-aws-partner` | `/blog/aws-select-partner` |

### Páginas nuevas (no existen en el live — se indexan como nuevas)
Sub-páginas de blockchain-development-services (industry/*, decentralized-identity, layer-1, real-estate), `/blog/tag/*`, `/spacedev-in-the-media/*`, case studies nuevos (aura, byrrgis, nomei, zenda), `/rss.xml`.

---

## 2. Pre-launch (hacer ANTES del switch de DNS)

- [ ] **Google Search Console**: verificar que tienen acceso a la propiedad `spacedev.io` (idealmente propiedad de dominio via DNS, no solo URL-prefix). Si no existe, crearla YA — los datos históricos de queries son la línea base para medir la migración.
- [ ] **Exportar línea base desde GSC**: Performance report (12 meses) → CSV. Anotar las top 50 queries y top 50 páginas por clicks. Sin esto no se puede saber qué se perdió.
- [ ] **Bing Webmaster Tools**: crear/verificar propiedad en https://www.bing.com/webmasters (se puede importar directo desde GSC con un click). Bing alimenta también a DuckDuckGo y a los índices que usan varios AI assistants (ChatGPT browsing usa Bing).
- [ ] **Crawl del sitio live** (Screaming Frog o similar) como snapshot final de referencia: URLs, titles, descriptions, status codes.
- [ ] **Verificar los redirects en el preview de Vercel**: probar a mano las 6 URLs renombradas + 3-4 `/post/*` cualquiera + la URL con apóstrofe `we're-now-an-aws-partner` y la de paréntesis `(rwas)` (casos borde de encoding).
- [ ] Build limpio: `npx astro check` + `npx astro build` sin errores.
- [ ] Confirmar `robots.txt` accesible y SIN `Disallow: /` (error clásico de lanzamiento).

## 3. Día del switch

1. Apuntar DNS a Vercel (bajar el TTL a 300s un día antes para poder revertir rápido).
2. Verificar inmediatamente:
   - `https://spacedev.io/` responde 200 con el sitio nuevo
   - `https://spacedev.io/sitemap-index.xml` responde 200
   - `https://www.spacedev.io` → 301 a apex (o viceversa, según config actual)
   - HTTPS sin errores de certificado
   - 5-6 redirects `/post/*` al azar responden **301** (no 302, no 308 está bien también) hacia `/blog/*` con 200 final
3. **Google Search Console**: enviar el sitemap nuevo (`sitemap-index.xml`). NO usar la herramienta de "Cambio de dirección" — esa es solo para cambio de dominio; acá el dominio no cambia.
4. **Bing Webmaster Tools**: enviar sitemap.
5. **IndexNow**: ya hay una key generada en `public/abde11749d2401d5a08c76f66af3a586.txt`. Hacer el ping inicial con todas las URLs:
   ```bash
   # Enviar URLs en bloque (hasta 10.000 por request)
   curl -X POST "https://api.indexnow.org/indexnow" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
       "host": "spacedev.io",
       "key": "abde11749d2401d5a08c76f66af3a586",
       "keyLocation": "https://spacedev.io/abde11749d2401d5a08c76f66af3a586.txt",
       "urlList": ["https://spacedev.io/", "https://spacedev.io/blockchain-development-services", "..."]
     }'
   ```
   IndexNow notifica a Bing, Yandex, Seznam, Naver — Google NO lo usa (Google va por sitemap + crawl normal).
6. Solicitar indexación manual en GSC de las 10-15 páginas más importantes (home, servicios, blog index) con "Inspeccionar URL → Solicitar indexación".

## 4. Post-launch — qué esperar y monitorear

### Qué es NORMAL (no entrar en pánico)
- **Fluctuación de rankings durante 2–6 semanas**: Google tiene que recrawlear todo, procesar los 301 del blog y consolidar señales. Caídas temporales del 10-20% en impresiones las primeras 2 semanas son esperables.
- En GSC, la sección Coverage va a mostrar "Page with redirect" para todas las `/post/*` — eso es correcto, es el 301 funcionando.
- El "crawl budget" sube temporalmente: Google recrawlea más agresivo tras detectar el cambio masivo.

### Qué monitorear (semanal, primeras 8 semanas)
- **GSC → Coverage/Pages**: que no aparezcan 404 nuevos. Si aparecen, son URLs que nos faltó redirigir — agregarlas a `vercel.json`.
- **GSC → Performance**: comparar clicks/impresiones de las top queries contra la línea base exportada. Foco en las queries de blockchain development y staff augmentation.
- **Logs de Vercel**: filtrar 404s reales de usuarios/bots → candidatos a redirects faltantes.
- **Core Web Vitals**: el sitio Astro estático debería MEJORAR vs Framer (menos JS). Verificar en GSC → Core Web Vitals tras ~28 días de datos.

### Red flags (acción inmediata)
- 404 masivos en GSC → revisar redirects.
- Caída >40% de impresiones sostenida más de 3 semanas → auditar canonicals/titles/contenido de las páginas afectadas vs snapshot del live.
- "Discovered – currently not indexed" creciendo en páginas core → problema de calidad o de internal linking.
- Sitemap con errores en GSC → regenerar build.

## 5. Cuidados específicos de esta migración

1. **No tocar más los slugs del blog después del launch.** Cada rename suma una cadena de redirects (Google sigue máx. 5 saltos).
2. **El contenido de las páginas core debe mantenerse semánticamente equivalente al live** — Google rankea el contenido, no solo la URL. Si una página live rankea bien y la nueva versión tiene mucho menos texto/keywords, puede caer aunque la URL sea idéntica. Las páginas de servicio nuevas son más ricas que las de Framer, así que en general estamos mejor.
3. **El sitemap live incluye `/404`** (artefacto de Framer) — el nuevo lo excluye correctamente. Sin acción.
4. **Imágenes**: las URLs de imágenes cambian de `framerusercontent.com` a `/images/*`. Las imágenes pierden su indexación en Google Images y se re-indexan con el dominio propio (mejor a largo plazo). Pérdida temporal de tráfico de Images esperable.
5. **`og:image`**: verificar con https://www.opengraph.xyz o el debugger de LinkedIn/Facebook que las cards sociales rendericen bien tras el switch (caches sociales se refrescan lento; usar los debuggers para forzar).
6. **Hotjar/GA4/GTM ya están migrados** en BaseLayout — verificar el día 1 que GA4 registre tráfico (si no, se pierde la continuidad de datos).

## 6. Optimización para AI search (ya implementado)

- `public/llms.txt` — resumen estructurado del negocio para crawlers de AI ✅
- `robots.txt` permite GPTBot, ClaudeBot, PerplexityBot, Google-Extended ✅
- JSON-LD completo: Organization, Article, BreadcrumbList, FAQPage, Service, JobPosting ✅
- RSS feed en `/rss.xml` ✅
- Contenido server-rendered estático (los AI crawlers no ejecutan JS — Astro estático es ideal) ✅

## 7. Pendientes que requieren login del equipo

| Acción | Dónde | Quién |
|---|---|---|
| Verificar/crear propiedad GSC | https://search.google.com/search-console | quien tenga acceso al DNS |
| Exportar línea base de Performance | GSC → Performance → Export | marketing |
| Crear propiedad Bing Webmaster (importar de GSC) | https://www.bing.com/webmasters | ídem |
| Ping IndexNow post-launch | script de la sección 3 | dev |
| Refrescar caches sociales (LinkedIn Post Inspector, etc.) | post-launch | marketing |
