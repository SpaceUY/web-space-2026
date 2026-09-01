---
title: "Blockchain Compliance in the US: What Builders Actually Need in 2026"
description: "What blockchain compliance in the US requires in 2026: SEC-CFTC taxonomy, GENIUS Act rules, AML, licensing, and compliant-by-design architecture."
publishedAt: 2026-07-31
updatedAt: 2026-08-06
author: federico-sendra
category: Blockchain Trends
tags: ["compliance", "institutional", "blockchain", "enterprise"]
readTime: 19
cover: "/images/content/blockchain-compliance-us/cover.png"
metatitle: "Blockchain Compliance in the US: 2026 Builder's Guide"
metadescription: "What blockchain compliance in the US requires in 2026: SEC-CFTC taxonomy, GENIUS Act rules, AML, licensing, and compliant-by-design architecture."
faqs:
  - question: "Is crypto legal in the US in 2026?"
    answer: "Yes. Crypto is legal. Stablecoins have a dedicated federal law, and other assets fall under existing securities and commodities rules through an SEC-CFTC split."
  - question: "What is Trump's new crypto law?"
    answer: "It's the GENIUS Act, the federal stablecoin law President Trump signed on July 18, 2025. It's the most significant piece of federal crypto legislation to date, creating the first dedicated framework for payment stablecoins."
  - question: "Are stablecoins regulated now?"
    answer: "Yes. The GENIUS Act creates a federal framework requiring permitted-issuer status, 1:1 reserves, and audited monthly disclosures."
  - question: "Who is against the GENIUS Act?"
    answer: "Opposition came from more than one direction. Senators Josh Hawley and Rand Paul voted against it on the Republican side, Hawley over concerns about ceding power to large tech companies. Senator Elizabeth Warren led Democratic opposition, citing a lack of safeguards against presidential conflicts of interest and a carve-out for large tech firms. Separately, the venture firm a16z has lobbied Treasury to exempt decentralized stablecoins from the permitted-issuer rule entirely."
  - question: "Is the GENIUS Act good or bad for crypto?"
    answer: "It depends who you ask, and both views have real substance. Supporters argue it gives the industry the legal certainty it's lacked for years, which is what let stablecoin issuance move from a gray area into regulated infrastructure. Critics argue it locks in an advantage for banks and large, well-capitalized issuers, makes life harder for decentralized or algorithmic stablecoin models, and raises unresolved questions about conflicts of interest at the top of government. Both of those things can be true at once."
  - question: "Do I need a money transmitter license?"
    answer: "Usually yes if you move fiat. Most states require one, plus FinCEN MSB registration. New York's BitLicense is the strictest regime, and this applies to crypto exchanges just as much as it applies to a standalone product moving fiat on and off a blockchain."
  - question: "What is the IRS minimum for crypto reporting?"
    answer: "There isn't one flat number. Standard broker reporting of gross proceeds has no general minimum. A $600 per-year threshold applies specifically to payment processors handling digital assets, and a $10,000 annual aggregation threshold applies to qualified stablecoins under the optional reporting method."
  - question: "Does tokenizing an asset change its compliance?"
    answer: "No. Tokenizing a security keeps it a security. The SEC confirmed in 2026 that format does not change the rules that apply."
  - question: "What are the four types of blockchain?"
    answer: "Public, private, consortium, and hybrid. The type matters for compliance because it decides how much control you have by default over who can transact, public chains need compliance added on top, private and consortium chains have it built into who can join."
  - question: "Is DeFi regulated?"
    answer: "Partly. Rules apply where there is an identifiable issuer or intermediary. Fully decentralized, peer-to-peer protocols without one remain a regulatory gap."
takeaways:
  - "Blockchain compliance is the set of securities, AML, licensing, tax, and sanctions obligations that apply to a blockchain product, plus the controls you build in to meet them."
  - "2025 and 2026 shifted the US from regulation by enforcement to written rules. A March 2026 SEC-CFTC release sorted crypto assets into five categories and moved 16 major tokens under CFTC oversight."
  - "Stablecoins now have a dedicated federal law, the GENIUS Act, signed by President Trump on July 18, 2025, with issuer rules due by July 18, 2026."
  - "Federal clarity does not remove state obligations. Most firms still need state money-transmitter licenses plus FinCEN registration, and New York's BitLicense remains the strictest."
  - "The GENIUS Act passed with real opposition on both sides of the aisle, and the fight over its implementing rules is still active in 2026."
  - "The winning approach is compliant by design: KYC, transfer restrictions, and sanctions screening enforced in code from day one, not bolted on later."
