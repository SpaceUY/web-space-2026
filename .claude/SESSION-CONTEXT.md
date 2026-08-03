# Session Context

> **How to use this file:** don't read this automatically or as a way to "catch up on the whole project" — `CLAUDE.md` at the repo root is the source of truth for that. Open this file only when you're picking up work on one of the specific topics below (hero, marquee, blog tables, tokenized-bonds post) and need to know what was already decided and why, so you don't re-derive it or contradict it. Delete a section once its work is merged and stable, so this file stays short. Do not treat anything here as current if it contradicts what you see in the actual code — code wins.

Last updated: 2026-07-31 (session in `web-space-2026`, branch `fix/home-hero-mobile-gap-trusted-by-logos` at time of writing).

---

## Uncommitted work in progress right now

On branch `fix/home-hero-mobile-gap-trusted-by-logos` (stale — its PR #92 already merged to `main`, so this branch needs to be recreated from updated `main` before committing):

- `src/pages/index.astro` — removed `:hover`/`:focus-within` pause-on-animation from the hero client-logo marquee (`.hero-marquee-wrapper`). Mobile browsers simulate `:hover` on tap with no "unhover" trigger, so the marquee was getting stuck paused after a tap. Hover/click should do **nothing** to the animation, on any device. Not yet committed.
- `src/pages/blog/[...slug].astro` + `src/styles/prose.css` — fixed markdown tables overflowing the page on mobile in blog posts. Added a small script that wraps every `.sd-prose table` in a `.sd-table-scroll` div (`overflow-x: auto`) on page load, and moved the table's `margin: 2em 0` to the wrapper. Verified against all 6 existing posts with tables (see below) — all wrap correctly, zero horizontal page overflow. Not yet committed.

**Next step when resuming:** `git stash`, `git checkout main && git pull`, new branch off updated main, `git stash pop`, then split into two commits/PRs — the marquee-hover fix is a tiny addendum that could go standalone or bundled with the table fix; user said "todavía no mandaremos" the PR for these, so don't push/PR until explicitly told to.

Posts with tables, all confirmed fixed by the wrapper (generic template-level fix, no per-post markdown changes needed):
`liquidity-pools-and-yield-farming-...`, `smart-contract-security-...`, `enterprise-blockchain-solutions-...`, `blockchain-ai-convergence-make-ai-trustworthy`, `depin-and-decentralized-ai-...`, `the-role-of-smart-contracts-in-defi`. Plus `tokenized-bonds` (new post, own branch, already merged via PR #91 — its table was fine because it was written after this fix pattern was known, but double check once #92-branch's fix is committed and both are in `main` together).

---

## Home hero — decisions made this session (PR #92, merged)

The hero went through many iterations. Final state, and **why**, so it doesn't get re-litigated from scratch:

- Client-logo marquee lives **inside** the dark hero section now (not the old light section below it) — closes a light/dark contrast seam. White logo assets are in `public/images/clients-white/` (mirrors the colored ones in `public/images/clients/`, used elsewhere e.g. `agentic-ai-development.astro`).
- Each white logo has an individually-tuned `scale` value in the `clientLogosWhite` array in `index.astro` — this is **optical**, not mathematical. Bold/wide wordmarks (Rarible, UFC, Samsonite, Blockus, Drata) are scaled down; thin ones (Schwarzkopf, UTEC, prose, Scotiabank, d_local) are scaled up. Don't "fix" this by making heights uniform again — that's what caused the original complaint (some logos read as huge, others invisible). If a new logo is added, compare it by eye against 2-3 neighbors at real rendered size before picking a scale, the same way this set was tuned.
- `utec.svg` had its `viewBox` manually cropped (`public/images/clients-white/utec.svg`) to remove an illegible "Universidad Tecnológica" tagline that was eating height from the actual wordmark. Backup of the original is at `/tmp/utec.svg.bak` (local machine only, not in git).
- 7 of the white SVGs (`microsoft`, `scotia`, `utec`, `samsonite`, `blockus`, `d_local`, `schwarzkopf`) came in as square 100×100 canvases with the real mark occupying a fraction of that box — `viewBox` was cropped to the real bounding box for each. Their root `<svg>` tags also had literal `width="100" height="100"` attributes removed, because those override `viewBox` for intrinsic-aspect-ratio purposes and were causing squished/wrong-ratio rendering.
- Marquee gap must be set on **both** `.sd-marquee-set` (within each duplicated set) and `.sd-marquee` (between the two sets) — setting it on only one leaves a visible seam where the loop repeats. Speed: ~80px/s matches the site's original client marquee elsewhere; don't drift from that without a reason.
- Hero height uses `dvh` with a `vh` fallback declared first (`min-h-[84vh] min-h-[84dvh]`) — `dvh` has no automatic fallback, an unsupported browser drops the whole declaration otherwise.
- Hero is intentionally **not** full-viewport (`84dvh`/`92dvh`, not `100dvh`) so the next section peeks and invites scrolling — this is deliberate, per NN/g guidance against full-screen hero content, and was a specific ask from the user. Don't "fix" the peek by going back to `100dvh`.
- Vertical alignment: `justify-end` on mobile (bottom-aligned, Ahmad Shadeed's pattern for killing dead space above the fold), `justify-center` from `sm:`. This is why mobile and desktop tuning (gaps, `pt`) don't transfer 1:1 between breakpoints — always re-measure both after changing spacing.
- Hero content is left-aligned inside `.sd-container` (same as every other section on the page) — it used to be misaligned by 16px against the rest of the site; don't reintroduce a separate padding value for the hero.

---

## Blog authoring conventions confirmed this session

- New long-form/technical posts (RWA, compliance, smart-contract-heavy) follow `how-to-launch-an-rwa-protocol.md`: `## Key Takeaways` as an H2 + bullets at the very top of the body (not the `takeaways:` frontmatter array — that's a separate, older convention some posts use instead).
- Tags **must** come from `src/data/blog-tags.ts` — never invent a tag slug.
- Author choice matters for tone: Juan Manuel Sobral (CTO) for deep technical/compliance content, Federico Sendra (CEO) for business/strategy-leaning content. Confirmed with the user each time rather than assumed.
- Internal links to case studies go through `/our-work/<slug>` (the `/case-study/*` path 301-redirects there — link to the canonical `/our-work/` path directly, don't link the redirect).
- Cover + in-body images for a post live at `public/images/content/<descriptive-name>.{png,jpg,webp}` — no strict subfolder requirement, existing posts are inconsistent about this (some use `public/images/content/<slug>/<name>.jpg` subfolders, some flat). Ask the user which images map to which section before placing them; don't invent placement for a decorative/mood image that carries no explicit data.

---

## Tooling gotchas hit this session (not project facts, just friction to avoid repeating)

- `gh` CLI had two logged-in accounts (`veroblancos` personal, `vblanco-sd` work); `gh pr create` silently used the wrong one and failed with "must be a collaborator". Fix: `gh auth switch --hostname github.com --user vblanco-sd`. Check `gh auth status` before assuming a `gh pr create` failure is a real permissions problem.
- The Browser-pane tool's emulated viewport can desync after heavy use in one tab (saw `window.innerWidth` report 610 while `visualViewport.width`/`screen.width` correctly reported 375, on a page whose `<meta viewport>` tag was fine). Opening a **fresh tab** fixed it. If a mobile-emulation check gives numbers that don't match a screenshot, don't trust the numbers — open a new tab and recheck before concluding there's a site bug.
- Local `astro dev` occasionally dies silently mid-session (not caused by edits — `astro check` was clean each time it happened). If `curl localhost:4321` suddenly fails, check `pgrep -fl "astro dev"` before assuming the code broke something.
- User's git identity is `Vero <vblanco@spacedev.io>` (work email, personal-looking name) — she confirmed this is fine as-is, don't "fix" it to `vblanco-sd` without being asked again.
