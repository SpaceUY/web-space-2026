---
title: "Cryptocurrency Trends 2027: Stablecoin Supply Slowed, Usage Did Not"
description: "Stablecoin supply growth slowed sharply while transfer volume grew 87%. What that gap means for anyone building on stablecoin rails before GENIUS Act enforcement begins on 18 January 2027."
publishedAt: 2026-10-06
author: juan-manuel-sobral
category: "Blockchain Trends"
tags: ["fintech", "defi", "compliance"]
readTime: 14
cover: "/images/content/cryptocurrency-trends-2027/cover.png"
metatitle: "Cryptocurrency Trends 2027: Stablecoins and the GENIUS Act"
metadescription: "Stablecoin supply growth slowed while transfer volume grew 87%. What that gap means for teams building on stablecoin rails before GENIUS Act enforcement."
takeaways:
  - "Stablecoins decoupled from the crypto cycle. In the previous bear market supply fell more than 30%. In the 2026 drawdown it held near record highs. Stablecoin rails are no longer a bet on crypto prices."
  - "Supply growth decelerated sharply while velocity accelerated. Roughly $102 billion of supply was added in 2025 against about $8 billion in the first five months of 2026, yet adjusted transfer volume grew 87% year over year. Velocity is the metric that matters for a payments business."
  - "Regulation moved from question to deadline. GENIUS Act enforcement begins 18 January 2027. That is an engineering roadmap with a date attached, not a policy debate."
  - "Yield moved one layer up the stack. Payment stablecoin issuers cannot pay interest to holders, so yield migrated to tokenised money market funds and to yield-bearing stablecoins structured outside the payment definition."
  - "Institutional rails are being poured now. Eight major US banks are building a shared tokenised deposit network for 2027, and the DTCC has begun production tokenization trades. Most of that work is procurement, not product."
  - "Agent payments are a real category at small value. Enormous transaction counts, tiny amounts. Build for it if it is your market, do not model 2027 revenue on it."
faqs:
  - question: "What are the biggest cryptocurrency trends in 2027?"
    answer: "Institutional infrastructure construction independent of price, regulatory deadlines replacing regulatory uncertainty, autonomous agent payments emerging as a category, and stablecoins consolidating as the settlement layer underneath all three."
  - question: "What is the stablecoin market cap right now?"
    answer: "Between roughly $308 billion and $323 billion depending on source and date, having peaked in April and May 2026."
  - question: "Are stablecoins still growing?"
    answer: "Supply growth slowed sharply, roughly $102 billion added in 2025 versus about $8 billion in the first five months of 2026. Transfer volume, however, grew 87% year over year."
  - question: "When does the GENIUS Act take effect?"
    answer: "Signed 18 July 2025, final rules 18 July 2026, enforcement from 18 January 2027."
  - question: "Can stablecoins pay interest?"
    answer: "Payment stablecoin issuers cannot pay interest to holders. Yield has migrated to tokenised money market funds and to yield-bearing stablecoins structured outside the payment-stablecoin definition."
  - question: "Is a $2 trillion stablecoin market by 2028 realistic?"
    answer: "It would require adding $650 to $700 billion per year, roughly six times the strongest year on record, sustained for three years. Treat such projections as scenarios, not schedules."
  - question: "Should I build on a payment chain or an Ethereum L2?"
    answer: "Payment chains offer predictable fees, stablecoin-denominated gas, programmable compliance and sub-second finality, at the cost of validator decentralization, liquidity portability and independence from interoperability protocols."
  - question: "How long does a stablecoin integration take?"
    answer: "Roughly three months to production for a multichain integration including external security audit, plus institutional review cycles that typically add several months on the client side."
---

## Where the cryptocurrency market actually is

Four trends define cryptocurrency going into 2027, and they are not the ones that dominated 2021. Prices are down. Institutional infrastructure is being built regardless of price. Regulation moved from question to deadline. And AI agents began transacting autonomously at meaningful transaction counts, if not yet meaningful volumes.

Underneath all four sits the same layer: **stablecoins**. They are the settlement asset for tokenised collateral, the cash leg for institutional trades, the rail for agent payments, and the object of nearly every regulatory framework passed since 2025. If you want to understand where crypto is going in 2027, the stablecoin data is where to look.

