---
title: "Tokenized Bonds: How On-Chain Fixed Income Actually Works"
description: "How on-chain fixed income actually works: tokenized bonds, T+0 settlement, automated coupons, and where the 2026 US regulatory picture stands."
publishedAt: 2026-07-31
author: federico-sendra
category: Blockchain Trends
tags: ["rwa", "tokenization", "defi", "compliance", "institutional"]
readTime: 20
cover: "/images/content/tokenized-bonds-cover.png"
metatitle: "Tokenized Bonds: How On-Chain Fixed Income Actually Works"
metadescription: "How on-chain fixed income actually works: tokenized bonds, T+0 settlement, automated coupons, and where the 2026 US regulatory picture stands."
faqs:
  - question: "Are tokenized bonds legal in the US?"
    answer: "Yes. A bond on a blockchain is still a security under federal law, and the SEC confirmed in 2026 that tokenizing it does not change the rules that apply."
  - question: "Tokenized bond vs crypto bond, what is the difference?"
    answer: "A tokenized bond is a regulated debt security placed on-chain. A \"crypto bond\" is usually a debt-like instrument native to a protocol, without the same legal protections."
  - question: "Do tokenized bonds settle faster?"
    answer: "They can. T+2 for traditional bonds versus minutes for on-chain delivery-versus-payment, but only with a compliant on-chain cash leg."
  - question: "What is the difference between DvP and RvP?"
    answer: "They're the same atomic settlement described from opposite sides of the trade. DvP is the buyer's view, cash out and security in at the same instant. RvP is the seller's view, the security only moves once payment lands. Both exist to eliminate principal risk, the chance that one side delivers and the other doesn't."
  - question: "Do you still need a custodian?"
    answer: "Often yes, especially for investors and secondary trading. Native issuance removes some intermediaries from primary issuance, but custody, key management, and regulated venues still play a role, and a bank or fund manager still has to decide who holds the keys and how that's insured."
  - question: "Can tokenized bonds be traded on secondary markets?"
    answer: "Increasingly, but liquidity is thin and trading frequently requires a regulated venue. Most of the volume so far is issuance and redemption at the primary level, not active day-to-day trading between unrelated investors."
  - question: "What is an on-chain fund?"
    answer: "A traditional, regulated fund whose share ownership is recorded and transferred on a blockchain instead of through a conventional transfer agent. BlackRock's BUIDL, Franklin Templeton's BENJI, and Ondo Finance's OUSG are the largest examples, together holding several billion dollars in tokenized Treasury and money-market exposure."
  - question: "Who actually buys tokenized bonds and Treasuries?"
    answer: "Bank and corporate treasury desks looking for yield-bearing, fast-settling short-term exposure, crypto-native funds and DAOs holding tokenized Treasuries as collateral, and increasingly investors accessing exposure indirectly through an onchain fund rather than buying a bond directly."
  - question: "Will XRP be used to tokenize assets?"
    answer: "It already is, on a smaller scale than Ethereum. XRP Ledger hosts tokenized Treasuries from issuers including Ondo Finance, OpenEden Digitals, and Zeconomy, and that segment grew roughly eightfold over the past year."
  - question: "Can on-chain bond data be manipulated?"
    answer: "The ledger record itself is very hard to alter once confirmed, that's what distributed validation is for. The real risk sits in the smart contract logic layered on top, transfer rules, oracles, upgrade mechanisms, which is exactly why independent security auditing stays necessary even on an immutable ledger."
---

## Key Takeaways

- A tokenized bond is a debt security issued and recorded on a blockchain, where the token is the register of ownership instead of an entry in a central securities depository.
- The issuer benefit is operational, not ideological: faster settlement, automated coupons, fewer intermediaries, and a wider investor base.
- Settlement is the headline. Traditional bonds settle in T+2. On-chain delivery-versus-payment can settle in minutes when a compliant cash leg exists.
- In the US, tokenizing a bond does not change its legal status. The SEC confirmed in 2026 that a blockchain-based security is still a security.
- The real constraint is secondary-market liquidity and on-chain cash, not the technology. Most tokenized bonds are still held to maturity.
- Commercial banks are now issuers, not just infrastructure providers. Goldman Sachs, HSBC, and Société Générale have all brought digital bonds to market, and DTCC is preparing production-scale Treasury tokenization for the second half of 2026.

