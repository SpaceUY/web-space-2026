export type CaseStudyCategory = "Web2" | "Web3";

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  category: CaseStudyCategory;
  featured?: boolean;
  /** Accent gradient — uses design tokens */
  accent?: "purple" | "cyan" | "green" | "mixed";
  /** Card hero image (under /images/content/) */
  image?: string;
  /** Optional fields used by the case-study detail template (mirrors content collection schema) */
  heroImage?: string;
  summary?: string;
  objectives?: string[];
  deliverables?: string[];
  outcome?: string;
  gallery?: string[];
}

export const caseStudies: CaseStudy[] = [
  { slug: "blockchain-for-energy", name: "Blockchain For Energy (B4E)", tagline: "Decentralized energy data trust layer.", category: "Web3", featured: true, accent: "green", image: "/images/content/zFnoUrxDLmxmtNrnnpiSOQg0VQ.png" },
  { slug: "fightfi", name: "FightFI", tagline: "The ultimate fight-fan experience.", category: "Web3", featured: true, accent: "cyan", image: "/images/content/Ot2G31pfkONVdn2AZOpauSzjaM.png" },
  { slug: "apebond", name: "ApeBond", tagline: "On-chain OTC marketplace.", category: "Web3", featured: true, accent: "purple", image: "/images/content/jFjYlwZscEpK3iaAEVfkutO6iyE.png" },
  { slug: "drata", name: "Drata", tagline: "On a mission to build trust across the cloud.", category: "Web2", featured: true, accent: "mixed", image: "/images/content/MjN8JV42Jr7sHrm1ESoTERxz0.png" },
  { slug: "rarible", name: "Rarible", tagline: "Community-owned NFT marketplace at scale.", category: "Web3", accent: "purple", image: "/images/content/ARj6QnZDQWmG0kFMu7g1VooFoY.png" },
  { slug: "ndax-canada", name: "NDAX Canada", tagline: "Regulated crypto exchange for the Canadian market.", category: "Web3", accent: "cyan", image: "/images/content/1oYizfRQHYQJrDo0uSWNaoHKEOc.png" },
  { slug: "blockus", name: "Blockus", tagline: "Web3 infrastructure for game studios.", category: "Web3", accent: "green", image: "/images/content/1S1Y2PjzlkTmoFxuPOZKRZ9f6Q.png" },
  { slug: "ubicuity", name: "Ubicuity", tagline: "Smart asset management with IoT + blockchain.", category: "Web3", accent: "purple", image: "/images/content/06y9kEkgPbQsU78IQC7I8nSZTSU.png" },
  { slug: "athleteai", name: "AthleteAI", tagline: "AI coaching for athletes at every level.", category: "Web2", accent: "cyan", image: "/images/content/Ali9YqnrWOTGFPxwRQVXV45hyEc.png" },
  { slug: "twispi", name: "Twispi", tagline: "Subscription commerce for creators.", category: "Web2", accent: "mixed", image: "/images/content/0sy7J541aQiAxDWu9aIOHI4dsnc.png" },
  { slug: "mostaza", name: "Mostaza", tagline: "Loyalty + ordering platform for QSR chain.", category: "Web2", accent: "purple", image: "/images/content/9rmaMxYJ0sZhtf3po6j9stcKFSk.png" },
  { slug: "glowy-music", name: "Glowy Music", tagline: "Music-powered immersive experiences.", category: "Web2", accent: "green", image: "/images/content/0KhPTyLW0QYS4e3I9rav5yvVXU.png" },
  { slug: "piggygpt", name: "PiggyGPT", tagline: "AI-powered personal finance assistant.", category: "Web2", accent: "cyan", image: "/images/content/1a0fCOiJQyGNmhsITzL4Hv6vibY.png" },
  { slug: "bondi-finance", name: "Bondi Finance", tagline: "RWA fixed-income protocol.", category: "Web3", accent: "mixed", image: "/images/content/0pEUCzUnBLnsX7uRs50aFr0RVUg.png" },
  { slug: "gallery", name: "Gallery", tagline: "Curated NFT exhibitions for collectors.", category: "Web3", accent: "purple", image: "/images/content/33iREgidXL4SpQEZuEvXAzXFzeE.png" },
  { slug: "genba", name: "Genba", tagline: "On-chain manufacturing transparency.", category: "Web3", accent: "green", image: "/images/content/3Yx2oVNjRiB0sekSMLKn2N4Ko4c.png" },
  { slug: "iaffirm", name: "iAffirm", tagline: "Verified credentials on-chain.", category: "Web3", accent: "cyan", image: "/images/content/1x8OnazrWmpOMfg5O7kwSo4hkk.png" },
  { slug: "acme", name: "ACME", tagline: "Enterprise wallet infrastructure.", category: "Web3", accent: "purple", image: "/images/content/0nylq8mCRszdPqwB6nOZfTR0o0.png" },
  { slug: "w3e", name: "W3E", tagline: "Web3 education platform.", category: "Web3", accent: "green", image: "/images/content/0gKCPPHervtjDWwfsXxXf7BLc.png" },
  { slug: "nga", name: "NGA", tagline: "Next-gen analytics for trading desks.", category: "Web2", accent: "mixed", image: "/images/content/2CwAd6ccigfVSdBclguDlaBJFHI.png" },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
