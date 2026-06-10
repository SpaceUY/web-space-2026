---
title: "How We Built NDAX: The Biggest Cryptocurrency Exchange in Canada"
description: "Frowning upon the mention of 'blockchain' might be a thing of the past, but actually integrating it into a traditional economic system is far from easy. Here's how SpaceDev built Canada's most prominent crypto exchange."
publishedAt: 2023-05-02
author: juan-manuel-sobral
category: "Product Development"
tags: ["fintech", "smart-contracts"]
cover: "/images/content/k9VyKGh5tqD9B5xLFRFXoVDVm44.webp"
readTime: 3
metatitle: "How We Built NDAX, Canada's Biggest Crypto Exchange"
metadescription: "How SpaceDev built NDAX, Canada's most prominent crypto exchange: blockchain development meets traditional finance, regulation, and bank-grade security."
---

Frowning upon blockchain mentions may have become normalized, yet integrating this technology into established financial systems presents substantial obstacles. NDAX co-founder Hussein Hammoud envisioned a bank-backed cryptocurrency exchange meeting Canadian governmental standards, enabling citizens to convert digital assets into fiat currency. This ambitious goal required overcoming numerous technical and regulatory hurdles.

While comprehensive collaboration details appear in the case study, this article explores NDAX's operational mechanics and how the development team delivered a successful, secure platform.

## Technically Speaking

### Frontend Architecture

NDAX's user interface emphasizes both sophistication and accessibility. The platform utilizes NodeJS, Typescript, and Angular 6 as foundational technologies, creating an environment that "inspires trust, intuitiveness and allows even the most inexperienced beginners to use their wide array of features." Comprehensive testing ensured consistent cross-platform display.

### AlphaPoint Integration

AlphaPoint, a white-label exchange platform, provided foundational components constructed with React. A primary challenge involved translating these React-based elements into Angular, the platform's primary framework.

AlphaPoint communicates with frontends through RPC websockets generating excessive data. The solution involved implementing observables and RxJS utilities to "divide information into individual streams that the frontend could distill into things such as active trades, chart information, user holdings, and so on." This approach enhanced code readability while reducing overall complexity.

### Custom Backend Development

Missing functionalities within AlphaPoint's framework necessitated building proprietary backend solutions. One implemented feature involved exporting trades to PDF format, which required:

- Requesting trade data from AlphaPoint servers for specific users
- Constructing PDF files containing all transaction movements

## Other Features

### Security Framework

NDAX distinguishes itself through transparent commitment to security and customer protection. The exchange maintains registration with FINTRAC (Financial Transactions and Reports Analysis Centre of Canada) and Revenue Québec as a Money Service Business, complying with multiple anti-crime regulations.

Security implementation includes:

- SSL encryption and two-factor authentication
- Continuous platform monitoring
- DDoS protection mechanisms
- Hot wallet MPC protection technology
- Cold storage for digital assets
- Internal controls addressing access, employee verification, and financial reconciliation

### Know Your Customer Integration

Regulatory requirements demanded implementing KYC processes verifying user identity during account creation and ongoing verification. The solution involved integrating a third-party KYC framework providing an iFrame for direct personal data submission. Webhook communications updated user verification stages within AlphaPoint systems upon approval.

### Customer Support

Beyond security measures, round-the-clock support proved critical. Implementation included:

- Live chat functionality
- Multiple communication channels for issue resolution
- Comprehensive platform testing
- Ongoing bug fixes and stabilization from various sources

## Advantages

### User Experience

NDAX accommodates both novice and experienced traders through:

- Quick Buy and Quick Sell features for beginners
- Advanced charting and order types for professionals
- Competitive trading fees
- Extensive cryptocurrency support

### Asset Control and Earning Potential

Users maintain complete asset control with daily and weekly payout options, flexible lockup periods, and unstaking flexibility. The platform offers up to 12% APY for cryptocurrency staking.

### Canadian Integration

NDAX applies consistent fees regardless of transaction amount or method, whether transferring cryptocurrency to personal wallets or fiat to Canadian bank accounts. Banking relationships facilitate seamless Canadian dollar deposits and withdrawals, supported by comprehensive safety measures and guarantees exceeding competitor offerings.

## Conclusion

White-label solutions can expedite cryptocurrency exchange development, yet particular product visions and contexts invariably introduce distinct challenges. Spanning regulatory compliance to technical implementation difficulties, NDAX represents a significant collaborative achievement and educational experience. SpaceDev's partnership successfully created a robust platform demonstrating how "FinTech and the tangible world empower each other."
