export interface MediaItem {
  slug: string;
  title: string;
  date: Date;
  location: string;
  tags: string[];
  highlight: string;
  image: string;
  body: string;
  /** SEO meta description override (140–160 chars); falls back to highlight */
  seoDescription?: string;
  /** SEO <title> override (≤ 60 chars, replaces the full title) */
  seoTitle?: string;
}

export const mediaItems: MediaItem[] = [
  {
    slug: "hedera-ai-x-hackathon",
    title: "Hedera AI x Hackathon",
    date: new Date("2025-09-19"),
    location: "Remote",
    tags: ["Blockchain", "AI", "Hackathon"],
    highlight: "2nd place: AI-powered smart contract auditor",
    seoDescription:
      "SpaceDev won 2nd place at the Hedera AI x Hackathon with Contracts Auditor, an AI agent that audits smart contracts in real time and posts results on-chain.",
    image: "/images/content/XmV4LZomh05W5CVRT4vmq0Nuo.webp",
    body: `Over several high-energy weeks, the Hedera x AI Hackathon brought together builders from around the world to explore the intersection of decentralized infrastructure and artificial intelligence. Organized by the [Hedera](https://hedera.com/) Foundation and Hashgraph, the program attracted:

- 300+ registered agents on testnet via [moonscape.tech](https://moonscape.tech/)
- 500K+ livestream views across Hedera x AI channels
- 300+ hacker sign-ups

The hackathon culminated in a global Demo Day featuring live remarks from Hedera co-founders [Dr. Leemon Baird](https://x.com/leemonbaird) and [Mance Harmon](https://x.com/manceharmon), and a judging panel including leaders from [Outlier Ventures](https://outlierventures.io/), [Headstarter](https://headstarter.co/), [Genfinity](https://genfinity.io/), [Hashgraph Online](https://hashgraphonline.com/), [Algorand](https://algorand.co/), [Hivemind](https://www.hivemind.capital/), and more.

[img:/images/content/t8wS94JDpBojdLqXvJe6xLXX0.webp]

SpaceDev proudly took 2nd place with "Contracts Auditor", an AI Agent designed to audit smart contracts in real time and display results directly on-chain. By integrating micro-payments via HIP-991, the tool ensures "security audits are not only automated and affordable, but seamlessly integrated into developer workflows."

This milestone wouldn't have been possible without:
- Santiago Grangetto, who led development and managed the live defense
- Joaquín Ferreira, who contributed key technical components
- Brenda Gutiérrez, who delivered a sharp, polished presentation on Demo Day

[Watch the live demo on Hedera's official X account](https://x.com/HashgraphOnline/status/1933196939736338497)

[Read more in Hedera's article on hackathon winners](https://hashgraphonline.com/blog/hedera-ai-hackathon-winners/)

[img:/images/content/kx8VNn62kESeqD4eJF1S4IflU.webp]

Participating in hackathons is a powerful way for SpaceDev to explore new technologies, contribute to open ecosystems, and keep growing as a team. If you're eyeing an upcoming hackathon and want to collaborate, reach out!

Big congrats again to Santi and the team. We're proud 🚀💜`,
  },
  {
    slug: "eth-canal",
    title: "ETH Canal",
    date: new Date("2025-04-18"),
    location: "Panama City, Panama",
    tags: ["Ethereum", "Web3"],
    highlight: "3 speakers + co-organized the hackathon",
    seoDescription:
      "SpaceDev co-organized the ETH Canal hackathon in Panama City and brought three speakers, including CTO Juan Manuel Sobral, to Ethereum's premier LATAM event.",
    image: "/images/content/OGPyJFH6FLi6cbxKox8VcWnEChE.webp",
    body: `From April 18 to 25, Panama City was home to one of Ethereum's annual premiere events, ETH Canal. Developers, entrepreneurs, public sector leaders, and blockchain enthusiasts from around the world converged to bridge global innovation with local ecosystems, fostering collaboration and showcasing advancements in blockchain.

SpaceDev not only contributed three speakers to the conference but also co-organized the hackathon, which invited participants to develop Ethereum-based solutions addressing real-world challenges in areas such as finance, real estate, digital identity, and public services. Technical workshops and networking sessions rounded out a complete community-driven experience.

[img:/images/content/NLYNCp6ABvrAmT8NYT5zVRnTng.webp]

SpaceDev's CTO, Juan Manuel Sobral, shared the stage with Franco Mangone and Gonzalo Bustos, also from SpaceDev. Franco delivered scaling insights with "ZK in a Nutshell", while Gonzalo spoke about the platform's latest through "The Gem of Pectra". Juan Manuel presented "Blockchain: Shaping the Future Landscape of Ethereum Wallets", making that three talks packed with top info.

Juan Manuel was also one of the judges for the hackathon, which brought together 20+ web3 projects and over $20K in prizes, one being an entry into an incubation program by [Innovation Smart District](https://www.linkedin.com/company/innovationsmartdistrict/). The prestigious judges who joined Juan Manuel included: [Glenn Tjon](https://www.linkedin.com/in/glenntjon/), [Alex Marroquin](https://www.linkedin.com/in/alexmarroquin-ia/), [Anastacio Gianareas Palm](https://www.linkedin.com/in/anastaciogianareas/), [Patricia Carrillo](https://www.linkedin.com/in/ms-patricia-carrillo/), and [Rolando A. Gittens](https://www.linkedin.com/in/rolando-a-gittens-44512b18/).

[img:/images/content/XbN6RzxtOdIaz6v7jx3KTqcj5m8.webp]

Witnessing the energy across all the events held throughout the week, especially those hosted by [Blerify](https://www.linkedin.com/company/blerify/), [Lulubit](https://www.linkedin.com/company/lulubit/), [REDLINE LAB](https://www.linkedin.com/company/redline-lab/) and Innovation Smart District, was deeply motivational for everyone in attendance. It's undeniable that Latin America has come a long way and is now a strong web3 hub.

SpaceDev would like to thank [Steven Clarke-Martin](https://www.linkedin.com/in/stevenclarkemartin/) for the invitation to be part of ETH Canal, and all who made the event not only possible but so impactful. More pioneers like them are needed leading these initiatives across LATAM, creating spaces where innovation, collaboration, and vision come together.

For anyone interested, Frank and Gonza's talks are available here: [https://www.youtube.com/watch?v=2aO-BIgHxdI](https://www.youtube.com/watch?v=2aO-BIgHxdI) ("ZK in a Nutshell" & "The Gem of Pectra")

Juan Manuel's: [https://www.youtube.com/watch?v=rwXz-8YzErw](https://www.youtube.com/watch?v=rwXz-8YzErw) ("Blockchain: Shaping the Future Landscape of Ethereum Wallets")`,
  },
  {
    slug: "spacedev-celebrated-an-unforgettable-techy-for-the-day-with-more-than-20-participants",
    title: "SpaceDev's \"Techy for the Day\"",
    date: new Date("2025-04-23"),
    location: "Montevideo, Uruguay",
    tags: ["Community", "Education"],
    highlight: "20+ students aged 12–14 introduced to tech careers",
    seoDescription:
      "SpaceDev hosted Techy for a Day in Montevideo, welcoming 20+ students aged 12-14 to explore tech careers for International Girls in ICT Day with CUTI.",
    image: "/images/content/HJg078MZp7nMebbEjdTJK9P4Ew.webp",
    body: `On April 23rd, SpaceDev hosted a special edition of "Techy for a Day," an initiative organized annually by CUTI (Uruguayan Chamber of Information Technologies) to commemorate International Girls in ICT Day. Although the official date was April 24th, the Space team's schedule required them to celebrate it a day earlier, allowing them to better prepare for the occasion.

This year, SpaceDev welcomed over 20 students aged 12 to 14 from Colegio y Liceo Reina y Reyes, setting a new record. Perhaps it was the presence of so many future techies that made the Space team truly realize how much the number of women within the company has grown, many of whom took the lead in running the day's activities.

The day began with introductory talks and a guided tour of the office, where the students could see the team in action and get a feel for the work environment. Smiles quickly followed as they discovered some of the team's favorite perks: remote work, All Hands meetings, and of course, the fact that Space is pet friendly!

SpaceDev designed an immersive experience combining presentations and games to explain what the tech industry is, why it's one of the best career options, and how, despite progress in diversity, there's still a need for more women to join the field. Through different stations, the girls explored areas such as People Care, Project Management & QA, Development, Marketing & Sales, and Gaming.

[img:/images/content/bbJ4MYZVVnuUlZuV8HJT2Fy8KE.webp]

The girls responded with enthusiasm: they actively participated in all the activities and asked curious and insightful questions. Some even joked that once they turned 18, they wanted to work at Space. For the team, hearing those words was a real reward and a reminder that inspiring others truly makes a difference.

In addition to the main activities, there were relaxed moments including a special snack break (unsurprisingly, one of the highlights of the day).

[img:/images/content/MmpRWIbeJl3DDh3s5Z4WFJPNjY.webp]

Once again, "Techy for a Day" proved that opening the doors of the tech industry to younger generations not only helps build a more diverse future but also renews the sense of purpose of those already walking this path. For SpaceDev, it was a memorable, fun, and deeply meaningful experience.`,
  },
  {
    slug: "blockchain-scandals-and-transparency-our-cto-analyzes-the-libra-controversy-on-se-arregla-el-mundo",
    title: "Blockchain, Scandals & Transparency: CTO on $LIBRA",
    date: new Date("2025-02-17"),
    location: "Montevideo, Uruguay",
    tags: ["Media", "Blockchain"],
    highlight: "CTO Juan Manuel Sobral on radio program \"Se Arregla el Mundo\"",
    seoTitle: "SpaceDev CTO Analyzes the $LIBRA Scandal on Uruguayan Radio",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral analyzed the $LIBRA meme coin scandal on radio show Se Arregla el Mundo, explaining blockchain transparency and crypto risks.",
    image: "/images/content/8JXs19LZQA3XBCpVLDzsjFTChAg.webp",
    body: `Last week, our CTO and co-founder, Juan Manuel Sobral, participated in the radio show [Se Arregla el Mundo](https://www.youtube.com/watch?v=-8pIflHWR-s) to analyze one of decentralized space's hottest topics: the scandal involving Argentine President Javier Milei and the meme coin $LIBRA.

During the interview, Juan explained how everything originated from a tweet by Milei himself promoting an alleged project to support Argentine entrepreneurs. The crypto community quickly identified irregularities, such as that the domain for the project's website had been registered the same day, information was scarce, and within just 50 minutes, large sums of money had already changed wallets.

Juan stressed the role of transparency and auditability in blockchain, which allows for tracking fund movements and suspicious patterns, but added that identifying the real people behind these operations isn't always easy. As he mentioned in the interview, "When we create a coin, we can decide what to do with it, and the fact that 80% of the supply was in the hands of a few actors from the start is a clear sign of manipulation."

The conversation also reinforced the importance of education and caution. Cryptocurrency adoption continues to grow, but so do the risks for less-informed users. Bitcoin and Ethereum remain the safest options in the ecosystem due to their track record and level of decentralization.

For a more in-depth analysis of what happened, check out Juan's article here, where he further explores the implications of an event like this in an already volatile market.

At SpaceDev, we remain committed to education and building secure, reliable blockchain solutions. We want more people to benefit from this technology without fearing for their digital assets. If you have any questions or want to learn more, don't hesitate to [reach us](https://spacedev.io/contact).`,
  },
  {
    slug: "the-blockchain-revolution-googledev-fest",
    title: "The Blockchain Revolution at Google DevFest",
    date: new Date("2024-11-16"),
    location: "Montevideo, Uruguay",
    tags: ["Blockchain", "Conference"],
    highlight: "CEO Federico Sendra keynote speaker",
    seoTitle: "SpaceDev CEO Keynotes Blockchain Talk at Google DevFest",
    seoDescription:
      "SpaceDev CEO Federico Sendra delivered The Blockchain Revolution keynote at Google DevFest Montevideo, covering trust, security, and real web3 use cases.",
    image: "/images/content/QViIAM5GOjsnPVrrLM0WSr5juU.webp",
    body: `On Saturday, November 16, SpaceDev CEO and co-founder Federico Sendra participated in the renowned Google DevFest event. If you're not familiar with GDF, they are annual tech conferences organized by Google Developer Groups (GDG) communities around the globe. These gatherings provide a platform for local developers to connect, learn, and build using Google's tools and technologies.

Each DevFest is tailored to the unique needs and interests of its local community, offering a variety of activities, including:
- Technical Talks: Presentations on the latest Google technologies and tools, led by experts and Googlers.
- Hands-On Workshops: Interactive sessions where attendees gain practical experience with diverse technologies.
- Networking Opportunities: Spaces to connect with other professionals, share knowledge, and collaborate on projects.

[img:/images/content/oDCBuseZbg1AdpSBDJF7xq9hCw.webp]

This year, the organizers sought to feature someone who could expound on a disruptive technology: something innovative that sparks interest and introduces new ways of doing things.

With this in mind, they invited Federico to take the stage and deliver his talk titled The Blockchain Revolution. In approximately 30 minutes, Federico covered:
- The concept of trust – what it is and why it matters.
- Real-world examples – from scams to security issues and the challenges users face.
- Why now is the perfect time to learn and build on blockchain, illustrated with real-life use cases.
- Blockchain transforming the financial paradigm in 2025 (SWIFT, VISA, MasterCard, etc.)

[img:/images/content/QfeAWvguBLgF10CGvD4eKNp90fQ.webp]

It was an unmissable opportunity to connect with people who may not have had much information about what decentralized technologies mean for society and its evolution. By bridging this gap, new builders are inspired to join the web3 ecosystem.

Until next time!

[img:/images/content/cKrHLaDsHAml2XzQvv93tHipLA.webp]`,
  },
  {
    slug: "producttank-montevideo-inspires",
    title: "ProductTank Montevideo Inspires",
    date: new Date("2024-11-14"),
    location: "Montevideo, Uruguay",
    tags: ["Product", "Leadership"],
    highlight: "CTO spoke on product leadership and innovation culture",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral spoke at ProductTank Montevideo on product leadership, innovation culture, and lessons from building resilient tech teams.",
    image: "/images/content/oMuEpBFoB9O0x6rNU6qQRmdk02U.webp",
    body: `On November 14, a new edition of ProductTank took place at Uruguay Innovation Hub's Innovation Campus. Titled "Towards a More Innovative Uruguay," the event brought together two prominent entrepreneurs from the local tech scene to share their insights on creating impactful products in a competitive market and building scalable, resilient teams.

**A Showcase of Innovation and Leadership**

The speakers in question were Santiago García da Rosa, CTO of LINK Markets, and Juan Manuel Sobral, CTO and co-founder of SpaceDev. While each brought unique contributions based on their experiences and expertise, both explored how to drive innovation by creating products that meet people's needs, building high-performance teams capable of adaptation, and learning valuable lessons from the past.

[img:/images/content/ySKDYOgqzS9fFMUgycIdLb58CE.webp]

The audience was captivated by the practical and inspiring advice they received, at times deeply moved by the presentations. Despite their extensive entrepreneurial experience, Santiago and Juan Manuel delivered their talks with both depth and approachability. Key topics discussed included:
- Their journeys in the tech world, from their early days as developers to leading the vision of their current companies. Their stories, which highlighted the diverse roles and challenges that shaped their approaches, resonated with attendees aspiring to make their mark in the industry.
- Lessons from early failures, emphasizing the value of perseverance and reflecting on why a product didn't work. These experiences taught them to balance ambition with practical execution, fostering a culture of resilience that drives long-term growth.
- Turning ideas into reality. Through concrete examples, Santiago and Juan Manuel addressed the gap between having a great idea and executing it successfully. They also stressed the importance of iteration, learning from mistakes, and maintaining a customer-centric approach.
- The power of a positive organizational culture, which has been central to the success of their ventures. They explained that investing in a team-focused approach enables companies not only to overcome challenges but also to thrive in a constantly evolving tech environment.

[img:/images/content/6ceLWBXDhrnjgCtBaGvBM0tRkw.webp]

**The Role of Uruguay Innovation Hub**

As a connector of startups, government entities, and academic institutions, the Uruguay Innovation Hub provides crucial support to the country's tech ecosystem. This national program accelerates ventures in sectors such as advanced technologies, green technologies, and biotechnology. Its recently inaugurated Innovation Campus serves as a collaborative space designed to foster innovative solutions to global challenges.

**Empowering the Next Generation of Entrepreneurs**

The participation of Santiago García da Rosa and Juan Manuel Sobral in ProductTank Montevideo not only reflects their commitment to the local ecosystem but also underscores the shared efforts of Uruguay Innovation Hub and CUTI to mentor emerging entrepreneurs.

Before an audience eager to make an impact in the world, their insights highlighted the importance of collaboration and adaptability in building a sustainable future.

[img:/images/content/TPYGXhNpmOLqdV1n2QMkzyRLw.webp]`,
  },
  {
    slug: "achievement-unlocked-ethereum-uruguay-s-first-buildathon",
    title: "Ethereum Uruguay's First Buildathon",
    date: new Date("2024-08-15"),
    location: "Montevideo, Uruguay",
    tags: ["Ethereum", "Hackathon"],
    highlight: "20 teams from 12 countries, with Vitalik Buterin as surprise guest",
    seoDescription:
      "SpaceDev co-mentored Ethereum Uruguay's first Buildathon, where 20 teams from 12 countries built web3 projects and Vitalik Buterin made a surprise visit.",
    image: "/images/content/64v7ic0nCR8AHLwB1CKVleMXbw.webp",
    body: `The much-anticipated Ethereum Uruguay Buildathon was a resounding success for the community despite being the first of its kind in the country's history. Held on August 15-16 as part of the larger Ethereum Conference, the event brought together both enthusiasts and experts from blockchain and crypto who soon found themselves in an environment filled with creativity, learning, and collaboration.

[img:/images/content/TWzLib8S2dJU9r6QCMYjMS6na8.webp]

The kickoff involved a virtual phase where participants attended workshops covering everything from idea generation to pitch development. This prepared the teams for the in-person stage, which took place at the Uruguay Innovation Hub. There, teams worked intensively on their projects with real-time support from expert mentors, such as Pamela Gonzalez (Web3 Pro), Felipe Cordoves (Globant), Matías Aereal Aeón (The Red Guild), Patricio Palladino (Nomic), Carla Martínez (Push Protocol), Alejandro Narancio, Romina Salveraglio, Marcelo Arbiza, Vicente Bermúdez (Infuy), Pablo Carranza (The Graph), Gianluca Franco (SEED Latam), Juan Samitier and Jean Putzel (Kleros), Verónica Blanco (Ethereum Uruguay), Gabriel Aufgang (5SEIS), Juan Manuel Sobral and Federico Sendra (SpaceDev).

The organizers expected ten teams, but ended up with twenty from twelve different countries! The event culminated at Sinergia Faro, where the projects were pitched to a high-level jury composed of Yemel Jardi (Decentraland), Hernán Haro (MrPink VC), Pamela Gonzalez (Web3 Pro), Guzmán Llambías (Pyxies), David Giménez Gutiérrez (MIT), Skylar Weaver (Ethereum Foundation), Patricio Palladino (Nomic), and Ignacio Varese (Blockbear).

[img:/images/content/RdQBOPC0n45QPComljsH0rDJWA.webp]

In addition to awarding USD 6,000 in prizes – not including bounties and grants from sponsors like Arbitrum, The Graph, Scroll, Push, INTMAX, and Kleros – the Buildathon offered participants the opportunity to network with industry professionals. Congratulations to the winners, who were selected based on the innovation, feasibility, and quality of their projects.

The pitching at the very end of the Buildathon gave way to the last of the presentations from the long and prestigious list of international speakers. None other than Vitalik Buterin, co-founder of Ethereum, joined as a last-minute guest to show his support and recognition of the growing web3 movement in the country.

[img:/images/content/vLJ2wT7c3rOrZ4QwxW1VeSOTiH8.webp]

Ethereum Uruguay continues to establish itself as a key regional figure when it comes to promoting blockchain technology and offering impactful opportunities for the next generation of builders. As one of its most active partners, SpaceDev remains committed to spreading knowledge and developing new technological solutions that drive the growth of the ecosystem.

[img:/images/content/KhTcyfERRbO94aQ0NzvE98WbSGk.webp]`,
  },
  {
    slug: "spacedev-s-cto-among-the-top-25-figures-driving-local-technology",
    title: "CTO Among Top 25 Tech Leaders in Uruguay",
    date: new Date("2024-05-31"),
    location: "Montevideo, Uruguay",
    tags: ["Recognition", "Leadership"],
    highlight: "Recognized by Experis / ManpowerGroup alongside President Lacalle Pou",
    seoTitle: "SpaceDev CTO Named Among Uruguay's Top 25 Tech Leaders",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral was named one of Uruguay's top 25 tech leaders by Experis ManpowerGroup, at an event attended by President Lacalle Pou.",
    image: "/images/content/4iLfAiTTcdW0rd1pSEocerjB9V0.png",
    body: `On May 31st, [Experis](https://www.experis.com.uy/wps/portal/experis/v3/uy/inicio) presented the book "25 Leaders Transforming Technology in Uruguay," recognizing the professionals driving the advancement of the ICT sector in the country. The event, held on the 22nd floor of the World Trade Center Montevideo Free Zone tower, was attended by prominent industry figures, including the [President of Uruguay, Luis Lacalle Pou](https://es.wikipedia.org/wiki/Luis_Lacalle_Pou).

[Experis](https://www.experis.com.uy/wps/portal/experis/v3/uy/inicio), a [ManpowerGroup](https://www.manpowergroup.com/en) brand, focuses on attracting and hiring tech talent. Its specialization spans five areas: Business Transformation, Cloud and Infrastructure, Digital Workspace, Cybersecurity, and Enterprise Applications. Through Experis Academy, the company collaborates with educational institutions to develop curricula focused on the most in-demand skills, promoting business success in a constantly evolving job market.

The concept behind the book arises from the challenges of finding, hiring, and retaining employees. This aspect of the tech world changed significantly and abruptly during the pandemic, as the sector had to adapt while dealing with its inherent highs and lows. Experis' book gathers reflections from 25 leaders on the present and future of technology in Uruguay.

Among these distinguished personalities is [Juan Manuel Sobral](https://www.linkedin.com/in/juanmsobral/), CTO of SpaceDev. "Digital literacy and the ability to adapt to technological changes are everyone's responsibility," he states in one of his highlighted quotes, calling for action in navigating today's complexities in an informed and secure manner. This sentiment echoes his talk on smart wallets and mass adoption.

Another key point in his testimony focuses on the challenges SpaceDev faced when specializing in blockchain and web3 (without abandoning full-stack services and projects). In addition to strategizing and supporting changes across various departments, such as marketing, it was necessary to convince the team that this was a technology worth learning and investing resources in.

"When it comes to retaining talent, the most important thing is a strong internal culture", adds Juan Manuel, emphasizing the importance of transparency and what companies can do to strengthen employees' sense of belonging. He concluded on a positive note regarding the progress and talent level of the tech industry in Uruguay, suggesting several measures to make it more inviting as an innovation hub.

The book (in Spanish) can be downloaded after filling out a short form [here](https://share.hsforms.com/130XRLfOyTwulE_GhFYHjzw8npug). Experis' strategic partners include [CUTI](https://cuti.org.uy/en/), [IT Builders](https://itbuilderslive.com/), and [Uruguay XXI](https://www.uruguayxxi.gub.uy/es/).`,
  },
  {
    slug: "bitcoin-energy-summit-miami-2024",
    title: "Bitcoin Energy Summit, Miami 2024",
    date: new Date("2024-04-22"),
    location: "Miami, United States",
    tags: ["Bitcoin", "Web3"],
    highlight: "CTO panelist on \"Building and Securing Trust\"",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral joined the Bitcoin Energy Summit 2024 in Miami as a panelist on Building and Securing Trust in blockchain and crypto.",
    image: "/images/content/0dgnwv0B9TDVgsLtDKiG4WSq1xY.webp",
    body: `SpaceDev participated in the second edition of the Bitcoin Energy Summit, which took place in Miami on April 22-23, 2024.

This prominent event in the web3 universe, which attracted over 1,000 attendees, 120 speakers, 300 companies, and even members of the U.S. government, aimed to connect and address a highly relevant topic: how to use renewable energy to produce crypto.

Congressman Byron Donald drew attention with his statement, "We are the new gold rush", referencing historical periods of intense migration toward areas and industries with great enrichment potential. Some members of the U.S. government acknowledge that the blockchain-web3-crypto ecosystem is experiencing a comparable boom that should not be missed.

It's crucial to implement the use of renewable energy for cryptocurrency production due to the high energy consumption associated with mining, especially for currencies like Bitcoin that rely on proof-of-work (PoW) algorithms. Sustainable practices can mitigate environmental impact by reducing greenhouse gas emissions and promoting a greener use of blockchain. This shift becomes increasingly necessary as the adoption of the technology grows.

Juan Manuel Sobral, CTO and co-founder of SpaceDev, was one of the main speakers on the panel titled "Building and Securing Trust." Alongside other experts such as Mohammed Njie, Analys Falchuk, and Emmanuel Udotong, he exchanged ideas on the importance of blockchain and cryptocurrencies in forming a reliable and secure financial system for everyone. Gabriella Kusz and Sumit Gupta were scheduled but could not attend.

Strong security measures, combined with transparent regulations, are fundamental for people to feel comfortable using and investing in crypto, especially new users. By reducing the risks of fraud, hacking, and other threats, secure systems facilitate digital currency transactions and build greater trust for their adoption.

In summary, Bitcoin Energy Summit 2024 was an internationally prestigious platform to explore sustainability, innovation, and efficiency in the current landscape. It successfully bridged the gap between the digital world of cryptocurrencies and everyday life. Any space that promotes the dissemination of blockchain and its possibilities will result in a greater diversity of solutions, as well as more opportunities and implementation strategies.`,
  },
];

export const getMediaItem = (slug: string) => mediaItems.find((m) => m.slug === slug);
