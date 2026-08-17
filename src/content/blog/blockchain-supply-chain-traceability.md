---
title: "Blockchain Supply Chain Traceability: How It Works and Where It Breaks"
description: "Product traceability blockchain, explained: EPCIS event capture, IoT and oracles, where it breaks, and the 2026 regulations driving adoption."
publishedAt: 2026-08-06
author: juan-manuel-sobral
category: Blockchain Trends
tags: ["blockchain", "enterprise", "compliance", "web3-infrastructure"]
readTime: 14
cover: "/images/content/blockchain-supply-chain-traceability-cover.png"
metatitle: "Blockchain Supply Chain Traceability: How It Works"
metadescription: "Product traceability blockchain, explained: EPCIS event capture, IoT and oracles, where it breaks, and the 2026 regulations driving adoption."
faqs:
  - question: "What is blockchain supply chain traceability?"
    answer: "It is recording a product's journey on a shared, tamper-evident ledger so all authorized partners see the same verified history of events."
  - question: "Does blockchain guarantee the data is accurate?"
    answer: "No. It guarantees a record was not altered after being written. Accuracy at the point of entry depends on sensors, tags, and validation, not the ledger."
  - question: "Is blockchain better than a normal database for this?"
    answer: "Only when multiple parties who do not trust each other need one shared record. A single company controlling the whole chain often does not need it."
  - question: "What are the four types of blockchain?"
    answer: "Public, private, consortium, and hybrid. Most commercial supply chain deployments use consortium or hybrid models, since they need known, vetted participants rather than fully open or fully closed access."
  - question: "How does blockchain connect to physical goods?"
    answer: "Through IoT sensors, NFC or RFID tags, and oracles that bind a physical item to its digital record and feed real-world data on-chain."
  - question: "Is a blockchain oracle the same as Oracle, the software company?"
    answer: "No, and this is a common mix-up in search results. A blockchain oracle is infrastructure that feeds external data into a smart contract. Oracle Corporation is an unrelated enterprise software company with its own separate IoT and supply chain products."
  - question: "Which standard should traceability data follow?"
    answer: "GS1 EPCIS is the widely adopted standard, now at version 2.0 with added support for JSON, web-based identifiers, and IoT sensor data. It defines what event data is captured, while blockchain defines how it is stored and shared."
  - question: "What companies are using blockchain or IoT for supply chain traceability?"
    answer: "IBM Food Trust, still active with members including Wakefern and Smithfield, De Beers's Tracr for diamond provenance, and VeChain, which powers Walmart China's food traceability and BMW's vehicle parts passport. Maersk and IBM's TradeLens is the well-known counterexample: the technology worked, but it shut down in 2023 after failing to get enough of the shipping industry to join."
takeaways:
  - "Blockchain supply chain traceability records the movement and history of goods on a shared, tamper-evident ledger, so trading partners see the same version of who did what, where, and when."
  - "Blockchain rarely works alone. It sits on top of the GS1 EPCIS standard for capturing events and usually pairs with IoT sensors and oracles to connect physical goods to on-chain records."
  - "The biggest limitation is the garbage-in problem: the ledger guarantees a record was not altered, not that it was true when entered."
  - "The other way these projects fail has nothing to do with data: Maersk and IBM shut down TradeLens in 2023 after failing to get enough of the industry to join, a reminder that a shared ledger is only as useful as the number of partners actually using it."
  - "Most serious deployments are hybrid: event details stay in an off-chain repository, and only hashes or key fields go on-chain, for scale and privacy."
  - "Adoption is being pushed by regulation, including the EU Digital Product Passport, the EU Deforestation Regulation, the EU Battery Regulation's mineral-sourcing rules, and the US FDA food traceability rule (FSMA 204)."
---

For a COO or head of innovation, blockchain traceability is often oversold as a fix for every supply chain management problem. It is not. Used well, it removes a specific pain: the lack of a single, trusted record shared across partners who do not trust each other. Used badly, it just puts unreliable data on a fancier database, or worse, a shared ledger that nobody outside your own company ever joins. The difference is in how you capture data and who actually shows up to use it, not where you store it.

## What is blockchain supply chain traceability?

Blockchain supply chain traceability is the practice of recording each step in a product's journey on a shared distributed ledger, so every authorized partner reads the same tamper-evident history. Instead of each company keeping its own siloed records that must be reconciled, the network shares one version of events such as commissioning, packing, shipping, receiving, and transforming goods, tying together supply chain processes that used to live in separate systems across global supply chains.

