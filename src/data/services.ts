import type { CaseStudy } from "./case-studies";
import { caseStudies } from "./case-studies";

export interface ServiceOffer { number: string; title: string; description: string }
export interface ServiceBenefit { title: string; description: string }
export interface ServiceFaq { question: string; answer: string }
export interface ServiceQuote { text: string; author: string; role: string }
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

  /** "What we build" / process / offers */
  offers?: { eyebrow?: string; title: string; description?: string; items: ServiceOffer[] };

  /** Step-by-step process (1..N) */
  process?: { eyebrow?: string; title: string; description?: string; items: ServiceStep[] };

  /** Featured case studies (slugs from data/case-studies) */
  caseStudySlugs?: string[];

  /** Benefits grid */
  benefits?: { eyebrow?: string; title: string; description?: string; items: ServiceBenefit[] };

  /** Pull quote */
  quote?: ServiceQuote;

  /** Why SpaceDev */
  whyUs?: { title: string; description?: string; items: ServiceBenefit[] };

  /** FAQ */
  faqs?: ServiceFaq[];

  /** Final CTA */
  finalCta?: { eyebrow?: string; title: string; description?: string; buttonLabel: string; buttonHref: string; external?: boolean };

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
    title: "Blockchain Development Services for Scalable Solutions | SpaceDev",
    description:
      "End-to-end blockchain development: DeFi platforms, dApps, NFTs, DAOs, smart contracts, tokenization and white-label exchanges. Top 5 blockchain company by Clutch.",
  },
  eyebrow: "Advanced Blockchain Development",
  title: "Blockchain Development Services for Scalable Solutions",
  description:
    "SpaceDev's partners move faster with secure, custom-built blockchain and Web3 applications that create trust, transparency, and long-term value. We combine strong engineering with real product experience to build, audit, and launch blockchain solutions that work flawlessly across multiple networks.",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See case studies", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "From research to launch — every layer of the stack",
    description:
      "A memorable product starts with a vision and ends with something that creates impact. Our blockchain engineers, designers, and consultants work together to build systems that are transparent, efficient, secure, and built for real business outcomes.",
    items: [
      { number: "01", title: "Blockchain Technical Research", description: "Advanced technical research directly with major blockchain ecosystems, solving complex protocol challenges and defining future network standards." },
      { number: "02", title: "Blockchain Development", description: "Fully customized, scalable networks ranging from Layer 1 protocols to private enterprise chains — secure and future-ready." },
      { number: "03", title: "DeFi Platforms", description: "Decentralized finance platforms for trading, lending and liquidity management, built for risk reduction and smart automation." },
      { number: "04", title: "dApps", description: "High-performance decentralized applications that combine seamless UX with robust, scalable on-chain logic." },
      { number: "05", title: "NFTs & Play-to-Earn", description: "NFT marketplaces and play-to-earn ecosystems backed by secure, authenticated token economies that drive real engagement." },
      { number: "06", title: "DAOs", description: "On-chain governance models for transparent decision-making, voting systems, and efficient treasury management." },
      { number: "07", title: "Cryptocurrencies & Tokens", description: "Custom tokens with compliant governance models and stable liquidity structures for sustainable market performance." },
      { number: "08", title: "Smart Contracts", description: "Audited, gas-optimized contracts on Ethereum, Aptos, Solana and other major ecosystems — designed for security and longevity." },
      { number: "09", title: "White-Label Crypto Exchanges", description: "Ready-to-deploy exchange platforms featuring advanced trading tools, KYC integration and seamless liquidity management." },
    ],
  },

  caseStudySlugs: ["blockchain-for-energy", "fightfi", "apebond", "rarible"],

  benefits: {
    title: "Benefits of Blockchain Adoption",
    description:
      "Businesses across industries are turning to blockchain because it's transparent, efficient, and secure. Custom blockchain solutions redefine how transactions, data, and trust work in digital ecosystems.",
    items: [
      { title: "Increased Security", description: "Advanced cryptographic algorithms safeguard data and transactions. Each block is encrypted, verified, and immutable — protecting against cyberattacks and fraud." },
      { title: "Greater Transparency", description: "Every transaction is permanently recorded and easily auditable. This openness improves accountability and builds trust with users, partners, and regulators." },
      { title: "Improved Efficiency", description: "Automate repetitive workflows and eliminate intermediaries. Smart contracts streamline operations and shorten transaction times." },
      { title: "Higher Reliability", description: "A decentralized network distributes data across multiple nodes, removing single points of failure and ensuring continuous uptime." },
      { title: "Cost Optimization", description: "By reducing intermediaries and automating operations, blockchain minimizes administrative costs and transaction fees." },
      { title: "Enhanced Traceability", description: "Trace assets from origin to destination — improving supply-chain visibility, ensuring compliance, and strengthening consumer trust." },
    ],
  },

  quote: {
    text: "There's no question that blockchain will change the world; the real question is when. We can drive this change by embracing and promoting the technology. At SpaceDev, we firmly believe in its transformative power. Partner with us to unlock the full potential of blockchain.",
    author: "Juan Manuel Sobral",
    role: "CTO & Co-founder",
  },

  whyUs: {
    title: "Why choose SpaceDev as your tech partner?",
    items: [
      { title: "Fast MVP Development", description: "Rapid prototyping and MVP creation that helps validate ideas quickly without compromising quality. Faster go-to-market and smoother evolution." },
      { title: "Exceptional IT Talent", description: "Experienced engineers, architects, and auditors with proven skills in blockchain — from smart contracts to multi-chain integrations." },
      { title: "High Development Quality", description: "Clean architecture, detailed audits, and continuous testing guarantee precision and performance at every step." },
      { title: "Real, Measurable Results", description: "Secure platforms, faster transactions, higher adoption rates, and scalable growth — clients experience measurable ROI." },
      { title: "End-to-End Expertise", description: "From concept to deployment, in-house. Multidisciplinary team covers blockchain, UI/UX, DevOps, and post-launch support." },
      { title: "Flexible Engagement Models", description: "Project-based execution or IT staff augmentation — we adapt to your structure, scale efficiently, and integrate as an extension of your team." },
    ],
  },

  faqs: [
    { question: "What do your blockchain development services include?", answer: "End-to-end services: technical research, smart contract development, dApp engineering, DeFi platforms, NFT marketplaces, DAO infrastructure, token design, and white-label exchanges — plus security audits and post-launch support." },
    { question: "Do you offer blockchain consulting before starting a project?", answer: "Yes — every engagement starts with a free consultation and (optionally) a paid Discovery Sprint where we validate the technical and business case before writing production code." },
    { question: "How long does it take to build a blockchain application?", answer: "An MVP typically takes 8–14 weeks, while a production-ready protocol or marketplace can take 4–9 months depending on scope, audits, and integrations." },
    { question: "Which industries can benefit from blockchain development?", answer: "Finance, gaming, healthcare, supply chain, real estate, energy, and education are common fits — anywhere transparency, traceability, or programmable assets create value." },
    { question: "How secure are your blockchain solutions?", answer: "We follow strict secure-coding standards, run automated and manual reviews, and offer formal smart-contract audits via our BlockAudit service before mainnet deployment." },
    { question: "What makes SpaceDev's blockchain development services unique?", answer: "Real product experience across both Web2 and Web3, a top-5 Clutch ranking among blockchain companies, and a multidisciplinary team that owns the entire lifecycle." },
    { question: "Do you provide post-launch support and maintenance?", answer: "Yes — we offer monitoring (OpenZeppelin Defender), incident response, upgrades, and long-term retainer engagements." },
  ],

  finalCta: {
    title: "Power your growth with secure blockchain solutions",
    description: "Take your product from idea to impact with SpaceDev's blockchain development services. From consultation to deployment, we guide you every step.",
    buttonLabel: "Start your project",
    buttonHref: "/contact",
  },
};