Fixed income is the largest asset class moving on-chain. Debt led tokenized securities adoption in 2025, ahead of equities and funds, because bonds are easier to value, regulate, and use as collateral in capital markets than most other financial instruments, including a share of stock or a fund position. That's also why the institutions moving fastest, HSBC, Goldman Sachs, Société Générale, and DTCC, are all fixed income players first. For a CFO or head of innovation, the useful question is not whether the tech works, but what actually changes for an issuer, what still doesn't, and where friction remains between the pilot stage and something a treasury team can rely on every quarter.

## What is a tokenized bond?

A tokenized bond is a debt security issued and recorded on a blockchain, where the token is the authoritative record of ownership. It is still a bond: it pays a coupon, has a maturity, and represents a claim on the issuer. Only the infrastructure that tracks ownership and moves value changes.

It helps to be specific about what's being tokenized. Fixed income as an asset class breaks down into four broad types. Government or sovereign bonds are issued by a national government, and are usually the safest and most liquid, which is exactly why they're the first thing DTCC and HSBC's Digital Gilt pilot are tokenizing. Corporate bonds are issued by companies to fund operations or expansion, carry credit risk tied to that specific business, and are where Siemens and SpaceDev's own [Bondi Finance](/our-work/bondi-finance) work sit. Municipal bonds are issued by cities, states, or local authorities, often to fund public projects, and typically come with tax advantages for the buyer. Agency bonds are issued by government-affiliated entities that aren't the central government itself.

Nearly everything covered in this article, EIB's digital bonds, Siemens's corporate issuances, HSBC's sovereign and green bond work, and DTCC's Treasury pilot, sits in the sovereign and corporate categories. A smaller, labeled category worth calling out separately is the green bond, a bond of any of the four types above where the proceeds are earmarked for environmental projects specifically. HSBC's $1.3 billion Hong Kong green bond is the largest digital bond issued to date, and the reporting requirements that come with a green label, proving the money actually went where it was supposed to, are a good example of where programmable, on-chain reporting is a genuine improvement over a paper trail rather than just a faster version of the same thing. Municipal bond tokenization exists but is earlier and smaller, mostly because municipal issuance is fragmented across thousands of small, infrequent issuers rather than a natural fit for the infrastructure banks are building now.

Two models exist, and the difference is legal, not cosmetic:

- **Native digital bonds.** Born on-chain. The blockchain record is the legal register, with no off-chain database that overrides it. Most institutional issuances, including the European Investment Bank's, follow this model. The UK government's Digital Gilt Instrument pilot, the first native digital sovereign bond among G7 countries, also follows this approach, with HSBC's Orion platform selected to run it in February 2026.
- **Tokenized wrappers.** A traditional bond exists off-chain and a token represents a claim on it. The token mirrors the financial instrument rather than being it.

The model decides which intermediaries you can actually remove. A native issuance can drop the central securities depository from primary issuance. A wrapper generally cannot.

### Tokenized bond vs traditional bond

| Dimension | Traditional bond | Tokenized bond |
|---|---|---|
| Ownership record | Entry in a central securities depository | Token on a blockchain, often the legal register |
| Settlement | T+2 through intermediaries | Delivery-versus-payment, near-instant with on-chain cash |
| Coupon payments | Manual, via paying agents | Automated through smart contracts |
| Intermediaries | Multiple | Fewer in primary issuance |
| Minimum ticket | High | Fractionalizable, wider base |
| Transparency | Periodic reconciliation | Continuous, auditable ledger |

## How does a tokenized bond work?

The lifecycle mirrors a conventional bond, with smart contracts absorbing the manual servicing.

1. **Legal wrapper.** Define terms and the framework that recognizes the on-chain register. This decides whether the token can be the legal record, and it's usually the step that takes the longest, since it requires coordination between the issuer's counsel and the jurisdiction's securities regulator.
2. **Smart contract issuance.** The bond is minted using a permissioned security-token standard such as ERC-1400 or ERC-3643, which embed transfer restrictions at the token level. This is what lets compliance travel with the token itself instead of living in a separate system that has to be checked manually.
3. **Investor onboarding.** Buyers are whitelisted after KYC and AML checks, so compliance is enforced by code, not paperwork. Once an address is whitelisted, the restriction logic in the token blocks any transfer to a non-whitelisted wallet automatically.
4. **Primary distribution.** Bonds are placed directly into investor wallets through the issuer's chosen digital platforms, removing several intermediaries that would otherwise sit between the issuer and the buyer in a traditional syndication.
5. **Settlement via delivery-versus-payment.** Security and cash legs move atomically, in the same transaction. With a compliant on-chain cash leg, whether tokenized deposits, a stablecoin, or central bank money, settlement completes in minutes instead of days.
6. **Automated coupons and redemption.** The contract distributes coupons on schedule and repays principal at maturity, without a paying agent manually triggering each payment.

