---
title: "Ethereum Adoption Trends 2027: Privacy Is the Bottleneck"
description: "Ethereum hosts most of the tokenized RWA market, but the privacy technology institutions actually adopted runs on permissioned networks. What Ethereum ships in 2027 decides whether tokenization ends up open or enclosed."
publishedAt: 2026-10-02
author: juan-manuel-sobral
category: "Blockchain Trends"
tags: ["ethereum", "institutional", "tokenization"]
readTime: 13
cover: "/images/content/ethereum-adoption-trends-2027/cover.png"
metatitle: "Ethereum Adoption Trends 2027: Privacy, Tokenization and Canton"
metadescription: "Ethereum hosts most of the tokenized RWA market, but the privacy technology institutions actually adopted runs on permissioned networks. What Ethereum ships in 2027 decides whether tokenization ends up open or enclosed."
takeaways:
  - "Ethereum's institutional position is strong and strange at once. It hosts most tokenized real-world assets, yet the single largest capital flow in institutional blockchain runs on Canton, a permissioned network built for privacy."
  - "Institutions treat privacy as a requirement, not a preference. The correct framing is not confidentiality, it is attack surface. That changes whether privacy is a deferrable feature or a day-one security requirement."
  - "The permissioned side is winning today. Canton is in production with 30+ institutions and Broadridge above $4 trillion in monthly Treasury repo. Ethereum's privacy plan is credible and, as of the last data check, none of it is live on mainnet."
  - "Tokenization share estimates diverge roughly twofold. Any single confident percentage is a claim about methodology as much as about market share."
  - "The decisive signal for 2027 is whether the shared bank deposit network selects a public chain, an L2, or a permissioned ledger."
  - "What breaks in institutional blockchain projects is operational, not cryptographic. Key management, not maths."
faqs:
  - question: "Is Ethereum adding privacy?"
    answer: "Yes, but nothing has shipped to mainnet. The near-term plan has three parts: account abstraction combined with FOCIL, keyed nonces (EIP-8250), and access-layer work including the Kohaku toolkit. FOCIL is the selected headliner for the Hegotá upgrade."
  - question: "What is Kohaku?"
    answer: "An Ethereum Foundation open-source toolkit for building privacy-focused wallets. Its SDK shipped on 25 May 2026 at v0.0.1-alpha.21, integrating Railgun, Tornado Cash and Privacy Pools at the wallet layer with EIP-4337 relaying operational."
  - question: "What is FOCIL?"
    answer: "Fork-choice enforced inclusion lists (EIP-7805). A committee of validators proposes transactions that block builders must include; if a proposer filters them, the network rejects the block. It is both a censorship-resistance and a privacy mechanism."
  - question: "When is the Glamsterdam upgrade?"
    answer: "Targeted for Q4 2026. It focuses on enshrined proposer-builder separation, block-level access lists for parallel execution, and state storage repricing."
  - question: "Why do institutions use Canton instead of Ethereum?"
    answer: "Canton was built for regulated capital markets with sub-transaction privacy by default, so counterparty data is visible only to relevant parties. Broadridge scaled to over $4 trillion in monthly Treasury repo on Canton, and Canton-connected platforms account for roughly 57.5% of global digital bond issuance since 2022."
  - question: "How much of the tokenized RWA market is on Ethereum?"
    answer: "Estimates range from roughly 33% to 58% depending on methodology, with total market size itself estimated between $31 billion and $65 billion. Token Terminal puts Ethereum near 58%; the Ethereum Foundation cites 40% across Ethereum and its L2s."
  - question: "Is public blockchain data really a problem for banks?"
    answer: "Yes. A single transaction can map a counterparty's full position and payment history. Beyond confidentiality, an exposed balance is an attack target, which makes privacy a security requirement rather than a product preference."
---

## Where Ethereum adoption actually stands going into 2027

