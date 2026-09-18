# GEO Audit Report: SpaceDev

**Última actualización:** 2026-09-18 (Ronda 9), ver resumen ejecutivo actual justo debajo. El resto del documento, a partir de "Historial de auditorías anteriores", queda como archivo de las Rondas 1-8 (útil para ver qué se investigó y descartó, para no repetirlo).

---

## RONDA 9 (2026-09-18): resumen ejecutivo actual

**Metodología de esta ronda:** 5 subagentes en paralelo (AI Citability + Brand Authority, Technical, Schema, Content E-E-A-T, Platform Optimization), cada uno con regla de anclaje explícita. Primera corrida se cortó a mitad de camino por un rate limit de la cuenta (spend limit, HTTP 429); se relanzó completa en Sonnet 5 con presupuesto acotado por agente (sin sub-agentes anidados, verificaciones priorizadas). Baseline: 82/100 (2026-09-14, post-implementación del mismo día), tomado de `~/.geo-prospects/audits/spacedev.io-2026-09-14.json`.

Cobertura: las 158 URLs del sitemap verificadas una por una por status HTTP, todo lo publicado desde el 14/9 auditado a fondo (post hub `/blog/blockchain-use-cases`, PR #135; artículo propio del Hedera Council y reorden de `/spacedev-in-the-media`, PR #136, mergeado el mismo día de esta auditoría), más reverificación en vivo de los hallazgos abiertos de la Ronda 8.

### Overall GEO Score: 82/100 (Good), se mantiene igual que 2026-09-14

| Categoría | Score 09-14 | Score hoy (09-18) | Por qué cambió |
|---|---|---|---|
| AI Citability | 79/100 | **81/100** | +2: el post nuevo `/blog/blockchain-use-cases` trae 6 FAQ autocontenidas y estadísticas con fuente nombrada (IMF vía "51 Insights", BlackRock BUIDL, datos propios de case studies), justo el patrón que la ronda anterior pedía como mejora. |
| Brand Authority | 78/100 | **76/100** | -2, neto entre dos hallazgos que se cancelan parcialmente: se resolvió el hallazgo Alto que venía abierto (Hedera Council ahora tiene página propia, verificada en vivo, y presencia en `llms.txt`/`llms-full.txt`), pero se confirmó uno nuevo de severidad Alta que pesa más: 3 de 4 testimonios atribuidos a clientes vía Clutch en case studies no son verificables en Clutch real (ver R9-A1 más abajo). |
| Content E-E-A-T | 77/100 | **75/100** | -2: mismo motivo que Brand Authority (R9-A1 pega directo en Trustworthiness), compensado parcialmente por la calidad alta de los 2 artículos nuevos (Experience y Authoritativeness fuertes, fuentes primarias reales enlazadas). |
| Technical GEO | 95/100 | **95/100** | Se repite. Las 158 URLs del sitemap dieron 200 sin excepción, robots.txt y sitemap consistentes, SSR completo verificado en las páginas nuevas y viejas revisadas. Los 2 hallazgos Bajos que venían abiertos (CSP con dominios muertos de HubSpot, marquee del hero con `loading="eager"`) siguen exactamente igual. |
| Schema & Structured Data | 98/100 | **98/100** | Se repite. 34 bloques JSON-LD revisados sobre 13 páginas, cero errores de sintaxis, `Organization` idéntico en las 11 páginas donde aparece, `foundingDate: "2017"` consistente. El único gap que impide llegar a 100 sigue siendo el mismo tipo (falta `citation`/`isBasedOn` en el `Article` del Hedera hacia la fuente que ya linkea en el cuerpo), no es nuevo. |
| Platform Optimization | 70/100 | **72/100** | +2: corroboración externa independiente y verificable del Hedera Council (hedera.com, más prensa cripto de terceros como coinfomania.com y crypto-economy.com nombrando a SpaceDev), fuera del control editorial del sitio. Sube puntualmente ChatGPT (67→70) y Perplexity (60→62). Google Gemini (39) y Bing Copilot (59) se repiten, sin evidencia nueva que los mueva. |
| **Overall GEO Score** | **82/100** | **81.7 → 82/100** | |

**Rating: Good (75-89).** El score compuesto no se mueve, pero eso esconde el hallazgo más serio de esta ronda (R9-A1, abajo), que no pesa lo suficiente en el compuesto ponderado como para bajar el número, pero sí lo suficiente como para encabezar este reporte: es un riesgo de reputación y de exposición legal activo, no un ajuste de contenido.

---

## Hallazgos nuevos (Ronda 9)

### Severidad Alta

#### R9-A1. Tres de cuatro testimonios atribuidos a clientes vía Clutch no son verificables, y uno se etiqueta explícitamente como "Verified review on Clutch" siendo falso

**Estado actual:** SpaceDev tiene un perfil real y activo en Clutch (`clutch.co/profile/spacedev`, 52 reviews, promedio 5.0, "Premier Verified", hoy en posición #2 del directorio `clutch.co/developers/blockchain`). De los 4 testimonios que el sitio atribuye a clientes reales vía Clutch, **solo uno es verificable**: Byrrgis (COO, review real del 7/10/2025, texto coincide palabra por palabra, `src/content/case-studies/byrrgis.md:61-62`). Los otros tres no aparecen en ningún review real de Clutch, ni bajo ese nombre de empresa ni bajo un rol compatible; las frases exactas solo existen en spacedev.io:

- Blockus, "Co-founder, Blockus" → `src/content/case-studies/blockus.md:51`
- Drata, "CTO, Drata" → `src/content/case-studies/drata.md:43`
- Rarible, "Engineering Lead, Rarible" → `src/content/case-studies/rarible.md:50`

Agravante confirmado en esta ronda: `src/pages/agentic-ai-development.astro:181-186` reutiliza la cita de Drata con el comentario de código `<!-- TESTIMONIAL (verified Clutch review) -->` y el label visible en pantalla **"★★★★★ · Verified review on Clutch"**. No es solo una cita no verificable, es una afirmación explícita de verificación que hoy es falsa.

**Por qué es alta severidad:** si un sistema de IA (o una persona) recupera esta página y pregunta "¿qué dicen los clientes de SpaceDev en Clutch?", puede reproducir una cita atribuida a un cliente real (Drata, Blockus, Rarible) que esa empresa nunca publicó ahí. Es riesgo de reputación y de exposición legal, no un problema cosmético de SEO, y viola directamente la regla explícita del proyecto de nunca inventar testimonios de Clutch que no existen.

**Estado deseado:** decisión del cliente entre dos caminos: (a) retirar el badge/atribución "Clutch" de esas 3 citas y dejarlas como testimonios internos sin atribución de plataforma, o (b) reemplazarlas por reviews reales verificables en `clutch.co/profile/spacedev` con link a la review exacta (como ya se hace con los testimonios de la home, que sí tienen `href` a IDs de review específicos, `src/pages/index.astro:449-452`). En cualquier caso, corregir de inmediato el label "Verified review on Clutch" en `agentic-ai-development.astro:181-186`, que es la afirmación más riesgosa de las dos.

**Veredicto: NECESARIO, urgente.** Es el hallazgo que más pesa de toda la ronda, aunque no sea el que más mueve el score compuesto.

**Archivos:** `src/content/case-studies/blockus.md:51`, `src/content/case-studies/drata.md:43`, `src/content/case-studies/rarible.md:50`, `src/pages/agentic-ai-development.astro:181-186`.

**Decisión del cliente (2026-09-18, misma sesión):** Vero decidió dejarlo abierto y no priorizarlo por ahora ("no le daré importancia"). Queda documentado tal cual está, sin fix de código en esta ronda. Sigue siendo un hallazgo real y válido, no se descarta ni se recalifica su severidad; solo se registra que no hay una acción en curso. Si una ronda futura lo reencuentra, no es un hallazgo nuevo: es este mismo, seguir citando R9-A1, no re-priorizarlo como si fuera una sorpresa.

---

### Severidad Media

#### R9-M1. `Article` del anuncio de Hedera sin `citation`/`isBasedOn` hacia la fuente que ya linkea en el cuerpo

**Estado actual:** `/spacedev-in-the-media/spacedev-becomes-a-hedera-community-partner` emite un `Article` válido (`headline`, `image`, `datePublished`, `author`, `publisher`, `mentions`), pero sin `citation` ni `isBasedOn` pese a que el cuerpo de la página linkea dos veces a `hedera.com/blog/...`. Tampoco tiene `dateModified` ni `description`. El `BlogPosting` de `/blog/blockchain-use-cases` sí es un ejemplo completo (con `description`, `dateModified`, `speakable`), este artículo está por debajo de ese estándar interno.

**Por qué importa:** `citation`/`isBasedOn` es la forma estándar de decirle a un sistema de IA "esta afirmación viene de esta fuente externa verificable", justo lo que un anuncio de partnership necesita para que se le atribuya correctamente.

**Estado deseado:** agregar `citation` apuntando a las URLs de Hedera ya presentes en el cuerpo, más `dateModified` y `description`.

**Veredicto: OPCIONAL** (no rompe nada, mejora precisión de atribución).

**Archivo:** `src/pages/spacedev-in-the-media/[slug].astro` (template del `Article`).

#### R9-M2. "50+ perfect 5-star ratings" no es exacto

**Estado actual:** Clutch lista 52 reviews con promedio 5.0, pero al menos 2 tienen alguna categoría de rating por debajo de 5 (no son "perfect" en sentido estricto). La inconsistencia interna "40 vs 50+" que se había marcado en una ronda anterior ya no existe en el repo (verificado: `index.astro:441` y `about-us.astro:214,233` dicen los dos "50+"), así que eso queda cerrado.

**Por qué importa:** "perfect" es una palabra absoluta y falsable; un sistema de IA que cruce esto contra Clutch puede marcarlo como inexacto.

**Estado deseado:** cambiar "perfect 5-star ratings" por lenguaje exacto, por ejemplo "5.0-average rating on Clutch (52 reviews)".

**Veredicto: OPCIONAL**, bajo esfuerzo.

**Archivos:** `src/pages/index.astro:441`, `src/pages/about-us.astro:214,233`, `public/llms.txt`.

#### R9-M3. 42 de los 70 posts del blog (61%) no citan ninguna fuente externa

**Estado actual:** grep completo sobre `src/content/blog/` (69-70 archivos): 27 posts tienen al menos un link externo en el cuerpo, 42 no tienen ninguno. El post nuevo `/blog/blockchain-use-cases` es la excepción positiva (34 links internos, fuentes nombradas), no la norma.

**Por qué importa:** sin fuente verificable, la mayoría del blog no le da a un lector ni a un sistema de IA forma de comprobar las afirmaciones contra una fuente primaria. No implica que el contenido sea falso, pero sí que no es verificable en un click.

**Estado deseado:** no es un fix de una sesión; priorizar los posts con más tráfico o más antiguos para sumarles al menos 1-2 fuentes primarias, siguiendo el patrón que ya funciona en `blockchain-use-cases.md`.

**Veredicto: OPCIONAL**, trabajo de mediano plazo, no bloqueante.

#### R9-M4. Página `asset-tokenization/real-estate` sigue sin contenido FAQ (no solo sin schema)

**Estado actual:** corrección sobre lo que decía la Ronda 8: no es que haya FAQ visible sin marcar, es que **no hay ninguna sección de preguntas y respuestas en el HTML**, ni hay campo `faqs` definido en `realEstateTokData` (`src/data/services.ts`). El `<FAQ items={data.faqs} .../>` del layout está condicionado a que el array exista, así que hoy simplemente no se renderiza.

**Por qué importa:** es la única página de servicio core sin ese formato de alta citabilidad; si se agrega contenido, el `FAQPage` schema sale gratis porque el patrón ya está armado en el layout compartido.

**Estado deseado:** decisión de contenido con el cliente: agregar 4-6 preguntas reales de tokenización inmobiliaria, o cerrar el hallazgo como "no aplica" en el próximo baseline.

**Veredicto: OPCIONAL**, depende de una decisión de contenido, no es un bug.

**Archivo:** `src/data/services.ts` (`realEstateTokData`).

#### R9-M5 (reconfirmado, sin cambios). Cero visibilidad en búsquedas de comprador no-branded

**Estado actual:** búsqueda en vivo hoy de "best blockchain development company for smart contracts": SpaceDev no aparece ni en resultados orgánicos ni en síntesis. Dominan DesignRush, Clutch, GoodFirms, Sortlist y competidores directos (Dev Technosys, Antier Solutions). Solo se verificó 1 de las 6 consultas del baseline por presupuesto; las otras 5 no se remidieron esta ronda.

**Veredicto: NECESARIO**, no se resuelve con un commit, es outreach y contenido de mediano/largo plazo.

---

### Severidad Baja

- **CSP con `forms.hubspot.com` y `forms.hscollectedforms.net` muertos** (`vercel.json:47`): reconfirmado, cero referencias en el código a esos dominios (los formularios reales postean a `api.hsforms.com`, correctamente permitido). Sin cambios desde Ronda 8. Veredicto: OPCIONAL, riesgo cero.
- **Marquee del hero con `loading="eager"`**: reconfirmado, el set visible (16-17 logos) sigue eager; el set duplicado `aria-hidden` sí es lazy. Pendiente de aprobación del cliente desde Ronda 8, sin cambios.
- **Fuentes nombradas pero no enlazadas:** la cita de Gartner en `the-future-of-ai-agents-in-business-why-40-projects-will-fail-by-2027.md` (líneas 2-3, 20, 36) es correcta en el dato ("over 40% of agentic AI projects... by end of 2027", verificado contra el comunicado real de Gartner del 25/6/2025) pero no lleva link a la fuente. Mismo patrón con "IMF data via 51 Insights" en `blockchain-use-cases.md:79,193`. Veredicto: OPCIONAL.
- **Covers de blog en PNG pesado sin convertir a WebP:** reconfirmado, 600-640 KB cada uno en `public/images/content/*/cover.png`. Sin cambios desde Ronda 8.
- **Artículos de "SpaceDev in the Media" sin autor humano visible:** el JSON-LD atribuye `author: Organization`, no una persona, pese a que el cuerpo cita a Juan Manuel Sobral en primera persona. Patrón consistente en todo ese formato de página, no específico del artículo de Hedera. Veredicto: OPCIONAL.
- **39 posts viejos de Framer en 404:** reconfirmado (muestra: `/blog/why-your-code-should-be-as-simple-as-possible` sigue 404). Decisión ya tomada en rondas anteriores: se dejan. Sin cambios.

### Info / reconfirmado sin cambios esta ronda

- **Google Gemini (39/100):** colisión de entidad en Wikipedia/Wikidata sigue exactamente igual, reverificada en vivo hoy ("SpaceDev" en Wikipedia/Wikidata sigue resolviendo a la aeroespacial de Poway, California, disuelta/absorbida por Sierra Nevada Corporation). Causa raíz fuera del repo.
- **`/.well-known/indexnow-key.txt` sigue en 404:** sin cambios respecto de rondas anteriores, impacto bajo (protocolo opcional de Bing/Yandex).
- **"Top 5 Blockchain Companies worldwide by Clutch" (llms.txt):** verificado hoy como **cierto en este momento** (SpaceDev en posición #2 de `clutch.co/developers/blockchain`), aunque sigue siendo un directorio dinámico, no un premio otorgado; puede cambiar de posición sin aviso. Decisión del cliente de rondas anteriores de dejar la frase como está queda reforzada, no cuestionada.
- **`CLAUDE.md` del proyecto desactualizado:** la sección de redes sociales todavía lista `linkedin.com/company/spacedev-uy/` como la URL "oficial", pero esa URL redirige (301) a `spacedev-io` desde la Ronda 8. El JSON-LD del sitio ya usa la URL correcta; es la documentación interna la que quedó vieja, no el sitio.

## Confirmado sin problema esta ronda

- **158/158 URLs del sitemap devuelven 200**, cero redirects, cero errores. `sitemap-0.xml` coincide 1 a 1 con robots.txt.
- **Hedera Council resuelto de punta a punta:** página en vivo (200), en el sitemap, enlazada server-side desde `/spacedev-in-the-media` (primera en el orden), en `llms.txt` y `llms-full.txt`, con schema `Article` válido desde el día 1, sin regresiones.
- **`Organization.sameAs`:** las 8 URLs responden 200 sin redirigir, incluido LinkedIn (`spacedev-io`), confirmado de nuevo.
- **`foundingDate: "2017"`** consistente en todo el JSON-LD revisado.
- **`privacy-policy.astro`** sigue sin mencionar GTM ni HotJar, sí menciona Clarity y Apollo.
- **Cero `FAQPage` duplicado**, cero regresión de schema en el contenido nuevo.

---

## Historial de auditorías anteriores (Rondas 1-8)



**Metodología de esta ronda:** 5 subagentes en paralelo (AI Citability, Brand Authority, Technical, Content E-E-A-T, Schema, Platform Optimization), cada uno con instrucción explícita de regla de anclaje (un sub-score solo se mueve con un hallazgo concreto y verificado, nunca por reevaluación desde cero) y de verificar todo contra el sitio en vivo o el archivo exacto del repo con línea, nunca contra supuestos. Baseline: el último score cerrado y reconciliado, 78/100 (2026-09-02), tomado de `~/.geo-prospects/audits/spacedev.io-2026-09-02.json` (la fuente que alimenta el dashboard de marketing), no de ningún número intermedio.

Cobertura: todo lo publicado desde el 09-02 se auditó al 100% por primera vez (2 posts de blog nuevos, el anuncio de Hedera Council y la tira "As seen in" derivada, el refactor de tracking que sacó GTM y HotJar, 4 PRs de performance/accesibilidad, 46 redirects de URLs huérfanas, el cambio de imagen Open Graph por defecto), más una reverificación en vivo de los hallazgos abiertos que venían arrastrándose de rondas anteriores.

### Overall GEO Score: 80/100 (Good), sube desde 78/100 (2026-09-02)

| Categoría | Score 09-02 | Score hoy (09-14) | Por qué cambió |
|---|---|---|---|
| AI Citability | 76/100 | **78/100** | +2: los 2 posts nuevos están bien construidos para extracción (FAQs, takeaways visibles en el HTML, `speakable` con selectores reales) y 21 de las 46 URLs huérfanas redirigidas por el PR #128 ya se verificaron en 3xx. Pesa en contra que ninguno de los 2 posts nuevos tiene una sola cita a fuente primaria (ver R8-A5), lo que compensó buena parte de la ganancia. |
| Brand Authority | 72/100 | **76/100** | +4: el anuncio de Hedera Council (publicado por Hedera, no por SpaceDev, con dos pickups independientes verificados) es la corroboración de terceros más fuerte desde que arrancaron las rondas. Pesa en contra que quedó desconectada del resto del sitio: sin página propia, sin sitemap, sin `llms.txt` (R8-A4), y que el perfil de LinkedIn en `sameAs` ahora redirige a un handle renombrado (R8-A1). |
| Content E-E-A-T | 72/100 | **73/100** | +1: los 2 posts nuevos tienen la mejor estructura del blog y llms.txt quedó sincronizado en 24 case studies. Pesa en contra una cita textual falsa atribuida a Gartner en un post existente (R8-C1, la más grave de la ronda) y el post de stablecoins publicado sin ninguna fuente pese a tener datos verificables (R8-A5). |
| Technical GEO | 95/100 | **94/100** | -1: ningún hallazgo toca crawlability, SSR ni indexabilidad (todo eso sigue perfecto), pero el CSP quedó con un gap real en `connect-src` para los endpoints regionales de GA4 (R8-M6) y quedaron 3 covers pesados sin convertir a WebP, incluido el del post del 09-11. |
| Schema & Structured Data | 97/100 | **95/100** | -2: la URL de LinkedIn en `Organization.sameAs` cambió de slug y hoy redirige (301) en las 156 páginas del sitio (R8-A1). Es la única baja de la ronda con evidencia de cambio real en el mundo, no de criterio más estricto. |
| Platform Optimization | 67/100 | **69/100** | +2: contenido nuevo construido para el patrón que Google AI Overviews extrae, y corroboración de terceros con URL primaria enlazada (mejora ChatGPT y Perplexity). Google Gemini se mantiene en 39 (causa raíz sin cambios) y Bing Copilot se mantiene en 59 (nada de lo nuevo toca su mecánica). |
| **Overall GEO Score** | **78/100** | **79.8 → 80/100** | |

**Rating: Good (75-89).** Cruza el umbral de 80 por primera vez. El hallazgo más grave de la ronda (R8-C1, cita falsa de Gartner) no está en la categoría que más pesa en el compuesto, pero es el tipo de error que un LLM puede reproducir tal cual, así que se prioriza como crítico independientemente de su peso relativo en el score.

---

## Hallazgos nuevos (Ronda 8)

### Severidad Crítica

#### R8-C1. Cita falsa atribuida a Gartner en el H1, la URL y 9 lugares de un post existente

**Estado actual:** `/blog/the-future-of-ai-agents-in-business-why-40-projects-will-fail-by-2027` presenta, entrecomillado como cita textual, que Gartner pronostica que *"over 40 Agentic AI projects will be scrapped by 2027"*. La predicción real de Gartner (comunicado del 2025-06-25) es que **más del 40% de los proyectos de agentic AI** serán cancelados para fines de 2027, no "40 proyectos" a secas. El propio archivo prueba que el dato correcto se conoce: el campo `metatitle` (línea 16) sí dice "Why 40% of Projects Fail", mientras que el título, la descripción, el takeaway, el cuerpo (línea 20, entre comillas) y el slug de la URL dicen "40" sin el símbolo de porcentaje.

**Por qué es crítico:** es una cita textual atribuida a una consultora nombrada, exactamente el formato que un sistema de IA extrae y repite como hecho verificado. "40 proyectos" a nivel global no tiene sentido como estadística; "40% de los proyectos" sí, y es la que hoy no está en el texto visible.

**Estado deseado:** corregir "40" → "40%" en título, descripción, takeaway, cuerpo y H2 (líneas 3, 11, 20, 32, 34, 36, 70, 92). El slug de la URL es una decisión aparte: si se cambia, el 301 va en `vercel.json` en el mismo commit (regla dura del proyecto).

**Veredicto: NECESARIO, urgente.**

**Archivo:** `src/content/blog/the-future-of-ai-agents-in-business-why-40-projects-will-fail-by-2027.md` (líneas 3, 11, 16, 20, 32, 34, 36, 70, 92).

---

### Severidad Alta

#### R8-A1. La URL de LinkedIn en `Organization.sameAs` cambió de slug y hoy redirige, en las 156 páginas del sitio

**Estado actual:** `https://www.linkedin.com/company/spacedev-uy/` hoy devuelve `301` hacia `https://www.linkedin.com/company/spacedev-io` (verificado dos veces con `curl -I`, confirmado también por el equipo). No es normalización de barra final (eso sí pasa con los perfiles personales de Fede y Diego, que redirigen a sí mismos, y no es un hallazgo): LinkedIn le cambió el handle a la company page. `sameAs` alimenta 156 páginas (`src/lib/seo.ts:10,59`) y la URL vieja también está en `public/llms-full.txt:95`.

**Estado deseado:** actualizar `SITE.social.linkedin` a `https://www.linkedin.com/company/spacedev-io` en `src/lib/seo.ts:10` y la línea correspondiente en `llms-full.txt`.

**Justificación:** `sameAs` es la propiedad de mayor peso GEO del rubro (entity linking); un 301 no rompe nada pero debilita la resolución de entidad en el grafo, y está desplegado en todo el sitio a la vez.

**Veredicto: NECESARIO** (fix de una línea, bajo riesgo).

**Archivos:** `src/lib/seo.ts:10`, `public/llms-full.txt:95`.

#### R8-A2. `privacy-policy.astro` describe trackers removidos y omite los que corren hoy

**Estado actual:** el PR #130 sacó Google Tag Manager y HotJar del sitio (refactor de tracking, 2026-09-04). Nadie actualizó el texto legal. `src/pages/privacy-policy.astro` dice hoy, en vivo, en 4 lugares (líneas 38, 54, 87, 88), que se usan GTM (`GTM-WKM5KGV`) y HotJar (`5330235`), ninguno de los dos activo. Ni Clarity ni Apollo, que sí corren hoy, figuran como proveedores en el texto.

**Estado deseado:** reescribir las 4 líneas para reflejar los proveedores reales (GA4 directo, Clarity, Apollo) y sacar toda mención a GTM y HotJar.

**Justificación:** es una página legal publicada haciendo afirmaciones falsas sobre qué datos se recolectan y con qué herramientas, además del tipo de texto que un LLM lee y repite como fuente de verdad sobre la empresa.

**Veredicto: NECESARIO.**

**Archivo:** `src/pages/privacy-policy.astro` (líneas 38, 54, 87, 88).

#### R8-A3. La fecha de fundación se contradice entre el schema y el copy visible, y ya se filtró a una respuesta de IA

**Estado actual:** `src/lib/seo.ts:42` declara `foundingDate: "2015"` en el JSON-LD (serializado en las 156 páginas). El copy visible dice otra cosa: `about-us.astro:215` ("8+ Years in the market"), `index.astro:222` ("8 years in business"), `llms.txt:32` ("8 years in business") y `llms-full.txt:3` ("Founded 8 years ago") apuntan todos a ~2018. Fuentes externas (Crunchbase) dicen 2017. Evidencia de que ya es un problema real: una búsqueda en vivo devolvió una respuesta generada por IA que mezclaba "Founded in 2017" con "8 years in business" en el mismo párrafo.

**Estado deseado:** decidir cuál es el año real de fundación con el cliente y alinear los 4 lugares (schema, home, `llms.txt`, `llms-full.txt`).

**Justificación:** es exactamente el tipo de dato que un sistema de IA usa para construir el perfil de entidad de la empresa; tres valores distintos en el propio sitio (uno de ellos en el campo que se supone más confiable, el JSON-LD) es peor que no tener el dato.

**Veredicto: NECESARIO**, requiere una decisión del cliente sobre el año correcto antes de tocar código.

**Archivos:** `src/lib/seo.ts:41-42`, `src/pages/about-us.astro:215`, `src/pages/index.astro:222`, `public/llms.txt:32`, `public/llms-full.txt:3`.

#### R8-A4. El anuncio de Hedera Council, el activo de Brand Authority más fuerte del trimestre, no tiene página propia ni está en `llms.txt`

**Estado actual:** el reconocimiento está hardcodeado como card externa en `src/pages/spacedev-in-the-media.astro:85-96`, no como `MediaItem` real. Consecuencia verificada: `/spacedev-in-the-media/hedera-council-community-partner` da `404` y no está en el sitemap (156 URLs, ninguna con "hedera" salvo `hedera-ai-x-hackathon`, un reconocimiento menor que sí tiene página propia). Tampoco aparece en `public/llms.txt` (0 menciones a "Hedera"), solo en `llms-full.txt:83`. Es contenido real y verificado (Hedera lo publica en su propio blog, nombra a SpaceDev, dos pickups independientes reales en KuCoin y Binance Square), simplemente está mal conectado.

**Estado deseado:** crear una entrada real en `src/data/media-items.ts` con página propia (mismo patrón que los otros 20 reconocimientos), agregarla al sitemap por consecuencia, y sumar el dato a `llms.txt` junto al resto de reconocimientos de la empresa.

**Justificación:** es la corroboración de terceros de mayor autoridad que consiguió el sitio en meses (lo publica Hedera, no SpaceDev), y hoy un LLM que lea `llms.txt` (el archivo pensado justamente para esto) no se entera de que existe.

**Veredicto: NECESARIO.**

**Archivos:** `src/pages/spacedev-in-the-media.astro:85-96`, `src/data/media-items.ts`, `public/llms.txt`.

#### R8-A5. El post de stablecoins se publicó sin ninguna fuente primaria, con datos que sí son verificables

**Estado actual:** `src/content/blog/stablecoin-integration.md` (publicado 2026-09-03) no tiene un solo link externo en todo el cuerpo (los únicos `https://` del archivo son el botón de HubSpot). Afirma que "Visa, Mastercard, Stripe, PayPal, Payoneer, and Kyriba have integrated or announced stablecoin rails" (línea 37) y menciona el marco del GENIUS Act (líneas 35, 93) sin ningún link. Se verificaron los dos claims más específicos contra fuente primaria y son reales y fechados: el lanzamiento de Payoneer (press release propio, 2026-02-17) y el partnership de Kyriba con Merge (2026-07-02). El propio sitio ya hace esto bien en otros posts (`blockchain-compliance-us.md` linkea OCC, `blockchain-trends-2026.md` linkea dos fuentes), así que el estándar existe adentro de casa y este post no lo siguió.

**Estado deseado:** agregar los links a las fuentes ya identificadas (Payoneer, Kyriba, el texto oficial del GENIUS Act).

**Justificación:** Perplexity en particular prioriza fuentes verificables cruzando contra el origen citado; datos correctos sin link son citabilidad perdida por una omisión mecánica, no por falta de investigación real.

**Veredicto: NECESARIO.**

**Archivo:** `src/content/blog/stablecoin-integration.md` (líneas 35, 37, 93).

---

### Severidad Media

#### R8-M1. PYUSD atribuido a PayPal como emisor, cuando el emisor real es Paxos

`src/content/blog/stablecoin-integration.md:64`, tabla comparativa: `| PYUSD | PayPal | ... |`. El emisor real es Paxos Trust Company (PayPal es la marca y el canal de distribución; Paxos opera bajo charter nacional de la OCC desde el 2025-12-12). Agrava que el mismo post, dos párrafos después, le dice al lector que elija proveedor por "transparent reserves and clear regulatory status": el dato correcto es justamente el que respalda ese criterio. **Veredicto: NECESARIO.**

#### R8-M2. "Binance Square" listado como outlet de prensa, cuando el autor real es BSC News

`src/pages/spacedev-in-the-media.astro:95` y la tira "As seen in" derivada muestran el logo de Binance junto a Forbes y una publicación peer-reviewed. El pickup real (`binance.com/en/square/post/363118814200068`) está firmado por BSC News, una cuenta creadora en Binance Square (plataforma de contenido de usuarios, no editorial de Binance). El ítem es real, el etiquetado sugiere más autoridad institucional de la que tiene. **Veredicto: NECESARIO** (cambiar la etiqueta del outlet a "BSC News").

#### R8-M3. `llms.txt` afirma un ranking de Clutch sin respaldo, y omite el reconocimiento real que sí lo tiene

`public/llms.txt:36`: "Recognized as Top 5 Blockchain Companies worldwide by Clutch". Es el único lugar en todo el repo o el sitio donde aparece esa frase; el perfil de Clutch en vivo no muestra ningún ranking así, solo "Premier Verified", 52 reviews, 5.0. Mientras tanto, el reconocimiento real y verificable (Summer 2026 Clutch Global Winner, con página propia en vivo) no está ni en `llms.txt` ni en `llms-full.txt`. **Veredicto: NECESARIO** (sacar la frase sin respaldo, agregar el Global Winner real).

#### R8-M4. Estadística de Gartner no verificable en un post existente

`src/content/blog/enterprise-blockchain-solutions-roi-use-cases-types.md:16`: "Gartner estimates that 25% of Global 2000 companies will run blockchain in production by end of 2026, up from 11% in 2024". No se encontró ninguna publicación de Gartner que sostenga esa cifra exacta. Marcado no verificable, no descuenta del score, pero necesita chequeo antes de seguir publicado por ser un número específico atribuido a una consultora nombrada. **Veredicto: A VERIFICAR.**

#### R8-M5. El perfil de AWS Partner en `sameAs` es una SPA que no sirve contenido a un crawler

`https://partners.amazonaws.com/partners/0010h00001kLtZRAA0/SpaceDev` devuelve `200` pero es client-rendered: un fetch sin ejecutar JS solo trae el encabezado genérico "AWS Partner Solutions Finder", sin ningún dato del partner real. El listing de AWS Marketplace, en cambio, sirve contenido completo. **Veredicto: OPCIONAL** (apoyarse en Marketplace como prueba primaria de la relación con AWS; no hay fix de código posible sobre una página que no controlamos).

#### R8-M6. El CSP no cubre los endpoints regionales de GA4, perdiendo hits en silencio

`vercel.json`, `connect-src` lista `google-analytics.com` y `analytics.google.com` sin wildcard. GA4 rutea parte del tráfico a `region1.google-analytics.com`/`region1.analytics.google.com`, bloqueados hoy por el CSP. Con el refactor del PR #130, GA4 quedó como única vía de medición, sin red de contención. **Veredicto: NECESARIO** (cambiar a `https://*.google-analytics.com https://*.analytics.google.com`, una línea).

#### R8-M7. La cobertura de prensa externa (incluido Hedera) no está modelada en schema

El JSON-LD de `/spacedev-in-the-media` trae `Organization`, `CollectionPage` y 5 `VideoObject`, pero los `contentItems` (la cobertura externa real) existen solo como cards HTML con links salientes, sin `hasPart`, `subjectOf` ni `citation`. Contraste: las páginas de autor sí modelan sus apariciones con `Person.subjectOf`. La cobertura de terceros más fuerte que tiene hoy la empresa queda fuera del grafo estructurado. **Veredicto: NECESARIO**, mismo patrón que ya funciona en autores, extenderlo acá.

#### R8-M8. Cero visibilidad en 4 de 6 búsquedas reales de comprador no-branded, y los listicles que sí citan a SpaceDev tienen cifras viejas

Búsquedas en vivo del tipo que haría un comprador ("blockchain development company", "smart contract audit company", "IT staff augmentation Latin America", "tokenization development agency"): SpaceDev no aparece en ninguna de las 4, compiten PixelPlex, CertiK, BairesDev, Unicsoft y directorios como Clutch/GoodFirms. Solo aparece cuando la búsqueda ya incluye la marca. En los listicles de terceros donde sí figura (queries tipo "best blockchain development companies 2026"), las cifras citadas están desactualizadas: "7 years", "160+ projects", "70 seasoned team members" contra el "8 years / 200+" actual del sitio. **Veredicto: ESTRATÉGICO** (no se arregla en el repo; el post de comparación del 09-08 es la jugada correcta pero todavía no rankea, y actualizar las cifras en esos directorios es trabajo de outreach, no de código).

#### R8-M9. `/our-work` no tiene `ItemList`/`CollectionPage`

El portfolio (la superficie de prueba más fuerte del sitio) solo emite `BreadcrumbList`, `Organization` y `ContactPoint`. Comparar con `/blog`, que sí tiene `CollectionPage` + `ItemList` con 70 `ListItem`. **Veredicto: NECESARIO.**

#### R8-M10. Real Estate Tokenization sigue sin FAQ (arrastrado, sin cambios)

A diferencia de Blockchain Partner (decisión cerrada de no agregarlo), esta página no se discutió esta ronda tampoco. Sigue siendo un hallazgo abierto real, no una decisión tomada. **Veredicto: NECESARIO, pendiente de decisión del cliente.**

---

### Severidad Baja

| # | Hallazgo | Veredicto | Archivo |
|---|---|---|---|
| R8-B1 | 39 posts viejos de Framer siguen en 404 (confirmado por 3 agentes independientes, fuzzy match contra las 156 URLs vivas: 0 coincidencias). Recomendación explícita: dejarlos en 404, no redirigir en masa a `/blog` (patrón que Google clasifica como soft-404). El sitio ya tiene `/gone` (responde 410) construido y sin usar si se quiere acelerar la desindexación. | NO ACCIÓN por ahora, decisión editorial pendiente (igual que en rondas previas) | `url-audit-404s.txt` (raíz, untracked) |
| R8-B2 | Certificación SOC 2 solo existe como `alt` de imagen en el footer, sin link a certificado ni mención en `llms.txt`/`llms-full.txt`. "ISO 27001", que fuentes externas atribuyen a SpaceDev, no aparece en ningún lado del repo. | A VERIFICAR con quien gestiona esas certificaciones | `src/components/layout/Footer.astro:170-179` |
| R8-B3 | Última review de Clutch es de octubre 2025 (~11 meses), señal de frescura enfriándose aunque el conteo (52, 5.0) sigue siendo correcto | INFORMATIVO, sin acción de código posible | N/A |
| R8-B4 | "Medium" y "YouTube" (plataformas propias, no terceros) mezclados en la tira "As seen in" junto a cobertura de prensa real, diluye el valor de la señal de corroboración externa | OPCIONAL | `src/pages/spacedev-in-the-media.astro` |
| R8-B5 | CSP sigue permitiendo `forms.hubspot.com` y `forms.hscollectedforms.net`, dominios del embed de HubSpot que ya no se usa | NECESARIO (higiene, riesgo cero) | `vercel.json` |
| R8-B6 | Asset servido sitewide desde el footer con espacio literal sin codificar en el nombre (`/images/icons/iso logo.png`), rechazado por clientes HTTP estrictos aunque los browsers lo toleran; además 95 KB para renderizar a 110px de alto, y `alt` en español en un sitio en inglés | NECESARIO (renombrar el archivo requiere 301 en `vercel.json` en el mismo commit, regla dura del proyecto) | `src/components/layout/Footer.astro:161` |
| R8-B7 | 23 covers de blog siguen en PNG, no WebP; los 3 más pesados (1.18 MB combinados) están en el home. El del post del 09-11 (`how-to-choose-blockchain-development-company/cover.png`) se agregó después del pase de compresión, sin seguir la convención WebP | NECESARIO (proceso editorial, no solo estos 3 archivos) | `public/images/content/*/cover.png` |
| R8-B8 | `/agentic-ai-development` sigue siendo la única página (de 52 nodos `Service`/`CreativeWork`) con `Service.provider` recortado a 2 campos en vez del objeto `Organization` completo, resto del fix de la Ronda 4 (hallazgo M7) que no llegó acá | NECESARIO | `src/pages/agentic-ai-development.astro:40` |
| R8-B9 | Inconsistencia de nombre en el mismo nodo de breadcrumb: "Space in the Media" (20 páginas) vs "Spacedev in the Media" (el índice) vs "SpaceDev in the Media" (el H1 real) | NECESARIO (fix mecánico) | `src/pages/spacedev-in-the-media/[slug].astro:88` |
| R8-B10 | Las 20 páginas de `/spacedev-in-the-media/` tienen `og:image` y `og:type` genéricos aunque su `Article` JSON-LD sí trae la imagen real y correcta | NECESARIO | `src/pages/spacedev-in-the-media/[slug].astro:85-90` |
| R8-B11 | Home envía 16 SVGs del marquee de clientes con `loading="eager"`, compitiendo con el LCP del hero | OPCIONAL | `src/pages/index.astro` |
| R8-B12 | Insignias de autoridad (Forbes Technology Council, AWS) existen solo como imagen con `alt`, sin frase en texto plano en la página | OPCIONAL | `src/pages/index.astro` |
| R8-B13 | Citas sin fuente en blog posts: subió de 8 a 9 (se suma `stablecoin-integration.md`, ver R8-A5). Lista completa: `blockchain-ai-convergence-a-powerful-synergy.md`, `enterprise-blockchain-solutions-roi-use-cases-types.md`, `how-to-hire-remote-software-developers-...md`, `the-future-of-ai-agents-in-business-...md`, `understanding-and-deploying-ai-agents.md`, `changing-the-lens-on-the-future-of-crypto-...md`, `what-are-blockchain-protocols-...md`, `u-s-banks-enter-the-crypto-arena-...md`, `stablecoin-integration.md` | NECESARIO, sin urgencia, priorización gradual (mismo criterio de rondas anteriores) | `src/content/blog/*.md` |

---

## Reconfirmado sin cambios esta ronda (no repetir la investigación)

- **Google Gemini (39/100):** colisión de entidad en Wikipedia/Wikidata sigue exactamente igual. Búsqueda directa en Wikidata: "SpaceDev" solo resuelve a la empresa aeroespacial disuelta, una categoría de aeronaves y un estudio de videojuegos ucraniano. No existe entidad propia. Causa raíz sigue fuera del repo.
- **Colisión de LinkedIn con SAIC:** sin cambios, `linkedin.com/company/spacedev` (sin "-uy"/"-io") sigue perteneciendo a SAIC. No accionable.
- **FAQ de Blockchain Partner:** decisión definitiva del cliente de rondas anteriores, sigue cerrada, no se agrega.
- **13 em dashes en `whatsapp-privacy.astro`:** decisión explícita del cliente de no tocarlo, sigue igual (página `noindex`).
- **Calendario de eventos de Ethereum 2024:** decisión explícita de dejarlo como está.
- **Post `hypothetical-sprint-cutting-exchange-latency-by-40-in-7-days` sin aclaración de escenario ilustrativo:** decisión explícita de no tocarlo por ahora, sigue igual.
- **Cifras de PiggyGPT y autorización de métricas de Ulta Beauty/Prose en `agenticAiData`:** sin cambios, siguen pendientes de confirmar con los clientes correspondientes.
- **Anécdota del Picasso duplicada en dos press items** (`src/data/media-items.ts:368` y `:422`): sin cambios.

## Confirmado sin problema esta ronda

- **IndexNow funcionando de verdad:** confirmado en los logs de los últimos 3 deploys de producción, 156 URLs enviadas, HTTP 200 cada vez. El 404 de `/.well-known/indexnow-key.txt` no importa, la clave real vive en otra ruta y el protocolo la referencia explícitamente.
- **PR #128 (46 redirects) sin ningún schema apuntando a una URL muerta:** de las 286 URLs distintas que aparecen dentro de algún JSON-LD del sitio, las 245 internas dan 200, cero 301, cero 404.
- **Remoción de GTM/HotJar (PR #130) sin daño colateral:** cero rastro de GTM o HotJar en el HTML servido, JSON-LD sigue emitiéndose antes que cualquier script de medición, acceso de los 7 bots de IA verificado sin cambios.
- **`og-default-v2.png`:** el archivo da 404 pero nunca llegó a estar referenciado en producción (se agregó y se borró dentro del mismo branch antes de mergear). No requiere redirect.
- **Los 2 posts nuevos, schema completo y sin em dashes:** `BlogPosting` + `FAQPage` + `speakable` con selectores que existen de verdad en el HTML renderizado, cero em dashes contados con script en los 68 posts del blog (no solo los 2 nuevos).
- **Cero `FAQPage` duplicado en todo el sitio** (36 páginas, 36 instancias, ninguna repetida). El refactor de `agentic-ai-development.astro` a `services.ts` no reintrodujo el bug de la Ronda 4.
- **Conteo de case studies sincronizado:** 24 en contenido, 24 en `case-studies.ts`, 24 en `llms.txt`.
- **`robots.txt`:** los 7 bots (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot) siguen con `Allow: /` explícito, verificado con test de user-agent real, no solo lectura del archivo.

---

## Historial de auditorías anteriores (Rondas 1-7)

La primera versión de esta Ronda 7 (misma fecha, más temprano) comparaba contra un baseline equivocado: 73/100 ("Ronda 4", 2026-08-18). Ese número estaba desactualizado — existe una segunda línea de auditoría, más granular, que este mismo equipo mantiene en paralelo en `~/.geo-prospects/` (la fuente que alimenta el dashboard interno de marketing, repo `dashboard-marketing`), donde ya se había medido y cerrado un **76/100 el 2026-08-20**, reflejando el trabajo real de la Ronda 6 sobre las 179 páginas del sitio. Este documento nunca se actualizó a ese 76 porque el archivo se pisó accidentalmente ese mismo día (ver "NOTA DE RECUPERACIÓN" más abajo) y la reconstrucción posterior solo repuso el texto de la Ronda 4, no el número correcto de la Ronda 6.

Resultado: la primera versión de esta Ronda 7 comparaba el trabajo de hoy contra 73 en vez de 76, y llegaba a un **79/100 inflado** (atribuía a "hoy" ganancias que ya se habían medido y contado el 08-20). Corregido acá: el baseline real es **76/100 (2026-08-20)**, y el score de hoy, medido desde ahí, es **78/100**. Esta cifra es la que coincide con `~/.geo-prospects/audits/spacedev.io-2026-09-02.json` y con lo que va a quedar sincronizado en el dashboard de marketing — es la que vale, no el 79 que aparecía acá antes.

---

## RONDA 7 (2026-09-02) — resumen ejecutivo actual

**Metodología de esta ronda, explícita:** las 66 piezas de blog, 24 case studies y 56+ páginas del sitio ya se auditaron al 100%, contenido por contenido, en la auditoría escalonada del 2026-08-19 (Fases 0-4, ver más abajo) y esa lista de hallazgos se cerró en más de un 90% en la Ronda 6, confirmado el 2026-08-20 en `~/.geo-prospects/audits/spacedev.io-2026-08-20.json` con un score de 76/100. Esta ronda hizo tres cosas distintas sobre ese baseline real, cada una con evidencia real:

1. **Verificó con `git diff`, `grep` y fetch en vivo a producción** cuáles de los hallazgos marcados "pendiente" el 08-20 están realmente resueltos hoy (no solo "se hizo un commit", sino que el contenido en el repo y en `https://spacedev.io` en vivo lo confirma).
2. **Auditó a fondo, ítem por ítem, todo el contenido publicado después del cierre de la Ronda 6** (2026-08-20): 2 posts de blog nuevos, 1 case study nueva, 2 páginas legales nuevas, una reorganización técnica de imágenes que toca las 66 piezas de blog, y un refactor de código de una página de servicio. Nada de esto existía cuando se midió el 76, así que es 100% cobertura nueva, no repetición.
3. **Sección nueva, pedida explícitamente:** opinión GEO sobre el listing nuevo de SpaceDev en AWS Marketplace, más su implementación completa (PR [#125](https://github.com/SpaceUY/web-space-2026/pull/125), mergeado).

### Overall GEO Score: 78/100 (Good) — sube desde 76/100 (2026-08-20)

| Categoría | Score 08-20 | Score hoy (09-02) | Por qué cambió |
|---|---|---|---|
| AI Citability | 74/100 | **76/100** | Confirmado mergeado el trabajo que el 08-20 había dejado pendiente sin pushear (segundo "AuraGold", ~15 em dashes adicionales). Los 2 posts nuevos (Decentralized Identity, Blockchain for Banks) son el mejor nivel de citabilidad del sitio: cifras fechadas con fuente, FAQs, takeaways, terminología exacta. |
| Brand Authority | 66/100 | **72/100** (el mayor salto) | El badge "AWS Partner" del home apuntaba al directorio genérico de AWS, corregido para apuntar al perfil real de SpaceDev (verificado con navegador). Badge nuevo de AWS Marketplace agregado y conectado en `sameAs`/`llms.txt`/blog post, incluyendo el dato antes indocumentado de "Authorized Commercial Reseller". `github.com/SpaceUY`, pendiente el 08-20, confirmado ya agregado a `sameAs`. |
| Content E-E-A-T | 68/100 | **72/100** | Dos correcciones factuales con fuente externa verificada: metodologías Verra VM0015/VM0042 mal mapeadas (corregido contra los PDFs oficiales de Verra), y competidor no verificable "Universal" en el case study de Byrrgis reemplazado por dos competidores reales confirmados (GMGN.ai, Padre.gg). |
| Technical GEO | 95/100 | **95/100** | Sin cambios — ningún trabajo de esta ronda tocó crawlers, SSR, ni velocidad. La reorganización de imágenes de portada del blog (66 posts) se verificó completa igual: **0 rutas rotas**. |
| Schema & Structured Data | 97/100 | **97/100** | Sin cambios por regla de anclaje: `sameAs` ganó 2 entradas más, pero no es un tipo de schema nuevo y el score ya estaba cerca del techo. |
| Platform Optimization | 67/100 | **67/100** | Sin trabajo específico de plataforma esta ronda — el trabajo de AWS pesa en Brand Authority, no acá. |
| **Overall GEO Score** | **76/100** | **78.45 → 78/100** | |

**Rating: Good (75-89).** Se mantiene por encima del umbral de 75 alcanzado el 08-20, con una ganancia real y acotada de +2 (no +5 como decía la versión anterior de esta sección, que comparaba contra el baseline equivocado).

---

## Hallazgos nuevos — Ronda 7

Todo lo que sigue es contenido publicado **después** del cierre de la Ronda 6 (2026-08-20) y por lo tanto nunca auditado antes. Confirmado en vivo: los 5 ítems ya están en producción (`https://spacedev.io`, HTTP 200), no son trabajo pendiente de mergear.

### N1. `whatsapp-privacy.astro` tiene 13 em dashes reales en contenido legal en vivo — sigue sin resolver, decisión explícita del cliente

**Estado actual:** `src/pages/legal/whatsapp-privacy.astro` (líneas 54, 55, 80, 88, 90, 94, 96, 140, 141, 142, 164, 165, 183 — 13 ocurrencias, una por línea, contado con precisión vía script) usa em dash (—) real en listas y encabezados, en vez de dos puntos o coma. Es contenido nuevo (feature `feat/whatsapp-privacy-policy`, PR [#123](https://github.com/SpaceUY/web-space-2026/pull/123)), agregado después de que la Ronda 6 barriera el resto del repo por em dashes.

**Por qué importa:** es la regla de estilo del proyecto (sin excepciones), y el barrido de la Ronda 6 (`f70a64c`, `3005003`) demuestra que ya se tomó en serio en todo el repo salvo en este archivo, que se creó después. La página tiene `noindex={true}` así que el impacto en citabilidad de IA es bajo (no es contenido que un motor de búsqueda vaya a indexar ni citar), pero sigue siendo una violación real de la regla del proyecto en contenido público y en vivo.

**Veredicto: NECESARIO** (fix mecánico, bajo riesgo, consistente con el estándar ya aplicado en el resto del repo).

**Archivo:** `src/pages/legal/whatsapp-privacy.astro` (líneas 54-165). `whatsapp-terms.astro` se revisó también: sin em dashes.

### N2. Confirmado sin problemas — contenido nuevo bien construido

- **`decentralized-identity.md`** (post nuevo, 2026-09-01): FAQs (5), takeaways (5), fuentes fechadas con link real (eIDAS 2.0, W3C DID/VC), enlaza tanto a la página de servicio (`/blockchain-development-services/decentralized-identity`) como a otro post relacionado (`/blog/blockchain-compliance-us`). Cero em dashes. Es, junto con `blockchain-for-banks.md`, el mejor ejemplo de citabilidad del sitio hasta ahora.
- **`blockchain-for-banks.md`** (post nuevo, 2026-08-26): mismo patrón, enlaza a `/blockchain-development-services/blockchain-for-banks` y a `/contact`. Cero em dashes.
- **`collector-crypt.md`** (case study nueva): checklist de `CLAUDE.md` cumplido — hero + 4 imágenes de gallery reales, `src/data/case-studies.ts` sincronizado (highlight "$1.6B+ volume", servicios correctos), `llms.txt` ya dice "24" (no 23) y `llms-full.txt` ya tiene su bullet con 2 cifras reales, agregada como `caseStudySlugs` en 2 páginas de servicio relacionadas (`blockchainData`, `smartContractData`). El checklist completo de 9 pasos de `CLAUDE.md` se siguió correctamente, primera vez que se ve una case study nueva sin ningún paso salteado.
- **Reorganización de imágenes de portada del blog** (66 posts, carpeta por post): verificado con script que lee las 66 piezas de frontmatter y confirma que el archivo de portada existe en disco — **0 rutas rotas de 66**. Es el tipo de refactor técnico que más riesgo de regresión silenciosa tiene (imágenes rotas no siempre se notan a simple vista) y salió limpio.
- **Refactor de `agentic-ai-development.astro`** (contenido movido a `services.ts`): el código incluye un comentario explícito dejando constancia de que el `FAQPage` JSON-LD no se duplica porque el componente `<FAQ>` ya lo emite, evitando exactamente el tipo de bug de schema duplicado que rondas anteriores tuvieron que corregir en otra página. Buena señal de que la lección de rondas previas quedó instalada en el equipo.
- **`whatsapp-privacy.astro` / `whatsapp-terms.astro`**: `noindex={true}` correcto, no enlazadas desde header/footer (páginas legales de soporte al review de Meta, no contenido de marketing) — decisión técnica correcta, sin acción.

### N3. Reconfirmado en vivo hoy: ítems que rondas anteriores dejaron "pendiente de verificar" y ya están resueltos

- **Bug de caché de Vercel en Product Discovery** (Fase 0, ítem #2, necesitaba que Fede forzara un redeploy): verificado en vivo hoy, `https://spacedev.io/product-discovery` ya muestra su sección de FAQ. `age` del header de caché es de ~10.5 horas, consistente con que ya se refrescó. **Cerrado.**
- **`category` desincronizada en 3 case studies** (mostaza, piggygpt, iaffirm — Fase 2): confirmado en `src/data/case-studies.ts` líneas 17, 33, 199 — las 3 ya están corregidas (`mostaza`→Web3, `piggygpt`→Web3, `iaffirm`→Web2, coincidiendo con el `.md` real de cada una). **Cerrado.**
- **Link roto de Real Estate a `/coming-soon`** (Fase 3): ya no existe ninguna referencia a `/coming-soon` en `services.ts`. **Cerrado.**
- **Duración de consulta gratuita inconsistente** (Fase 4: "30-minute" en contact.astro vs "45-minute" en faqs.astro): ambas dicen "30-minute" hoy. **Cerrado.**
- **Bug del `/gone` en el sitemap** (Fase 0): confirmado en `astro.config.mjs`, `/gone` está en la lista de exclusión del sitemap. **Cerrado.**

### N4. Resuelto o cerrado esta ronda, actualizado desde la Ronda 6

- **Nombre de competidor de Byrrgis:** resuelto. "Universal" (no verificable en ninguna fuente) reemplazado por GMGN.ai y Padre.gg, ambos confirmados reales en múltiples búsquedas independientes específicas a la categoría de producto de Byrrgis (terminal de trading no-custodial cross-chain). Ver `src/content/case-studies/byrrgis.md`.
- **Mapeo de metodologías Verra:** resuelto. VM0015/VM0042 estaban mal mapeadas ("improved forest management"/"renewable energy"); corregido contra los documentos oficiales de Verra (VM0015 = avoided unplanned deforestation, VM0042 = improved agricultural land management). Ver `src/data/services.ts:1242`.
- **FAQ de Blockchain Partner:** cerrado, no en pausa. El cliente decidió explícitamente no avanzarlo. Ya no es un hallazgo accionable.

**Sigue sin cambios, no se repite en detalle:** cifras de PiggyGPT a verificar con el cliente, autorización de publicar métricas de Ulta Beauty/Prose (siguen presentes en `agenticAiData`, sin cambios), anécdota del Picasso duplicada en dos press items, M3 (cobertura de `faqs:` en blog: subió de 4 a 6 posts de 66, sigue siendo expansión gradual, no urgente). **Nuevo, no discutido antes:** Real Estate Tokenization sigue sin FAQ y, a diferencia de Blockchain Partner, sigue siendo un hallazgo abierto real (nadie tomó una decisión sobre esta página todavía).

---

## Opinión GEO: el nuevo listing en AWS Marketplace

El cliente preguntó específicamente por esto: [SpaceDev Software Development & Cloud Professional Services](https://aws.amazon.com/marketplace/pp/prodview-tkuck454u2bxa), confirmado real y en vivo hoy (categorías: Implementation, Managed Services, Assessments; seller ID `seller-bjuw6u7dvqrau`; pricing a medida, sin tiers públicos; sin reviews todavía).

### Por qué SÍ es un activo GEO real (no solo un canal de ventas)

AWS Marketplace no es un directorio más: es contenido publicado por AWS sobre un tercero, alojado en el dominio de mayor autoridad posible (`amazon.com`), con su propia categorización estructurada (Implementation / Managed Services / Assessments) que un sistema de IA puede leer como una clasificación de negocio verificada de forma independiente, no auto-declarada por SpaceDev. Es exactamente el tipo de señal de "Brand Authority" que esta auditoría viene pidiendo desde la Ronda 1 (third-party corroboration, no solo el propio sitio hablando de sí mismo) — mismo principio que ya se aplicó, correctamente, al no auto-declarar un `aggregateRating` propio y en cambio linkear a Clutch.

### El hallazgo concreto: hoy está desconectado del resto del sitio (con una corrección importante hecha al revisar esto con el cliente)

Verificado en vivo: la home (`index.astro:441`) ya tiene un badge "AWS Partner" con el logo oficial, pero apunta a `https://partners.amazonaws.com/` — el directorio genérico de partners de AWS, no a un perfil específico de SpaceDev. Es la misma clase de hallazgo que la auditoría escalonada (Fase 4, "Bajo") ya había marcado como "badges de AWS/Forbes enlazando a páginas genéricas".

**Corrección respecto a la primera versión de esta sección:** la recomendación original de simplemente reemplazar ese `href` por el link del listing de Marketplace era imprecisa. Son dos programas distintos de AWS que prueban cosas distintas — y verificado en vivo (navegador real, `partners.amazonaws.com/search/partners/?keyword=spacedev`), **el destino correcto no es ninguno de los dos que se habían considerado, es un tercero que confirma que sí existe:**

- **AWS Partner Network (lo que dice el badge "AWS Partner")**: SpaceDev **sí tiene perfil propio**, confirmado en vivo hoy: **`https://partners.amazonaws.com/partners/0010h00001kLtZRAA0/SpaceDev`**. Muestra "Select Tier Services" + "Authorized Commercial Reseller" como programas de partner, 5+ certificaciones AWS, descripción propia y botón de contacto. Es una página específica de SpaceDev, alojada por AWS, exactamente lo que el badge "AWS Partner" debería probar.
- **AWS Marketplace listing**: sigue siendo un programa distinto (vendedor de servicios profesionales dentro de Marketplace), prueba una relación real con AWS pero no el partner tier. No debe usarse como destino del badge "AWS Partner".

### Recomendaciones concretas, finales — ✅ IMPLEMENTADO (PR [#125](https://github.com/SpaceUY/web-space-2026/pull/125), mergeado 2026-09-02)

1. **Cambiar el `href` del badge "AWS Partner" del home** (`src/pages/index.astro:441`) de `https://partners.amazonaws.com/` a `https://partners.amazonaws.com/partners/0010h00001kLtZRAA0/SpaceDev`. ✅ Hecho.
2. **Badge nuevo de AWS Marketplace agregado al home** (junto al de AWS Partner, orden: AWS Marketplace → AWS Partner → resto de badges no-Clutch → todos los de Clutch al final, por pedido explícito del cliente sobre el orden). También sumado a `Organization.sameAs` en `src/lib/seo.ts` y a `llms.txt`. ✅ Hecho.
3. **`aws-select-partner.md` actualizado** con una sección nueva ("Where to find us on AWS") con ambos links y el dato de Authorized Commercial Reseller. ✅ Hecho.
4. **"Authorized Commercial Reseller" documentado** en `llms.txt`, `sameAs` y el blog post. ✅ Hecho — **pendiente de un solo punto:** confirmar con quien gestiona la cuenta de AWS Partner Central que esto describe algo que SpaceDev hace activamente hoy (dato tomado del perfil público de AWS, nunca antes documentado en el sitio; vale el ok final antes de que se note más).
5. Reviews reales en el listing de Marketplace: sigue en "Opcional", no hay ninguna todavía.

**Nota aparte, no relacionada con AWS:** el PNG del badge de Marketplace lo subió el cliente con un borde agregado a propósito (decisión de diseño suya, no tocar). El tamaño se ajustó por separado con CSS (`compact: true` en el array de badges de `index.astro`) para que no rompiera el grid en mobile, sin tocar la imagen.

---

## Historial de auditorías anteriores (Rondas 1-6)

Todo lo que sigue, desde "Antes de leer esto" hasta el final del documento, es el archivo completo de las rondas 1-6, sin modificar. Se conserva porque documenta qué se investigó y se descartó explícitamente (para no repetir esa investigación) y porque las Fases 0-4 (auditoría escalonada del 2026-08-19) siguen siendo la referencia de cobertura 100% página por página del sitio completo.

---

# GEO Audit Report: SpaceDev — Ronda 4 (histórico)

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

---

## NOTA DE RECUPERACIÓN (2026-08-19)

Un `git checkout main && git pull` corrido para preparar ramas nuevas pisó silenciosamente este archivo y lo devolvió a la versión del commit `aca154e` (la de arriba, Ronda 4). El archivo sigue trackeado en git pese al `.gitignore` porque el commit que lo destrackea (`0866f41`, rama `chore/remove-geo-audit-report-from-repo`) nunca se mergeó a `main` — falta cerrar ese PR. Se perdió el contenido que no estaba comiteado en ningún lado: la sección "Resumen de todo lo hecho el 2026-08-18" (reconstruida abajo de forma aproximada a partir del `git log`, no es el texto original palabra por palabra) y la sección "Fase 3: Datos reales de Search Console/Bing/GA4" (esta sí se restaura exacta, estaba visible en el historial de esta conversación). Todo el trabajo de la auditoría escalonada de Fases 0-4 del 2026-08-19 se reconstruye completo más abajo, palabra por palabra, porque estaba en el historial de tool calls de la conversación.

### Resumen de todo lo hecho el 2026-08-18 (reconstrucción aproximada vía `git log`, no el texto original)

**PRs mergeados ese día (5, todos en `main`):**
- [#108](https://github.com/SpaceUY/web-space-2026/pull/108) `fix/geo-audit-round-4-technical` — los hallazgos H1-H3/M1-M8 de la Ronda 4 de este mismo documento.
- [#109](https://github.com/SpaceUY/web-space-2026/pull/109) `content/new-blockchain-service-pages` — las 7 páginas nuevas de servicio (DAO Development, White Label Crypto Exchanges, Crypto Token Development, y los 4 de asset-tokenization además de Real Estate).
- [#110](https://github.com/SpaceUY/web-space-2026/pull/110) `fix/remove-view-project-cursor` — eliminación del cursor rotativo "VIEW PROJECT".
- [#111](https://github.com/SpaceUY/web-space-2026/pull/111) `fix/hero-title-sizing-inconsistency` — `compactHeroTitle` para títulos hero que se veían gigantes/cortados.
- [#112](https://github.com/SpaceUY/web-space-2026/pull/112) `content/product-discovery-partner-faq` — FAQ de Product Discovery con datos reales confirmados por el cliente.

---

## Fase 3 (histórico, 2026-08-18): Datos reales de Search Console, Bing Webmaster Tools y GA4

**Nota: esta sección es 100% interna, nunca se sube al repo (ver `.gitignore`).** Viene de exports y capturas reales que pasó el cliente el 2026-08-18, cubriendo la ventana previa al deploy de la ronda 4 (los 5 PRs se mergearon ese día a las 21:01-21:02 UTC). Todo lo que sigue está fechado antes de ese merge salvo donde se indica lo contrario, así que ninguna métrica de performance todavía refleja el trabajo de esta ronda.

### El hallazgo más importante: tráfico real y medible desde ChatGPT

GA4 (Traffic acquisition por Session source/medium, ventana de 28 días, 21 jul al 17 ago): **`chatgpt.com / ai-assistant` aparece como fuente real de tráfico**: 8 usuarios activos, 9 sesiones, 26s de engagement promedio, 45 eventos, **20 key events** (conversiones, según lo que esté configurado como key event en la propiedad). No es hipotético ni una proyección, es tráfico ya medido llegando desde ChatGPT con engagement real. `bing/organic` también aparece sólido (91 usuarios, 4.28% del total). No aparecen `perplexity.ai`, `gemini.google.com` ni `copilot.microsoft.com` en el top 10 de 51 fuentes totales, no se puede afirmar si están más abajo en la lista sin ver el resto.

**Veredicto: esto es la prueba más concreta de todo el trabajo de GEO hasta ahora.** No es una métrica de "citabilidad" estimada, es un usuario real que llegó desde ChatGPT y generó una conversión.

### Confirmado funcionando (sin acción)

- **IndexNow**: el export de Bing muestra el submit de hoy a las 14:05 PT (=21:05 UTC), 5 minutos después del merge de los 5 PRs (21:01-21:02 UTC). El pipeline automático funcionó exactamente como debía, incluyendo las 7 páginas nuevas de asset-tokenization/servicios.
- **Redirects de `/post/...`**: se verificaron 10 slugs al azar de la lista de "Crawled - currently not indexed" de GSC (78 de esos 88 son rutas `/post/`). Los 10 redirigen (308) correctamente a su equivalente real en `/blog/`, incluidos los que cambiaron de slug al migrar (ej. `/post/simply-put-what-are-memecoins` → `/blog/what-are-memecoins`, `/post/save-time-with-a-smart-contract-audit-checklist` → `/blog/smart-contract-audit-checklist`). El motivo por el que GSC los marca como "no indexados" es el esperado y correcto: una URL que redirige no debe indexarse ella misma, solo su destino. Esto es puro rezago de crawl del sitio viejo de Framer, no un bug.
- **Los "404" de GSC (52 URLs)**: son casi todas rutas legacy de Framer (`/post/...` con parámetros de paginación vieja, `/case-study-deprecated/...`, `/case-study-old/...`, `/blockchain-for-banks` y `/dapp-development` sin el prefijo nuevo, `/events-calendar-2026`). Se verificaron en vivo: todas redirigen (308) correctamente a su ruta actual, excepto `blog.spacedev.io` (un subdominio viejo sin DNS, no resuelve, es un tema de configuración de dominio fuera del alcance de este repo).
- **Canonical en conflicto (16 URLs)**: son en su mayoría variantes con trailing slash (`/blog/post-slug/` vs `/blog/post-slug`), el mismo tema de trailing-slash que ya se descartó explícitamente en una ronda anterior por impacto real cero.
- **`noindex` (17 URLs)**: todas correctas a propósito (`/coming-soon`, `/ui-kit`, tags de blog, páginas individuales de `/spacedev-in-the-media/*` que están noindexed mientras el índice sí se indexa). Sin acción.

### Hallazgo real y accionable: 34 páginas reales que Google nunca crawleó

El bucket "Discovered - currently not indexed" de GSC lista 34 URLs con `Last crawled: 1969-12-31`, es decir, **Google sabe que existen (probablemente por el sitemap) pero jamás las visitó**. A diferencia del bucket anterior, estas no son basura legacy: son contenido real y vigente, entre ellos varios posts de blog, `/agentic-ai-development`, `/our-work/genba`, `/our-work/nga`, dos páginas de industria, y dos entradas de `/spacedev-in-the-media/`.

**Por qué importa:** IndexNow (que sí está funcionando) solo empuja a Bing/Yandex/Seznam/Naver, Google no participa del protocolo. Para Google, la única palanca real es pedir indexación manual desde Search Console o mejorar el enlazado interno hacia esas páginas.

**Veredicto: NECESARIO, pero es una acción manual en Search Console, no un fix de código.** Recomendación: usar "Request Indexing" en la herramienta de inspección de URLs de GSC para estas 34, priorizando `/agentic-ai-development` y las 2 case studies (`genba`, `nga`) por ser páginas de mayor intención comercial. GSC limita las solicitudes manuales a un puñado por día, así que conviene repartirlo en varios días.

### Contexto adicional (informativo, sin acción)

- **Bing Keyword Report**: "space dev" tiene 78 impresiones, 8 clicks, posición promedio 2.85, señal de marca sana. Aparece también "space dev inc" (7 impresiones, posición 3) y "w3e" (15 impresiones, posición 9), consistente con el riesgo de confusión de marca con la empresa aeroespacial ya mitigado con `disambiguatingDescription` en rondas anteriores, no amerita acción nueva.
- **Indexación general**: 118 de 425 páginas "conocidas" por GSC están indexadas. El número de 425 incluye ~156 URLs que correctamente NO deberían indexarse (redirects, 404 legacy, noindex intencional), así que la base real comparable es más chica que 425. Igual, con las 34 nunca crawleadas sumadas al resto, hay margen de mejora real en indexación, que la recomendación de arriba (Request Indexing) ataca directamente.

---

## AUDITORÍA ESCALONADA COMPLETA (iniciada 2026-08-19)

Metodología distinta a las rondas 1-5: en vez de 5 agentes por dimensión muestreando todo el sitio repetidamente, esta vez el sitio se dividió en fases por tipo de página, cada fase se cierra una sola vez y no se vuelve a tocar. Inventario real (corrigiendo el conteo anterior de 152, que era solo lo que trae el sitemap): **179 páginas/endpoints** = 152 del sitemap + 404/coming-soon/ui-kit/terms-and-conditions/privacy-policy/industry-redirect-stub (6) + 19 páginas de `/blog/tag/*` + `/rss.xml` + `agentic-ai-development.astro` (encontrada durante la Fase 3, se había escapado del inventario inicial). Cada lote de auditoría recibió la lista exacta de archivos a leer (no "muestreá el blog"), con instrucción explícita de leer cada uno completo y confirmar la lista al final, justamente para eliminar el patrón de "esto no lo vi" de rondas anteriores.

### Fase 0: Infraestructura y marca — CERRADA

1. **Bug confirmado, fix trivial:** `/gone` (página 410 de contenido eliminado permanentemente) no está en la lista de exclusión del sitemap en `astro.config.mjs` (le faltó agregarla junto a `/404`, `/coming-soon`, etc.) y aparece en el sitemap en vivo (`sitemap-0.xml`), verificado con curl. Necesidad: sí, es contradictorio tener una página noindex/410 listada en el sitemap.
2. **Bug de producción activo, no de código:** verifiqué línea por línea que `productDiscoveryData.faqs` está bien poblado y que `ServicePageLayout.astro` lo renderiza correctamente si `faqs.length > 0`. El código está bien. Pero en vivo, `https://spacedev.io/product-discovery` sigue sin mostrar ese FAQ, con `x-vercel-cache: HIT` y `age: 61371s` (~17 horas). Esto necesita que Fede entre al dashboard de Vercel y fuerce un redeploy/purge; no hay nada más para arreglar en el repo.
3. **Inconsistencia real:** `llms-full.txt` afirma que Staff Augmentation cobra "$60-120/hr", pero ese dato no aparece en ningún lado de `/staff-augmentation`. Necesita decisión: ¿se agrega la cifra a la página real, o se saca de llms-full.txt?
4. **Confirmado que NO es un problema** (no repetir como hallazgo): IndexNow implementado y funcionando; desambiguación de marca vs. el SpaceDev aeroespacial ya tiene `disambiguatingDescription`; Clutch tiene 52 reviews (todas 5 estrellas) verificado en vivo hoy, consistente con el "50+" del sitio; `/blog/tag/[tag].astro` está correctamente `noindex` a propósito.

### Fase 1: Blog — CERRADA, cobertura 100% verificada

Los 64 posts se leyeron completos en 4 lotes de 16 archivos exactos (confirmado por lista nominal). Vocabulario de tags real confirmado en 18 (no 20). **Resultado transversal positivo:** 0 violaciones de tags, 0 enlaces internos rotos, solo 1 em dash real en las 64 piezas.

#### Críticos
- **`wallet-connections.md:51`** — em dash real en celda de tabla. Única violación de em dash en el blog.
- **`hypothetical-sprint-cutting-exchange-latency-by-40-in-7-days.md`** — sigue sin la aclaración de escenario hipotético; el cuerpo solo desarrolla Day 1-3 de un post titulado "7 Days"; `readTime: 11` no corresponde a las 537 palabras reales.
- **`ethereum-calendar-for-the-rest-of-2024.md`** — 100% eventos ya pasados, sin nota de archivo ni `updatedAt`.

#### Altos
- **Patrón sistémico de `readTime` mal calculado**, confirmado en 9 posts: `aws-select-partner.md` (4→~2), `meta-bets-big-on-superintelligence...md` (4→~2), `wallet-connections.md` (3→~9), `web2-to-web3-fintech.md` (12→~3), `web3-marketing-strategies.md` (6→~1-2), `what-are-memecoins.md` (8→~2), `smart-contract-audit-checklist.md` (8→~2, el peor), `the-future-of-ai-agents-in-business-why-40-projects-will-fail-by-2027.md` (11→~3), `the-new-era-of-blockchain-and-web3-in-2025.md` (9→~4).
- **Contradicción factual entre dos posts propios, mismo autor:** costo de auditoría "$25,000-$150,000" (`smart-contract-security-...md:164`) vs "$15,000-$80,000" (`the-role-of-smart-contracts-in-defi.md:65`).
- **Conflicto de interés no declarado:** `a-quick-guide-to-crypto-apps-exchanges-january-2024-edition.md:36-38` recomienda NDAX sin aclarar que es cliente real (`/our-work/ndax-canada`).
- **Cliente real mencionado sin atribución:** `real-world-assets-rwas-explained.md:60` nombra "AuraGold" (debería ser "Aura", `/our-work/aura`).
- **Contenido especulativo sin aclarar:** `the-2025-ai-playbook-roadmap-to-scale-your-startup-with-artificial-intelligence.md`, 6 "casos" con empresas anónimas y cifras precisas.
- **Errores factuales verificables:** "Viper"→"Vyper" (`how-hard-is-it-to-become-a-blockchain-developer.md:28`); CodiumAI ya era Qodo antes de publicar (`build-your-dream-team-top-ai-tools-for-2025-success.md:35,73`); RainbowKit "en etapas iniciales" cuando hoy es maduro (`wallet-connections.md:110`); "the platform shuts down fully in July 2026" en futuro cuando ya pasó (`smart-contract-security-...md:143`); "95% de exchanges..." sin fuente ni sentido (`white-label-crypto-exchange-solutions.md:20`).
- **Citas de fuentes nombradas sin link:** Gartner (`the-future-of-ai-agents-in-business...md:20`), Zuckerberg (`meta-bets-big-on-superintelligence...md:30`), WEF (`understanding-and-deploying-ai-agents.md:90`), OCC (`u-s-banks-enter-the-crypto-arena...md:20`), Stack Overflow/GitHub Octoverse/McKinsey (`how-to-hire-remote-software-developers...md:34,36,38`).
- **FAQ en el cuerpo sin poblar el campo `faqs`:** `the-future-of-ai-agents-in-business-why-40-projects-will-fail-by-2027.md`, `the-new-era-of-blockchain-and-web3-in-2025.md`, `what-web3-protocols-need-in-2025.md`, `zero-knowledge-rollups-for-rwas-architecture-costs-pitfalls.md`.

#### Medios
Contenido vencido sin `updatedAt`: `top-ai-powered-tools-for-nft-creation.md`, `the-top-5-web3-marketing-agencies-for-your-web3-business.md` ("for 2024", 0 enlaces a las 5 agencias), `white-label-crypto-exchange-solutions.md` (TPS de 2023), `quick-guide-the-best-crypto-staking-platforms.md`, `from-web3-to-web5...md`. Inconsistencia 2025/2026: `what-is-layer-1-blockchain.md`, `what-web3-protocols-need-in-2025.md`. Contradicción interna en tabla: `quick-guide-the-best-crypto-staking-platforms.md:53` (Aave "high" y "modest" yields en la misma fila). Covers duplicados: `a-quick-guide-to-crypto-apps-exchanges-january-2024-edition.md` y `changing-the-lens-on-the-future-of-crypto-latams-promising-future.md`. Falta de internal linking: `blockchain-trends-2026.md`, `optimize-your-sales-with-a-multi-agent-ai-system.md`, `the-2025-ai-playbook...md`, `the-top-5-web3-marketing-agencies...md`.

#### Bajos
`metadescription`/`metatitle` faltante en varios; cover vacío en `the-new-era-of-blockchain-and-web3-in-2025.md`; encabezados en **negrita** en vez de H3 en ese mismo post; "References" sin hyperlinks en `wallet-connections.md`; frase de riesgo legal/compliance en `bitcoin-the-almost-millionaires-of-starcraft.md:34`.

#### Confirmado sin problemas
`bitcoin-101-basic-concepts-everyone-must-know.md`, `blockchain-compliance-us.md`, `blockchain-in-energy-real-use-cases-vs-hype.md`, `blockchain-supply-chain-traceability.md`, `how-real-world-assets-are-reshaping-decentralized-finance.md`, `how-to-launch-an-rwa-protocol.md`, `decentralized-oracles.md`, `depin-and-decentralized-ai-how-physical-infrastructure-is-being-put-on-chain.md`, `tokenized-bonds.md`. Reconfirmado (no repetir): `ripple-drops-200m...md` ya corregido (falta `updatedAt`); `web3-marketing-strategies.md` y `what-are-memecoins.md` siguen sin afirmaciones citables, correcto; `the-top-5-web3-marketing-agencies...md` NO tiene la inconsistencia de reviews de Clutch que se sospechaba.

### Fase 2: Case studies (23) — CERRADA, cobertura 100% verificada

Cruce extra: cada `.md` completo contra el resumen corto en `src/data/case-studies.ts` (alimenta `/our-work`).

#### HALLAZGO TRANSVERSAL CRÍTICO: `src/data/case-studies.ts` no coincide con el `.md` real en 11 de 23 case studies

**Mecanismo real confirmado en Fase 4:** el filtro de `/our-work` es por industria (`DeFi & Crypto`, `NFT & Gaming`, `SaaS & Products`, `AI & Data`, `Enterprise`) usando el campo `industry`, no `category`. Las 23 case studies tienen `industry` definido, así que las 3 categorías contradictorias (iaffirm, mostaza, piggygpt) NO afectan el filtro. Sí afectan el badge visible WEB2/WEB3 de `CaseStudyCard.astro:51`, que queda contradicho por el `.md` real. Fix: `category` en `case-studies.ts:141` (mostaza→"Web3"), `:158` (piggygpt→"Web3"), `:190` (iaffirm→"Web2").

- **`genba.md`** (Web2, automatización robótica) vs. `case-studies.ts:180-186` ("on-chain manufacturing transparency", `["Blockchain","Smart Contracts","Backend"]`).
- **`iaffirm.md`** (Web2, bienestar mental con IA) vs. `case-studies.ts:189-193` (`"Web3"`, "Verified credentials on-chain.").
- **`mostaza.md`** (Web3, wallet cripto, "entró en desarrollo activo", no lanzado) vs. `case-studies.ts:141-145` (`"Web2"`, highlight **"1M+ customers"** sin respaldo, contradicho por el .md).
- **`piggygpt.md`** (Web3, trading DeFi) vs. `case-studies.ts:157-161` (`"Web2"`, "AI-powered personal finance assistant").
- **`acme.md`**, **`athleteai.md`**: producto descrito distinto entre `.md` y `case-studies.ts` (loyalty points/highlights deportivos vs. wallets empresariales/"AI coaching").
- **`nga.md`** (EdTech life-coaching) vs. `case-studies.ts:213-217` ("Next-gen analytics for trading desks.").
- **`twispi.md`** (fintech/HR México) vs. `case-studies.ts:133-137` ("Subscription commerce for creators.").
- **`ubicuity.md`** (`Web3` en el .md sin mención de blockchain/IoT en el cuerpo) vs. `case-studies.ts:117-121` ("Smart asset management with IoT + blockchain.").
- **`w3e.md`** (Gaming Launchpad IDO/INO, internamente coherente) vs. `case-studies.ts:205-209` ("Web3 education platform.").
- **`glowy-music.md`** (Web2, descubrimiento musical) vs. tag "NFT & Gaming" en `case-studies.ts`.
- **`ndax-canada.md`**: `services` en `case-studies.ts:79` no coincide con el `.md:26` (severidad baja-media).

Confirmado bien sincronizado: `zenda.md`, `apebond.md`, `aura.md`, `bondi-finance.md`, `fightfi.md`.

#### Otro hallazgo crítico: contradicción factual real entre dos páginas publicadas
**`ndax-canada.md`** (líneas 17,33,70,74,84) dice "Angular 8"; **`how-we-built-ndax.md:22`** dice "Angular 6" para el mismo cliente. Confirmar con el equipo técnico cuál es real.

#### Cifras a verificar con el cliente
- **`piggygpt.md:37,66`**: "5,000 USDC" entre "10,000+ participants" (~$0.50/usuario, sospechoso).
- **`piggygpt.md:32,60`**: "EVM ecosystem" pero lista Jupiter (nativo de Solana, no EVM).
- **`byrrgis.md:76`**: nombra "Universal" como competidor, no confirmado externamente (podría confundirse con "Universal Accounts" de Particle Network, que Byrrgis usa como tecnología, no competidor).
- **`byrrgis.md:62`**: cita atribuida a "Monzoor Ullah, COO"; actividad pública encontrada usa "Manzoor Ullah".
- **`blockus.md`**: highlight `"< 1wk studio onboarding"` en `case-studies.ts:86` sin respaldo textual en el `.md`.

#### Fechas `publishedAt` sospechosamente idénticas
**20 de 23 case studies comparten exactamente `publishedAt: 2025-02-15`.** Excepciones: `aura.md` (2025-05-01), `byrrgis.md` (2025-08-01), `zenda.md` (2025-04-01) — no por casualidad, los proyectos con contenido más reciente. Confirma que es fecha de migración, no de publicación real. Necesidad: evaluar si vale poner la fecha real de cierre de cada proyecto.

#### Menores
`iaffirm.md:9`: `duration: "TBD"` visible en producción. `blockchain-for-energy.md`/`drata.md`: `industry` no coincide con `case-studies.ts` (categorización, no factual). `rarible.md`: variación de copy, no contradictoria.

#### Confirmado sin problemas
Cero em dashes reales en las 23 case studies. `apebond.md`, `bondi-finance.md`, `fightfi.md`, `aura.md`, `zenda.md` sin hallazgos de ningún tipo.

### Fase 3: Páginas de servicio/negocio (28) — CERRADA, cobertura 100% verificada

28 páginas (no 27, corregido), cruzando cada `.astro` contra su objeto en `src/data/services.ts` y contra `llms.txt`/`llms-full.txt`.

#### Crítico — confirmado de forma independiente por dos agentes
**`blockchain-development-services/index.astro:19`**: la tarjeta "Real Estate and PropTech" del hub apunta a `/coming-soon`, pero `industry/real-estate.astro` ya existe completa y `Header.astro:29` ya la enlaza correctamente. Fix de una línea en `services.ts` (`blockchainData`).

#### Falso positivo detectado y descartado (importante, para no repetirlo)
Un agente reportó "cero FAQPage JSON-LD en todo el sitio de servicios", culpando a `ServicePageLayout.astro`. **Es falso.** `src/components/ui/FAQ.astro` tiene `withJsonLd = true` por defecto y emite su propio `<script type="application/ld+json">` de forma independiente. Confirmado en vivo con curl (`"@type":"FAQPage"` presente en `/blockaudit-smart-contract-and-blockchain-security`). No hay acción pendiente.

#### Alto
- **Cifra de reviews inconsistente:** "40+" en `industry/healthcare.astro:32` y `industry/finance-and-fintech.astro:42`, "50+" en `white-label-crypto-exchanges.astro:56`. Ninguna coincide exactamente con `llms.txt` ni con las 52 verificadas en vivo.
- **`blockchain-partner.astro`**: `seo.title`/`description` (línea 94) posiciona la página como exclusivamente "White-Label", pero el body (línea 104-106) dice "White label or client-facing, it's your choice" y `engagementModels` incluye "Co-delivery"/"Specialist Augmentation".
- **`product-discovery.astro` vs. `llms-full.txt:36`**: llms-full.txt describe un sprint "Product Discovery & Vision Alignment" con "Epic User Stories"/"Product Backlog" que no existe entre los 6 paquetes reales de la página.
- **Dos páginas sin FAQs**, a diferencia de sus hermanas: `asset-tokenization/real-estate.astro` (`realEstateTokData`) y `blockchain-partner.astro` (`partnerData`).
- **3 em dashes en `blockchain-for-banks.astro`** (líneas 15, 123×2, 198). La línea 198 es casi idéntica a `dappData.whyUs` en `services.ts:221`, que ya usa dos puntos correctamente.
- **Em dash en `alt` indexado y en respuesta de FAQ:** `product-discovery.astro:105`, `services.ts:977` (`complianceWeb3Data`).

#### Medio
Grilla de `blockchain-development-services/index.astro` solo muestra 6 de 10 sub-servicios reales en el body-content. Ninguna de las 6 páginas de industria muestra un case study propio (oportunidad de E-E-A-T). Cifra de Treasuries tokenizados sin `updatedAt` en `stockTokenizationData`/`bondTokenizationData`. Mapeo de metodologías Verra (VM0007/VM0015/VM0042) en `carbonCreditTokenizationData` a verificar (confianza media, no confirmado). Afirmación sobre el CTO ("one of Uruguay's most influential voices") sin fuente en `finance-and-fintech.astro:42`.

#### Confirmado sin problemas
`blockaudit-smart-contract-and-blockchain-security.astro`, `asset-tokenization.astro`, `asset-tokenization/bonds.astro` (Siemens ya corregido), `asset-tokenization/gold.astro`, `asset-tokenization/stocks.astro`, `crypto-token-development.astro`, `dao-development.astro`, `dapp-development.astro`, `decentralized-identity.astro`, `industry/energy.astro`, `industry/finance-and-fintech/stablecoins.astro`, `industry/supply-chain-and-logistics.astro`, `layer-1-blockchain-development.astro`, `smart-contract-development.astro`, `white-label-crypto-exchanges.astro` (salvo cifra de reviews), `innovative-web-and-mobile-solutions.astro`, `staff-augmentation.astro`, `industry/index.astro` (redirect correcto).

#### Página que se había escapado del inventario: `agentic-ai-development.astro`
Landing de AI/LLM sin relación con blockchain, encontrada al armar la Fase 4 y auditada en el momento (sube el inventario real a 179). Schema `Service` correcto, FAQ con schema propio correcto (ver nota de falso positivo). **Punto a confirmar con el cliente, no un hallazgo de contenido:** cita resultados cuantificados de Ulta Beauty ("40% increase in in-store customer engagement", "1,300+ retail locations") y Prose ("73% faster time-to-insight", "60% reduction in manual analysis time"), marcas que no aparecen en ningún otro lugar del sitio ni tienen case study en `/our-work`. El git log muestra que se armó a propósito con "real case-study metrics" (commit `45d8a6f`, 2026-08-17) y los logos son archivos reales, así que todo indica datos reales del equipo. Se marca solo para confirmar autorización de publicar métricas atribuidas a una marca que cotiza en bolsa (Ulta Beauty), no como dato inventado. Sin em dash, sin enlaces rotos.

### Fase 4: Institucionales, autores, prensa/medios y utilitarias (39) — CERRADA, cobertura 100% verificada

Última fase. Inventario final: **179 páginas/endpoints**.

#### Crítico
- **Duración de consulta gratuita inconsistente:** `contact.astro:31` ("30-minute") vs `faqs.astro:10` ("45-minute").
- **13 em dashes en los 9 items de prensa de un lote** (`gx30-genexus-by-globant`, `cuti-business-forum`, `blockchain-summit-latam-2023`, `interview-with-federico-sendra-...`, `ethereum-argentina`, `spacedev-among-the-top-3-at-weavedb-hackathon-2023`, `it-builders`, `ethereum-uruguay-onboarding-month`, `interview-federico-sendra-ceo-spacedev-el-pais`), más 2 en `blockchain-summit-latam-2023-blockchain-crypto-holidays`.
- **Em dash en dos `<title>` reales:** `newsletter.astro:13`, `our-work.astro:42`.

#### Alto
- **Nombre de figura pública mal escrito, verificado externamente:** "Congressman Byron Donald" debería ser "Byron Donalds" (`media-items.ts`, item `bitcoin-energy-summit-miami-2024`).
- **Credencial de Federico Sendra sin respaldo:** "Stanford/ORT graduate" en `interview-with-federico-sendra-why-is-blockchain-technology-important-for-businesses`, no aparece en `authors.ts` ni `about-us.astro`.
- **Misma anécdota repetida en dos eventos de prensa**, detectado independientemente por dos agentes: `blockchain-summit-latam-2023` (Bogotá) y `blockchain-summit-latam-2023-blockchain-crypto-holidays` (Montevideo) cuentan la misma historia del Picasso de Sygnum Bank con los mismos 3 panelistas.
- Fix confirmado y listo: `category` en `case-studies.ts:141,158,190` (ver Fase 2).

#### Medio
Salto de heading H1→H3 en `about-us.astro` (antes de línea 174). `index.astro:506` usa `<h3>` donde el resto de la home usa `<h2>` (comparar `about-us.astro:409`). `digital-library.astro`: grid de 3 columnas con 1 solo item (ya NO es placeholder, corrigiendo la nota vieja del `CLAUDE.md`; lo mismo para `events-calendar.astro` y `newsletter.astro`). "Guilherme Stefanini, CEO of HAUS..." (`cuti-business-forum`) sin fuente verificable. Encuadre "Top 25" cuando el libro fuente no describe un ranking.

#### Bajo
Inconsistencia de heading (`<p>` vs `<h3>`) en `spacedev-in-the-media.astro`. Badges de AWS/Forbes enlazando a páginas genéricas.

#### Confirmado sin problemas
`careers.astro` (JobPosting con fechas vigentes), `author/[slug].astro` y los 3 autores reales (roles consistentes en todas las fuentes), `404.astro`/`coming-soon.astro` (noindex correcto), `ui-kit.astro` (noindex+nofollow explícito), `gone.astro` (reconfirmado), `privacy-policy.astro`/`terms-and-conditions.astro` (fecha abril 2026, datos consistentes). Datos de empresa (CEO/COO/CTO, 70+/200+/8 años/50+ reviews, 4 oficinas) consistentes en todo el lote salvo la consulta gratuita.

---

## CIERRE DE LA AUDITORÍA ESCALONADA (Fases 0-4)

**Cobertura: 179 de 179 páginas/endpoints reales del sitio, verificada explícitamente fase por fase, sin muestreo.** Cada lote confirmó por nombre la lista exacta de lo que leyó. Un falso positivo (FAQPage schema) fue detectado y descartado antes de quedar en el reporte final, y una página completa (`agentic-ai-development.astro`) que se había escapado del inventario inicial fue encontrada y auditada antes de cerrar.

Pendiente de decisión/implementación, priorizado: bug del `/gone` en el sitemap, bug de caché de Vercel en Product Discovery (necesita a Fede), duración de consulta gratuita inconsistente, ~15 em dashes reales, corrección de `category` en 3 case studies, link roto de Real Estate a `/coming-soon`, y las afirmaciones factuales a verificar (Byron Donalds, credencial de Federico, cifras de PiggyGPT, competidor de Byrrgis, metodologías Verra, autorización de Ulta Beauty/Prose, duplicación del Picasso).