/* ============================================================
   BLOCKCHAIN SUB-PAGES — focused variations
   ============================================================ */
export const dappData: ServicePageData = {
  seo: {
    title: "dApp Development Services | SpaceDev",
    description: "Custom dApp development with seamless UX and robust on-chain logic. From concept to mainnet across Ethereum, Aptos, Solana and more.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "dApp Development",
  description: "Decentralized applications that feel like the products users already love — fast, intuitive, secure. We build the frontend, the smart contracts, and everything in between.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "View dApp case studies", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "From wallet integration to on-chain governance",
    items: [
      { number: "01", title: "UX/UI for Web3", description: "Interfaces that abstract away complexity — onboarding, wallets, gas, signatures — without hiding what users need to control." },
      { number: "02", title: "Smart Contract Engineering", description: "Audited Solidity, Move, or Rust contracts engineered for gas efficiency and upgrade safety." },
      { number: "03", title: "Multi-chain Integrations", description: "Deploy and orchestrate across EVM and non-EVM chains, with bridges and cross-chain messaging where it makes sense." },
      { number: "04", title: "Indexing & APIs", description: "Subgraphs, custom indexers, and read APIs that make your on-chain data fast and queryable." },
      { number: "05", title: "Wallets & Identity", description: "Custodial, MPC, and self-custody integrations — plus account abstraction for friction-free user flows." },
      { number: "06", title: "Monitoring & Ops", description: "OpenZeppelin Defender, on-call playbooks, and dashboards so you sleep at night." },
    ],
  },

  caseStudySlugs: ["blockchain-for-energy", "apebond", "rarible", "blockus"],

  whyUs: {
    title: "Why teams ship dApps with SpaceDev",
    items: [
      { title: "Real-world Web3 UX", description: "We've shipped products to NFT collectors, traders, and enterprise users — and we know what makes them drop off." },
      { title: "Security-first by default", description: "Every contract goes through static analysis, peer review, and (if you want it) a full BlockAudit before mainnet." },
      { title: "Full-stack ownership", description: "Same team handles smart contracts, indexing, frontend and devops — no handoffs lost between vendors." },
    ],
  },

  finalCta: {
    title: "Ready to build a dApp users actually love?",
    buttonLabel: "Talk to a Web3 engineer",
    buttonHref: "/contact",
  },

  heroImage: {
    src: "/images/content/jSVFf6Zw6V3KiXLgG9hznARyXbo.svg",
    alt: "Stylised illustration of a decentralized application with connected on-chain components.",
  },
  offersIllustration: {
    src: "/images/content/8UnMZbotyNqtBxF3ssUBAoU5I.svg",
    alt: "Diagram showing the layers of a typical dApp stack from frontend to smart contracts.",
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
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "Browse our smart contract work", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "Every flavor of contract you'll need",
    items: [
      { number: "01", title: "Token Standards", description: "ERC-20, ERC-721, ERC-1155, ERC-4626 — and custom standards designed for your tokenomics." },
      { number: "02", title: "DeFi Protocols", description: "AMMs, lending markets, staking and yield strategies, oracles, and liquidations." },
      { number: "03", title: "Marketplaces", description: "On-chain order books, Dutch auctions, and royalty-aware secondary markets." },
      { number: "04", title: "Governance & DAOs", description: "Voting modules, treasury management, and timelocks with battle-tested patterns." },
      { number: "05", title: "Account Abstraction", description: "ERC-4337 smart accounts, paymasters, session keys, and gasless UX." },
      { number: "06", title: "Upgradeability & Ops", description: "Diamond/UUPS proxies, migrations, multi-sig procedures, and on-chain monitoring." },
    ],
  },

  caseStudySlugs: ["apebond", "rarible", "bondi-finance", "blockchain-for-energy"],

  whyUs: {
    title: "How we keep contracts secure",
    items: [
      { title: "Multi-layered review", description: "Static analysis (Slither), fuzzing (Echidna/Foundry), formal verification when warranted, plus peer review." },
      { title: "BlockAudit integration", description: "Optional in-house audits before mainnet — same team that built it, scrutinized by an independent SpaceDev cell." },
      { title: "Production runbooks", description: "Pause switches, on-chain monitoring, and incident-response playbooks delivered with every contract." },
    ],
  },

  finalCta: {
    title: "Need a smart contract you can trust?",
    buttonLabel: "Talk to a contract engineer",
    buttonHref: "/contact",
  },

  heroImage: {
    src: "/images/content/zdvOu1yiYoAGPA8a8Dfsrc1SQRI.svg",
    alt: "Illustration of a smart contract being audited and deployed to the blockchain.",
  },
  offersIllustration: {
    src: "/images/content/8UnMZbotyNqtBxF3ssUBAoU5I.svg",
    alt: "Smart contract development lifecycle, from design to formal verification.",
  },
};