---

Through 2025 and into 2026, US digital-asset policy moved from courtroom enforcement to published frameworks. For a compliance officer, CFO, or CTO shipping a blockchain product, the practical question is no longer whether cryptocurrency is legal. It is which obligations apply to your specific asset, and how to build them into the blockchain technology itself rather than layering them on afterward. Many teams are also past the proofs-of-concept stage and moving into production, which is exactly when unclear compliance obligations stop being a legal footnote and start being a real cost on the roadmap.

## What is blockchain compliance?

Blockchain compliance is meeting the legal and regulatory obligations that apply to a product built on blockchain. It spans how your asset is classified, how you handle money movement, who you are allowed to serve, and how you report. In practice it splits into two layers: the legal classification of what you are issuing, and the operational controls, KYC, AML, sanctions screening, and reporting, that keep you inside the rules.

It's worth separating this from blockchain design in the general sense. Blockchain design is the structural and technical planning of a network: which consensus mechanism it runs, how nodes are distributed, and what properties the ledger has. Compliance sits on top of those decisions. The two connect directly, because which network type you choose changes how hard compliance is to enforce, which is exactly what the rest of this guide gets into.

## Blockchain regulation in the US: who regulates what?

![New York City financial district skyscrapers](/images/content/blockchain-compliance-regulators.png)

The US uses overlapping regulators, not a single crypto authority. Knowing which one owns your activity is the first compliance decision.