![Seven translucent glass panels stacked vertically against a black background, each reflecting blue sky and clouds, with a silver coin floating above it](/images/content/cryptocurrency-trends-2027/cryptocurrency-trends-2027-01-stablecoin-layer.png)

**Market snapshot, figures as of 28 August 2026.** Prices and supply totals below are dated on purpose. Re-check before quoting.

| Metric | Figure | Source and date |
|---|---|---|
| Total stablecoin supply | $308bn to $323bn depending on source | [DefiLlama-derived, 13 Aug 2026](https://reap.global/blog/stablecoin-statistics-2026); 51 Insights, 10 May 2026; [Federal Reserve, 6 Apr 2026](https://transak.com/blog/stablecoin-market-cap-2026) |
| USDT / USDC share | Roughly 83% of supply combined | Reap, Aug 2026 |
| Dollar-denominated share | Over 99% | 51 Insights, *Money Movement 2.0* |
| Bitcoin | Near $79,000, against an Oct 2025 high of $126,198 | Yahoo Finance, 25 Aug 2026 |
| Ether | Near $2,470, against a high of $4,953 | Yahoo Finance, 25 Aug 2026 |

Those supply figures are not in conflict. They describe a market that peaked in April and May 2026 and softened since. If you see a single confident number quoted without a date attached, treat it with suspicion.

That over-99% dollar concentration carries more geopolitical weight than any single regulatory framework, because it means the digital money layer of the internet is, for now, a dollar system.

## Trend 1: Stablecoins decoupled from the crypto cycle

In the previous bear market, stablecoin supply fell more than 30%. In the 2026 drawdown, with the broader market roughly 40% off its peak, [supply held near record highs](https://reap.global/blog/stablecoin-statistics-2026).

That is a structural change, not a cyclical one. Stablecoins are no longer a proxy for crypto risk appetite.

The reasons are visible in the composition of demand. Corporate treasuries hold dollar tokens as working capital for cross-border settlement. Emerging-market users hold them as a hedge against local currency debasement. Institutions hold them as the cash leg of tokenised collateral workflows that did not exist eighteen months earlier. None of those flows care about the price of ETH.

If you are building a payments product, this is the most important fact in this article. **Stablecoin rails are no longer a bet on the crypto cycle.**

## Trend 2: The deceleration nobody mentions

Now the uncomfortable arithmetic. The market [added roughly $75 billion in 2024 and $102 billion in 2025](https://reap.global/blog/stablecoin-statistics-2026), the year US stablecoin legislation became law. In the first five months and change of 2026, it added about $8 billion.

Reaching $2 trillion by end-2028, a figure appearing in several bank forecasts, would require adding $650 to $700 billion per year from that base. That is roughly six times the strongest year this market has ever had, sustained for three consecutive years.

This does not make the forecasts wrong. It makes them scenarios contingent on bank, fintech and corporate adoption arriving at scale, not schedules you can plan a roadmap against. Standard Chartered projects $1 trillion in net-new T-bill demand from stablecoins by 2028 (via 51 Insights). That may happen. It has not started happening at the required rate.

**Treat the direction as signal and the timing as speculation.**

## Trend 3: Velocity is the cryptocurrency metric that matters

Here is the number that reframes everything above. [Adjusted transfer volume grew 87% year over year while supply grew 50%](https://reap.global/blog/stablecoin-statistics-2026). Adjusted transaction volume reached $10.87 trillion in 2025, up 91% (51 Insights).

The gap between those growth rates is the story. Supply measures how much capital is parked on-chain; velocity measures how much work it is doing. For a payments business, the second number is the relevant one, and it is accelerating even as the first decelerates.

The scale is now genuinely large. Monthly on-chain settlement volume reached $7.2 trillion in February 2026, surpassing the US ACH network for the first time (51 Insights). Federal Reserve researchers recorded a [50% increase in Ethereum stablecoin transaction volume](https://transak.com/blog/stablecoin-market-cap-2026) since the GENIUS Act took effect.

**One caveat, because this is where most coverage overstates things.** Gross annual volume of roughly $60 trillion is mostly wholesale and DeFi activity: liquidity swaps, yield strategies, intra-exchange transfers. Real-world payments excluding trading and bots crossed $400 billion in 2025, with B2B cross-border the dominant use case. Cross-border stablecoin payments run around $226 billion annually, roughly 0.01% of global B2B payment volume (51 Insights).

That last figure is the honest framing: **enormous as infrastructure, still early in commerce.**

## Trend 4: The institutional rails are being poured now

Price action obscured the most consequential development of 2026. Banks stopped piloting and started building shared infrastructure.

JPMorgan, Citi, Bank of America, Wells Fargo, HSBC and three other institutions are constructing a [shared tokenised deposit network operated by The Clearing House, targeting the first half of 2027](https://www.coindesk.com/markets/2026/06/05/jpmorgan-bank-of-america-and-citi-are-going-on-the-blockchain-offensive-with-a-shared-tokenized-network). No blockchain vendor has been selected. The DTCC, which processes roughly $2.4 quadrillion in securities transactions annually, [began production tokenization trades in July 2026](https://crypto.news/tokenize-wall-street-jpmorgan-citi-wells-fargo-settlement/) with a broader rollout targeted for October. Wells Fargo announced it will offer tokenised deposits to corporate clients, choosing to join the shared network rather than build its own.

Note what those sentences have in common: each describes work that has not been done yet. A network without a vendor. A rollout in progress. A bank that decided not to build internally. This is the part of the 2027 story that gets undercovered because it is procurement rather than product.

It also carries a specific historical risk. Consortium networks in this exact shape have failed before, for reasons that were never technical. We cover that record and the test we apply to any consortium proposal in [Blockchain Use Cases: What Actually Shipped](https://spacedev.io/blog/blockchain-use-cases). Institutions scoping this work will find the architectural side in [blockchain for banks](https://spacedev.io/blockchain-development-services/industry/banking).

## The GENIUS Act calendar: what 18 January 2027 requires

The GENIUS Act was signed 18 July 2025. [Final rules landed 18 July 2026 and enforcement begins 18 January 2027](https://cryptoslate.com/one-year-later-genius-act-just-made-stablecoins-easier-to-sell/), eighteen months after enactment.

For anyone with stablecoin exposure this is not a policy question. It is an engineering roadmap with a deadline, and every requirement is a system somebody has to build.

What it obliges:

- **Monthly attestations** under AICPA AT-C Section 205. In January 2026 the AICPA published specific criteria for stablecoin reporting and for controls supporting token operations (51 Insights). This is a continuous data pipeline, not a quarterly PDF.
- **Full reserve backing** in cash and short-term Treasuries, with [segregation and holder priority in insolvency](https://valueaddvc.com/blog/stablecoin-regulation-2026-the-us-framework-and-what-it-means-for-crypto-companies).
- **No interest paid to holders by the issuer**, the most architecturally significant clause in the statute.

Internationally the picture is fragmentation, not harmonization. [MiCA, the UK FSMA regime, Singapore's MAS framework, Hong Kong's Stablecoin Ordinance and Japan's FSA rules](https://deluair.com/consultancy/insights/stablecoin-regulation-2026) converge on full reserve backing and monthly disclosure but diverge sharply on specifics: MiCA restricts USD-denominated coins, Hong Kong requires local incorporation and bars interest on balances, Japan requires onshore reserves, Singapore mandates redemption within five business days. Brazil's central bank issued three resolutions in November 2025, in force from February 2026, and in May 2026 barred stablecoin settlement for eFX remittances outright (51 Insights).

Each is a separate branch in your compliance logic. **There is no single "compliant" build**, which is why we treat [Web3 compliance](https://spacedev.io/blockchain-development-services/industry/compliance-web3) as an architecture decision rather than a legal review at the end.

## Where the yield went

The GENIUS Act prohibits payment stablecoin issuers from paying interest to holders. The intent is to prevent deposit migration out of commercial banks. The effect is that the Treasury yield did not disappear, it moved one layer up the stack.

This is the largest and least-discussed regulatory arbitrage in the sector, and it determines product architecture directly.

Yield now surfaces in two places. The first is **tokenised money market funds**, which sit outside the payment-stablecoin definition entirely: BlackRock's BUIDL, Circle's USYC, Ondo's OUSG and USDY, Franklin Templeton's BENJI. The category grew from roughly $100 million in early 2024 to over $20 billion by May 2026 (51 Insights). BlackRock filed for BRSRV in May 2026, purpose-built to qualify as a GENIUS-eligible reserve asset.

The second is **yield-bearing stablecoins** structured as securities, operating offshore, or generating return synthetically: Sky's sUSDS, Ethena's sUSDe, Frax's sfrxUSD. The mechanics and the risk profile of that second category are covered in [DeFi Protocol Trends 2027](https://spacedev.io/blog/defi-protocol-trends-2027), including why a large TVL number in this category can measure leverage rather than adoption.

**The practical consequence for a treasury:** payment stablecoins are the medium of exchange, tokenised MMFs are the store of value. You hold USDC for the ten minutes it takes to move funds, then sweep into a yield vehicle. Designing a product that assumes the payment token will earn is designing against the statute.

## Payment chain or L2? A decision framework

This is the question we are asked most often, and it has no universal answer, only trade-offs that resolve differently depending on what you are building.

![An isometric dark scene with a glowing platform at the center topped by a metallic Ethereum logo under a cloud, surrounded by laptops, monitors and server racks with green code glowing](/images/content/cryptocurrency-trends-2027/cryptocurrency-trends-2027-02-payment-chains.png)

**The case for purpose-built payment chains** rests on four arguments, all legitimate:

*Gas volatility.* A merchant cannot operate a business model where transaction costs jump from five cents to ten dollars because of unrelated congestion.

*Denomination friction.* Corporate treasurers operate in dollars. Holding ETH or SOL purely to pay fees creates accounting overhead and a gain/loss calculation on every transaction fee.

*Programmable compliance.* Regulated institutions need KYC and AML enforcement before settlement, difficult to retrofit onto a permissionless chain.

*Deterministic finality.* Twelve seconds of probabilistic finality is unworkable at point of sale.

The current field (details via 51 Insights, *Money Movement 2.0*): Circle's **Arc** uses USDC as native gas with opt-in shielded transactions and view keys, 100+ companies on testnet, mainnet targeted 2026. Stripe and Paradigm's **Tempo** is live, charges a flat $0.001 per transaction, accepts any stablecoin as gas, and carries ISO 20022 memo fields. Tether backs two: **Plasma**, which sponsors gas at protocol level for USDT transfers, and **Stable**, which uses USDT as native gas. Avalanche's **Evergreen** offers permissioned subnets with KYC and geofencing built in, in production with 130+ live subnets.

**Three trade-offs, all underdiscussed:**

*Centralization.* Payment chains run smaller, permissioned validator sets. That improves performance and compliance, and reintroduces exactly the censorship risk public chains were designed to eliminate.

*Liquidity fragmentation.* A dollar on Tempo is not natively usable on Arc. Every fintech launching its own chain deepens the problem.

*Interoperability dependency.* These systems depend heavily on protocols like Circle's CCTP, now connecting 19+ blockchains with over $126 billion in cumulative volume, which introduces a new layer of systemic risk if those protocols fail.

If you are weighing this decision, the L1 side of the trade-off is unpacked in [what is a Layer 1 blockchain](https://spacedev.io/blog/what-is-layer-1-blockchain), and we run it as a structured exercise in [product discovery](https://spacedev.io/product-discovery) rather than as an architecture opinion.

## AI agents: a real signal, not yet a revolution

Coinbase's x402 standard reached roughly 69,000 active agents and 165 million transactions as of April 2026 (51 Insights). Independent measurement by Keyrock found autonomous agents processed [about $73 million across roughly 176 million transactions](https://www.spark.money/research/stablecoin-supply-420-billion-growth) between May 2025 and April 2026.

Read those together and the picture is clear: enormous transaction counts, tiny values. Average transaction size runs one to ten cents, and 76% of transactions fall below the $0.30 threshold where card processing stops being economical.

**That threshold is the entire argument.** Agent payments are not competing with existing rails; they address transactions that could not previously exist. Machine-to-machine settlement for API calls, GPU time and storage is a genuinely new category, and stablecoins are the only practical settlement layer for it.

The infrastructure assembled in about twelve months: Visa Intelligent Commerce, Coinbase's x402, Stripe and Tempo's Machine Payments Protocol released March 2026, Google's AP2, Mastercard Agent Pay, and Amazon Bedrock AgentCore Payments.

Seventy-three million dollars is not a revolution. It is a coherent use case with real economic rationale and credible infrastructure, growing from approximately zero. Build for it if it is your market. Do not model 2027 revenue on it. If it is your market, the engineering sits at the intersection of [agentic AI development](https://spacedev.io/agentic-ai-development) and payment infrastructure.

## What can go wrong

**The Treasury feedback loop is asymmetric.** Stablecoin issuers bought $56.6 billion in T-bills over twelve months, more incremental Treasury demand than Japan, Singapore or Norway. [Tether holds roughly $113 to $122 billion in Treasury exposure](https://reap.global/blog/stablecoin-statistics-2026), which would rank it among the top twenty sovereign holders. BIS Working Paper 1270 estimates a two-standard-deviation stablecoin inflow lowers three-month T-bill yields by 2.5 to 3.5 basis points, and 5 to 8 in periods of bill scarcity, but outflows raise yields two to three times as much as inflows lower them (51 Insights). The US government has, largely by accident, imported crypto sentiment beta into its marginal funding cost.

**Depegs still happen, and fast.** In March 2026 [ResolvUSD was exploited for roughly $80 million and traded as low as $0.14](https://reap.global/blog/stablecoin-statistics-2026), with market cap falling 55.9%. Following the KelpDAO breach in April, the sector saw $892 million in outflows as capital rotated toward dominant issuers. Both were security failures before they were market events, which is the argument for treating [smart contract audit](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security) as continuous rather than pre-launch. Our breakdown of [how smart contract vulnerabilities happen](https://spacedev.io/blog/smart-contract-security-how-vulnerabilities-happen-and-how-to-prevent-them) covers the recurring patterns.

**Reflexive supply is not adoption.** Ethena's USDe fell from roughly $11.3 billion to $3.9 billion by 31 July 2026, driven by leveraged loops rather than user demand. The full mechanism, and why the protocol's economics were sound throughout, is in [DeFi Protocol Trends 2027](https://spacedev.io/blog/defi-protocol-trends-2027).

## Latin America: where stablecoin intensity is highest

The dollar-volume picture and the adoption picture point in opposite directions, and most English-language coverage reports only the first.

![A large copper-coloured Bitcoin coin resting on the night-time Earth, glowing with orange city lights, with floating image panels and the Milky Way above](/images/content/cryptocurrency-trends-2027/cryptocurrency-trends-2027-03-latin-america.png)

By absolute flow, North America leads with roughly $633 billion in 2024, followed by Asia-Pacific at about $519 billion. By intensity relative to GDP the ranking inverts completely: Latin America and the Caribbean process 7.7% of regional GDP through stablecoin rails, Africa and the Middle East 6.7%, and North America under 1% (IMF via 51 Insights). North America was the net exporter, with roughly $54 billion flowing out to meet emerging-market dollar demand.

This is where stablecoins do what dollars physically cannot: cross a border, settle in seconds, and land in a local mobile wallet at an all-in cost near 1%, against 6% to 8% for traditional corridors.

The regulatory map is uneven. Brazil set the template. Mexico requires crypto firms to register as financial companies. Argentina and Venezuela show heavy practical usage with no national framework. El Salvador built its regime around Bitcoin rather than stablecoins. The IMF has warned that in smaller economies foreign stablecoins risk displacing the local currency outright.

Building for this market means treating regulatory divergence as a permanent condition, not a transitional one. We have shipped in this corridor: [Zenda](https://spacedev.io/our-work/zenda), a crypto exchange for everyday users buying and selling USDT with fiat in Uruguay, and [Mostaza](https://spacedev.io/our-work/mostaza), Web3 financial tools for everyday users across Latin America. Our longer view on the region is in [LatAm's promising crypto future](https://spacedev.io/blog/changing-the-lens-on-the-future-of-crypto-latams-promising-future).

> "What's overvalued is the pilot. Too many launch without anyone having defined the user's problem first, and they die from lack of demand, not lack of technology. What's undervalued is the boring part: I still pay fifty dollars for an international wire. That's the problem worth solving."
>
> Federico Sendra, Co-founder & CEO, SpaceDev

## What this means for your 2027 roadmap

If you have stablecoin exposure, the arithmetic is straightforward. Enforcement begins 18 January 2027. Engineering a multichain, production-ready integration with external security audit takes roughly three months. Institutional processes, meaning legal review, vendor risk assessment and compliance sign-off, routinely add several more.

> "Three months to production with real users, multichain, external audit included. That's our side of the calendar. The one that matters to you is longer, and it's the part most teams forget to budget. We plan around it because we've seen where it stalls."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

An organization starting late in 2026 is already tight against the deadline. That is not a sales argument; it is a subtraction.

One closing note on choosing what to build, from a team that has been on both sides:

> "We've built plenty of things that never got used. A lot of teams, us included, were building because the funding was there, not because the problem was. What matters now is the opposite: real problems, real customers, and treating this as a technology like any other."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

The infrastructure question in 2027 is largely settled. The product question is not.

## Frequently asked questions

### What are the biggest cryptocurrency trends in 2027?

Institutional infrastructure construction independent of price, regulatory deadlines replacing regulatory uncertainty, autonomous agent payments emerging as a category, and stablecoins consolidating as the settlement layer underneath all three.

### What is the stablecoin market cap right now?

Between roughly $308 billion and $323 billion depending on source and date, having peaked in April and May 2026.

### Are stablecoins still growing?

Supply growth slowed sharply, roughly $102 billion added in 2025 versus about $8 billion in the first five months of 2026. Transfer volume, however, grew 87% year over year.

### When does the GENIUS Act take effect?

Signed 18 July 2025, final rules 18 July 2026, enforcement from 18 January 2027.

### Can stablecoins pay interest?

Payment stablecoin issuers cannot pay interest to holders. Yield has migrated to tokenised money market funds and to yield-bearing stablecoins structured outside the payment-stablecoin definition.

### Is a $2 trillion stablecoin market by 2028 realistic?

It would require adding $650 to $700 billion per year, roughly six times the strongest year on record, sustained for three years. Treat such projections as scenarios, not schedules.

### Should I build on a payment chain or an Ethereum L2?

Payment chains offer predictable fees, stablecoin-denominated gas, programmable compliance and sub-second finality, at the cost of validator decentralization, liquidity portability and independence from interoperability protocols.

### How long does a stablecoin integration take?

Roughly three months to production for a multichain integration including external security audit, plus institutional review cycles that typically add several months on the client side.

## Building on stablecoin rails before January 2027

If enforcement affects your product, the useful next step is a scoping conversation rather than a proposal. SpaceDev builds [stablecoin and fintech infrastructure](https://spacedev.io/blockchain-development-services/industry/finance-and-fintech/stablecoins), including regulated exchange systems such as [NDAX Canada](https://spacedev.io/our-work/ndax-canada), with security handled in-house through [BlockAudit](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security). [Talk to our team](https://spacedev.io/contact) about where your calendar actually starts.

## Sources

Market data and figures are as of 28 August 2026.

<div class="sd-sources">

### Market data and supply

- Reap, "[Stablecoin Statistics & Data 2026](https://reap.global/blog/stablecoin-statistics-2026)," 13 August 2026.
- Transak, "[Stablecoin Market Cap in 2026](https://transak.com/blog/stablecoin-market-cap-2026)."
- 51 Insights & Proof of Talk, *Money Movement 2.0*, 2026, [fiftyone.xyz](https://fiftyone.xyz).
- Yahoo Finance, daily BTC and ETH pricing, 25 August 2026.

### Regulation

- CryptoSlate, "[One year later: GENIUS Act](https://cryptoslate.com/one-year-later-genius-act-just-made-stablecoins-easier-to-sell/)," 18 July 2026.
- Value Add VC, "[Stablecoin Regulation 2026](https://valueaddvc.com/blog/stablecoin-regulation-2026-the-us-framework-and-what-it-means-for-crypto-companies)."
- Deluair, "[Stablecoins meet the statute: GENIUS, MiCA and the Treasury bid in 2026](https://deluair.com/consultancy/insights/stablecoin-regulation-2026)."

### Institutional infrastructure

- CoinDesk, "[JPMorgan, Bank of America and Citi go on the blockchain offensive](https://www.coindesk.com/markets/2026/06/05/jpmorgan-bank-of-america-and-citi-are-going-on-the-blockchain-offensive-with-a-shared-tokenized-network)," 5 June 2026.
- crypto.news, "[The race to tokenize Wall Street](https://crypto.news/tokenize-wall-street-jpmorgan-citi-wells-fargo-settlement/)."
- Fireblocks, "[Tokenized Deposits](https://www.fireblocks.com/blog/tokenized-deposits-transaction-banking)."

### Yield, agents and risk

- Spark, "[Stablecoin Supply Is Approaching $420 Billion](https://www.spark.money/research/stablecoin-supply-420-billion-growth)" (Keyrock agent data).
- Stablecoin Insider, "[Ethena's USDe Q1 2026 Report](https://stablecoininsider.org/ethena-usde-q1-2026-report/)."

</div>
