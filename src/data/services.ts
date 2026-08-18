import type { CaseStudy } from "./case-studies";
import { caseStudies } from "./case-studies";

export interface ServiceOffer { number: string; title: string; description: string; href?: string }
export interface ServiceBenefit { title: string; description: string; icon?: string }
export interface ServiceFaq { question: string; answer: string }
export interface ServiceQuote { text: string; author: string; role: string; photo?: string; linkedin?: string }
export interface ServiceStep { number: string; title: string; description: string }

export interface ServicePageData {
  /** SEO */
  seo: { title: string; description: string };
  /** Last real content update, used as dateModified in the page's Service schema. Format: "YYYY-MM-DD". Only set when the page was actually edited. */
  updatedAt?: string;
  /** Hero */
  eyebrow: string;
  title: string;
  titleHtml?: string;
  subtitle?: string;
  description: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  /** Hero color scheme — "dark" (default) = purple gradient; "light" = white bg with dark text */
  heroVariant?: "dark" | "light";

  /** "What we build" / process / offers */
  offers?: { eyebrow?: string; title: string; description?: string; items: ServiceOffer[]; style?: "list" | "cards" | "light-cards" | "dark-cards"; ctaButton?: { label: string; href: string; external?: boolean } };

  /** Step-by-step process (1..N) */
  process?: { eyebrow?: string; title: string; description?: string; items: ServiceStep[]; variant?: "default" | "sticky-light" | "sticky-dark" };

  /** Featured case studies (slugs from data/case-studies) */
  caseStudySlugs?: string[];
  /** Case studies section heading — defaults to a generic title if omitted */
  caseStudiesTitle?: string;
  caseStudiesDescription?: string;
  /** When set, replaces the "See all work" button with an inline text link */
  caseStudiesLink?: { text: string; href: string };
  /** Case studies section background tone — defaults to "dark" (purple-deep) */
  caseStudiesTone?: "dark" | "light";

  /** Benefits grid */
  benefits?: { eyebrow?: string; title: string; description?: string; items: ServiceBenefit[]; layout?: "3col" | "4col" | "4-3"; titleAlign?: "left" | "center" };

  /** Pull quote */
  quote?: ServiceQuote;

  /** Why SpaceDev */
  whyUs?: { title: string; description?: string; items: ServiceBenefit[]; style?: "cards" | "4col"; tone?: "dark" | "purple" };

  /** Mid-page CTA (between case studies and benefits) */
  midCta?: { title: string; description?: string; buttonLabel: string; buttonHref: string; external?: boolean };

  /** Marquee text banner (shown before Final CTA) */
  marqueeText?: string;
  footerMarquee?: string;
  footerMarqueeTheme?: "light" | "dark";

  /** Tech stack floating grid (shown after offers) */
  techStack?: { title: string; subtitle: string; tools: string[]; tone?: "dark" | "light"; ctaButton?: { label: string; href: string; external?: boolean } };

  /** FAQ */
  faqs?: ServiceFaq[];

  /** Final CTA */
  finalCta?: { eyebrow?: string; title: string; description?: string; buttonLabel: string; buttonHref: string; external?: boolean };

  /** Blog tag slugs used to surface related articles at the bottom of the page */
  relatedTags?: string[];

  /** Use a smaller font size for the H1 when the title is very long */
  compactHeroTitle?: boolean;

  /** Optional hero illustration shown to the right of the hero copy */
  heroImage?: { src: string; alt: string; width?: number; height?: number };

  /** Optional decorative canvas particle grid in the dark hero. */
  heroParticles?: boolean;

  /** Optional illustration rendered above the offers grid */
  offersIllustration?: { src: string; alt: string };
}

export function getCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map((s) => caseStudies.find((c) => c.slug === s)).filter(Boolean) as CaseStudy[];
}

/* ============================================================
   BLOCKCHAIN — parent page
   ============================================================ */