| Regulator | Owns | Relevant to you if |
|---|---|---|
| [SEC](https://www.sec.gov) | Digital securities | Your token is an investment contract or tokenized security |
| [CFTC](https://www.cftc.gov) | Digital commodities and spot markets | You touch BTC, ETH, or other commodity-class tokens |
| [FinCEN](https://www.fincen.gov) (Treasury) | AML and Bank Secrecy Act | You accept, transmit, or custody value for others |
| [OCC](https://www.occ.gov) | Bank crypto activity | You are a bank custodying or settling digital assets |
| State regulators | Money transmission | You move fiat, most states plus NY BitLicense |

A single product often touches three or four of these at once. A tokenized fund can be an SEC matter for the security, a FinCEN matter for onboarding, and a state matter for the cash leg. A crypto exchange listing multiple asset types can touch all five in the same afternoon, one token might be a security, another a commodity, and the fiat rails are a state and FinCEN matter regardless of which token moves through them.

This is also why a single generic compliance checklist doesn't work across products. The right question isn't "am I compliant," it's "which of these five regulators has jurisdiction over which piece of what I'm building," answered separately for the asset, the onboarding flow, and the cash leg, because a clean answer on one doesn't say anything about the other two.

## The token taxonomy that shapes crypto compliance in the US

In March 2026, a joint SEC-CFTC interpretive release sorted crypto assets into five categories: digital commodities, digital collectibles, digital tools, stablecoins, and digital securities. Major tokens including Bitcoin and Ether were named digital commodities under the CFTC.

The classification test is a facts-and-circumstances application of the Howey framework that securities law has used for decades: does the asset derive its value from the programmatic operation of a functioning crypto system and from supply and demand, or from the essential managerial efforts of a specific promoter or team. Bitcoin and Ether cleared that bar because no single party controls the network or is essential to its continued operation. A newer token issued by a startup that's still actively building the product it represents is a much harder case, and that's precisely where most disputes will keep landing.

The same release also addressed mining and staking directly, but as a separate question from token classification, worth being precise about since it's easy to conflate the two. Whether Bitcoin is a digital commodity is one question. Whether the act of mining it under proof-of-work, or staking Ether under proof-of-stake, counts as a securities offering is a different one, and the release concluded that neither activity is itself a securities transaction. That's a narrower, more technical finding than "proof-of-work tokens are commodities," and builders should be careful not to over-read it that way.

The classification is the starting point for crypto compliance in the US, because it decides which regulator and rulebook apply. One caveat matters: this is interpretive guidance, not statute. The broader CLARITY Act that would lock these boundaries into law had not passed the full Senate as of mid-2026, so good-faith classification reduces risk but does not eliminate it.

## What are the four types of blockchain, and why compliance treats them differently

![Stack of colored hardcover books](/images/content/blockchain-compliance-network-types.png)

This matters more for compliance than most technical overviews suggest, because the network type decides how much control you have over who can transact.

**Public blockchains**, like Bitcoin or Ethereum's base layer, are open to anyone by default. Nobody needs permission to hold or move value, which is the opposite of what a compliance program needs. Any KYC, whitelisting, or sanctions screening has to be added as a layer on top, usually at the smart contract or application level, because the base protocol won't enforce it for you.

**Private blockchains** are run by a single organization that controls who can participate. Compliance is straightforward because access is centrally gated from the start, but you give up the openness and network effects that make public chains valuable for reaching outside users.

**Consortium blockchains** sit between the two: a defined group of organizations, often banks or regulated institutions, jointly controls the network. This is the model most bank settlement networks use, since it keeps participants known and vetted while still allowing multiple institutions to transact directly.

**Hybrid blockchains** mix a private or consortium layer for sensitive, regulated activity with a public layer for settlement, transparency, or broader reach. A tokenized security might be issued and whitelisted on a permissioned layer while final settlement or price discovery happens on a public network.

Most compliant-by-design products end up hybrid in practice, even when they don't call it that: a permissioned token standard enforcing eligibility, deployed on a public chain for liquidity and reach.

The choice isn't purely technical, it's a compliance decision with a cost attached. A private or consortium network is cheaper to keep compliant because access control is native to the design, but it caps how many outside participants and how much liquidity you can realistically reach. A public network gets you both, at the cost of building and maintaining the whitelisting and screening layer yourself, and defending it if that layer ever fails. Most teams underestimate how much of their total compliance budget goes toward that layer once they've picked the public route, because it has to keep working correctly at every single transfer, not just at onboarding.

## Core crypto compliance requirements in the US

Most obligations do not depend on the taxonomy. If you move value, they apply.

| Requirement | Trigger | What it means for you |
|---|---|---|
| AML program (BSA) | Accepting, transmitting, custodying value | Risk-based AML/CFT controls, monitoring |
| KYC and customer due diligence | Onboarding users | Verify identity before access |
| Travel Rule | Transfers above thresholds | Share originator and beneficiary data |
| MSB registration + state money transmitter | Moving fiat | FinCEN registration plus state licenses |
| OFAC sanctions screening | Any user or wallet | Screen and block sanctioned addresses |
| 1099-DA tax reporting | US customers | Report digital-asset transactions |
| Stablecoin rules ([GENIUS Act](https://www.congress.gov/bill/119th-congress/senate-bill/1582)) | Issuing a payment stablecoin | Permitted-issuer status, 1:1 reserves, audited disclosures |

The anti-money laundering (AML) program is the one every product needs regardless of what it's built on top of, because it attaches to moving value, not to a specific token type. The 1099-DA row is worth a precise note, since it's easy to get the number wrong: there is no single flat dollar minimum that exempts small transactions across the board. Brokers report gross proceeds on digital asset sales starting January 1, 2025, with no general de minimis threshold. A $600 per-year, per-customer threshold does exist, but only for payment processors handling digital assets (PDAP), and a separate $10,000 annual aggregation threshold applies to qualified stablecoins under the optional reporting method. If your product mixes stablecoin payments and other digital-asset activity, you're likely tracking two different thresholds, not one.

The GENIUS Act is the clearest new obligation. It creates the first federal framework for payment stablecoins, requires 1:1 reserves with monthly audited disclosures, and treats issuers as financial institutions under the Bank Secrecy Act. If your product settles in a stablecoin, this touches you, and our [stablecoin integration work](/blockchain-development-services/industry/finance-and-fintech/stablecoins) is scoped around exactly these constraints.

## How does the GENIUS Act affect your blockchain product?

![A stablecoin anchored inside a reserve vault, balanced 1:1](/images/content/blockchain-compliance-stablecoin-reserves.png)

The GENIUS Act affects you if you issue, distribute, or settle in a payment stablecoin. If your product only accepts a third-party stablecoin like USDC, the direct obligations sit with the issuer, but your integration still inherits their compliance posture. If you mint your own, you become the regulated party.

The law does one decisive thing: it prohibits anyone other than a permitted payment stablecoin issuer from issuing a payment stablecoin in the US. That turns "launch a stablecoin" into a licensing decision, not just an engineering one. Permitted-issuer status runs through a bank subsidiary, a federal OCC charter, or a qualifying state regime.

For a permitted issuer, the core requirements are consistent across the proposed rules:

- 1:1 reserves in cash or short-dated Treasuries, with monthly disclosures.
- Redemption at par within short, fixed timelines.
- No interest or yield paid to holders.
- AML, BSA, and OFAC obligations, with issuers treated as financial institutions.

Foreign issuers have a separate path. A stablecoin issuer domiciled outside the US can still reach US customers as a foreign payment stablecoin issuer (FPSI), but only if the Treasury Secretary determines that the issuer's home-country regulatory regime is comparable to the GENIUS Act framework, the issuer registers with the OCC, and it meets additional technical requirements. Issuers from countries under comprehensive US sanctions or flagged as primary money-laundering jurisdictions are categorically excluded, no comparability determination can override that. Treasury opened a formal process in September 2025 to define what "comparable" actually means, and as of mid-2026 that definition still isn't final, which leaves every non-US issuer eyeing the US market in a holding pattern.

The Treasury Secretary's role goes beyond that one determination. Beyond foreign-issuer comparability, the Secretary, working with FinCEN and OFAC, proposed a joint rule in April 2026 to implement the Act's AML and sanctions requirements, scaled to an issuer's size and complexity rather than a single one-size-fits-all standard. Treasury also proposed, that same month, the principles federal regulators will use to decide whether a state-level stablecoin regime counts as "substantially similar" to the federal one, which matters directly for any issuer trying to qualify through a state charter instead of a federal one.

Timing matters, and it just shifted. The Act was signed into law by President Trump on July 18, 2025, with a one-year window for final implementing rules. That deadline passed on July 18, 2026 with ten proposed rules but none finalized, spanning Treasury, the OCC, and the FDIC. Missing it does not weaken the law, it means you are building against proposed, not final, rules. The practical move is to design for the strictest common denominator and expect adjustment. The Act's effective date is the earlier of 18 months after enactment or 120 days after final regulations issue, so the compliance clock is still running regardless of the delay.

The takeaway for builders: if a stablecoin sits anywhere in your settlement path, treat issuer status, reserve reporting, and redemption logic as architecture decisions made now, not paperwork added at the end.

## Who's against the GENIUS Act, and why

A law this significant didn't pass without a fight, and knowing the objections helps explain where the implementing rules might still tighten or loosen. The Senate passed it 68-30 in June 2025, which means real opposition, not a rounding error.

On the Republican side, Senators Josh Hawley and Rand Paul both voted no. Hawley's stated objection was that the law hands too much power to large technology companies by letting private corporations issue their own currency-like instruments with limited guardrails.

On the Democratic side, Senator Elizabeth Warren led the opposition, arguing on the Senate floor that the bill lacked language preventing the sitting president from personally profiting from crypto activity while in office, and that it included a carve-out that makes it easier for a company like X to issue its own stablecoin.

Industry opposition came from a different angle entirely. In November 2025, the crypto-focused venture firm a16z sent Treasury a formal letter arguing that decentralized stablecoins aren't issued by a "person" under the law's own definitions, and asking that they be exempted from the permitted-issuer restriction rather than banned outright. Separately, banking industry groups and a mix of legislators have raised the opposite concern in 2026: that trust-chartered, non-bank issuers might end up competing for deposit-like funds without carrying the same regulatory burden as a chartered bank.

None of this changes what's already law. It does mean the implementing rules due in the second half of 2026 are being written while these disagreements are still live, which is exactly why the design-for-the-strictest-version approach above is the safer bet. A rule that ends up friendlier to decentralized issuers than the current statute suggests wouldn't hurt a product built to the stricter standard, but a rule that tightens further could genuinely break a product that assumed the loosest possible reading.

## Web3 regulatory compliance by design

![A compliance lock embedded directly inside a blockchain node](/images/content/blockchain-compliance-by-design.png)

The most reliable way to pass web3 regulatory compliance is to enforce it in code, not in a policy document. On a blockchain, the controls can live at the protocol level:

- **Permissioned token standards** (such as ERC-3643) that block transfers to non-whitelisted wallets.
- **On-chain KYC and identity** so eligibility is checked before a wallet can hold or trade. Reusable decentralized identity makes this cheaper across products.
- **Sanctions screening at the wallet level**, so blocked addresses cannot interact.
- **Auditable records by default**, which turns reporting from a manual reconciliation into a query.

Because these controls are smart-contract logic, a bug is a compliance failure, not just a technical one. That is why security auditing is part of compliance, not separate from it.

There's a real tension between this kind of on-chain enforcement and privacy, and it's worth naming instead of glossing over. The concept has some overlap with privacy by design, the older framework built for handling personal data generally, though it's a distinct discipline with its own specific principles that don't map one-to-one onto blockchain systems, so treat the resemblance as a useful analogy rather than the same rulebook. One emerging answer is zero-knowledge proofs: a wallet can cryptographically prove it passed KYC and isn't on a sanctions list without revealing the underlying identity data on a public ledger. The FATF's 2025 guidance already engages with this directly, acknowledging that zero-knowledge techniques can satisfy Travel Rule data-sharing requirements without exposing raw personal data on-chain. A handful of pilots reported in industry coverage, including privacy-preserving KYC work tied to Deutsche Bank and identity infrastructure providers, point the same direction, though those specific efforts are less centrally documented than the FATF guidance itself and are worth treating as early-stage rather than settled practice.

Cross-chain activity adds its own wrinkle. A user who's whitelisted and sanctions-screened on one network doesn't automatically carry that status to another chain, so a product that moves value cross-chain has to either re-verify on each network or build a portable proof of eligibility that travels with the asset. That's still mostly unsolved at the infrastructure level, which is one more reason issuers are sticking to a small number of chains rather than spreading thin.

None of this is optional once a product has real users. A compliance control that exists in a design document but isn't actually deployed in the smart contract doesn't protect anyone, and a regulator or a plaintiff's lawyer will treat the gap between the two the same way an auditor would: as a finding, not a footnote.

## How to build a compliant-by-design blockchain product

1. **Classify the asset first.** Security, commodity, stablecoin, or collectible, using the facts-and-circumstances test above. This single decision sets your primary regulator and shapes every downstream design choice, so it's worth getting outside legal input before writing code, not after.
2. **Map obligations at both the federal and state level.** MSB registration, money transmitter licensing, and any sector-specific rules. State rules sit on top of federal ones, not instead of them, and a license gap in one state can block launch in that market entirely even if you're clean everywhere else.
3. **Embed KYC and AML at onboarding**, before any wallet gains access, not as a check that happens after a user has already started transacting. Retrofitting identity checks onto an already-active user base is far more expensive than building the gate first.
4. **Enforce eligibility and transfer rules in the contract, not off-chain.** An off-chain compliance database that a smart contract doesn't actually consult is a policy, not a control, and policies don't stop a bad transfer from executing.
5. **Screen against OFAC continuously**, not just at onboarding. Sanctions lists change, and a wallet that was clean at signup can be added later.
6. **Audit and monitor the compliance logic as critical code.** A bug in a whitelist check or a sanctions filter is a compliance failure with the same real-world consequences as a paperwork gap, even though it looks like an engineering issue.

Automating the evidence side of this is its own discipline. Our [Drata case study](/our-work/drata) shows how continuous compliance monitoring works when controls are automated rather than checked once a year.

The order matters as much as the list itself. Classification has to come before architecture, because the answer changes what "compliant" even means for your product, and architecture has to come before onboarding your first real user, because every control that isn't live before that first transaction is a control you're retrofitting under pressure, usually right when growth is starting to matter most.

## What is still uncertain in 2026?

Being precise about the gaps is part of doing this well.

- **The CLARITY Act is pending**, so the SEC-CFTC boundary described above is guidance, not law, and could still shift if the bill passes in a different form than what agencies are currently applying.
- **Decentralized protocols without an identifiable issuer are a gap regulators have not fully filled.** Most compliance obligations attach to a person or entity, an issuer, an exchange, a custodian. A protocol that facilitates peer-to-peer transactions with no operator in the traditional sense doesn't fit neatly into that model, and neither the SEC-CFTC release nor the GENIUS Act resolves that question cleanly.
- **Stablecoin implementing rules are still being finalized**, with issuer regulations due by July 18, 2026, now passed without final rules, and real political disagreement, detailed above, still shaping what those final rules will require.

The direction is set, but the details are still moving in more than one place at once. Building flexibly matters more than betting on one final-state interpretation of any single rule.

*This article is general information, not legal advice. Confirm your specific obligations with qualified counsel.*

## Frequently asked questions

### Is crypto legal in the US in 2026?

Yes. Crypto is legal. Stablecoins have a dedicated federal law, and other assets fall under existing securities and commodities rules through an SEC-CFTC split.

### What is Trump's new crypto law?

It's the GENIUS Act, the federal stablecoin law President Trump signed on July 18, 2025. It's the most significant piece of federal crypto legislation to date, creating the first dedicated framework for payment stablecoins.

### Are stablecoins regulated now?

Yes. The GENIUS Act creates a federal framework requiring permitted-issuer status, 1:1 reserves, and audited monthly disclosures.

### Who is against the GENIUS Act?

Opposition came from more than one direction. Senators Josh Hawley and Rand Paul voted against it on the Republican side, Hawley over concerns about ceding power to large tech companies. Senator Elizabeth Warren led Democratic opposition, citing a lack of safeguards against presidential conflicts of interest and a carve-out for large tech firms. Separately, the venture firm a16z has lobbied Treasury to exempt decentralized stablecoins from the permitted-issuer rule entirely.

### Is the GENIUS Act good or bad for crypto?

It depends who you ask, and both views have real substance. Supporters argue it gives the industry the legal certainty it's lacked for years, which is what let stablecoin issuance move from a gray area into regulated infrastructure. Critics argue it locks in an advantage for banks and large, well-capitalized issuers, makes life harder for decentralized or algorithmic stablecoin models, and raises unresolved questions about conflicts of interest at the top of government. Both of those things can be true at once: a law can be the reason your compliance roadmap finally has a clear target, and still be the reason a smaller or more decentralized competitor has a harder path to market than a bank-backed one.

### Do I need a money transmitter license?

Usually yes if you move fiat. Most states require one, plus FinCEN MSB registration. New York's BitLicense is the strictest regime, and this applies to crypto exchanges just as much as it applies to a standalone product moving fiat on and off a blockchain.

### What is the IRS minimum for crypto reporting?

There isn't one flat number. Standard broker reporting of gross proceeds has no general minimum. A $600 per-year threshold applies specifically to payment processors handling digital assets, and a $10,000 annual aggregation threshold applies to qualified stablecoins under the optional reporting method.

### Does tokenizing an asset change its compliance?

No. Tokenizing a security keeps it a security. The SEC confirmed in 2026 that format does not change the rules that apply, which we cover in our [guide to tokenized bonds](/blog/tokenized-bonds).

### What are the four types of blockchain?

Public, private, consortium, and hybrid. The type matters for compliance because it decides how much control you have by default over who can transact, public chains need compliance added on top, private and consortium chains have it built into who can join.

### Is DeFi regulated?

Partly. Rules apply where there is an identifiable issuer or intermediary. Fully decentralized, peer-to-peer protocols without one remain a regulatory gap.

## Getting compliance right before you ship

In the US, blockchain compliance is now a design input, not a legal review at the end. The teams that ship cleanly classify the asset early, map federal and state obligations together, and enforce KYC, transfer rules, and sanctions screening directly in code, while staying honest with themselves about which rules are still moving underneath them.

The rules will keep moving through the rest of 2026 and probably into 2027, and that's normal for a framework this new, not a sign to wait for a final version that doesn't exist yet.

If you are building a regulated blockchain product, our [Web3 compliance](/blockchain-development-services/industry/compliance-web3) and blockchain development services cover classification, compliant-by-design architecture, and auditing. You can [book a technical scoping call](https://meetings.hubspot.com/federico-sendra/meet-space) to review your case.
