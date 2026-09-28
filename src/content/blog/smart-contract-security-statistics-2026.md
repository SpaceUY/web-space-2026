---
title: "Smart Contract Security Statistics 2026: Hacks, Losses and Root Causes"
description: "Crypto hack and smart contract security statistics for 2025 and 2026, sourced from TRM Labs, CertiK, Chainalysis, Immunefi, Hacken, the FBI and academic research. Every figure is linked to its original publisher and updated quarterly."
publishedAt: 2026-09-28
author: juan-manuel-sobral
category: "Blockchain Trends"
tags: ["smart-contracts", "defi"]
readTime: 25
cover: "/images/content/smart-contract-security-statistics-2026/cover.png"
metatitle: "Smart Contract Security Statistics 2026: Hacks and Losses"
metadescription: "Verified 2025 and 2026 crypto hack statistics from TRM Labs, CertiK, Chainalysis, Immunefi and the FBI: losses, root causes, largest hacks and audit data."
takeaways:
  - "Trackers put 2025 crypto theft between $2.87 billion (TRM Labs, hacks only) and more than $4 billion (Hacken). The single largest loss was Bybit, at roughly $1.5 billion."
  - "Code is the most frequent attack, not the most expensive. In 2025, code exploits were 52 incidents and 12.1% of stolen value, while infrastructure attacks were 45 incidents and 76% (TRM Labs)."
  - "In Q2 2026, smart contract bugs were 44 of 67 incidents but only about 11% of losses (Hacken)."
  - "Inside DeFi the picture flips: 89% of DeFi protocol losses in 2025 came from protocol logic exploits (Immunefi)."
  - "H1 2026 set a record of 207 hacks, yet $972 million was stolen, less than half of H1 2025's $2.3 billion (TRM Labs)."
  - "Excluding Bybit, H1 2026 losses were roughly 28% higher than H1 2025 on a comparable basis (CertiK)."
  - "North Korea-linked actors stole $1.92 billion in 2025 (TRM Labs), and crypto heists were about one third of North Korea's foreign currency revenue in 2024 (MSMT)."
  - "Among exploited protocols with a known audit history, 67.6% of attack paths were outside every public audit scope, accounting for 94.4% of the loss (ack3 H1 2026 dataset)."
  - "Resolv Labs had 18 audits and still lost $25 million to a key compromise in Q1 2026 (Hacken)."
  - "Audits by top-tier firms and bug bounty programs are associated with fewer breaches. Audits on average are not (Wharton working paper)."
  - "Attackers are returning to old code: a growing share of exploited contracts are more than one year old (CertiK)."
  - "The median hacked token loses 61% of its value within six months (Immunefi)."
faqs:
  - question: "How much crypto was stolen in hacks in 2025?"
    answer: "Between $2.87 billion and more than $4 billion, depending on the tracker. TRM Labs counts $2.87 billion across nearly 150 hacks, CertiK $3.35 billion including scams and phishing, Chainalysis over $3.4 billion through early December, and Hacken more than $4 billion. Bybit's roughly $1.5 billion loss accounts for a large share of every total."
  - question: "How much crypto has been stolen in 2026?"
    answer: "TRM Labs recorded $972 million stolen across a record 207 hacks in the first half of 2026. CertiK, which also counts scams and phishing, recorded over $1.31 billion across 344 incidents. Several large incidents followed in the third quarter, including Tectonic on Cronos in August and Bitget in September."
  - question: "What is the most common cause of crypto hacks?"
    answer: "Smart contract bugs are the most frequent type of incident, but compromised keys, signers and infrastructure cause most of the losses. TRM Labs found infrastructure attacks drove 76% of 2025 losses, and Hacken found operational and infrastructure failures caused 88.3% of stolen value in Q2 2026."
  - question: "What are the most common smart contract vulnerabilities?"
    answer: "The OWASP Smart Contract Top 10 (2026 edition) ranks Access Control Vulnerabilities first, followed by Business Logic Vulnerabilities and Price Oracle Manipulation. The ranking is based mainly on a practitioner survey, validated against 122 smart contract incidents from 2025."
  - question: "Do smart contract audits prevent hacks?"
    answer: "Not on their own. A Wharton working paper found that audits on average do not reduce the likelihood of future breaches, but audits by top-tier auditors and bug bounty programs are associated with fewer breaches and lower losses. Most exploits of audited protocols target code or systems the audit never covered."
  - question: "What was the largest crypto hack ever?"
    answer: "The Bybit hack of 21 February 2025, in which about $1.5 billion in virtual assets was stolen. The FBI attributed it to North Korea. Elliptic called it the largest crypto theft of all time, far above the $611 million taken from Poly Network in 2021."
---

This page tracks smart contract and crypto security statistics for 2025 and 2026 from the organisations that produce them: blockchain analytics firms, Web3 security firms, government agencies and academic researchers. Every figure links to its original source, and the complete source list is at the end of the page.

Read together, the data tells one story more clearly than any single number. Attacks on smart contract code are more frequent than ever, but most of the money now leaves through everything around the code: signing keys, admin permissions, front-ends, bridge verifiers and the people who operate them. A protocol that treats security as a one-time code review is protecting the smaller part of its risk.

**Data as of 28 September 2026.** We update this page every quarter. Trackers measure different things, so the same period can have very different totals. Each number is labelled with who counted it and what they included.

## How much crypto was stolen in hacks in 2025?

<div class="sd-stat-grid"><div class="sd-stat"><div class="sd-stat-value">$2.87B</div><div class="sd-stat-label">Stolen in nearly 150 hacks and exploits</div><div class="sd-stat-source"><a href="https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report">TRM Labs, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">$3.35B</div><div class="sd-stat-label">Lost to hacks, scams and exploits, including phishing</div><div class="sd-stat-source"><a href="https://www.certik.com/blog/hack3d-the-web3-security-report-2025">CertiK, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">$4B+</div><div class="sd-stat-label">Lost to Web3 incidents</div><div class="sd-stat-source"><a href="https://hacken.io/insights/2025-security-report/">Hacken, 2025</a></div></div></div>

Between $2.87 billion and more than $4 billion was stolen from the crypto ecosystem in 2025, depending on the tracker. The spread comes from what each firm counts: some track only hacks and exploits, others add scams, phishing and personal wallet thefts.

