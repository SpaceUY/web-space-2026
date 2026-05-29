---
name: "Zenda"
tagline: "Crypto exchange built for everyday users: buy and sell USDT with fiat in Uruguay."
category: Web3
accent: cyan
client: "Zenda"
industry: "Exchange"
year: 2025
duration: "April 2025 - present"
team: "2 developers, 1 QA, 1 PM"
services:
  - Product Discovery
  - Product Development
techStack:
  - React
  - Tailwind CSS
  - NestJS
  - PostgreSQL
  - AWS
  - SST
publishedAt: 2025-04-01
heroImage: "/images/case-studies/zenda/zenda_.png"
summary: "Zenda is a cryptocurrency exchange platform built for the Uruguayan market, with a strong focus on users outside the crypto world. SpaceDev led the project from product discovery through production, building a platform that enables seamless fiat-to-crypto and crypto-to-fiat conversions, KYC compliance, non-custodial wallet integration, and payments via RedPagos and MercadoPago."
objectives:
  - "Make crypto accessible to users with no prior crypto knowledge while still supporting experienced users with their own wallets."
  - "Enable buying and selling of USDT across Tron, Polygon, and Ethereum networks."
  - "Integrate KYC identity verification via Sumsub to ensure regulatory compliance."
  - "Build production-grade AWS infrastructure using SST for secure multi-environment deployments."
  - "Support payments through RedPagos and MercadoPago for local fiat on/off ramp."
deliverables:
  - "Full product discovery phase covering UX research, architecture, and feature roadmap."
  - "Fiat-to-crypto and crypto-to-fiat order flow for USDT on Tron, Polygon, and Ethereum."
  - "Non-custodial wallet integration via Privy for seamless onboarding."
  - "KYC identity verification pipeline using Sumsub with tiered compliance logic."
  - "RedPagos and MercadoPago payment integrations for local fiat transactions."
  - "Cross-chain operations via WAN Bridge and Li.Fi swaps."
  - "Production-grade AWS infrastructure with VPC, RDS PostgreSQL, ECS, and Secrets Manager."
  - "Admin dashboard for operations management and order monitoring."
  - "CI/CD pipeline via Bitbucket for continuous deployment."
outcome: "Zenda launched as a fully operational exchange in Uruguay, reaching 140 registered users, 50 verified identities, and over 200 created orders in its early weeks. The platform bridges the gap between everyday users and crypto in a market where that barrier has historically been high. Development is ongoing, with new features and improvements shipping continuously."
metrics:
  - value: "140"
    label: "Registered users"
  - value: "50"
    label: "Verified identities"
  - value: "200+"
    label: "Orders created"
  - value: "Ongoing"
    label: "Since Apr 2025"
---

## The Challenge

Uruguay has a growing appetite for crypto, but most existing exchange platforms are built for users who already understand blockchain. Zenda set out to change that: a local exchange that feels as simple as a bank transfer for everyday users, while still giving experienced traders the flexibility to connect their own wallets and operate across networks.

The technical challenge matched the ambition. Multi-network support across Tron, Polygon, and Ethereum, real-time KYC verification, local payment rails, and a non-custodial architecture all had to come together in a product that anyone could use on day one.

## Our Approach

SpaceDev joined Zenda from the product discovery phase, helping define the architecture, UX flows, and phased feature roadmap before a single line of production code was written. That foundation made the build phase significantly faster and more focused.

The team of two developers, one QA, and one PM built the full platform in parallel: the order engine for USDT across Tron, Polygon, and Ethereum; Privy for non-custodial wallet onboarding; Sumsub for KYC and identity verification; and RedPagos and MercadoPago for local fiat payment rails.

Infrastructure runs on AWS using the SST framework, with a complete VPC setup, PostgreSQL on RDS, ECS for container orchestration, and Secrets Manager for secure credential handling across environments. Bitbucket Pipelines keeps deployments automated and auditable.

## Results

Zenda went live and quickly established itself as a functional, compliant exchange for the Uruguayan market. In the first weeks, the platform registered 140 users, verified 50 identities, and processed over 200 orders. The admin dashboard gives the Zenda team full visibility into operations, and the CI/CD pipeline ensures new features reach production without manual intervention. Development continues, with expanded network support and new product features in the roadmap.