export const blockchainData: ServicePageData = {
  seo: {
    title: "Blockchain Development Services Built for Real Business Outcomes | SpaceDev",
    description:
      "SpaceDev is a custom blockchain development company that takes products from concept to mainnet. Web3 engineering, product strategy, and embedded security, all under one roof.",
  },
  eyebrow: "Advanced Blockchain Development",
  title: "Blockchain Development Services Built for Real Business Outcomes",
  description:
    "SpaceDev is a custom blockchain development company that takes products from concept to mainnet. We combine web3 engineering, product strategy, and embedded security so your blockchain investment actually delivers.",
  relatedTags: ["layer1"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See case studies", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "Our Blockchain Development Solutions",
    description:
      "A memorable product starts with a vision and ends with something that creates impact. Our blockchain engineers, designers, and consultants work together to build systems that are transparent, efficient, secure, and for real business outcomes.",
    style: "cards",
    items: [
      { number: "01", title: "Smart Contract Development", description: "Audited, gas-optimized contracts on Ethereum, Aptos, Solana and other major ecosystems, designed for security and longevity.", href: "/blockchain-development-services/smart-contract-development" },
      { number: "02", title: "dApp Development", description: "High-performance decentralized applications that combine seamless UX with robust, scalable on-chain logic.", href: "/blockchain-development-services/dapp-development" },
      { number: "03", title: "Decentralized Identity", description: "Self-sovereign identity solutions that give users full control over their data: secure, private, and interoperable across chains.", href: "/blockchain-development-services/decentralized-identity" },
      { number: "04", title: "Asset Tokenization", description: "Turn real-world assets into digital tokens, unlocking liquidity, fractional ownership, and new investment opportunities.", href: "/blockchain-development-services/asset-tokenization" },
      { number: "05", title: "Layer 1 Blockchain Development", description: "Fully customized, scalable networks ranging from Layer 1 protocols to private enterprise chains, secure and future-ready.", href: "/blockchain-development-services/layer-1-blockchain-development" },
      { number: "06", title: "DAO Development", description: "On-chain governance models for transparent decision-making, voting systems, and efficient treasury management.", href: "/blockchain-development-services/dao-development" },
    ],
  },

  caseStudySlugs: ["blockchain-for-energy", "fightfi", "apebond", "rarible"],
  caseStudiesTitle: "Blockchain Development Projects We Are Proud Of",
  caseStudiesDescription: "SpaceDev has shipped production-grade blockchain applications for clients across energy, DeFi, gaming, and NFT infrastructure.",
  caseStudiesLink: { text: "Explore our work.", href: "/our-work" },

  benefits: {
    title: "Benefits of Blockchain Adoption",
    description:
      "Businesses across industries are turning to blockchain because it's transparent, efficient, and secure. Custom blockchain solutions redefine how transactions, data, and trust work in digital ecosystems.",
    items: [
      { title: "Increased Security", description: "Advanced cryptographic algorithms safeguard data and transactions. Each block is encrypted, verified, and immutable, protecting against cyberattacks and fraud.", icon: "lock" },
      { title: "Greater Transparency", description: "Every transaction is permanently recorded and easily auditable. This openness improves accountability and builds trust with users, partners, and regulators.", icon: "eye" },
      { title: "Improved Efficiency", description: "Automate repetitive workflows and eliminate intermediaries. Smart contracts streamline operations and shorten transaction times.", icon: "bolt" },
      { title: "Higher Reliability", description: "A decentralized network distributes data across multiple nodes, removing single points of failure and ensuring continuous uptime.", icon: "shield" },
      { title: "Cost Optimization", description: "By reducing intermediaries and automating operations, blockchain minimizes administrative costs and transaction fees.", icon: "tag" },
      { title: "Enhanced Traceability", description: "Trace assets from origin to destination, improving supply-chain visibility, ensuring compliance, and strengthening consumer trust.", icon: "chain" },
    ],
  },

  quote: {
    text: "There's no question that blockchain will change the world; the real question is when. We can drive this change by embracing and promoting the technology. At SpaceDev, we firmly believe in its transformative power. Partner with us to unlock the full potential of blockchain and lead the future of innovation.",
    author: "Juan Manuel Sobral",
    role: "CTO & Co-founder",
    photo: "/images/juan-manuel-sobral.webp",
    linkedin: "https://www.linkedin.com/in/juanmsobral/",
  },

  midCta: {
    title: "Eager to create your own success story?",
    buttonLabel: "Book a call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },

  whyUs: {
    title: "Why Choose SpaceDev as Your Tech Partner",
    style: "4col",
    items: [
      { title: "Fast MVP Delivery", description: "We move ideas into action quickly. Our agile approach allows you to validate concepts, gather user feedback, and iterate, before committing to full-scale development." },
      { title: "Real Results, Not Buzzwords", description: "We measure success by what ships and scales. Every engagement is tied to concrete outcomes: faster transactions, higher adoption, measurable ROI." },
      { title: "Transparent Collaboration", description: "No black boxes. You have full visibility into progress, blockers, and decisions throughout the project. We work as an extension of your team, not a vendor." },
      { title: "Post-Launch Partnership", description: "Whether it's project-based execution or IT staff augmentation, we adapt to your structure, scale efficiently, and integrate as an extension of your existing team." },
    ],
  },

  techStack: {
    title: "Our Web 3.0 tech stack",
    subtitle: "From mobile experiences to complex decentralized software, our premium digital solutions are made with the latest tools.",
    tools: ["ethereum", "solana", "solidity", "rust", "wagmi", "hardhat", "ethers", "openzeppelin"],
  },

  faqs: [
    { question: "What does a blockchain development service include?", answer: "Full lifecycle coverage: blockchain consulting, architecture design, smart contract development, front-end and back-end integration, security auditing, and post-launch support." },
    { question: "How long does custom blockchain development take?", answer: `Most MVPs are production-ready in 8 to 12 weeks. More complex platforms like DeFi protocols require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any budget commitment.` },
    { question: "Which blockchain networks do you build on?", answer: "Ethereum, Solana, Polygon, BNB Chain, Avalanche, and other major Layer 1 and Layer 2 networks. Network selection is always driven by your performance, cost, and ecosystem requirements." },
    { question: "Do you offer smart contract security audits?", answer: `Yes. Independent smart contract audits are handled by <a href="/blockaudit-smart-contract-and-blockchain-security" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">BlockAudit</a>, our dedicated blockchain security division.` },
    { question: "Can you work alongside our existing development team?", answer: `Yes. Our <a href="/staff-augmentation" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">IT Staff Augmentation</a> model lets you embed experienced blockchain engineers into your team without a full outsourced engagement.` },
  ],

  finalCta: {
    title: "Start Your Blockchain Development Project Today",
    description: "From your first technical question to your public launch, SpaceDev is with you at every step. Let's talk about what you want to build.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },

  footerMarquee: "Blockchain Development. Web3 Solutions. Smart Contracts. DeFi Platforms. dApp Development. Asset Tokenization.",
  footerMarqueeTheme: "dark",
};

/* ============================================================
   BLOCKCHAIN SUB-PAGES — focused variations
   ============================================================ */
export const dappData: ServicePageData = {
  seo: {
    title: "DApp Development Services | SpaceDev",
    description: "Custom decentralized application development for Web3 products. We design, build, and scale dApps that are secure, production-ready, and aligned with real business goals.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "DApp Development Services",
  description: "We design, build, and scale decentralized applications that are secure, production-ready, and aligned with real business goals. Our team combines solid Web2 engineering with advanced Web3 capabilities.",
  relatedTags: ["web3-infrastructure"],
  primaryCta: { label: "Get in touch", href: "/contact" },

  process: {
    title: "Our DApp development process",
    description: "We follow a structured, execution-focused process designed to reduce risk and accelerate delivery.",
    items: [
      { number: "1", title: "Product Discovery & Strategy", description: "We align your business goals, users, and blockchain strategy before writing a single line of code." },
      { number: "2", title: "Architecture & Technical Design", description: "Network selection, smart contract structure, scalability planning, and security considerations." },
      { number: "3", title: "Development & Quality Assurance", description: "Iterative development with continuous testing to ensure performance and reliability." },
      { number: "4", title: "Security Review & Hardening", description: "Deep security analysis to minimize vulnerabilities and protect users and assets." },
      { number: "5", title: "Launch & Post-Production Support", description: "Ongoing monitoring, upgrades, and support as your dApp grows." },
    ],
    variant: "sticky-dark",
  },

  whyUs: {
    title: "Why choose SpaceDev as your DApp development company?",
    description: "We don't just deliver code: we help you build production-grade decentralized products.",
    items: [
      { title: "Web2 + Web3 expertise", description: "Proven expertise combining solid web2 engineering with advanced web3 and blockchain capabilities." },
      { title: "End-to-end delivery", description: "Strategy, development, security, and scaling, all under one roof." },
      { title: "Flexible engagement", description: "Project-based or staff augmentation models to fit your team and timeline." },
      { title: "US market experience", description: "Extensive experience working with startups and enterprises in the US market." },
      { title: "Built to last", description: "Strong focus on scalability, security, and long-term success from day one." },
    ],
    tone: "dark",
  },

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is a dApp?", answer: "A dApp (decentralized application) is software that runs on a blockchain instead of a centralized server, using smart contracts for its core logic. Unlike traditional apps, no single party controls the backend or can unilaterally change the rules." },
    { question: "How long does dApp development take?", answer: "Most dApp MVPs are production-ready in 8 to 12 weeks. Complex dApps with custom protocol logic or multi-chain support typically require a scoping phase first, defined during Product Discovery." },
    { question: "Which blockchains do you build dApps on?", answer: "Ethereum and other EVM-compatible chains (Polygon, Arbitrum, Base, Optimism), Solana, and Aptos, depending on your performance, cost, and ecosystem requirements." },
    { question: "Do you audit the smart contracts behind the dApp?", answer: `Yes. Every dApp we build can go through an independent audit from <a href="/blockaudit-smart-contract-and-blockchain-security" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">BlockAudit</a>, our dedicated blockchain security division, before mainnet launch.` },
  ],

  finalCta: {
    title: "Let's Build Your Decentralized Application",
    description: "If you're looking for a reliable partner for dApp development services, custom decentralized application development, or blockchain dApp development, SpaceDev is ready to help.",
    buttonLabel: "Talk to our Web3 experts",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },

};

export const banksData: ServicePageData = {
  seo: {
    title: "Blockchain Development for Banks & Financial Institutions",
    description: "Compliant blockchain and tokenization solutions for banks, fintechs, and asset managers. Programmable money, settlement, and digital asset custody.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Blockchain Infrastructure for Banks",
  description: "We integrate directly into your core banking solution through a seamless, plug-and-play approach that enhances capabilities without disrupting existing systems.",
  relatedTags: ["compliance", "institutional"],
  primaryCta: { label: "Talk to our team", href: "/contact" },

  faqs: [
    { question: "What blockchain solutions do you build for banks?", answer: "Tokenized deposits, programmable payment rails, digital asset custody, and settlement infrastructure that integrates with existing core banking systems rather than replacing them." },
    { question: "Can this integrate with our existing core banking system?", answer: "Yes. We design a plug-and-play integration layer so blockchain capabilities (tokenization, settlement, custody) sit alongside your current core banking stack instead of requiring a rebuild." },
    { question: "How do you handle compliance and regulatory requirements?", answer: "Compliance requirements (KYC/AML, custody rules, reporting) are scoped during a discovery phase specific to your jurisdiction before any architecture decisions are made." },
    { question: "Do you support permissioned as well as public blockchains?", answer: "Yes. Depending on regulatory and privacy requirements, we build on permissioned/consortium chains or public networks like Ethereum, selecting the right fit during the discovery phase." },
  ],


  finalCta: {
    title: "Build the bank of the next decade",
    buttonLabel: "Schedule a discovery call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },

  offersIllustration: {
    src: "/images/content/L5mZDwRMP1XtyYGb0P8kuICAtEs.svg",
    alt: "Architecture diagram showing tokenized deposits and settlement networks.",
  },
};

export const smartContractData: ServicePageData = {
  seo: {
    title: "Smart Contract Development, Audit-Ready & Production-Grade",
    description: "Audited, gas-optimized smart contracts on Ethereum, Aptos, Solana and other ecosystems. From token standards to complex DeFi protocols.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Sub-service · Blockchain",
  title: "Smart Contract Development",
  description: "Secure, gas-efficient smart contracts engineered to scale. We design, build, test, and audit production contracts for token issuers, DeFi protocols, marketplaces, and DAOs.",
  relatedTags: ["smart-contracts"],
  heroParticles: true,
  primaryCta: { label: "Get in touch", href: "/contact" },

  caseStudySlugs: ["rarible", "apebond", "bondi-finance", "blockus"],
  caseStudiesTitle: "Smart Contracts We've Shipped",
  caseStudiesDescription: "Real contracts, in production, for real clients.",

  faqs: [
    { question: "What languages do you write smart contracts in?", answer: "Solidity for Ethereum and EVM-compatible chains, Rust for Solana, and Move for Aptos and Sui, chosen based on your target network." },
    { question: "How long does smart contract development take?", answer: "A single-purpose contract (token, staking, escrow) typically takes 4 to 8 weeks including testing. Multi-contract systems like DeFi protocols run 10 to 16 weeks. Timelines are confirmed during scoping, before development starts." },
    { question: "Do you audit the smart contracts you build?", answer: `Yes. Every production contract goes through internal review and can be independently audited by <a href="/blockaudit-smart-contract-and-blockchain-security" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">BlockAudit</a>, our dedicated blockchain security division, before mainnet deployment.` },
    { question: "What tooling do you use for smart contract development?", answer: "Foundry and Hardhat for testing and deployment, OpenZeppelin for audited base contracts, and The Graph for indexing on-chain data." },
  ],

  finalCta: {
    title: "Let's Build Secure Smart Contracts",
    description: "Talk to our Blockchain experts.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },

  footerMarqueeTheme: "dark",

  offersIllustration: {
    src: "/images/content/8UnMZbotyNqtBxF3ssUBAoU5I.svg",
    alt: "Smart contract development lifecycle, from design to formal verification.",
  },
};

export const partnerData: ServicePageData = {
  seo: {
    title: "Blockchain Partner for Agencies: Strategy, Infrastructure and Support | SpaceDev",
    description: "SpaceDev works with agencies as a blockchain partner. Expand what you sell, protect your margins, and ship blockchain projects with confidence. White label or client-facing.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "A Blockchain Partner for Agencies",
  description: "Your clients want Web3 experiences, tokenized loyalty, on-chain verification, and wallet-based onboarding, but building those capabilities in-house is expensive and risky. SpaceDev works with agencies as a blockchain partner so you can expand what you sell, protect your margins, and ship with confidence.",
  relatedTags: ["blockchain", "enterprise"],
  primaryCta: { label: "Get in touch", href: "/contact" },

  finalCta: {
    title: "Bring us in as your blockchain development partner for your next client build.",
    buttonLabel: "Book a call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },

  footerMarqueeTheme: "dark",
};

export const decentralizedIdentityData: ServicePageData = {
  seo: {
    title: "Decentralized Identity Development Services | SpaceDev",
    description: "SpaceDev designs and builds decentralized identity (DID) solutions: verifiable credentials, wallet-based onboarding, and identity infrastructure for production-grade platforms.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Decentralized Identity Development Services",
  description: "Decentralized identity (DID) helps organizations verify people, accounts, and credentials without forcing users to hand over more data than necessary. SpaceDev designs and builds DID solutions that work in the real world: scalable identity experiences, secure integrations, and production-ready operations.",
  relatedTags: ["web3-infrastructure", "blockchain-basics"],
  primaryCta: { label: "Get in touch", href: "/contact" },

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is decentralized identity (DID)?", answer: "A DID is a self-sovereign digital identity standard that lets a person or organization prove who they are, or verify a credential, without a central authority holding or controlling that data." },
    { question: "How is DID different from traditional login systems?", answer: "Traditional logins store credentials in a central database that can be breached or misused. DID uses cryptographic proofs and verifiable credentials, so users control what they share and with whom, and no single database holds everyone's identity data." },
    { question: "What can I build with decentralized identity infrastructure?", answer: "Wallet-based onboarding, KYC flows that don't store raw documents, verifiable credentials for professional certifications, and access control systems that don't rely on passwords." },
    { question: "How long does a DID implementation take?", answer: "A focused DID integration into an existing product typically takes 6 to 10 weeks. Full identity infrastructure builds vary based on the number of credential types and integrations required, scoped during discovery." },
  ],

  finalCta: {
    title: "Build decentralized identity experiences that improve onboarding, privacy, and trust without sacrificing usability.",
    buttonLabel: "Talk to our blockchain team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};

export const realEstateTokData: ServicePageData = {
  seo: {
    title: "Real Estate Tokenization Development Services | SpaceDev",
    description: "End-to-end development of real estate tokenization platforms: fractional ownership, compliant issuance, investor and issuer portals, and secondary market infrastructure built for production.",
  },
  eyebrow: "Sub-service · Asset Tokenization",
  title: "Real Estate Tokenization Development Services",
  description: "SpaceDev helps real estate companies, proptech platforms, and investment firms design, build, and launch tokenized property platforms built for real operations, not proof-of-concept demos.",
  relatedTags: ["rwa"],
  primaryCta: { label: "Get in touch", href: "/contact" },

  footerMarqueeTheme: "dark",

  finalCta: {
    title: "Build your real estate tokenization platform with SpaceDev.",
    description: "If you're evaluating partners for real estate tokenization development, fractional property investment platforms, or security token infrastructure for real estate, SpaceDev has the technical depth and operational experience to take your project from architecture to production.",
    buttonLabel: "Talk to our blockchain team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};

export const tokenizationData: ServicePageData = {
  seo: {
    title: "Asset Tokenization Development Services for Web3 Projects",
    description: "Tokenize real-world assets: real estate, commodities, securities, and fixed income. Issuance, lifecycle, custody, and secondary markets, end to end.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Asset Tokenization Development Services",
  description: "We build production-grade platforms to tokenize real-world assets: real estate, commodities, securities, and fixed income. From issuance and lifecycle management to custody and secondary markets, end to end.",
  relatedTags: ["rwa", "tokenization"],
  primaryCta: { label: "Get in touch", href: "/contact" },

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What assets can be tokenized?", answer: "Real estate, commodities, securities, fixed income instruments, and other real-world assets (RWA), by representing legal or economic rights to the asset as tokens on a blockchain." },
    { question: "How does asset tokenization improve liquidity?", answer: "Tokenization allows fractional ownership and secondary trading of assets that are normally illiquid, such as real estate or private credit, letting investors buy and sell smaller positions instead of requiring a full-asset transaction." },
    { question: "What's involved in a tokenization platform build?", answer: "Token issuance and lifecycle management, custody infrastructure, KYC/investor onboarding, and secondary market functionality, integrated end to end rather than built as separate systems." },
    { question: "How do you handle regulatory compliance for tokenized securities?", answer: "Compliance requirements (accredited investor checks, transfer restrictions, jurisdiction-specific rules) are scoped during a discovery phase before any architecture decisions, since they directly shape the token standard and custody design." },
  ],

  finalCta: {
    title: "Build a tokenization platform designed for real operations.",
    description: "Talk to SpaceDev about asset tokenization development.",
    buttonLabel: "Book a call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};

/* ============================================================
   INDUSTRY PAGES
   ============================================================ */
export const defiFinanceData: ServicePageData = {
  seo: {
    title: "DeFi Development Services for Decentralized Finance | SpaceDev",
    description: "SpaceDev builds production-grade DeFi applications, smart contract systems, and tokenized financial infrastructure. Full DeFi development lifecycle from protocol architecture to post-launch security.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Industry · Finance and Fintech",
  title: "DeFi Development Services for the Next Generation of Decentralized Finance",
  description: "SpaceDev builds production-grade DeFi applications, smart contract systems, and tokenized financial infrastructure for startups and enterprises ready to operate at the frontier of web3 finance. From protocol architecture to post-launch security, we cover the full DeFi development lifecycle.",
  relatedTags: ["defi"],
  heroParticles: true,
  primaryCta: { label: "Start Your DeFi Project", href: "/contact" },
  secondaryCta: { label: "Talk to a DeFi Engineer", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "How long does it take to build a DeFi application?", answer: "It depends heavily on protocol complexity. A focused single-purpose DeFi dApp, such as a staking platform or a basic lending pool, can be designed, built, audited, and deployed in 10 to 16 weeks. Multi-protocol systems with custom tokenomics and front-end interfaces typically run 20 to 32 weeks. We scope every project individually after a discovery phase." },
    { question: "What blockchains do you build DeFi protocols on?", answer: "We work across EVM-compatible chains (Ethereum, Polygon, Arbitrum, Base, BNB Chain, Avalanche) and non-EVM chains including Solana. The right chain depends on your target user base, transaction cost tolerance, and ecosystem integrations." },
    { question: "Do you offer smart contract audits for protocols built by other teams?", answer: "Yes. Our BlockAudit division operates as a standalone service. If your protocol was built externally and you need an independent security review before launch or before a funding event, we can scope an audit independently of any development engagement." },
    { question: "What is the difference between a DeFi development company and a general blockchain agency?", answer: "A decentralized finance development company should demonstrate prior work specifically in financial protocol architecture, not just token minting or NFT marketplaces. DeFi involves economic design decisions, attack surface modeling, and liquidity engineering that require domain-specific experience. Before engaging any team, ask to see prior DeFi-specific work and their audit methodology." },
    { question: "Can you help with DeFi token development and the tokenomics design?", answer: "Yes. Token engineering at SpaceDev includes both the technical contract development and the economic design layer: supply schedules, emission curves, incentive alignment, and governance mechanics. We treat tokenomics as a product discipline, not a whitepaper exercise." },
  ],

  finalCta: {
    title: "Ready to Build Your DeFi Protocol?",
    description: "Whether you are designing a DeFi lending platform, launching a tokenized asset product, or auditing an existing smart contract system before going live, SpaceDev has the engineering depth to do it correctly.",
    buttonLabel: "Start a DeFi Project",
    buttonHref: "/contact",
  },
};

/* ============================================================
   INDUSTRY · SUPPLY CHAIN & LOGISTICS
   ============================================================ */
export const supplyChainData: ServicePageData = {
  seo: {
    title: "Blockchain Solutions for Logistics and Supply Chain | SpaceDev",
    description: "Blockchain-based supply chain traceability, freight payment automation, product provenance, cold chain monitoring, and trade document digitization, built by SpaceDev for logistics operators, 3PLs, and manufacturers.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Industry · Supply Chain & Logistics",
  title: "Blockchain Solutions for Logistics, Freight, and Supply Chain Operations",
  description: "Supply chains break at the handoffs, where data moves between carriers, customs authorities, warehouses, and buyers. SpaceDev builds blockchain-based logistics and supply chain platforms that replace fragmented multi-party coordination with shared, tamper-proof infrastructure built for production.",
  relatedTags: ["blockchain", "enterprise"],
  heroParticles: true,
  primaryCta: { label: "Talk to Our Logistics Blockchain Team", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "Does blockchain replace our existing ERP, WMS, or TMS systems?", answer: "No. Blockchain in logistics adds a shared trust and visibility layer on top of the systems already running your operations. SpaceDev builds integrations with ERP platforms (SAP, Oracle, Microsoft Dynamics), WMS systems, TMS platforms, and IoT sensor networks, so the blockchain layer works alongside existing infrastructure rather than replacing it." },
    { question: "Which blockchain network is best for a logistics or supply chain platform?", answer: "It depends on whether your platform is permissioned or open, how many parties are involved, transaction volume, and regulatory requirements. Hyperledger Fabric suits enterprise consortium networks. Ethereum and EVM chains work for public traceability platforms. Polygon fits high-volume tracking and settlement. Hedera handles IoT event recording with predictable fees. We evaluate tradeoffs per project." },
    { question: "How does smart contract automation work for freight payments?", answer: "Payment and settlement triggers are encoded as smart contracts that execute automatically on verified delivery events, customs clearance confirmations, or IoT sensor data. This eliminates manual invoice reconciliation between carriers and shippers and compresses payment cycles from weeks to hours, without requiring trust between counterparties." },
    { question: "Can blockchain help with trade finance documents like bills of lading?", answer: "Yes. Blockchain-backed digitization of bills of lading, letters of credit, certificates of origin, and customs declarations makes these documents shareable across importers, exporters, freight forwarders, banks, and customs authorities in real time, removing document fraud risk, eliminating version conflicts, and cutting processing delays at border crossings." },
    { question: "What does the delivery process look like for a logistics blockchain platform?", answer: "We start with a Discovery Sprint that maps your current workflows, identifies where blockchain adds real operational value, and defines platform scope, architecture, and integration requirements. From there we move to milestone-based build and QA with working demos at each stage, followed by launch and ongoing operational support as your platform and participant network scale." },
  ],

  finalCta: {
    title: "Build Blockchain Infrastructure for Your Logistics and Supply Chain Operations",
    description: "Whether you need supply chain traceability, freight settlement automation, cargo tracking, trade document digitization, or multi-party inventory visibility, SpaceDev has the technical depth and operational experience to build it for production.",
    buttonLabel: "Talk to Our Team",
    buttonHref: "/contact",
  },
};

/* ============================================================
   INDUSTRY · HEALTHCARE
   ============================================================ */
export const healthcareData: ServicePageData = {
  seo: {
    title: "Blockchain Development for the Healthcare Industry | SpaceDev",
    description: "HIPAA-aligned blockchain solutions for health records, claims automation, pharmaceutical tracking, and clinical data interoperability, built by SpaceDev for healthcare companies, payers, and life sciences.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Industry · Healthcare",
  title: "Blockchain Development for the Healthcare Industry",
  description: "SpaceDev builds blockchain solutions for healthcare companies that need to secure patient data, automate clinical workflows, and create interoperable health records across providers, payers, and systems, without compromising compliance or performance.",
  relatedTags: ["ai"],
  heroParticles: true,
  primaryCta: { label: "Start Your Healthcare Project", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What does HIPAA compliance mean for a blockchain healthcare application?", answer: "It means the architecture is designed around permissioned access, where only authorized parties can read or write to the records they are entitled to access. Patient data is never exposed on a public ledger. Encryption, access control, and audit trail requirements are built into the technical design from day one, not layered on after the fact." },
    { question: "Can blockchain integrate with existing EHR and clinical systems?", answer: "Yes. Most production healthcare blockchain applications are hybrid architectures that sit alongside existing EHR, PACS, and insurance platforms rather than replacing them. The blockchain provides the interoperability and audit layer: data continues to live in existing systems, with the blockchain acting as the trusted reconciliation and consent management layer on top." },
    { question: "Which blockchain networks are used for healthcare applications?", answer: "Healthcare applications typically run on permissioned networks (Hyperledger Fabric, Hyperledger Besu, or private Ethereum deployments) because they offer fine-grained access control and data privacy that public chains cannot provide by default. For specific use cases like credential verification or pharmaceutical provenance, hybrid approaches with public chain anchoring are also viable." },
    { question: "How does smart contract automation work for healthcare claims processing?", answer: "A smart contract encodes the conditions under which a claim is approved and payment triggered: coverage rules, clinical codes, provider credentials, and prior authorization logic. When a claim is submitted and the conditions are met, settlement executes automatically without manual review. This reduces dispute rates, cuts settlement time, and creates an auditable record of every decision." },
    { question: "How long does it take to build a healthcare blockchain solution?", answer: "It depends on scope and integration complexity. A focused application (such as a consent management system or a provider credentialing platform) can be scoped, built, and deployed in 12 to 20 weeks. A full interoperability layer or claims automation platform with legacy EHR integration typically runs 24 to 40 weeks. We scope every project individually after a discovery engagement." },
  ],

  finalCta: {
    title: "Ready to Build Blockchain Infrastructure for Healthcare?",
    description: "Whether you are a health system, payer, pharmaceutical company, or digital health startup, SpaceDev has the technical depth and regulatory awareness to deliver it correctly.",
    buttonLabel: "Start Your Healthcare Blockchain Project",
    buttonHref: "/contact",
  },
};

/* ============================================================
   INDUSTRY · ENERGY
   ============================================================ */
export const energyData: ServicePageData = {
  seo: {
    title: "Blockchain Development for the Energy Sector | SpaceDev",
    description: "Custom blockchain infrastructure for energy trading platforms, REC tokenization, carbon credit tracking, and smart contract automation, built by SpaceDev for energy companies, utilities, and renewable energy developers.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Industry · Energy",
  title: "Blockchain Development for the Energy Sector",
  titleHtml: "Blockchain Development for<br>the Energy Sector",
  description: "SpaceDev builds blockchain infrastructure for energy companies, utilities, and renewable energy platforms that need to modernize how they trade, track, and settle energy transactions. From peer-to-peer energy trading platforms to tokenized renewable energy certificates, we deliver the technical architecture to make it work at scale.",
  relatedTags: ["rwa"],
  heroParticles: true,
  primaryCta: { label: "Discuss Your Energy Project", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "Which blockchain networks are most used in energy applications?", answer: "Enterprise energy applications typically run on permissioned Ethereum networks (such as Hyperledger Besu or Quorum) or on public EVM-compatible chains like Polygon and Ethereum mainnet, depending on privacy and settlement requirements. P2P trading applications for consumer markets often use public chains for transparency, while utility and oil and gas applications tend toward permissioned or consortium chains for data privacy reasons." },
    { question: "What is a blockchain energy trading platform and how is it different from traditional trading systems?", answer: "A blockchain energy trading platform replaces bilateral systems and manual reconciliation processes with smart contract-based settlement that executes automatically when trade conditions are met. It provides a shared, immutable ledger for all participants, eliminating the need for each party to maintain separate records and reconcile them after the fact." },
    { question: "Can blockchain integrate with existing utility and metering infrastructure?", answer: "Yes. Most production energy blockchain applications are hybrid architectures that bridge existing IoT devices, smart meters, and operational systems with a blockchain settlement layer. The blockchain does not replace the physical infrastructure, it provides the data and financial settlement layer that sits on top of it." },
    { question: "Is blockchain relevant for smaller renewable energy developers, not just large utilities?", answer: "Particularly so. Tokenization of renewable energy assets and P2P trading infrastructure are specifically advantageous for smaller developers who lack the scale to access traditional capital markets or institutional trading desks. Blockchain lowers the barrier to market participation." },
    { question: "How long does it take to build a blockchain energy platform?", answer: "Scope varies significantly. A focused application such as a tokenized REC issuance and transfer system can be designed, built, audited, and deployed in 12 to 18 weeks. A full blockchain energy trading platform with oracle integration, compliance hooks, and multi-party access management typically runs 24 to 36 weeks. We scope every project individually after a discovery engagement." },
  ],

  finalCta: {
    title: "Ready to Build Blockchain Infrastructure for Your Energy Business?",
    description: "Whether you are a renewable energy developer looking to tokenize assets, an energy retailer building a P2P trading platform, or a utility operator modernizing how you manage grid data, SpaceDev has the technical depth to deliver it.",
    buttonLabel: "Start Your Energy Blockchain Project",
    buttonHref: "/contact",
  },
};

/* ============================================================
   DEFI · STABLECOINS
   ============================================================ */
export const stablecoinData: ServicePageData = {
  seo: {
    title: "Custom Stablecoin Development for Payments, DeFi, and Enterprise Settlement | SpaceDev",
    description: "SpaceDev builds custom stablecoin solutions for fintech companies, DeFi protocols, payment platforms, and enterprises: fiat-backed, crypto-collateralized, algorithmic, and hybrid stablecoin infrastructure from architecture through production launch.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "DeFi · Stablecoins",
  title: "Custom Stablecoin Development for Payments, DeFi, and Enterprise Settlement",
  description: "A stablecoin is only as good as the system built around it. SpaceDev builds custom stablecoin solutions for fintech companies, DeFi protocols, payment platforms, and enterprises that need programmable, stable digital currency infrastructure: from initial architecture through production launch.",
  heroParticles: true,
  primaryCta: { label: "Talk to Our Stablecoin Development Team", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is the difference between a fiat-backed and a crypto-collateralized stablecoin?", answer: "A fiat-backed stablecoin holds reserves in traditional currency, typically USD or EUR, managed by a custodian or trust. A crypto-collateralized stablecoin is over-collateralized with on-chain crypto assets and uses liquidation mechanisms to maintain the peg without relying on a centralized reserve. The right choice depends on your regulatory environment, trust model, and target use case." },
    { question: "How long does stablecoin development take?", answer: "A production-ready stablecoin with minting and burning mechanics, reserve management, compliance controls, and basic wallet integration typically takes between 3 and 5 months depending on scope and the complexity of the collateral model. A Discovery Sprint at the start locks in scope and reduces surprises during build." },
    { question: "Does SpaceDev handle regulatory compliance for stablecoin issuance?", answer: "We build the technical mechanisms that enforce the compliance rules your legal advisors define: KYC/AML integrations, transfer restrictions, blacklisting, and audit trails. We are an engineering partner, not a legal or compliance firm. We work alongside your counsel but do not replace them." },
    { question: "Can you deploy the same stablecoin across multiple blockchains?", answer: "Yes. We design cross-chain deployment architecture using bridge protocols and canonical token standards. Multi-chain deployment requires careful bridge security design and liquidity coordination, which we address during the architecture phase." },
  ],

  finalCta: {
    title: "Build Your Stablecoin with SpaceDev",
    description: "Looking for a stablecoin development company to build fiat-backed, crypto-collateralized, or commodity-backed stablecoin infrastructure for payments, DeFi, or enterprise settlement? SpaceDev delivers the full stack: from economic design to production launch.",
    buttonLabel: "Talk to Our Stablecoin Development Team",
    buttonHref: "/contact",
  },
};

/* ============================================================
   LAYER 1 BLOCKCHAIN DEVELOPMENT
   ============================================================ */
export const layer1Data: ServicePageData = {
  seo: {
    title: "Custom Layer 1 Blockchain Development, From Protocol Design to Mainnet | SpaceDev",
    description: "SpaceDev builds custom Layer 1 blockchain networks (Cosmos SDK, Substrate, EVM-compatible chains, and Avalanche subnets) from consensus design and tokenomics to mainnet launch and ecosystem tooling.",
  },
  eyebrow: "Blockchain Development",
  title: "Custom Layer 1 Blockchain Development, From Protocol Design to Mainnet",
  description: "Building a Layer 1 is one of the most technically demanding projects in Web3. SpaceDev builds custom Layer 1 blockchain networks for protocols, enterprises, and product teams that need sovereign chain infrastructure: covering the full cycle from protocol design to mainnet launch.",
  relatedTags: ["layer1"],
  primaryCta: { label: "Talk to Our L1 Blockchain Development Team", href: "/contact" },

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is Layer 1 blockchain development?", answer: "Building the base protocol of a blockchain network: consensus mechanism, validator infrastructure, execution environment, native token, and governance. This is distinct from building applications on top of existing chains like Ethereum or Solana, it means creating the chain itself." },
    { question: "How long does a Layer 1 build take?", answer: "Typically 6 to 12 months from architecture to mainnet, depending on framework choice and scope. Cosmos SDK and Substrate-based approaches compress timelines compared to building from scratch. A Discovery Sprint at the start locks in framework selection and scope before any development begins." },
    { question: "What is the difference between Cosmos SDK, Substrate, and a custom chain?", answer: "Cosmos SDK is optimized for sovereign app-chains with IBC interoperability and is the most mature ecosystem for app-chain development. Substrate offers maximum modularity for frequent runtime upgrades and Polkadot ecosystem access. Custom from scratch delivers maximum protocol control at the highest cost and timeline. The right choice depends on your ecosystem targets, interoperability requirements, and long-term upgrade strategy." },
    { question: "Do you build EVM-compatible Layer 1 chains?", answer: "Yes. Using Geth-based forks, Cosmos SDK with Ethermint, or Avalanche subnets with EVM support, depending on ecosystem compatibility and performance requirements. EVM-compatible chains allow existing Solidity contracts and Ethereum developer tooling to work on your chain with minimal changes." },
  ],

  finalCta: {
    title: "Build Your Layer 1 Blockchain with SpaceDev",
    description: "If you're evaluating partners for custom blockchain network development, sovereign app-chain infrastructure, or enterprise Layer 1 deployment, SpaceDev delivers from protocol architecture to production mainnet.",
    buttonLabel: "Talk to Our Team About Your L1 Project",
    buttonHref: "/contact",
  },
};

/* ============================================================
   WEB & MOBILE
   ============================================================ */
export const webMobileData: ServicePageData = {
  seo: {
    title: "Web & Mobile App Development Services - Custom Software | SpaceDev",
    description:
      "Custom software, web apps, and mobile apps engineered for scale. React, Next.js, React Native, Python: design, ship, iterate.",
  },
  eyebrow: "Innovative Web & Mobile Development",
  title: "Innovative Web & Mobile Development",
  description:
    "Your digital product is more than software; it represents your brand in motion. SpaceDev builds web, mobile, and software solutions that fuse together engineering precision with strong design and strategy to perform, engage, and evolve with your users.",
  relatedTags: ["product-growth"],
  heroVariant: "light",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See case studies", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "What We Build",
    description: "Our experience covers everything from custom software and mobile applications to large enterprise systems.",
    style: "light-cards",
    items: [
      { number: "01", title: "Consultancy and Technical Research", description: "Analyze business models and design clear technical roadmaps based on data to eliminate bottlenecks." },
      { number: "02", title: "Web Products", description: "Build responsive, reliable dashboards, SaaS platforms, and marketplaces optimized for scalable growth." },
      { number: "03", title: "Apps", description: "Develop high-performance native (iOS/Android) and cross-platform (Flutter/React Native) apps designed for retention." },
      { number: "04", title: "Custom Software", description: "Design custom systems that automate workflows and integrate seamlessly into your existing infrastructure." },
      { number: "05", title: "UX/UI Design", description: "Create intuitive, strategic designs that ensure clarity and seamless user flows from the very first interaction." },
      { number: "06", title: "Quality Assurance", description: "Validate functionality, security, and real-world performance to ensure total confidence before launch." },
      { number: "07", title: "Front and Backend Development", description: "Ensure speed, scalability, and reliability using modern stacks like React, Next.js, Node.js, and Python." },
      { number: "08", title: "E-commerce Platforms", description: "Design end-to-end shopping experiences optimized for high conversions and customer satisfaction." },
      { number: "09", title: "Games", description: "Create immersive, performant gaming experiences using modern engines and scalable architectures." },
      { number: "10", title: "APIs", description: "Enable secure data exchange and system flexibility with robust, reliable API integrations." },
      { number: "11", title: "Enterprise Application", description: "Engineer enterprise-grade systems that support complex workflows and ensure business continuity." },
      { number: "12", title: "Content Management Systems (CMS)", description: "Empower teams with intuitive, customizable CMS solutions adaptable to any business model." },
    ],
  },

  techStack: {
    title: "Our Web 2.0 tech stack",
    subtitle: "From mobile experiences to complex enterprise software, our solutions are built with the latest and most reliable tools.",
    tone: "light",
    tools: ["react", "nodejs", "reactnative", "aws", "python", "typescript", "nestjs", "nextjs"],
  },

  caseStudySlugs: ["drata", "ubicuity", "athleteai", "twispi"],
  caseStudiesTitle: "Where Ideas Turn Into Measurable Impact",
  caseStudiesDescription: "From startups to enterprises, we turn complex challenges into products that perform. Take a closer look at how we've helped teams ship at scale.",
  caseStudiesTone: "light",

  midCta: {
    title: "Eager to create your own success story?",
    buttonLabel: "Book a call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
    external: true,
  },

  benefits: {
    title: "Benefits of Custom Software & App Development",
    description: "Custom software can redefine how a business operates. With the right technology, design, and strategy, brands gain speed, visibility, and customer loyalty. Drive growth, simplify operations, and scale confidently with our software development and web and mobile app development services.",
    items: [
      { icon: "chart",   title: "Scalable Growth", description: "Every architecture is built to handle growth in users, data, and functionality." },
      { icon: "heart",   title: "Enhanced User Experience", description: "Apps focused on speed, simplicity, and flow; users find value in every interaction and return more often." },
      { icon: "globe",   title: "Broader Reach", description: "Through mobile and web app development, brands connect with audiences across platforms and devices." },
      { icon: "rocket",  title: "Faster Go-to-Market", description: "Agile development moves your app from idea to release quickly, without losing quality or stability." },
      { icon: "bolt",    title: "Improved Efficiency", description: "Web and mobile solutions automate workflows and improve collaboration, freeing teams to focus on strategy." },
      { icon: "tag",     title: "Cost-Effective Development", description: "Modern frameworks and cross-platform builds reduce maintenance costs over the long run." },
    ],
  },

  whyUs: {
    title: "Why Choose SpaceDev as Your Tech Partner",
    description: "Building digital products that stand out require collaboration, understanding business, and anticipating challenges.",
    items: [
      { title: "Fast MVP Delivery", description: "We move ideas into action quickly. Our agile approach allows you to validate concepts, attract investors, and reach users faster without compromising quality or scalability." },
      { title: "IT Talent That Adapts to You", description: "From UI/UX designers to backend engineers, our teams bring technical depth and creative precision. Need to expand capacity? Scale instantly with our IT staff augmentation model." },
      { title: "High Development Quality", description: "We focus on clean architecture, stable frameworks, and maintainable code so your product performs flawlessly across devices and updates." },
      { title: "Real Results, Not Buzzwords", description: "We measure success in growth metrics, not technical jargon. From conversion rates to user retention, our solutions are built to deliver visible outcomes." },
      { title: "Transparent Collaboration", description: "We keep communication open and structured. With dedicated project managers and real-time updates, you're always in control of your project's progress." },
      { title: "Post-Launch Partnership", description: "Our role doesn't end at deployment. We continue to monitor, update, and refine your product, ensuring it stays secure, scalable, and ready for what's next." },
    ],
  },

  faqs: [
    { question: "What's the difference between web and mobile app development?", answer: "Web apps run in browsers and reach the broadest audience, while mobile apps target iOS and Android, offering tighter integration with the device, push notifications, and offline-first patterns. Most modern products need both." },
    { question: "How long does it take to develop an app?", answer: "An MVP typically ships in 8–14 weeks. A full production release with multiple platforms and integrations is usually 4–9 months." },
    { question: "What technologies do you use for app development?", answer: "React, Next.js, Node.js, TypeScript, React Native, Flutter, Python, Go, and PostgreSQL are our day-to-day stack, plus AWS / Vercel / GCP for infrastructure." },
    { question: "Do you offer web-based mobile app development?", answer: "Yes. We ship Progressive Web Apps when reach matters more than device integration, and React Native or native code when performance and platform features matter more." },
    { question: "What are your web and mobile app development services?", answer: "We cover the full lifecycle: consultancy, UX/UI design, frontend and backend development, mobile (native and cross-platform) apps, QA, integrations, and post-launch support." },
    { question: "Do you provide post-launch maintenance and updates?", answer: "Always. Most clients continue with us on a monthly retainer for monitoring, updates, and ongoing iteration." },
    { question: "Can you help with scaling an existing product?", answer: "Yes. We frequently come in to refactor architecture, improve performance, ship missing features, or rebuild a product that has outgrown its original codebase." },
    { question: "Do you work with startups and enterprises alike?", answer: "Yes, from seed-stage MVPs to enterprise SaaS deployments. Our process scales to both." },
  ],

  finalCta: {
    title: "Build apps that shape the future",
    description: "Every product begins with an idea, and the right team to turn it into reality. Our developers and designers work closely with your team to build fast, secure, and user-focused digital products that drive growth and engagement. Let's bring your vision to life, with technology built to last.",
    buttonLabel: "Start your project",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
    external: true,
  },
};

/* ============================================================
   STAFF AUGMENTATION
   ============================================================ */
export const staffAugData: ServicePageData = {
  seo: {
    title: "IT Staff Augmentation Services - Hire Top Tech Talent | SpaceDev",
    description: "Pre-vetted developers, designers, and specialists ready in under 2 weeks. Scale your team without long hiring cycles or overhead costs.",
  },
  eyebrow: "IT Staff Augmentation Services",
  title: "IT Staff Augmentation Services",
  description:
    "Access pre-vetted engineers, designers, and specialists who integrate effortlessly with your existing setup. Scale your project without the weight of long hiring cycles or overhead costs.",
  relatedTags: ["product-growth"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  process: {
    eyebrow: "How it works",
    title: "4 Steps to Build Your Dream Team",
    description: "SpaceDev's IT staff augmentation model is designed for speed, precision, and effortless collaboration. Here's how we make it happen:",
    items: [
      { number: "1", title: "Identify Your Needs", description: "We begin by understanding your goals, technical requirements, and timelines to match the right talent to your project." },
      { number: "2", title: "Candidate Screening", description: "Your project is matched with experts from our in-house team. Each professional is proven, ready to integrate fast, and deliver results from day one." },
      { number: "3", title: "Welcome Aboard", description: "Once selected, engineers integrate quickly into your environment, adapting to your tools, processes, and time zones from the first week." },
      { number: "4", title: "Management and Scaling", description: "As your project evolves, we help you scale your team up or down easily. Our flexible structure gives you agility without long-term commitments. Most teams are ready to start within one to two weeks." },
    ],
    variant: "sticky-light",
  },

  benefits: {
    title: "Benefits of IT Staff Augmentation",
    description: "IT staff augmentation gives your business the flexibility and skill depth it needs to stay ahead, without the cost and complexity of permanent hiring.",
    layout: "4-3",
    items: [
      { title: "Cost Efficiency", description: "Skip recruitment, training, and benefits costs. Access top-tier talent without heavy financial commitments.", icon: "tag" },
      { title: "Flexibility to Scale", description: "Add or reduce resources at any stage to keep your workforce perfectly aligned with project needs.", icon: "bolt" },
      { title: "Assured Quality", description: "Every developer and designer passes through multiple evaluation layers for technical and communication skills.", icon: "check" },
      { title: "Access to Global Expertise", description: "Tap into an international pool of specialists across blockchain, cloud, AI, and full-stack development.", icon: "globe" },
      { title: "Enhanced Productivity", description: "Fill skill gaps quickly, eliminate delays, and bring fresh perspectives that accelerate delivery.", icon: "rocket" },
      { title: "Risk Reduction", description: "Structured hiring and monitoring ensures minimal onboarding risk and better resource utilization.", icon: "shield" },
      { title: "Focus on Core Business", description: "With the right experts handling development, your internal team focuses on strategy, growth, and innovation.", icon: "chart" },
    ],
  },
  caseStudiesTone: "light",

  whyUs: {
    title: "Why companies choose SpaceDev",
    description: "Businesses partner with SpaceDev when they need reliable talent, seamless collaboration, and results that create impact.",
    items: [
      { title: "Fast Turnaround", description: "Expand your team within days instead of months; our network of vetted developers ensures no delay in project delivery." },
      { title: "Proven IT Talent", description: "Each professional we recommend has deep expertise across web3, blockchain, AI, cloud, and full-stack development." },
      { title: "Transparent Model", description: "No hidden charges or unclear terms. Pricing and engagement models are straightforward, keeping you confident at every stage." },
      { title: "Seamless Integration", description: "Our engineers and designers adapt to your tools, processes, and team culture; collaboration stays consistent." },
      { title: "Flexible Engagements", description: "Choose full-time, part-time, or hourly models. Scaling resources is as simple as adjusting a schedule." },
      { title: "Results That Matter", description: "Every engagement is built around outcomes: faster releases, improved quality, higher productivity." },
    ],
  },

  faqs: [
    { question: "How is staff augmentation different from outsourcing?", answer: "Staff augmentation gives you full control over your project and extended access to skilled professionals who work directly with your internal team. Outsourcing, on the other hand, hands over project ownership to an external vendor." },
    { question: "How quickly can I hire through SpaceDev?", answer: "Most clients onboard their first developer within a week. Our process is streamlined to match the right talent to your requirements in the shortest time possible." },
    { question: "What kind of skills and roles can I hire for?", answer: "You can hire frontend and backend developers, mobile app engineers, DevOps experts, blockchain developers, QA testers, UI/UX designers, and project managers; across a variety of technologies and frameworks." },
    { question: "Can I scale my team as the project grows?", answer: "Yes. You can increase or reduce your team size anytime. Our affordable IT staff augmentation services are designed to adjust quickly to your evolving project needs." },
    { question: "How do you ensure quality and accountability?", answer: "All professionals go through technical and cultural assessments. We also provide continuous monitoring, transparent reporting, and regular feedback sessions to maintain consistent quality." },
    { question: "Do you work with both startups and enterprises?", answer: "Absolutely. Our top IT staff augmentation services cater to businesses of every size, from startups testing new ideas to large enterprises building complex digital ecosystems." },
  ],

  footerMarquee: "IT Staff Augmentation tailored to your needs.",

  finalCta: {
    title: "Build your dream tech team with SpaceDev",
    description: "Finding the right people shouldn't slow your business down. Get access to pre-vetted developers and specialists who integrate into your projects effortlessly. Scale your workforce, meet deadlines, and maintain quality without the overhead of traditional hiring.\n\nThe talent you need is ready. Hire, build, and grow with us.",
    buttonLabel: "Hire talent now",
    buttonHref: "/contact",
  },
};

/* ============================================================
   PRODUCT DISCOVERY
   ============================================================ */
export const productDiscoveryData: ServicePageData = {
  seo: {
    title: "Product Discovery: A Strategic Approach by SpaceDev",
    description: "Validate ideas, define MVPs, and design roadmaps before writing a single line of code. Six discovery sprints tailored to your stage.",
  },
  eyebrow: "Product Discovery",
  title: "Product Discovery",
  description: "We transform your project ideas into tangible success!",
  relatedTags: ["product-growth"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "Book a discovery call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  finalCta: {
    title: "Not sure how Product Discovery fits your project?",
    description: "Connect with us to explore your options.",
    buttonLabel: "Get started!",
    buttonHref: "/contact",
  },
};

/* ============================================================
   BLOCKAUDIT
   ============================================================ */
export const blockAuditData: ServicePageData = {
  seo: {
    title: "BlockAudit: Smart Contract & Blockchain Security | SpaceDev",
    description: "Smart contract audits and SECOPS reviews for Web3 projects. Static + manual analysis, formal verification, and post-launch monitoring with OpenZeppelin Defender.",
  },
  eyebrow: "BlockAudit",
  title: "BlockAudit: Smart Contract & Blockchain Security",
  description:
    "Security is vital. Our expert smart contract audit ensures safe deployment, monitoring upgrade and management of Ethereum applications for startups and enterprises.",
  relatedTags: ["smart-contracts"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  process: {
    eyebrow: "How it works",
    title: "Smart Contract Audit: How It Works",
    variant: "sticky-dark",
    items: [
      { number: "01", title: "Assessment", description: "We thoroughly evaluate your smart contract's business logic and collaborate with you to identify key security properties that need testing." },
      { number: "02", title: "Review", description: "Our team runs multiple, advanced analysis processes on your code in parallel, followed by an in-depth manual review to detect any hidden vulnerabilities or anomalies." },
      { number: "03", title: "Delivery", description: "We provide a detailed report outlining identified vulnerabilities, expert recommendations for mitigation, and options for ongoing security verification to keep your project safe." },
    ],
  },

  offers: {
    eyebrow: "How we ensure security",
    title: "How We Ensure Security",
    style: "dark-cards",
    ctaButton: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },
    items: [
      { number: "01", title: "Monitoring", description: "We help you setting up a top-notch monitoring system leveraging OpenZeppelin defender, so you can set certain security action triggers depending on strange activities or balance changes." },
      { number: "02", title: "SEC OPS Audit", description: "More hacks occur due to social engineering than smart contract exploiting. Our audits ensure not only the technical security and correctness of smart contracts but also the management security (SECOPS), verifying that all participants follow strong protocols to reduce vulnerabilities." },
    ],
  },

  benefits: {
    title: "Benefits of a Smart Contract Audit and Diligence",
    layout: "4col",
    items: [
      { icon: "lock",  title: "Prevent Critical Vulnerabilities", description: "Conducting a smart contract audit early in development helps avoid major security flaws that could lead to costly issues after launch." },
      { icon: "eye",   title: "Thorough Expert Review", description: "Experienced auditors manually inspect your code, ensuring that no vulnerabilities or false positives slip through." },
      { icon: "chart", title: "Comprehensive Reports", description: "Receive in-depth analytics that include a detailed summary of vulnerabilities, potential risks, and clear recommendations for mitigation." },
      { icon: "shield", title: "Ongoing Security Monitoring", description: "Regular surveillance and periodic assessments help detect new vulnerabilities, ensuring your smart contracts remain secure even as threats evolve." },
    ],
  },

  whyUs: {
    title: "Why choose SpaceDev to be your tech partner?",
    style: "4col",
    items: [
      { title: "Fast MVP", description: "We stand out as an ideal technological partner for its ability to deliver rapid MVPs (Minimum Viable Products), providing swift and efficient solutions to bring your ideas to life." },
      { title: "IT Talent", description: "Our team excels as a technological partner due to its exceptional blockchain talent, ensuring innovative solutions and expert guidance for your projects." },
      { title: "High Development Quality", description: "We guarantee high development quality, ensuring that your projects benefit from top-notch expertise, precision, and excellence in every phase of the development process." },
      { title: "Real Results", description: "We deliver real results, leveraging expertise and innovation to turn your technological aspirations into tangible success stories." },
    ],
  },

  techStack: {
    title: "Trusted across every chain",
    subtitle: "We audit smart contracts across the most used networks and frameworks.",
    tone: "dark",
    tools: ["ethereum", "solana", "solidity", "rust", "wagmi", "hardhat", "ethers", "openzeppelin"],
  },

  faqs: [
    { question: "What does a smart contract audit actually check?", answer: `Business logic correctness, access control, reentrancy and other known vulnerability classes, and gas efficiency. Our review process follows the vulnerability categories documented in the <a href="https://owasp.org/www-project-smart-contract-top-10/" target="_blank" rel="noopener noreferrer" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">OWASP Smart Contract Top 10</a>.` },
    { question: "Do you follow public security standards?", answer: `Yes. Our audit methodology is grounded in established references, including <a href="https://ethereum.org/en/developers/docs/smart-contracts/security/" target="_blank" rel="noopener noreferrer" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Ethereum's own smart contract security guidelines</a> and the <a href="https://csrc.nist.gov/projects/blockchain" target="_blank" rel="noopener noreferrer" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">NIST blockchain research program</a>, rather than an internal checklist alone.` },
    { question: "How long does a smart contract audit take?", answer: "A single-contract audit typically takes 1 to 2 weeks. Multi-contract systems or complex DeFi protocols run 3 to 6 weeks depending on scope, confirmed during the assessment phase." },
    { question: "What happens after the audit is delivered?", answer: "You get a detailed report with findings, severity ratings, and remediation guidance. We also set up ongoing monitoring with OpenZeppelin Defender so new vulnerabilities are caught after launch, not just at the point-in-time of the audit." },
  ],

  finalCta: {
    title: "Smart contract audits protect your future. Stay secure.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },

  footerMarquee: "Smart contract audits that protect your future.",
  footerMarqueeTheme: "dark",
};

/* ============================================================
   INDUSTRY · REAL ESTATE
   ============================================================ */
export const realEstateData: ServicePageData = {
  seo: {
    title: "Blockchain Development for Real Estate | PropTech & Web3 Solutions | SpaceDev",
    description: "Blockchain development services for real estate companies: smart contracts, tokenization platforms, property registries, and DeFi mortgage solutions. Let's build.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Industry · Real Estate",
  title: "Blockchain Development Services for Real Estate Companies",
  description: "SpaceDev builds blockchain solutions for real estate firms, proptech platforms, and investment vehicles that need more than a pilot. We cover the full stack, from smart contract architecture to investor-facing platforms, with a delivery model built around your business constraints.",
  primaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },
  secondaryCta: { label: "See our work", href: "/our-work" },
  compactHeroTitle: true,
  relatedTags: ["rwa", "tokenization"],
  heroParticles: true,
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What blockchain services do real estate companies typically need?", answer: "Most real estate blockchain projects involve some combination of smart contract development, token issuance infrastructure, investor portals, compliance controls, and payment rails. The right scope depends on whether you are tokenizing a single asset, building a marketplace, or replacing legacy title management infrastructure." },
    { question: "Is blockchain legally compliant for real estate transactions?", answer: "Compliance is built at the contract level, not assumed. We implement on-chain transfer restrictions, KYC/AML integrations, and accreditation checks that reflect the legal framework your advisors define. Regulatory requirements vary by jurisdiction and asset type, which is why every engagement starts with a Discovery Sprint." },
    { question: "What is the difference between a tokenized real estate platform and a property registry on blockchain?", answer: "A tokenized platform represents ownership or economic rights as tradeable digital tokens. A property registry focuses on immutable, auditable title records without necessarily creating liquid instruments. Many platforms combine both layers." },
    { question: "How long does it take to build a blockchain platform for real estate?", answer: "A focused MVP can be ready in 8 to 12 weeks. Full platforms with compliance infrastructure, investor portals, and payment integrations require a scoping phase first. Product Discovery gives you accurate timelines before any commitment." },
  ],

  finalCta: {
    title: "Build Your Real Estate Blockchain Platform with SpaceDev",
    description: "SpaceDev brings blockchain development expertise for real estate companies that need production-grade systems, not demos. From architecture to launch, we are with you at every step.",
    buttonLabel: "Talk to our blockchain team",
    buttonHref: "/contact",
  },
};

/* ============================================================
   INDUSTRY · WEB3 COMPLIANCE
   ============================================================ */
export const complianceWeb3Data: ServicePageData = {
  seo: {
    title: "Web3 Compliance Development Services | KYC, AML & Regulatory Infrastructure | SpaceDev",
    description: "Build compliant Web3 products from day one. SpaceDev develops on-chain KYC/AML, transfer restriction engines, decentralized identity, and regulatory-ready smart contracts.",
  },
  updatedAt: "2026-07-15",
  eyebrow: "Industry · Compliance",
  title: "Web3 Compliance Development Services for Regulated Blockchain Products",
  description: "SpaceDev builds the technical compliance infrastructure that Web3 projects need to operate in regulated markets. KYC/AML integrations, on-chain transfer restrictions, decentralized identity systems, and regulatory-ready smart contracts, engineered from day one, not retrofitted after launch.",
  primaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },
  secondaryCta: { label: "See our work", href: "/our-work" },
  compactHeroTitle: true,
  relatedTags: ["compliance", "smart-contracts"],
  heroParticles: true,
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is Web3 compliance infrastructure?", answer: "It refers to the technical systems that enforce regulatory requirements at the protocol and contract level — KYC/AML integrations, transfer restrictions, transaction monitoring, and audit trails built into the blockchain product itself, not managed externally after the fact." },
    { question: "Is KYC/AML required for DeFi platforms?", answer: "Regulatory exposure depends on jurisdiction and product type. FATF guidance classifies many DeFi interfaces as VASPs subject to AML obligations. Building compliant DeFi infrastructure from day one is significantly less costly than retrofitting it under regulatory pressure." },
    { question: "What is the difference between on-chain and off-chain compliance?", answer: "Off-chain compliance relies on front-end controls and centralized databases. On-chain compliance enforces rules directly in the smart contract, so restrictions cannot be bypassed by interacting with the contract directly. For regulated token platforms, on-chain enforcement is the technically defensible standard." },
    { question: "What token standards support compliance controls?", answer: "ERC-1400 and ERC-3643 (T-REX) are the primary security token standards used for compliant issuance. They support transfer restrictions, investor allowlists, forced transfers for regulatory action, and token recovery mechanisms." },
    { question: "Do you provide legal or regulatory advice?", answer: "No. SpaceDev builds the technical infrastructure. We work alongside your legal and compliance advisors to implement the controls they define, correctly, at the contract and system level." },
  ],

  finalCta: {
    title: "Build Your Web3 Compliance Infrastructure with SpaceDev",
    description: "Compliance built into your product from the start is a competitive advantage, not just a legal obligation. Talk to our team about what your regulatory environment requires and how we build it.",
    buttonLabel: "Talk to our team",
    buttonHref: "/contact",
  },
};

/* ============================================================
   DAO DEVELOPMENT
   ============================================================ */
export const daoDevelopmentData: ServicePageData = {
  seo: {
    title: "DAO Development Services | Custom On-Chain Governance & Smart Contracts | SpaceDev",
    description: "SpaceDev builds custom DAO platforms with audited smart contracts, on-chain governance, treasury management, and tokenomics.",
  },
  eyebrow: "Sub-service · Blockchain",
  compactHeroTitle: true,
  title: "DAO Development Services for Organizations That Need Real On-Chain Governance",
  description: "We design and develop custom DAO platforms with the governance architecture, smart contract infrastructure, and treasury management systems that decentralized organizations need to thrive. You get production-grade systems built around your specific governance model, not a generic template.",
  primaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar", external: true },
  secondaryCta: { label: "See our work", href: "/our-work" },
  relatedTags: ["blockchain", "web3-infrastructure"],
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What does a DAO development service include?", answer: "A complete DAO development service includes governance smart contract design, token development, treasury management infrastructure, voting mechanism implementation, member portal development, security review, and post-launch support. The exact scope depends on whether the project needs a simple multi-signature governance structure or a full protocol DAO with on-chain execution." },
    { question: "How long does it take to build a DAO?", answer: `A basic DAO with governance contracts and a member portal can be delivered in 6 to 10 weeks. Full protocol DAOs with custom voting systems, treasury automation, and dApp integration require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any commitment.` },
    { question: "What is the difference between on-chain and off-chain governance?", answer: "Off-chain governance uses tools like Snapshot for signaling, with a human or multi-sig executing the result. On-chain governance enforces proposals directly through smart contracts with no human intermediary in the execution path. Most production DAOs use a combination: off-chain signaling for low-stakes decisions and on-chain execution for treasury and parameter changes." },
    { question: "Which blockchain networks do you build DAOs on?", answer: "We build on Ethereum, Polygon, Arbitrum, Optimism, Avalanche, and BNB Chain. Network selection depends on your community size, transaction cost tolerance, and ecosystem integrations." },
    { question: "Can you audit an existing DAO's smart contracts?", answer: `Yes. <a href="/blockaudit-smart-contract-and-blockchain-security" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">BlockAudit</a> handles independent DAO smart contract audits, with specific focus on governance attack vectors including vote manipulation, flash loan governance attacks, proposal griefing, and treasury access exploits.` },
    { question: "Can you integrate with existing governance tools like Tally or Gnosis Safe?", answer: "Yes. We build custom implementations and integrate with existing governance infrastructure including Tally, Gnosis Safe, Snapshot, and Governor Bravo, depending on what your governance model requires." },
  ],

  finalCta: {
    title: "Getting governance right from day one can mean the difference between a DAO that operates effectively and one that stalls at its first contentious proposal.",
    description: "Talk to our team about your governance model and the type of solution your project needs.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
    external: true,
  },
};

/* ============================================================
   WHITE LABEL CRYPTO EXCHANGE
   ============================================================ */
export const whiteLabelExchangeData: ServicePageData = {
  seo: {
    title: "White Label Crypto Exchange Development Services | Custom Trading Platforms | SpaceDev",
    description: "SpaceDev builds custom white-label crypto exchange platforms with spot and derivatives trading, multi-chain support, KYC/AML, and liquidity integrations, all designed for a fast launch.",
  },
  eyebrow: "Sub-service · Blockchain",
  compactHeroTitle: true,
  title: "White Label Crypto Exchange Development Built for Speed, Security, and Scale",
  description: "SpaceDev delivers custom white-label cryptocurrency exchange platforms for fintech companies, Web3 startups, and financial institutions that need a production-ready trading platform without spending 12 months building one from scratch. We develop the trading engine, order management system, compliance layer, and user-facing platform as one integrated product tailored to your business model, rather than a generic template with your logo added.",
  primaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar", external: true },
  secondaryCta: { label: "See our work", href: "/our-work" },
  relatedTags: ["blockchain", "web3-infrastructure"],
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is a white label crypto exchange?", answer: "A white label crypto exchange is a trading platform built and deployed under your brand, using either a pre-built software base or custom development. Pre-built solutions offer speed but limited control over architecture, security, and compliance logic. Custom-built white label platforms, like those SpaceDev delivers, give you full ownership of the codebase and the ability to evolve the product without depending on a third-party vendor." },
    { question: "How long does it take to build a white label crypto exchange?", answer: `A production-ready MVP with core trading functionality can be delivered in 8 to 16 weeks depending on exchange type and compliance requirements. Full platforms with derivatives trading, institutional-grade infrastructure, and multi-jurisdiction compliance require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any budget commitment.` },
    { question: "What is the difference between a CEX and a DEX?", answer: "A centralized exchange (CEX) holds user funds in custody and relies on an off-chain matching engine for high-speed trading. A decentralized exchange (DEX) uses smart contracts for on-chain order matching or AMM logic, allowing users to retain custody of their assets. Many institutional-facing projects now use hybrid architectures that combine off-chain performance with the transparency of on-chain settlement." },
    { question: "Do you provide liquidity for the exchange?", answer: "SpaceDev integrates your platform with liquidity providers and aggregator APIs, including Chainlink price feeds, 0x Protocol, and custom connections to market makers. We build the technical integration layer, while liquidity relationships remain governed by your commercial agreements." },
    { question: "Do you support fiat on and off-ramps?", answer: "Yes. We integrate fiat gateway providers, stablecoin settlement rails, and banking connections into the exchange onboarding and withdrawal flow. The specific providers depend on your target markets and regulatory setup." },
    { question: "Who owns the codebase after development?", answer: "You do. SpaceDev delivers a fully custom, client-owned codebase. There are no ongoing licensing fees, no vendor lock-in, and no dependency on our infrastructure to keep your exchange running." },
  ],

  finalCta: {
    title: "Build Your Crypto Exchange Platform with SpaceDev",
    description: "From architecture to production, SpaceDev has delivered exchange infrastructure that operates in real markets with real volume. Talk to our team about what your platform needs to launch and scale.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
    external: true,
  },
};

/* ============================================================
   CRYPTO TOKEN DEVELOPMENT
   ============================================================ */
export const cryptoTokenDevData: ServicePageData = {
  seo: {
    title: "Crypto Token Development Services | Custom Tokenomics & Smart Contracts | SpaceDev",
    description: "SpaceDev builds custom crypto tokens with carefully designed tokenomics, audited smart contracts, and multi-chain deployment. Our team develops utility, governance, security, and DeFi tokens tailored to each project.",
  },
  eyebrow: "Sub-service · Blockchain",
  compactHeroTitle: true,
  title: "Crypto Token Development Services Built Around Your Business Model",
  description: "SpaceDev designs and deploys custom cryptocurrency tokens for projects that need more than a contract built from a template. We cover the full token lifecycle: tokenomics design, smart contract development, multi-chain deployment, compliance controls, and post-launch support. Every token is developed around the specific role it plays within your product ecosystem.",
  primaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar", external: true },
  secondaryCta: { label: "See our work", href: "/our-work" },
  relatedTags: ["blockchain", "tokenization"],
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is the difference between a coin and a token?", answer: "A coin operates on its own blockchain (Bitcoin, Ether). A crypto token is created on top of an existing blockchain using a smart contract, and depends on that network for transaction processing and security. Most projects build tokens rather than launching their own blockchain because it is faster, cheaper, and gives access to existing ecosystem liquidity and tooling." },
    { question: "How long does custom crypto token development take?", answer: `A standard utility or governance token with vesting, minting, and burning mechanics can be deployed in 3 to 6 weeks, including security review. More complex tokens, such as stablecoins, security tokens with compliance controls, or DeFi tokens with multi-contract reward systems, require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any commitment.` },
    { question: "What makes a tokenomics model sustainable?", answer: "Sustainable tokenomics balances real demand for the token against its supply emission rate. Tokens that are only held for speculation collapse when sentiment shifts. Tokens with genuine utility demand, where users need the token to access the platform, participate in governance, or earn protocol rewards, create organic price support that does not depend on new buyer inflows." },
    { question: "Which blockchain should I launch my token on?", answer: "Network selection depends on your target user base, transaction cost tolerance, and ecosystem integrations. Ethereum offers maximum credibility and DeFi composability. Solana offers high throughput and low fees. Polygon and Arbitrum offer EVM compatibility with L2 cost efficiency. We select the right network based on your product requirements, not a default preference." },
    { question: "Do you audit the token smart contract before launch?", answer: `Yes. Internal security review is embedded in every token development engagement. For projects requiring independent third-party validation, <a href="/blockaudit-smart-contract-and-blockchain-security" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">BlockAudit</a> provides dedicated token smart contract audits before mainnet deployment.` },
    { question: "Can you help with token listing on exchanges?", answer: "We support the technical requirements for both DEX liquidity pool setup and CEX listing readiness, including contract verification, metadata standards, and documentation. The commercial relationships with exchanges are your responsibility." },
  ],

  finalCta: {
    title: "A well-designed token is a product asset. A poorly designed one is a liability that is hard to fix once it is live.",
    description: "Talk to our team about your token model and what it needs to work in production.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
    external: true,
  },
};

/* ============================================================
   ASSET TOKENIZATION SUB-PAGES: Stocks, Gold, Bonds, Carbon Credits
   ============================================================ */
export const stockTokenizationData: ServicePageData = {
  seo: {
    title: "Stock Tokenization Development Services | Tokenized Equity Platforms | SpaceDev",
    description: "SpaceDev builds stock tokenization platforms: on-chain equity issuance, ERC-3643 smart contracts, compliance infrastructure, and secondary market systems.",
  },
  eyebrow: "Sub-service · Asset Tokenization",
  compactHeroTitle: true,
  title: "Stock Tokenization Development Services for Equity Platforms Built to Operate in Real Markets",
  description: "SpaceDev designs and builds tokenized stock platforms for fintech companies, broker-dealers, and capital markets infrastructure teams that need production-grade equity tokenization, not a proof of concept. We cover the full technical stack: on-chain equity issuance, compliant smart contracts, investor portals, and secondary market integrations.",
  relatedTags: ["rwa", "tokenization"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/our-work" },
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is stock tokenization?", answer: "Stock tokenization is the process of representing company shares as digital tokens on a blockchain. Each token corresponds to ownership rights, economic exposure, or both, depending on the model. Equity-backed tokens represent a direct claim on real shares held in regulated custody. Synthetic tokens track stock prices via oracle feeds without holding the underlying security." },
    { question: "What is the difference between ERC-1400 and ERC-3643 for stock tokenization?", answer: "Both standards are designed for compliant security token issuance on Ethereum and EVM networks. ERC-1400 was the earlier standard developed by Polymath, providing a framework for transfer restrictions and document management. ERC-3643 (T-REX), developed by Tokeny, is now the more widely adopted standard among institutional-grade platforms: it is the foundation used by Securitize, which manages tokenized funds for BlackRock, Apollo, and KKR. Most new equity token platforms default to ERC-3643 today." },
    { question: "Do tokenized stocks give holders the same rights as traditional shareholders?", answer: "It depends on the model. Issuer-sponsored tokens, where the company itself tokenizes its own shares, can convey the same voting rights, dividend entitlements, and legal claim as traditional shares. Third-party equity-backed tokens, issued by a platform holding shares in custody, typically provide economic exposure but not voting rights. Synthetic tokens provide neither, only price exposure." },
    { question: "What regulatory approvals are needed to launch a tokenized stock platform?", answer: `Requirements vary by jurisdiction and model. In the US, equity-backed platforms typically require the issuer or token operator to be an SEC-registered transfer agent or work with one, and secondary trading may require an ATS license or broker-dealer registration. We build the technical infrastructure your legal team defines. We do not provide legal or regulatory advice. For regulatory guidance on tokenized securities, the <a href="https://www.sec.gov/about/crypto-task-force" target="_blank" rel="noopener noreferrer" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">SEC's Crypto Task Force</a> is a useful reference for US-based platforms.` },
    { question: "Can tokenized stocks be traded on DeFi protocols?", answer: "Equity-backed tokens with compliance controls can be structured for DeFi composability while maintaining transfer restrictions. Platforms like Ondo Finance and xStocks (Backed Finance) have demonstrated this at scale, with tokens usable in liquidity pools on Solana. The technical implementation requires careful design of the compliance layer to allow DeFi interaction while still enforcing KYC/AML restrictions." },
    { question: "How long does it take to build a tokenized stock platform?", answer: `A focused MVP with issuance contracts, KYC onboarding, and an investor portal can be ready in 10 to 16 weeks. Full platforms with custody integrations, corporate actions automation, and secondary market connectivity require a longer scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any development commitment.` },
  ],

  finalCta: {
    title: "Build Your Stock Tokenization Platform with SpaceDev",
    description: "The infrastructure for on-chain equity markets is being built now, by NYSE, Nasdaq, BlackRock, and the development teams that support them. If your company is building in this space, the technical and compliance complexity is real, but it is solvable with the right partner.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/web-meetings-calendar",
    external: true,
  },
};

export const goldTokenizationData: ServicePageData = {
  seo: {
    title: "Gold Tokenization Development Services | Tokenized Gold Platforms | SpaceDev",
    description: "SpaceDev builds gold tokenization platforms: vault-backed token issuance, Proof of Reserves, smart contracts, KYC/AML, and DeFi integrations. Custom, not templated.",
  },
  eyebrow: "Sub-service · Asset Tokenization",
  compactHeroTitle: true,
  title: "Gold Tokenization Development Services for Platforms Built on Real Custody Infrastructure",
  description: "SpaceDev designs and builds gold tokenization platforms for bullion companies, commodity funds, fintech firms, and digital asset issuers that need a production-grade system, not a white-label template with your logo on it. We cover the full stack: token issuance contracts, vault custody integration, Proof of Reserves verification, KYC/AML onboarding, investor portals, and DeFi composability.",
  relatedTags: ["rwa", "tokenization"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/our-work" },
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is gold tokenization?", answer: "Gold tokenization is the process of representing ownership of physical gold as a digital token on a blockchain. Each token corresponds to a specific quantity of gold held in an institutional vault. Token holders can buy, sell, transfer, and in many cases redeem their tokens for physical gold or cash equivalent, without needing to store or transport physical bullion themselves." },
    { question: "How does a gold-backed token maintain its 1:1 backing?", answer: "The platform mints tokens only when a corresponding quantity of gold is confirmed in custody, and burns tokens when gold is redeemed. Proof of Reserves systems, typically implemented via Chainlink PoR, provide on-chain verification that the total minted supply never exceeds the verified vault holdings. This confirmation is publicly accessible and auditable, unlike periodic third-party reports that can be manipulated or delayed." },
    { question: "What is the difference between PAXG, XAUt, and a custom gold token platform?", answer: "PAX Gold (PAXG) and Tether Gold (XAUt) are pre-existing tokenized gold products operated by their respective issuers. Building a custom platform means you control the issuance, the custody arrangements, the fee structure, the redemption terms, and the DeFi integrations. The tradeoff is that you build liquidity from scratch rather than inheriting an established market. Custom platforms make sense for bullion dealers, commodity funds, and fintechs that want to offer gold tokenization under their own brand and operational model." },
    { question: "Do gold tokens require regulatory approval?", answer: "This depends on jurisdiction and token structure. In the US, gold-backed tokens typically fall under CFTC commodity regulation rather than SEC securities oversight, unless structured to provide investment returns beyond price exposure. In the EU, the MiCA framework applies to asset-referenced tokens. In Singapore and the UAE, specific licensing applies to digital payment tokens backed by commodities. SpaceDev builds the technical infrastructure your legal advisors define. We do not provide regulatory or legal advice." },
    { question: "Can tokenized gold be used in DeFi protocols?", answer: "Yes. DeFi-composable gold tokens can be used as collateral in lending protocols, traded in liquidity pools on decentralized exchanges, and bridged across chains for use in different ecosystems. The key architectural challenge is maintaining compliance controls on the primary issuance layer while allowing DeFi interactions on the secondary market. This is a design decision that must be made at the start of the project, not after launch." },
    { question: "How long does it take to build a gold tokenization platform?", answer: `A focused MVP with token contracts, Proof of Reserves integration, basic KYC onboarding, and an investor portal can be delivered in 10 to 16 weeks. Full platforms with multi-chain deployment, DeFi integrations, and institutional-grade custody connectivity require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any development commitment.` },
  ],

  finalCta: {
    title: "Build Your Gold Tokenization Platform with SpaceDev",
    description: "The infrastructure layer for tokenized precious metals is being built by serious financial companies, not speculative token issuers. If your organization has gold in custody and a clear distribution model, the technical architecture to bring it on-chain is well understood.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};

export const bondTokenizationData: ServicePageData = {
  seo: {
    title: "Bond Tokenization Development Services | Digital Bond Issuance Platforms | SpaceDev",
    description: "SpaceDev builds bond tokenization platforms: on-chain issuance, automated coupon payments, T+0 settlement, ERC-1400 smart contracts, and KYC/AML infrastructure.",
  },
  eyebrow: "Sub-service · Asset Tokenization",
  compactHeroTitle: true,
  title: "Bond Tokenization Development Services for Digital Fixed-Income Platforms",
  description: "SpaceDev designs and builds bond tokenization platforms for financial institutions, corporate issuers, and fintech companies that need production-grade infrastructure for digital bond issuance, not a SaaS subscription with limited customization. We cover the full bond lifecycle on-chain: issuance contracts, automated coupon payments, atomic settlement, compliance controls, investor portals, and secondary market integrations.",
  relatedTags: ["rwa", "tokenization"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/our-work" },
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is bond tokenization?", answer: "Bond tokenization is the process of representing a debt instrument as a digital token on a blockchain. The smart contract encodes the bond's terms, including face value, maturity date, coupon rate, and payment schedule, and automates execution of those terms without relying on manual processes or intermediaries. Token holders have the same economic rights as traditional bondholders: periodic interest payments and principal repayment at maturity." },
    { question: "What is T+0 atomic settlement and why does it matter?", answer: "Traditional bond markets settle on T+2, meaning two business days pass between trade execution and final settlement, during which counterparty risk exists. Atomic settlement on a blockchain means the transfer of the bond token and the transfer of payment happen in the same transaction, simultaneously, with no window of counterparty exposure. This reduces systemic risk, frees up capital faster, and eliminates the reconciliation work that T+2 settlement requires." },
    { question: "What is the difference between ERC-1400 and ERC-3643 for bond tokenization?", answer: "Both standards support compliant security token issuance on Ethereum and EVM networks. ERC-1400, developed by Polymath, provides a modular framework for transfer restrictions, document management, and forced transfers. ERC-3643 (T-REX), developed by Tokeny and used by Securitize for BlackRock and KKR tokenized products, is now the more widely adopted institutional standard. Most new bond tokenization platforms default to ERC-3643 for its broader ecosystem support and cleaner compliance architecture." },
    { question: "Can tokenized bonds be used as collateral in DeFi protocols?", answer: "Increasingly, yes. Tokenized US Treasuries have been integrated into DeFi protocols as collateral assets, with Franklin Templeton's FOBXX and Ondo Finance's OUSG leading the way. DeFi-composable bond tokens require careful design of the compliance layer, specifically how transfer restrictions interact with smart contract-to-smart contract transfers in lending protocols. This is an architecture decision that must be made at the design stage." },
    { question: "Do tokenized bonds require SEC registration?", answer: "Bond tokenization is a securities issuance in almost every jurisdiction. In the US, this means either SEC registration or an applicable exemption (Reg D for accredited investors, Reg A+ for smaller public offerings, Reg S for offshore issuances). The token is the security. The blockchain is the infrastructure. Your legal counsel determines which regulatory path applies to your specific issuance. SpaceDev builds the technical system that implements whatever compliance framework your advisors define." },
    { question: "How long does it take to build a bond tokenization platform?", answer: `A focused MVP covering issuance contracts, coupon automation, KYC onboarding, and an investor portal can be delivered in 10 to 16 weeks. Full platforms with oracle integrations, variable-rate logic, multi-currency settlement, and secondary market connectivity require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines and a technical blueprint before any development budget is committed.` },
  ],

  finalCta: {
    title: "Build Your Bond Tokenization Platform with SpaceDev",
    description: "The infrastructure for on-chain fixed-income markets is being built now, by institutions, by fintechs, and by the development teams they trust to execute correctly. The difference between a successful launch and a costly rebuild is almost always in the quality of the scoping and architecture decisions made before the first line of code.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};

export const carbonCreditTokenizationData: ServicePageData = {
  seo: {
    title: "Carbon Credit Tokenization Development Services | Blockchain Climate Platforms | SpaceDev",
    description: "SpaceDev builds carbon credit tokenization platforms: registry integration, on-chain retirement, MRV infrastructure, ERC-1155 smart contracts, and voluntary carbon market systems.",
  },
  eyebrow: "Sub-service · Asset Tokenization",
  compactHeroTitle: true,
  title: "Carbon Credit Tokenization Development Services for Climate and Compliance Markets",
  description: "SpaceDev designs and builds carbon credit tokenization platforms for project developers, climate fintechs, ESG investment vehicles, and compliance market operators that need production-grade blockchain infrastructure, not a generic template. We cover the full carbon credit lifecycle on-chain: registry integration, token issuance, MRV data verification, on-chain retirement, marketplace infrastructure, and ESG reporting systems.",
  relatedTags: ["rwa", "tokenization"],
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/our-work" },
  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is carbon credit tokenization?", answer: "Carbon credit tokenization is the process of representing a verified carbon offset, each equivalent to one metric ton of CO2 reduced, avoided, or sequestered, as a digital token on a blockchain. The token carries the credit's full provenance: project ID, vintage year, certification standard, and geographic origin. When a buyer retires the credit to offset emissions, the token is permanently burned on-chain and the retirement is recorded in the originating registry." },
    { question: "What is the difference between a compliance carbon credit and a voluntary carbon credit?", answer: "Compliance carbon credits are government-issued allowances used by regulated industries to meet legally mandated emission limits (EU ETS, California Cap-and-Trade, RGGI). Voluntary carbon credits are certified by independent standards bodies like Verra or Gold Standard and purchased by companies pursuing net-zero commitments beyond legal requirements. The architecture, registry integrations, and regulatory treatment of a tokenization platform differ significantly depending on which market it serves." },
    { question: "How does blockchain prevent double-counting of carbon credits?", answer: "By linking on-chain token retirement (burn) atomically with registry retirement confirmation. When a credit is retired, the smart contract calls the registry API, receives confirmation of the retirement record, and executes the token burn in the same transaction. No credit can be retired twice because the on-chain burn is permanent and the registry record is immutable." },
    { question: "What is Toucan Protocol and do you support it?", answer: "Toucan Protocol is an open-source infrastructure layer on Polygon that allows Verra VCS carbon credits to be bridged on-chain as Base Carbon Tonnes (BCT) or Nature-based Carbon Tonnes (NCT). We build platforms with Toucan Protocol compatibility for projects that want to connect to the ReFi (regenerative finance) ecosystem and existing DeFi liquidity. We also build custom pool contracts for platforms that need different quality gates or credit classifications." },
    { question: "What MRV standards does your platform support?", answer: "We build MRV infrastructure compatible with the major voluntary carbon market verification methodologies: Verra VCS (VM0007, VM0015, VM0042 for REDD+, improved forest management, and renewable energy), Gold Standard Certified Emission Reductions, ACR, and CAR methodologies. For compliance market platforms, we integrate with government-mandated reporting frameworks. The specific MRV methodology is determined by your environmental consultants and the project type." },
    { question: "How long does it take to build a carbon credit tokenization platform?", answer: `A focused MVP covering registry integration, token contracts, on-chain retirement, and a basic marketplace can be delivered in 10 to 14 weeks. Full platforms with MRV data pipelines, ESG reporting systems, DeFi integrations, and multi-registry support require a scoping phase first. Our <a href="/product-discovery" class="text-sd-purple-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors">Product Discovery</a> process gives you accurate timelines before any development commitment.` },
  ],

  finalCta: {
    title: "Build Your Carbon Credit Tokenization Platform with SpaceDev",
    description: "The voluntary carbon market is under more scrutiny than at any point in its history. Platforms that cannot prove credit integrity at the infrastructure level will not survive that scrutiny. Talk to our team about your carbon credit portfolio, target market, and what your platform needs to launch with verifiable environmental integrity.",
    buttonLabel: "Talk to our team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};