| Source | 2025 total | What it counts |
|---|---|---|
| [TRM Labs](https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report) | $2.87 billion across nearly 150 hacks | Hacks and exploits, full year |
| [SlowMist](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf) | ~$2.935 billion across 200 incidents | Its SlowMist Hacked archive, excluding individual user losses |
| [CertiK](https://www.certik.com/blog/hack3d-the-web3-security-report-2025) | $3,352,850,816 | Hacks, scams and exploits, including phishing |
| [Chainalysis](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/) | Over $3.4 billion | Services and individuals, January to early December |
| [Immunefi](https://immunefi.com/blog/research/93-of-critical-crypto-vulns-are-disclosed-on-immunefi/) | $3.4 billion (a 2.8% loss rate) | All losses, headline view |
| [Hacken](https://hacken.io/insights/2025-security-report/) | More than $4 billion | Web3 incidents |

### Fewer incidents, much bigger losses

Every tracker that compares 2025 with 2024 sees the same shift: the number of incidents fell while the money lost rose. [SlowMist](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf) counted 200 incidents in 2025 against 410 in 2024, while losses grew by approximately 46%, from around $2.013 billion to $2.935 billion. [CertiK](https://www.certik.com/blog/hack3d-the-web3-security-report-2025) recorded $3,352,850,816 against $2,446,285,251 in 2024, with the average amount lost per hack rising 66.64% to $5,321,935 while the median fell 35.75% to $103,996.

A rising average with a falling median means the distribution stretched at both ends: many small incidents, and a few very large ones. [Chainalysis](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/) puts it starkly: "the ratio between the largest hack and median of all incidents has crossed the 1,000x threshold for the first time." According to [TRM Labs](https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report), just five events accounted for 70% of all stolen value in 2025, and Chainalysis found the top three hacks made up 69% of losses from services.

The largest of those events was Bybit. The February 2025 breach alone was $1.46 billion, or 51% of TRM Labs' annual figure, and TRM notes that "Even excluding Bybit, 2025 losses would have totaled USD 1.4 billion". The worst quarter of the year was the one that contained it: [CertiK](https://www.certik.com/blog/hack3d-the-web3-security-report-2025) recorded $1,671,644,949 stolen across 200 incidents in Q1 2025.

### Individuals and DeFi protocols

Thefts from individuals moved in the opposite direction to their count. [Chainalysis](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/) counted 158,000 personal wallet compromises in 2025, nearly triple the 54,000 of 2022, affecting at least 80,000 unique victims. Yet the value stolen from individuals fell from $1.5 billion in 2024 to $713 million.

DeFi protocols, the part of the market built on smart contracts, look very different from the headline. [Immunefi](https://immunefi.com/blog/research/the-ecosystem-vulnerability-scoreboard-6-years-of-defi-loss-data/) puts 2025 DeFi protocol losses at $680 million, far below the 2022 peak of $2.62 billion, with the median loss per incident down from $6 million in 2022 to $1.5 million. [SlowMist](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf) arrives at a similar figure from a different dataset: 126 DeFi incidents with around $649 million in losses, down from 339 incidents and about $1.029 billion in 2024. Centralised exchanges suffered only 22 incidents, but lost $1.809 billion.

<div class="sd-callout"><div class="sd-callout-title">What this means</div><p>Annual totals are a poor guide to the risk facing any single protocol. When one incident accounts for about half of a year's losses, a rise or fall mostly reflects whether a Bybit-scale event happened.</p><p>The more useful signals are the median and the split by target. Both point the same way: DeFi code losses are well below their 2022 peak, while a small number of operational failures at large custodians drive the totals.</p></div>

## How much crypto has been stolen in 2026 so far?

<div class="sd-stat-grid"><div class="sd-stat"><div class="sd-stat-value">207</div><div class="sd-stat-label">Hacks in H1 2026, the most TRM Labs has recorded in any six month period</div><div class="sd-stat-source"><a href="https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion">TRM Labs, H1 2026</a></div></div><div class="sd-stat"><div class="sd-stat-value">$972M</div><div class="sd-stat-label">Stolen in H1 2026, less than half of H1 2025</div><div class="sd-stat-source"><a href="https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion">TRM Labs, H1 2026</a></div></div><div class="sd-stat"><div class="sd-stat-value">+28%</div><div class="sd-stat-label">H1 2026 losses against H1 2025 once Bybit is excluded</div><div class="sd-stat-source"><a href="https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report">CertiK, H1 2026</a></div></div></div>

[TRM Labs](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion) recorded $972 million stolen across 207 hacks in the first half of 2026. That is more than double the 83 hacks of H1 2025, but less than half of the $2.3 billion stolen in that period.

![Bar chart comparing the first half of 2025 and 2026: hack count more than doubled while value stolen fell by more than half](/images/content/smart-contract-security-statistics-2026/smart-contract-security-statistics-2026-01-h1-comparison.png)

| Period | Value stolen | Incidents | Source |
|---|---|---|---|
| H1 2025 | $2.3 billion | 83 hacks | [TRM Labs](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion) |
| H1 2026 | $972 million | 207 hacks | [TRM Labs](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion) |
| H1 2025 | $2,473,576,952 | 345 | [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) |
| H1 2026 | Over $1.31 billion ($1,200,364,925 after funds frozen or returned) | 344 | [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) |

The drop is mostly an effect of Bybit. [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) calculates that without it, H1 2026 is worse than H1 2025, not better:

> "Adjusted for that outlier, losses in H1 2026 are approximately 28% higher on a comparable basis. The underlying security environment has not improved."

### Quarter by quarter

[Hacken](https://assets.hacken.io/q2-2026-security-report.pdf) publishes quarterly figures. Q2 2026 losses rose 58.3% over Q1, and according to Hacken, "Two DPRK-associated attacks alone accounted for three-quarters of the total loss."

| Quarter | Value stolen | Source |
|---|---|---|
| Q1 2025 | $2.06 billion | [Hacken Q1 2026 report](https://assets.hacken.io/assets/q1-2026-security-report.pdf) |
| Q2 2025 | $1.03 billion | [Hacken Q2 2026 report](https://assets.hacken.io/q2-2026-security-report.pdf) |
| Q4 2025 | $399.3 million | [Hacken Q1 2026 report](https://assets.hacken.io/assets/q1-2026-security-report.pdf) |
| Q1 2026 | $482.6 million across 44 incidents | [Hacken Q1 2026 report](https://assets.hacken.io/assets/q1-2026-security-report.pdf) |
| Q2 2026 | ~$763,971,791 across 67 incidents | [Hacken Q2 2026 report](https://assets.hacken.io/q2-2026-security-report.pdf) |

Hacken did not publish a standalone Q3 2025 figure.

### Smaller hacks, sharper phishing

The typical hack got smaller. The median H1 2026 hack cost about $219,000 and the mean $4.7 million, according to [TRM Labs](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion), which also recorded a quarterly record of 123 incidents in Q2 2026. [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) puts the H1 median at $138,703 and the average at $3,824,641. Losses concentrated in April, when KelpDAO ($291 million) and Drift ($285 million) together accounted for nearly 44% of all H1 losses (CertiK).

Phishing changed shape. [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) counted 63 phishing incidents in H1 2026 against 132 in H1 2025, a 52.3% drop, yet losses fell by only 10.8%, "reflecting a significant shift toward fewer, higher-value attacks." In Q1 2026, phishing and social engineering caused $306 million, or 63.4% of all losses, driven by a single $282 million hardware wallet scam and a $24 million address poisoning theft ([Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf)). The year also started fast: [Elliptic](https://www.elliptic.co/insights/bybit-exploit-12-months-on-the-dprk-threat-continues/) recorded twice as many exploits in January 2026 as in January 2025.

<div class="sd-callout"><div class="sd-callout-title">What this means</div><p>2026 looks calmer than 2025 only because 2025 contained Bybit. Incident counts set records, and the largest losses came from a few precise, well-resourced operations rather than broad campaigns.</p><p>For a protocol team, the practical reading is that the chance of being targeted went up, while the typical attack got smaller. Both the long tail of small exploits and the handful of large operational attacks need a plan.</p></div>

## What were the largest crypto hacks of 2025 and 2026?

Bybit, at about $1.5 billion, remains the largest crypto theft on record. [Elliptic](https://www.elliptic.co/blog/bybit-hack-largest-in-history) notes it dwarfs the previous record, the $611 million stolen from Poly Network in 2021. Of the largest incidents since January 2025, only three were attacks on smart contract code or protocol logic: Cetus, Balancer and Tectonic.

![Timeline of the largest crypto hacks from January 2025 to September 2026, highlighting the three attacks on smart contract code or protocol logic](/images/content/smart-contract-security-statistics-2026/smart-contract-security-statistics-2026-02-timeline.png)

| Date | Target | Loss | What happened |
|---|---|---|---|
| 23 Jan 2025 | Phemex (exchange) | ~$73 million across sixteen blockchains | Unusual activity in its hot wallet, detected by [Phemex](https://phemex.com/announcements/phemex-hot-wallet-security-incident-update-and-timeline). Loss estimate from [Halborn](https://www.halborn.com/blog/post/explained-the-phemex-hack-january-2025) |
| 21 Feb 2025 | Bybit (exchange) | ~$1.5 billion | Front-end manipulation of Safe{Wallet}, [attributed by the FBI](https://www.ic3.gov/psa/2025/psa250226) to North Korea |
| 22 May 2025 | Cetus (Sui) | ~$223 million | **Code bug.** A flawed overflow guard in `checked_shlw()`, in an open source library Cetus depended on ([BlockSec](https://blocksec.com/blog/cetus-incident-one-unchecked-shift-drains-223m-largest)). About $162 million was frozen on Sui ([Cyfrin](https://www.cyfrin.io/blog/inside-the-223m-cetus-exploit-root-cause-and-impact-analysis)) |
| 18 Jun 2025 | Nobitex (exchange, Iran) | Over $90 million | Claimed by a pro-Israel group, which burned the funds rather than taking them ([Elliptic](https://www.elliptic.co/insights/iranian-crypto-exchange-nobitex-hacked-pro-israel-group/)) |
| 3 Nov 2025 | Balancer V2 | $121.1 million in total losses | **Code bug.** Incorrect rounding in the "exact out" swap path for Stable Pools. $45.7 million was protected or recovered ([Balancer](https://medium.com/balancer-protocol/nov-3-exploit-post-mortem-51dcbeb6b020)) |
| 10 Jan 2026 | An individual | Over $282 million in LTC and BTC | Hardware wallet social engineering scam ([ZachXBT](https://x.com/zachxbt/status/2012212936735912351), [Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf)) |
| Q1 2026 | Step Finance | $40 million | Linked to North Korean actors ([Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf)) |
| Q1 2026 | Resolv Labs | $25 million | Key compromise that minted 80 million unbacked stablecoin tokens. The protocol had 18 audits ([Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf)) |
| 1 Apr 2026 | Drift Protocol (Solana) | ~$295 million per Drift | Takeover of the Security Council's administrative powers using durable nonces ([Drift](https://www.drift.trade/updates/recovery-plan-for-affected-users)) |
| 18 Apr 2026 | KelpDAO (rsETH bridge) | 116,500 rsETH, ~$292 million | Compromise of the bridge's verification layer, root cause disputed ([LayerZero](https://layerzero.network/blog/layerzero-labs-kelpdao-incident-report), [Kelp](https://x.com/KelpDAO/status/2051755467328913637)) |
| 30 Jul 2026 | Coldcard (hardware wallets) | ~$70.2 million (1,082.65 BTC) | A firmware bug that weakened seed generation ([Coinkite](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/), [Galaxy Research](https://x.com/glxyresearch/status/2083181683067506899)) |
| 30 Aug 2026 | Tectonic (Cronos) | ~$120.4 million borrowed | **Protocol logic.** Collateral price manipulated against thin liquidity, then reversed by a chain restoration ([Cronos](https://x.com/CronosNetwork/status/2097131718948094299)) |
| 24 Sep 2026 | Bitget (exchange) | Over $350 million | Unauthorised transfers from hot wallets. Elliptic calls a North Korean link "highly likely" ([Elliptic](https://www.elliptic.co/insights/bitget-attack-pushes-suspected-north-korea-crypto-heists-over-1-billion-in-2026/)). Still under investigation |

### Four patterns behind the biggest losses

**The weakest link was often someone else's system.** The attack on Bybit did not go through a flaw in its contract. According to the [Multilateral Sanctions Monitoring Team](https://msmt.info/view/save/2025/10/22/26294780-c396-407d-bb33-88afe988cd96-The_DPRK%E2%80%99s_Violation_and_Evasion_of_UN_Sanctions_through_Cyber_and_Information_Technology_Worker_Activities_(MSMT_2025_2).pdf), North Korean actors sent a Safe{Wallet} developer malicious code disguised as a pre-employment test, used the access to reach the company's AWS account, and injected malicious JavaScript into Safe{Wallet}'s interface. Bybit's signers believed they were approving a routine internal transfer. They were in fact approving "a request to hand over control of Bybit's cold wallet smart contract." Cetus's bug sat in "a CLMM-dependent open source library" ([Cetus](https://medium.com/@CetusProtocol/cetus-relaunch-incoming-recovery-plan-and-the-road-ahead-9fc0f8bd5c41)). KelpDAO's loss ran through LayerZero's verification infrastructure.

**Configuration and admin powers decided the outcome.** LayerZero says an attacker "socially engineered a LayerZero Labs developer to harvest session keys," and that the impact "was made possible by the affected OApp's single-verifier configuration" ([LayerZero](https://layerzero.network/blog/layerzero-labs-kelpdao-incident-report)). Kelp disputes this, saying "it is clear that LayerZero's own infrastructure was exploited" ([Kelp](https://x.com/KelpDAO/status/2051755467328913637)). At Drift, the attacker took over the Security Council's administrative powers, and Drift's fix was structural: "Durable nonces will be disabled for all signers" ([Drift](https://www.drift.trade/updates/incident-recovery-update-april-16-2026-now)). At Resolv, a key compromise minted 80 million unbacked stablecoin tokens ([Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf)).

**Both code exploits on this list were math errors.** Cetus failed on an overflow check ([BlockSec](https://blocksec.com/blog/cetus-incident-one-unchecked-shift-drains-223m-largest)) and Balancer on rounding ([Balancer](https://medium.com/balancer-protocol/nov-3-exploit-post-mortem-51dcbeb6b020)). The 2026 edition of the OWASP Smart Contract Top 10 added Arithmetic Errors as a new category, alongside the existing Integer Overflow and Underflow (see below).

**Thin liquidity is an attack surface.** Tectonic's attacker did not need a bug in the lending logic. It was enough to inflate the price of a collateral token with little liquidity behind it, then borrow against it.

### When a blockchain rewinds: the Tectonic incident

According to the [Cronos post-mortem](https://x.com/CronosNetwork/status/2097131718948094299), on 30 August 2026 an attacker pushed the price of the TONIC token up against thin DEX liquidity, then borrowed $120.4 million across nine markets in a single transaction against the inflated collateral.

Validators halted the network at 14:32:47 UTC and restored the chain to block 90,896,188, the last block before the attack. The restoration reversed approximately $111.2 million. About $9.19 million, roughly 7.6% of the affected funds, left the network before the halt and has not been recovered.

The cost was finality, the guarantee that a confirmed transaction stays confirmed. The restoration discarded 1 hour 54 minutes of chain history, 10,961 blocks, and reversed every transaction in that window, whether or not it touched the exploit.

> "It was a hard decision, taken together with the validators, weighing the finality users expect from a chain against the funds at risk." (Cronos)

<div class="sd-callout"><div class="sd-callout-title">What this means</div><p>Of the incidents above, only two, Cetus and Balancer, came from bugs in contract code, and even Cetus's sat in a dependency. The rest started in the systems around the contracts: a wallet provider's front-end, a bridge's verifier setup, an admin multisig, a signing device, a collateral market with little liquidity.</p><p>A security review that stops at the contract boundary misses where most of these incidents began.</p></div>

## Do most crypto hacks come from smart contract bugs?

<div class="sd-stat-grid"><div class="sd-stat"><div class="sd-stat-value">76%</div><div class="sd-stat-label">Of 2025 stolen value came from infrastructure attacks, in 45 incidents</div><div class="sd-stat-source"><a href="https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report">TRM Labs, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">12.1%</div><div class="sd-stat-label">Came from code exploits, the most frequent category, in 52 incidents</div><div class="sd-stat-source"><a href="https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report">TRM Labs, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">89%</div><div class="sd-stat-label">Of DeFi protocol losses came from protocol logic exploits</div><div class="sd-stat-source"><a href="https://immunefi.com/blog/research/the-ecosystem-vulnerability-scoreboard-6-years-of-defi-loss-data/">Immunefi, 2025</a></div></div></div>

No. Smart contract bugs are the most frequent type of attack, but compromised keys, signers and infrastructure cause most of the money lost. Five independent trackers show the same pattern.

![Chart comparing share of incidents and share of value stolen by attack type in 2025: code exploits are the most frequent, infrastructure attacks cause most losses](/images/content/smart-contract-security-statistics-2026/smart-contract-security-statistics-2026-03-attack-types.png)

[TRM Labs](https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report) classifies every 2025 hack by attack type:

| Attack type | Incidents | Value stolen | Share of value | Average per incident |
|---|---|---|---|---|
| Infrastructure attacks (private keys, seed phrases, wallet infrastructure, privileged access, front-ends) | 45 | $2.2 billion | 76% | ~$48.5 million |
| Protocol attacks | 25 | $277 million | 9.6% | ~$11.1 million |
| Code exploits | 52 | $350 million | 12.1% | ~$6.7 million |

By TRM's own averages, an infrastructure attack took about $48.5 million per incident, against about $6.7 million for a code exploit. TRM Labs explains why the most capable attackers have moved:

> "[F]or top-tier adversaries, the highest ROI increasingly lies in compromising operational infrastructure (keys, signers, wallet orchestration) at centralized entities instead of discovering novel logic errors in smart contracts." (TRM Labs)

The pattern held into 2026. [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) recorded the following for H1 2026:

| Attack vector | Value stolen | Incidents |
|---|---|---|
| Wallet compromise | $444,531,691 | 33 |
| Phishing | $366,312,027 | 63 |
| Code vulnerability | $151,591,472 | 204, the most of any vector |

Three other trackers reach the same conclusion from different data. In Q2 2026, smart contract bugs were 44 of 67 incidents but about 11% of losses ($87.7 million), while operational and infrastructure failures caused 88.3% of stolen value, $674,866,100 across 21 incidents ([Hacken](https://assets.hacken.io/q2-2026-security-report.pdf)). In H1 2026, smart contract exploits were 125 of the 207 incidents, while infrastructure and operational compromises caused about 76% of funds stolen from about 15% of incidents ([TRM Labs](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion)). And across 2025, "just 0.66% of TVL was lost to smart contract and blockchain bugs," about $790 million of the $3.4 billion total ([Immunefi](https://immunefi.com/blog/research/93-of-critical-crypto-vulns-are-disclosed-on-immunefi/)). [SlowMist](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf) likewise found smart contract vulnerabilities to be the most common cause in 2025, with 56 incidents, ahead of account compromises, with 50. European regulators report that private key compromise accounts for "slightly above 50%" of crypto-asset thefts in DeFi ([EBA and ESMA](https://esma.europa.eu/sites/default/files/2025-01/ESMA75-453128700-1391_Joint_Report_on_recent_developments_in_crypto-assets__Art_142_MiCA_.pdf)).

### Why DeFi is the exception

For a DeFi protocol, the code is still the main risk. According to [Immunefi](https://immunefi.com/blog/research/the-ecosystem-vulnerability-scoreboard-6-years-of-defi-loss-data/), "89% of DeFi protocol losses came from protocol logic exploits" in 2025. The market-wide numbers are dominated by exchanges and custodians, which keep large balances behind keys and signers. A lending market, a DEX or a vault keeps its balances inside its own logic, so a flaw in that logic is a direct path to the funds.

### Old code is a growing target

Deployed contracts do not get safer with age. [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) reports that "A growing proportion of these targeted contracts are more than one year old, a pattern that suggests attackers are systematically revisiting legacy codebases." Smart contract losses are also rising again: [Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf) recorded a 213% increase in Q1 2026 compared with Q1 2025, to $86.2 million across 28 exploits.

For a technical look at how these bugs arise, see our guide to [smart contract security vulnerabilities and how to prevent them](https://spacedev.io/blog/smart-contract-security-how-vulnerabilities-happen-and-how-to-prevent-them).

<div class="sd-callout"><div class="sd-callout-title">What this means</div><p>Two statements are true at once. Across the whole market, keys, signers and infrastructure account for most of the money stolen, because that is where centralised custodians hold large balances. Inside a DeFi protocol, the contract logic is the vault, and logic exploits cause almost all losses.</p><p>A security plan has to cover both: the code, and the operational layer that can change it, upgrade it or sign on its behalf.</p></div>

## What are the most common smart contract vulnerabilities in 2026?

Access Control Vulnerabilities rank first in the [OWASP Smart Contract Top 10 (2026 edition)](https://scs.owasp.org/sctop10/), followed by Business Logic Vulnerabilities and Price Oracle Manipulation.

| Rank | OWASP 2026 category | 2025 rank |
|---|---|---|
| SC01 | Access Control Vulnerabilities | 1 |
| SC02 | Business Logic Vulnerabilities | 3 (as "Logic Errors") |
| SC03 | Price Oracle Manipulation | 2 |
| SC04 | Flash Loan-Facilitated Attacks | 7 |
| SC05 | Lack of Input Validation | 4 |
| SC06 | Unchecked External Calls | 6 |
| SC07 | Arithmetic Errors | New |
| SC08 | Reentrancy Attacks | 5 |
| SC09 | Integer Overflow and Underflow | 8 |
| SC10 | Proxy & Upgradeability Vulnerabilities | New |

The 2025 order comes from the [OWASP project page](https://owasp.org/www-project-smart-contract-top-10/). Insecure Randomness and Denial of Service were removed in 2026 ([OWASP methodology](https://scs.owasp.org/sctop10/methodology/)).

### What moved, and why it matters

The biggest climber is Flash Loan-Facilitated Attacks, from seventh to fourth. Business logic moved up to second, and in OWASP's incident data it is the most frequent category, with 58 incidents or 47.5% of the total ([OWASP data sources](https://scs.owasp.org/sctop10/data-sources/)). Reentrancy, one of the best-known bug classes, fell from fifth to eighth.

The two new categories reflect where recent exploits have come from. Arithmetic Errors, next to Integer Overflow and Underflow, covers the class of math flaws behind Cetus (an overflow check) and Balancer (rounding). Proxy & Upgradeability Vulnerabilities covers the mechanisms that let teams change a contract after deployment, a reminder that the power to upgrade a contract is part of its attack surface.

### How the ranking is built

The ranking is not a list of losses. OWASP's [methodology](https://scs.owasp.org/sctop10/methodology/) is based mainly on a practitioner survey, ordered by mean rank, and incident data is used to validate the order. For 2026 that data covers 122 unique protocols exploited in 2025, totalling $905.4 million, counting smart contract vectors only and excluding phishing, exchange infrastructure breaches, rug pulls and private key compromise ([OWASP data sources](https://scs.owasp.org/sctop10/data-sources/)). The 2025 edition was built on 149 incidents from 2024, documenting over $1.42 billion in losses ([OWASP](https://owasp.org/www-project-smart-contract-top-10/)).

OWASP's code-only total for 2025, $905.4 million, is close to Immunefi's code-only estimate of about $790 million. Both are well below a third of the headline totals at the top of this page.

## Do smart contract audits prevent exploits?

<div class="sd-stat-grid"><div class="sd-stat"><div class="sd-stat-value">67.6%</div><div class="sd-stat-label">Of attack paths on audited protocols were outside every public audit scope</div><div class="sd-stat-source"><a href="https://arxiv.org/abs/2608.13792">ack3 dataset, H1 2026</a></div></div><div class="sd-stat"><div class="sd-stat-value">94.4%</div><div class="sd-stat-label">Of the losses on those protocols came through the unaudited paths</div><div class="sd-stat-source"><a href="https://arxiv.org/abs/2608.13792">ack3 dataset, H1 2026</a></div></div><div class="sd-stat"><div class="sd-stat-value">18</div><div class="sd-stat-label">Audits at Resolv Labs before a $25 million key compromise</div><div class="sd-stat-source"><a href="https://assets.hacken.io/assets/q1-2026-security-report.pdf">Hacken, Q1 2026</a></div></div></div>

Not on their own. Research published in 2025 and 2026 finds that what protects a protocol is the quality of the audit, what it covers, and whether it keeps up with the code.

### Audit quality

A working paper by Landsman, Lyandres, Maydew, Rabetti and Zhang, "[Auditing Smart Contracts](https://accounting.wharton.upenn.edu/wp-content/uploads/2025/10/LandsmanLyandresMaydewRabettiZhang.pdf)," links thousands of audit reports to thousands of DeFi protocols launched between January 2020 and January 2025. Its central finding cuts both ways:

> "Our evidence reveals that, on average, audits do not reduce the likelihood of future security breaches. However, audits conducted by top-tier centralized auditors and decentralized auditors are associated with a lower likelihood of future breaches and losses conditioned on a breach occurring."

"Decentralized auditors" are bug bounty hunters. The authors also find that after a breach, developers often replace bottom-tier auditors with top-tier ones.

### Audit scope

The [ack3 H1 2026 DeFi Incident Dataset](https://arxiv.org/abs/2608.13792) (Gattermayer, Kalivoda and Bašović, arXiv preprint) examined 135 incidents. Audit history was identified for 68 of them. In that subset, attack paths outside every public audit scope represented 67.6% of incidents and 94.4% of reported losses. Most exploits of audited protocols did not defeat the audit. They went around it, through code or systems it never covered.

### Audited protocols still get hit

[Hacken](https://assets.hacken.io/assets/q1-2026-security-report.pdf) found that six of the 28 projects exploited through smart contract bugs in Q1 2026 had prior audits, including Venus Protocol (five audit firms), Solv Protocol (three firms) and Resolv Labs (18 audits). Those six lost $37.7 million, with a higher average loss ($6.3 million) than unaudited projects ($4.3 million). According to Hacken, several of the vulnerabilities exploited "fell outside the scope of traditional code reviews," including oracle manipulation, donation attacks on Compound-fork lending pools and off-chain infrastructure compromises. Its [Q2 2026 report](https://assets.hacken.io/q2-2026-security-report.pdf) goes further: "a prior audit, years of history, value locked, failed to predict who would be exploited."

### What audits rarely look at

In "[The Audit Gap in Blockchain Security](https://arxiv.org/abs/2606.15465)" (arXiv preprint, 218 incidents from January 2022 to March 2026), key compromise, phishing and social engineering account for approximately 49.6% of cumulative losses, yet represent "a negligible share of published audit findings." Half the losses come from a category that audit reports almost never address.

There is also evidence that audits help where they apply. The [EBA and ESMA](https://esma.europa.eu/sites/default/files/2025-01/ESMA75-453128700-1391_Joint_Report_on_recent_developments_in_crypto-assets__Art_142_MiCA_.pdf) observe that smart contract exploit losses have been falling since 2022, which "may suggest... improved smart contract security due to improved security audits."

<div class="sd-callout"><div class="sd-callout-title">What the research supports</div><p>A single, narrowly scoped audit of a contract that later changes offers limited protection. The evidence points to four practices instead.</p><p><strong>Work with experienced auditors.</strong> Audit quality, not the number of audits, is what the Wharton data associates with fewer breaches.</p><p><strong>Scope the whole system.</strong> Most losses on audited protocols came through paths the audit never covered, including key management, signing processes and off-chain infrastructure.</p><p><strong>Re-audit when the code changes.</strong> Attackers are revisiting contracts more than a year old.</p><p><strong>Keep a bug bounty running after launch.</strong> Bounty hunters are the other auditor type associated with fewer breaches.</p></div>

Our [smart contract audit checklist](https://spacedev.io/blog/smart-contract-audit-checklist) covers how to prepare a codebase for review.

### How many critical bugs are found before attackers find them?

Most of them. Across all known platforms, about 1,238 critical vulnerabilities have been responsibly disclosed against about 320 exploited on-chain, a ratio [Immunefi](https://immunefi.com/blog/research/93-of-critical-crypto-vulns-are-disclosed-on-immunefi/) describes as "close to 4-to-1 in favor of responsible disclosure." And 93.9% of Immunefi bug bounty programs active for five years or longer have logged at least one confirmed, paid critical vulnerability ([Immunefi](https://immunefi.com/blog/research/nearly-every-long-running-bug-bounty-program-on-immunefi-has-found-a-critical-bug/), 593 programs, January 2021 to February 2026). A long-running protocol will almost certainly contain a critical bug at some point. The question is who finds it first.

## How much of the stolen crypto is linked to North Korea?

<div class="sd-stat-grid"><div class="sd-stat"><div class="sd-stat-value">~1/3</div><div class="sd-stat-label">Of North Korea's foreign currency revenue in 2024 came from crypto heists</div><div class="sd-stat-source"><a href="https://msmt.info/view/save/2025/10/22/26294780-c396-407d-bb33-88afe988cd96-The_DPRK%E2%80%99s_Violation_and_Evasion_of_UN_Sanctions_through_Cyber_and_Information_Technology_Worker_Activities_(MSMT_2025_2).pdf">MSMT, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">$1.92B</div><div class="sd-stat-label">Attributed to North Korea-linked actors in 2025</div><div class="sd-stat-source"><a href="https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report">TRM Labs, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">$6.75B</div><div class="sd-stat-label">Lower-bound estimate of all crypto stolen by North Korea to date</div><div class="sd-stat-source"><a href="https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/">Chainalysis</a></div></div></div>

Most of it. [TRM Labs](https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report) attributes $1.92 billion of 2025's $2.87 billion to North Korea-linked actors, and approximately $643 million, or about 66%, of H1 2026 thefts ([TRM Labs](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion)).

### What governments report

The [FBI](https://www.ic3.gov/psa/2025/psa250226) stated that "North Korea was responsible for the theft of approximately $1.5 billion USD in virtual assets from cryptocurrency exchange, Bybit, on or about February 21, 2025." The [US Department of State](https://www.state.gov/releases/office-of-the-spokesperson/2026/01/the-democratic-peoples-republic-of-koreas-violations-and-evasions-of-un-sanctions-through-cyber-and-it-worker-activities/) puts North Korea's 2025 total at more than $2 billion. The [US Treasury](https://home.treasury.gov/news/press-releases/sb0302) says North Korea-affiliated cybercriminals stole over $3 billion over the past three years, "primarily in cryptocurrency."

The most detailed government account comes from the [Multilateral Sanctions Monitoring Team](https://msmt.info/view/save/2025/10/22/26294780-c396-407d-bb33-88afe988cd96-The_DPRK%E2%80%99s_Violation_and_Evasion_of_UN_Sanctions_through_Cyber_and_Information_Technology_Worker_Activities_(MSMT_2025_2).pdf), a group of 11 governments including the US, Japan, South Korea and the UK. It found North Korea stole at least $1.19 billion in 2024 and at least $1.645 billion from January to September 2025, and that crypto heists accounted for approximately one third of the country's total foreign currency revenue in 2024.

### What industry trackers report

[Chainalysis](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/) attributes at least $2.02 billion to North Korean hackers in 2025, a 51% increase year over year, with North Korean attacks accounting for a record 76% of all service compromises. The record came with 74% fewer known attacks, and stolen funds follow a structured laundering pathway of approximately 45 days. [Elliptic](https://www.elliptic.co/insights/north-korea-linked-hackers-have-already-stolen-over-2-billion-in-2025/) had counted over $2 billion by early October 2025, already the largest annual total on record, and noted that "The majority of the hacks in 2025 have been perpetrated through social engineering attacks." By late September 2026, Elliptic's tracked total for 2026 passed $1 billion across more than 51 incidents, including the suspected Bitget attack ([Elliptic](https://www.elliptic.co/insights/bitget-attack-pushes-suspected-north-korea-crypto-heists-over-1-billion-in-2026/)). [Hacken](https://hacken.io/insights/2025-security-report/) links 52% of all 2025 losses to North Korea.

<div class="sd-callout"><div class="sd-callout-title">What this means</div><p>The most active attacker in crypto is a state that depends on the proceeds. Its record year came with 74% fewer known attacks: fewer operations, each worth far more.</p><p>Its methods target people. At Bybit, the entry point was a fake job test sent to a developer at a third-party wallet provider. Teams should assume that anyone with signing authority, deployment access or admin rights will be targeted, through channels as ordinary as a job application.</p></div>

## Which blockchains lose the most to hacks?

Ethereum, in absolute terms. [CertiK](https://www.certik.com/blog/hack3d-the-web3-security-report-2025) recorded 310 incidents and $1,697,833,313 in losses on Ethereum in 2025, and 153 incidents and $522,814,367 in H1 2026 ([CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report)). Solana lost $315,069,960 in H1 2026, "driven primarily by the Drift Protocol exploit."

Adjusted for the value each chain holds, the gap disappears. [Immunefi](https://immunefi.com/blog/research/the-ecosystem-vulnerability-scoreboard-6-years-of-defi-loss-data/) finds that "the lowest-risk tier among major ecosystems in 2025 is Ethereum (~0.42%), Solana (~0.42%), and BNB Chain (~0.33%)." Ethereum loses more because it holds more.

Bridges, once the biggest problem in DeFi, went "from 73% of all losses in 2022 to 3% in 2025" in Immunefi's data. KelpDAO's April 2026 incident is a reminder that the category has not gone away.

## How much stolen crypto is recovered?

<div class="sd-stat-grid"><div class="sd-stat"><div class="sd-stat-value">13.2%</div><div class="sd-stat-label">Of 2025 losses were returned or frozen, nearly $387 million</div><div class="sd-stat-source"><a href="https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf">SlowMist, 2025</a></div></div><div class="sd-stat"><div class="sd-stat-value">61%</div><div class="sd-stat-label">Value lost by the median hacked token within six months</div><div class="sd-stat-source"><a href="https://immunefi.com/blog/research/what-an-onchain-hack-actually-costs-2024-2025-update/">Immunefi, 2024 to 2025</a></div></div></div>

Very little. [SlowMist](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf) found only 18 incidents in 2025 where funds could still be recovered or frozen after the attack. In those cases, nearly $387 million was returned or frozen, "accounting for 13.2% of the total losses in 2025." [CertiK](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report) recorded $115,311,507 frozen or returned in H1 2026.

### Who can stop the money

The largest recoveries of the period depended on someone with the power to intervene. At Tectonic, validators restored the chain and reversed about $111.2 million ([Cronos](https://x.com/CronosNetwork/status/2097131718948094299)). After Cetus, about $162 million was frozen on Sui ([Cyfrin](https://www.cyfrin.io/blog/inside-the-223m-cetus-exploit-root-cause-and-impact-analysis)), and validators representing 90.9% of stake voted "yes" in an onchain community vote to recover those funds ([Sui Foundation](https://blog.sui.io/cetus-incident-response-onchain-community-vote/)). After KelpDAO, the Arbitrum Security Council froze 30,766 ETH ([Chainalysis](https://www.chainalysis.com/blog/kelpdao-bridge-exploit-april-2026/)). After Drift, three transfers through Circle's CCTP were frozen, totalling approximately 3.36 million USDC ([Drift](https://www.drift.trade/updates/recovery-plan-for-affected-users)), and Tether was proposed to contribute up to $127.5 million to a user recovery pool ([Drift](https://www.drift.trade/updates/incident-recovery-update-april-16-2026-now)).

### Exploits are prosecuted as crimes

US prosecutors charge DeFi exploits as fraud and computer hacking. One defendant is charged with stealing approximately $65 million from KyberSwap and Indexed Finance, including $48.8 million from 77 KyberSwap liquidity pools on six public blockchains ([US Attorney, EDNY](https://www.justice.gov/usao-edny/pr/canadian-national-charged-stealing-approximately-65-million-cryptocurrency-two-defi)). In the Uranium Finance case, prosecutors allege an exploit across 26 separate liquidity pools obtained approximately $53.3 million, and law enforcement seized cryptocurrency worth approximately $31 million on 24 February 2025 ([US Attorney, SDNY](https://www.justice.gov/usao-sdny/pr/maryland-man-charged-defrauding-crypto-exchange-over-50-million-hacks)). Both cases are allegations. Separately, the FBI seized more than $15 million in USDT tied to North Korean heists ([Department of Justice](https://www.justice.gov/opa/pr/justice-department-announces-nationwide-actions-combat-illicit-north-korean-government)).

### The damage outlasts the hack

A hack keeps costing long after the funds leave. According to [Immunefi](https://immunefi.com/blog/research/what-an-onchain-hack-actually-costs-2024-2025-update/), "The median hacked token loses 61% of its value within six months," up from 53% in the 2021 to 2023 period, and 83.9% of hacked tokens were still in sustained price suppression six months after the exploit. The median hack in the same 2024 and 2025 data stole $2.2 million.

<div class="sd-callout"><div class="sd-callout-title">What this means</div><p>Recovery depends on centralised levers: validators, security councils, stablecoin issuers. That power saved hundreds of millions in this period, but it is also a point of trust, and the Tectonic restoration showed what using it can cost a chain.</p><p>For a protocol, the realistic assumption is that stolen funds will not come back, and that the token will keep paying for the incident for months.</p></div>

## How big are crypto bug bounty payouts?

Immunefi bug bounty programs have paid $107.3 million for confirmed critical vulnerabilities alone, with a median critical payout of $20,000 and a single award of $10 million ([Immunefi](https://immunefi.com/blog/research/nearly-every-long-running-bug-bounty-program-on-immunefi-has-found-a-critical-bug/)). In the first half of 2026, Immunefi paid researchers roughly $13.45 million for 837 valid bugs, lifetime payouts crossed $140 million, and registered researchers passed 92,000 ([Immunefi June 2026 ecosystem update](https://docs.immunefi.foundation/june-2026-immunefi-ecosystem-update/)).

Set against the cost of an exploit, the numbers are small. The median critical bounty is $20,000; the median hack in Immunefi's 2024 and 2025 data stole $2.2 million ([Immunefi](https://immunefi.com/blog/research/what-an-onchain-hack-actually-costs-2024-2025-update/)).

## What do the FBI's crypto crime figures measure?

Mostly fraud, not hacks. The [FBI's 2025 IC3 Annual Report](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf) counts any complaint where the "Information reported contains some reference to virtual currency," so its crypto total includes investment scams and extortion. It should not be added to the hack figures above.

In 2025, 181,565 complaints referenced cryptocurrency, a 21% increase, with $11.366 billion in reported losses and a $62,604 average loss. Cryptocurrency investment fraud was the highest source of financial losses to Americans, at $7.2 billion across 61,559 complaints, and 18,589 complainants lost more than $100,000. Personal data breaches with a cryptocurrency link, the category closest to account or wallet compromise, accounted for $939,398,686 across 13,486 complaints.

European regulators track DeFi hacks directly. The [EBA and ESMA](https://esma.europa.eu/sites/default/files/2025-01/ESMA75-453128700-1391_Joint_Report_on_recent_developments_in_crypto-assets__Art_142_MiCA_.pdf) counted 34 DeFi hacks exploiting smart contract vulnerabilities in 2024 (as of 18 October), with losses worth $346 million.

## Why do crypto hack statistics differ between sources?

Each tracker applies different rules, and knowing them is the only way to compare figures fairly.

**Scope.** [TRM Labs](https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report) counts hacks and exploits. [CertiK](https://www.certik.com/blog/hack3d-the-web3-security-report-2025) adds scams and phishing. [Chainalysis](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/) includes personal wallet thefts. [Immunefi](https://immunefi.com/blog/research/93-of-critical-crypto-vulns-are-disclosed-on-immunefi/) publishes both a headline total and a code-only figure. [OWASP](https://scs.owasp.org/sctop10/data-sources/) counts only smart contract vectors.

**Incident thresholds.** Counts for 2025 range from 97 incidents in one [Immunefi study](https://immunefi.com/blog/research/what-an-onchain-hack-actually-costs-2024-2025-update/) to nearly 150 at TRM Labs and 200 at SlowMist, because each firm sets its own inclusion rules.

**Chain attribution.** Immunefi counts a multi-chain incident in full on every chain involved. CertiK uses a separate multi-chain category.

**Valuation.** Most trackers value stolen assets at the time of the incident. [SlowMist](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf) notes that price moves, unreported cases and excluded individual losses mean real losses are "likely higher."

**Revisions.** Early figures change. [TRM Labs](https://www.trmlabs.com/resources/blog/north-korea-and-the-industrialization-of-cryptocurrency-theft) reported "more than USD 2.7 billion" for 2025 in December, then $2.87 billion in its annual report. Victims' own figures can also differ from analysts': Drift reports $295,426,725.97 ([Drift](https://www.drift.trade/updates/recovery-plan-for-affected-users)) against $285 million from Chainalysis and TRM Labs.

When you cite a number from this page, cite the tracker and period with it.

## Frequently asked questions

### How much crypto was stolen in hacks in 2025?

Between $2.87 billion and more than $4 billion, depending on the tracker. TRM Labs counts $2.87 billion across nearly 150 hacks, CertiK $3.35 billion including scams and phishing, Chainalysis over $3.4 billion through early December, and Hacken more than $4 billion. Bybit's roughly $1.5 billion loss accounts for a large share of every total.

### How much crypto has been stolen in 2026?

TRM Labs recorded $972 million stolen across a record 207 hacks in the first half of 2026. CertiK, which also counts scams and phishing, recorded over $1.31 billion across 344 incidents. Several large incidents followed in the third quarter, including Tectonic on Cronos in August and Bitget in September.

### What is the most common cause of crypto hacks?

Smart contract bugs are the most frequent type of incident, but compromised keys, signers and infrastructure cause most of the losses. TRM Labs found infrastructure attacks drove 76% of 2025 losses, and Hacken found operational and infrastructure failures caused 88.3% of stolen value in Q2 2026.

### What are the most common smart contract vulnerabilities?

The OWASP Smart Contract Top 10 (2026 edition) ranks Access Control Vulnerabilities first, followed by Business Logic Vulnerabilities and Price Oracle Manipulation. The ranking is based mainly on a practitioner survey, validated against 122 smart contract incidents from 2025.

### Do smart contract audits prevent hacks?

Not on their own. A Wharton working paper found that audits on average do not reduce the likelihood of future breaches, but audits by top-tier auditors and bug bounty programs are associated with fewer breaches and lower losses. Most exploits of audited protocols target code or systems the audit never covered.

### What was the largest crypto hack ever?

The Bybit hack of 21 February 2025, in which about $1.5 billion in virtual assets was stolen. The FBI attributed it to North Korea. Elliptic called it the largest crypto theft of all time, far above the $611 million taken from Poly Network in 2021.

## Securing a protocol beyond the audit

The numbers point to the same gaps: code that no audit covered, keys and signing processes that no audit looked at, and contracts that changed after they were reviewed.

SpaceDev has been shipping blockchain systems since 2018. Through [BlockAudit](https://spacedev.io/blockaudit-smart-contract-and-blockchain-security), our security team audits smart contract code and the operational side around it (who holds the keys and how transactions get signed), then sets up monitoring after launch. If you are building a protocol, see our [smart contract development](https://spacedev.io/blockchain-development-services/smart-contract-development) and [DeFi development](https://spacedev.io/blockchain-development-services/industry/finance-and-fintech) services, or [talk to our team](https://spacedev.io/contact).

## Sources

All sources were accessed on 28 September 2026. Dates are publication dates as shown by each publisher.

<div class="sd-sources">

### Blockchain analytics firms

- Chainalysis, "[North Korea Drives Record $2 Billion Crypto Theft Year, Pushing All-Time Total to $6.75 Billion](https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/)," 18 December 2025.
- Chainalysis, "[2025 Crypto Crime Mid-year Update](https://www.chainalysis.com/blog/2025-crypto-crime-mid-year-update/)," 17 July 2025.
- Chainalysis, "[The Drift Protocol Hack: How Privileged Access Led to a $285 Million Loss](https://www.chainalysis.com/blog/lessons-from-the-drift-hack/)," 9 April 2026.
- Chainalysis, "[Inside the KelpDAO Bridge Exploit](https://www.chainalysis.com/blog/kelpdao-bridge-exploit-april-2026/)," 23 April 2026.
- TRM Labs, "[2026 Crypto Crime Report](https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report)," 28 January 2026.
- TRM Labs, "[H1 2026 Crypto Hacks Reach Record High as Losses Fall Below USD 1 Billion](https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion)," 1 July 2026.
- TRM Labs, "[North Korea and the Industrialization of Cryptocurrency Theft](https://www.trmlabs.com/resources/blog/north-korea-and-the-industrialization-of-cryptocurrency-theft)," 18 December 2025.
- Elliptic, "[North Korea's crypto hackers have stolen over $2 billion in 2025](https://www.elliptic.co/insights/north-korea-linked-hackers-have-already-stolen-over-2-billion-in-2025/)," 6 October 2025.
- Elliptic, "[The largest theft in history: following the money trail from the Bybit Hack](https://www.elliptic.co/blog/bybit-hack-largest-in-history)," 23 February 2025.
- Elliptic, "[Bybit exploit 12 months on: the DPRK threat continues](https://www.elliptic.co/insights/bybit-exploit-12-months-on-the-dprk-threat-continues/)," 16 February 2026.
- Elliptic, "[Iranian crypto exchange Nobitex hacked for over $90 million by pro-Israel group](https://www.elliptic.co/insights/iranian-crypto-exchange-nobitex-hacked-pro-israel-group/)," 18 June 2025.
- Elliptic, "[Bitget attack pushes suspected North Korea crypto heists over $1 billion in 2026](https://www.elliptic.co/insights/bitget-attack-pushes-suspected-north-korea-crypto-heists-over-1-billion-in-2026/)," 25 September 2026.

### Web3 security firms

- CertiK, "[Hack3d: The Web3 Security Report 2025](https://www.certik.com/blog/hack3d-the-web3-security-report-2025)," 23 December 2025.
- CertiK, "[Hack3D: H1 2026 Report](https://www.certik.com/skynet-report/certik-hack3d-h1-2026-report)," 6 July 2026.
- Immunefi, "[93% of Critical Crypto Vulns Are Disclosed on Immunefi](https://immunefi.com/blog/research/93-of-critical-crypto-vulns-are-disclosed-on-immunefi/)," 20 February 2026.
- Immunefi, "[What an Onchain Hack Actually Costs: 2024-2025 Update](https://immunefi.com/blog/research/what-an-onchain-hack-actually-costs-2024-2025-update/)," 25 March 2026.
- Immunefi, "[Nearly Every Long-Running Bug Bounty Program on Immunefi Has Found a Critical Bug](https://immunefi.com/blog/research/nearly-every-long-running-bug-bounty-program-on-immunefi-has-found-a-critical-bug/)," 20 April 2026.
- Immunefi, "[The Ecosystem Vulnerability Scoreboard: 6 Years of DeFi Loss Data](https://immunefi.com/blog/research/the-ecosystem-vulnerability-scoreboard-6-years-of-defi-loss-data/)," 27 April 2026.
- Immunefi, "[June 2026 Immunefi Ecosystem Update](https://docs.immunefi.foundation/june-2026-immunefi-ecosystem-update/)."
- Hacken, "[Yearly Security Report 2025](https://hacken.io/insights/2025-security-report/)," updated 9 September 2026.
- Hacken, "[Q1 2026 Security & Compliance Report](https://assets.hacken.io/assets/q1-2026-security-report.pdf)."
- Hacken, "[Q2 2026 Security & Compliance Report](https://assets.hacken.io/q2-2026-security-report.pdf)."
- SlowMist, "[2025 Blockchain Security and AML Annual Report](https://www.slowmist.com/report/2025-Blockchain-Security-and-AML-Annual-Report(EN).pdf)."
- BlockSec, "[Cetus Incident: One Unchecked Shift Drains $223M in the Largest DeFi Hack of 2025](https://blocksec.com/blog/cetus-incident-one-unchecked-shift-drains-223m-largest)," 9 February 2026.
- Cyfrin, "[Inside The $223M Cetus Exploit: Root Cause And Impact Analysis](https://www.cyfrin.io/blog/inside-the-223m-cetus-exploit-root-cause-and-impact-analysis)."
- Halborn, "[Explained: The Phemex Hack (January 2025)](https://www.halborn.com/blog/post/explained-the-phemex-hack-january-2025)," 27 January 2025.
- OWASP, "[OWASP Smart Contract Top 10: 2026](https://scs.owasp.org/sctop10/)," with its [methodology](https://scs.owasp.org/sctop10/methodology/) and [data sources](https://scs.owasp.org/sctop10/data-sources/).
- OWASP, "[OWASP Smart Contract Top 10](https://owasp.org/www-project-smart-contract-top-10/)" (2025 edition).

### Government and regulators

- FBI Internet Crime Complaint Center, "[North Korea Responsible for $1.5 Billion Bybit Hack](https://www.ic3.gov/psa/2025/psa250226)," I-022625-PSA, 26 February 2025.
- FBI Internet Crime Complaint Center, "[2025 IC3 Annual Report](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf)."
- Multilateral Sanctions Monitoring Team, "[The DPRK's Violation and Evasion of UN Sanctions through Cyber and Information Technology Worker Activities](https://msmt.info/view/save/2025/10/22/26294780-c396-407d-bb33-88afe988cd96-The_DPRK%E2%80%99s_Violation_and_Evasion_of_UN_Sanctions_through_Cyber_and_Information_Technology_Worker_Activities_(MSMT_2025_2).pdf)," MSMT/2025/2, 22 October 2025.
- US Department of State, "[The Democratic People's Republic of Korea's Violations and Evasions of UN Sanctions through Cyber and IT Worker Activities](https://www.state.gov/releases/office-of-the-spokesperson/2026/01/the-democratic-peoples-republic-of-koreas-violations-and-evasions-of-un-sanctions-through-cyber-and-it-worker-activities/)," 12 January 2026.
- US Department of the Treasury, "[Treasury Sanctions DPRK Bankers and Institutions Involved in Laundering Cybercrime Proceeds and IT Worker Funds](https://home.treasury.gov/news/press-releases/sb0302)," 4 November 2025.
- US Department of Justice, "[Justice Department Announces Nationwide Actions to Combat Illicit North Korean Government Revenue Generation](https://www.justice.gov/opa/pr/justice-department-announces-nationwide-actions-combat-illicit-north-korean-government)," 14 November 2025.
- US Attorney's Office, Eastern District of New York, "[Canadian National Charged With Stealing Approximately $65 Million in Cryptocurrency From Two DeFi Protocols](https://www.justice.gov/usao-edny/pr/canadian-national-charged-stealing-approximately-65-million-cryptocurrency-two-defi)," 3 February 2025.
- US Attorney's Office, Southern District of New York, "[Maryland Man Charged With Defrauding Crypto Exchange Of Over $50 Million In Hacks](https://www.justice.gov/usao-sdny/pr/maryland-man-charged-defrauding-crypto-exchange-over-50-million-hacks)," 30 March 2026.
- European Banking Authority and European Securities and Markets Authority, "[Joint Report: Recent developments in crypto-assets (Article 142 of MiCAR)](https://esma.europa.eu/sites/default/files/2025-01/ESMA75-453128700-1391_Joint_Report_on_recent_developments_in_crypto-assets__Art_142_MiCA_.pdf)," 16 January 2025.

### Academic research

- Landsman, Lyandres, Maydew, Rabetti and Zhang, "[Auditing Smart Contracts](https://accounting.wharton.upenn.edu/wp-content/uploads/2025/10/LandsmanLyandresMaydewRabettiZhang.pdf)," working paper, October 2025 draft.
- Gattermayer, Kalivoda and Bašović, "[The ack3 H1 2026 DeFi Incident Dataset: Audit Scope Across 135 Security Incidents](https://arxiv.org/abs/2608.13792)," arXiv preprint, August 2026.
- Beyer, "[The Audit Gap in Blockchain Security](https://arxiv.org/abs/2606.15465)," arXiv preprint, June 2026.

### Incident reports from affected projects

- Phemex, "[Phemex Hot Wallet Security Incident Update and Timeline](https://phemex.com/announcements/phemex-hot-wallet-security-incident-update-and-timeline)," 26 January 2025.
- Cetus, "[Cetus Relaunch Incoming: Recovery Plan and the Road Ahead](https://medium.com/@CetusProtocol/cetus-relaunch-incoming-recovery-plan-and-the-road-ahead-9fc0f8bd5c41)," 7 June 2025.
- Sui Foundation, "[Response to the Cetus Incident: Onchain Community Vote](https://blog.sui.io/cetus-incident-response-onchain-community-vote/)," 27 May 2025.
- Balancer, "[Nov 3 Exploit Post-Mortem](https://medium.com/balancer-protocol/nov-3-exploit-post-mortem-51dcbeb6b020)," 18 November 2025.
- Drift, "[Incident Recovery Update: April 16, 2026](https://www.drift.trade/updates/incident-recovery-update-april-16-2026-now)," 16 April 2026.
- Drift, "[Recovery Plan for Affected Users](https://www.drift.trade/updates/recovery-plan-for-affected-users)," 5 May 2026.
- LayerZero, "[LayerZero Labs KelpDAO Incident Report](https://layerzero.network/blog/layerzero-labs-kelpdao-incident-report)," 20 May 2026.
- Kelp, [statement on X](https://x.com/KelpDAO/status/2051755467328913637), 5 May 2026.
- Coinkite, "[Coldcard Security Advisory](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/)," 30 July 2026.
- Galaxy Research, [analysis on X](https://x.com/glxyresearch/status/2083181683067506899), 31 July 2026.
- ZachXBT, [investigation on X](https://x.com/zachxbt/status/2012212936735912351), 16 January 2026.
- Cronos, "[Cronos Network Incident Post-Mortem](https://x.com/CronosNetwork/status/2097131718948094299)."

</div>
