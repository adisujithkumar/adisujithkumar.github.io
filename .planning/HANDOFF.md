# HANDOFF — adisujithkumar.github.io (website repo)

**Focus: THIS repo only.** Goal of the next session: **finalize the terminal "console" site and push a live update.** (The live site is still a 2018 placeholder.) Other-repo cleanups are **deferred to a separate session** — see the bottom.

---

## ▶ Starter prompt (paste this to kick off the session)
```
Read /mnt/d/projects/personal-website/HANDOFF.md first. Focus ONLY on this repo.
Goal: finalize the terminal console site and push a live update (the live site is
still a 2018 placeholder). Work on the `console-redesign` branch.

Phase 1 — finalize + ship:
- Apply my chosen blurbs from COPY.md to js/data.js (ask me, or use the "A" defaults).
- Decide attention-tags (header strip vs per-entry vs skip); keep projects text-only.
- Pre-deploy: git mv the planning docs (VISION/IDEAS/COPY/HANDOFF) into .planning/ so
  master stays tidy (they never appear on the site either way).
- Deploy: merge `console-redesign` → `master`. PAUSE for my explicit OK before merging,
  then confirm adisujithkumar.github.io updated.

Phase 2 — interactivity (after v1 is live):
- Tier-0 typeable shell (help, ls, cat <file>, open <project>, theme <name>, clear,
  history ↑/↓, tab-complete) as progressive enhancement over the static render.
- Then the retrieval "ask-me" bot (in-browser, no backend, "email me" fallback).

Static / vanilla / dependency-free throughout. Screenshot the console when there's
something to see. Don't push to master without my explicit go.
```

## ✅ Decisions (locked — confirmed by Adi)
1. **"Push an update" = deploy live** — merge `console-redesign` → `master` at the end of Phase 1 (this is what updates the live site). *Confirmed.*
2. **Ship the polished static v1 first** (Phase 1); build the typeable shell after (Phase 2). *Confirmed.*

Still pause for an explicit "go" right before the `master` merge — the *decision* to deploy is made; the *timing* of the final push is the user's call.

**Model:** single-repo, single-thread → **Opus** on the main thread; spin **Sonnet subagents** only for bounded bits (e.g., re-fact-checking any new copy, drafting shell-command specs).

---

## 1. Current state
- **Built & fact-checked:** Site **v1** lives on branch **`console-redesign`** (pushed to origin, commit **`ec8ccc1`**). Working tree clean.
- **NOT deployed:** GitHub Pages serves the live site from **`master`**, still the **2018 placeholder** ("Learning html"). So **adisujithkumar.github.io is unchanged** until someone merges to `master`.
- **Repo:** `adisujithkumar/adisujithkumar.github.io`, Pages from `master`/root.

### Preview locally
```
python3 -m http.server 8123 --directory /mnt/d/projects/personal-website
# then open http://localhost:8123   (server currently stopped)
```
`index.html` is the default (Console). Add **`?replay`** to re-trigger the boot animation (otherwise once per session).

---

## 2. Get oriented (key paths & files)
Static, vanilla **HTML/CSS/JS**. No build step, no dependencies, no framework.

### One-line architecture
Content lives once in `js/data.js`; two layouts (Console, Ledger) and three themes (Light/Dark/Terminal) render *from* that data — and **nothing hardcodes a color** (every value resolves through CSS variables on `:root[data-theme="…"]`), so adding a layout, theme, or command never touches content.

### File map (under `/mnt/d/projects/personal-website/`)
```
index.html              Console layout shell (terminal) — DEFAULT landing page
ledger.html             Ledger layout shell (calm single-column fallback)
css/base.css            design tokens + the 3 themes (CSS custom properties)
css/console.css         Console structure/styling
css/ledger.css          Ledger structure/styling
js/data.js              CONTENT — single source of truth (profile, experience[], education, projects[])
js/render-console.js    data → Console DOM  (SHOW_HEROES flag at line 4: text-only vs hero images)
js/render-ledger.js     data → Ledger DOM
js/console-boot.js      boot sequence + typed-command animation (once/session; ?replay; respects reduced-motion)
js/theme.js             Light / Dark / Terminal switch (+ localStorage), shared by both views
assets/                 project hero images / GIFs (currently suppressed in Console)
VISION.md IDEAS.md COPY.md README.md   planning + reference docs (see §6)
```

### How it fits together
- **Two views, same data.** `index.html` = **Console** (terminal look; window chrome w/ traffic-light dots + title bar, ASCII banner, blinking prompt; **boots into Terminal theme**). `ledger.html` = **Ledger** (quiet fallback). A `console · ledger` switch toggles them.
- **Content-as-data.** `js/data.js`: `profile`, 7 `experience` + `education`, 7 `projects` — **2 `"live"`** (awpy — map control; Knockout RL), **5 `"soon"`** (QBArena, catan-ai, sf-stride, valorant-highlight-identification, aca).
- **Projects are text-only** via `SHOW_HEROES = false` at **line 4 of `js/render-console.js`** ("Flip to true to bring back hero images"). Hero assets exist (`assets/awpy-mapcontrol.gif`, `knockout-winrate.png`, `knockout-ui.png`, `awpy-mapcontrol-static.png`) but clashed with the terminal look. If reintroducing visuals, prefer **hero-in-`+more`-expand** over inline cards.
- **README.md is accurate** (corrected this session to match the actual files).

---

## 3. The plan