The [architecture behind launching an RWA protocol](/blog/how-to-launch-an-rwa-protocol) covers these token-design decisions in depth.

### Delivery-versus-payment vs. receive-versus-payment

Delivery-versus-payment and receive-versus-payment describe the same atomic transaction from two sides of the trade, not two different settlement mechanisms. DvP is the term used from the buyer's side: cash goes out, the security comes in, at the same instant. RvP is the mirror image from the seller's side: the security only leaves once payment is confirmed. Both exist to solve the same problem, principal risk, the risk that one party delivers its side of the trade and the counterparty never delivers theirs. In a traditional settlement system, that gap can last the full T+2 window. In an on-chain settlement where both legs are programmed into the same transaction, the gap closes to seconds, and the transaction either completes in full or not at all. That's also the logic behind cross-chain DvP designs now being tested for trades where the security and the cash leg live on different networks.

## Where SpaceDev fits: bond infrastructure in production

The gains described above are engineering and compliance problems SpaceDev has solved in shipped products, not slideware.

![Engineer monitoring on-chain infrastructure across multiple screens](/images/content/tokenized-bonds-infrastructure.png)

[Bondi Finance](/our-work/bondi-finance) is the closest match to everything covered here. SpaceDev built the entire smart contract infrastructure from scratch in Solidity, covering KYC-gated minting and burning, USDC-funded issuance, permissionless secondary trading once compliance checks pass, freezable controls and forced transfers for emergency scenarios, and on-chain storage of bond prospectuses. The contracts use an upgradeable architecture, so compliance logic can evolve without a full migration, exactly the compliant-by-design, institutional-grade pattern this article argues for. The outcome was emerging-market bonds made accessible to retail investors who were previously priced out. Read the full [Bondi Finance bond tokenization case study](/our-work/bondi-finance).

[ApeBond](/our-work/apebond) shows the same rigor applied to a different kind of bond, the DeFi bonding market rather than fixed income. SpaceDev expanded ApeBond's on-chain OTC marketplace to Solana with a Rust and Anchor program, a TypeScript SDK for clean frontend integration, and collaboration on the Sherlock audit. It is evidence that SpaceDev's smart contract development and security auditing hold up across chains and bond models, on both permissioned, compliance-heavy fixed income and permissionless DeFi.

Both engagements share the pattern that decides whether a tokenized issuance succeeds: compliance and security enforced in the token from day one, backed by independent auditing.

## What changes for the issuer?

Settlement speed is the clearest gain, and Siemens shows the trajectory in a single issuer's own history: its 2023 digital bond settled in T+2, the same as a traditional issuance, but its 2024 issuance settled intraday in central bank money via delivery-versus-payment. Going from T+2 to same-day, in the same company, within a year, is the kind of before-and-after data point that's hard to argue with.

Lower servicing cost follows from automating coupons and corporate actions, which removes recurring back-office work and intermediary fees from primary issuance. A paying agent manually processing coupon runs across a bond portfolio is a fixed cost that a smart contract executes for a fraction of the price, at the scheduled time, without a reconciliation step afterward.

Wider investor base comes from fractionalization. Lowering the minimum ticket size means an issuer isn't limited to institutional buyers who can write large checks, which matters directly for the liquidity questions in the next section.

Programmability is the least visible but most durable change. Coupons, transfer rules, and reporting are encoded directly into the financial instrument, which cheapens structured products at scale and makes new bond structures, like ones with built-in step-up coupons or automated ESG reporting, cheaper to design and maintain than they would be on legacy rails.

## Where do tokenized bonds still fall short?

Stating the limits plainly builds more trust with a decision-maker than overselling does.