Strong, because Ethereum hosts the majority of tokenized real-world assets, [close to 58% of the market according to Token Terminal](https://institutions.ethereum.org/), carries roughly $171 billion in stablecoin TVL across mainnet and its L2s, and gained a dedicated institutional nonprofit in July 2026. BlackRock's BUIDL began trading on Uniswap in February 2026, the first time a regulated institutional product listed on a decentralised exchange.

Strange, because the single largest capital flow in institutional blockchain is not happening on Ethereum at all. It is happening on **Canton**, a permissioned network built for privacy, where Broadridge scaled from $2 trillion to over $4 trillion in monthly Treasury repo financing.

That gap is the whole story of 2027. Institutions have made clear that privacy is a requirement, not a preference. The privacy technology that met that requirement is the permissioned kind. Ethereum has a credible plan to close the gap, account abstraction with FOCIL, keyed nonces, and a wallet-layer toolkit called Kohaku, and as of the last data check none of it is live.

Whether it ships determines whether tokenization consolidates on open infrastructure or settles permanently into enclosed networks.

## Why privacy became an institutional requirement

Public blockchains expose balances and transaction histories by default. For most of crypto's history that was framed as a feature: anyone can audit the ledger. For a regulated institution it is a blocking objection.

The concrete problem is simple enough to explain in one sentence. A single transaction is enough to map a counterparty's entire position and payment history. No corporate treasurer signs off on that, and no bank runs payroll or client settlement on a ledger competitors can read in real time.

But the framing most coverage uses, confidentiality as a competitive concern, understates it.

> "Public chains expose balances by default. Wallets aren't tied to identities, but an exposed balance is a target. For a bank, privacy isn't a confidentiality preference, it's an attack-surface problem."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

**That reframing matters for how you scope a build.** If privacy is a competitive concern, it is a product feature you can defer. If it is an attack surface, it is a security requirement, and it belongs in the threat model from day one. In practice that means it is scoped alongside [smart contract and blockchain security](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security), not after it.

The Ethereum Foundation has organised around this. It launched a Privacy Cluster in October 2025 with 47 researchers, engineers and cryptographers led by Igor Barinov, and rebranded its Privacy & Scaling Explorations team to Privacy Stewards of Ethereum, a shift from research to shipping. EF co-director Tomasz Stańczak has described [a roughly 50-person privacy team operating outside the core protocol group](https://unchainedcrypto.com/vitalik-buterin-outlines-ethereums-near-term-privacy-roadmap-aa-focil-keyed-nonces-and-kohaku/), with its own roadmap for institutional privacy standards, and has said plainly that the feedback from institutions is that privacy is a must. a16z has called privacy the most important moat of 2026.

## The side that already won: Canton and permissioned privacy

![An open hand holding a glowing Ethereum logo panel, surrounded by dozens of smaller floating panels with the same logo against a dark night-time city](/images/content/ethereum-adoption-trends-2027/ethereum-adoption-trends-2027-01-canton.png)

Here is the part that most Ethereum-focused coverage leaves out, and it is uncomfortable.

**Institutional privacy is not a future capability. It is in production, at scale, on permissioned infrastructure.**

Canton Network was purpose-built for regulated capital markets, with sub-transaction privacy by default: participants receive only the information relevant to their role, and regulators or auditors gain access when explicitly included. More than 30 major institutions are on the network. The proof point is Broadridge, whose Distributed Ledger Repo platform [scaled from $2 trillion to over $4 trillion in monthly on-chain US Treasury repo financing](https://www.canton.network/blog/how-canton-network-delivers-institutional-grade-privacy) after deploying on Canton.

Goldman Sachs built GS DAP on the same stack. Canton-connected platforms, led by GS DAP, accounted for roughly 57.5% of the approximately $8 billion in global digital bonds issued since 2022 (via 51 Insights, *Money Movement 2.0*). In December 2025 the DTCC announced it would tokenize US Treasury securities on Canton.

Compare that to the public-chain privacy stack, and the contrast is stark. [Aztec, the Ethereum L2 offering fully private smart contracts, launched its alpha mainnet in early 2026 and runs at roughly one transaction per second](https://blog.chainsafe.io/2026-guide-to-blockchain-privacy/) as of August 2026. Solana's confidential transfers launched in early 2025, were shut down to patch bugs, and only came back online in June 2026. Cardano's Midnight sidechain launched a federated mainnet on 31 March 2026.

**The correct version of the "privacy is unsolved" thesis is therefore narrower and more useful:** privacy for institutions is solved and adopted, inside walled gardens. Privacy on open, permissionless networks is not. That is the actual race.

## The blockchain privacy architecture landscape

Five approaches, with genuinely different compliance implications. This table is the reference most teams need before scoping anything.

| Approach | Example | How it works | Status at last data check |
|---|---|---|---|
| Permissioned, sub-transaction privacy | Canton | Only entitled parties see data; auditors added explicitly | **Production. 30+ institutions. Broadridge at $4T+/month** |
| Confidential extensions on a public L1 | Solana Confidential Transfers | Hides amounts, not identities | Relaunched June 2026 after bug fixes |
| ZK shielded pool | Zcash | Viewing keys let auditors decrypt | Ironwood upgrade activated 28 July 2026 |
| Private smart contracts | Aztec (Ethereum L2) | Local computation, only a proof is published; no auditor key | Alpha mainnet, roughly 1 tps |
| Privacy at the wallet layer | Kohaku (Ethereum) | Integrates Railgun, Tornado Cash, Privacy Pools | SDK alpha, May 2026 |

The compliance consequences differ sharply. Zcash gives auditors viewing keys. Canton gives regulators explicit inclusion. [Aztec has no built-in auditor key or backdoor, so funds inside it are untraceable without the holder's cooperation](https://www.chainalysis.com/blog/privacy-blockchain-compliance/), which means monitoring requires bespoke solutions.

There is a convergence worth naming: public chains adding confidentiality and institutional-native networks like Canton are arriving at the same model, encrypt the details, preserve public verifiability, allow selective disclosure. The genuinely different animals are systems built for unlinkability rather than confidentiality, and that difference determines who can legally use what. Choosing between them is an architecture decision with regulatory consequences, which is why it belongs in [product discovery](https://spacedev.io/product-discovery) rather than in implementation.

## Ethereum's three-step privacy plan

![A glowing translucent cube holding an Ethereum logo above a glowing platform, over a neon-lit city at night with trading screens and laptop keyboard in the foreground](/images/content/ethereum-adoption-trends-2027/ethereum-adoption-trends-2027-02-privacy-plan.png)

In May 2026, Vitalik Buterin published a near-term plan to make privacy native to Ethereum rather than bolted on through third-party tools. [It has three parts](https://www.coindesk.com/tech/2026/05/20/vitalik-buterin-outlines-ethereum-s-privacy-measures-here-is-what-it-means-for-the-network-and-eth).

**Account abstraction plus FOCIL.** Today private transactions pass through the public mempool, where block builders can see them and choose to exclude them. FOCIL, fork-choice enforced inclusion lists, EIP-7805, has a committee of validators propose lists of transactions builders are obliged to include. If a proposer filters them, the network rejects the block. This directly addresses validators dropping transactions to comply with sanctions lists.

**Keyed nonces (EIP-8250).** Ethereum accounts use a single sequential counter, which causes collisions when parallel private transfers originate from the same pool. Keyed nonces replace it with a (nonce_key, nonce_seq) structure, creating independent replay domains by activity type and making on-chain correlation harder.

**The access layer.** This is the least covered and, for a non-technical audience, the easiest to grasp. Even when a transaction is private, every time a wallet checks a balance or reads a contract it queries a third-party RPC provider, exposing IP address, location and full wallet identity. Kohaku and private-reads infrastructure close that gap.

Think about what that means operationally. You can have perfect transaction privacy and still leak your entire position to whoever runs your node infrastructure, simply by looking at your own balance. For an institution, that is a vendor-risk question with no current answer.

Buterin's underlying argument is that privacy is a precondition for ETH having genuine moneyness, and that L1 privacy could pull activity back to mainnet. [**None of the three is live**](https://www.coindesk.com/tech/2026/05/20/vitalik-buterin-outlines-ethereum-s-privacy-measures-here-is-what-it-means-for-the-network-and-eth)**. Any article telling you Ethereum has privacy today is wrong.**

## Kohaku, concretely

Kohaku was introduced at Devconnect in Buenos Aires in November 2025 as [a modular framework of primitives for building privacy-focused wallets without centralised intermediaries](https://www.theblock.co/post/379149/vitalik-buterin-unveils-kohaku-privacy-focused-framework-ethereum).

The SDK shipped on 25 May 2026 at version v0.0.1-alpha.21. It [integrates Railgun, Tornado Cash and Privacy Pools directly at the wallet layer, with EIP-4337 mempool relaying operational through the Railgun integration](https://www.dextools.io/news/ethereum-foundation-kohaku-sdk-privacy-wallets-2026). Ambire and a browser extension built with breadcoop are preparing implementations.

A related piece: [per-dapp addresses](https://news.bitcoin.com/vitalik-kohaku-per-dapp-address-ethereum-privacy/), breaking the norm of one persistent global address per user. Today, a single address lets anyone query every token you hold, every protocol you have used and every transaction you have made. Buterin has called that norm one that has to break.

**Read the version number honestly.** Alpha 21 with production wallets "preparing integrations" is early. The direction is right and the funding and attention are real. The timeline is not something to plan a 2027 product launch against. The wallet-connection layer that this eventually changes is covered in [wallet connections](https://spacedev.io/blog/wallet-connections) and in [why MetaMask embedded wallets matter for Web3 onboarding](https://spacedev.io/blog/why-metamask-embedded-wallets-are-a-game-changer-for-web3-onboarding).

## The contradiction nobody resolves

Here is the tension at the centre of this, and we are not going to pretend it resolves cleanly.

Kohaku integrates Tornado Cash, a sanctioned mixer. Aztec has no auditor key by design. Meanwhile the institutions Ethereum wants require both privacy *and* the ability to demonstrate compliance to a regulator on demand.

**Selective disclosure** is the proposed middle ground: prove that a user passed KYC, belongs to an approved jurisdiction or meets an access requirement, without exposing names, addresses or underlying documents. It is a genuinely better fit for regulated finance than crypto's usual all-or-nothing models, and it is the same primitive behind [decentralized identity systems](https://spacedev.io/blockchain-development-services/decentralized-identity).

But selective disclosure is a property of a system's design, and the systems currently shipping on Ethereum were mostly designed for unlinkability, not for auditability. Retrofitting one into the other is not a configuration change.

This is the gap Canton closed by building for regulated markets from the start, and it is why the permissioned side is winning today. It is also why the outcome is genuinely uncertain rather than merely delayed.

## The Ethereum upgrade calendar into 2027

Ethereum moved to a twice-yearly upgrade cadence, a deliberate shift from large annual releases to smaller, more frequent changes.

- **Fusaka**, activated December 2025.
- **Glamsterdam**, [on track for Q4 2026](https://everstake.one/resources/blog/ethereum-glamsterdam-upgrade-explained). Focus: enshrined proposer-builder separation to break the concentration of block production, block-level access lists for parallel execution, and repricing state storage to slow database growth.
- **Hegotá**, H2 2026, possibly slipping to Q4 2026 or Q1 2027. The headliner is already selected: **FOCIL (EIP-7805)**, per the Ethereum Foundation's Checkpoint #9 in April 2026. Account abstraction is committed in the minor feature set. Verkle Trees and 2D PeerDAS remain under discussion.
- **Beyond**, ZK-EVM verification at L1, allowing Ethereum to verify its own execution via ZK proofs. [No confirmed activation date](https://decrypt.co/resources/whats-on-ethereum-roadmap-glamsterdam-hegota-beyond).

One framing worth getting right, because almost nobody does: **FOCIL is simultaneously a censorship-resistance feature and a privacy feature.** Ethereum is not adding privacy as a product. It is making neutrality impossible to violate at the protocol level, and privacy is a consequence of that. Understanding which of those two things you are buying changes how you evaluate the roadmap.

## The Ethereum tokenization data, with its caveats

![An Ethereum logo floating above six stacked glowing blue layers, with a gold coin resting on a dark reflective surface below](/images/content/ethereum-adoption-trends-2027/ethereum-adoption-trends-2027-03-tokenization.png)

Ethereum's tokenization position depends heavily on how you count, and the honest answer is that credible sources disagree substantially.

Token Terminal puts Ethereum at close to 58% of the tokenized RWA market as of July 2026. The Ethereum Foundation's own institutional site claims [40% of onchain RWAs across Ethereum and its L2s, alongside $171 billion in stablecoin TVL](https://institutions.ethereum.org/). Other measurements put Ethereum near 33% of a $65 billion market as of May 2026, while [some analyses size the total RWA market at $31 to $34 billion](https://www.chainalysis.com/blog/tokenized-real-world-assets-on-chain-commodities/), a roughly twofold divergence in the denominator itself.

We are flagging the disagreement rather than picking the most flattering figure. Methodologies differ on whether to include permissioned ledgers, private credit and stablecoins, and **any single confident percentage should be read as a claim about methodology as much as about market share.**

What is less ambiguous:

**BUIDL on Uniswap.** BlackRock's tokenized Treasury fund [began trading on Uniswap in February 2026](https://cryptodaily.co.uk/2026/06/ethereum-institutional-tokenization), reaching over $2.8 billion in total value by July 2026 and distributing more than $100 million in dividends since its March 2024 launch. A regulated institutional product on a permissionless DEX is a first, and it is the strongest single argument that open rails still have a role.

**A new user cohort.** Chainalysis found [a sharp spike in Ethereum addresses created specifically to hold tokenized assets](https://www.chainalysis.com/blog/tokenized-real-world-assets-on-chain-commodities/) through late 2025 and early 2026, after years of flat activity from 2022. The interpretation matters more than the number: for this cohort, RWAs are the reason to come on-chain at all. These are not crypto natives discovering tokenized Treasuries. These are finance people whose first on-chain asset is one.

If you are building in this category, the practical mechanics are in [asset tokenization development](https://spacedev.io/blockchain-development-services/asset-tokenization) and in [how to launch an RWA protocol](https://spacedev.io/blog/how-to-launch-an-rwa-protocol). We have shipped both a fixed-income variant, [Bondi Finance](https://spacedev.io/our-work/bondi-finance), and a commodity-backed consumer variant, [Aura](https://spacedev.io/our-work/aura).

**Institutional representation.** [Ethereum Institutional launched on 1 July 2026](https://www.coindesk.com/tech/2026/07/01/ethereum-gets-a-new-nonprofit-focused-on-institutional-adoption) as an independent nonprofit led by David Walsh, Marius Smith and Matthew Dawson, positioned as a single entry point for banks, asset managers, custodians and government organisations evaluating Ethereum. The Foundation is narrowing to core protocol stewardship while EthLabs takes on ecosystem R&D.

## What actually breaks: the operational layer

If you take one practical thing from this article, take this. The risks that materialise in institutional blockchain projects are rarely cryptographic. They are operational.

> "Most wallet compromises aren't cryptographic failures. They're operational ones."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

That has become more true, not less, as tooling improved:

> "Key management is where inherited wallets break first. Now that AI-assisted development is standard practice, a team without an explicit key-handling policy is one commit away from a catastrophe."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

And a related point that cuts against most of the anxiety we encounter in first conversations with institutional clients:

> "The things that break at scale in web3 are the same things that break in any other system. The blockchain isn't the fragile part, your infrastructure discipline is."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

Those three statements together describe where budget and attention should go. Not to whether the chain can handle your volume, it can. To key handling policy, security operations, and the boring infrastructure practices that determine whether a system survives contact with real users. That is the work covered in [smart contract security](https://spacedev.io/blog/smart-contract-security-how-vulnerabilities-happen-and-how-to-prevent-them) and delivered through [BlockAudit](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security).

## Ethereum adoption trends to watch in 2027

Concrete and falsifiable:

- Whether Glamsterdam ships to mainnet in Q4 2026 as targeted
- Whether Hegotá keeps FOCIL as its headliner, or defers it again
- Whether any mainstream production wallet ships a Kohaku integration
- Whether Aztec's throughput moves meaningfully off roughly 1 tps
- Whether the shared bank deposit network selects a public chain, an L2, or a permissioned ledger, the clearest signal available on the open-versus-enclosed question
- Whether any bank announces production flow, not a pilot, on public Ethereum infrastructure

The consortium risk sitting behind that fifth item has a well-documented precedent, and we cover it in [Blockchain Use Cases: What Actually Shipped](https://spacedev.io/blog/blockchain-use-cases).

## Frequently asked questions

### Is Ethereum adding privacy?

Yes, but nothing has shipped to mainnet. The near-term plan has three parts: account abstraction combined with FOCIL, keyed nonces (EIP-8250), and access-layer work including the Kohaku toolkit. FOCIL is the selected headliner for the Hegotá upgrade.

### What is Kohaku?

An Ethereum Foundation open-source toolkit for building privacy-focused wallets. Its SDK shipped on 25 May 2026 at v0.0.1-alpha.21, integrating Railgun, Tornado Cash and Privacy Pools at the wallet layer with EIP-4337 relaying operational.

### What is FOCIL?

Fork-choice enforced inclusion lists (EIP-7805). A committee of validators proposes transactions that block builders must include; if a proposer filters them, the network rejects the block. It is both a censorship-resistance and a privacy mechanism.

### When is the Glamsterdam upgrade?

Targeted for Q4 2026. It focuses on enshrined proposer-builder separation, block-level access lists for parallel execution, and state storage repricing.

### Why do institutions use Canton instead of Ethereum?

Canton was built for regulated capital markets with sub-transaction privacy by default, so counterparty data is visible only to relevant parties. Broadridge scaled to over $4 trillion in monthly Treasury repo on Canton, and Canton-connected platforms account for roughly 57.5% of global digital bond issuance since 2022.

### How much of the tokenized RWA market is on Ethereum?

Estimates range from roughly 33% to 58% depending on methodology, with total market size itself estimated between $31 billion and $65 billion. Token Terminal puts Ethereum near 58%; the Ethereum Foundation cites 40% across Ethereum and its L2s.

### Is public blockchain data really a problem for banks?

Yes. A single transaction can map a counterparty's full position and payment history. Beyond confidentiality, an exposed balance is an attack target, which makes privacy a security requirement rather than a product preference.

## Scoping an Ethereum or tokenization build for 2027

The open-versus-enclosed question does not have to be answered in the abstract. It has to be answered for your asset, your counterparties and your regulator.

SpaceDev has shipped [asset tokenization](https://spacedev.io/blockchain-development-services/asset-tokenization), [dApp development](https://spacedev.io/blockchain-development-services/dapp-development) and [blockchain systems for banks](https://spacedev.io/blockchain-development-services/industry/banking) since 2018, with security handled in-house. If you are evaluating a network choice with a compliance consequence attached, [talk to our team](https://spacedev.io/contact).
