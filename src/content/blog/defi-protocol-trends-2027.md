---
title: "DeFi Protocol Trends 2027: The Seven Layers of the New Dollar Stack"
description: "DeFi protocols stopped being governance tokens and became businesses with revenue, while the stack broke into specialised layers. A layer-by-layer analysis of Sky, Aave, Frax, Ethena, M0, Perena and Axal heading into 2027."
publishedAt: 2026-09-24
author: juan-manuel-sobral
category: "Blockchain Trends"
tags: ["defi", "rwa", "smart-contracts"]
readTime: 15
cover: "/images/content/defi-protocol-trends-2027/cover.png"
metatitle: "DeFi Protocol Trends 2027: The Seven Layers of the Dollar Stack"
metadescription: "DeFi protocols stopped being governance tokens and became businesses with revenue, while the stack broke into specialised layers. A layer-by-layer analysis of Sky, Aave, Frax, Ethena, M0, Perena and Axal heading into 2027."
takeaways:
  - "Protocols now report revenue like companies. Uniswap activated its fee switch on 25 December 2025, Aave runs a $1 million weekly buyback, and Sky publishes protocol revenue formally. Valuing a protocol on TVL alone is now an anachronism."
  - "The stack has broken into specialised layers. Issuance, collateral management, liquidity and execution are separate businesses run by separate companies. The interesting engineering work is at the seams."
  - "Real-world assets became collateral, not product. A tokenised Treasury you buy and hold is a fund with a blockchain attached. A tokenised Treasury you borrow against is DeFi."
  - "Supply and TVL can measure leverage rather than adoption. Ethena's USDe contraction is the clearest lesson available on why that distinction costs money."
  - "For anyone building on these rails in 2027, integration risk is a scheduling risk. Early-stage protocols ship breaking changes, and that never appears in vendor documentation."
faqs:
  - question: "What are the main DeFi protocol trends in 2027?"
    answer: "Protocols generating and distributing real revenue through fee switches and buybacks; the stack unbundling into specialised layers for issuance, credit, liquidity and execution; real-world assets used as collateral rather than sold as product; and compliance features moving into the protocol layer."
  - question: "Which DeFi protocols generate actual revenue?"
    answer: "Aave reported $885 million in 2025 protocol fees and runs a weekly buyback. Sky posted $123.79 million in gross revenue in Q1 2026. Uniswap activated its fee switch in December 2025. Ethena has generated over $800 million in cumulative fees."
  - question: "What is Aave V4 and has it launched?"
    answer: "A Hub-and-Spoke architecture replacing per-chain liquidity pools with Core, Plus and Prime liquidity hubs plus isolated spoke markets, built on the ERC-4626 vault standard. It launched on Ethereum mainnet on 30 March 2026 and expanded to Avalanche in July 2026. By September 2026 it was carrying $800 to $900 million in deposits across eleven spokes."
  - question: "What happened to MakerDAO?"
    answer: "It rebranded to Sky in August 2024, migrating DAI to USDS and MKR to SKY, and restructured into semi-independent SubDAOs called Stars. Exchange migrations completed in April and May 2026; roughly $4.4 billion in legacy DAI remains on-chain."
  - question: "Why did Ethena's USDe supply fall?"
    answer: "Roughly 60% of supply at peak was locked in leveraged loops through Pendle and Aave rather than held as user demand. When funding conditions turned, that supply unwound. USDe fell from around $11.3 billion to $3.9 billion by 31 July 2026."
  - question: "Should I launch my own stablecoin or integrate an existing one?"
    answer: "Integrate, in most cases. Joining an existing network means joining existing liquidity. Issuing makes sense when you control meaningful distribution, need behaviour a general-purpose stablecoin cannot provide, and can absorb reserve, attestation and redemption obligations as permanent operating costs."
  - question: "What is M0?"
    answer: "An on-chain stablecoin issuance protocol where approved institutions mint a shared base token, $M, against high-quality collateral and wrap it into branded stablecoins. Used by MetaMask, Noble, Usual, KAST, Stripe and MoonPay, and adopted by Anchorage Digital in April 2026."
---

## What changed in DeFi during 2026, and what carries into 2027

Three things changed, and none of them is a price move.

