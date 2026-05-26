export interface MediaItem {
  slug: string;
  title: string;
  date: Date;
  location: string;
  tags: string[];
  highlight: string;
  image: string;
  bodyImages: string[];
  body: string;
}

export const mediaItems: MediaItem[] = [
  {
    slug: "hedera-ai-x-hackathon",
    title: "Hedera AI x Hackathon",
    date: new Date("2025-09-19"),
    location: "Remote",
    tags: ["Blockchain", "AI", "Hackathon"],
    highlight: "2nd place — AI-powered smart contract auditor",
    image: "/images/content/XmV4LZomh05W5CVRT4vmq0Nuo.png",
    bodyImages: [
      "/images/content/t8wS94JDpBojdLqXvJe6xLXX0.png",
      "/images/content/kx8VNn62kESeqD4eJF1S4IflU.png",
    ],
    body: `Over several high-energy weeks, the Hedera x AI Hackathon brought together builders from around the world to explore the intersection of decentralized infrastructure and artificial intelligence. Organized by the Hedera Foundation and Hashgraph, the program attracted over 300 registered agents on testnet, 500K+ livestream views, and 300+ hacker sign-ups.

The hackathon culminated in a global Demo Day featuring live remarks from Hedera co-founders Dr. Leemon Baird and Mance Harmon, and a judging panel including leaders from Outlier Ventures, Headstarter, Genfinity, Hashgraph Online, Algorand, Hivemind, and more.

SpaceDev proudly took **2nd place** with "Contracts Auditor" — an AI Agent designed to audit smart contracts in real time and display results directly on-chain. By integrating micro-payments via HIP-991, the tool ensures security audits are not only automated and affordable, but seamlessly integrated into developer workflows.

This milestone wouldn't have been possible without Santiago Grangetto, who led development and managed the live defense; Joaquín Ferreira, who contributed key technical components; and Brenda Gutiérrez, who delivered a sharp, polished presentation on Demo Day.

Participating in hackathons is a powerful way for SpaceDev to explore new technologies, contribute to open ecosystems, and keep growing as a team.`,
  },
  {
    slug: "eth-canal",
    title: "ETH Canal",
    date: new Date("2025-04-18"),
    location: "Panama City, Panama",
    tags: ["Ethereum", "Web3"],
    highlight: "3 speakers + co-organized the hackathon",
    image: "/images/content/OGPyJFH6FLi6cbxKox8VcWnEChE.png",
    bodyImages: [
      "/images/content/NLYNCp6ABvrAmT8NYT5zVRnTng.png",
      "/images/content/XbN6RzxtOdIaz6v7jx3KTqcj5m8.png",
    ],
    body: `From April 18 to 25, Panama City was home to one of Ethereum's annual premiere events, ETH Canal. Developers, entrepreneurs, public sector leaders, and blockchain enthusiasts from around the world converged to bridge global innovation with local ecosystems, fostering collaboration and showcasing advancements in blockchain.

SpaceDev not only contributed three speakers to the conference but also co-organized the hackathon, which invited participants to develop Ethereum-based solutions addressing real-world challenges in areas such as finance, real estate, digital identity, and public services. Technical workshops and networking sessions rounded out a complete community-driven experience.

SpaceDev's CTO, Juan Manuel Sobral, shared the stage with Franco Mangone and Gonzalo Bustos. Franco delivered scaling insights with "ZK in a Nutshell", while Gonzalo spoke about the platform's latest through "The Gem of Pectra". Juan Manuel presented "Blockchain: Shaping the Future Landscape of Ethereum Wallets".

Juan Manuel was also one of the judges for the hackathon, which brought together **20+ web3 projects** and over **$20K in prizes**, one being an entry into an incubation program by Innovation Smart District.

SpaceDev would like to thank Steven Clarke-Martin for the invitation. Latin America has come a long way and is now a strong web3 hub.`,
  },
  {
    slug: "spacedev-celebrated-an-unforgettable-techy-for-the-day-with-more-than-20-participants",
    title: "SpaceDev's \"Techy for the Day\"",
    date: new Date("2025-04-23"),
    location: "Montevideo, Uruguay",
    tags: ["Community", "Education"],
    highlight: "20+ students aged 12–14 introduced to tech careers",
    image: "/images/content/HJg078MZp7nMebbEjdTJK9P4Ew.png",
    bodyImages: [
      "/images/content/bbJ4MYZVVnuUlZuV8HJT2Fy8KE.jpeg",
      "/images/content/MmpRWIbeJl3DDh3s5Z4WFJPNjY.jpeg",
    ],
    body: `On April 23rd, SpaceDev hosted a special edition of "Techy for a Day," an initiative organized annually by CUTI (Uruguayan Chamber of Information Technologies) to commemorate International Girls in ICT Day.

This year, SpaceDev welcomed over **20 students aged 12 to 14** from Colegio y Liceo Reina y Reyes, setting a new record. The day began with introductory talks and a guided tour of the office. Through different stations, the girls explored areas such as People Care, Project Management & QA, Development, Marketing & Sales, and Gaming.

The girls responded with enthusiasm: they actively participated in all the activities and asked curious and insightful questions. Some even joked that once they turned 18, they wanted to work at Space. There were relaxed moments including a special snack break — one of the highlights of the day.

"Techy for a Day" proved that opening the doors of the tech industry to younger generations not only helps build a more diverse future but also renews the sense of purpose of those already walking this path.`,
  },
  {
    slug: "blockchain-scandals-and-transparency-our-cto-analyzes-the-libra-controversy-on-se-arregla-el-mundo",
    title: "Blockchain, Scandals & Transparency: CTO on $LIBRA",
    date: new Date("2025-02-17"),
    location: "Montevideo, Uruguay",
    tags: ["Media", "Blockchain"],
    highlight: "CTO Juan Manuel Sobral on radio program \"Se Arregla el Mundo\"",
    image: "/images/content/8JXs19LZQA3XBCpVLDzsjFTChAg.png",
    bodyImages: [],
    body: `Our CTO and co-founder, Juan Manuel Sobral, participated in the radio show *Se Arregla el Mundo* to analyze one of decentralized space's hottest topics: the scandal involving Argentine President Javier Milei and the meme coin $LIBRA.

During the interview, Juan explained how everything originated from a tweet by Milei himself promoting an alleged project to support Argentine entrepreneurs. The crypto community quickly identified irregularities: the domain for the project's website had been registered the same day, information was scarce, and within just 50 minutes, large sums of money had already changed wallets.

Juan stressed the role of transparency and auditability in blockchain, which allows for tracking fund movements and suspicious patterns, but added that identifying the real people behind these operations isn't always easy.

> "When we create a coin, we can decide what to do with it, and the fact that 80% of the supply was in the hands of a few actors from the start is a clear sign of manipulation."

The conversation also reinforced the importance of education and caution. Bitcoin and Ethereum remain the safest options in the ecosystem due to their track record and level of decentralization.`,
  },
  {
    slug: "the-blockchain-revolution-googledev-fest",
    title: "The Blockchain Revolution — Google DevFest",
    date: new Date("2024-11-16"),
    location: "Montevideo, Uruguay",
    tags: ["Blockchain", "Conference"],
    highlight: "CEO Federico Sendra keynote speaker",
    image: "/images/content/QViIAM5GOjsnPVrrLM0WSr5juU.png",
    bodyImages: [
      "/images/content/oDCBuseZbg1AdpSBDJF7xq9hCw.png",
      "/images/content/QfeAWvguBLgF10CGvD4eKNp90fQ.png",
      "/images/content/cKrHLaDsHAml2XzQvv93tHipLA.png",
    ],
    body: `On Saturday, November 16, SpaceDev CEO and co-founder Federico Sendra participated in the renowned Google DevFest event. GDFs are annual tech conferences organized by Google Developer Groups (GDG) communities around the globe, providing a platform for local developers to connect, learn, and build.

The organizers invited Federico to take the stage and deliver his talk titled **"The Blockchain Revolution."** In approximately 30 minutes, Federico covered:

- **The concept of trust** — what it is and why it matters
- **Real-world examples** — from scams to security issues and the challenges users face
- **Why now is the perfect time** to learn and build on blockchain, illustrated with real-life use cases
- **Blockchain transforming the financial paradigm in 2025** — SWIFT, VISA, MasterCard, and beyond

It was an unmissable opportunity to connect with people who may not have had much information about what decentralized technologies mean for society and its evolution. By bridging this gap, new builders are inspired to join the web3 ecosystem.`,
  },
  {
    slug: "producttank-montevideo-inspires",
    title: "ProductTank Montevideo Inspires",
    date: new Date("2024-11-14"),
    location: "Montevideo, Uruguay",
    tags: ["Product", "Leadership"],
    highlight: "CTO spoke on product leadership and innovation culture",
    image: "/images/content/oMuEpBFoB9O0x6rNU6qQRmdk02U.png",
    bodyImages: [
      "/images/content/ySKDYOgqzS9fFMUgycIdLb58CE.png",
      "/images/content/6ceLWBXDhrnjgCtBaGvBM0tRkw.png",
      "/images/content/TPYGXhNpmOLqdV1n2QMkzyRLw.png",
    ],
    body: `On November 14, a new edition of ProductTank took place at Uruguay Innovation Hub's Innovation Campus. Titled **"Towards a More Innovative Uruguay,"** the event brought together two prominent entrepreneurs from the local tech scene: Santiago García da Rosa (CTO of LINK Markets) and Juan Manuel Sobral (CTO and co-founder of SpaceDev).

Key topics discussed:

- **Their journeys in tech** — from early days as developers to leading the vision of their current companies
- **Lessons from early failures** — the value of perseverance and why a product didn't work, balancing ambition with practical execution
- **Turning ideas into reality** — the gap between having a great idea and executing it successfully, the importance of iteration and a customer-centric approach
- **The power of organizational culture** — investing in a team-focused approach enables companies to overcome challenges and thrive

Uruguay Innovation Hub connects startups, government entities, and academic institutions, accelerating ventures in advanced technologies, green technologies, and biotechnology.`,
  },
  {
    slug: "achievement-unlocked-ethereum-uruguay-s-first-buildathon",
    title: "Ethereum Uruguay's First Buildathon",
    date: new Date("2024-08-15"),
    location: "Montevideo, Uruguay",
    tags: ["Ethereum", "Hackathon"],
    highlight: "20 teams from 12 countries — Vitalik Buterin surprise guest",
    image: "/images/content/64v7ic0nCR8AHLwB1CKVleMXbw.jpg",
    bodyImages: [
      "/images/content/TWzLib8S2dJU9r6QCMYjMS6na8.jpg",
      "/images/content/RdQBOPC0n45QPComljsH0rDJWA.jpg",
      "/images/content/vLJ2wT7c3rOrZ4QwxW1VeSOTiH8.jpg",
      "/images/content/KhTcyfERRbO94aQ0NzvE98WbSGk.jpg",
    ],
    body: `The much-anticipated Ethereum Uruguay Buildathon was a resounding success. Held on August 15–16 as part of the larger Ethereum Conference, the event brought together enthusiasts and experts from blockchain and crypto in an environment filled with creativity, learning, and collaboration.

The kickoff involved a virtual phase where participants attended workshops covering everything from idea generation to pitch development. The in-person stage took place at the Uruguay Innovation Hub, where teams worked intensively with mentors from Web3 Pro, Globant, The Red Guild, Nomic, Push Protocol, The Graph, Kleros, and more. Juan Manuel Sobral and Federico Sendra represented SpaceDev as mentors.

The organizers expected ten teams, but ended up with **twenty from twelve different countries**. The event culminated at Sinergia Faro where projects were pitched to a high-level jury including representatives from Decentraland, MIT, and the Ethereum Foundation.

**USD $6,000 in prizes** were awarded — not including bounties and grants from Arbitrum, The Graph, Scroll, Push, INTMAX, and Kleros.

In a memorable surprise, **Vitalik Buterin**, co-founder of Ethereum, joined as a last-minute guest to show his support.

Ethereum Uruguay continues to establish itself as a key regional figure when it comes to promoting blockchain technology.`,
  },
  {
    slug: "spacedev-s-cto-among-the-top-25-figures-driving-local-technology",
    title: "CTO Among Top 25 Tech Leaders in Uruguay",
    date: new Date("2024-05-31"),
    location: "Montevideo, Uruguay",
    tags: ["Recognition", "Leadership"],
    highlight: "Recognized by Experis / ManpowerGroup alongside President Lacalle Pou",
    image: "/images/content/4iLfAiTTcdW0rd1pSEocerjB9V0.png",
    bodyImages: [],
    body: `On May 31st, Experis presented the book **"25 Leaders Transforming Technology in Uruguay,"** recognizing the professionals driving the advancement of the ICT sector in the country. The event was held on the 22nd floor of the World Trade Center Montevideo Free Zone tower, attended by prominent industry figures including the President of Uruguay, Luis Lacalle Pou.

Among the 25 distinguished personalities is **Juan Manuel Sobral**, CTO of SpaceDev. His testimony covers the challenges SpaceDev faced when specializing in blockchain and web3, the need to convince the team that this was a technology worth investing in, and the culture of transparency that drives talent retention.

> "Digital literacy and the ability to adapt to technological changes are everyone's responsibility."

> "When it comes to retaining talent, the most important thing is a strong internal culture."

Experis, a ManpowerGroup brand, focuses on attracting and hiring tech talent across five areas: Business Transformation, Cloud and Infrastructure, Digital Workspace, Cybersecurity, and Enterprise Applications. Strategic partners include CUTI, IT Builders, and Uruguay XXI.`,
  },
  {
    slug: "bitcoin-energy-summit-miami-2024",
    title: "Bitcoin Energy Summit — Miami 2024",
    date: new Date("2024-04-22"),
    location: "Miami, United States",
    tags: ["Bitcoin", "Web3"],
    highlight: "CTO panelist on \"Building and Securing Trust\"",
    image: "/images/content/0dgnwv0B9TDVgsLtDKiG4WSq1xY.png",
    bodyImages: [],
    body: `SpaceDev participated in the second edition of the Bitcoin Energy Summit, held in Miami on April 22–23, 2024. This prominent event attracted over **1,000 attendees**, **120 speakers**, **300 companies**, and even members of the U.S. government — all gathering to address how to use renewable energy to produce crypto.

Congressman Byron Donald drew attention with his statement: *"We are the new gold rush."* The focus on renewable energy for cryptocurrency production reflects the high energy consumption associated with mining, especially for proof-of-work currencies like Bitcoin.

**Juan Manuel Sobral**, CTO and co-founder of SpaceDev, was one of the main speakers on the panel titled **"Building and Securing Trust."** Alongside Mohammed Njie (Janta Power Inc), Analys Falchuk (BTC Inc), and Emmanuel Udotong (Shield / Ancient Warriors NFT), he exchanged ideas on the importance of blockchain and cryptocurrencies in forming a reliable and secure financial system.

Strong security measures, combined with transparent regulations, are fundamental for people to feel comfortable using and investing in crypto. Bitcoin Energy Summit 2024 was an internationally prestigious platform to explore sustainability, innovation, and efficiency — successfully bridging the gap between the digital world of cryptocurrencies and everyday life.`,
  },
];

export const getMediaItem = (slug: string) => mediaItems.find((m) => m.slug === slug);
