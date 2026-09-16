---
title: "Blockchain Use Cases: What Actually Shipped"
description: "Most blockchain use case lists describe a market that never arrived. This one is organised around what reached production, with the projects behind each category and an honest account of what still hasn't shipped."
publishedAt: 2026-09-16
author: juan-manuel-sobral
category: "Blockchain Trends"
tags: ["blockchain", "enterprise", "institutional"]
readTime: 14
cover: "/images/content/blockchain-use-cases/cover.png"
metatitle: "Blockchain Use Cases: What Actually Shipped, and What Didn't"
metadescription: "Blockchain use cases that reached production, the projects behind each one, and an honest account of the categories that keep getting listed and keep not shipping."
takeaways:
  - "The standard list has barely changed since 2018. Some of it now works at real scale. Some has been promised for eight years and quietly failed, repeatedly, with well-funded consortia behind it."
  - "The categories producing real production volume are not the ones dominating the lists: commodity logistics, carbon records, dollar access, regulated exchange infrastructure, RWA tokenization, provenance, wallet abstraction, gaming onboarding, marketplaces and bounded credentialing."
  - "Failures are coordination failures, not technical ones. Four blockchain trade finance consortia launched between 2018 and 2020. Essentially one survived. None failed for technical reasons."
  - "The decisive test is participant count: does the system produce value with two participants, or only with twenty? If the answer is twenty, the technology is not the risk."
  - "The one that should have shipped and hasn't is healthcare, and the precise version of the argument is much narrower than the version usually made."
faqs:
  - question: "What are the main blockchain use cases that work?"
    answer: "The ones producing real production volume are commodity logistics and settlement, carbon and energy records, stablecoin payments and dollar access, regulated exchange infrastructure, real-world asset tokenization, provenance for physical goods, wallet and chain abstraction infrastructure, gaming and consumer onboarding, digital ownership marketplaces, and verifiable credentials for workforce and contractors."
  - question: "Does blockchain work for digital identity?"
    answer: "Bounded credentialing does. Verifying contractor certifications or workforce qualifications within an industry delivers value between two parties immediately. Universal digital identity, meaning one credential accepted across institutions and borders, has been piloted for a decade and still requires coordinated adoption before anyone benefits."
  - question: "Which blockchain use cases have failed?"
    answer: "Trade finance consortia have the clearest failure record: We.trade, TradeLens, Marco Polo and Contour all shut down, with Contour citing 60 to 70 monthly transactions as insufficient to sustain the network. Insurance claims automation, government records, e-voting and universal decentralized identity share the same coordination problem."
  - question: "Does blockchain improve supply chain traceability?"
    answer: "Yes, when sensor data is captured at the source rather than entered manually. B4E Logistics reduced settlement from 72 days to 1, with 90% of transactions touchless, by fusing Industrial IoT measurements on-chain."
  - question: "Can blockchain secure healthcare records?"
    answer: "It can make tampering detectable and attributable by anchoring cryptographic fingerprints of records, provided verification happens at the point of read and anchoring at the point of capture. It does not prevent a compromised system from writing bad data, and claims that it makes healthcare systems unhackable are wrong."
  - question: "Why did blockchain trade finance platforms fail?"
    answer: "Not for technical reasons. They required near-complete industry adoption before delivering value to any participant, so early adopters carried the cost of running two systems in parallel."
  - question: "What makes a blockchain use case succeed?"
    answer: "A genuine shared-record problem between parties who don't trust each other's data, value delivered at two participants rather than twenty, on-chain records tied to verified reality at the point of capture, and an end user who never needs to know blockchain is involved."
---

## Why most blockchain use case lists are wrong

Search for blockchain use cases and you will find roughly the same ten categories on every page: supply chain, healthcare records, digital identity, trade finance, insurance claims, government services, HR credentials, voting, real estate, cross-border payments.

That list has barely changed since 2018. Some of it now works at real scale. Some has been promised for eight years and has quietly failed, repeatedly, with well-funded consortia behind it.

We have shipped blockchain systems since 2018, and the pattern we see is that the categories generating real production volume are not the ones dominating the lists. So this article is organised differently. **Every use case below is one we have delivered, with the project attached.** At the end we cover the ones that haven't shipped, including one we think genuinely should have.

> "The technology is rarely the problem. Most pilots fail because nobody defined the user's problem precisely enough."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

That is the filter for everything that follows.

## 1. Blockchain in commodity logistics and settlement

