# Copy variations, attention-tags & recommendations

Working doc for picking wording. The **A** option is what's live in `js/data.js` today. All variations are fact-checked (see the corrections log at the bottom).

---

## Attention-tags (the idea)
Short **credibility hooks**, distinct from the tech tags. They scan in <1s and answer "why should I care?" Use them as a row under the name and/or one per section. Palette:

`ex-AWS` · `ex-Sumo Logic` · `Berkeley EECS` · `open-source (merged PR)` · `LLMs in prod` · `RL from scratch` · `MLB R&D` · `CV research` · `solo-built` · `ships end-to-end`

Two ways to use them:
- **Header strip:** `ex-AWS · ex-Sumo Logic · Berkeley EECS · ships LLM products` under the name (gives a cold visitor instant positioning without a full tagline).
- **Per-entry hook:** one tag on each experience/project row (see "hook" lines below).

---

## Header / `whoami` (you chose: no on-page tagline)
If you ever want a one-liner, candidates:
- A — *(none; let the work speak — current)*
- B — `software engineer — i build LLM products end to end.`
- C — `i ship LLM products by day; nights, i teach bots to play games.`
- D (bio line) — `adi — software engineer @ two dots. ex-aws, ex-sumo logic. berkeley eecs.`

---

## Experience blurbs

**Two Dots** — hook: `LLM agents in prod`
- A — Build and own the LLM voice + chat agents that walk renters through housing approval and show leasing agents where each application stands.
- B — Own a fleet of LLM voice + chat agents end-to-end — context pipeline, prompts, evals — that get renters approved faster.
- C — Solo-built the LLM agents (voice + chat) behind faster housing approvals; shipped to production with real eval infra.

**Sumo Logic** — hook: `platform security`
- A — Core Platform team owning the API framework, authn/authz, and in-product app content.
- B — Hardened the platform everything else runs on — API framework, auth, global security policies — in Java/Scala.

**Brandbridg AI** — hook: `solo backend · pre-seed`
- A — Sole backend/data engineer at a pre-seed startup connecting creators and businesses.
- B — Owned the entire backend + data pipeline for a pre-seed creator↔business startup — auth, scraping, AWS Lambda/S3.

**AWS · Aurora Storage** — hook: `database storage internals`
- A — Shipped two Aurora MySQL features — Enhanced Binlog and Change Data Capture (CDC) Streams.
- B — Built two production features deep in Aurora MySQL's storage engine (Enhanced Binlog, CDC Streams) in a multi-threaded C++ system.

**Philadelphia Phillies** — hook: `MLB R&D`
- A — Built novel defensive metrics to evaluate infielders — used in player development and acquisition.
- B — Invented new defensive metrics for an MLB R&D team that fed real player-development and acquisition calls.

**UC Berkeley · RISELab** — hook: `Berkeley research`
- A — Undergraduate research: ~3× faster transformer video super-resolution on CPU via lighter convolutions + quantization.
- B — Made transformer video super-resolution ~3× faster on CPU (depthwise convs + quantization) at Berkeley's RISELab.

**UC Berkeley · MCB** — hook: `CV research`
- A — Undergraduate research: mouse eye-tracking for a blindsight VR study — +70% data extraction at ~95% accuracy.
- B — Built the CV eye-tracking pipeline (DeepLabCut + Unity VR) for a Berkeley blindsight study — +70% extraction, ~95% accuracy.

---

## Project blurbs

**awpy — map control** — hook: `merged into a 575★ OSS lib`
- A — Shipped nav-mesh "map control" territory metrics into awpy (575★ CS analytics library), then forked it to CS2 with a threat-aware conical BFS validated across 9 maps.
- B — Merged the "map control" feature into awpy — a 575★ open-source CS library — then pushed it further in a CS2 fork (weapon-aware conical BFS, 9-map validation).
- C — Open-source: my "map control" metric shipped in awpy (575★); my CS2 fork models line-of-sight with weapon-class cones across 9 maps.

**Knockout RL** — hook: `RL from scratch · LLM-designed rewards`
- A — Taught an agent the GamePigeon 3v3 "Knockout" physics game from scratch — GPU-vectorized physics (~19K env-steps/s), self-play, and a Claude-in-the-loop reward designer that recovered an agent from 0% to 84.8%.
- B — Built an RL stack from scratch for a 3v3 physics game: a GPU physics engine (~19K steps/s), self-play, and Claude writing + repairing the reward function (0% → 84.8%).
- C — From-scratch multi-agent RL: GPU-vectorized physics, PPO/MAPPO/self-play, and an LLM that designs its own reward — plus an honest 0%-vs-heuristic ceiling I'm still chasing.

---

## Current recommendations
- **Look:** keep the **text-only console** (cleanest); if you want visuals back, prefer hero-in-`+more`-expand over inline cards. (`SHOW_HEROES` toggle in `render-console.js`.)
- **Tagline:** stay off-page; if testing shows cold visitors are lost, add header **attention-tags** (cheaper than a sentence) before a full tagline.
- **Build next:** typeable shell (Tier 0) → retrieval ask-me bot (Tier 2a) → one wow. (See `IDEAS.md`.)
- **Deploy:** work saved on branch `console-redesign`; merge to `master` only when you want it live on adisujithkumar.github.io.
- **Follow-ups:** bump the Knockout repo README from "472" to the real test count; the awpy `575★` will drift over time (refresh or drop the number).

## Fact-check corrections applied (from the audit)
| Field | Was | Now |
|---|---|---|
| Sumo Logic year | 2024 | **2024–25** (May 2024 – Jul 2025) |
| AWS year | 2022 | **2022–23** (Feb 2022 – Apr 2023) |
| Brandbridg year | 2024 | **2024–25** (Mar 2024 – Aug 2025) |
| RISELab year | 2021 | **2020–21** (Dec 2020 – Dec 2021) |
| MCB year | 2020 | **2020–21** (Aug 2020 – May 2021) |
| awpy stars | ~310★ | **575★** (live count) |
| awpy maps | 7 | **9** (repo validates across 9 — was under-stated) |
| Knockout tests | 558-test suite | **500+ tests** (558 is the true `def test_` count; repo README says 472 — reconcile later) |

Everything else (titles, company names, the 0%→84.8% story, ~19K steps/s, 9-bot tournament, PR #235 merged, conical-BFS claims) verified accurate.