export const partnerData: ServicePageData = {
  seo: {
    title: "Become a Blockchain Development Partner | SpaceDev",
    description: "Long-term blockchain engineering partnership: dedicated teams, shared roadmaps, and a single partner across product, engineering, and security.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Your Long-Term Blockchain Partner",
  description: "Beyond projects — we partner with founders and protocol teams as their long-term engineering counterpart. Same team, same roadmap, year after year.",
  primaryCta: { label: "Start a partnership", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  offers: {
    eyebrow: "How partnerships work",
    title: "More than a vendor — your engineering bench",
    items: [
      { number: "01", title: "Dedicated Engineering Cell", description: "A pod of senior engineers, designers, and ops specialists assigned exclusively to your roadmap." },
      { number: "02", title: "Shared Roadmap", description: "We participate in planning, write specs, run discovery — not just execute tickets." },
      { number: "03", title: "Single Accountability", description: "One partner across product, engineering, and security — no finger-pointing between vendors." },
      { number: "04", title: "Flexible Capacity", description: "Scale the team up or down quarter by quarter as your roadmap evolves." },
    ],
  },

  caseStudySlugs: ["blockchain-for-energy", "fightfi", "ubicuity"],

  whyUs: {
    title: "Why protocols partner with SpaceDev",
    items: [
      { title: "Continuity", description: "The team that builds your v1 is the team that's still there at v3 — no rebuilds, no re-onboarding." },
      { title: "Skin in the game", description: "We treat your roadmap like our own product, raising risks and pushing back on bad ideas." },
      { title: "Multidisciplinary depth", description: "Smart contracts, frontend, infra, design, and audits under one roof." },
    ],
  },

  finalCta: {
    title: "Looking for your long-term blockchain partner?",
    buttonLabel: "Let's talk",
    buttonHref: "/contact",
  },

  heroImage: {
    src: "/images/content/4EnN0joO3tVJiGxfaLXZnG7Nb0.png",
    alt: "Long-term blockchain engineering partnership illustrated as connected nodes.",
    width: 800,
    height: 800,
  },
  offersIllustration: {
    src: "/images/content/jSVFf6Zw6V3KiXLgG9hznARyXbo.svg",
    alt: "Dedicated engineering pod working as an extension of your team.",
  },
};

export const tokenizationData: ServicePageData = {
  seo: {
    title: "Asset Tokenization Services | SpaceDev",
    description: "Tokenize real-world assets: real estate, commodities, securities, and fixed income. Issuance, custody, secondary markets, and compliance — end-to-end.",
  },
  eyebrow: "Sub-service · Blockchain",
  title: "Asset Tokenization",
  description: "Bring real-world assets on-chain — real estate, commodities, securities, fixed income, carbon credits. We handle issuance, lifecycle, custody, and secondary markets.",
  primaryCta: { label: "Tokenize an asset", href: "/contact" },
  secondaryCta: { label: "See RWA case studies", href: "/our-work" },

  offers: {
    eyebrow: "End-to-end tokenization stack",
    title: "From legal wrapper to liquid secondary market",
    items: [
      { number: "01", title: "Issuance Platform", description: "Configurable issuance flows for accredited and retail investors, with integrated KYC and accreditation checks." },
      { number: "02", title: "Token Lifecycle", description: "Coupons, dividends, redemptions, corporate actions — automated on-chain with compliant guardrails." },
      { number: "03", title: "Custody & Wallets", description: "MPC custody, qualified custodian integrations, and self-custody options for sophisticated investors." },
      { number: "04", title: "Secondary Markets", description: "Permissioned trading venues with whitelisting, jurisdiction-aware transfer restrictions, and instant settlement." },
      { number: "05", title: "Compliance Engine", description: "Travel rule, sanctions screening, transfer agents, and on-chain attestations." },
      { number: "06", title: "Investor Portal", description: "Branded UX for investors to subscribe, hold, vote, and redeem — fully whitelabeled to your brand." },
    ],
  },

  caseStudySlugs: ["bondi-finance", "blockchain-for-energy", "ubicuity"],

  benefits: {
    title: "Why tokenize?",
    items: [
      { title: "Fractional ownership", description: "Open access to assets that were previously out of reach for most investors." },
      { title: "24/7 liquidity", description: "Trade and settle around the clock — no T+2 cycles." },
      { title: "Programmable compliance", description: "Embed transfer restrictions and reporting logic directly into the asset itself." },
      { title: "Lower issuance cost", description: "Cut intermediaries from the issuance and lifecycle process." },
    ],
  },

  finalCta: {
    title: "Got an asset to tokenize?",
    description: "From a single building to a full bond program — we've shipped both. Tell us what you're working on.",
    buttonLabel: "Schedule a call",
    buttonHref: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
  },

  heroImage: {
    src: "/images/content/4EnN0joO3tVJiGxfaLXZnG7Nb0.png",
    alt: "Real-world assets being tokenized and represented on the blockchain.",
    width: 800,
    height: 800,
  },
  offersIllustration: {
    src: "/images/content/zdvOu1yiYoAGPA8a8Dfsrc1SQRI.svg",
    alt: "End-to-end tokenization stack: issuance, lifecycle, custody, secondary markets.",
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
    "Your digital product is more than software — it represents your brand in motion. SpaceDev builds web, mobile, and software solutions that fuse engineering precision with strong design and strategy to perform, engage, and evolve with your users.",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/our-work" },

  offers: {
    eyebrow: "What we build",
    title: "From custom software to large enterprise systems",
    description: "Our experience covers everything from custom software and mobile applications to large enterprise systems.",
    items: [
      { number: "01", title: "Consultancy & Technical Research", description: "Analyze business models and design clear technical roadmaps based on data to eliminate bottlenecks." },
      { number: "02", title: "Web Products", description: "Responsive, reliable dashboards, SaaS platforms, and marketplaces optimized for scalable growth." },
      { number: "03", title: "Mobile Apps", description: "High-performance native (iOS/Android) and cross-platform (Flutter/React Native) apps designed for retention." },
      { number: "04", title: "Custom Software", description: "Custom systems that automate workflows and integrate seamlessly into your existing infrastructure." },
      { number: "05", title: "UX/UI Design", description: "Intuitive, strategic designs that ensure clarity and seamless user flows from the first interaction." },
      { number: "06", title: "Quality Assurance", description: "Validate functionality, security, and real-world performance to ensure total confidence before launch." },
      { number: "07", title: "Front & Backend Development", description: "Speed, scalability, and reliability using modern stacks like React, Next.js, and Python." },
      { number: "08", title: "E-commerce Platforms", description: "End-to-end shopping experiences optimized for high conversions and customer satisfaction." },
      { number: "09", title: "Games", description: "Immersive, performant gaming experiences using modern engines and scalable architectures." },
      { number: "10", title: "APIs", description: "Secure data exchange and system flexibility with robust, reliable API integrations." },
      { number: "11", title: "Enterprise Applications", description: "Enterprise-grade systems that support complex workflows and ensure business continuity." },
      { number: "12", title: "Content Management Systems", description: "Intuitive, customizable CMS solutions adaptable to any business model." },
    ],
  },

  caseStudySlugs: ["drata", "ubicuity", "athleteai", "twispi"],

  benefits: {
    title: "Benefits of Custom Software & App Development",
    description: "Custom software can redefine how a business operates. With the right technology, design, and strategy, brands gain speed, visibility, and customer loyalty.",
    items: [
      { title: "Scalable Growth", description: "Every architecture is built to handle growth in users, data, and functionality." },
      { title: "Enhanced User Experience", description: "Apps focused on speed, simplicity, and flow — users find value in every interaction and return more often." },
      { title: "Broader Reach", description: "Through mobile and web app development, brands connect with audiences across platforms and devices." },
      { title: "Faster Go-to-Market", description: "Agile development moves your app from idea to release quickly — without losing quality or stability." },
      { title: "Improved Efficiency", description: "Web and mobile solutions automate workflows and improve collaboration, freeing teams to focus on strategy." },
      { title: "Cost-Effective Development", description: "Modern frameworks and cross-platform builds reduce maintenance costs over the long run." },
    ],
  },

  whyUs: {
    title: "Why Choose SpaceDev as Your Tech Partner",
    description: "Building digital products that stand out requires collaboration, understanding the business, and anticipating challenges.",
    items: [
      { title: "Fast MVP Delivery", description: "Move ideas into action quickly. Validate concepts, attract investors, and reach users faster — without compromising quality." },
      { title: "IT Talent That Adapts to You", description: "From UI/UX designers to backend engineers — technical depth and creative precision. Need more capacity? Scale instantly via staff augmentation." },
      { title: "High Development Quality", description: "Clean architecture, stable frameworks, and maintainable code so your product performs flawlessly across devices and updates." },
      { title: "Real Results, Not Buzzwords", description: "We measure success in growth metrics, not jargon. From conversion rates to retention, our solutions deliver visible outcomes." },
      { title: "Transparent Collaboration", description: "Open and structured communication. Dedicated PMs and real-time updates — you're always in control of your project's progress." },
      { title: "Post-Launch Partnership", description: "Our role doesn't end at deployment. We monitor, update, and refine your product so it stays secure, scalable, and ready for what's next." },
    ],
  },

  faqs: [
    { question: "What's the difference between web and mobile app development?", answer: "Web apps run in browsers and reach the broadest audience, while mobile apps target iOS and Android — offering tighter integration with the device, push notifications, and offline-first patterns. Most modern products need both." },
    { question: "How long does it take to develop an app?", answer: "An MVP typically ships in 8–14 weeks. A full production release with multiple platforms and integrations is usually 4–9 months." },
    { question: "What technologies do you use for app development?", answer: "React, Next.js, Node.js, TypeScript, React Native, Flutter, Python, Go, and PostgreSQL are our day-to-day stack — plus AWS / Vercel / GCP for infrastructure." },
    { question: "Do you offer web-based mobile app development?", answer: "Yes — we ship Progressive Web Apps when reach matters more than device integration, and React Native or native code when performance and platform features matter more." },
    { question: "Do you provide post-launch maintenance and updates?", answer: "Always. Most clients continue with us on a monthly retainer for monitoring, updates, and ongoing iteration." },
    { question: "Can you help with scaling an existing product?", answer: "Yes. We frequently come in to refactor architecture, improve performance, ship missing features, or rebuild a product that has outgrown its original codebase." },
    { question: "Do you work with startups and enterprises alike?", answer: "Yes — from seed-stage MVPs to enterprise SaaS deployments. Our process scales to both." },
  ],

  finalCta: {
    title: "Build apps that shape the future",
    description: "Every product begins with an idea, and the right team to turn it into reality. Our developers and designers work closely with your team to build fast, secure, user-focused digital products.",
    buttonLabel: "Start your project",
    buttonHref: "/contact",
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
  title: "Access pre-vetted engineers, ready in under 2 weeks",
  description:
    "Access pre-vetted engineers, designers, and specialists who integrate effortlessly with your existing setup. Scale your project without the weight of long hiring cycles or overhead costs.",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  process: {
    eyebrow: "How it works",
    title: "4 steps to build your dream team",
    description: "Our IT staff augmentation model is designed for speed, precision, and effortless collaboration.",
    items: [
      { number: "01", title: "Identify Your Needs", description: "We begin by understanding your goals, technical requirements, and timelines to match the right talent to your project." },
      { number: "02", title: "Candidate Screening", description: "Your project is matched with experts from our in-house team. Each professional is proven, ready to integrate fast, and deliver results from day one." },
      { number: "03", title: "Welcome Aboard", description: "Once selected, engineers integrate quickly into your environment — adapting to your tools, processes, and time zones from the first week." },
      { number: "04", title: "Management & Scaling", description: "As your project evolves, we help you scale your team up or down easily. Flexible structure gives you agility without long-term commitments." },
    ],
  },

  benefits: {
    title: "Benefits of IT Staff Augmentation",
    description: "IT staff augmentation gives your business the flexibility and skill depth it needs to stay ahead — without the cost and complexity of permanent hiring.",
    items: [
      { title: "Cost Efficiency", description: "Skip recruitment, training, and benefits costs. Access top-tier talent without heavy financial commitments." },
      { title: "Flexibility to Scale", description: "Add or reduce resources at any stage to keep your workforce perfectly aligned with project needs." },
      { title: "Assured Quality", description: "Every developer and designer passes through multiple evaluation layers for technical and communication skills." },
      { title: "Access to Global Expertise", description: "Tap into an international pool of specialists across blockchain, cloud, AI, and full-stack development." },
      { title: "Enhanced Productivity", description: "Fill skill gaps quickly, eliminate delays, and bring fresh perspectives that accelerate delivery." },
      { title: "Risk Reduction", description: "Structured hiring and monitoring ensures minimal onboarding risk and better resource utilization." },
      { title: "Focus on Core Business", description: "With the right experts handling development, your internal team focuses on strategy, growth, and innovation." },
    ],
  },

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
    { question: "How is staff augmentation different from outsourcing?", answer: "Staff augmentation embeds engineers into your team and processes — you manage the work and own the codebase. Outsourcing hands an entire scope of work to a vendor who manages it independently. Staff aug gives you control; outsourcing gives you a turnkey deliverable." },
    { question: "How quickly can I hire through SpaceDev?", answer: "Most teams are ready to start within 1–2 weeks. The interview process itself is typically less than 2 weeks." },
    { question: "What kind of skills and roles can I hire for?", answer: "Frontend, backend, full-stack, mobile, blockchain, smart contract, DevOps, cloud, QA, UI/UX, product owners and project managers." },
    { question: "Can I scale my team as the project grows?", answer: "Yes — add or reduce people quarter by quarter. There are no long-term lock-ins." },
    { question: "How do you ensure quality and accountability?", answer: "Every engineer goes through multi-stage technical screening, and SpaceDev provides delivery management oversight even when the engineer is embedded in your team." },
    { question: "Do you work with both startups and enterprises?", answer: "Yes — from seed-stage startups needing one senior engineer to enterprises spinning up dedicated 10+ person cells." },
  ],

  finalCta: {
    title: "Build your dream tech team with SpaceDev",
    description: "Finding the right people shouldn't slow your business down. The talent you need is ready — hire, build, and grow with SpaceDev.",
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
  title: "We transform your project ideas into tangible success",
  description:
    "Product Discovery helps you deeply understand customer needs and business goals to build the right product — ensuring valuable, feasible, and strategic solutions through collaboration and alignment. Over 60% of projects fail due to poor planning. Discovery makes sure yours isn't one of them.",
  primaryCta: { label: "Get started", href: "/contact" },
  secondaryCta: { label: "Book a discovery call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  offers: {
    eyebrow: "Product Discovery Suite",
    title: "Choose the full service or any micro-package",
    description: "Six sprints covering every stage from ideation to scaling. Pick what fits your moment.",
    items: [
      { number: "01", title: "Product Strategy Sprint", description: "Define the business model, develop hypotheses, test desirability, and forecast profitability. Deliverables: detailed report, validated/rejected hypotheses, business model and profitability projection." },
      { number: "02", title: "Brand Strategy Sprint", description: "Establish a clear brand vision and create essential resources. Deliverables: refined brand materials, visual and written assets ready for marketing." },
      { number: "03", title: "MVP Discovery Sprint", description: "Design the user experience, navigation, content architecture, and style guide. Deliverables: product definition, MVP scope & roadmap, critical app flow, solution architecture, tech stack, technical risk mitigation, wireframing." },
      { number: "04", title: "Go-To-Market Package", description: "Prepare the product for launch in parallel to MVP development. Deliverables: launch strategy, app store and social marketing materials, community-building assets for early traction." },
      { number: "05", title: "Continuous Discovery Sprint", description: "Assess the product's current state and propose new functionalities or optimizations. Deliverables: implementation plans, prioritized insights report, roadmap for continuous iteration." },
      { number: "06", title: "Scale Stage", description: "Support mature products to scale and meet advanced needs. Deliverables: advanced solutions for scaling, enhanced design systems, dedicated growth resources." },
    ],
  },

  benefits: {
    eyebrow: "Key benefits",
    title: "Why discovery is non-negotiable",
    items: [
      { title: "Risk Reduction", description: "Validate ideas before investing in development." },
      { title: "Informed Decisions", description: "Based on real data and metrics, not guesswork." },
      { title: "Clear Strategy", description: "For every stage of the product lifecycle." },
      { title: "Faster Time to Value", description: "Skip the months wasted building the wrong thing." },
    ],
  },

  quote: {
    text: "Our approach not only speeds up innovation but also revolutionizes work patterns, making problem solving smarter and more effective. This allows you to save time and money while empowering your team to focus on what really matters: the health and quality of your project.",
    author: "Federico Sendra",
    role: "CEO & Co-founder",
  },

  finalCta: {
    title: "Not sure how Product Discovery fits your project?",
    description: "Connect with us to explore your options — most engagements start with a 30-minute conversation.",
    buttonLabel: "Get started",
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
  title: "Smart Contract & Blockchain Security",
  description:
    "Security is vital. Our expert smart contract audit ensures safe deployment, monitoring, upgrade and management of blockchain applications for startups and enterprises. Stay ahead of hacks — we catch vulnerabilities before they catch you.",
  primaryCta: { label: "Request an audit", href: "/contact" },
  secondaryCta: { label: "Book a security call", href: "https://meetings.hubspot.com/federico-sendra/meet-space", external: true },

  process: {
    eyebrow: "How it works",
    title: "Smart contract audit in three phases",
    items: [
      { number: "01", title: "Assessment", description: "We thoroughly evaluate your smart contract's business logic and collaborate with you to identify the key security properties that need testing." },
      { number: "02", title: "Review", description: "Multiple advanced analysis processes run in parallel on your code, followed by an in-depth manual review to detect hidden vulnerabilities or anomalies." },
      { number: "03", title: "Delivery", description: "A detailed report outlining identified vulnerabilities, expert mitigation recommendations, and options for ongoing security verification to keep your project safe." },
    ],
  },

  offers: {
    eyebrow: "How we ensure security",
    title: "More than a one-off audit",
    items: [
      { number: "01", title: "Monitoring", description: "We help you set up top-notch monitoring with OpenZeppelin Defender, configuring security action triggers for unusual activity or balance changes." },
      { number: "02", title: "SECOPS Audit", description: "More hacks happen via social engineering than smart-contract exploits. Our audits ensure technical security AND management security — every player follows strong protocols to reduce vulnerabilities." },
      { number: "03", title: "Post-launch Verification", description: "Periodic re-audits, dependency monitoring, and threat-model updates so your contracts stay safe as they evolve." },
    ],
  },

  benefits: {
    title: "Benefits of a smart contract audit",
    items: [
      { title: "Prevent Critical Vulnerabilities", description: "Conducting an audit early helps avoid major security flaws that could lead to costly post-launch issues." },
      { title: "Thorough Expert Review", description: "Experienced auditors manually inspect your code, catching what static analyzers miss and ruling out false positives." },
      { title: "Comprehensive Reports", description: "In-depth analytics with a detailed summary of vulnerabilities, risks, and clear mitigation recommendations." },
      { title: "Ongoing Security Monitoring", description: "Regular surveillance and periodic assessments detect new vulnerabilities as threats evolve." },
    ],
  },

  whyUs: {
    title: "Why teams trust SpaceDev with their security",
    items: [
      { title: "Fast turnaround", description: "Most audits scoped and started within a week. Time-sensitive launches accommodated." },
      { title: "Battle-tested IT talent", description: "Auditors who have shipped production protocols themselves — not just academic reviewers." },
      { title: "End-to-end coverage", description: "Code, ops, and incident response — we cover the full surface of your security posture." },
      { title: "Real, measurable results", description: "Our clients have shipped to mainnet with real money and zero post-audit incidents." },
    ],
  },

  finalCta: {
    title: "Smart contract audits protect your future — stay secure",
    buttonLabel: "Request an audit",
    buttonHref: "/contact",
  },
};
