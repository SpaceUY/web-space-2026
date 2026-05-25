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
];

export const getBlogTag = (slug: string): BlogTag | undefined =>
  blogTags.find((t) => t.slug === slug);
