export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Initials for avatar placeholder */
  initials: string;
  /** Tailwind gradient classes for avatar background */
  avatarGradient: string;
  /** Optional photo for hero/avatar (overrides initials placeholder when set) */
  avatar?: string;
  /** Optional larger cover/portrait image used in author hero */
  coverImage?: string;
  /** Optional gallery of additional photos (speaking, posts, etc.) */
  gallery?: { src: string; alt: string }[];
  social?: { linkedin?: string; twitter?: string; github?: string };
}

export const authors: Author[] = [
  {
    slug: "federico-sendra",
    name: "Federico Sendra",
    role: "CEO & Co-founder",
    bio: "Federico co-founded SpaceDev to bring startup agility to enterprise-grade engineering. He's spent the last decade helping Web2 and Web3 teams ship products that perform, from MVPs to multi-year platforms.",
    initials: "FS",
    avatarGradient: "from-sd-purple-300 to-sd-purple",
    avatar: "/images/content/DOT9ldmLAaVJejBjOexpqu1bDjs.webp",
    coverImage: "/images/content/omTsS6LBwAYeMPbJvn9cltlRnVs.jpeg",
    gallery: [
      { src: "/images/content/00eqLdyrpfZBRz5DKemobh4kQU.webp", alt: "Federico Sendra delivering a keynote on Web3 product strategy." },
      { src: "/images/content/296cG2J65VRaZ0eW0r6e33YIg1g.png", alt: "Federico Sendra interviewing a candidate at SpaceDev's Montevideo office." },
      { src: "/images/content/9X2GlCwcuQ6xnkjL24hYUhozU.webp", alt: "Federico Sendra at an industry conference panel." },
      { src: "/images/content/Uq2tE6OoZv8AxWxDvroCH8r0.webp", alt: "Federico Sendra leading a Web2-to-Web3 migration workshop." },
      { src: "/images/content/uLuHSBzzLiHci62DaepeOWAGlU.webp", alt: "Federico Sendra at SpaceDev All Hands 2024." },
    ],
    social: { linkedin: "https://www.linkedin.com/in/fsendra/" },
  },
  {
    slug: "juan-manuel-sobral",
    name: "Juan Manuel Sobral",
    role: "CTO & Co-founder",
    bio: "Juan Manuel leads the technical vision at SpaceDev with deep expertise in smart contracts, decentralized protocols, and scalable backend systems. He's a frequent speaker on blockchain at conferences across the Americas.",
    initials: "JM",
    avatarGradient: "from-sd-green to-sd-purple-300",
    avatar: "/images/about-us/eHISRLFUhgnDA3fOxfapqrM7m0.webp",
    coverImage: "/images/content/FCBKViQg3nV6hMSlU6WlaGTZ8yk.jpg",
    gallery: [
      { src: "/images/content/9feDkXRGNd52EakG0mP2Umo.webp", alt: "Juan Manuel Sobral on stage at Ethereum Argentina." },
      { src: "/images/content/ISwpOm131QIqCH8MFaadZ9zSvus.webp", alt: "Juan Manuel Sobral reviewing smart contract code with the team." },
      { src: "/images/content/YsbdX3EJ9VDlsYSu4d9uLfVvKy4.webp", alt: "Juan Manuel Sobral leading a workshop on smart contract security." },
      { src: "/images/content/d3Ddsv9Vko4Mgi0ion6d7POiVc.webp", alt: "Juan Manuel Sobral discussing memecoins and tokenomics." },
      { src: "/images/content/pGiXYozQ3mE4cilNOItfe2L2fUA.svg", alt: "SpaceDev co-founder signature illustration." },
    ],
    social: { linkedin: "https://www.linkedin.com/in/juanmsobral/" },
  },
  {
    slug: "diego-priliac",
    name: "Diego Priliac",
    role: "COO",
    bio: "Diego leads operations at SpaceDev, building the systems and culture that turn talented engineers into a high-performing team. He believes the difference between good and great products is the operating system around the people who build them.",
    initials: "DP",
    avatarGradient: "from-sd-purple to-sd-purple-2",
    avatar: "/images/content/Ase2If5CJXH4BrNWxKF0JciqjUE.png",
    coverImage: "/images/content/Ase2If5CJXH4BrNWxKF0JciqjUE.png",
    gallery: [
      { src: "/images/content/YxwLtoX3RaoAbsRSfm7BHL1xtKI.webp", alt: "Diego Priliac speaking about operations at a SpaceDev All Hands." },
      { src: "/images/content/jqHHiOTVsHa4ioIxPxCULv2gUg.webp", alt: "Diego Priliac in conversation with team leads." },
      { src: "/images/content/pVs0fAmc6Gp2davy0dgkOslc1c.webp", alt: "Diego Priliac at a leadership offsite." },
      { src: "/images/content/sZeLM1jDYxCoaqnWcDNpUxjsw.webp", alt: "Diego Priliac with the SpaceDev operations team." },
    ],
    social: { linkedin: "https://www.linkedin.com/in/dpriliac/" },
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
