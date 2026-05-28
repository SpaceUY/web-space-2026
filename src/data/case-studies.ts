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
    slug: "nomei", name: "Nomei",
    featured: true,
    tagline: "AI-native personal development platform with memory, coaching, and enterprise-grade safeguarding.",
    category: "Web2", industry: "Wellness & AI", accent: "purple",
    image: "/images/case-studies/nomei/nomei_.png",
    highlight: "Multi-LLM AI",
    services: ["Product Development", "AI Engineering"],
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
    tagline: "Smart asset management with IoT + blockchain.",
    category: "Web3", industry: "Enterprise", accent: "purple",
    image: "/images/case-studies/ubicuity/ubicuity_.png",
    highlight: "IoT + blockchain",
    services: ["Blockchain", "IoT", "Backend"],
  },
  {
    slug: "athleteai", name: "AthleteAI",
    tagline: "AI coaching for athletes at every level.",
    category: "Web2", industry: "AI & Data", accent: "cyan",
    image: "/images/case-studies/athleteai/athleteai_.png",
    highlight: "AI coaching",
    services: ["AI/ML", "Mobile", "Product Design"],
  },
  {
    slug: "twispi", name: "Twispi",
    tagline: "Subscription commerce for creators.",
    category: "Web2", industry: "SaaS & Products", accent: "mixed",
    image: "/images/case-studies/twispi/twispi_.png",
    highlight: "Creator commerce",
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
    tagline: "Music-powered immersive experiences.",
    category: "Web2", industry: "NFT & Gaming", accent: "green",
    image: "/images/case-studies/glowy-music/glowy-music_.png",
    highlight: "Immersive tech",
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
    tagline: "On-chain manufacturing transparency.",
    category: "Web3", industry: "Enterprise", accent: "green",
    image: "/images/case-studies/genba/genba_.png",
    highlight: "Supply chain",
    services: ["Blockchain", "Smart Contracts", "Backend"],
  },
  {
    slug: "iaffirm", name: "iAffirm",
    tagline: "Verified credentials on-chain.",
    category: "Web3", industry: "Enterprise", accent: "cyan",
    image: "/images/case-studies/iaffirm/iaffirm_.png",
    highlight: "Verifiable IDs",
    services: ["Identity", "Smart Contracts", "SDK"],
  },
  {
    slug: "acme", name: "ACME",
    tagline: "Enterprise wallet infrastructure.",
    category: "Web3", industry: "Enterprise", accent: "purple",
    image: "/images/case-studies/acme/acme_.png",
    highlight: "Enterprise wallets",
    services: ["Wallets", "Security", "Backend"],
  },
  {
    slug: "w3e", name: "W3E",
    tagline: "Web3 education platform.",
    category: "Web3", industry: "SaaS & Products", accent: "green",
    image: "/images/case-studies/w3e/w3e_.png",
    highlight: "Web3 education",
    services: ["Web App", "Content", "Product Design"],
  },
  {
    slug: "nga", name: "NGA",
    tagline: "Next-gen analytics for trading desks.",
    category: "Web2", industry: "AI & Data", accent: "mixed",
    image: "/images/case-studies/nga/nga_.png",
    highlight: "Trading analytics",
    services: ["Data Viz", "Backend", "Web App"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