- **Secondary liquidity is thin.** Most tokenized bonds are held to maturity rather than actively traded. Deep, instant secondary trading with a broad set of market participants is still the exception, not the rule, which matters for any issuer expecting a token to behave like a liquid public equity.
- **On-chain cash is still maturing.** The settlement advantage depends entirely on having a compliant cash leg available on the same network as the security. Without one, the cash side falls back to conventional rails, and the transaction ends up only half-modernized, fast on the security leg and slow on the payment leg.
- **Secondary trading often still needs a regulated venue,** even where primary issuance can bypass the central securities depository. Removing an intermediary from issuance doesn't automatically remove the need for a licensed venue when that bond changes hands later.
- **Legal recognition varies by jurisdiction.** Germany's Electronic Securities Act supports native digital registers explicitly, and the UK's Digital Gilt pilot is a deliberate step toward the same recognition, but coverage is uneven globally, and an issuance that works cleanly in one jurisdiction may need a different structure in another.

These are reasons to scope the first issuance around a use case the rails already support, not reasons to wait indefinitely.

## Risks of tokenized bonds, and what actually protects against them

A fair risk discussion separates what changes with tokenization from what doesn't.

**Credit risk doesn't change.** A tokenized bond from a weak issuer is still a weak credit. The blockchain records ownership faster and more transparently, it doesn't improve the underlying creditworthiness of the debt.

**Counterparty and settlement risk goes down, but only with a real cash leg.** This is the flip side of the DvP and RvP discussion above: the atomic settlement model is what removes principal risk, but only if the cash leg is actually on-chain and compliant. A tokenized security paired with an off-chain payment reintroduces the timing gap the whole model is meant to close.

**Legal and jurisdictional risk is real and uneven.** As noted above, not every market recognizes a blockchain register as the authoritative legal record yet, which creates enforceability questions in a dispute or a default that wouldn't exist with a traditional, well-established custodial chain.

**Operational and smart contract risk is the one that's actually new.** This is where the question of whether on-chain data can be manipulated actually belongs. A confirmed transaction on a properly decentralized ledger is extremely difficult to alter after the fact, that's the point of distributed validation and cryptographic hash-chaining across nodes. What that immutability does not cover is the application layer built on top of it: the smart contract logic that decides who can transfer what, when a coupon pays, and how a redemption executes. Bugs, misconfigured oracles, and flawed upgrade logic live in that layer, not in the ledger itself. Exploits against RWA-linked protocols reached roughly $14.6 million in the first half of 2025 alone, more than double all of 2024, and the pattern in nearly every case was an application-layer or operational failure, not a break in blockchain immutability. There's no public record of an incident specifically hitting a tokenized bond as of mid-2026, but the broader RWA exploit history is exactly why independent smart contract auditing, the kind SpaceDev's [BlockAudit](/blockaudit-smart-contract-and-blockchain-security) division does before and after launch, isn't optional for anything handling real capital.

## What is the US regulatory status in 2026?

In the US, tokenizing a bond does not change the rules that apply to it. The SEC confirmed in a January 2026 statement that a blockchain-based security is still a security, and a joint SEC and CFTC release in March 2026 reinforced that changing an instrument's format does not change how securities law applies. Regulators increasingly use the formal term DLT-based securities, distributed ledger technology being the broader category that blockchain falls under, to make clear they're extending existing securities law rather than writing a separate rulebook for tokens.

Three developments matter for issuers in 2026:

- **Tokenized collateral is being formalized.** Late-2025 CFTC guidance addressed using tokenized assets, including US Treasuries and corporate bonds, as collateral in derivatives markets. Collateral mobility is a near-term institutional use case, not just new issuance, and it's often the first thing a treasury desk asks about before it asks about issuing anything itself.
- **Core market infrastructure is moving on a concrete timeline.** The DTCC received SEC no-action relief in December 2025 and partnered with Digital Asset on a Treasury tokenization service built on the Canton Network. As of May 2026, DTCC had convened more than 50 firms around the effort and confirmed it expects to support limited production trades in July 2026, with a wider rollout targeted for October 2026. That's a specific, near-term date, not a multi-year roadmap, and it's the clearest signal yet that tokenized Treasuries are headed for the center of US market infrastructure rather than staying a side experiment.
- **Bank-led issuance platforms are consolidating into shared infrastructure.** Goldman Sachs announced it's spinning out its GS DAP digital asset platform into an independent, industry-owned entity, with Tradeweb as its first strategic partner, targeting a close around mid-2026. That mirrors a pattern seen elsewhere in tokenized finance: banks that built proprietary platforms are now opening them up as shared rails rather than keeping them as single-bank tools.

