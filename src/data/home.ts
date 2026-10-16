/**
 * Home page content, shared by the live home and the brand v2 home so both
 * render the same copy, links and logos from one place.
 */

import type { ServiceSceneId } from "../lib/v2/serviceScenes";

export interface HomeService { title: string; href: string; desc: string }
export interface HomeReason { n: string; title: string; desc: string }
export interface HomeTestimonial { quote: string; company: string; location: string; period: string; href: string }
export interface HomeLogo { src: string; alt: string; href: string; w: number; h: number; compact?: boolean }
export interface HomeIndustry { name: string; slug: string; icon: string; desc: string; linked?: boolean }
export interface HomeTakeaway { label: string; text: string; link?: { href: string; text: string } }
export interface HomeEngagementModel { title: string; subtitle: string; steps: string[]; note: string }

export const homeTakeaways: HomeTakeaway[] = [
  { label: "Who we are:", text: "a blockchain development company and Web3 software partner, 9 years in business with 200+ projects delivered." },
  { label: "What we build:", text: "dApps (decentralized applications), smart contracts, DeFi (decentralized finance) infrastructure, and Web2 web/mobile platforms, under one team." },
  { label: "Differentiator:", text: "a dedicated security practice (BlockAudit) built into every engagement, not bolted on after launch." },
  {
    label: "How to start:",
    link: { href: "https://meetings.hubspot.com/federico-sendra/meet-space", text: "book a free consultation" },
    text: ", we scope your project and recommend an engagement model within days.",
  },
];

// White-only versions for the in-hero strip (dark bg, no baked FAFAFA background).
// Orange has no white asset yet, so it is omitted until one is provided.
// `scale` is an optical adjustment, not a measurement: bold/condensed wordmarks
// (Rarible, UFC, Samsonite, Blockus, Drata) read heavier than thin ones (Schwarzkopf,
// UTEC, prose, Scotiabank, d_local) at the exact same pixel height, so each logo is
// tuned by eye against the rest of the set until they read as one consistent weight.
// `ratio` = each logo's real intrinsic width/height (from its own SVG/PNG
// dimensions), used to render explicit width/height attrs below so the
// browser reserves layout space before the image loads (no CLS), instead
// of computing width from height only after decode.
export const clientLogosWhite: { src: string; alt: string; scale?: number; ratio: number }[] = [
  { src: "/images/clients-white/apple.svg",         alt: "Apple",        ratio: 201 / 238 },
  { src: "/images/clients-white/acton_academy.svg", alt: "Acton Academy", ratio: 473 / 166 },
  { src: "/images/clients-white/microsoft.svg",      alt: "Microsoft",    scale: 0.95, ratio: 77 / 17 },
  { src: "/images/clients-white/drata.svg",          alt: "Drata",        scale: 0.78, ratio: 70 / 15 },
  { src: "/images/clients-white/prose.svg",          alt: "prose",        scale: 1.2,  ratio: 74 / 26 },
  { src: "/images/clients-white/ulta.svg",           alt: "ULTA Beauty", ratio: 70 / 30 },
  { src: "/images/clients-white/scotia.svg",         alt: "Scotiabank",   scale: 1.1,  ratio: 78 / 15 },
  { src: "/images/clients-white/utec.svg",           alt: "UTEC",         scale: 1.25, ratio: 71 / 51 },
  { src: "/images/clients-white/samsonite.svg",      alt: "Samsonite",    scale: 0.8,  ratio: 85 / 13 },
  { src: "/images/clients-white/blockus.svg",        alt: "Blockus",      scale: 0.82, ratio: 95.36 / 18.68 },
  { src: "/images/clients-white/ute.svg",            alt: "UTE",          scale: 1.05, ratio: 69 / 31 },
  { src: "/images/clients-white/d_local.svg",        alt: "dLocal",       scale: 1.15, ratio: 90.72 / 21.12 },
  { src: "/images/clients-white/schwarzkopf.svg",    alt: "Schwarzkopf",  scale: 1.4,  ratio: 73 / 32 },
  { src: "/images/clients-white/rarible.svg",        alt: "Rarible",      scale: 0.72, ratio: 76 / 18 },
  { src: "/images/clients-white/ufc.svg",            alt: "UFC Strike",   scale: 0.75, ratio: 83 / 13 },
  { src: "/images/clients-white/orange.png",         alt: "Orange",       ratio: 1109 / 1109 },
];

