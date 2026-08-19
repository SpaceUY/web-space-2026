export type CaseStudyCategory = "Web2" | "Web3";

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  category: CaseStudyCategory;
  industry?: string;
  featured?: boolean;
  /** Accent gradient — uses design tokens */
  accent?: "purple" | "cyan" | "green" | "mixed";
  /** Card hero image (under /images/case-studies/[slug]/) */
  image?: string;
  /** Short outcome highlight tag shown on cards (e.g. "5+ chains", "4yr partnership") */
  highlight?: string;
  /** 2-3 service labels shown as pills on cards */
  services?: string[];
  /** Optional fields used by the case-study detail template (mirrors content collection schema) */
  heroImage?: string;
  summary?: string;
  objectives?: string[];
  deliverables?: string[];
  outcome?: string;
  gallery?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "byrrgis", name: "Byrrgis",
    featured: true,
    tagline: "Non-custodial Web3 broker for cross-chain token trading.",
    category: "Web3", industry: "DeFi & Crypto", accent: "cyan",
    image: "/images/case-studies/byrrgis/byrrgis_.png",
    highlight: "Cross-chain DeFi",
    services: ["Product Discovery", "DeFi", "Mobile"],
  },
  {
    slug: "zenda", name: "Zenda",
    featured: true,
    tagline: "Crypto exchange built for everyday users: buy and sell USDT with fiat in Uruguay.",
    category: "Web3", industry: "Exchange", accent: "cyan",
    image: "/images/case-studies/zenda/zenda_.png",
    highlight: "200+ orders",
    services: ["Product Discovery", "Product Development"],
  },
  {
    slug: "aura", name: "Aura",
    featured: true,
    tagline: "Mobile app for gold-backed savings and investment, powered by XAUT.",
    category: "Web3", industry: "Finance & Investments", accent: "purple",
    image: "/images/case-studies/aura/aura_.png",
    highlight: "5.5mo to production",
    services: ["Product Discovery", "Product Development", "Mobile"],
  },
  {
    slug: "drata", name: "Drata",
    featured: false,
    tagline: "On a mission to build trust across the cloud.",
    category: "Web2", industry: "SaaS & Products", accent: "mixed",
    image: "/images/case-studies/drata/drata_.png",
    highlight: "4+ year partnership",
    services: ["Product Engineering", "Desktop App", "Backend"],
  },
  {
    slug: "rarible", name: "Rarible",
    featured: false,
    tagline: "Community-owned NFT marketplace at scale.",
    category: "Web3", industry: "NFT & Gaming", accent: "purple",
    image: "/images/case-studies/rarible/rarible_.png",
    highlight: "5+ chains deployed",
    services: ["Smart Contracts", "Multi-chain", "SDK"],
  },
  {
    slug: "ndax-canada", name: "NDAX Canada",
    tagline: "Regulated crypto exchange for the Canadian market.",
    category: "Web3", industry: "DeFi & Crypto", accent: "cyan",
    image: "/images/case-studies/ndax-canada/ndax-canada_.png",
    highlight: "Regulated exchange",
    services: ["Backend", "Compliance", "Trading Engine"],
  },
  {
    slug: "blockus", name: "Blockus",
    tagline: "Web3 infrastructure for game studios.",
    category: "Web3", industry: "NFT & Gaming", accent: "green",
    image: "/images/case-studies/blockus/blockus_.png",
    highlight: "< 1wk studio onboarding",
    services: ["SDK Dev", "Smart Contracts", "Dev Console"],
  },
  {
    slug: "blockchain-for-energy", name: "Blockchain For Energy (B4E)",
    featured: true,
    tagline: "Decentralized energy data trust layer.",
    category: "Web3", industry: "Enterprise", accent: "green",
    image: "/images/case-studies/blockchain-for-energy/blockchain-for-energy_.png",
    highlight: "Energy Web3",
    services: ["Blockchain", "Data Layer", "Smart Contracts"],
  },
  {
    slug: "fightfi", name: "FightFI",
    featured: true,
    tagline: "The ultimate fight-fan experience.",
    category: "Web3", industry: "NFT & Gaming", accent: "cyan",
    image: "/images/case-studies/fightfi/fightfi_.png",
    highlight: "Fan engagement",
    services: ["Web3", "Mobile", "Product Design"],
  },
  {
    slug: "apebond", name: "ApeBond",
    tagline: "On-chain OTC marketplace.",
    category: "Web3", industry: "DeFi & Crypto", accent: "purple",
    image: "/images/case-studies/apebond/apebond_.png",
    highlight: "OTC on-chain",
    services: ["DeFi", "Smart Contracts", "Frontend"],
  },
  {
    slug: "ubicuity", name: "Ubicuity",
    tagline: "Bring your spaces to life with interactive digital experiences.",
    category: "Web3", industry: "Enterprise", accent: "purple",
    image: "/images/case-studies/ubicuity/ubicuity_.png",
    highlight: "Interactive spaces",
    services: ["Web App", "Mobile", "Product Design"],
  },
  {
    slug: "athleteai", name: "AthleteAI",
    tagline: "Record your highlights, get noticed by the world.",
    category: "Web2", industry: "AI & Data", accent: "cyan",
    image: "/images/case-studies/athleteai/athleteai_.png",
    highlight: "Sports highlights app",
    services: ["Mobile", "Video", "Product Design"],
  },
  {
    slug: "twispi", name: "Twispi",
    tagline: "HR and financial wellness platform for Mexico's workforce.",
    category: "Web2", industry: "SaaS & Products", accent: "mixed",
    image: "/images/case-studies/twispi/twispi_.png",
    highlight: "HR + fintech",
    services: ["Web App", "Payments", "Backend"],
  },
  {
    slug: "mostaza", name: "Mostaza",
    tagline: "Loyalty + ordering platform for QSR chain.",
    category: "Web2", industry: "SaaS & Products", accent: "purple",
    image: "/images/case-studies/mostaza/mostaza_.png",
    highlight: "1M+ customers",
    services: ["Mobile", "Loyalty", "Integrations"],
  },
  {
    slug: "glowy-music", name: "Glowy Music",
    tagline: "Connecting music fans with artists, events, and the industry they love.",
    category: "Web2", industry: "SaaS & Products", accent: "green",
    image: "/images/case-studies/glowy-music/glowy-music_.webp",
    highlight: "Music discovery app",
    services: ["Web App", "Audio", "Product Design"],
  },
  {
    slug: "piggygpt", name: "PiggyGPT",
    tagline: "AI-powered personal finance assistant.",
    category: "Web2", industry: "AI & Data", accent: "cyan",
    image: "/images/case-studies/piggygpt/piggygpt_.png",
    highlight: "AI + fintech",
    services: ["AI/ML", "FinTech", "Mobile"],
  },
  {
    slug: "bondi-finance", name: "Bondi Finance",
    tagline: "RWA fixed-income protocol.",
    category: "Web3", industry: "DeFi & Crypto", accent: "mixed",
    image: "/images/case-studies/bondi-finance/bondi-finance_.png",
    highlight: "Real World Assets",
    services: ["DeFi", "Smart Contracts", "Backend"],
  },
  {
    slug: "gallery", name: "Gallery",
    tagline: "Curated NFT exhibitions for collectors.",
    category: "Web3", industry: "NFT & Gaming", accent: "purple",
    image: "/images/case-studies/gallery/gallery_.png",
    highlight: "NFT curation",
    services: ["Web3", "Frontend", "Product Design"],
  },
  {
    slug: "genba", name: "Genba",
    tagline: "Driving innovation in Latin America through factory automation.",
    category: "Web2", industry: "Enterprise", accent: "green",
    image: "/images/case-studies/genba/genba_.png",
    highlight: "Factory automation",
    services: ["Automation", "Robotics", "Backend"],
  },
  {
    slug: "iaffirm", name: "iAffirm",
    tagline: "Verified credentials on-chain.",
    category: "Web3", industry: "Enterprise", accent: "cyan",
    image: "/images/case-studies/iaffirm/iaffirm_.webp",
    highlight: "Verifiable IDs",
    services: ["Identity", "Smart Contracts", "SDK"],
  },
  {
    slug: "acme", name: "ACME",
    tagline: "Turn loyalty points into currency with just a tap.",
    category: "Web3", industry: "Enterprise", accent: "purple",
    image: "/images/case-studies/acme/acme_.png",
    highlight: "Loyalty + crypto",
    services: ["Wallets", "Fintech", "Backend"],
  },
  {
    slug: "w3e", name: "W3E",
    tagline: "Web3 gaming launchpad for hassle-free IDO and INO investments.",
    category: "Web3", industry: "SaaS & Products", accent: "green",
    image: "/images/case-studies/w3e/w3e_.png",
    highlight: "Gaming launchpad",
    services: ["Web3", "Gaming", "Smart Contracts"],
  },
  {
    slug: "nga", name: "NGA",
    tagline: "Bringing Acton School of Business's courses to the world.",
    category: "Web2", industry: "AI & Data", accent: "mixed",
    image: "/images/case-studies/nga/nga_.png",
    highlight: "EdTech platform",
    services: ["EdTech", "Backend", "Web App"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