### Phase 1 — finalize content/look + SHIP the update
- **Blurbs:** `COPY.md` has 2–3 fact-checked variations per item (option **A** = what's live in `data.js`). Pick favorites → apply to `js/data.js`.
- **Attention-tags:** decide whether to add the credibility-hook system (e.g. `ex-AWS · ex-Sumo Logic · Berkeley EECS`) — header strip vs per-entry vs skip. See `COPY.md`.
- **Visuals:** keep text-only (default), or flip `SHOW_HEROES` / do hero-in-`+more`.
- **Pre-deploy hygiene:** `git mv` the planning docs into a `.planning/` folder (keeps `master` tidy; they're repo-visible but never on the rendered site).
- **Deploy:** see §4. **PAUSE for the user's explicit OK before merging to `master`.**

### Phase 2 — interactivity (after v1 is live)
- **Tier-0 typeable shell:** `help`, `ls`, `cat <file>`, `open <project>`, `theme <name>`, `clear`, `history` (↑/↓), tab-complete, "command not found → try `help`." Progressive enhancement over the static render — extend `js/console-boot.js` or add a sibling input handler; commands read from `js/data.js`. (IDEAS.md Tier 0 / VISION.md Phase 1.)
- **Retrieval "ask-me" bot** (IDEAS.md Tier 2a): an `ask "..."` command answering from curated snippets (built from `data.js` `detail` fields) with an **"email me"** fallback. 100% in-browser, no backend. Do after the shell.
- **Later — one "wow":** beat-the-bot-to-unlock or generative-UI `theme make "…"` (IDEAS.md Tier 3).

---

## 4. Deploy — "push the update"
**Pre-deploy checklist**
- [ ] Content final (blurbs / attention-tags decided).
- [ ] `git mv VISION.md IDEAS.md COPY.md HANDOFF.md .planning/` (then `git add -A`).
- [ ] Preview once locally — both themes, expand a few rows, check links.
- [ ] **Get the user's explicit GO.**

**Merge (this is what updates the LIVE site)**
```
cd /mnt/d/projects/personal-website
git checkout master
git merge console-redesign
git push origin master
```
(Or merge the PR GitHub offered: `…/pull/new/console-redesign`.) Pages rebuilds in ~1 min — verify **adisujithkumar.github.io**.

---

## 5. Open decisions (still to settle with the user)
- Which blurb variations (A/B/C per item, `COPY.md`).
- Attention-tags: on/off + placement (header strip vs per-entry).
- Text-only vs reintroduce visuals (hero-in-`+more`).

*Already decided:* deploy to `master` after Phase 1 · ship static v1 before the shell · build order shell → ask-me bot → one wow.

---

## 6. Key facts

### Planning docs (read for depth)
- **`VISION.md`** — north-star / roadmap: console → interactive shell → game layer (beat-the-bot) → generative UI.
- **`IDEAS.md`** — interactivity ideas by build cost, Tiers 0–3 + "wow." Path: Tier 0 shell → Tier 2a bot → one wow.
- **`COPY.md`** — blurb variations (A = live), the attention-tags system, recommendations, and the fact-check log.

### Fact-check corrections already applied (in `js/data.js`)
| Field | Was | Now |
|---|---|---|
| Sumo Logic year | 2024 | **2024–25** (May 2024 – Jul 2025) |
| AWS year | 2022 | **2022–23** (Feb 2022 – Apr 2023) |
| Brandbridg year | 2024 | **2024–25** (Mar 2024 – Aug 2025) |
| RISELab year | 2021 | **2020–21** (Dec 2020 – Dec 2021) |
| MCB year | 2020 | **2020–21** (Aug 2020 – May 2021) |
| awpy stars | ~310★ | **575★** (live count — will drift) |
| awpy maps | 7 | **9** (repo validates across 9) |
| Knockout tests | "558-test suite" | **"500+ tests"** (558 = true count; repo README says 472 — reconcile later) |

Everything else verified accurate: titles, company names, the Knockout **0%→84.8%** story, **~19K env-steps/s**, the 9-bot ELO tournament, awpy **PR #235 merged**, conical-BFS claims.

### Git quick-reference
- Redesign branch: **`console-redesign`** (origin, commit `ec8ccc1`).
- Live/Pages branch: **`master`** (2018 placeholder; never push without the user's go).

### Website follow-ups (small)
- Bump the Knockout repo README test count (472 → 558) so it matches the site's "500+".
- `awpy 575★` in `data.js` will drift — refresh or drop the number.

---

## Deferred → separate session (OTHER repos — not this session)
Five private repos each have a `PORTFOLIO_READINESS.md` (Gate A "safe to publish" + Gate B "worth showing"). When one ships, flip its `data.js` entry `status:"soon"` → `"live"` (add `hero` + `links`). All 5 readiness files are currently **uncommitted/local** in their repos. Kick those off in their own sessions pointed at each readiness file.

| Repo | Path | Note |
|---|---|---|
| catan-ai | `/mnt/d/projects/game-ai/catan-ai` | ~1–2h; cheapest to ship |
| valorant-highlight-identification | `/mnt/d/projects/fps/valorant-highlight-idenitification` | ⚠️ ~285MB untracked debug PNGs — gitignore FIRST, never blanket `git add .` |
| quiz-generator / QBArena | `/mnt/d/projects/llms/quiz-generator` | ⚠️ rotate the live OpenAI key in `.env` before public |
| sf-stride | `/mnt/d/projects/personal_projects/sf-stride` | multi-day — UI/agent must be BUILT, not just cleaned |
| aca | `/mnt/d/projects/aca` | ~2–5 days — README + one green demo + UI screenshot |

Live-project source repos (reference): Knockout `/mnt/d/projects/game-ai/knockout-v2`; awpy CS2 fork `/mnt/d/projects/fps/awpy/csgo`.