// Industry SVG icons: white stroke, for use on purple bg circles
const I_BUILDING = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(9 9)"/><path d="M 0 12 L 0 0 L 21 0 L 21 12 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(1.5 6)"/><path d="M 3.75 3.75 C 1.83 3.425 0.325 1.92 0 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(18.75 6)"/><path d="M 0 3.75 C 0.325 1.83 1.83 0.325 3.75 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(18.75 14.25)"/><path d="M 0 0 C 1.92 0.325 3.425 1.83 3.75 3.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(1.5 14.25)"/><path d="M 3.75 0 C 3.425 1.92 1.92 3.425 0 3.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(1.5 6)"/></svg>`;
const I_CHAT = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 0 0 L 2.25 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(14.25 9.75)"/><path d="M 0 0 L 3 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(6.75 9.75)"/><path d="M 0 0 L 0 3" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(8.25 8.25)"/><path d="M 8.429 9.75 L 4.481 14.231 C 3.671 15.041 2.429 15.232 1.413 14.703 C 0.397 14.174 -0.159 13.047 0.04 11.919 L 1.574 4.031 C 1.983 1.704 4.002 0.005 6.364 0 L 14.625 0 C 17.317 0 19.5 2.183 19.5 4.875 C 19.5 7.567 17.317 9.75 14.625 9.75 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(1.5 4.5)"/><path d="M 0 5.719 L 3.948 10.2 C 4.758 11.01 6 11.201 7.016 10.672 C 8.032 10.143 8.587 9.016 8.389 7.888 L 6.855 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(14.071 8.531)"/></svg>`;
const I_HEART = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 0 2.25 L 3.75 2.25 L 5.25 0 L 8.25 4.5 L 9.75 2.25 L 12 2.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3 10.5)"/><path d="M 0 5.25 C 0 5.187 0 5.125 0 5.063 C 0 2.267 2.267 0 5.063 0 C 7.18 0 8.994 1.154 9.75 3 C 10.506 1.154 12.32 0 14.438 0 C 17.233 0 19.5 2.267 19.5 5.063 C 19.5 11.25 9.75 16.5 9.75 16.5 C 9.75 16.5 5.813 14.381 2.946 11.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.25 4.5)"/></svg>`;
const I_TRUCK = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 0 0 L 3.992 0 C 4.298 0 4.573 0.185 4.688 0.469 L 6 3.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(17.25 7.5)"/><path d="M 0 0 L 15 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.25 13.5)"/><path d="M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(15.75 15.75)"/><path d="M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(5.25 15.75)"/><path d="M 6 0 L 0 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(9.75 18)"/><path d="M 0 0 L 6 0 L 6 6 C 6 6.414 5.664 6.75 5.25 6.75 L 3 6.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(17.25 11.25)"/><path d="M 3 12 L 0.75 12 C 0.336 12 0 11.664 0 11.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15 0 L 15 9.878" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.25 6)"/></svg>`;
const I_GRADUATION = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 0 0 L 0 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3 6)"/><path d="M 0 3.75 C 1.472 1.493 3.854 0 6.75 0 C 9.646 0 12.028 1.493 13.5 3.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(5.25 16.5)"/><path d="M 18 3 L 9 6 L 0 3 L 9 0 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3 3)"/><path d="M 9.126 0 C 11.04 2.095 10.943 5.333 8.906 7.309 C 6.869 9.286 3.631 9.286 1.594 7.309 C -0.443 5.333 -0.54 2.095 1.374 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(6.75 7.708)"/></svg>`;
const I_ENERGY = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 0 0 L 3 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(14.25 12.75)"/><path d="M 0 0 L 0 3" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(15.75 11.25)"/><path d="M 0 0 L 3 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(6.75 12.75)"/><path d="M 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 18.75 0 C 19.164 0 19.5 0.336 19.5 0.75 L 19.5 9.75 C 19.5 10.164 19.164 10.5 18.75 10.5 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.25 7.5)"/><path d="M 0 3 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 3.75 0 C 4.164 0 4.5 0.336 4.5 0.75 L 4.5 3" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(5.25 4.5)"/><path d="M 0 3 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 3.75 0 C 4.164 0 4.5 0.336 4.5 0.75 L 4.5 3" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(14.25 4.5)"/></svg>`;
const I_ROCKET = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 10.417 6.833 C 12.667 4.583 12.807 1.907 12.737 0.713 C 12.713 0.337 12.413 0.037 12.037 0.013 C 10.843 -0.057 8.168 0.082 5.917 2.333 L 0 8.25 L 4.5 12.75 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(7.5 3.75)"/><path d="M 9.749 0 L 3.969 0 C 3.77 0 3.58 0.079 3.439 0.219 L 0.219 3.44 C 0.019 3.641 -0.051 3.938 0.039 4.207 C 0.129 4.476 0.363 4.672 0.644 4.712 L 4.499 5.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.001 6.75)"/><path d="M 5.25 0 L 5.25 5.78 C 5.25 5.978 5.171 6.169 5.031 6.309 L 1.81 9.53 C 1.609 9.73 1.312 9.8 1.043 9.71 C 0.774 9.62 0.578 9.386 0.538 9.105 L 0 5.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(12 11.25)"/><path d="M 5.115 2.473 C 4.752 3.269 3.53 5.115 0 5.115 C 0 1.585 1.846 0.363 2.642 0" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.75 15.135)"/></svg>`;
const I_HOUSE = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 2.25 11.25 L 12 3 L 21.75 11.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M 4.5 9.75 L 4.5 21 L 19.5 21 L 19.5 9.75" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M 9.75 21 L 9.75 15.75 L 14.25 15.75 L 14.25 21" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>`;
const I_SHIELD = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" style="width:100%;height:100%"><path d="M 12 22 C 12 22 20 18 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18 12 22 12 22 Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>`;

