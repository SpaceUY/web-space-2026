export const services = [
  {
    title: "Blockchain Software Development",
    description:
      "We turn complex ideas into reliable decentralized applications. Our blockchain development services deliver scalable, transparent infrastructure built to grow with your business.",
    href: "/blockchain-development-services",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "From web platforms to mobile apps, we build high-performance digital products that users actually enjoy. Design thinking, agile development and scalable architecture, all under one team.",
    href: "/innovative-web-and-mobile-solutions",
  },
  {
    title: "IT Staff Augmentation",
    description:
      "Connect with skilled developers, designers, and engineers who fit your workflow from day one. You get the expertise without the overhead — faster and fully managed.",
    href: "/staff-augmentation",
  },
  {
    title: "Product Discovery",
    description:
      "We help you validate ideas, define priorities, and design a roadmap before writing a single line of code. Business goals, user needs, and technical scope, aligned from day one.",
    href: "/product-discovery",
  },
  {
    title: "BlockAudit: Blockchain Security",
    description:
      "We audit your smart contracts and blockchain systems to catch vulnerabilities before they become risks. Secure, compliant, and performance-optimized from the start.",
    href: "/blockaudit-smart-contract-and-blockchain-security",
  },
] as const;

export const whySpacedev = [
  { number: "01", title: "Full-Cycle Product Ownership", description: "We take ownership of your product lifecycle from ideation to scale, ensuring market readiness through transparent communication and accountability." },
  { number: "02", title: "Web2 & Mobile Expertise", description: "Build high-performance custom software and mobile applications using modern frameworks like React and Node.js for scalable, user-centric digital products." },
  { number: "03", title: "Web3 & Blockchain Expertise", description: "Leverage deep expertise in smart contracts and decentralized protocols to deploy secure solutions across major ecosystems like Ethereum, Aptos, or Solana." },
  { number: "04", title: "Flexible Team Models", description: "Scale your team instantly with our IT staff augmentation services or choose a dedicated team for end-to-end project execution." },
  { number: "05", title: "Proven Track Record", description: "Rely on a proven history of delivering high-impact Web2 and Web3 products, backed by our perfect 5-star client ratings." },
  { number: "06", title: "Global Presence with Local Agility", description: "Benefit from nearshore collaboration with top talent in your time zone, operating seamlessly from the U.S. and Latin America." },
] as const;

export const industries = [
  { name: "Finance & Fintech", description: "DeFi platforms, payment gateways, tokenized assets, and digital wallets that simplify complexity and drive financial innovation." },
  { name: "Gaming & NFTs", description: "NFT ecosystems, web3 gaming platforms, and play-to-earn models with secure smart contracts and scalable infrastructure." },
  { name: "Healthcare & Life Sciences", description: "Data integrity, secure patient identity management, and traceable medical supply chains with compliance and interoperability at the core." },
  { name: "Supply Chain & Logistics", description: "Solutions that bring real-time visibility, tracking, and trust to global logistics with end-to-end automation." },
  { name: "Real Estate", description: "Property tokenization, digital deeds, and on-chain rental marketplaces that bring liquidity and transparency to real estate." },
  { name: "Education", description: "Verified credentials, decentralized learning records, and engagement platforms for modern institutions and edtech startups." },
  { name: "Energy / Oil & Gas", description: "Trust layers for energy data, carbon tracking, and decentralized grid coordination with auditable on-chain records." },
  { name: "Startups", description: "From MVP to Series A — full product ownership, fast iteration, and the technical depth to scale with you." },
] as const;

export const values = [
  { title: "We are here to help", description: "We're not just here to press some keys — we want to be your tech partner. We use our years of experience to help you make a product that stands out from the crowd." },
  { title: "We are tech-savvy", description: "We strive to be proficient at what we do and that means constantly expanding our horizons across both Web2 and Web3." },
  { title: "We are professional", description: "You can count on us for transparency, honesty, respect, and unwavering commitment in all we do. We build trust through open communication." },
  { title: "We are flexible", description: "It's important for us to keep a work-life balance that's suitable for both our clients and us. We do whatever's necessary to meet goals on time." },
  { title: "We are human", description: "No space-faring member of ours is going to be stranded. Everyone has a say and is given ample room to grow. We're just humans navigating the stars." },
] as const;

export const offices = [
  { country: "United States", flag: "🇺🇸", address: "25 SW 9th Street, 4th Floor, Miami, FL", region: "Miami, USA" },
  { country: "Uruguay", flag: "🇺🇾", address: "Cornelio Cantera 2857, Montevideo", region: "Montevideo, Uruguay" },
  { country: "Argentina", flag: "🇦🇷", address: "El Salvador 5707 Palermo Hollywood, CABA", region: "Buenos Aires, Argentina" },
  { country: "Colombia", flag: "🇨🇴", address: "Carrera 30 # 7AA - 207 Medellín", region: "Medellín, Colombia" },
] as const;

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 70, prefix: "+", label: "Talented team members" },
  { value: 160, prefix: "+", label: "Successful projects delivered" },
  { value: 7, label: "Years helping clients" },
  { value: 40, prefix: "+", label: "Perfect 5-star ratings on Clutch" },
];

export const homeFaqs = [
  { question: "What do your development services include?", answer: "We offer end-to-end development services — from product discovery and UX design to full-stack web and mobile apps, blockchain development, smart contract audits, and IT staff augmentation. Whether you need a complete product or a specific layer of expertise, we deliver." },
  { question: "How is SpaceDev different from other software development companies?", answer: "We blend web2 expertise with deep blockchain knowledge to deliver practical, market-ready solutions. Our distributed team model and agile processes ensure faster delivery, transparency, and real collaboration." },
  { question: "Can SpaceDev help with blockchain audits and security?", answer: "Yes — we offer BlockAudit, our dedicated smart contract and blockchain security service. We analyze code for vulnerabilities, compliance risks, and attack vectors, and deliver a thorough report with recommendations before you go live." },
  { question: "How does your IT staff augmentation service work?", answer: "We match you with pre-vetted engineers who integrate directly into your team. You get full control over priorities, sprints, and processes — SpaceDev handles talent sourcing, vetting, and HR. Onboarding typically takes under two weeks." },
  { question: "What industries do you work with?", answer: "We've built products across fintech, gaming, NFTs, healthcare, real estate, logistics, energy, and edtech. Our engineers combine domain knowledge with deep technical expertise to deliver tailored solutions regardless of sector." },
  { question: "How do I start working with SpaceDev?", answer: "Book a free consultation — we'll listen to your idea, scope the engagement, and put together a proposal tailored to your goals. Most projects kick off within two to four weeks of contract signing." },
];