The key point is what blockchain does and does not do. It defines how data is stored and secured. It does not define what data is captured. That job belongs to a standard, and it's a distinct question from whether the underlying blockchain technology itself is public, private, consortium, or hybrid, which is worth being precise about before picking an architecture.

## What are the four types of blockchain, and which one fits a supply chain?

This decision shapes everything downstream, so it's worth answering before choosing a standard or a vendor.

![Four types of blockchain compared side by side](/images/content/blockchain-supply-chain-traceability-types.png)

**Public blockchains** are open to anyone, with no central party controlling membership. They're a poor fit for most commercial supply chains, since competitors, customers, and regulators would all see the same raw data by default unless you add heavy encryption on top.

**Private blockchains** are run and controlled by a single organization. They solve almost nothing that a well-built traditional database doesn't, since there's no second party to disagree with about whose record is correct.

**Consortium blockchains**, where a defined group of trading partners jointly operates the network, are the best fit for most multi-party supply chains. No single company controls the ledger, but membership is still known and vetted, which is exactly the trust problem traceability is meant to solve.

**Hybrid blockchains** combine a permissioned layer for trading partners with a public layer for broader verification, for example letting an end consumer scan a code and check a claim against a public record without being able to see the commercially sensitive detail behind it.

Most production traceability systems, including the permissioned Hyperledger Fabric networks common in this space, are consortium or hybrid blockchains in practice, even when the marketing material just says "blockchain."

## How does product traceability on blockchain work?

Product traceability on blockchain runs in three layers that touch different parts of day-to-day supply chain operations, and the middle layer is where projects usually succeed or fail.

![Product journey from farm to consumer with a data overlay](/images/content/blockchain-supply-chain-traceability-flow.png)

### Event capture

