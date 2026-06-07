# Vision & Roadmap — adisujithkumar.github.io

The site is a terminal. The résumé is the surface; the goal is something you *use*, not just read.

## North star
Feel like SSH-ing into Adi's machine — and, over time, something you can *play with*: poke around a filesystem, run commands, and unlock things by beating a bot. Minimal on the surface, deep underneath. The **Ledger** view (`ledger.html`) stays as a calm, conventional fallback.

## Where we are (v1 — current)
- **Console is the default** (`index.html`): terminal-themed, in a window chrome (traffic-light dots + title bar), with a boot sequence, typed commands, an ASCII banner, and a blinking prompt.
- Content is **data-driven** (`js/data.js`) and **theme-driven** (CSS variables in `css/base.css`) — adding a layout, theme, or command never touches content.
- Featured: **awpy map control** + **Knockout RL**; Experience (7 roles + education); pipeline projects listed as `soon`.
- Themes: Light / Dark / Terminal. A quiet **Ledger** alternate via the `console · ledger` switch.
- Boot animation is progressive enhancement: content shows without JS, plays once per session (`?replay` to force).

## Phase 1 — Make the terminal real (interactive)
Turn the static session into a typeable shell:
- Commands: `help`, `whoami`, `ls`, `cat <file>` (experience / about / now), `open <project>` (opens repo/PR), `theme <name>`, `clear`, `history`.
- Command history (↑/↓), tab-completion, friendly unknown-command hints.
- Keep the static render as the no-JS / scraper fallback.

## Phase 2 — Game layer (the fun)
- `play knockout` → a small playable challenge against the real Knockout bot (or a distilled policy). **Win to unlock** hidden sections (secret projects, easter eggs); progress persists in localStorage; a `progress` command shows what's left.
- Stretch: a tiny **CS2D-style** browser game with a bot to beat — ties straight into the awpy / CS-analytics work.

## Phase 3 — Generative UI (reach)
- `theme make "warm 70s terminal"` → an LLM emits a new CSS-variable theme block at runtime.
- Needs a serverless proxy (Vercel — already in the toolkit) or bring-your-own-key. Variable-only theming keeps this a small, safe surface.

## Content pipeline (publish as gates clear)
Each pipeline repo has a `PORTFOLIO_READINESS.md` with **Gate A** (safe to make public) + **Gate B** (worth showing). Suggested order:
`catan-ai → valorant → quiz-generator (QBArena) → sf-stride → aca`.
Flip a project from `soon` to `live` in `js/data.js` once it clears both gates.

## Principles
- **Content as data, presentation as theme.** Nothing hardcodes a color; layouts read `var(--*)`.
- **Progressive enhancement.** Animation/interactivity layer on top; the content is there without them.
- **Minimal surface, honest copy.** Lead with results; keep the real caveats (e.g. Knockout's 0% vs heuristic).

## Parking lot
- `last login` / motd flavor, fake `uname`, `cat ~/.now` (a /now page), `cat resume.pdf` → download.
- Keyboard-only / vim-ish navigation.
- A `sign` guestbook command. Visitor count. Konami-code easter egg.
- Decide whether to keep employer hyperlinks off (current default) or add verified ones.
