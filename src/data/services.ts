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
  /** Hero */
  eyebrow: string;
  title: string;
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

  /** Use a smaller font size for the H1 when the title is very long */
  compactHeroTitle?: boolean;

  /** Optional hero illustration shown to the right of the hero copy */
  heroImage?: { src: string; alt: string; width?: number; height?: number };

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
      "SpaceDev is a custom blockchain development company that takes products from concept to mainnet. Web3 engineering, product strategy, and embedded security — all under one roof.",
  },
  eyebrow: "Advanced Blockchain Development",
  title: "Blockchain Development Services Built for Real Business Outcomes",
  description:
    "SpaceDev is a custom blockchain development company that takes products from concept to mainnet. We combine web3 engineering, product strategy, and embedded security so your blockchain investment actually delivers.",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See case studies", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "Our Blockchain Development Solutions",
    description:
      "A memorable product starts with a vision and ends with something that creates impact. Our blockchain engineers, designers, and consultants work together to build systems that are transparent, efficient, secure, and for real business outcomes.",
    style: "cards",
    items: [
      { number: "01", title: "Smart Contract Development", description: "Audited, gas-optimized contracts on Ethereum, Aptos, Solana and other major ecosystems — designed for security and longevity.", href: "/blockchain-development-services/smart-contract-development" },
      { number: "02", title: "dApp Development", description: "High-performance decentralized applications that combine seamless UX with robust, scalable on-chain logic.", href: "/blockchain-development-services/dapp-development" },
      { number: "03", title: "Decentralized Identity", description: "Self-sovereign identity solutions that give users full control over their data — secure, private, and interoperable across chains.", href: "/blockchain-development-services/decentralized-identity" },
      { number: "04", title: "Asset Tokenization", description: "Turn real-world assets into digital tokens — unlocking liquidity, fractional ownership, and new investment opportunities.", href: "/blockchain-development-services/asset-tokenization" },
      { number: "05", title: "Layer 1 Blockchain Development", description: "Fully customized, scalable networks ranging from Layer 1 protocols to private enterprise chains — secure and future-ready.", href: "/blockchain-development-services/layer-1-blockchain-development" },
      { number: "06", title: "DAO Development", description: "On-chain governance models for transparent decision-making, voting systems, and efficient treasury management.", href: "/blockchain-development-services/dao-development" },
    ],
  },

  caseStudySlugs: ["blockchain-for-energy", "fightfi", "apebond", "rarible"],
  caseStudiesTitle: "Blockchain Development Projects We Are Proud Of",
  caseStudiesDescription: "SpaceDev has shipped production-grade blockchain applications for clients across energy, DeFi, gaming, and NFT infrastructure. Explore our work.",

  benefits: {
    title: "Benefits of Blockchain Adoption",
    description:
      "Businesses across industries are turning to blockchain because it's transparent, efficient, and secure. Custom blockchain solutions redefine how transactions, data, and trust work in digital ecosystems.",
    items: [
      { title: "Increased Security", description: "Advanced cryptographic algorithms safeguard data and transactions. Each block is encrypted, verified, and immutable — protecting against cyberattacks and fraud.", icon: "lock" },
      { title: "Greater Transparency", description: "Every transaction is permanently recorded and easily auditable. This openness improves accountability and builds trust with users, partners, and regulators.", icon: "eye" },
      { title: "Improved Efficiency", description: "Automate repetitive workflows and eliminate intermediaries. Smart contracts streamline operations and shorten transaction times.", icon: "bolt" },
      { title: "Higher Reliability", description: "A decentralized network distributes data across multiple nodes, removing single points of failure and ensuring continuous uptime.", icon: "shield" },
      { title: "Cost Optimization", description: "By reducing intermediaries and automating operations, blockchain minimizes administrative costs and transaction fees.", icon: "tag" },
      { title: "Enhanced Traceability", description: "Trace assets from origin to destination — improving supply-chain visibility, ensuring compliance, and strengthening consumer trust.", icon: "chain" },
    ],
  },

  quote: {
    text: "There's no question that blockchain will change the world; the real question is when. We can drive this change by embracing and promoting the technology. At SpaceDev, we firmly believe in its transformative power. Partner with us to unlock the full potential of blockchain and lead the future of innovation.",
    author: "Juan Manuel Sobral",
    role: "CTO & Co-founder",
    photo: "/images/juan-manuel-sobral.png",
    linkedin: "https://www.linkedin.com/in/juanmanuelsobral/",
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
      { title: "Fast MVP Delivery", description: "We move ideas into action quickly. Our agile approach allows you to validate concepts, gather user feedback, and iterate — all before committing to full-scale development." },
      { title: "Real Results, Not Buzzwords", description: "We measure success by what ships and scales. Every engagement is tied to concrete outcomes — faster transactions, higher adoption, measurable ROI." },
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
    { question: "How long does custom blockchain development take?", answer: "Most MVPs are production-ready in 8 to 12 weeks. More complex platforms like DeFi protocols require a scoping phase first. Our Product Discovery process gives you accurate timelines before any budget commitment." },
    { question: "Which blockchain networks do you build on?", answer: "Ethereum, Solana, Polygon, BNB Chain, Avalanche, and other major Layer 1 and Layer 2 networks. Network selection is always driven by your performance, cost, and ecosystem requirements." },
    { question: "Do you offer smart contract security audits?", answer: "Yes. Independent smart contract audits are handled by BlockAudit, our dedicated blockchain security division." },
    { question: "Can you work alongside our existing development team?", answer: "Yes. Our IT Staff Augmentation model lets you embed experienced blockchain engineers into your team without a full outsourced engagement." },
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
  description: "",
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
    description: "We don't just deliver code — we help you build production-grade decentralized products.",
    items: [
      { title: "Web2 + Web3 expertise", description: "Proven expertise combining solid web2 engineering with advanced web3 and blockchain capabilities." },
      { title: "End-to-end delivery", description: "Strategy, development, security, and scaling — all under one roof." },
      { title: "Flexible engagement", description: "Project-based or staff augmentation models to fit your team and timeline." },
      { title: "US market experience", description: "Extensive experience working with startups and enterprises in the US market." },
      { title: "Built to last", description: "Strong focus on scalability, security, and long-term success from day one." },
    ],
    tone: "dark",
  },

  footerMarqueeTheme: "dark",

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
    title: "Blockchain for Banks & Financial Institutions | SpaceDev",
    description: "Compliant blockchain and tokenization solutions for banks, fintechs, and asset managers. Programmable money, settlement, and digital asset custody.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Blockchain for Banks",
  description: "We help banks and regulated financial institutions adopt blockchain where it matters: tokenized deposits, instant settlement, compliant digital asset custody, and programmable payments.",
  primaryCta: { label: "Talk to our team", href: "/contact" },
  secondaryCta: { label: "Read fintech case studies", href: "/our-work" },

  offers: {
    eyebrow: "Solutions for regulated finance",
    title: "Programmable money, built for compliance",
    items: [
      { number: "01", title: "Tokenized Deposits", description: "On-chain representations of customer deposits with full reserve accounting and regulator-ready reporting." },
      { number: "02", title: "Settlement Networks", description: "Permissioned and hybrid networks for inter-bank settlement, FX, and securities clearing." },
      { number: "03", title: "Digital Asset Custody", description: "MPC, HSM, and policy-engine architectures that meet bank-grade controls and audit trails." },
      { number: "04", title: "RWA Tokenization", description: "Bonds, money market funds, real estate — issuance, lifecycle, and secondary markets in one stack." },
      { number: "05", title: "Compliance & Risk", description: "On-chain KYC/AML, travel-rule integrations, sanctions screening, and risk dashboards." },
      { number: "06", title: "Payment Rails", description: "Stablecoin and CBDC-ready payment infrastructure for cross-border and B2B use cases." },
    ],
  },

  caseStudySlugs: ["bondi-finance", "ndax-canada", "drata"],

  benefits: {
    title: "Why financial institutions choose blockchain",
    items: [
      { title: "Faster settlement", description: "T+0 settlement for assets that traditionally take days." },
      { title: "Lower operational cost", description: "Eliminate reconciliation overhead and intermediaries." },
      { title: "New product surface", description: "Programmable money unlocks products that simply weren't possible on legacy rails." },
      { title: "Audit-ready transparency", description: "Cryptographic audit trails for regulators, internal control, and customers." },
    ],
  },

  finalCta: {
    title: "Build the bank of the next decade",
    buttonLabel: "Schedule a discovery call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },

  heroImage: {
    src: "/images/content/kW2lB3flyULttPe65AAE9bOBMVI.jpeg",
    alt: "Modern banking and financial services with blockchain infrastructure.",
  },
  offersIllustration: {
    src: "/images/content/L5mZDwRMP1XtyYGb0P8kuICAtEs.svg",
    alt: "Architecture diagram showing tokenized deposits and settlement networks.",
  },
};

