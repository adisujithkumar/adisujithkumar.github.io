# adisujithkumar.github.io

Personal site for Adi Sujithkumar. Static, dependency-free (plain HTML/CSS/JS), served by GitHub Pages from `master`.

## Two views, one content layer
- **`index.html`** — *Ledger*: a single quiet column. Default landing page.
- **`console.html`** — *Console*: a terminal/SSH feel.

Both render from the same `js/data.js`, so content is written once. A small `view: ledger · console` switch flips between them.

## Architecture
```
index.html / console.html   layout shells (mount points)
css/base.css                design tokens + themes (CSS custom properties)
css/ledger.css              Ledger structure
css/console.css             Console structure
js/data.js                  CONTENT — profile, experience[], projects[]
js/render-ledger.js         data → Ledger DOM
js/render-console.js        data → Console DOM
js/theme.js                 Light / Dark / Terminal switch (+ localStorage)
assets/                     project hero images / GIFs
```
The load-bearing rule: **nothing hardcodes a color** — every value resolves through CSS variables on `:root[data-theme="…"]`. So a future "prompt-an-aesthetic" feature is just *emit one new `[data-theme]` block*, not a rewrite.

## Roadmap
- v1: Experience + two featured projects (awpy map control, Knockout RL), theme switcher. ✅ building
- Later: publish the pipeline projects as their `PORTFOLIO_READINESS.md` gates clear (catan-ai → valorant → quiz-generator → sf-stride → aca).
- Reach: generative UI (describe a vibe → re-theme), and a game-y Console mode (`$ play knockout`, unlock-by-beating-the-bot, a CS2D bot challenge).

## Develop
Open `index.html` directly, or serve locally: `python3 -m http.server 8000`.
