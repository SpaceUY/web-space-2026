---
title: "Save Time With a Smart Contract Audit Checklist"
description: "A practical pre-audit checklist that we use at SpaceDev's BlockAudit to cut audit time by 30–50%. Use it before you ship your code to any auditor."
publishedAt: 2025-10-20
author: juan-manuel-sobral
category: Blockchain Trends
tags: ["smart-contracts"]
readTime: 8
cover: "/images/content/FCBKViQg3nV6hMSlU6WlaGTZ8yk.jpg"
---

Most smart contract audits are slower than they need to be. Not because auditors are slow, but because the code arrives in a state that wastes the first week clarifying instead of reviewing. Here's the checklist we ask every BlockAudit client to run through before kickoff.

## Code & build

- [ ] Latest commit is on `main` or a clearly tagged release branch.
- [ ] All tests pass on CI.
- [ ] Test coverage report attached. Aim for >90% line coverage on the contracts in scope.
- [ ] No `console.log`, `hardhat/console.sol`, or debug-only code in production paths.
- [ ] All `TODO` and `FIXME` comments resolved or explicitly waived.

## Documentation

- [ ] One-page architecture overview: which contracts call which, who can call what.
- [ ] Threat model: who are the actors, what can each one do, what are they trusted for.
- [ ] Invariants: state properties that must always hold (e.g. "total supply equals sum of balances").
- [ ] Upgradeability strategy: which contracts are upgradeable, who controls upgrades, what's the timelock.

## Tooling

- [ ] Slither runs cleanly (or every finding is annotated with a justification).
- [ ] Echidna or Foundry fuzz tests covering key invariants.
- [ ] A deployment script that mirrors what you'll run in production.
- [ ] Verified contracts on the relevant block explorer (or a clear plan to verify post-audit).

## Operational readiness

- [ ] An incident response plan: who pauses what, who calls whom.
- [ ] Multi-sig procedures documented and rehearsed.
- [ ] On-chain monitoring (OpenZeppelin Defender, Tenderly, etc.) configured for the test deployment.
- [ ] A list of dependencies (libraries, oracles, bridges) with their own audit status.

## Why this matters

Audits are not "find the bugs". They're "convince an experienced reviewer that the system behaves as designed under adversarial conditions". The cleaner your starting state, the more time the auditor spends finding actual issues — and the less you spend on back-and-forth.

If you'd like a free pre-audit review against this checklist, [reach out](/contact). It's the cheapest way to make your real audit better.