**The problem.** Every hand-off in bulk commodity transport becomes a dispute. Volumes don't match between counterparties, paperwork lags the physical movement, and settlement drags for weeks while teams reconcile by hand. The root cause is that each party keeps its own records, so there is no shared account of what physically moved.

**What blockchain changes.** Industrial IoT sensors capture volume, quality and movement at the point of activity, and that field data is committed on-chain where no counterparty can alter it afterwards. Both sides read the same record. Reconciliation stops being a job.

**The result.** On B4E Logistics, settlement went from 72 days to 1, with 90% of transactions touchless and millions of dollars in deliveries validated across produced water, chemicals, sand and proppant, fuels and waste disposal.

That is the strongest number in this article, and it is worth being precise about why it works. **The value is not the ledger. It is that IIoT data is fused at the source**, so the shared record reflects a measurement rather than someone's data entry. A shared ledger of disputed numbers is still disputed numbers.

**Project:** [Blockchain For Energy (B4E)](/our-work/blockchain-for-energy), a member-led non-profit consortium serving the energy industry, based in Houston, with members including Chevron and Worley. The platform launched in 2023 as B4E Commodity Transport and [went live in production with an independent exploration and production company](https://b4e.net/solutions/logistics) in October 2024. Related services: [blockchain for supply chain and logistics](/blockchain-development-services/industry/supply-chain-and-logistics) and [blockchain for energy](/blockchain-development-services/industry/energy).

## 2. Blockchain for carbon records and verifiable energy claims

![B4E Carbon tokenization screen showing a renewable energy certificate submitted for tokenization alongside its asset trading price history](/images/case-studies/blockchain-for-energy/gallery/gallery1.png)

**The problem.** Renewable energy certificates can be double counted, and voluntary carbon offsets have repeatedly been shown to represent reductions that did not occur. Both failures come from the same source: certificates issued and retired in systems that no external party can audit.

**What blockchain changes.** Each certificate becomes a unique on-chain unit, issued once, transferred transparently, retired permanently, with provenance traceable from origin to retirement.

**Why it stuck when other ESG tech didn't.** Carbon claims are increasingly subject to regulatory disclosure requirements. The demand is not for better sustainability software; it is for records that survive an audit. That is a narrow, well-defined problem, which is exactly the kind that succeeds.

**Project:** B4E Carbon, part of the same [B4E platform](/our-work/blockchain-for-energy).

## 3. Blockchain for dollar access and stablecoin rails

**The problem.** In much of Latin America, holding local currency is a losing position and accessing dollars through the banking system is slow, expensive or restricted. This is not a theoretical inefficiency; it is a daily one.

**What the data shows.** By intensity relative to GDP, the ranking of stablecoin adoption inverts the usual picture. Latin America and the Caribbean process 7.7% of regional GDP through stablecoin rails and Africa and the Middle East 6.7%, while North America registers under 1% even though it leads in absolute dollar volume (IMF data via 51 Insights). Remittance corridors running on stablecoins cost around 1%, against 6% to 8% traditionally.

**What actually gets built.** Not a stablecoin. The hard parts are fiat on and off ramps, local banking relationships, KYC that works with local documents, and an interface that does not require the user to understand what a blockchain is. We covered the engineering side of that in [stablecoin integration](/blog/stablecoin-integration).

**Projects:** [Zenda](/our-work/zenda), a crypto exchange for everyday users buying and selling USDT with fiat in Uruguay, and [Mostaza](/our-work/mostaza), Web3 financial tools for everyday users across Latin America. Related service: [stablecoin development](/blockchain-development-services/industry/finance-and-fintech/stablecoins).

## 4. Regulated crypto exchange infrastructure

**The problem.** Running a compliant exchange in a regulated market is mostly not a trading problem. It is custody, KYC and AML pipelines, transaction monitoring, reporting obligations, and segregation of client assets, with a matching engine attached.

**Why it belongs on this list.** Exchanges rarely appear on enterprise blockchain use case lists because they are treated as crypto-native rather than enterprise. That is a mistake. **A regulated exchange is the clearest example of blockchain infrastructure operating inside a national regulatory perimeter**, and the compliance architecture is the same one banks now need for tokenized products.

**Project:** [NDAX Canada](/our-work/ndax-canada), a regulated crypto exchange for the Canadian market. We wrote up the build in [how we built NDAX](/blog/how-we-built-ndax). Related service: [Web3 compliance](/blockchain-development-services/industry/compliance-web3).

## 5. Real-world asset tokenization

![Bondi Finance bond detail screen showing a tokenized corporate bond with its price history, face value, coupon rate and semiannual coupon schedule](/images/case-studies/bondi-finance/gallery/gallery1.webp)

**The problem.** Most valuable assets, meaning private credit, fixed income, funds and commodities, settle slowly through intermediaries, require large minimums, and are effectively illiquid between settlement dates.

**Where it is real.** Tokenized Treasuries and money market funds are the category that worked. BlackRock's BUIDL passed $2.8 billion and began trading on Uniswap in February 2026. Estimates of the total tokenized RWA market range from roughly $31 billion to $65 billion depending on methodology, a wide spread worth noting rather than papering over.

**Two variants we have built:**

*Fixed income.* [Bondi Finance](/our-work/bondi-finance) is an RWA fixed-income protocol, bringing bond-like instruments on-chain where settlement and distribution are programmable.

*Commodities.* [Aura](/our-work/aura) is a mobile app for gold-backed savings powered by XAUT. The interesting part is not the gold; it is that the product is a savings app. **The tokenization is invisible to the user**, which is the correct design and the one most tokenization projects get wrong.

Related services: [asset tokenization](/blockchain-development-services/asset-tokenization), including [real estate tokenization](/blockchain-development-services/asset-tokenization/real-estate). Background reading: [real-world assets explained](/blog/real-world-assets-rwas-explained) and [how to launch an RWA protocol](/blog/how-to-launch-an-rwa-protocol).

## 6. Blockchain provenance for physical goods

![Collector Crypt landing page explaining its three steps: cards sent to secured insured vaults, authenticated and scanned, then linked to the owner's profile or wallet](/images/case-studies/collector-crypt/gallery/gallery1.png)

**The problem.** Authentication of physical collectibles depends on trust in a grader and in a chain of custody that is usually a paper certificate and a photograph.

**What blockchain changes.** The grading and the custody record become an on-chain claim tied to a vaulted physical item, which means the asset can be traded without moving it and without re-verifying it at every hand-off.

**Why this is a better proof point than most supply chain examples.** It is a closed loop. The item is vaulted, so the on-chain record and the physical reality cannot drift apart. Most supply chain projects fail precisely because they cannot guarantee that link; the ledger is only as honest as whoever scans the box.

**Project:** [Collector Crypt](/our-work/collector-crypt), graded physical trading cards, vaulted and tokenized across five blockchains.

## 7. Chain abstraction and wallet infrastructure

![Byrrgis trading terminal showing a token swap from ETH to LINK in a single panel, with estimated network fees and platform fee listed alongside the market data](/images/case-studies/byrrgis/gallery/gallery1.png)

**The problem.** The single largest barrier to blockchain adoption is not throughput or cost. It is that using it requires managing seed phrases, holding a volatile gas token on every network, and understanding bridges.

**What changed.** Account abstraction moved from experiment to requirement in about two years. Universal gas, meaning paying fees in a stablecoin or in whatever token you already hold, and single-signature cross-chain execution now make it possible to build products where the user never learns which chain they are on.

There is a cost most teams miss when they adopt this:

> "Paymasters are a hidden cost line. You can't sponsor gas for every user forever, someone will always be spending your money."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

**Gas sponsorship is what makes the experience feel like a normal app. It is also an open-ended liability unless the policy is bounded at design time.**

**Project:** [Byrrgis](/our-work/byrrgis), a non-custodial multi-chain trading terminal executing swaps across Solana, Ethereum and BNB Chain in one signature, with gas payable in any major token. Further reading: [wallet connections](/blog/wallet-connections).

## 8. Blockchain in gaming and consumer onboarding

**The problem.** Game studios want digital ownership and player-driven economies. They do not want to become blockchain companies, and their players will not tolerate a wallet setup flow.

**What actually gets built.** Invisible infrastructure: embedded wallets, sponsored transactions, fiat purchase flows, and asset systems that behave like normal in-game items. The blockchain is an implementation detail the player never sees.

**Why gaming matters beyond gaming.** It is the most demanding consumer onboarding problem in the industry, and the patterns that work there, abstraction, sponsorship, familiar login, are the same ones a bank will need when it puts a tokenized product in front of retail customers.

**Projects:** [Blockus](/our-work/blockus), Web3 infrastructure for game studios; [W3E](/our-work/w3e), a gaming launchpad for IDO and INO participation; and [FightFi](/our-work/fightfi), a fight-fan engagement platform.

## 9. Digital ownership and marketplaces

**The problem.** Digital goods have no native scarcity or portability, and creators capture value only at the point of first sale.

**Where the category actually landed.** The speculative NFT market collapsed, and pretending otherwise damages credibility. What survived is narrower and more durable: marketplace infrastructure, programmable royalties, and provable ownership of digital and phygital items, largely in gaming, ticketing, collectibles and brand loyalty rather than as an asset class.

**Projects:** [Rarible](/our-work/rarible), a community-owned NFT marketplace operating at scale; [Gallery](/our-work/gallery), curated exhibitions for collectors; and [ACME](/our-work/acme), which converts loyalty points into spendable currency.

## 10. Verifiable credentials for contractors and workforce

**The problem.** In industrial settings, an uncertified contractor on site is not an administrative issue. It is a safety and liability event. Yet certification records, meaning safety training, licences, insurance and competency sign-offs, sit in each contractor's own filing system, and every operator re-verifies the same worker independently, usually by email and PDF.

**What blockchain changes.** A credential becomes a cryptographically signed claim issued once by whoever is entitled to issue it, held by the worker or the contracting firm, and verifiable instantly by any operator without contacting the issuer. Verification becomes a mathematical check rather than a phone call.

**Why this version works when universal digital identity doesn't.** The scope is bounded. A single operator and its contractor pool get value immediately; no national identity framework, no cross-industry standard, and no government participation is required. **That is the difference between a credentialing system that ships and a digital identity programme that pilots forever.**

**Project:** B4E Credentialing, part of the [B4E platform](/our-work/blockchain-for-energy), verifying contractors and workforce for the energy industry. Related service: [decentralized identity](/blockchain-development-services/decentralized-identity).

## The blockchain use case that should have shipped and hasn't: healthcare

We have not built a healthcare blockchain system. We are including the category anyway, because the argument for it is the strongest on this list and it deserves to be made precisely rather than enthusiastically.

Consider a patient's allergy record. If that data is silently altered, through a breach, a corrupted migration, or a bad integration, the failure mode is not financial. Someone is administered a drug that kills them. Healthcare is the domain where the cost of undetected data corruption is highest, and where the tolerance for it should be lowest.

**Here is the precise version of what blockchain does, because the loose version is wrong.**

Anchoring a cryptographic fingerprint of a record on a ledger does not prevent an attacker from writing bad data into a compromised hospital system. It does not make the system unhackable. What it does is make tampering *detectable and attributable*, provided something actually verifies the hash at the point of read, and provided the anchoring happens at the point of capture rather than after the fact.

That is a narrower claim than "blockchain secures patient data," and it is the one that survives a conversation with a hospital CIO.

**Why hasn't it shipped at scale?** Not for technical reasons. Healthcare data lives in entrenched systems with strong interoperability requirements and a regulatory environment where the cost of a failed migration is measured in patient outcomes. The integration surface is enormous and the appetite for risk is correctly near zero.

The primitive is proven, though. Anchoring field data at the point of capture so counterparties cannot dispute it later is precisely what [B4E Logistics](https://b4e.net/solutions/logistics) does with IIoT sensors. The same architecture applied to clinical data is not a research question. It is an integration and incentives question. Related service: [blockchain for healthcare](/blockchain-development-services/industry/healthcare).

## The blockchain use cases that keep getting listed and keep not happening

Four categories appear on nearly every blockchain use case list and have a poor delivery record. Naming them is more useful than repeating them.

**Trade finance** is the clearest case, and the history is worth knowing before anyone commits to a consortium. Four major blockchain trade finance networks were operating by 2020: Contour, Marco Polo, We.trade and TradeLens, alongside Komgo. We.trade went insolvent. TradeLens, the Maersk and IBM venture, shut down. Marco Polo closed. Contour closed after disclosing that 60 to 70 transactions per month were insufficient to sustain the network. Of the original cohort, essentially only Komgo survived (via 51 Insights).

The technology worked. The consortia died anyway, because network effects never reached the threshold where participation was worth more than the integration cost.

**That is the relevant precedent for every consortium network being built right now**, including the shared tokenized deposit network eight major US banks are constructing for 2027. The architectural side of that work is covered in [blockchain for banks](/blog/blockchain-for-banks). The question to ask about any of them is not whether the architecture is sound. It is whether enough counterparties will actually show up.

**Insurance claims automation**, **government records and e-voting**, and **universal decentralized identity** share the same structure: technically sound, repeatedly piloted, and dependent on coordinated adoption by parties who each need everyone else to move first.

Note the qualifier on that last one. *Universal* digital identity, one credential accepted everywhere across institutions and borders, has been piloted for a decade and remains piloted. Bounded credentialing inside a single industry, as in section 10, ships. The technology is identical. The difference is how many parties have to agree before anyone gets value.

**That is the pattern. These use cases don't fail on cryptography or throughput. They fail on the coordination problem, and no amount of engineering solves it.**

## Why B4E worked when Contour didn't

This is the most useful comparison in the article, because both are consortium networks in industrial sectors and only one is running.

**Contour** required banks, shippers, exporters and importers to all adopt simultaneously, and delivered value only when all of them had. Any missing party meant falling back to paper, which meant maintaining both systems, which meant the blockchain version was pure added cost until adoption was near-complete.

**B4E Logistics** delivers value between two counterparties on day one. If an operator and a hauler agree to use it, their reconciliation problem is solved regardless of what the rest of the industry does. Every additional participant improves it; none is required for it to work.

That is the distinction we would apply to any consortium proposal today: **does it produce value at two participants, or only at twenty?**

If the answer is twenty, the technology is not the risk.

## How to evaluate a blockchain use case before you build

Four questions, in order:

1. **Is the problem a shared-record problem?** If one party could solve it with a database they control, blockchain is added complexity.
2. **Does it produce value with two participants?** If it needs an entire industry, budget for the coordination problem as the main project risk.
3. **Is the on-chain record tied to physical or verified reality at the point of capture?** A shared ledger of unverified inputs is a shared ledger of unverified inputs.
4. **Can the end user ignore that it exists?** If your product requires the user to understand blockchain, your addressable market is people who already do.

Most use cases that failed would have been caught by question two or three.

This is the framework we run in [product discovery](/product-discovery), before anyone commits to an architecture. The wider commercial case for enterprise deployments is covered in [enterprise blockchain solutions: ROI, use cases and types](/blog/enterprise-blockchain-solutions-roi-use-cases-types).

## Frequently asked questions

### What are the main blockchain use cases that work?

The ones producing real production volume are commodity logistics and settlement, carbon and energy records, stablecoin payments and dollar access, regulated exchange infrastructure, real-world asset tokenization, provenance for physical goods, wallet and chain abstraction infrastructure, gaming and consumer onboarding, digital ownership marketplaces, and verifiable credentials for workforce and contractors.

### Does blockchain work for digital identity?

Bounded credentialing does. Verifying contractor certifications or workforce qualifications within an industry delivers value between two parties immediately. Universal digital identity, meaning one credential accepted across institutions and borders, has been piloted for a decade and still requires coordinated adoption before anyone benefits.

### Which blockchain use cases have failed?

Trade finance consortia have the clearest failure record: We.trade, TradeLens, Marco Polo and Contour all shut down, with Contour citing 60 to 70 monthly transactions as insufficient to sustain the network. Insurance claims automation, government records, e-voting and universal decentralized identity share the same coordination problem.

### Does blockchain improve supply chain traceability?

Yes, when sensor data is captured at the source rather than entered manually. B4E Logistics reduced settlement from 72 days to 1, with 90% of transactions touchless, by fusing Industrial IoT measurements on-chain.

### Can blockchain secure healthcare records?

It can make tampering detectable and attributable by anchoring cryptographic fingerprints of records, provided verification happens at the point of read and anchoring at the point of capture. It does not prevent a compromised system from writing bad data, and claims that it makes healthcare systems unhackable are wrong.

### Why did blockchain trade finance platforms fail?

Not for technical reasons. They required near-complete industry adoption before delivering value to any participant, so early adopters carried the cost of running two systems in parallel.

### What makes a blockchain use case succeed?

A genuine shared-record problem between parties who don't trust each other's data, value delivered at two participants rather than twenty, on-chain records tied to verified reality at the point of capture, and an end user who never needs to know blockchain is involved.

## Scoping your own use case

If you recognise your problem in one of the ten categories above, the useful next conversation is about question two and question three, not about architecture.

SpaceDev has been building blockchain systems since 2018 across energy, fintech, gaming, real estate and regulated exchange infrastructure. Start with [blockchain development services](/blockchain-development-services), see the full portfolio in [our work](/our-work), or [talk to our team](/contact) about whether your use case passes the four questions.

For where the underlying market is heading, the companion piece is [blockchain trends 2026](/blog/blockchain-trends-2026).