The design goal underneath all of this is compliant by design: transfer restrictions and eligibility enforced in code from the start. Since compliance lives in the smart contract, security auditing is non-negotiable.

## Which institutions have already issued tokenized bonds?

![Abstract digital skyline representing global institutional financial infrastructure](/images/content/tokenized-bonds-institutions.png)

- **European Investment Bank.** Multiple digital bonds across public and private chains, using on-chain syndication to compress issuance timelines. EIB remains the reference point for native digital bond issuance among supranational issuers.
- **Siemens.** A corporate benchmark: its 2023 bond settled in T+2, its 2024 issuance settled intraday in central bank money, and it later traded on a regulated secondary venue, giving the market a rare same-issuer before-and-after comparison.
- **HSBC, via its Orion platform.** The most active commercial bank in this space by issuance volume. Orion has supported more than $3.5 billion in cumulative digital bond issuance, including Luxembourg's digital treasury certificates in 2025 and a $1.3 billion multi-currency green bond issued in Hong Kong in 2025, the largest digital bond to date. In February 2026, the UK government selected Orion to run its Digital Gilt Instrument pilot, the first native digital sovereign bond among G7 countries.
- **Goldman Sachs, via GS DAP.** Goldman's platform has tokenized more than $700 million in digital bonds cumulatively since its 2022 debut issuance for EIB. In 2026, Goldman is spinning GS DAP out into an independent platform with Tradeweb as its first partner, shifting from "our platform for our deals" to shared market infrastructure.
- **Société Générale, via SG-FORGE.** Issued the first digital bond by a bank in the US market in November 2025, a floating-rate note tied to SOFR purchased by DRW, using Broadridge's tokenization technology on the Canton Network. SG-FORGE is now scaling its institutional stablecoin, CoinVertible, on the same network for tokenized collateral and financing.
- **DTCC.** Its Treasury tokenization pilot, targeting limited production trades in July 2026 and a broader launch in October 2026, signals that core US market infrastructure is preparing for tokenized fixed income at scale, not just individual banks experimenting on the margins.

This is the infrastructure work behind [asset tokenization projects](/blockchain-development-services/asset-tokenization).

Look at that list as a group and a pattern shows up: the platforms started as single-bank tools and are now becoming shared market infrastructure. GS DAP spinning out with Tradeweb, SG-FORGE scaling CoinVertible on Canton for other institutions to use, and DTCC building a Treasury service meant to serve the whole market rather than one bank, are all the same move. The competitive question for a mid-size bank or asset manager isn't whether to build a proprietary platform from scratch anymore, that window is closing, it's which shared rail to plug into before the choice gets made for them.

## Who's actually buying tokenized bonds and Treasuries?

Coverage of tokenized fixed income often stops at the issuer side and skips who's on the other end of the trade. In practice, three kinds of buyers show up.

The first is money market and treasury desks, both bank and corporate, that want yield-bearing exposure to short-term government debt with faster settlement and cleaner reporting than a traditional fund provides. The second is crypto-native funds and DAOs that hold tokenized Treasuries as low-risk, yield-bearing collateral instead of leaving stablecoin balances idle. The third, growing fastest, is the tokenized fund itself as the access point: rather than buying a bond directly, an investor buys into an onchain fund that holds the underlying Treasuries or bonds, and the fund's shares are what live on the blockchain.

An onchain fund is exactly what it sounds like: a traditional fund structure, still regulated as a fund, where share ownership is recorded and transferred on a blockchain instead of through a traditional transfer agent. Three examples show how fast this has grown. BlackRock's BUIDL fund had grown to roughly $2.9 billion in assets under management by mid-2026, live across nine different blockchains including Ethereum, Solana, and Avalanche. Franklin Templeton's BENJI, the tokenized share class of its government money fund, more than quadrupled from about $594 million in January 2026 to over $2.5 billion by July 2026. Ondo Finance's OUSG, backed in part by BUIDL itself, sits around $625 to $650 million in assets, deployed across Ethereum, Mantle, and Polygon.

XRP Ledger is part of this picture too, mostly as an issuance venue rather than the settlement layer discussed earlier in this article. Tokenized Treasuries on XRP Ledger grew roughly eightfold in twelve months, from about $50 million to around $418 million, with issuers including Ondo Finance, OpenEden Digitals, and Zeconomy using the network's native tokenization support and built-in exchange. That's a meaningfully smaller footprint than Ethereum's, but it's real issuance activity, not just a settlement pilot.

