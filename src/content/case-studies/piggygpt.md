---
name: "PiggyGPT"
tagline: "AI-powered trading for the EVM ecosystem, without the complexity."
category: Web3
accent: cyan
client: "PiggyGPT"
industry: "DeFi & AI"
year: 2024
duration: "Ongoing from March 2024"
team: "Staff Augmentation"
services:
  - AI Integration
  - DeFi Development
  - Product Development
techStack:
  - React
  - TypeScript
  - Material UI
  - Prisma
  - Wondergraph
publishedAt: 2025-02-15
heroImage: "/images/case-studies/piggygpt/piggygpt_.png"
summary: "PiggyGPT is an AI-driven trading platform built to make decentralized finance accessible to retail traders in the EVM ecosystem. SpaceDev contributed to defining the product, integrating cross-chain swap capabilities, and building the AI assistant layer that lets users trade, get insights, and manage wallets directly from Telegram — without needing to understand the underlying infrastructure."
objectives:
  - Make DeFi trading accessible to retail users without requiring deep technical knowledge of blockchain.
  - Automate trade execution and route optimization across multiple EVM chains.
  - Integrate ChatGPT-powered trading assistance directly into Telegram, with future expansion to WhatsApp and Discord.
  - Provide self-custodial wallet management so users own their assets from day one.
  - Build engagement mechanics including daily rewards and airdrop-driven incentive programs.
deliverables:
  - "AI conversational assistant (ChatGPT-powered) integrated into Telegram for real-time trading guidance."
  - "Automated one-tap trade execution with cross-chain swap routing via Jupiter, LEFI, and Deep Bridge."
  - "Self-custodial wallet provisioning on user sign-in, with no friction for non-technical users."
  - "Airdrop and daily engagement reward system to drive adoption and retention."
  - "Front-end dashboard built with React, TypeScript, and Material UI, prototyped with V0 by Vercel."
  - "elizaOS-based AI agent deployed across Discord, Telegram, and Twitter."
outcome: "PiggyGPT reached over 10,000 participants in its initial testnet campaigns and processed 5,000 USDC in trading volume during the testing phase. The platform secured strategic collaborations with Monarium, Arbitrum, and Safe, and established a tokenomics model to sustain liquidity and user incentives going forward."
galleryType: "mobile"
gallery:
  - "/images/case-studies/piggygpt/gallery/gallery1.png"
  - "/images/case-studies/piggygpt/gallery/gallery2.png"
  - "/images/case-studies/piggygpt/gallery/gallery3.png"
  - "/images/case-studies/piggygpt/gallery/gallery4.png"
  - "/images/case-studies/piggygpt/gallery/gallery5.png"
  - "/images/case-studies/piggygpt/gallery/gallery6.png"
---

## The Challenge

Decentralized finance holds genuine promise for retail traders, but the barrier to entry has always been steep. Managing bridges, gas fees, wallet keys, and fragmented liquidity across chains is genuinely confusing, and most platforms assume a level of technical fluency that the majority of users simply don't have. PiggyGPT was built to change that.

The challenge SpaceDev was brought in to solve was both technical and product-level: how do you make cross-chain trading feel as simple as sending a message, while still connecting to real DeFi infrastructure? The team needed to identify which features mattered most, architect integrations with existing protocols, and ship something that retail users would actually use — not just tolerate.

## Our Approach

SpaceDev's role was to analyze the product requirements, identify the right technical integrations, and build the system layer by layer. We used ChatGPT to power the conversational trading assistant inside Telegram, giving users a familiar interface for getting trade insights and executing swaps. GitHub Copilot accelerated the coding process, and V0 by Vercel allowed rapid UI prototyping so the team could iterate on the interface quickly.

For the cross-chain swaps — one of the most technically demanding parts of the project — we integrated with established DeFi protocols: Jupiter, LEFI, and Deep Bridge. These integrations handle route optimization automatically, so users never have to think about which chain they're on or how to move assets between them. Self-custodial wallets are provisioned at sign-in, meaning users hold their assets from the start without going through a complex setup.

We also built an elizaOS-based AI agent deployed across Discord, Telegram, and Twitter to extend the platform's presence and enable community-level trading assistance at scale.

## Results

The testnet campaign attracted over 10,000 participants and saw 5,000 USDC in trading volume during the testing phase — meaningful early signals for a retail-focused DeFi product. The platform established strategic partnerships with Monarium (for future crypto-to-fiat off-ramps in Europe), Arbitrum, and Safe.

A tokenomics model was designed to sustain the reward and airdrop system long-term, ensuring that user incentives align with platform growth. Plans are in place to expand to additional blockchains and messaging platforms beyond Telegram.

## Tech Stack

The frontend is built with React, TypeScript, and Material UI, with Prisma handling data access and Wondergraph supporting data querying needs. The AI layer runs on ChatGPT for the conversational assistant and elizaOS for the multi-platform agent. V0 by Vercel enabled rapid prototyping during the UI iteration phase. The stack was chosen to balance development speed with the reliability that financial applications require.