export const homeIndustries: HomeIndustry[] = [
  { name: "Finance and Fintech",          slug: "finance-and-fintech",          icon: I_BUILDING,   desc: "SpaceDev helps financial institutions and fintech startups build secure, scalable products that enhance transparency and automation.\nFrom DeFi platforms and payment gateways to traditional fintech systems, tokenized assets, and digital wallets, we simplify complexity and drive financial innovation." },
  { name: "Web3 Compliance",              slug: "compliance-web3",              icon: I_SHIELD,     desc: "We build regulatory-ready infrastructure for DeFi, security tokens, and Web3 platforms: on-chain KYC/AML, ERC-1400 and ERC-3643 transfer restrictions, and decentralized identity.\nOur architecture is designed to satisfy FATF, MiCA, and SEC requirements without breaking decentralization." },
  { name: "Healthcare and Life Sciences", slug: "healthcare",                   icon: I_HEART,      desc: "We help healthcare providers ensure data integrity, secure patient identity management, and traceable medical supply chains.\nOur solutions prioritize compliance, security, and seamless interoperability." },
  { name: "Supply Chain and Logistics",   slug: "supply-chain-and-logistics",   icon: I_TRUCK,      desc: "We build solutions that bring real-time visibility, tracking, and trust to global logistics.\nOur systems reduce fraud, enhance traceability, and simplify auditing at every stage." },
  { name: "Real Estate and PropTech",     slug: "real-estate",                  icon: I_HOUSE,      desc: "We can create tokenized property solutions, automated contract workflows, and secure ownership records that streamline property transactions and investment management." },
  { name: "Energy",                       slug: "energy",                       icon: I_ENERGY,     desc: "We help leading energy companies enhance data integrity, collaboration, and operational visibility. Our solutions support exploration and production through automated reporting, streamlined joint ventures, and improved efficiency across the oil and gas value chain." },
  { name: "Education and EdTech",         slug: "education-and-edtech",         icon: I_GRADUATION, desc: "SpaceDev supports educational platforms with digital learning systems, decentralized certification, and blockchain credentials that enhance authenticity and accessibility.",                                                                 linked: false },
  { name: "Startups and Emerging Ventures", slug: "startups-and-emerging-ventures", icon: I_ROCKET, desc: "We help founders turn ideas into products through Product Discovery, MVP development, and rapid prototyping.\nWhether entering Web3 or scaling a SaaS, our team delivers the strategy, speed, and structure to grow.",                   linked: false },
];

export const homeServices: HomeService[] = [
  { title: "Blockchain Software Development", href: "/blockchain-development-services", desc: "Custom blockchain solutions for products that need more than a generic stack. We design and build decentralized applications (dApps), token systems, DeFi protocols, and Layer 1/Layer 2 infrastructure with architecture decisions grounded in your product's actual scale requirements." },
  { title: "Web and Mobile App Development", href: "/innovative-web-and-mobile-solutions", desc: "From web platforms to mobile apps, we build high-performance digital products that users actually enjoy. Design thinking, agile development, and scalable architecture: all under one team." },
  { title: "IT Staff Augmentation", href: "/staff-augmentation", desc: "Connect with skilled developers, designers, and engineers who fit your workflow from day one. You get the expertise without the overhead, faster and fully managed." },
  { title: "Product Discovery", href: "/product-discovery", desc: "We help you validate ideas, define priorities, and design a roadmap before writing a single line of code. Business goals, user needs, and technical scope, aligned from day one." },
  { title: "BlockAudit: Blockchain Security", href: "/blockaudit-smart-contract-and-blockchain-security", desc: "We audit your smart contracts and blockchain systems to catch vulnerabilities before they become risks. Secure, compliant, and performance-optimized from the start." },
];