## When does issuing a tokenized bond make sense?

The strongest fit is a repeat issuer that can amortize the setup cost across multiple deals, one already cutting settlement and servicing cost the way Siemens did between its 2023 and 2024 issuances. It's also a strong fit for institutions building toward collateral mobility, since a tokenized Treasury or corporate bond can move into a derivatives margin account far faster than a paper equivalent, and for structured products where programmability lowers the cost of building in features like step-up coupons or automated reporting. Issuers specifically trying to reach a fractionalized, wider investor base, rather than a handful of large institutional buyers, also tend to see the clearest return.

The weaker fit is a one-off small issuer without existing infrastructure or legal counsel already fluent in digital securities, since the legal wrapper step alone can eat most of the benefit for a single small deal. It's also a weaker fit in jurisdictions that don't yet recognize an on-chain register as the legal record, and for any use case that depends on deep, instant secondary liquidity today rather than a year or two from now, since that's still the part of the market that hasn't caught up to the issuance side.

## Frequently asked questions

### Are tokenized bonds legal in the US?

Yes. A bond on a blockchain is still a security under federal law, and the SEC confirmed in 2026 that tokenizing it does not change the rules that apply.

### Tokenized bond vs crypto bond, what is the difference?

A tokenized bond is a regulated debt security placed on-chain. A "crypto bond" is usually a debt-like instrument native to a protocol, without the same legal protections.

### Do tokenized bonds settle faster?

They can. T+2 for traditional bonds versus minutes for on-chain delivery-versus-payment, but only with a compliant on-chain cash leg.

### What is the difference between DvP and RvP?

They're the same atomic settlement described from opposite sides of the trade. DvP is the buyer's view, cash out and security in at the same instant. RvP is the seller's view, the security only moves once payment lands. Both exist to eliminate principal risk, the chance that one side delivers and the other doesn't.

### Do you still need a custodian?

Often yes, especially for investors and secondary trading. Native issuance removes some intermediaries from primary issuance, but custody, key management, and regulated venues still play a role, and a bank or fund manager still has to decide who holds the keys and how that's insured.

### Can tokenized bonds be traded on secondary markets?

Increasingly, but liquidity is thin and trading frequently requires a regulated venue. Most of the volume so far is issuance and redemption at the primary level, not active day-to-day trading between unrelated investors.

### What is an on-chain fund?

A traditional, regulated fund whose share ownership is recorded and transferred on a blockchain instead of through a conventional transfer agent. BlackRock's BUIDL, Franklin Templeton's BENJI, and Ondo Finance's OUSG are the largest examples, together holding several billion dollars in tokenized Treasury and money-market exposure.

### Who actually buys tokenized bonds and Treasuries?

Bank and corporate treasury desks looking for yield-bearing, fast-settling short-term exposure, crypto-native funds and DAOs holding tokenized Treasuries as collateral, and increasingly investors accessing exposure indirectly through an onchain fund rather than buying a bond directly.

### Will XRP be used to tokenize assets?

It already is, on a smaller scale than Ethereum. XRP Ledger hosts tokenized Treasuries from issuers including Ondo Finance, OpenEden Digitals, and Zeconomy, and that segment grew roughly eightfold over the past year.

### Can on-chain bond data be manipulated?

The ledger record itself is very hard to alter once confirmed, that's what distributed validation is for. The real risk sits in the smart contract logic layered on top, transfer rules, oracles, upgrade mechanisms, which is exactly why independent security auditing stays necessary even on an immutable ledger.

## Bringing a bond on-chain

A successful tokenized issuance is an infrastructure and compliance problem before it is a blockchain one. The issuers seeing real gains, from HSBC's Orion platform to Société Générale's first US digital bond, scoped the first deal around a use case the rails already support and built compliance into the token from day one. None of them treated the smart contract as an afterthought bolted onto a legal structure designed for paper; the token design, the transfer restrictions, and the audit came before the announcement, not after a problem showed up.

If you are evaluating a tokenized issuance, our [asset tokenization services](/blockchain-development-services/asset-tokenization) cover token design, smart contract development, and auditing. You can [book a technical scoping call](https://meetings.hubspot.com/federico-sendra/meet-space) to review your case.
