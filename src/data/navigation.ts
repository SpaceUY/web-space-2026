/**
 * Primary navigation, shared by the desktop header, the mobile menu and the
 * brand v2 header so every menu lists the same pages in the same order.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const blockchainNavItems: NavItem[] = [
  { label: "Smart Contract Development",  href: "/blockchain-development-services/smart-contract-development" },
  { label: "Asset Tokenization",          href: "/blockchain-development-services/asset-tokenization" },
  { label: "dApp Development",            href: "/blockchain-development-services/dapp-development" },
  { label: "Decentralized Identity",      href: "/blockchain-development-services/decentralized-identity" },
  { label: "Blockchain Partner",          href: "/blockchain-development-services/blockchain-partner" },
  { label: "Layer-1 Development",         href: "/blockchain-development-services/layer-1-blockchain-development" },
  { label: "DAO Development",             href: "/blockchain-development-services/dao-development" },
  { label: "White Label Crypto Exchange", href: "/blockchain-development-services/white-label-crypto-exchanges" },
  { label: "Crypto Token Development",    href: "/blockchain-development-services/crypto-token-development" },
];

export const otherExpertiseNavItems: NavItem[] = [
  { label: "Innovative Web & Mobile",     href: "/innovative-web-and-mobile-solutions" },
  { label: "IT Staff Augmentation",       href: "/staff-augmentation" },
  { label: "Agentic AI Development",      href: "/agentic-ai-development" },
  { label: "Product Discovery",           href: "/product-discovery" },
  { label: "BlockAudit: Blockchain Security", href: "/blockaudit-smart-contract-and-blockchain-security" },
];

export const industryNavItems: NavItem[] = [
  { label: "Banking",                  href: "/blockchain-development-services/industry/banking" },
  { label: "Energy",                   href: "/blockchain-development-services/industry/energy" },
  { label: "Finance & Fintech",        href: "/blockchain-development-services/industry/finance-and-fintech" },
  { label: "Gaming",                   href: "/blockchain-development-services/industry/gaming" },
  { label: "Healthcare",               href: "/blockchain-development-services/industry/healthcare" },
  { label: "Real Estate",              href: "/blockchain-development-services/industry/real-estate" },
  { label: "Supply Chain & Logistics", href: "/blockchain-development-services/industry/supply-chain-and-logistics" },
  { label: "Telecommunications",       href: "/blockchain-development-services/industry/telecommunications" },
  { label: "Web3 Compliance",          href: "/blockchain-development-services/industry/compliance-web3" },
];

export const aboutNavItems: NavItem[] = [
  { label: "About Us",           href: "/about-us" },
  { label: "FAQs",               href: "/faqs" },
  { label: "Events Calendar",    href: "/events-calendar" },
  { label: "SpaceDev in the Media", href: "/spacedev-in-the-media" },
  { label: "Careers",            href: "/careers" },
];

/** Top-level entries of the brand v2 header. Entries with a `menu` open the mega panel. */
export type NavMenuId = "expertise" | "industries" | "about";

export interface NavTopItem {
  label: string;
  href?: string;
  menu?: NavMenuId;
}

export const navTopItems: NavTopItem[] = [
  { label: "Our Expertise", menu: "expertise" },
  { label: "Industries", menu: "industries" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", menu: "about" },
  { label: "Learn", href: "/blog" },
];

export interface NavFeature {
  eyebrow: string;
  title: string;
  href: string;
  external?: boolean;
  image: string;
}

/** Highlighted card on the right of each mega panel. Copy is taken from the site. */
export const navFeatures: Record<NavMenuId, NavFeature> = {
  expertise: {
    eyebrow: "How to start",
    title: "Book a free consultation",
    href: "https://meetings.hubspot.com/federico-sendra/meet-space",
    external: true,
    image: "/images/brand/v2/astronauta_laptop_violeta.webp",
  },
  industries: {
    eyebrow: "Industries",
    title: "Blockchain Development for Fintech, DeFi & Web3 Startups",
    href: "/blockchain-development-services#industries",
    image: "/images/brand/v2/exploradores_violeta.webp",
  },
  about: {
    eyebrow: "Our Work",
    title: "Web3 and Web2 Development Case Studies",
    href: "/our-work",
    image: "/images/brand/v2/equipo_consola_violeta.webp",
  },
};
