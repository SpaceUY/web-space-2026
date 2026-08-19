import { authors, type Author } from "./authors";

export interface MediaItem {
  slug: string;
  title: string;
  date: Date;
  location: string;
  tags: string[];
  highlight: string;
  image: string;
  youtubeId?: string;
  body: string;
  seoDescription?: string;
  seoTitle?: string;
}

/**
 * Authors this media item is actually about, derived by name match against
 * title/highlight/body. Same heuristic the author page already uses to
 * surface "Speaking & Media" credits, centralized here so both that page
 * and the media item's own Article schema stay in sync automatically.
 */
export function getMentionedAuthors(item: MediaItem): Author[] {
  return authors.filter(
    (a) => item.title.includes(a.name) || item.highlight.includes(a.name) || item.body.includes(a.name)
  );
}

export const mediaItems: MediaItem[] = [
  {
    slug: "spacedev-named-a-summer-2026-clutch-global-winner",
    title: "SpaceDev Named a Summer 2026 Clutch Global Winner",
    date: new Date("2026-08-17"),
    location: "Remote",
    tags: ["Recognition", "Blockchain", "Smart Contracts"],
    highlight: "Global Award winner in Blockchain, Smart Contract, and Metaverse Development",
    seoTitle: "SpaceDev Named a Summer 2026 Clutch Global Award Winner",
    seoDescription:
      "SpaceDev is a Summer 2026 Clutch Global Award winner in Blockchain, Smart Contract, and Metaverse Development, backed by a 5.0 rating across dozens of client reviews.",
    image: "/images/content/spacedev-clutch-global-award-2026.jpg",
    body: `Over the years, we've grown alongside a blockchain industry that has constantly reinvented itself, moving through cycles of experimentation, acceleration, correction and, increasingly, practical adoption. Our own work has expanded with it, from early-stage Web3 products to increasingly complex systems where architecture, security, business logic and user experience all have to work together.

That makes this recognition especially meaningful. SpaceDev has been honored as a Summer 2026 Clutch Global Award winner in Blockchain Development, Smart Contract Development and Metaverse Development, categories that reflect different parts of the same technological landscape we've spent years exploring with our clients.

[Clutch's Global Awards](https://clutch.co/profile/spacedev) recognize high-performing technology companies based on factors including verified client feedback, project outcomes, market presence and industry expertise.

But for us, it goes beyond appearing on a list. Much of the work that eventually becomes a successful product happens far from public view, through design decisions, technical debates, changing requirements, difficult integrations and the gradual process of transforming an ambitious idea into something reliable enough to use in the real world.

**Beyond the Node**

The blockchain industry of 2026 looks very different from the one many of us entered years ago. Nowadays, technologies and ecosystems coexist and overlap in ways that require multi-faceted expertise.

For example, smart contracts may contain the logic that governs transactions, ownership or incentives, but they still need secure architecture, thoughtful interfaces and integrations with systems that often live outside the blockchain entirely.

The same is true of immersive and decentralized digital experiences. Technologies once grouped loosely under the "metaverse" label have gradually become part of a wider conversation around digital ownership, identity, persistent online environments and new forms of interaction. Many of the most interesting projects today sit somewhere between categories rather than comfortably inside one of them.

**Recognition Built on Collaboration**

What gives the Clutch Global Awards particular weight for us is the role that client feedback plays in the evaluation process. SpaceDev currently holds a 5.0 rating across dozens of reviews on the platform, representing collaborations with companies working across different industries, markets and stages of growth.

Those reviews tell a story that no list of technologies could capture on its own. Software projects rarely unfold exactly as they were imagined at kickoff. Priorities change, new constraints appear, integrations reveal unexpected complications and ideas that seemed straightforward on paper become considerably more nuanced once engineering begins.

The quality of a development partner often becomes clearest during those moments. Strong technical knowledge matters, but so does the ability to listen, adapt, challenge assumptions when necessary and remain closely aligned with the people building the product on the other side of the table.

> "Every ambitious project begins with a certain amount of uncertainty. Our role is to bring the engineering experience, curiosity and collaboration needed to turn that uncertainty into something real. Being recognized across three categories is especially meaningful because it reflects both the technical range of our team and the trust our clients have placed in us along the way."

*Juan Manuel Sobral, Co-Founder & CTO, SpaceDev*

**An Industry Under Constant Change**

The boundaries between different areas of technology are becoming increasingly porous. Blockchain infrastructure now intersects with artificial intelligence, digital identity, tokenized assets, financial automation and enterprise systems in ways that would have seemed considerably more experimental only a few years ago.

AI agents, for example, are beginning to interact with wallets, smart contracts and financial applications. Real-world asset tokenization is creating new connections between traditional markets and programmable infrastructure. Verifiable credentials and decentralized identity are finding applications beyond purely crypto-native environments. At the same time, companies are becoming much more selective about where blockchain genuinely adds value.

We see that as a healthy development. Mature technology should eventually become less interesting for what it is and more interesting for what it enables.

That perspective influences how we approach projects today. Choosing the right architecture, protocol or smart contract design remains important, but those decisions always exist within a larger context. Security, usability, scalability, interoperability and long-term maintainability have to be considered from the beginning, particularly as Web3 applications become more deeply connected to real businesses and economic activity.

**A Communal Milestone**

Company awards naturally put a logo in the spotlight, but every project represents months or years of collaboration between developers, designers, managers, founders, product teams and stakeholders.

That's why this recognition belongs as much to the people we've worked with as it does to SpaceDev.

We're grateful to the clients who have trusted us with ambitious products, difficult challenges and ideas that didn't always come with obvious answers. Their willingness to collaborate closely with our team has helped us grow not only as engineers, but as partners capable of understanding the broader realities surrounding the technologies we build.

The same gratitude goes to everyone at SpaceDev. The award reflects countless hours spent designing architectures, writing and reviewing code, testing systems, auditing smart contracts, solving unexpected problems and staying curious in an industry where the tools and assumptions can change remarkably quickly.

There is still a great deal left to explore, and that's exactly what keeps the work interesting.`,
  },
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
- Joaquin Ferreira, who contributed key technical components
- Brenda Gutierrez, who delivered a sharp, polished presentation on Demo Day

[Watch the live demo on Hedera's official X account](https://x.com/HashgraphOnline/status/1933196939736338497)

[Read more in Hedera's article on hackathon winners](https://hashgraphonline.com/blog/hedera-ai-hackathon-winners/)

[img:/images/content/kx8VNn62kESeqD4eJF1S4IflU.webp]

Participating in hackathons is a powerful way for SpaceDev to explore new technologies, contribute to open ecosystems, and keep growing as a team. If you're eyeing an upcoming hackathon and want to collaborate, reach out!`,
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

Juan Manuel was also one of the judges for the hackathon, which brought together 20+ web3 projects and over $20K in prizes, one being an entry into an incubation program by [Innovation Smart District](https://www.linkedin.com/company/innovationsmartdistrict/).

[img:/images/content/XbN6RzxtOdIaz6v7jx3KTqcj5m8.webp]

Witnessing the energy across all the events held throughout the week was deeply motivational for everyone in attendance. It's undeniable that Latin America has come a long way and is now a strong web3 hub.

SpaceDev would like to thank [Steven Clarke-Martin](https://www.linkedin.com/in/stevenclarkemartin/) for the invitation to be part of ETH Canal, and all who made the event not only possible but so impactful. More pioneers like them are needed leading these initiatives across LATAM, creating spaces where innovation, collaboration, and vision come together.

For anyone interested, Frank and Gonza's talks are available here: [https://www.youtube.com/watch?v=2aO-BIgHxdI](https://www.youtube.com/watch?v=2aO-BIgHxdI) ("ZK in a Nutshell" & "The Gem of Pectra")

Juan Manuel's: [https://www.youtube.com/watch?v=rwXz-8YzErw](https://www.youtube.com/watch?v=rwXz-8YzErw) ("Blockchain: Shaping the Future Landscape of Ethereum Wallets")`,
  },
  {
    slug: "spacedev-celebrated-an-unforgettable-techy-for-the-day-with-more-than-20-participants",
    title: "SpaceDev's Techy for the Day",
    date: new Date("2025-04-23"),
    location: "Montevideo, Uruguay",
    tags: ["Community", "Education"],
    highlight: "20+ students aged 12-14 introduced to tech careers",
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
    highlight: "CTO Juan Manuel Sobral on radio program Se Arregla el Mundo",
    seoTitle: "SpaceDev CTO Analyzes the $LIBRA Scandal on Uruguayan Radio",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral analyzed the $LIBRA meme coin scandal on radio show Se Arregla el Mundo, explaining blockchain transparency and crypto risks.",
    image: "/images/content/8JXs19LZQA3XBCpVLDzsjFTChAg.webp",
    body: `Last week, our CTO and co-founder, Juan Manuel Sobral, participated in the radio show [Se Arregla el Mundo](https://www.youtube.com/watch?v=-8pIflHWR-s) to analyze one of decentralized space's hottest topics: the scandal involving Argentine President Javier Milei and the meme coin $LIBRA.

During the interview, Juan explained how everything originated from a tweet by Milei himself promoting an alleged project to support Argentine entrepreneurs. The crypto community quickly identified irregularities, such as that the domain for the project's website had been registered the same day, information was scarce, and within just 50 minutes, large sums of money had already changed wallets.

Juan stressed the role of transparency and auditability in blockchain, which allows for tracking fund movements and suspicious patterns, but added that identifying the real people behind these operations isn't always easy. As he mentioned in the interview, "When we create a coin, we can decide what to do with it, and the fact that 80% of the supply was in the hands of a few actors from the start is a clear sign of manipulation."

The conversation also reinforced the importance of education and caution. Cryptocurrency adoption continues to grow, but so do the risks for less-informed users. Bitcoin and Ethereum remain the safest options in the ecosystem due to their track record and level of decentralization.

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
    body: `On Saturday, November 16, SpaceDev CEO and co-founder Federico Sendra participated in the renowned Google DevFest event. Google DevFests are annual tech conferences organized by Google Developer Groups (GDG) communities around the globe. These gatherings provide a platform for local developers to connect, learn, and build using Google's tools and technologies.

Each DevFest is tailored to the unique needs and interests of its local community, offering a variety of activities, including:
- Technical Talks: Presentations on the latest Google technologies and tools, led by experts and Googlers.
- Hands-On Workshops: Interactive sessions where attendees gain practical experience with diverse technologies.
- Networking Opportunities: Spaces to connect with other professionals, share knowledge, and collaborate on projects.

[img:/images/content/oDCBuseZbg1AdpSBDJF7xq9hCw.webp]

This year, the organizers sought to feature someone who could expound on a disruptive technology: something innovative that sparks interest and introduces new ways of doing things.

With this in mind, they invited Federico to take the stage and deliver his talk titled The Blockchain Revolution. In approximately 30 minutes, Federico covered:
- The concept of trust: what it is and why it matters.
- Real-world examples: from scams to security issues and the challenges users face.
- Why now is the perfect time to learn and build on blockchain, illustrated with real-life use cases.
- Blockchain transforming the financial paradigm in 2025 (SWIFT, VISA, MasterCard, etc.)

[img:/images/content/QfeAWvguBLgF10CGvD4eKNp90fQ.webp]

It was an unmissable opportunity to connect with people who may not have had much information about what decentralized technologies mean for society and its evolution. By bridging this gap, new builders are inspired to join the web3 ecosystem.

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

The speakers in question were Santiago Garcia da Rosa, CTO of LINK Markets, and Juan Manuel Sobral, CTO and co-founder of SpaceDev. While each brought unique contributions based on their experiences and expertise, both explored how to drive innovation by creating products that meet people's needs, building high-performance teams capable of adaptation, and learning valuable lessons from the past.

[img:/images/content/ySKDYOgqzS9fFMUgycIdLb58CE.webp]

The audience was captivated by the practical and inspiring advice they received. Despite their extensive entrepreneurial experience, Santiago and Juan Manuel delivered their talks with both depth and approachability. Key topics discussed included:
- Their journeys in the tech world, from their early days as developers to leading the vision of their current companies.
- Lessons from early failures, emphasizing the value of perseverance and reflecting on why a product didn't work.
- Turning ideas into reality, addressing the gap between having a great idea and executing it successfully.
- The power of a positive organizational culture, which has been central to the success of their ventures.

[img:/images/content/6ceLWBXDhrnjgCtBaGvBM0tRkw.webp]

**The Role of Uruguay Innovation Hub**

As a connector of startups, government entities, and academic institutions, the Uruguay Innovation Hub provides crucial support to the country's tech ecosystem. This national program accelerates ventures in sectors such as advanced technologies, green technologies, and biotechnology.

**Empowering the Next Generation of Entrepreneurs**

The participation of Santiago Garcia da Rosa and Juan Manuel Sobral in ProductTank Montevideo not only reflects their commitment to the local ecosystem but also underscores the shared efforts of Uruguay Innovation Hub and CUTI to mentor emerging entrepreneurs.

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

The kickoff involved a virtual phase where participants attended workshops covering everything from idea generation to pitch development. This prepared the teams for the in-person stage, which took place at the Uruguay Innovation Hub. There, teams worked intensively on their projects with real-time support from expert mentors, including Juan Manuel Sobral and Federico Sendra (SpaceDev).

The organizers expected ten teams, but ended up with twenty from twelve different countries! The event culminated at Sinergia Faro, where the projects were pitched to a high-level jury.

[img:/images/content/RdQBOPC0n45QPComljsH0rDJWA.webp]

In addition to awarding USD 6,000 in prizes, not including bounties and grants from sponsors like Arbitrum, The Graph, Scroll, Push, INTMAX, and Kleros, the Buildathon offered participants the opportunity to network with industry professionals.

The pitching at the very end gave way to the last of the presentations from the long and prestigious list of international speakers. None other than Vitalik Buterin, co-founder of Ethereum, joined as a last-minute guest to show his support and recognition of the growing web3 movement in the country.

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
    body: `On May 31st, [Experis](https://www.experis.com.uy/wps/portal/experis/v3/uy/inicio) presented the book "25 Leaders Transforming Technology in Uruguay," recognizing the professionals driving the advancement of the ICT sector in the country. The event, held on the 22nd floor of the World Trade Center Montevideo Free Zone tower, was attended by prominent industry figures, including the President of Uruguay, Luis Lacalle Pou.

[Experis](https://www.experis.com.uy/wps/portal/experis/v3/uy/inicio), a [ManpowerGroup](https://www.manpowergroup.com/en) brand, focuses on attracting and hiring tech talent. Its specialization spans five areas: Business Transformation, Cloud and Infrastructure, Digital Workspace, Cybersecurity, and Enterprise Applications.

The concept behind the book arises from the challenges of finding, hiring, and retaining employees. This aspect of the tech world changed significantly and abruptly during the pandemic, as the sector had to adapt while dealing with its inherent highs and lows. Experis' book gathers reflections from 25 leaders on the present and future of technology in Uruguay.

Among these distinguished personalities is [Juan Manuel Sobral](https://www.linkedin.com/in/juanmsobral/), CTO of SpaceDev. "Digital literacy and the ability to adapt to technological changes are everyone's responsibility," he states in one of his highlighted quotes, calling for action in navigating today's complexities in an informed and secure manner.

Another key point in his testimony focuses on the challenges SpaceDev faced when specializing in blockchain and web3. In addition to strategizing and supporting changes across various departments, such as marketing, it was necessary to convince the team that this was a technology worth learning and investing resources in.

"When it comes to retaining talent, the most important thing is a strong internal culture," adds Juan Manuel, emphasizing the importance of transparency and what companies can do to strengthen employees' sense of belonging.

The book (in Spanish) can be downloaded after filling out a short form [here](https://share.hsforms.com/130XRLfOyTwulE_GhFYHjzw8npug).`,
  },
  {
    slug: "bitcoin-energy-summit-miami-2024",
    title: "Bitcoin Energy Summit, Miami 2024",
    date: new Date("2024-04-22"),
    location: "Miami, United States",
    tags: ["Bitcoin", "Web3"],
    highlight: "CTO panelist on Building and Securing Trust",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral joined the Bitcoin Energy Summit 2024 in Miami as a panelist on Building and Securing Trust in blockchain and crypto.",
    image: "/images/content/0dgnwv0B9TDVgsLtDKiG4WSq1xY.webp",
    body: `SpaceDev participated in the second edition of the Bitcoin Energy Summit, which took place in Miami on April 22-23, 2024.

This prominent event in the web3 universe, which attracted over 1,000 attendees, 120 speakers, 300 companies, and even members of the U.S. government, aimed to connect and address a highly relevant topic: how to use renewable energy to produce crypto.

Congressman Byron Donald drew attention with his statement, "We are the new gold rush", referencing historical periods of intense migration toward areas and industries with great enrichment potential.

It's crucial to implement the use of renewable energy for cryptocurrency production due to the high energy consumption associated with mining, especially for currencies like Bitcoin that rely on proof-of-work (PoW) algorithms. Sustainable practices can mitigate environmental impact by reducing greenhouse gas emissions and promoting a greener use of blockchain.

Juan Manuel Sobral, CTO and co-founder of SpaceDev, was one of the main speakers on the panel titled "Building and Securing Trust." Alongside other experts such as Mohammed Njie, Analys Falchuk, and Emmanuel Udotong, he exchanged ideas on the importance of blockchain and cryptocurrencies in forming a reliable and secure financial system for everyone.

Strong security measures, combined with transparent regulations, are fundamental for people to feel comfortable using and investing in crypto, especially new users. By reducing the risks of fraud, hacking, and other threats, secure systems facilitate digital currency transactions and build greater trust for their adoption.

In summary, Bitcoin Energy Summit 2024 was an internationally prestigious platform to explore sustainability, innovation, and efficiency in the current landscape. It successfully bridged the gap between the digital world of cryptocurrencies and everyday life.`,
  },
  {
    slug: "blockchain-summit-latam-2023-blockchain-crypto-holidays",
    title: "Blockchain Summit LATAM: Blockchain Crypto Holidays",
    date: new Date("2023-12-14"),
    location: "Montevideo, Uruguay",
    tags: ["Blockchain", "RWA"],
    highlight: "CTO Juan Manuel Sobral on RWA use cases and tokenized art",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral joined a panel on real-world asset use cases at the Blockchain Crypto Holidays conference in Montevideo, discussing tokenized art and Sygnum Bank's Picasso.",
    image: "/images/content/blockchain-crypto-holidays-2023.png",
    body: `On December 14, Juan Manuel Sobral (CTO, SpaceDev) participated in a panel on real-world asset (RWA) use cases at the Blockchain and Crypto Holiday Conference in Montevideo, described as "a notably lucrative and controversial area of blockchain."

The panel was moderated by Pamela Gonzalez Perilli (Web3 Pro) and also featured Valentin Jaremtchuk (WIN Investments, sports tokenization) and Fedor Bogorodskiy (Streampay, CrossFi and digital payments).

Sobral presented his thoughts on digital investment in art, citing the example of a Picasso painting tokenized and sold by [Sygnum Bank](https://www.sygnum.com/). Pablo Zanetta Ferraro rounded out the discussion by emphasizing the importance of legal research and consultation in blockchain financial ventures.

RWAs represent one of the fastest-growing areas of Web3, bridging traditional financial instruments with decentralized rails. SpaceDev continues to work at this intersection, helping clients navigate the technical and compliance complexity of tokenizing real-world value.`,
  },
  {
    slug: "gx30-genexus-by-globant",
    title: "GX30: GeneXus by Globant",
    date: new Date("2023-11-28"),
    location: "Radisson Hotel, Montevideo, Uruguay",
    tags: ["Blockchain", "Conference"],
    highlight: "CTO Juan Manuel Sobral keynote on the future of blockchain wallets",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral spoke at GX30 (the largest tech and innovation event in Latin America) on shaping the future of blockchain wallets.",
    image: "/images/content/gx30-genexus-2023.png",
    body: `GX30 was the 30th edition of the GeneXus Meeting, the first under the "GeneXus by Globant" brand following Globant's acquisition of GeneXus. Held November 28-30 at the Radisson Hotel Convention Center in Montevideo, it drew approximately 3,500 attendees from across Latin America and beyond, making it one of the most important technology, innovation, and business events in the region.

The conference covered topics including AI, super apps, legacy modernization, DevOps, digital transformation, and blockchain.

SpaceDev's CTO, Juan Manuel Sobral, delivered a talk titled "Shaping the Future of Blockchain Wallets," an exploration of the past, present, and future of digital wallet technology. With a master's degree in Blockchain research and 6+ years defining Web3 products, Juan Manuel brought technical depth and real-world context to a subject that sits at the heart of mainstream crypto adoption.

The event was a great opportunity to connect with technologists from across LATAM and to position SpaceDev's expertise in front of a broad and influential audience.`,
  },
  {
    slug: "cuti-business-forum",
    title: "CUTI Business Forum 2023",
    date: new Date("2023-11-09"),
    location: "Montevideo, Uruguay",
    tags: ["Community", "Leadership"],
    highlight: "SpaceDev IT Partner sponsor, CEO in conversation with Stefanini CEO",
    seoDescription:
      "SpaceDev participated as IT Partner sponsor at the CUTI Business Forum 2023, with CEO Federico Sendra in a Q&A alongside Guilherme Stefanini of Stefanini Brasil.",
    image: "/images/content/cuti-business-forum-2023.png",
    body: `The CUTI Business Forum (CBF2023) is the annual event where the Uruguayan IT ecosystem meets. Organized by CUTI (Camara Uruguaya de Tecnologias de la Informacion), the 2023 edition featured 12 talks and 16 workshops spanning blockchain, networking in the USA, AgriTech, and more.

SpaceDev participated as an IT Partner sponsor at the event, a recognition of the company's standing within Uruguay's tech community.

One of the highlights was a lively Q&A between Federico Sendra, CEO of SpaceDev, and Guilherme Stefanini, CEO of HAUS and son of the founder of Stefanini Brasil. Stefanini shared how his group has transformed over a decade into a company that develops its own technology, offering Federico and the audience a rare look into the journey of building a global tech firm from Latin America.

SpaceDev's involvement in events like CUTI Business Forum reflects the company's commitment to shaping the ecosystem it operates in, not just building products within it.`,
  },
  {
    slug: "blockchain-summit-latam-2023",
    title: "Blockchain Summit LATAM 2023 (Colombia)",
    date: new Date("2023-10-04"),
    location: "Agora Convention Center, Bogota, Colombia",
    tags: ["Blockchain", "Conference", "RWA"],
    highlight: "CTO on RWA panel at the 7th edition of Blockchain Summit LATAM",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral joined a panel on real-world assets at the Blockchain Summit LATAM 2023 in Bogota, Colombia, discussing tokenization and digital art.",
    image: "/images/content/blockchain-summit-latam-colombia-2023.png",
    body: `The 7th edition of Blockchain Summit LATAM took place October 4-6, 2023 at the Agora Convention Center in Bogota, Colombia. The event brought together over 2,000 in-person attendees, 5,000+ virtual participants, and 130+ speakers to discuss financial services, banking, government, tokenization, gaming, DeFi, NFTs, metaverse, and Web3.

SpaceDev's CTO, Juan Manuel Sobral, took the stage in a panel on Real-World Asset (RWA) use cases, moderated by Pamela Gonzalez Perilli (Lead Blockchain Developer, Web3 Pro). He was joined by Valentin Jaremtchuk (co-CEO, WIN Investments) and Fedor Bogorodskiy (CEO, Streampay).

Sobral discussed the growing impact of digital investment in art, using the example of a Picasso painting tokenized and sold by Sygnum Bank as a window into what RWA adoption could mean for high-value asset classes.

Blockchain Summit LATAM is one of the most important regional blockchain conferences, and SpaceDev's participation reinforces the company's position as a leading Web3 development partner in Latin America.`,
  },
  {
    slug: "interview-with-federico-sendra-why-is-blockchain-technology-important-for-businesses",
    title: "Why is Blockchain Technology Important for Businesses?",
    date: new Date("2023-09-02"),
    location: "Montevideo, Uruguay",
    tags: ["Blockchain", "Interview"],
    highlight: "CEO Federico Sendra interviewed by Empresarios de Aca",
    seoTitle: "Federico Sendra on Why Blockchain Matters for Businesses",
    seoDescription:
      "SpaceDev CEO Federico Sendra explains why blockchain technology matters for businesses in an interview with YouTube channel Empresarios de Aca.",
    image: "/images/content/federico-sendra-interview-2023.png",
    youtubeId: "jm0DN38MeGo",
    body: `Federico Sendra, CEO and co-founder of SpaceDev, was interviewed by Tatiana Cortazza, host of the YouTube channel "Empresarios de Aca," on September 2, 2023.

The topic: why blockchain technology is important for businesses.

A blockchain evangelist and Stanford/ORT graduate, Federico has spent years helping companies understand and adopt decentralized technologies. In this conversation, he breaks down the practical business case for blockchain beyond the hype, covering transparency, traceability, and the emerging use cases that are actually gaining traction.

[Watch the full interview on YouTube](https://www.youtube.com/watch?v=jm0DN38MeGo)`,
  },
  {
    slug: "ethereum-argentina",
    title: "Ethereum Argentina 2023",
    date: new Date("2023-08-10"),
    location: "Buenos Aires, Argentina",
    tags: ["Ethereum", "Web3", "Conference"],
    highlight: "CTO Juan Manuel Sobral keynote on the future of Ethereum wallets",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral delivered a keynote at Ethereum Argentina 2023 on blockchain wallets: types, security, and accessibility for everyday users.",
    image: "/images/content/ethereum-argentina-2023.jpg",
    youtubeId: "0ZllEEaVkq0",
    body: `Ethereum Argentina 2023 was one of the region's most important blockchain events, bringing together 110 international speakers, 20 technical workshops, around 30 sponsors, and over 3,000 attendees in Buenos Aires.

The event included a Buildathon hackathon where teams competed to build Web3 solutions, alongside a packed conference schedule covering the full breadth of the Ethereum ecosystem.

SpaceDev's CTO, Juan Manuel Sobral, delivered a keynote on "Blockchain: Shaping the Future Landscape of Ethereum Wallets." The talk covered the evolution of wallet types, security features, and how the next generation of wallets is making self-custody accessible to everyday users, not just crypto natives.

[Watch Juan Manuel's keynote on YouTube](https://www.youtube.com/watch?v=0ZllEEaVkq0)

Ethereum Argentina reinforced that LATAM is a serious player in the global Web3 ecosystem, and that builders from the region are contributing meaningfully to where the industry is headed.`,
  },
  {
    slug: "spacedev-among-the-top-3-at-weavedb-hackathon-2023",
    title: "SpaceDev Top 3 at WeaveDB Hackathon 2023",
    date: new Date("2023-07-25"),
    location: "Remote",
    tags: ["Hackathon", "Web3"],
    highlight: "Only LATAM company in the top 3 out of 30 global teams",
    seoTitle: "SpaceDev Places Top 3 at WeaveDB Hackathon 2023",
    seoDescription:
      "SpaceDev finished in the top 3 at the WeaveDB 2023 Hackathon, competing against 30 global teams and becoming the only Latin American company to reach the podium.",
    image: "/images/content/weavedb-hackathon-2023.png",
    body: `In July 2023, SpaceDev competed in the WeaveDB LTD 2023 Hackathon against 30 teams from around the world, and finished in the top 3.

More than a great result, this was a milestone: SpaceDev was the only Latin American company to reach the podium in a global competition focused on one of Web3's most innovative data infrastructure layers.

WeaveDB is a NoSQL database built on Arweave and Warp, enabling truly decentralized, on-chain data storage for Web3 applications. Competing at this level required deep technical fluency with the protocol, and SpaceDev delivered.

This hackathon result is part of a broader pattern: SpaceDev consistently shows up, competes, and wins on the global stage. From Hedera to WeaveDB, the team's ability to build fast and build well under competitive conditions is one of its defining strengths.

[View the original announcement on LinkedIn](https://www.linkedin.com/posts/spacedev-uy_blockchain-success-story-activity-7089610041028169728-pMAL)`,
  },
  {
    slug: "it-builders",
    title: "IT Builders 2023",
    date: new Date("2023-05-25"),
    location: "Montevideo, Uruguay",
    tags: ["Blockchain", "Conference"],
    highlight: "CTO spoke at Uruguay's inaugural IT Builders conference",
    seoDescription:
      "SpaceDev CTO Juan Manuel Sobral presented Blockchain: Uncovering What's Inside the Box at IT Builders 2023, Uruguay's inaugural tech conference with 2,000+ participants.",
    image: "/images/content/it-builders-2023.jpg",
    body: `IT Builders 2023 was Uruguay's inaugural IT conference, drawing 2,000+ participants across topics including AI, data analytics, innovation, digital transformation, communication, and gender equality in tech.

Notable speakers included Lisandro Dorfman (Dashboards and KPIs), Guillermo Treister (AI in Business), and Diego Delgado (Async Communication at Scale). The event also recognized Ethereum Uruguay for their community knowledge-sharing work.

SpaceDev's CTO, Juan Manuel Sobral, presented "Blockchain: Uncovering What's Inside the Box," a talk designed to demystify blockchain for a broader technical audience. Two of his key takeaways: "It's not just the data that's important, but what it can create" and "Blockchain is here to stay."

IT Builders established itself as an important gathering point for Uruguay's tech community, and SpaceDev's participation helped position the company as a thought leader at the intersection of blockchain and enterprise software.`,
  },
  {
    slug: "ethereum-uruguay-onboarding-month",
    title: "Ethereum Uruguay: Onboarding Month",
    date: new Date("2023-04-26"),
    location: "Montevideo, Uruguay",
    tags: ["Ethereum", "Community"],
    highlight: "Tech talk on private key recovery alongside The Graph and Chainlink",
    seoDescription:
      "SpaceDev presented In Search of the Enigma: How to Recover Your Private Key at Ethereum Uruguay's April Onboarding Month alongside The Graph and Chainlink.",
    image: "/images/content/ethereum-uruguay-onboarding-2023.jpg",
    body: `Ethereum Uruguay ran an Onboarding Month campaign throughout April 2023, culminating in a live event on April 26 at Cowork Sinergia Faro in Montevideo.

SpaceDev contributed a tech talk titled "In Search of the Enigma: How to Recover Your Private Key," a deep dive into the cryptographic mechanisms behind private key recovery, covering the technology, the education, and the community context that makes self-custody both powerful and approachable.

Co-presenters at the event included teams from [The Graph](https://thegraph.com) and [Chainlink](https://chain.link), two of the most important infrastructure protocols in the Ethereum ecosystem.

SpaceDev has been a close partner of Ethereum Uruguay since the community's early days, contributing speakers, mentors, and technical expertise across dozens of events. Initiatives like Onboarding Month are exactly the kind of grassroots effort that drives real, lasting adoption of Web3 technology.`,
  },
  {
    slug: "interview-federico-sendra-ceo-spacedev-el-pais",
    title: "Interview with Federico Sendra (El Pais)",
    date: new Date("2023-02-10"),
    location: "Montevideo, Uruguay",
    tags: ["Interview", "Leadership"],
    highlight: "CEO Federico Sendra on entrepreneurship and the power of networking",
    seoTitle: "Federico Sendra, CEO of SpaceDev, Interviewed by El Pais Uruguay",
    seoDescription:
      "El Pais journalist Antonio Larronda interviewed SpaceDev CEO Federico Sendra about his book recommendation for entrepreneurs and his approach to building strategic networks.",
    image: "/images/content/federico-sendra-elpais-2023.png",
    body: `On February 10, 2023, El Pais journalist [Antonio Larronda](https://www.linkedin.com/in/antonio-larronda) interviewed Federico Sendra, CEO and co-founder of SpaceDev, for the newspaper's entrepreneurship series.

The focus: Sendra's book recommendation for entrepreneurs. His pick was "How to Be a Power Connector" by [Judy Robinett](https://www.linkedin.com/in/judyrobinett), a guide to building strategic networks that create real results.

The core principle that resonated most with Sendra: "If you want to achieve any goal, you need other people to help you achieve it." He applies the book's "5+50+100 rule" to categorize his professional and personal relationships, treating his contact network as what Robinett calls "net personal worth."

Sendra reads approximately one book per month. The El Pais interview is part of a recurring series where Uruguayan business leaders share the ideas that have shaped how they build and lead.

[Read the original article on El Pais](https://www.elpais.com.uy/el-empresario/que-libro-recomienda-leer-federico-sendra-ceo-de-spacedev)`,
  },
];

export const getMediaItem = (slug: string) => mediaItems.find((m) => m.slug === slug);
