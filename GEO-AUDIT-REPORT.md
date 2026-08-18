# GEO Audit Report: SpaceDev — Ronda 4

**Fecha de auditoría:** 2026-08-18
**URL:** https://spacedev.io/
**Tipo de negocio:** Agencia de servicios (desarrollo blockchain/Web2/Web3, IT staff augmentation, product discovery, security auditing)
**Páginas en el sitemap:** 173 (crawleadas/muestreadas ~55 en esta ronda, cubriendo todos los tipos de página)
**Metodología:** verificación directa contra el sitio LIVE (curl, WebFetch, WebSearch) en cada hallazgo — nunca contra supuestos ni contra el conocimiento previo del modelo. Cruce con el repo (`/Users/verob/web-space-2026`) solo para localizar causa raíz y archivo exacto a tocar.

---

## Antes de leer esto: por qué el score no es más bajo (ni más alto)

Esta es la **4ª ronda** de auditoría GEO/SEO de este sitio. Las rondas 1-3 (PRs [#73](https://github.com/SpaceUY/web-space-2026/pull/73), [#85](https://github.com/SpaceUY/web-space-2026/pull/85), [#100](https://github.com/SpaceUY/web-space-2026/pull/100), [#102](https://github.com/SpaceUY/web-space-2026/pull/102), [#107](https://github.com/SpaceUY/web-space-2026/pull/107), julio-agosto 2026) ya limpiaron la deuda técnica y de schema más grave: no quedó **ningún hallazgo de severidad Crítica** en esta ronda. Lo que queda son brechas reales de Media/Alta severidad en contenido y en mecánicas específicas de plataforma, que son precisamente las dos categorías que ninguna ronda anterior había auditado en profundidad todavía.

Esta ronda verificó punto por punto qué de lo ya arreglado sigue realmente desplegado y funcionando (sí, todo lo revisado sigue en pie), y qué de lo que se descartó explícitamente sigue siendo la decisión correcta (sí, en todos los casos revisados). Eso también es parte de la auditoría: confirmar que el trabajo previo no se rompió, no solo buscar cosas nuevas.

---

## Executive Summary

**Overall GEO Score: 73/100 (Fair)**

El sitio tiene una base técnica y de datos estructurados excelente (93 y 97 sobre 100 respectivamente) gracias al trabajo de las 3 rondas previas — SSR real confirmado, JSON-LD completo y válido en los 6 tipos de página muestreados, cero errores de crawler, headers de seguridad completos. Lo que hoy pesa el score hacia abajo es contenido con brechas reales de frescura y sourcing (64/100) y una capa de optimización específica por plataforma de IA con margen real de mejora (64/100): FAQs sin la estructura de heading que un motor de IA necesita para extraerlas, y dos páginas de servicio de alta intención comercial sin ninguna sección de preguntas. (IndexNow, que el primer análisis marcó como ausente, en realidad ya está implementado y funcionando vía GitHub Actions, corregido al pasar a la fase de implementación, ver hallazgo M6.) Ningún hallazgo de esta ronda es crítico ni bloqueante; todos son de severidad Media o Baja, con dos excepciones de severidad Alta que sí conviene priorizar (ver Quick Wins).

### Score Breakdown

| Categoría | Score | Peso | Score ponderado |
|---|---|---|---|
| AI Citability | 71/100 | 25% | 17.75 |
| Brand Authority | 64/100 | 20% | 12.80 |
| Content E-E-A-T | 64/100 | 20% | 12.80 |
| Technical GEO | 93/100 | 15% | 13.95 |
| Schema & Structured Data | 97/100 | 10% | 9.70 |
| Platform Optimization | 64/100 | 10% | 6.40 |
| **Overall GEO Score** | | | **73.4 → 73/100** |

**Rating: Fair (60-74).** Interpretación literal de la rúbrica: presencia GEO moderada, con oportunidades de optimización significativas — no crítica, no débil, tampoco todavía "Good" sólido. El salto de "Fair" a "Good" (75+) depende casi enteramente de cerrar la brecha de Content E-E-A-T y Platform Optimization; Technical y Schema ya están en el rango "Excelente" y no tienen margen real de mejora que valga la pena perseguir.

**Nota de honestidad sobre el score de Platform Optimization:** ~30% de esa categoría depende de herramientas a las que no tenemos acceso desde esta sesión (Google Search Console, Bing Webmaster Tools, Google Business Profile). Esos puntos NO se promediaron como negativos ni como positivos — se excluyeron del cálculo directo y quedan listados como "no verificable" en la sección correspondiente. El 64/100 es el score de lo que sí se pudo verificar con evidencia real, ya corregido después de descubrir (al pasar a implementación) que IndexNow estaba mal evaluado en el análisis inicial.

---

## Lo que YA está resuelto (rondas 1-3) — verificado hoy, sigue en pie

No se repite como hallazgo nuevo en esta ronda. Confirmado con fetch real contra producción hoy:

- robots.txt permite explícitamente GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, OAI-SearchBot, ChatGPT-User y Bingbot con `Allow: /`.
- `llms.txt` y `llms-full.txt` existen y responden 200 (se llegó a dudar de esto al iniciar la ronda; quedó confirmado).
- Organization JSON-LD completo: `description`, `foundingDate` (2015), `disambiguatingDescription`, `address` (4 oficinas), `sameAs` (5 plataformas activas).
- Article JSON-LD con `publisher` completo (no una copia despojada) y `speakable` con selectores reales.
- CreativeWork.about en los 23 case studies como objeto `Thing` tipado.
- FAQPage duplicado en `/agentic-ai-development` eliminado.
- `twitter:creator`, CLS de imágenes del home, preconnects, redirect de `/sitemap.xml`, todo verificado en producción.
- Los 3 links legacy de `/post/...` redirigen correctamente a `/gone` (410 final).
- Fecha y autoría visibles en los 64 posts de blog, de forma uniforme desde 2023 hasta 2026 (esto corrige un supuesto inicial de esta misma ronda: se pensaba que solo los posts de 2026 tenían este tratamiento; en realidad es un asset de plantilla que siempre existió).
- `/digital-library`, `/events-calendar`, `/newsletter`, `/faqs`, `/spacedev-in-the-media` — documentadas como "placeholder" en el `CLAUDE.md` de mayo 2026 — hoy están completamente desarrolladas con contenido real. Esa sección del `CLAUDE.md` está desactualizada.
- BreadcrumbList correcto e implementado en toda página de 4-5 niveles de profundidad.
- CSP de `vercel.json` (pendiente de chequeo manual desde la ronda 2): confirmado en producción, no bloquea ningún recurso real, y no tiene ningún mecanismo que pueda afectar a un crawler de IA (que no ejecuta JS ni aplica CSP).

## Explícitamente descartado en rondas previas — reconfirmado, sigue sin aplicar

- `aggregateRating` schema: violaría la política de Google sobre reviews no verificadas por terceros. Sigue sin agregarse, correctamente.
- `Content-Signal` directive en robots.txt: propuesta sin adopción real de ningún crawler todavía.
- `FAQPage` en páginas sin FAQ real: no se fuerza donde no corresponde.
- Canonical/sitemap trailing-slash: depende de un paquete de terceros, impacto real medido en cero.
- `SoftwareApplication`/`Product` schema: correctamente ausente. SpaceDev es una agencia de servicios, no vende un producto de software propio; agregar este schema declararía algo falso sobre el modelo de negocio.

---

## Hallazgos — Severidad Alta

### H1. Los créditos de charlas y prensa de los autores no están en el schema estructurado — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** las páginas `/author/juan-manuel-sobral`, `/author/federico-sendra` muestran visualmente una sección "Speaking & Media" con apariciones reales y fechadas (ej. "Blockchain, Scandals & Transparency: CTO on $LIBRA", 2025-02-17). El `Person` JSON-LD de esas páginas no tiene ningún campo (`subjectOf` o similar) que enlace esas apariciones. El vínculo es puramente visual, no estructurado.

**Estado deseado:** agregar `subjectOf` al `Person` JSON-LD apuntando a cada aparición real (con `datePublished` y `url`), y `mentions` al `Article` JSON-LD de cada página de `/spacedev-in-the-media/[slug]` apuntando al autor correspondiente. El dato ya existe en `src/data/media-items.ts`, solo falta conectarlo en ambas direcciones.

**Justificación:** `subjectOf`/`mentions` es la forma en que schema.org modela "esta persona es sujeto de esta pieza de contenido". Sin eso, un sistema de IA solo tiene la frase de marketing ("frequent speaker on blockchain") sin ninguna forma de verificarla programáticamente. Con el enlace, la credencial de Experience/Expertise queda verificable en el grafo estructurado, no solo en texto libre.

**Veredicto: NECESARIO.**

**Archivos:** `src/pages/author/[slug].astro` (líneas 36-47), `src/pages/spacedev-in-the-media/[slug].astro` (líneas 47-56), `src/data/media-items.ts`.

---

### H2. Dos páginas de servicio de intención comercial alta no tienen ninguna sección de FAQ — ⚠️ PARCIAL: Product Discovery ✅ implementado (rama `content/product-discovery-partner-faq`, con datos confirmados por el cliente). Blockchain Partner: decisión explícita de dejarlo en pausa por ahora, no implementado.

**Estado actual:** en `src/data/services.ts`, `productDiscoveryData` (línea 811) y la página de White-Label Blockchain Partner (`partnerData`, línea 321) son las únicas dos páginas de servicio core sin array `faqs:`. Ambas aparecen listadas como servicios principales en `llms.txt`.

**Estado deseado:** agregar 4-6 preguntas reales a cada una, con el mismo formato que ya usan `staffAugData` o `blockAuditData` (que sí tienen FAQ y generan su `FAQPage` JSON-LD automáticamente vía `ServicePageLayout.astro`).

**Justificación:** son páginas de conversión, no de blog — el tipo de página donde más importa tener contenido en formato pregunta-respuesta directamente extraíble por Google AI Overviews y por el propio schema FAQPage, que hoy estas dos páginas no emiten porque no tienen datos que emitir.

**Veredicto: NECESARIO.**

**Archivo:** `src/data/services.ts` (líneas 321 y 811).

---

### H3. Un post de blog presenta un precio de Bitcoin de 2024 como si fuera el precio actual — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** `/blog/bitcoin-101-basic-concepts-everyone-must-know` (publicado 2 de abril de 2024, sin campo `updatedAt`) contiene, hoy, esta frase textual: *"As of today, the price of one Bitcoin is hovering around $71K dollars, recovering strength from last week's retrace."* Verificado con fetch directo a producción el 18 de agosto de 2026: la frase sigue en tiempo presente, más de dos años después, sin ninguna nota de fecha junto al dato.

**Estado deseado:** agregar una nota editorial breve junto al dato ("Nota: precio a abril de 2024") si el post no se va a actualizar, o actualizar la cifra y setear `updatedAt` si se decide mantenerlo como referencia viva.

**Justificación:** este es exactamente el tipo de riesgo de Trustworthiness que un sistema de IA con RAG puede reproducir sin saberlo — un lector humano ve la fecha de publicación en el listado del blog, pero un LLM que extrae la frase de forma aislada no tiene ese ancla salvo que esté en el texto mismo. Es más grave que el bug de "dateModified falso" que la ronda 2 ya corrigió: aquí el `dateModified` es técnicamente correcto, es el contenido mismo el que envejeció mal alrededor de un dato puntual.

**Veredicto: NECESARIO** para este post específicamente (afirmación numérica concreta y falsa por el paso del tiempo). Dos casos relacionados y más leves — la guía "January 2024 Edition" de apps/exchanges y el post sobre el deal Ripple-Rail "pendiente para Q4 2025" sin actualización — quedan en **OPCIONAL**, porque no tienen un dato numérico específico presentado en tiempo presente, solo desactualización general.

**Archivo:** `src/content/blog/bitcoin-101-basic-concepts-everyone-must-know.md`.

---

## Hallazgos — Severidad Media

### M1. `llms.txt` y `llms-full.txt` tienen un dato factual incorrecto y un link muerto — con causa raíz identificada — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** `llms.txt` dice "Portfolio of 24 case studies". El conteo real, verificado en `/our-work` en vivo y en `src/content/case-studies/`, es **23**. `llms-full.txt` todavía lista *"Nomei (https://spacedev.io/our-work/nomei): AI coaching platform..."* — esa URL redirige (301) a `/our-work` genérico desde el commit `f5033fc` ("content: remove Nomei case study permanently", 2026-07-13). La causa exacta: el commit `b852664` (2026-07-08) sincronizó estos archivos cuando el conteo real era 24; cinco días después `f5033fc` bajó el conteo real a 23 y nadie volvió a tocar `llms*.txt`, que quedaron desincronizados desde entonces (más de un mes).

**Estado deseado:** corregir "24" → "23" en `llms.txt`, borrar la línea de Nomei en `llms-full.txt`. Ideal a mediano plazo: un chequeo automático en build que compare el número de entradas en `src/data/case-studies.ts` contra lo que dicen estos archivos, para que esto no se desincronice otra vez en la ronda 5.

**Justificación:** `llms.txt` existe específicamente para ser la fuente que una IA prefiere sobre el HTML parseado. Un dato incorrecto y un link muerto ahí adentro son más graves que en una página normal, porque están en el archivo que se presenta como la versión limpia y verificada del sitio.

**Veredicto: NECESARIO** (corrección trivial, causa raíz ya identificada).

**Archivos:** `public/llms.txt` (línea 50), `public/llms-full.txt` (línea 74).

---

### M2. El componente FAQ reutilizable no envuelve cada pregunta en un heading — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** `src/components/ui/FAQ.astro` (líneas 34-40) renderiza cada pregunta dentro de `<summary><span>{item.question}</span></summary>`, sin ningún `<h2>`/`<h3>` propio. Este componente es el que usa el FAQ del home y la mayoría de páginas de servicio armadas con `ServicePageLayout.astro`. El JSON-LD `FAQPage` sí está bien (confirmado), pero eso solo cubre el camino de structured data — no el camino de extracción directa del HTML/DOM que también usan motores como Bing y Perplexity cuando no confían ciegamente en el schema.

**Estado deseado:** envolver el texto de cada pregunta en un `<h3>` dentro del `<summary>` (`<summary><h3>{question}</h3></summary>`, válido en HTML5, no rompe el disclosure widget).

**Justificación:** el heading por pregunta es una señal de extracción independiente del JSON-LD que ya está bien implementado. Sin él, Google AI Overviews y otros motores dependen únicamente del schema, perdiendo el segundo camino de detección.

**Veredicto: NECESARIO.**

**Archivo:** `src/components/ui/FAQ.astro` (líneas 34-40). Afecta también la sección FAQ de la home y de la mayoría de páginas de servicio, indirectamente.

---

### M3. Solo 4 de 64 posts del blog usan el formato de FAQ ya probado y funcionando — ⏳ PENDIENTE (no priorizado todavía)

**Estado actual:** el campo `faqs:` en el frontmatter (que genera automáticamente sección de preguntas con H3 real + JSON-LD `FAQPage`) solo está usado en 4 posts, todos de julio-agosto 2026.

**Estado deseado:** extender ese campo a los posts de mayor volumen/intención de búsqueda, priorizando por tema, no aplicándolo a los 64 de una sola vez.

**Justificación:** el patrón ya demostró funcionar (formato correcto, JSON-LD válido); el problema es de cobertura, no de diseño.

**Veredicto: NECESARIO** (con priorización gradual, no urgente en bloque).

**Archivo:** `src/content/blog/*.md` (campo `faqs` en frontmatter, definido en `content.config.ts`).

---

### M4. 7 de los 19 posts de 2026 (incluido el publicado hoy) citan datos fechados sin ningún link a la fuente — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`; de paso se corrigieron 3 errores factuales más: cifra de RWA de XRP desactualizada, cita mal atribuida a David Solomon, stats de crecimiento de Akash vencidas)

**Estado actual:** la ronda 2 agregó fuentes primarias a 11 posts de 2026. Al contar links externos reales por post, 7 de los 19 posts de 2026 tienen cero links salientes, incluido el post publicado el mismo día de esta auditoría (`blockchain-in-energy-real-use-cases-vs-hype`, 2026-08-17), que afirma *"approved by the IEEE Standards Board on December 10, 2025"* sin ningún link a la fuente del estándar. Esto muestra que el gap no se resolvió con el tiempo: sugiere que no hay un checklist de publicación que fuerce el sourcing en contenido nuevo.

**Estado deseado:** agregar link a fuente primaria en cada afirmación fechada o institucional específica, siguiendo el mismo estándar ya aplicado en `how-to-launch-an-rwa-protocol` (13 links) o `what-web3-protocols-need-in-2025` (31 links). Considerar agregar un ítem de checklist al proceso editorial.

**Justificación:** Perplexity en particular prioriza fuentes verificables cruzando contra el origen citado; un dato específico sin link es una oportunidad de citabilidad perdida, incluso en contenido nuevo y de calidad.

**Veredicto: NECESARIO**, y con cierta urgencia porque el patrón persiste en contenido publicado hoy mismo.

**Archivos:** `src/content/blog/blockchain-in-energy-real-use-cases-vs-hype.md`, `what-are-memecoins.md`, `aws-select-partner.md`, `web3-marketing-strategies.md`, `decentralized-oracles.md`, `enterprise-blockchain-solutions-roi-use-cases-types.md`, `depin-and-decentralized-ai-*.md`.

---

### M5. Un post de 2025 con cifras fuertes quedó fuera del trabajo de sourcing de la ronda 2 — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** `/blog/goldman-sachs-bets-big-on-ai-and-blockchain` (junio 2025) cita cifras específicas y verificables (46.000 empleados, $15.8B en M&A 2024) sin ningún link a fuente primaria — el mismo patrón que la ronda 2 corrigió en 11 posts de 2026, pero que no llegó a tocar en este post por ser de 2025.

**Estado deseado:** agregar los links de fuente correspondientes (comunicado de Goldman Sachs, informe de M&A) al mismo estándar que los posts ya corregidos.

**Justificación:** es el mismo tipo de brecha que ya se consideró un problema real de confianza en la ronda anterior; dejarlo sin tocar en este post específico es inconsistente con ese criterio ya aplicado.

**Veredicto: NECESARIO** (mismo criterio que ya se aplicó, solo falta extenderlo a este post puntual).

**Archivo:** `src/content/blog/goldman-sachs-bets-big-on-ai-and-blockchain.md`.

---

### M6. ~~No hay implementación de IndexNow~~ — Falso positivo, corregido al implementar

**Lo que decía el hallazgo original:** el subagente de plataforma no encontró ninguna clave IndexNow ni referencia a la API en el código, y lo marcó como NECESARIO.

**Lo que se descubrió al ir a implementarlo:** IndexNow **ya está implementado y funcionando**, desde antes de esta auditoría. El subagente solo verificó el sitio live (curl/HTML), no el repositorio ni GitHub Actions, así que no lo vio.

- Clave publicada en `public/abde11749d2401d5a08c76f66af3a586.txt`, resuelve 200 en producción con el contenido correcto.
- `scripts/indexnow-ping.mjs` lee el sitemap real y hace el POST a `https://api.indexnow.org/indexnow`.
- El job `Ping-IndexNow` en `.github/workflows/production.yaml` corre automáticamente después de cada deploy exitoso a producción, esperando a que el sitemap esté vivo antes de pingear.
- Verificado en la corrida de hoy (PR #107, 2026-08-18): **143 URLs enviadas, respuesta HTTP 200, "URLs accepted"**.

**Veredicto: cerrado, no se tocó nada.** Es, de hecho, una implementación mejor que el promedio (automatizada en CI, no manual), no una carencia.

**Archivos:** `public/abde11749d2401d5a08c76f66af3a586.txt`, `scripts/indexnow-ping.mjs`, `.github/workflows/production.yaml`.

---

### M7. `Service.provider` y `CreativeWork.creator` usan una copia mínima de la Organization en vez del objeto completo — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** las 20 páginas de servicio (vía `ServicePageLayout.astro`, línea 59) y los 23 case studies (`our-work/[...slug].astro`, línea 44) emiten `provider`/`creator` como `{"@type":"Organization","name":"SpaceDev","url":"https://spacedev.io"}` — solo 2 campos. El `Article.publisher` de los blog posts, en cambio, ya usa el objeto `Organization` completo (logo, sameAs, address, contactPoint, foundingDate, disambiguatingDescription) desde la ronda 2.

**Estado deseado:** reusar el mismo `organizationJsonLd` completo (ya definido en `src/lib/seo.ts`) en `Service.provider` y `CreativeWork.creator`, igual que ya se hace en `Article.publisher`.

**Justificación:** cuando la misma entidad aparece en 40+ páginas con distinto nivel de detalle según el tipo de página, un sistema de IA que construye un grafo de entidades ve una "SpaceDev" con atributos inconsistentes según de dónde la extrajo. Consolidar a un único objeto es extender un patrón que ya existe y funciona, no inventar uno nuevo.

**Veredicto: NECESARIO.**

**Archivos:** `src/layouts/ServicePageLayout.astro` (línea 54-62), `src/pages/our-work/[...slug].astro` (línea 37-46).

---

### M8. Imagen hero de los 23 case studies sin `width`/`height`/`aspect-ratio` reservado — ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`)

**Estado actual:** confirmado en el HTML crudo de `/our-work/ndax-canada`: la imagen hero (`loading="eager" fetchpriority="high"`) no tiene `width`/`height` como atributo ni el contenedor padre tiene `aspect-ratio` fijo. Se revisó también el resto de imágenes de la misma página (gallery, "keep reading") y esas sí tienen el espacio reservado vía CSS — no es un problema generalizado, es específico de esta imagen hero.

**Estado deseado:** agregar `width`/`height` explícitos (o `aspect-ratio` calculado en el contenedor), coherente con el `style="width: 125%"` que ya usa.

**Justificación:** es el elemento LCP de 20+ páginas de conversión. Ya está bien optimizado para descarga rápida (`fetchpriority="high"`), solo le falta la reserva de espacio para evitar CLS. No afecta directamente a crawlers de IA (no renderizan layout), pero sí a Core Web Vitals real, que sigue siendo señal de calidad indirecta heredada por Google AI Overviews.

**Veredicto: NECESARIO** (fix simple, bajo riesgo).

**Archivo:** `src/pages/our-work/[...slug].astro` (líneas 151-163).

---

## Hallazgos — Severidad Baja

Se listan de forma más breve por ser de bajo impacto individual, todos con evidencia real verificada:

| # | Hallazgo | Veredicto | Archivo |
|---|---|---|---|
| B1 | "Engineers across 5 countries" (incluye México, remoto) nunca se aclara frente a las 4 oficinas físicas del schema/footer — el dato de fondo ya es correcto (commit `66e4f13`), solo falta una aclaración de copy | ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`) | `src/pages/about-us.astro:212`, `public/llms.txt:30` |
| B2 | Imágenes inline del cuerpo de blog posts sin `width`/`height` (evaluado un fix de `aspect-ratio` fijo en CSS, descartado por riesgo de distorsionar imágenes con relación de aspecto real distinta) | ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`): rehype plugin (`src/lib/rehype-image-dimensions.mjs`) que lee las dimensiones reales de cada imagen en build time y las inyecta como atributos `width`/`height`, sin tocar el CSS existente | `astro.config.mjs`, `src/lib/rehype-image-dimensions.mjs` |
| B3 | Bio de Diego Priliac sin créditos de charlas/prensa, a diferencia de sus 2 co-fundadores | 🔒 CERRADO: confirmado con el cliente que no hay material real adicional para agregar. No se fabrica contenido. | `src/data/authors.ts` |
| B4 | Frase-molde repetida ("built for real operations, not a demo/pilot") en 3 de 5 páginas de industria comparadas — sin contenido duplicado real, solo repetición de apertura | DESCARTADO: es una decisión de voz de marca, no un bug técnico, se dejó fuera de esta ronda | páginas de `blockchain-development-services/industry/` |
| B5 | `CreativeWork` de case studies sin `image`/`datePublished`, aunque el dato ya existe en el frontmatter (`heroImage`, `publishedAt`) | ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`) | `src/pages/our-work/[...slug].astro:37-46` |
| B6 | `BreadcrumbList` capitaliza "And" en vez de mantenerlo en minúscula ("Finance And Fintech" en vez de "Finance and Fintech") | ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`) | `src/layouts/BaseLayout.astro:72-75` |
| B7 | ~~Hub `/blockchain-development-services/industry/` sin schema~~ — **corregido al implementar**: ese archivo es un redirect 301 hacia `/blockchain-development-services#industries`, no una página de contenido. El listado real de industrias vive dentro de `/blockchain-development-services/index.astro`, que ya tiene su propio `Service` JSON-LD de página. Falso positivo del subagente, no se tocó nada. | NO RECOMENDADO (premisa incorrecta) | — |
| B8 | Blog posts usan `@type: Article` en vez de `BlogPosting` (subtipo más preciso); faltan `articleSection`/`wordCount` ya disponibles en los datos | ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`) | `src/pages/blog/[...slug].astro:46` |
| B9 | `llms-full.txt` da mucho más detalle a Blockchain Development que a Staff Augmentation/BlockAudit/Product Discovery | ✅ IMPLEMENTADO (rama `fix/geo-audit-round-4-technical`), incluyendo la estructura real de sprints y términos comerciales de Product Discovery confirmados por el cliente | `public/llms-full.txt` |
| B10 | Sin canal de YouTube propio (el único "SpaceDev" en YouTube es un estudio de videojuegos ucraniano sin relación) | 🔒 CERRADO por ahora: decisión explícita del cliente de no encararlo en esta ronda (es contenido/producción, no código) | — |
| B11 | Guía de apps/exchanges "January 2024 Edition" y post sobre deal Ripple-Rail "pendiente Q4 2025" sin actualización, desactualizados en general (sin cifra puntual falsa como el caso de Bitcoin) | ⚠️ PARCIAL: el post de Ripple-Rail ✅ implementado (rama `fix/geo-audit-round-4-technical`, se verificó que el deal cerró en diciembre 2025 y se agregó la fuente). La guía de apps/exchanges de enero 2024 se dejó sin tocar a propósito, el título ya la fecha explícitamente. | `src/content/blog/a-quick-guide-to-crypto-apps-exchanges-january-2024-edition.md`, `ripple-drops-200m-on-rail-to-dominate-the-future-of-stablecoin-payments.md` |

---

## Hallazgos investigados y descartados esta ronda (falsos positivos evitados)

Estas eran sospechas razonables al iniciar la auditoría, verificadas y cerradas sin acción — se documentan para que la ronda 5 no las vuelva a investigar:

- **`gallery.md` como case study:** el nombre del archivo generó sospecha de estar mal clasificado. Verificado en profundidad (contenido + schema): es un case study real de un cliente llamado literalmente "Gallery" (marketplace de arte NFT), tan completo como cualquier otro de los 23. **No es un bug.**
- **Crunchbase `sameAs` "roto":** curl devolvía 403. Verificado con WebSearch: el perfil existe y es coherente con los datos reales de la empresa. El 403 es bloqueo anti-bot de Crunchbase contra `curl`, no evidencia de un link roto. **No tocar.**
- **`llms-full.txt` "no existe":** dudado al iniciar la ronda. Verificado con `curl -I`: responde 200, 9052 bytes de contenido real. **Cerrado.**
- **CSP bloqueando algo real:** verificado cruzando cada dominio de terceros presente en el HTML real (GTM, Clarity, HotJar/Contentsquare, HubSpot forms y meetings) contra las directivas del CSP desplegado. Los 6 dominios están cubiertos. **Sin impacto real, y sin ningún mecanismo que pueda afectar a un crawler de IA de todos modos** (no ejecutan JS ni aplican CSP).
- **Estructura de URL de 4-5 niveles como problema de crawlabilidad:** no lo es. Los crawlers modernos (incluidos los de IA) siguen enlaces, no cuentan segmentos de URL. Las páginas están en el sitemap y enlazadas desde `llms.txt`. **No aplanar la estructura.**
- **Contenido casi-duplicado entre páginas de industria similares** (finance-and-fintech vs. stablecoins vs. asset-tokenization/real-estate vs. industry/real-estate): comparadas 5 páginas en profundidad, cada una tiene ángulo y secciones genuinamente distintos. **No hay duplicación real que diluya autoridad**, solo una frase de apertura repetida (ver B4).
- **Wikipedia/Reddit ausentes como problema urgente:** para una agencia B2B de este tamaño, ninguna de las dos plataformas mueve la aguja de reconocimiento de entidad tanto como Clutch, LinkedIn o Crunchbase (que sí están sólidos y verificados). Forzar un artículo de Wikipedia sería tratado como conflicto de interés; forzar presencia en Reddit sin actividad orgánica real es riesgo de detección como astroturfing. **No perseguir activamente.**

---

## Caso especial: la colisión de nombre con SpaceDev Inc. (empresa aeroespacial, 1997-2008)

**Estado actual:** el único artículo de Wikipedia que aparece para "SpaceDev" describe a SpaceDev, Inc., empresa aeroespacial de Poway, California, adquirida por Sierra Nevada Corporation en 2008, conocida por el motor de SpaceShipOne. No tiene relación con el cliente. Este es precisamente el motivo por el que la ronda 3 agregó `disambiguatingDescription` al Organization JSON-LD ("Not to be confused with the historical aerospace company SpaceDev Inc...").

**Estado deseado:** el fix de esquema ya hecho es la mitigación correcta y disponible dentro del control del sitio. Lo que queda fuera de control: un LLM entrenado con datos generales de internet (no leyendo el schema del sitio en el momento de la consulta) puede seguir mezclando ambas entidades en su conocimiento de base, independientemente de lo que diga el JSON-LD.

**Justificación:** no es un problema técnico del sitio, es un riesgo de identidad de marca compartida con una entidad previa y ya documentada en una fuente de alta autoridad (Wikipedia). El disambiguatingDescription es la herramienta correcta y ya está aplicada.

**Veredicto: NECESARIO monitorear** (sin acción de código adicional). **OPCIONAL** registrar una entidad separada en Wikidata si se quiere reforzar más la señal. **NO RECOMENDADO** intentar crear o editar el artículo de Wikipedia directamente — alto riesgo de rechazo por conflicto de interés, y no soluciona el problema de fondo (el artículo existente sobre la otra empresa seguiría existiendo igual).

---

## Category Deep Dives

### AI Citability (71/100)

Fortalezas reales: las páginas de smart-contract-development y de stablecoins usan tablas comparativas, rangos de tiempo concretos ("un contrato de propósito único toma 4 a 8 semanas") y terminología técnica exacta — exactamente el tipo de pasaje que un motor de IA puede citar sin contexto adicional. El post de blog más reciente sobre tendencias 2026 es el mejor ejemplo de todo el sitio: fechas exactas, cifras en dólares, entidades nombradas y verificables. Lo que frena el score: la página de Staff Augmentation tiene títulos de sección vacíos de sustancia ("Real Results" sin ningún resultado debajo), y el hallazgo de mayor peso de esta categoría es H3 (precio de Bitcoin vencido presentado en tiempo presente).

### Brand Authority (64/100, contextualizado para agencia B2B)

Clutch (52 reseñas, 5.0, la más reciente de junio 2026), LinkedIn (9.799 seguidores, actividad de hace 2 semanas) y Crunchbase están sólidos y verificados con datos frescos hoy. Wikipedia y Reddit están ausentes pero son de bajo impacto real para este segmento de negocio (ver descartes arriba). El punto débil genuino es YouTube: no hay canal propio, y el único "SpaceDev" que aparece en la plataforma es una entidad no relacionada.

### Content E-E-A-T (64/100)

Muestreo real: 13 de 64 posts de blog (~20%, cobertura 2023-2026), las 23 case studies a nivel de listado pero solo 1 leída en profundidad, las 3 páginas de autor completas, about-us completo, 5 páginas de industria/servicio. Los fundamentos de Trustworthiness son sólidos y mejoraron ronda a ronda (HTTPS, direcciones reales, ISO 27001/SOC 2, FAQPage, bios con perfiles externos verificables). Los posts de 2026 trabajados en ronda 2 son el nivel más alto de Expertise del archivo. El archivo histórico es desigual: solo 2 de 64 posts fueron revisados alguna vez después de publicarse, y el muestreo encontró casos concretos de staleness (H3) y de sourcing débil que quedaron fuera del alcance de rondas anteriores (M5).

### Technical GEO (93/100)

SSR/SSG real confirmado en 4 tipos de página distintos (contenido completo en el HTML crudo, sin hidratación pendiente). Headers de seguridad completos y medidos (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, compresión Brotli real de 82,6%). Sin cadenas de redirección, sin errores 4xx/5xx en la muestra de 15 URLs del sitemap. Los dos únicos puntos que bajan el score son de Core Web Vitals (M8 y B2), ambos de esfuerzo bajo.

### Schema & Structured Data (97/100)

El score más alto de la auditoría. JSON-LD válido y completo en los 6 tipos de página verificados, cero Microdata/RDFa residual, cero valores placeholder. BreadcrumbList correcto hasta 5 niveles de profundidad. Los hallazgos de esta ronda (H1, M7, B5-B8) son oportunidades incrementales sobre una base ya sólida, no correcciones de errores.

### Platform Optimization (64/100)

`/faqs` ya tiene el patrón ideal de heading+respuesta corta para Google AI Overviews, pero el componente reutilizable (`FAQ.astro`) no lo replica en el resto del sitio (M2, M3, ya corregido en esta ronda). Perplexity depende de sourcing verificable, y el patrón de la ronda 2 no se sostuvo en todo el contenido nuevo (M4, M5). Bing Copilot, en cambio, resultó ser un punto fuerte no detectado en el primer pase: IndexNow ya está implementado y corriendo automáticamente en cada deploy (M6, falso positivo corregido). Gemini se ve afectado por la ausencia de YouTube (B10). Aproximadamente 30% de esta categoría (Search Console, Bing Webmaster Tools, Google Business Profile, Knowledge Panel) no es verificable sin acceso a esas herramientas y se excluyó del cálculo en vez de asumirse.

---

## Estado de implementación (actualizado tras la ronda de fixes)

La gran mayoría de los hallazgos accionables ya está implementada, cada uno en su propia rama sin pushear todavía. Lo que queda realmente pendiente:

- [ ] **M3**: extender el campo `faqs:` a más posts de blog además de los 4 que ya lo tienen (no priorizado todavía, sin rama).
- [ ] **H2 (Blockchain Partner)**: agregar FAQ a `/blockchain-development-services/blockchain-partner` — Product Discovery ya se hizo (rama `content/product-discovery-partner-faq`), Partner se dejó en pausa a pedido del cliente.
- [ ] Actualizar la sección "PENDIENTE" del `CLAUDE.md` del proyecto: quitar `/digital-library`, `/events-calendar`, `/newsletter`, `/faqs`, `/spacedev-in-the-media` de la lista de contenido faltante (ya están completas) y las 7 páginas de servicio nuevas que se agregaron en esta ronda.

Cerrado sin implementar, por decisión explícita (no son tareas abiertas):
- **B4** (frase repetida en páginas de industria): es una decisión de voz de marca, no un bug.
- **B10** (canal de YouTube): decisión de contenido/negocio, fuera de esta ronda.
- **B3** (bio de Diego Priliac): confirmado con el cliente que no hay material real adicional para agregar.

Todo lo demás (H1, H3, M1, M2, M4, M5, M7, M8, B1, B2, B5, B6, B8, B9) está implementado. Ver el detalle de cada hallazgo arriba para la rama exacta.

---

## Apéndice: confianza de la medición por categoría

| Categoría | % basado en verificación directa | % no verificable / excluido |
|---|---|---|
| Technical GEO | ~90% (headers, HTML crudo, status codes medidos) | ~10% (Core Web Vitals real de campo, requiere Lighthouse/PageSpeed) |
| Schema & Structured Data | ~100% (JSON-LD parseado real en 6 tipos de página) | 0% |
| AI Citability | ~90% (contenido fetcheado y citado textualmente) | ~10% (no hay métrica objetiva de "citabilidad", es evaluación experta) |
| Brand Authority | ~85% (WebSearch real por plataforma) | ~15% (sentimiento/volumen exacto de menciones no medible sin herramienta dedicada) |
| Content E-E-A-T | ~20% del corpus total muestreado en profundidad (13/64 posts, 1/23 case studies a fondo) | resto no verificado, podría haber más casos de staleness/sourcing débil sin detectar |
| Platform Optimization | ~70% (estructura HTML, sourcing, entidad Wikipedia, verificado con fetch/WebSearch; IndexNow verificado después con logs reales de GitHub Actions) | ~30% (Search Console, Bing Webmaster Tools, Google Business Profile — sin acceso) |

**Ningún score de esta auditoría fue inflado para compensar lo no verificable.** Donde faltó acceso a una herramienta, se excluyó ese componente del cálculo en vez de asumir un valor positivo o negativo.