Supply chain events are recorded using the [GS1 EPCIS standard](https://www.gs1.org/standards/epcis) (Electronic Product Code Information Services), which structures each event as a set of answers:

| EPCIS captures | Example |
|---|---|
| What | The product, via a GTIN identifier |
| Where | The location, via a GLN identifier |
| When | The timestamp of the event |
| Why | The business step, shipped, received, transformed |
| Who | The party responsible |
| How | Optional conditions, such as temperature |

GS1 ratified EPCIS 2.0 in mid-2022, and the upgrade matters for anyone building now, not just a version-number footnote. It added JSON and JSON-LD as event formats alongside the older XML-only approach, added support for identifying resources with a plain web URI instead of only a URN, and added a dedicated sensor-data dimension built specifically for IoT and cold-chain readings. That last part is what lets a temperature sensor's output plug directly into the same event structure as a shipping or receiving scan, instead of living in a separate system that has to be reconciled by hand later.

### Physical-to-digital binding

This is the hard part. IoT sensors, NFC or RFID tags, and oracles connect a real pallet, container, or batch to its digital record. A cold-chain sensor writing temperature readings, or a decentralized oracle feeding external data, is what ties the physical world to the chain. Worth a quick disambiguation here, since it trips up search results constantly: a blockchain oracle is a piece of infrastructure that feeds external, real-world data into a smart contract. It has nothing to do with Oracle Corporation, the enterprise software company that sells its own separate supply chain and IoT products. If you're evaluating a blockchain traceability build, the oracle you need is the technical kind, not a vendor name.

### On-chain proof

Each transaction, the event itself or a cryptographic hash of it, is written to the ledger, making it tamper-evident and shared. From here, any partner or auditor can verify the history without trusting a single company's database.

![Three-layer traceability architecture inside a connected facility](/images/content/blockchain-supply-chain-traceability-architecture.png)

The infrastructure that makes layer two reliable is the same class of work as putting physical infrastructure on-chain, where device data and cryptographic attestation matter more than the ledger itself.

## Where smart contracts actually earn their place

Smart contracts are the self-executing piece that turns a passive record into an active one, and this is where a lot of blockchain logistics pitches get vague. Concretely, a smart contract can release payment automatically once a delivery event and a condition, like a temperature reading staying within range for the whole cold-chain journey, are both confirmed on-chain. That's an escrow function that used to require a person reading a shipping document and a temperature log side by side and deciding whether to release funds.

![Smart contract logic executing from a laptop screen](/images/content/blockchain-supply-chain-traceability-smartcontract.png)

This has a real, if uneven, track record. Two of the higher-profile trade-finance consortia built around exactly this idea, we.trade and Marco Polo Network, both shut down, we.trade going insolvent in mid-2022 and Marco Polo Network following in early 2023, in both cases because too few banks and corporates stayed active on the network to make it worth running. Komgo, backed by MUFG and a group of major banks including BNP Paribas and Société Générale, is still operating and has continued adding features like reusable KYC checks between counterparties and configurable, auto-matching conditions on letters of credit, the same underlying logic as a smart contract even where the marketing doesn't use that word. Contour, a separate letter-of-credit platform that also shut down in 2023, was acquired by XDC Network in October 2025 and is being relaunched around stablecoins and trade-finance tokenization.

The pattern across all of these is consistent with the rest of this article: the technology for conditional, self-executing payments works. What kills these platforms is the same adoption problem that killed TradeLens, not a flaw in the smart contract logic itself.

## The garbage-in problem: what blockchain in logistics can't fix

The most important thing to understand about blockchain in logistics is what it cannot do. A blockchain guarantees that a record was not changed after it was written. It cannot guarantee the record was true when it was written.

If a worker scans the wrong pallet, or a supplier enters false data at the point of origin, the ledger will faithfully preserve that error forever. This is the garbage-in problem, and it is why "immutable" is not the same as "accurate."

Mitigations reduce the risk but never remove it entirely:

- Sensor-driven capture instead of manual entry, so fewer humans touch the data.
- Tamper-evident tags and device attestation, so the physical item is hard to swap.
- Multi-party validation, so no single actor is the sole source of truth for an event.

Any vendor claiming blockchain alone makes a supply chain "trustless" is skipping this problem. The honest version is that blockchain moves trust from the record to the edge, where data enters, which is exactly where you should focus your design effort.

## Who's actually running this in production

It's worth naming real, currently active deployments, because the space has both genuine successes and well-publicized failures, and the difference is instructive.

**IBM Food Trust** is still operating, not a case study from a few years ago that shut down. It added new members, including Wakefern, Topco, Smithfield, and BeefChain, through 2024, and IBM built a version specifically aimed at FSMA 204 compliance in partnership with iFoodDS. That FSMA 204 deadline itself moved: [the FDA pushed compliance out to July 20, 2028](https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods), which is worth knowing if a draft or a client assumes an earlier date.

**[De Beers's Tracr](https://www.tracr.com)** platform is an anti-counterfeiting and provenance success story with real numbers behind it. Since January 2025, every De Beers rough diamond of one carat or larger gets a single country-of-origin record on the platform, more than five million diamonds tracked so far, representing roughly two-thirds of De Beers's production by value. In 2026, the diamond-grading institute GIA bought a 30% stake in Tracr, which is a strong signal for a platform this deep into a single company's supply chain.

**[VeChain](https://www.vechain.org)** is the clearest example of one blockchain platform serving multiple real corporate clients rather than one company building its own closed system. Walmart China uses it to trace food products end to end, and BMW uses it for a digital vehicle passport tracking parts provenance and service history.

Set against **TradeLens**, the Maersk and IBM platform that shut down in early 2023 after Maersk and IBM couldn't get enough of the shipping and logistics industry, including rival carriers, to actually join, the lesson is clear: the technology working is necessary but not sufficient. A shared ledger with one company's worth of participants is just an expensive database.

## On-chain, off-chain, or hybrid: where the data lives

Full on-chain traceability is rarely practical at scale. High-volume event streams are resource-intensive and expensive to store on-chain, and commercial data is often confidential.

Most production systems are hybrid: full event details live in an off-chain EPCIS repository, while only hashes and selected fields go on-chain. This preserves integrity and shared verification while keeping the ledger lean and sensitive data private through permissioning and selective disclosure. Permissioned networks like Hyperledger Fabric are common for exactly this reason.

## What blockchain adds to supply chain transparency, and what it doesn't

Being precise about the value avoids expensive disappointment, and it's a fair question to ask of any blockchain-based traceability pitch before signing a contract.

| Blockchain does add | Blockchain does not fix |
|---|---|
| A shared, tamper-evident record across partners | The accuracy of data at the point of entry |
| Auditability without a central intermediary | Scalability without careful design and batching |
| Reduced reconciliation between siloed systems | Privacy without permissioning and encryption |
| Verifiable provenance for anti-counterfeiting | Interoperability without aligning to GS1 and EPCIS |

The gains in supply chain visibility and transparency through blockchain are real where multiple distrusting parties need one version of the truth, and where an end consumer or auditor benefits from being able to verify a claim directly instead of taking a brand's word for it. They are marginal where a single company already controls the whole chain and could just use a database, and adoption gains are theoretical if trading partners never actually join the network, which is the TradeLens lesson again.

One area still too early to treat as proven: combining AI with blockchain traceability data to flag anomalies or predict disruptions automatically. There's real academic and vendor research on applying anomaly-detection models to sensor and ledger data, but as of 2026 there isn't yet a named, production deployment with audited results to point to, so treat AI-driven traceability as a promising direction rather than something you can buy off the shelf today.

## Which regulations are pushing traceability now?

Much of the current demand is compliance-driven, not efficiency-driven, and the deadlines are what move budgets.

![Regulation and compliance represented as scales of justice](/images/content/blockchain-supply-chain-traceability-regulations.png)

| Regulation | Region | Requires |
|---|---|---|
| Digital Product Passport (ESPR) | EU | Product-level lifecycle data, verifiable |
| EU Deforestation Regulation (EUDR) | EU | Proof of deforestation-free sourcing, geolocation |
| FSMA Rule 204 | US | Food traceability records for high-risk foods, compliance now due July 20, 2028 |
| EU Battery Regulation | EU | Battery lifecycle and material tracing, including cobalt, lithium, nickel, and natural graphite sourcing from August 2025 |

These rules require companies to prove, in near real time, who did what, where, and when across multi-tier supply chains and raw materials sourcing. Static PDFs and spreadsheets cannot do that, which is why event-level traceability, and the Web3 compliance architecture around it, is becoming a requirement rather than an experiment. Platforms like Circulor are already building specifically toward the Battery Regulation's mineral-tracing requirement, which is a preview of where the Digital Product Passport is headed for other product categories.

## When does blockchain traceability make sense in logistics?

**Strong fit:**

- Multi-party chains where partners do not trust each other's records.
- High-value or high-risk goods where anti-counterfeiting and provenance matter (pharma, food, luxury).
- Sectors facing regulatory traceability mandates with audit requirements.

**Weaker fit:**

- Single-company chains that already control end-to-end data.
- Low-value, high-volume goods where the cost of capture outweighs the benefit.
- Cases where the underlying problem is bad source data, which blockchain will not fix.
- Any project that hasn't secured real commitment from other trading partners to actually join, no matter how good the technology is.

## Frequently asked questions

### What is blockchain supply chain traceability?

It is recording a product's journey on a shared, tamper-evident ledger so all authorized partners see the same verified history of events.

### Does blockchain guarantee the data is accurate?

No. It guarantees a record was not altered after being written. Accuracy at the point of entry depends on sensors, tags, and validation, not the ledger.

### Is blockchain better than a normal database for this?

Only when multiple parties who do not trust each other need one shared record. A single company controlling the whole chain often does not need it.

### What are the four types of blockchain?

Public, private, consortium, and hybrid. Most commercial supply chain deployments use consortium or hybrid models, since they need known, vetted participants rather than fully open or fully closed access.

### How does blockchain connect to physical goods?

Through IoT sensors, NFC or RFID tags, and oracles that bind a physical item to its digital record and feed real-world data on-chain.

### Is a blockchain oracle the same as Oracle, the software company?

No, and this is a common mix-up in search results. A blockchain oracle is infrastructure that feeds external data into a smart contract. Oracle Corporation is an unrelated enterprise software company with its own separate IoT and supply chain products.

### Which standard should traceability data follow?

GS1 EPCIS is the widely adopted standard, now at version 2.0 with added support for JSON, web-based identifiers, and IoT sensor data. It defines what event data is captured, while blockchain defines how it is stored and shared.

### What companies are using blockchain or IoT for supply chain traceability?

IBM Food Trust, still active with members including Wakefern and Smithfield, De Beers's Tracr for diamond provenance, and VeChain, which powers Walmart China's food traceability and BMW's vehicle parts passport. Maersk and IBM's TradeLens is the well-known counterexample: the technology worked, but it shut down in 2023 after failing to get enough of the shipping industry to join.

## Building traceability that holds up

Blockchain-enabled traceability succeeds when the design starts at the edge, where data enters, and treats the ledger as the shared record, not the solution, and when it starts with real commitment from the trading partners who'll actually have to use it. Align to GS1 and EPCIS 2.0 early, automate capture with sensors instead of manual entry, choose a hybrid or consortium model that keeps sensitive data private, and confirm partner buy-in before writing a line of code.

*This article is general information, not legal or regulatory advice. Confirm your specific obligations with qualified counsel.*

If you are evaluating traceability for a regulated or multi-party supply chain, our [supply chain and logistics blockchain services](/blockchain-development-services/industry/supply-chain-and-logistics) cover data capture, oracle integration, and hybrid architecture. You can [get in touch](/contact) to review your case.
