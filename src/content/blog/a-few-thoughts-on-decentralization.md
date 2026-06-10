---
title: "A Few Thoughts on Decentralization…"
description: "The SpaceDev team explores blockchain technology and the real challenges of decentralization: why blockchains consistently fall short of true decentralization, and what might change that."
publishedAt: 2023-03-02
author: federico-sendra
category: "Blockchain Trends"
tags: ["web3-infrastructure", "blockchain-basics"]
cover: "/images/content/ZYFCVOnAOkZaVXWFJg9sEbfiVzs.png"
readTime: 4
takeaways:
  - True decentralization in blockchain remains elusive due to design and behavioral factors
  - Leader nodes create vulnerabilities and redundancy in blockchain networks
  - Oracles present challenges for blockchains handling real-world data
  - Distribution may better describe blockchain architecture than decentralization
  - Innovative structural changes could improve consensus mechanisms
metadescription: "SpaceDev explores why blockchains consistently fall short of true decentralization, the real challenges of Web3 infrastructure, and what might change that."
---

The SpaceDev team has been immersed in blockchain fundamentals recently. Juan Manuel Sobral and Elina García, specialists with academic and professional backgrounds, elevated company-wide understanding through regular Tech Talks sessions.

## Space Tech Talk: The Importance of Blockchain

**Blockchain** represents transformative technology with multiple applications. It can form the foundation for alternative economic systems and modernize traditional, bureaucratic operations. However, as Sobral emphasized, "crypto" should not be confused with "utopia."

Decentralization attracts substantial attention and deservedly so. It democratizes participation in any blockchain, enabling users to engage equally. Without centralized governance (only nodes with ideally equivalent authority), systems prove more resilient against corruption and technical failures. Removing intermediaries reduces costs and builds confidence among skeptical users, provided consensus standards are maintained. From political and ethical perspectives, decentralization embodies the Internet's original vision: entirely democratic, universally accessible, and equitable.

However, by design or practice, blockchains consistently fall short of genuine decentralization. Consider Bitcoin's origins: Satoshi Nakamoto's identity remains unknown, potentially an individual, group, or organization. The foundational white paper itself lacked transparency. Despite enabling all users to validate transactions through mining, individuals frequently form organized pools controlling most transaction validation.

Networks implementing gas fees create additional inequality. Users spending more achieve faster transactions, raising participation costs and discouraging broader engagement. Certain nodes gain disproportionate influence despite theoretical design principles suggesting otherwise. Trust concerns, which decentralization theoretically addresses through self-regulation, resurface.

"Leader nodes," prevalent across many blockchain networks, represent significant vulnerability points. They introduce redundancy: transactions already validated by leader nodes undergo additional validation by other nodes. Data blocks from leader nodes have elevated legitimacy chances despite potential incorrectness. Software updates addressing this could theoretically originate from any member, but change capacity remains concentrated among select participants.

Blockchains managing real-world information face compounded difficulties. A primary technology appeal involves networks remaining tamper-resistant from individual nodes while remaining isolated from external inputs. Bridging this gap, as insurance companies do with smart contracts, requires oracles: middleware facilitating blockchain-to-external system communication, connecting data providers, enterprise systems, APIs, cloud services, payment platforms, and other blockchains.

The challenge: blockchains lack native capability for complex, non-numerical data processing. Proof-of-Work and Proof-of-Stake mechanisms cannot reliably validate information when nodes consult different sources or disagree. How can we guarantee submitted blockchain information reliability? Can all participants agree and update software simultaneously?

Historically, the Byzantine Generals problem prompted blockchain developers and scholars to establish solid leader node designs. Contemporary observers increasingly view this as contradicting decentralization principles, pursuing alternatives embodying the concept more genuinely. Blockchain clearly gains momentum among individuals and enterprises, with decentralization driving adoption. Yet perhaps the terminology itself presents challenges?

Some propose "distribution" rather than "decentralization," implying genuine decision-making power division. Preventing scale-tilting entity formation, eliminating leader nodes, and reconceptualizing consensus mechanisms may prove transformative. Consider stock markets: daily closings require buyer-seller price agreement through stochastic processes: not validation-dependent answers but consensus-reaching mechanisms incorporating complex variables and calculating averages.

These remain theoretical possibilities, though innovative structural modifications could enable blockchain to realize genuine potential, overcome scalability constraints, and substantially diminish intermediary requirements.

Thanks for reading! For additional information regarding this transformative technology, contact us at **info@spacedev.io**