export const homeReasons: HomeReason[] = [
  { n: "01", title: "Full-cycle product ownership", desc: "One partner from discovery to post-launch. No handoff gaps." },
  { n: "02", title: "Web3 + Web2 under one team", desc: "Blockchain infrastructure and the product layer built together." },
  { n: "03", title: "BlockAudit security practice", desc: "Smart contract auditing built into development, not bolted on." },
  { n: "04", title: "Flexible engagement models", desc: "Staff aug, fixed-scope, or full MVP (minimum viable product) builds, structured around your needs." },
  { n: "05", title: "50+ five-star client reviews", desc: "Verified on Clutch and GoodFirms across DeFi, fintech, and gaming." },
  { n: "06", title: "AWS Partner", desc: "Cloud infrastructure support alongside blockchain development." },
];

export const homeEngagementModels: HomeEngagementModel[] = [
  {
    title: "MVP Builder",
    subtitle: "Build a high-tech team for a speedy, top-tier MVP",
    steps: [
      "Discovery Phase",
      "Proposal Phase",
      "MVP Build",
      "Product Growth and Support",
    ],
    note: "Perfect for clients needing to swiftly launch a top-quality MVP. Most MVPs are production-ready in 8 to 12 weeks.",
  },
  {
    title: "IT Staff Augmentation",
    subtitle: "Optimize your team with flexible IT talent support without permanent commitments.",
    steps: [
      "Identify Your Needs",
      "Candidate Screening Process",
      "Welcome Aboard!",
      "Management & Scaling",
    ],
    note: "Ideal for rapidly scaling team capacity with on-demand expert IT talent. Most engineers are ready to start within 1 to 2 weeks.",
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  { quote: `"They showed a strong commitment to resolving issues and delivering effective solutions"`, company: "Ubicuity", location: "San Francisco, California", period: "APR 2023 - NOV 2023", href: "https://clutch.co/profile/spacedev?page=4#review-248076" },
  { quote: `"It's a pleasure to collaborate with them"`, company: "Ulta Beauty", location: "Bolingbrook, Illinois", period: "APR 2023 - ONGOING", href: "https://clutch.co/profile/spacedev?page=2#review-242145" },
  { quote: `"SpaceDev meets the required deadlines"`, company: "Blockus", location: "San Francisco, California", period: "JAN 2023 - ONGOING", href: "https://clutch.co/profile/spacedev?page=5#review-219434" },
  { quote: `"They felt more like a partner than a service provider"`, company: "Boto", location: "Spain", period: "FEB 2022 - FEB 2023", href: "https://clutch.co/profile/spacedev#review-244036" },
];

export const homeAwards: HomeLogo[] = [
  { src: "/images/badges/aws-marketplace.png",                 alt: "Available in AWS Marketplace",                      href: "https://aws.amazon.com/marketplace/pp/prodview-tkuck454u2bxa", w: 1335, h: 446, compact: true },
  { src: "/images/badges/aws-partner.svg",                     alt: "AWS Partner",                                          href: "https://partners.amazonaws.com/partners/0010h00001kLtZRAA0/SpaceDev", w: 450, h: 451 },
  { src: "/images/badges/forbes-technology-council-2024.svg",  alt: "Official Member Forbes Technology Council 2024",    href: "https://www.forbes.com/councils/forbestechcouncil/", w: 119, h: 119 },
  { src: "/images/badges/forbes-technology-council-2023.svg",  alt: "Official Member Forbes Technology Council 2023",   href: "https://www.forbes.com/councils/forbestechcouncil/", w: 89, h: 128 },
  { src: "/images/badges/upwork-expert-vetted.svg",            alt: "Upwork Expert-Vetted Leading Development Company", href: "https://www.upwork.com/agencies/spacedev/", w: 121, h: 98 },
  { src: "/images/badges/manifest-most-reviewed-miami.svg",    alt: "Most Reviewed Software Developers Miami",           href: "https://themanifest.com/", w: 85, h: 129 },
  { src: "/images/badges/goodfirms-top-blockchain.svg",        alt: "Top Blockchain Development Company GoodFirms",        href: "https://www.goodfirms.co/", w: 120, h: 102 },
  { src: "/images/badges/clutch-1000-2023.svg",                alt: "Clutch 1000 2023",                                  href: "https://clutch.co/profile/spacedev", w: 119, h: 119 },
  { src: "/images/badges/clutch-top-blockchain-2026.png",       alt: "Top Blockchain Company Clutch 2026",                href: "https://clutch.co/profile/spacedev", w: 368, h: 355 },
  { src: "/images/badges/clutch-top-blockchain-latam-2026.png", alt: "Top Blockchain Company Clutch Latin America 2026",  href: "https://clutch.co/profile/spacedev", w: 368, h: 355 },
  { src: "/images/badges/clutch-top-ethereum-2026.png",         alt: "Top Ethereum Company Clutch 2026",                  href: "https://clutch.co/profile/spacedev", w: 368, h: 355 },
  { src: "/images/badges/clutch-top-web3-2026.png",             alt: "Top Web3 Development Clutch 2026",                  href: "https://clutch.co/profile/spacedev", w: 800, h: 864 },
  { src: "/images/badges/clutch-top-ethereum-2024.svg",        alt: "Top Ethereum Company Clutch 2024",                 href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
  { src: "/images/badges/clutch-top-blockchain-2024.svg",      alt: "Top Blockchain Company Clutch 2024",                href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
  { src: "/images/badges/clutch-top-blockchain-latam-2024.svg",alt: "Top Blockchain Company Clutch Latin America 2024",  href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
  { src: "/images/badges/clutch-top-web3-2023.svg",            alt: "Top Web3 Clutch 2023",                              href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
  { src: "/images/badges/clutch-top-blockchain-2023.svg",      alt: "Top Blockchain Company Clutch 2023",                 href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
  { src: "/images/badges/clutch-top-blockchain-latam-2023.svg",alt: "Top Blockchain Company Clutch Latin America 2023", href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
  { src: "/images/badges/clutch-top-b2b-uruguay-2022.svg",     alt: "Top B2B Companies Clutch Uruguay 2022",              href: "https://clutch.co/profile/spacedev", w: 120, h: 129 },
];

export const homeCommunities: HomeLogo[] = [
  { src: "/images/content/tEUseewFeuWDUJuJGNTkPa0amk.png", alt: "Ethereum Argentina",          href: "https://ethereumargentina.org/", w: 1005, h: 391 },
  { src: "/images/content/j5gWTfiVgDuBsVZ2AV0EDRao8.png",  alt: "DEC Institute",               href: "https://decinstitute.org/", w: 776, h: 136 },
  { src: "/images/content/MrWHz25zFuUyPR7j3zfp9W3zM.png",  alt: "Ethereum Uruguay",            href: "https://www.ethereumuruguay.org/", w: 910, h: 421 },
  { src: "/images/content/wdpDn751pDCKDfmyyHBXCFMqhns.svg", alt: "Cámara Blockchain Uruguay",  href: "https://www.cbu.org.uy/", w: 311, h: 94 },
  { src: "/images/content/kM3IjbL29OQveuvBHUmbnpSDBmE.png", alt: "IT Builders",                href: "https://itbuilderslive.com/", w: 661, h: 221 },
  { src: "/images/content/MYcPcE7qfLNS2A6YUn0AALlhU.png",  alt: "DevFest Google",             href: "https://developers.google.com/community", w: 1640, h: 807 },
  { src: "/images/content/product-tank.avif",                alt: "ProductTank",                href: "https://www.mindtheproduct.com/producttank/", w: 512, h: 194 },
  { src: "/images/content/YNeJkqrfvKqDVlMxsZydxYCPtc.svg", alt: "CUTI",                       href: "https://cuti.org.uy/", w: 257, h: 93 },
  { src: "/images/content/fz7h8Vi22wz1sBL99ZxGS44Kw.png",  alt: "Uruguay Technology",         href: "https://uruguaytechnology.uy/en/", w: 590, h: 248 },
];

/** Brand v2: dot scene shown for each core service, keyed by the service link. */
export const homeServiceScenes: Record<string, ServiceSceneId> = {
  "/blockchain-development-services": "chain",
  "/innovative-web-and-mobile-solutions": "devices",
  "/staff-augmentation": "team",
  "/product-discovery": "radar",
  "/blockaudit-smart-contract-and-blockchain-security": "shield",
};
