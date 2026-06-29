export interface BlogTag {
  slug: string;
  label: string;
  description: string;
}

export const blogTags: BlogTag[] = [
  {
    slug: "defi",
    label: "DeFi",
    description: "Decentralized finance, RWA, lending, stablecoins and protocols",
  },
  {
    slug: "smart-contracts",
    label: "Smart Contracts",
    description: "Audits, security, EVM and Solidity development",
  },
  {
    slug: "web3-infrastructure",
    label: "Web3 Infrastructure",
    description: "Layer 1 & 2, rollups, oracles, ZK proofs and protocol architecture",
  },
  {
    slug: "nft-gaming",
    label: "NFT & Gaming",
    description: "NFT marketplaces, gaming, digital ownership and tokenized assets",
  },
  {
    slug: "ai",
    label: "AI",
    description: "AI agents, machine learning, on-chain AI and automation",
  },
  {
    slug: "fintech",
    label: "FinTech",
    description: "Payments, crypto exchanges, and Web2-to-Web3 migration for financial products",
  },
  {
    slug: "product-growth",
    label: "Product & Growth",
    description: "Marketing, hiring, product strategy and team building",
  },
  {
    slug: "blockchain-basics",
    label: "Blockchain Basics",
    description: "Introductory guides, fundamentals, wallets and key concepts",
  },
  {
    slug: "blockchain",
    label: "Blockchain",
    description: "Distributed ledger technology, protocols, consensus mechanisms and network fundamentals",
  },
  {
    slug: "rwa",
    label: "Real World Assets",
    description: "Tokenization of real-world assets including real estate, commodities and fixed income",
  },
  {
    slug: "layer1",
    label: "Layer 1",
    description: "Base-layer blockchain protocols, consensus mechanisms and sovereign chain infrastructure",
  },
  {
    slug: "tokenization",
    label: "Tokenization",
    description: "Converting real-world assets into digital tokens and building tokenized product infrastructure",
  },
  {
    slug: "institutional",
    label: "Institutional",
    description: "Blockchain solutions for banks, fintechs and enterprise financial institutions",
  },
  {
    slug: "web3",
    label: "Web3",
    description: "The decentralized web, dApps, protocols and the next generation of internet infrastructure",
  },
  {
    slug: "ethereum",
    label: "Ethereum",
    description: "Ethereum ecosystem, EVM, network upgrades and application development",
  },
  {
    slug: "solana",
    label: "Solana",
    description: "Solana ecosystem, high-performance blockchain and program development",
  },
  {
    slug: "enterprise",
    label: "Enterprise",
    description: "Enterprise blockchain solutions, business use cases and corporate adoption strategies",
  },
  {
    slug: "compliance",
    label: "Compliance",
    description: "Regulatory compliance, KYC/AML, legal frameworks and standards for blockchain products",
  },
];

export const getBlogTag = (slug: string): BlogTag | undefined =>
  blogTags.find((t) => t.slug === slug);
