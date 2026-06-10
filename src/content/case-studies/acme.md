---
name: "ACME"
tagline: "Turn loyalty points into currency with just a tap."
category: Web3
accent: purple
client: "ACME"
industry: "Loyalty & Fintech"
year: 2023
duration: "Ongoing"
team: "2 engineers"
services:
  - Backend Engineering
  - Frontend Engineering
  - SDK Development
techStack:
  - React
  - WunderGraph
  - TypeScript
  - PostgreSQL
publishedAt: 2025-02-15
heroImage: "/images/case-studies/acme/acme_.png"
summary: "ACME reimagines how loyalty points are managed and redeemed, making the process as simple as a single tap. Similar to how Visa made cash universally spendable, ACME lets any merchant, online or in-store, reward and accept loyalty points just like Apple Pay. SpaceDev upgraded the platform's entire technology stack to support TypeScript, multi-chain Web3 interactions, and overall performance improvements."
objectives:
  - Upgrade the backend and frontend to a modern TypeScript-based stack.
  - Implement multi-chain support to broaden the platform's reach and versatility.
  - Enable seamless Web3 interactions (crypto payments, NFT acquisition, and smart contract execution) behind a simple one-tap interface.
  - Improve overall performance and system efficiency for both end users and integrating merchants.
deliverables:
  - "Full TypeScript migration across backend and frontend codebases."
  - "Multi-chain integration layer supporting crypto fund usage from digital wallets in a single tap."
  - "OnRamp service integration for purchasing cryptocurrency via credit card and other payment methods."
  - "NFT acquisition flow embedded directly into the platform."
  - "Smart contract execution interface allowing clients to trigger any contract function from the ACME UI."
outcome: "With the added capabilities, ACME is able to provide a seamless user experience for loyalty point transactions and Web3 interactions, making processes that are complex under the hood feel effortless to end users. True to its product name: Acme One Tap."
gallery:
  - "/images/case-studies/acme/gallery/gallery1.png"
  - "/images/case-studies/acme/gallery/gallery2.png"
  - "/images/case-studies/acme/gallery/gallery3.png"
  - "/images/case-studies/acme/gallery/gallery4.png"
  - "/images/case-studies/acme/gallery/gallery5.png"
  - "/images/case-studies/acme/gallery/gallery6.png"
metatitle: "ACME Case Study: Web3 Loyalty Points Platform | SpaceDev"
metadescription: "SpaceDev upgraded ACME's Web3 loyalty platform with multi-chain blockchain development, enabling one-tap crypto payments, NFTs, and smart contracts."
---

## The Challenge

ACME had a compelling product vision: turn loyalty points into spendable currency that works everywhere, the same way a Visa card or Apple Pay does. Behind that simple premise, though, was a technically demanding platform that needed to handle crypto wallets, on-chain transactions, NFT flows, and smart contract interactions, all without exposing any of that complexity to the end user.

The existing codebase hadn't kept pace with the product's ambitions. The technology stack needed a significant upgrade to support the multi-chain Web3 capabilities the roadmap required, and the system had to be reliable and performant enough to serve merchants and consumers at scale. The team needed engineering partners who understood both the Web3 side and the product experience side of the problem.

## Our Approach

SpaceDev embedded two blockchain developers (one focused on the frontend, one on the backend) to work directly alongside the ACME team on an ongoing basis. The primary work was a full TypeScript migration across the stack, establishing a consistent, type-safe foundation for all future development.

From there, we built out the multi-chain support layer that powers ACME's core interactions: using crypto funds from digital wallets with a single tap, purchasing cryptocurrency through the most appropriate OnRamp services for each transaction, acquiring NFTs through the platform, and executing any smart contract function that client integrations require. WunderGraph was used to federate and simplify the API layer, keeping backend complexity from leaking into the frontend. PostgreSQL handles the relational data backing the loyalty point ledger and transaction history.

The goal throughout was to make the interface between the user and the blockchain invisible. Every interaction that involves an elaborate on-chain process (wallet lookup, gas estimation, transaction signing, confirmation) is resolved automatically, with the user seeing nothing more than a tap and a confirmation.

## Results

ACME now offers a platform that is genuinely appealing for businesses looking to add loyalty point transactions and Web3 interactions to their products. The TypeScript migration improved code quality and developer velocity across the board, and the multi-chain architecture gives the platform the flexibility to support new networks without rearchitecting the core.

The result is a product that lives up to its name: Acme One Tap. Operations that involve elaborate processes behind the scenes are completed with a single interaction on the surface, making Web3 accessible to the kind of everyday users who have no interest in managing wallets or understanding gas fees.

## Tech Stack

The platform is built on React for the frontend, with WunderGraph handling API federation and TypeScript enforced throughout. PostgreSQL serves as the primary database for loyalty point ledgers and transaction records. The Web3 layer integrates directly with multiple chains and OnRamp providers, with smart contract interactions handled client-side through standard EVM tooling.