export const smartContractData: ServicePageData = {
  seo: {
    title: "Smart Contract Development Services | SpaceDev",
    description: "Audited, gas-optimized smart contracts on Ethereum, Aptos, Solana and other ecosystems. From token standards to complex DeFi protocols.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Smart Contract Development",
  description: "Secure, gas-efficient smart contracts engineered to scale. We design, build, test, and audit production contracts for token issuers, DeFi protocols, marketplaces, and DAOs.",
  primaryCta: { label: "Get in touch", href: "/contact" },

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
    description: "SpaceDev works with agencies as a blockchain partner — expand what you sell, protect your margins, and ship blockchain projects with confidence. White label or client-facing.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "A Blockchain Partner for Agencies",
  description: "Your clients want Web3 experiences, tokenized loyalty, on-chain verification, and wallet-based onboarding — but building those capabilities in-house is expensive and risky. SpaceDev works with agencies as a blockchain partner so you can expand what you sell, protect your margins, and ship with confidence.",
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
    description: "SpaceDev designs and builds decentralized identity (DID) solutions — verifiable credentials, wallet-based onboarding, and identity infrastructure for production-grade platforms.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Decentralized Identity Development Services",
  description: "Decentralized identity (DID) helps organizations verify people, accounts, and credentials without forcing users to hand over more data than necessary. SpaceDev designs and builds DID solutions that work in the real world — scalable identity experiences, secure integrations, and production-ready operations.",
  primaryCta: { label: "Get in touch", href: "/contact" },

  footerMarqueeTheme: "dark",

  finalCta: {
    title: "Build decentralized identity experiences that improve onboarding, privacy, and trust — without sacrificing usability.",
    buttonLabel: "Talk to our blockchain team",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },
};

export const realEstateTokData: ServicePageData = {
  seo: {
    title: "Real Estate Tokenization Development Services | SpaceDev",
    description: "End-to-end development of real estate tokenization platforms — fractional ownership, compliant issuance, investor and issuer portals, and secondary market infrastructure built for production.",
  },
  eyebrow: "Sub-service · Asset Tokenization",
  title: "Real Estate Tokenization Development Services",
  description: "SpaceDev helps real estate companies, proptech platforms, and investment firms design, build, and launch tokenized property platforms built for real operations, not proof-of-concept demos.",
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
    title: "Asset Tokenization Development Services | SpaceDev",
    description: "Tokenize real-world assets: real estate, commodities, securities, and fixed income. Issuance, lifecycle, custody, and secondary markets — end to end.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Asset Tokenization Development Services",
  description: "",
  primaryCta: { label: "Get in touch", href: "/contact" },

  footerMarqueeTheme: "dark",

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
  eyebrow: "Industry · Finance and Fintech",
  title: "DeFi Development Services for the Next Generation of Decentralized Finance",
  description: "SpaceDev builds production-grade DeFi applications, smart contract systems, and tokenized financial infrastructure for startups and enterprises ready to operate at the frontier of web3 finance. From protocol architecture to post-launch security, we cover the full DeFi development lifecycle.",
  primaryCta: { label: "Start Your DeFi Project", href: "/contact" },
  secondaryCta: { label: "Talk to a DeFi Engineer", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "How long does it take to build a DeFi application?", answer: "It depends heavily on protocol complexity. A focused single-purpose DeFi dApp — such as a staking platform or a basic lending pool — can be designed, built, audited, and deployed in 10 to 16 weeks. Multi-protocol systems with custom tokenomics and front-end interfaces typically run 20 to 32 weeks. We scope every project individually after a discovery phase." },
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
    description: "Blockchain-based supply chain traceability, freight payment automation, product provenance, cold chain monitoring, and trade document digitization — built by SpaceDev for logistics operators, 3PLs, and manufacturers.",
  },
  eyebrow: "Industry · Supply Chain & Logistics",
  title: "Blockchain Solutions for Logistics, Freight, and Supply Chain Operations",
  description: "Supply chains break at the handoffs — where data moves between carriers, customs authorities, warehouses, and buyers. SpaceDev builds blockchain-based logistics and supply chain platforms that replace fragmented multi-party coordination with shared, tamper-proof infrastructure built for production.",
  primaryCta: { label: "Talk to Our Logistics Blockchain Team", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "Does blockchain replace our existing ERP, WMS, or TMS systems?", answer: "No. Blockchain in logistics adds a shared trust and visibility layer on top of the systems already running your operations. SpaceDev builds integrations with ERP platforms (SAP, Oracle, Microsoft Dynamics), WMS systems, TMS platforms, and IoT sensor networks — so the blockchain layer works alongside existing infrastructure rather than replacing it." },
    { question: "Which blockchain network is best for a logistics or supply chain platform?", answer: "It depends on whether your platform is permissioned or open, how many parties are involved, transaction volume, and regulatory requirements. Hyperledger Fabric suits enterprise consortium networks. Ethereum and EVM chains work for public traceability platforms. Polygon fits high-volume tracking and settlement. Hedera handles IoT event recording with predictable fees. We evaluate tradeoffs per project." },
    { question: "How does smart contract automation work for freight payments?", answer: "Payment and settlement triggers are encoded as smart contracts that execute automatically on verified delivery events, customs clearance confirmations, or IoT sensor data. This eliminates manual invoice reconciliation between carriers and shippers and compresses payment cycles from weeks to hours — without requiring trust between counterparties." },
    { question: "Can blockchain help with trade finance documents like bills of lading?", answer: "Yes. Blockchain-backed digitization of bills of lading, letters of credit, certificates of origin, and customs declarations makes these documents shareable across importers, exporters, freight forwarders, banks, and customs authorities in real time — removing document fraud risk, eliminating version conflicts, and cutting processing delays at border crossings." },
    { question: "What does the delivery process look like for a logistics blockchain platform?", answer: "We start with a Discovery Sprint that maps your current workflows, identifies where blockchain adds real operational value, and defines platform scope, architecture, and integration requirements. From there we move to milestone-based build and QA with working demos at each stage, followed by launch and ongoing operational support as your platform and participant network scale." },
  ],

  finalCta: {
    title: "Build Blockchain Infrastructure for Your Logistics and Supply Chain Operations",
    description: "Whether you need supply chain traceability, freight settlement automation, cargo tracking, trade document digitization, or multi-party inventory visibility — SpaceDev has the technical depth and operational experience to build it for production.",
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
    description: "HIPAA-aligned blockchain solutions for health records, claims automation, pharmaceutical tracking, and clinical data interoperability — built by SpaceDev for healthcare companies, payers, and life sciences.",
  },
  eyebrow: "Industry · Healthcare",
  title: "Blockchain Development for the Healthcare Industry",
  description: "SpaceDev builds blockchain solutions for healthcare companies that need to secure patient data, automate clinical workflows, and create interoperable health records across providers, payers, and systems — without compromising compliance or performance.",
  primaryCta: { label: "Start Your Healthcare Project", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What does HIPAA compliance mean for a blockchain healthcare application?", answer: "It means the architecture is designed around permissioned access, where only authorized parties can read or write to the records they are entitled to access. Patient data is never exposed on a public ledger. Encryption, access control, and audit trail requirements are built into the technical design from day one — not layered on after the fact." },
    { question: "Can blockchain integrate with existing EHR and clinical systems?", answer: "Yes. Most production healthcare blockchain applications are hybrid architectures that sit alongside existing EHR, PACS, and insurance platforms rather than replacing them. The blockchain provides the interoperability and audit layer — data continues to live in existing systems, with the blockchain acting as the trusted reconciliation and consent management layer on top." },
    { question: "Which blockchain networks are used for healthcare applications?", answer: "Healthcare applications typically run on permissioned networks — Hyperledger Fabric, Hyperledger Besu, or private Ethereum deployments — because they offer fine-grained access control and data privacy that public chains cannot provide by default. For specific use cases like credential verification or pharmaceutical provenance, hybrid approaches with public chain anchoring are also viable." },
    { question: "How does smart contract automation work for healthcare claims processing?", answer: "A smart contract encodes the conditions under which a claim is approved and payment triggered — coverage rules, clinical codes, provider credentials, and prior authorization logic. When a claim is submitted and the conditions are met, settlement executes automatically without manual review. This reduces dispute rates, cuts settlement time, and creates an auditable record of every decision." },
    { question: "How long does it take to build a healthcare blockchain solution?", answer: "It depends on scope and integration complexity. A focused application — such as a consent management system or a provider credentialing platform — can be scoped, built, and deployed in 12 to 20 weeks. A full interoperability layer or claims automation platform with legacy EHR integration typically runs 24 to 40 weeks. We scope every project individually after a discovery engagement." },
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
    description: "Custom blockchain infrastructure for energy trading platforms, REC tokenization, carbon credit tracking, and smart contract automation — built by SpaceDev for energy companies, utilities, and renewable energy developers.",
  },
  eyebrow: "Industry · Energy",
  title: "Blockchain Development for the Energy Sector",
  description: "SpaceDev builds blockchain infrastructure for energy companies, utilities, and renewable energy platforms that need to modernize how they trade, track, and settle energy transactions. From peer-to-peer energy trading platforms to tokenized renewable energy certificates, we deliver the technical architecture to make it work at scale.",
  primaryCta: { label: "Discuss Your Energy Project", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "Which blockchain networks are most used in energy applications?", answer: "Enterprise energy applications typically run on permissioned Ethereum networks (such as Hyperledger Besu or Quorum) or on public EVM-compatible chains like Polygon and Ethereum mainnet, depending on privacy and settlement requirements. P2P trading applications for consumer markets often use public chains for transparency, while utility and oil and gas applications tend toward permissioned or consortium chains for data privacy reasons." },
    { question: "What is a blockchain energy trading platform and how is it different from traditional trading systems?", answer: "A blockchain energy trading platform replaces bilateral systems and manual reconciliation processes with smart contract-based settlement that executes automatically when trade conditions are met. It provides a shared, immutable ledger for all participants, eliminating the need for each party to maintain separate records and reconcile them after the fact." },
    { question: "Can blockchain integrate with existing utility and metering infrastructure?", answer: "Yes. Most production energy blockchain applications are hybrid architectures that bridge existing IoT devices, smart meters, and operational systems with a blockchain settlement layer. The blockchain does not replace the physical infrastructure — it provides the data and financial settlement layer that sits on top of it." },
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
    description: "SpaceDev builds custom stablecoin solutions for fintech companies, DeFi protocols, payment platforms, and enterprises — fiat-backed, crypto-collateralized, algorithmic, and hybrid stablecoin infrastructure from architecture through production launch.",
  },
  eyebrow: "DeFi · Stablecoins",
  title: "Custom Stablecoin Development for Payments, DeFi, and Enterprise Settlement",
  description: "A stablecoin is only as good as the system built around it. SpaceDev builds custom stablecoin solutions for fintech companies, DeFi protocols, payment platforms, and enterprises that need programmable, stable digital currency infrastructure — from initial architecture through production launch.",
  primaryCta: { label: "Talk to Our Stablecoin Development Team", href: "/contact" },
  compactHeroTitle: true,

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is the difference between a fiat-backed and a crypto-collateralized stablecoin?", answer: "A fiat-backed stablecoin holds reserves in traditional currency, typically USD or EUR, managed by a custodian or trust. A crypto-collateralized stablecoin is over-collateralized with on-chain crypto assets and uses liquidation mechanisms to maintain the peg without relying on a centralized reserve. The right choice depends on your regulatory environment, trust model, and target use case." },
    { question: "How long does stablecoin development take?", answer: "A production-ready stablecoin with minting and burning mechanics, reserve management, compliance controls, and basic wallet integration typically takes between 3 and 5 months depending on scope and the complexity of the collateral model. A Discovery Sprint at the start locks in scope and reduces surprises during build." },
    { question: "Does SpaceDev handle regulatory compliance for stablecoin issuance?", answer: "We build the technical mechanisms that enforce the compliance rules your legal advisors define — including KYC/AML integrations, transfer restrictions, blacklisting, and audit trails. We are an engineering partner, not a legal or compliance firm. We work alongside your counsel but do not replace them." },
    { question: "Can you deploy the same stablecoin across multiple blockchains?", answer: "Yes. We design cross-chain deployment architecture using bridge protocols and canonical token standards. Multi-chain deployment requires careful bridge security design and liquidity coordination, which we address during the architecture phase." },
  ],

  finalCta: {
    title: "Build Your Stablecoin with SpaceDev",
    description: "Looking for a stablecoin development company to build fiat-backed, crypto-collateralized, or commodity-backed stablecoin infrastructure for payments, DeFi, or enterprise settlement? SpaceDev delivers the full stack — from economic design to production launch.",
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
    description: "SpaceDev builds custom Layer 1 blockchain networks — Cosmos SDK, Substrate, EVM-compatible chains, and Avalanche subnets — from consensus design and tokenomics to mainnet launch and ecosystem tooling.",
  },
  eyebrow: "Blockchain Development",
  title: "Custom Layer 1 Blockchain Development, From Protocol Design to Mainnet",
  description: "Building a Layer 1 is one of the most technically demanding projects in Web3. SpaceDev builds custom Layer 1 blockchain networks for protocols, enterprises, and product teams that need sovereign chain infrastructure — covering the full cycle from protocol design to mainnet launch.",
  primaryCta: { label: "Talk to Our L1 Blockchain Development Team", href: "/contact" },

  footerMarqueeTheme: "dark",

  faqs: [
    { question: "What is Layer 1 blockchain development?", answer: "Building the base protocol of a blockchain network: consensus mechanism, validator infrastructure, execution environment, native token, and governance. This is distinct from building applications on top of existing chains like Ethereum or Solana — it means creating the chain itself." },
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
      "Custom software, web apps, and mobile apps engineered for scale. React, Next.js, React Native, Python — design, ship, iterate.",
  },
  eyebrow: "Innovative Web & Mobile Development",
  title: "Innovative Web & Mobile Development",
  description:
    "Your digital product is more than software; it represents your brand in motion. SpaceDev builds web, mobile, and software solutions that fuse together engineering precision with strong design and strategy to perform, engage, and evolve with your users.",
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
      { icon: "heart",   title: "Enhanced User Experience", description: "Apps focused on speed, simplicity, and flow — users find value in every interaction and return more often." },
      { icon: "globe",   title: "Broader Reach", description: "Through mobile and web app development, brands connect with audiences across platforms and devices." },
      { icon: "rocket",  title: "Faster Go-to-Market", description: "Agile development moves your app from idea to release quickly — without losing quality or stability." },
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
    { question: "What's the difference between web and mobile app development?", answer: "Web apps run in browsers and reach the broadest audience, while mobile apps target iOS and Android — offering tighter integration with the device, push notifications, and offline-first patterns. Most modern products need both." },
    { question: "How long does it take to develop an app?", answer: "An MVP typically ships in 8–14 weeks. A full production release with multiple platforms and integrations is usually 4–9 months." },
    { question: "What technologies do you use for app development?", answer: "React, Next.js, Node.js, TypeScript, React Native, Flutter, Python, Go, and PostgreSQL are our day-to-day stack — plus AWS / Vercel / GCP for infrastructure." },
    { question: "Do you offer web-based mobile app development?", answer: "Yes — we ship Progressive Web Apps when reach matters more than device integration, and React Native or native code when performance and platform features matter more." },
    { question: "What are your web and mobile app development services?", answer: "We cover the full lifecycle — consultancy, UX/UI design, frontend and backend development, mobile (native and cross-platform) apps, QA, integrations, and post-launch support." },
    { question: "Do you provide post-launch maintenance and updates?", answer: "Always. Most clients continue with us on a monthly retainer for monitoring, updates, and ongoing iteration." },
    { question: "Can you help with scaling an existing product?", answer: "Yes. We frequently come in to refactor architecture, improve performance, ship missing features, or rebuild a product that has outgrown its original codebase." },
    { question: "Do you work with startups and enterprises alike?", answer: "Yes — from seed-stage MVPs to enterprise SaaS deployments. Our process scales to both." },
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
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  process: {
    eyebrow: "How it works",
    title: "4 Steps to Build Your Dream Team",
    description: "SpaceDev's IT staff augmentation model is designed for speed, precision, and effortless collaboration. Here's how we make it happen:",
    items: [
      { number: "1", title: "Identify Your Needs", description: "We begin by understanding your goals, technical requirements, and timelines to match the right talent to your project." },
      { number: "2", title: "Candidate Screening", description: "Your project is matched with experts from our in-house team. Each professional is proven, ready to integrate fast, and deliver results from day one." },
      { number: "3", title: "Welcome Aboard", description: "Once selected, engineers integrate quickly into your environment — adapting to your tools, processes, and time zones from the first week." },
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
      { title: "Fast Turnaround", description: "Expand your team within days instead of months — our network of vetted developers ensures no delay in project delivery." },
      { title: "Proven IT Talent", description: "Each professional we recommend has deep expertise across web3, blockchain, AI, cloud, and full-stack development." },
      { title: "Transparent Model", description: "No hidden charges or unclear terms. Pricing and engagement models are straightforward, keeping you confident at every stage." },
      { title: "Seamless Integration", description: "Our engineers and designers adapt to your tools, processes, and team culture — collaboration stays consistent." },
      { title: "Flexible Engagements", description: "Choose full-time, part-time, or hourly models. Scaling resources is as simple as adjusting a schedule." },
      { title: "Results That Matter", description: "Every engagement is built around outcomes — faster releases, improved quality, higher productivity." },
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
    title: "Product Discovery — A strategic approach by SpaceDev",
    description: "Validate ideas, define MVPs, and design roadmaps before writing a single line of code. Six discovery sprints tailored to your stage.",
  },
  eyebrow: "Product Discovery",
  title: "Product Discovery",
  description: "We transform your project ideas into tangible success!",
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

  finalCta: {
    title: "Smart contract audits protect your future—stay secure.",
    buttonLabel: "Get in touch",
    buttonHref: "/contact",
  },

  footerMarquee: "Smart contract audits that protect your future.",
  footerMarqueeTheme: "dark",
};