**Protocols started reporting revenue like companies.** Uniswap activated its long-delayed fee switch on 25 December 2025. Aave launched a structured buyback allocating $1 million weekly to repurchase AAVE, distributing the tokens to stakers. Sky posted its strongest quarter on record. The shift is from governance tokens with no cash flows to productive assets with transparent revenue sharing, which changes how you value a protocol entirely.

**The stack broke apart into specialised layers.** Two years ago a stablecoin protocol did everything: issuance, collateral management, liquidity, distribution. Those are now separate businesses.

**Real-world assets became collateral rather than product.** The distinction matters, and it is the one most tokenisation projects get wrong. If you are scoping work in this category, our team covers it in [asset tokenization development](https://spacedev.io/blockchain-development-services/asset-tokenization) and in the practical walkthrough [how to launch an RWA protocol](https://spacedev.io/blog/how-to-launch-an-rwa-protocol).

The clearest way to see all three at once is to stop treating the major protocols as a list of competitors and start treating them as **layers of a single stack that is coming apart**.

## The seven layers of the 2027 DeFi stack

| Protocol | Layer | What it demonstrates |
|---|---|---|
| **Sky** (ex-MakerDAO) | Issuance and balance sheet | The incumbent that restructured into modules |
| **Aave** | Credit and consolidation | The scale winner integrating vertically |
| **Frax** | Full vertical stack | The opposite bet: own the whole system |
| **Ethena** | Synthetic yield | The risk case: reflexivity and deleveraging |
| **M0** | Unbundled issuance | Issuing without being an issuer |
| **Perena** | Unified liquidity | The problem that proliferation creates |
| **Axal** | Agentic execution | What changes when the user stops signing |

They are not competing for the same position. They occupy different floors of a building that used to be one room.

**Market snapshot, figures as of 28 August 2026.** The numbers in this article move quickly. Treat every supply, TVL and deposit figure below as dated rather than current, and re-check before you rely on any of them.

## DeFi issuance protocols: Sky and the restructured incumbent

![A holographic disc radiating fanned bands of rainbow light from its center](/images/content/defi-protocol-trends-2027/defi-protocol-trends-2027-01-sky.png)

Sky, the protocol formerly known as MakerDAO, posted its strongest quarter on record in Q1 2026: [$123.79 million in gross protocol revenue and $46.04 million in net protocol surplus](https://messari.io/project/sky-protocol), both above forecast. USDS supply reached roughly $12 billion, making Sky the third-largest stablecoin issuer.

The product that matters most is sUSDS, the savings wrapper. It holds [around $6.49 billion in deposits at a Sky Savings Rate of 3.75% APY](https://blog.web3wagmi.com/sky-guide), among the largest rate-bearing stablecoin products in the market.

The architecture is the interesting part. Sky's "Endgame" plan broke the protocol into semi-independent SubDAOs called Stars, each with its own governance, treasury and product focus. Spark, the lending and liquidity Star, [crossed $5 billion in TVL in April 2026](https://www.dlnews.com/articles/defi/what-defi-protocols-expect-in-2026/) after attracting roughly $1.3 billion in a single week. Grove launched its own token in June 2026. Keel is live.

Backing composition, approximately: 38% from the USDC peg stability module, 25% from stability fees on crypto-collateralised loans, 22% from real-world asset loans, 10% from Spark allocations.

**The honest part**, which most coverage skips: this took a long time and did not go smoothly. The rebrand launched in August 2024. Exchange migrations from DAI to USDS only completed in April and May 2026, roughly twenty months later, and around $4.4 billion in legacy DAI remains on-chain. Through much of 2025 combined supply was flat and DAI was quietly growing again.

The lesson for anyone planning a protocol restructuring in 2027: the technical migration is the easy half.

## DeFi lending protocols: Aave's consolidation bet, now live

![Four pale blue half-circle and circle shapes arranged in a grid](/images/content/defi-protocol-trends-2027/defi-protocol-trends-2027-02-aave.png)

Aave is the clearest case of a protocol winning by scale and then integrating vertically. It holds roughly 59% of DeFi lending market share and around 52% of all DeFi lending fees, on figures self-reported by founder Stani Kulechov in the "Aave Will Win: 2026 Master Plan" published in December 2025. Cumulative deposits processed exceed $3.33 trillion, and 2025 protocol fee revenue reached $885 million on the same source.

Two things define Aave's position heading into 2027.

**Aave V4 shipped.** It replaces fragmented per-chain liquidity pools with a Hub-and-Spoke model, Core, Plus and Prime liquidity hubs per chain, each aggregating assets, with isolated Spoke markets drawing from shared liquidity. After launching on testnet in 2025, V4 went live on Ethereum mainnet on 30 March 2026 and expanded to Avalanche on 15 July 2026, its first move beyond Ethereum. By September 2026 the protocol was carrying $800 to $900 million in deposits across eleven live spokes, roughly doubling from August. Six months of real usage is now the relevant evidence, not a testnet date.

Buried in the V4 spec is a change that matters more than the headline architecture: V4 adopts the ERC-4626 vault standard, eliminating the rebasing behaviour of current aTokens. Rebasing tokens are an accounting nuisance for integrators, auditors and tax tooling. Removing them is an institutional change disguised as a technical one, and it is the sort of detail that determines whether a regulated counterparty can use your protocol at all.

That six-month track record is worth pausing on, because it applies to your own roadmap too. A mainnet migration that ships is not the end of integration risk, it is the start of a different kind: watching whether the new hub-and-spoke routing changes settlement assumptions your own contracts made against V3. Teams that budget for [smart contract audit and blockchain security](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security) as a discovery activity rather than a pre-launch formality are the ones whose integration dates hold. Our [smart contract audit checklist](https://spacedev.io/blog/smart-contract-audit-checklist) covers what a serious review actually looks at.

**Horizon** is Aave's institutional RWA market, launched in August 2025 [in partnership with Circle, VanEck, Centrifuge and WisdomTree](https://www.fxstreet.com/cryptocurrencies/news/aave-launches-institutional-stablecoin-lending-platform-horizon-in-partnership-with-centrifuge-circle-others-202508272050). Qualified institutions post tokenised Treasuries and credit assets as collateral and borrow GHO or USDC against them. Net deposits stood around $580 million at the end of 2025, with a stated target above $1 billion for 2026.

Horizon's risk architecture points at where this is going: [Chaos Labs built Risk Oracles into Horizon's governance and execution layers](https://chaoslabs.xyz/posts/institutional-rwa-powering-risk-infrastructure-for-horizon), enabling automated adjustment of lending parameters based on real-time market conditions. Institutional DeFi is converging on automated, auditable risk management rather than governance votes.

## Vertical integration in DeFi: Frax's stablecoin operating system

Where Aave consolidates one market, Frax is building the whole system. The stated positioning shifted in 2026 from protocol to what the team calls a stablecoin operating system.

The mechanics: FXS was upgraded into a single ecosystem token, FRAX, between December 2025 and January 2026, with [Binance and Bybit handling the migration](https://messari.io/project/frax-finance). FRAX is the gas token on Fraxtal, Frax's own chain. FraxNet, an on-chain money account platform with KYC/KYB and real-time settlement, went live multichain via LayerZero in October 2025 for US users outside New York and Alaska.

The most interesting piece technically is **frxUSD ReserveLink**, launched on Aave [on 9 June 2026](https://messari.io/project/frax-finance). It routes a portion of the yield generated by frxUSD's tokenised Treasury reserves back into the Aave market as incentives for frxUSD suppliers, creating a yield floor even when borrowing demand is weak. It is the first integration of that model with a major lending protocol, and a good example of what vertical integration actually buys you: control over your own yield distribution.

Frax also went after non-dollar stablecoins, launching on-chain FX liquidity pools with Polygon Labs and Curve in April 2026 using frxUSD as the base pair. That is an underexplored corner of the market and worth watching.

The strategic question is unresolved. Aave's bet is that depth in one layer wins. Frax's bet is that owning the stack wins. Both cannot be right.

## Synthetic yield protocols: what Ethena taught the market about TVL

![Earth seen from space at night, its outline glowing blue with city lights visible across the surface](/images/content/defi-protocol-trends-2027/defi-protocol-trends-2027-03-ethena.png)

This is the most valuable section in this article, because it is the one that costs money to learn.

Ethena's USDe peaked around $11.3 billion. It [stood at $3.9 billion on 31 July 2026](https://stablecoininsider.org/ethena-usde-q1-2026-report/), a contraction of roughly 65%.

The cause matters more than the number. [Over $4.2 billion of sUSDe had been locked in Pendle principal tokens and levered through loops on Aave](https://stablecoininsider.org/ethena-usde-q1-2026-report/), a strategy that accounted for roughly 60% of USDe's supply at peak. That was not user demand for a digital dollar. It was a carry trade. When funding conditions turned, the supply evaporated.

Two things are true simultaneously, and holding both is the point. The reflexive supply collapsed, and the underlying business generated real money. [Cumulative protocol fees exceeded $800 million and ecosystem rewards surpassed $750 million](https://stablecoininsider.org/ethena-usde-q1-2026-report/) since inception. Ethena also took its ecosystem public: StablecoinX began trading on Nasdaq in June 2026 holding roughly 3 billion ENA tokens, about 20% of supply.

**The transferable lesson:** supply and TVL figures can measure leverage rather than adoption. Before you treat a protocol's growth as validation, or build a dependency on it, work out what the capital is actually doing. If the answer is "farming a spread," that number can disappear in weeks. The mechanics of how those incentives are constructed are covered in [liquidity pools and yield farming](https://spacedev.io/blog/liquidity-pools-and-yield-farming-how-defi-incentive-mechanisms-work).

## Unbundled stablecoin issuance: the M0 model

M0 is infrastructure most end users will never see, and it may be the most structurally important protocol on this list.

The model: approved institutions mint a shared base token, $M, against high-quality collateral, then wrap it into their own branded stablecoins. It is primary-market plumbing, a clearing and settlement layer for organisations that want a dollar product without operating bank rails, custody and a smart contract stack from scratch. Founded by Luca Prosperi, formerly of MakerDAO, [M0 raised a $40 million Series B from Polychain and Ribbit Capital in August 2025](https://www.m0.org/press-releases/m0-raises-series-b-with-investment-from-polychain-and-ribbit-capital-bringing-total-funding-to-100m), taking total funding to $100 million.

The customer list is the argument: MetaMask's mUSD, the first stablecoin from a self-custodial wallet, plus Noble's USDN, Usual's USD0, the KAST neobank platform operating in 150+ countries, and Playtron's gaming dollar. Stripe and MoonPay also use it.

The signal that mattered most came on 30 April 2026, when [Anchorage Digital, the first federally chartered crypto bank in the US, adopted M0 as its core technology provider](https://www.coindesk.com/business/2026/04/30/regulated-crypto-custody-firm-anchorage-partners-with-stablecoin-tech-provider-m0) for institutional stablecoin issuance. On-chain M0 supply is [modest in absolute terms, a few hundred million against a market above $300 billion](https://www.coindesk.com/business/2026/04/30/regulated-crypto-custody-firm-anchorage-partners-with-stablecoin-tech-provider-m0), but the size is not the point. The architecture is.

Which brings us to the question we get asked most.

## Should you launch a stablecoin or integrate an existing one?

Every quarter, a client asks whether they should launch their own stablecoin. The tooling has made it dramatically easier: M0, Bridge, Brale and Anchorage have all built businesses on making issuance accessible. Easier is not the same as advisable.

> "Integrate before you issue. Joining an existing network means joining liquidity that already exists. Launching your own means taking on financial, operational and regulatory risk that, for most companies, outweighs the upside."
>
> Federico Sendra, Co-founder & CEO, SpaceDev

That is the default, and it is deliberately against our own short-term commercial interest, since issuance is a bigger engagement than integration.

The cases where issuing genuinely makes sense share a pattern: you control meaningful distribution, you need the token to do something a general-purpose stablecoin cannot, and you can absorb ongoing reserve, attestation and redemption obligations as a permanent operating cost rather than a launch project. MetaMask qualifies on distribution. A gaming platform needing programmable in-economy behaviour qualifies on function. Most fintechs asking the question qualify on neither.

The failure mode is predictable: a branded token with no liquidity, no secondary market, and a compliance burden that arrives every single month for as long as the token exists.

This is exactly the question a [product discovery engagement](https://spacedev.io/product-discovery) is designed to close before anyone writes code.

## Unified liquidity: DeFi's fragmentation problem

Perena exists because of a second-order effect of everything above. As issuance gets easier, stablecoins proliferate, and each new one fights for liquidity in isolation. That is a coordination problem, and it gets worse the better the issuance tooling gets.

Perena's answer on Solana is a hub-and-spoke AMM called Numéraire: a Seed Pool of USDC, USDT and PYUSD whose LP token, USD*, serves as the hub, with Growth Pools pairing new stablecoins 50/50 against USD*. It was [the first stableswap to natively incorporate Solana Interest Bearing Tokens](https://solanacompass.com/projects/perena).

**Be clear about scale here.** Perena launched on Solana mainnet in December 2024 and had accumulated [roughly $1.98 billion in cumulative swap volume across 3.06 million swaps by July 2025, with TVL peaking around $24.7 million](https://solanacompass.com/projects/perena). Those are small numbers. It raised roughly $3 million pre-seed led by Borderless Capital, with Binance Labs and both Solana co-founders participating.

We include it not because of its size but because it names a problem that gets structurally worse as the rest of this stack succeeds. If you are launching a token, liquidity fragmentation is your problem whether or not Perena is the answer to it.

## Agentic execution: when DeFi users stop signing transactions

![Two stacked diamond shapes with a gap of empty space between them](/images/content/defi-protocol-trends-2027/defi-protocol-trends-2027-04-axal.png)

The last layer is the one where the user stops being the person who signs.

Axal's Autopilot lets users set risk parameters and delegate rebalancing, yield harvesting, stop losses and index construction to agents, with chain abstraction across Arbitrum, Optimism, Base, Avalanche, Polygon, BSC and Solana. Users can onboard with an email address, which tells you the target is not the crypto-native.

The technically interesting piece is the execution model: rather than routing directly to AMMs, [Autopilot runs competitive agentic auctions where solvers bid to execute](https://www.quicknode.com/blog/feature-fridays-axal), an intent-based architecture aimed at better pricing and faster settlement. The company [raised a $2.5 million pre-seed round in October 2024 led by CMT Digital](https://siliconangle.com/2024/10/31/blockchain-firm-axal-nabs-2-5m-build-verifiable-autonomous-agent-network/) and came out of a16z's Crypto Startup School.

The broader context: autonomous wallets became a defining trend of Q1 2026, with [Coinbase launching Payments MCP to give agents direct on-chain rails](https://www.dlnews.com/articles/defi/what-defi-protocols-expect-in-2026/). The infrastructure implication that nobody discusses is load. Agents generate RPC calls at machine speed, orders of magnitude beyond human users, which changes your infrastructure requirements before it changes anything else.

We have built in this direction: [Byrrgis](https://spacedev.io/our-work/byrrgis) is a non-custodial multi-chain trading terminal executing swaps across Solana, Ethereum and BNB Chain in one signature, with gas payable in any major token. The engineering problem in agentic execution is not the agent, it is single-signature cross-chain execution underneath it, and that work is the same work.

## Cross-cutting DeFi protocol trends heading into 2027

**Fee switches went mainstream.** Uniswap activated its through the UNIfication proposal on Christmas Day 2025: protocol fees now flow to a token jar and UNI holders burn tokens to withdraw their proportional share, alongside [an annual growth budget of 20 million UNI distributed quarterly from 1 January 2026](https://www.dlnews.com/articles/defi/what-defi-protocols-expect-in-2026/). Aave runs a $1 million weekly buyback with repurchased tokens going to stakers. Sky reports revenue formally.

**Decentralisation theatre is ending.** With US regulators taking a lighter approach, protocols increasingly behave like ordinary software companies. [Uniswap dissolved its US foundation](https://www.dlnews.com/articles/defi/what-defi-protocols-expect-in-2026/), and the line between DAO, labs and foundation is blurring further. Aave's governance framework routes 100% of revenue from Aave-branded products to the DAO treasury rather than the development company.

**RWAs became collateral, not product.** Horizon is the pure expression: the tokenised asset is not bought to hold, it is posted to borrow against.

**Compliance moved into the protocol.** Optional KYC for institutional users, automated risk oracles, permissioned collateral with permissionless liquidity access. Building for that pattern is a distinct discipline, covered in [Web3 compliance development](https://spacedev.io/blockchain-development-services/industry/compliance-web3).

**Integration risk is now a scheduling risk.**

> "Early-stage protocols ship breaking changes. That's not a criticism, it's a scheduling reality. If you don't have a direct line to the protocol team, you will get stuck."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

This is the single most common cause of slipped timelines in protocol integration work, and it never appears in a vendor's documentation. Budget for it, and establish the communication channel before you write the first line of code.

## What changed in two years

> "Two years ago most of our early conversations were about untangling legal and regulatory questions. That's largely solved now. Two years ago account abstraction was something we were experimenting with. Today it's a requirement, you can't serve non-crypto users without it."
>
> Juan Manuel Sobral, Co-founder & CTO, SpaceDev

Both halves matter for planning. The regulatory friction that used to dominate scoping conversations has receded into a known, if fragmented, set of requirements. And a capability that was optional in 2024 is now table stakes: if your product expects users to manage seed phrases and hold a volatile gas token, you have excluded everyone outside the existing crypto population.

## DeFi protocol trends to watch in 2027

Concrete and falsifiable, so you can check whether this analysis held up:

- Whether Aave V4's hub-and-spoke deposits keep compounding past the $900 million mark, or growth plateaus once the migration wave from V3 is done
- Whether Horizon reaches its $1 billion net deposit target
- Whether USDe supply stabilises or continues contracting
- Whether M0 adds more regulated issuers following Anchorage
- Whether any Star in the Sky ecosystem beyond Spark reaches meaningful scale
- Whether agentic execution moves beyond retail portfolio management into institutional flow

## Frequently asked questions

### What are the main DeFi protocol trends in 2027?

Protocols generating and distributing real revenue through fee switches and buybacks; the stack unbundling into specialised layers for issuance, credit, liquidity and execution; real-world assets used as collateral rather than sold as product; and compliance features moving into the protocol layer.

### Which DeFi protocols generate actual revenue?

Aave reported $885 million in 2025 protocol fees and runs a weekly buyback. Sky posted $123.79 million in gross revenue in Q1 2026. Uniswap activated its fee switch in December 2025. Ethena has generated over $800 million in cumulative fees.

### What is Aave V4 and has it launched?

A Hub-and-Spoke architecture replacing per-chain liquidity pools with Core, Plus and Prime liquidity hubs plus isolated spoke markets, built on the ERC-4626 vault standard. It launched on Ethereum mainnet on 30 March 2026 and expanded to Avalanche in July 2026. By September 2026 it was carrying $800 to $900 million in deposits across eleven spokes.

### What happened to MakerDAO?

It rebranded to Sky in August 2024, migrating DAI to USDS and MKR to SKY, and restructured into semi-independent SubDAOs called Stars. Exchange migrations completed in April and May 2026; roughly $4.4 billion in legacy DAI remains on-chain.

### Why did Ethena's USDe supply fall?

Roughly 60% of supply at peak was locked in leveraged loops through Pendle and Aave rather than held as user demand. When funding conditions turned, that supply unwound. USDe fell from around $11.3 billion to $3.9 billion by 31 July 2026.

### Should I launch my own stablecoin or integrate an existing one?

Integrate, in most cases. Joining an existing network means joining existing liquidity. Issuing makes sense when you control meaningful distribution, need behaviour a general-purpose stablecoin cannot provide, and can absorb reserve, attestation and redemption obligations as permanent operating costs.

### What is M0?

An on-chain stablecoin issuance protocol where approved institutions mint a shared base token, $M, against high-quality collateral and wrap it into branded stablecoins. Used by MetaMask, Noble, Usual, KAST, Stripe and MoonPay, and adopted by Anchorage Digital in April 2026.

## Scoping a DeFi integration for 2027

If you are planning to build on any of these layers, the practical questions are the same ones this article keeps returning to: which layer are you actually buying, what does the capital in it represent, and how much schedule risk does your dependency carry.

SpaceDev has been shipping blockchain systems since 2018, across [stablecoin and fintech infrastructure](https://spacedev.io/blockchain-development-services/industry/finance-and-fintech/stablecoins), [asset tokenization](https://spacedev.io/blockchain-development-services/asset-tokenization) and [smart contract development](https://spacedev.io/blockchain-development-services/smart-contract-development), with security handled in-house through [BlockAudit](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security). If you want a second opinion on a protocol dependency before it becomes a dependency, [talk to our team](https://spacedev.io/contact).
