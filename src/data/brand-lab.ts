/**
 * Brand v2 lab inventory: every visual piece of the site, grouped by the
 * phase of the plan (.claude/drafts/plan-marca-v2.md) that covers it.
 *
 * Statuses are updated here as each piece is reviewed. /brand-lab renders
 * this list and also checks it against src/pages, so a static page that no
 * item mentions shows up there as "sin asignar" instead of being forgotten.
 */

export type BrandLabStatus = "pendiente" | "en-revision" | "con-cambios" | "aprobada" | "descartada";

export interface BrandLabItem {
  id: string;
  name: string;
  status: BrandLabStatus;
  /** Real routes where the piece can be seen (first one opens in the comparator). */
  routes: string[];
  note?: string;
}

export interface BrandLabGroup {
  id: string;
  phase: number;
  title: string;
  description: string;
  items: BrandLabItem[];
}

export const brandLabStatusLabels: Record<BrandLabStatus, string> = {
  pendiente: "Pendiente",
  "en-revision": "En revisión",
  "con-cambios": "Con cambios pedidos",
  aprobada: "Aprobada",
  descartada: "Descartada",
};

const SPL = "ServicePageLayout";

export const brandLabGroups: BrandLabGroup[] = [
  {
    id: "barrido",
    phase: 1,
    title: "Barrido de colores y fuentes sueltos",
    description: "Pasar a tokens los valores escritos a mano, con el mismo valor de hoy, para que el interruptor alcance todo. La versión actual no tiene que cambiar.",
    items: [
      { id: "barrido-media", name: "SpaceDev in the media (47 colores sueltos)", status: "pendiente", routes: ["/spacedev-in-the-media"] },
      { id: "barrido-forms", name: "Formularios: Agentic, Contact, Newsletter", status: "pendiente", routes: ["/contact", "/newsletter", "/agentic-ai-development"] },
      { id: "barrido-home", name: "Home y su bloque de estilos", status: "pendiente", routes: ["/"] },
      { id: "barrido-events", name: "Events calendar", status: "pendiente", routes: ["/events-calendar"] },
      { id: "barrido-spl", name: `${SPL} y páginas de blockchain`, status: "pendiente", routes: ["/blockchain-development-services", "/blockchain-development-services/asset-tokenization"] },
      { id: "barrido-resto", name: "Resto de archivos (1 a 7 valores cada uno)", status: "pendiente", routes: ["/about-us", "/our-work", "/product-discovery", "/careers"] },
    ],
  },
  {
    id: "fundamentos",
    phase: 2,
    title: "Fundamentos",
    description: "Tokens de marca: con estos cambia todo el sitio sin tocar markup.",
    items: [
      { id: "paleta", name: "Paleta de color", status: "en-revision", routes: ["/brand-lab/fundamentos"] },
      { id: "degradados", name: "Degradados de apertura, cierre y hero", status: "en-revision", routes: ["/brand-lab/fundamentos"] },
      { id: "tipografia", name: "Tipografía: Open Sans SemiBold y Arial", status: "en-revision", routes: ["/brand-lab/fundamentos", "/"] },
      { id: "radios-sombras", name: "Radios, sombras y bordes de tarjeta", status: "pendiente", routes: ["/brand-lab/fundamentos"] },
      { id: "links-foco", name: "Links, foco visible y selección", status: "pendiente", routes: ["/brand-lab/fundamentos"] },
      { id: "prose", name: "Texto largo (prose.css)", status: "pendiente", routes: ["/blog/blockchain-trends-2026", "/privacy-policy"] },
      { id: "contraste", name: "Contraste AA de las combinaciones nuevas", status: "pendiente", routes: ["/brand-lab/fundamentos"] },
    ],
  },
  {
    id: "componentes",
    phase: 3,
    title: "Componentes",
    description: "Cada componente con todas sus variantes, claro y oscuro.",
    items: [
      { id: "button", name: "Button", status: "pendiente", routes: ["/", "/contact"] },
      { id: "badge", name: "Badge", status: "pendiente", routes: ["/privacy-policy", "/ui-kit"] },
      { id: "feature-card", name: "Card y FeatureCard", status: "pendiente", routes: ["/blockchain-development-services", "/ui-kit"] },
      { id: "section-heading", name: "SectionHeading", status: "pendiente", routes: ["/staff-augmentation"] },
      { id: "faq", name: "FAQ y acordeón de /faqs", status: "pendiente", routes: ["/", "/faqs"] },
      { id: "cta", name: "CTA", status: "pendiente", routes: ["/"] },
      { id: "case-study-card", name: "CaseStudyCard", status: "pendiente", routes: ["/our-work"] },
      { id: "counters", name: "AnimatedCounter y StarRating", status: "pendiente", routes: ["/about-us", "/ui-kit"] },
      { id: "quote-reveal", name: "QuoteReveal", status: "pendiente", routes: ["/"] },
      { id: "author-avatar", name: "AuthorAvatar", status: "pendiente", routes: ["/blog"] },
      { id: "related-industries", name: "RelatedIndustries", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization"] },
      { id: "syndication-row", name: "SyndicationRow", status: "pendiente", routes: ["/spacedev-in-the-media"] },
      { id: "contact-form", name: "ContactForm", status: "pendiente", routes: ["/contact"] },
      { id: "newsletter-form", name: "NewsletterForm (completo y compacto)", status: "pendiente", routes: ["/newsletter", "/events-calendar"] },
      { id: "agentic-form", name: "AgenticLeadForm (claro y oscuro)", status: "pendiente", routes: ["/agentic-ai-development"] },
      { id: "gone-screen", name: "GoneScreen, 404 y coming soon", status: "pendiente", routes: ["/gone", "/404", "/coming-soon"] },
      { id: "editorial-section", name: "EditorialSection", status: "descartada", routes: [], note: "No lo usa ninguna página: se anota para borrar aparte." },
    ],
  },
  {
    id: "shell",
    phase: 4,
    title: "Header, footer y navegación",
    description: "Lo que aparece en todas las páginas.",
    items: [
      { id: "header", name: "Header y mega menú", status: "pendiente", routes: ["/", "/innovative-web-and-mobile-solutions"] },
      { id: "mobile-menu", name: "Menú mobile", status: "pendiente", routes: ["/"] },
      { id: "footer", name: "Footer (marquee claro y oscuro)", status: "pendiente", routes: ["/", "/blockchain-development-services"] },
      { id: "breadcrumbs", name: "Breadcrumbs", status: "pendiente", routes: ["/blockchain-development-services/smart-contract-development", "/innovative-web-and-mobile-solutions"] },
      { id: "logo", name: "Logo según fondo", status: "pendiente", routes: ["/"] },
    ],
  },
  {
    id: "decoracion",
    phase: 5,
    title: "Astronautas, luna y fondos",
    description: "Las reglas de la marca para los assets, traducidas a web.",
    items: [
      { id: "assets", name: "Astronautas y luna (BrandAsset)", status: "pendiente", routes: ["/brand-lab/fundamentos"] },
      { id: "particulas", name: "Partículas del hero (13 páginas)", status: "pendiente", routes: ["/blockchain-development-services/smart-contract-development"] },
      { id: "glows", name: "Brillos violeta de fondo", status: "pendiente", routes: ["/", "/our-work"] },
    ],
  },
  {
    id: "templates",
    phase: 6,
    title: "Templates",
    description: "Cada template cubre muchas rutas a la vez.",
    items: [
      { id: "spl-hero", name: `${SPL}: hero oscuro y claro`, status: "pendiente", routes: ["/blockchain-development-services/dapp-development", "/innovative-web-and-mobile-solutions"] },
      { id: "spl-process", name: `${SPL}: proceso (3 variantes)`, status: "pendiente", routes: ["/staff-augmentation", "/blockchain-development-services/smart-contract-development", "/product-discovery"] },
      { id: "spl-offers", name: `${SPL}: ofertas (4 estilos)`, status: "pendiente", routes: ["/blockchain-development-services", "/innovative-web-and-mobile-solutions"] },
      { id: "spl-techstack", name: `${SPL}: tech stack`, status: "pendiente", routes: ["/blockchain-development-services/dapp-development"] },
      { id: "spl-cases", name: `${SPL}: case studies y mid CTA`, status: "pendiente", routes: ["/blockchain-development-services/dapp-development"] },
      { id: "spl-benefits", name: `${SPL}: beneficios, why us, FAQ, relacionados, CTA final y marquee`, status: "pendiente", routes: ["/staff-augmentation"] },
      { id: "blockchain-sections", name: "Secciones propias de blockchain y tablas comparativas", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization", "/blockchain-development-services/industry/banking"] },
      { id: "blog-post", name: "Post de blog (73)", status: "pendiente", routes: ["/blog/blockchain-trends-2026"] },
      { id: "case-study", name: "Case study (24)", status: "pendiente", routes: ["/our-work/drata"] },
      { id: "blog-tag", name: "Tag de blog (18)", status: "pendiente", routes: ["/blog/tag/defi"] },
      { id: "author", name: "Autores (índice y 3 perfiles)", status: "pendiente", routes: ["/author", "/author/federico-sendra"] },
      { id: "media-item", name: "Nota de medios (22)", status: "pendiente", routes: ["/spacedev-in-the-media/spacedev-becomes-a-hedera-community-partner"] },
      { id: "legal", name: "Legales (4)", status: "pendiente", routes: ["/privacy-policy", "/terms-and-conditions", "/legal/whatsapp-privacy", "/legal/whatsapp-terms"] },
    ],
  },
  {
    id: "servicios",
    phase: 6,
    title: "Páginas de servicio (una por una)",
    description: `Todas usan ${SPL}; además de los templates, cada una se revisa entera.`,
    items: [
      { id: "svc-blockchain", name: "Blockchain development services", status: "pendiente", routes: ["/blockchain-development-services"] },
      { id: "svc-smart-contract", name: "Smart contract development", status: "pendiente", routes: ["/blockchain-development-services/smart-contract-development"] },
      { id: "svc-dapp", name: "dApp development", status: "pendiente", routes: ["/blockchain-development-services/dapp-development"] },
      { id: "svc-token", name: "Crypto token development", status: "pendiente", routes: ["/blockchain-development-services/crypto-token-development"] },
      { id: "svc-dao", name: "DAO development", status: "pendiente", routes: ["/blockchain-development-services/dao-development"] },
      { id: "svc-did", name: "Decentralized identity", status: "pendiente", routes: ["/blockchain-development-services/decentralized-identity"] },
      { id: "svc-l1", name: "Layer 1 blockchain development", status: "pendiente", routes: ["/blockchain-development-services/layer-1-blockchain-development"] },
      { id: "svc-exchange", name: "White label crypto exchanges", status: "pendiente", routes: ["/blockchain-development-services/white-label-crypto-exchanges"] },
      { id: "svc-partner", name: "Blockchain partner", status: "pendiente", routes: ["/blockchain-development-services/blockchain-partner"] },
      { id: "svc-tokenization", name: "Asset tokenization", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization"] },
      { id: "svc-tok-bonds", name: "Tokenización: bonds", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/bonds"] },
      { id: "svc-tok-carbon", name: "Tokenización: carbon credits", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/carbon-credits"] },
      { id: "svc-tok-commodities", name: "Tokenización: commodities", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/commodities"] },
      { id: "svc-tok-securities", name: "Tokenización: digital securities", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/digital-securities"] },
      { id: "svc-tok-gold", name: "Tokenización: gold", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/gold"] },
      { id: "svc-tok-realestate", name: "Tokenización: real estate", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/real-estate"] },
      { id: "svc-tok-stocks", name: "Tokenización: stocks", status: "pendiente", routes: ["/blockchain-development-services/asset-tokenization/stocks"] },
      { id: "ind-banking", name: "Industria: banking", status: "pendiente", routes: ["/blockchain-development-services/industry/banking"] },
      { id: "ind-compliance", name: "Industria: compliance web3", status: "pendiente", routes: ["/blockchain-development-services/industry/compliance-web3"] },
      { id: "ind-energy", name: "Industria: energy", status: "pendiente", routes: ["/blockchain-development-services/industry/energy"] },
      { id: "ind-fintech", name: "Industria: finance and fintech", status: "pendiente", routes: ["/blockchain-development-services/industry/finance-and-fintech"] },
      { id: "ind-lending", name: "Fintech: lending protocols", status: "pendiente", routes: ["/blockchain-development-services/industry/finance-and-fintech/lending-protocols"] },
      { id: "ind-stablecoins", name: "Fintech: stablecoins", status: "pendiente", routes: ["/blockchain-development-services/industry/finance-and-fintech/stablecoins"] },
      { id: "ind-trading-bots", name: "Fintech: trading bots", status: "pendiente", routes: ["/blockchain-development-services/industry/finance-and-fintech/trading-bots"] },
      { id: "ind-yield", name: "Fintech: yield farming", status: "pendiente", routes: ["/blockchain-development-services/industry/finance-and-fintech/yield-farming"] },
      { id: "ind-gaming", name: "Industria: gaming", status: "pendiente", routes: ["/blockchain-development-services/industry/gaming"] },
      { id: "ind-healthcare", name: "Industria: healthcare", status: "pendiente", routes: ["/blockchain-development-services/industry/healthcare"] },
      { id: "ind-realestate", name: "Industria: real estate", status: "pendiente", routes: ["/blockchain-development-services/industry/real-estate"] },
      { id: "ind-supply", name: "Industria: supply chain and logistics", status: "pendiente", routes: ["/blockchain-development-services/industry/supply-chain-and-logistics"] },
      { id: "ind-telecom", name: "Industria: telecommunications", status: "pendiente", routes: ["/blockchain-development-services/industry/telecommunications"] },
      { id: "ind-index", name: "Industrias (índice)", status: "descartada", routes: ["/blockchain-development-services/industry"], note: "Es un redirect 301, no tiene diseño propio." },
      { id: "svc-web-mobile", name: "Innovative web and mobile solutions", status: "pendiente", routes: ["/innovative-web-and-mobile-solutions"] },
      { id: "svc-staff-aug", name: "Staff augmentation", status: "pendiente", routes: ["/staff-augmentation"] },
      { id: "svc-discovery", name: "Product discovery", status: "pendiente", routes: ["/product-discovery"] },
      { id: "svc-blockaudit", name: "BlockAudit", status: "pendiente", routes: ["/blockaudit-smart-contract-and-blockchain-security"] },
    ],
  },
  {
    id: "paginas",
    phase: 7,
    title: "Páginas únicas",
    description: "Páginas con diseño propio, sección por sección.",
    items: [
      { id: "home", name: "Home", status: "pendiente", routes: ["/"], note: "El marquee de logos de clientes no se toca sin hablarlo: sus SVG traen fondo FAFAFA." },
      { id: "about", name: "About us", status: "pendiente", routes: ["/about-us"] },
      { id: "agentic", name: "Agentic AI development", status: "pendiente", routes: ["/agentic-ai-development"] },
      { id: "our-work", name: "Our work", status: "pendiente", routes: ["/our-work"] },
      { id: "contact", name: "Contact", status: "pendiente", routes: ["/contact"] },
      { id: "careers", name: "Careers", status: "pendiente", routes: ["/careers"] },
      { id: "faqs", name: "FAQs", status: "pendiente", routes: ["/faqs"] },
      { id: "newsletter", name: "Newsletter", status: "pendiente", routes: ["/newsletter"] },
      { id: "events", name: "Events calendar", status: "pendiente", routes: ["/events-calendar"] },
      { id: "digital-library", name: "Digital library y página LATAM", status: "pendiente", routes: ["/digital-library", "/digital-library/why-we-should-care-about-latam"] },
      { id: "media", name: "SpaceDev in the media", status: "pendiente", routes: ["/spacedev-in-the-media"] },
      { id: "blog-index", name: "Blog (índice)", status: "pendiente", routes: ["/blog"] },
      { id: "errors", name: "404, coming soon y gone", status: "pendiente", routes: ["/404", "/coming-soon", "/gone"] },
      { id: "ui-kit", name: "UI kit interno", status: "pendiente", routes: ["/ui-kit"], note: "Se actualiza al final con lo aprobado." },
    ],
  },
  {
    id: "superficies",
    phase: 8,
    title: "Fuera de la página",
    description: "Lo que se ve fuera del contenido: pestaña del navegador, redes, terceros.",
    items: [
      { id: "theme-color", name: "theme-color y color-scheme", status: "pendiente", routes: [] },
      { id: "favicon", name: "Favicons y manifest", status: "pendiente", routes: [] },
      { id: "og-default", name: "Imagen para redes por defecto (og-default.png)", status: "pendiente", routes: [] },
      { id: "terceros", name: "Terceros que no se estilizan (HubSpot Meetings, Clutch, YouTube, mails de Brevo)", status: "descartada", routes: [], note: "Se anotan para que no sorprendan." },
    ],
  },
];
