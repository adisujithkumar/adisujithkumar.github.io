# adisujithkumar.github.io

Personal site for Adi Sujithkumar. Static, dependency-free (plain HTML/CSS/JS), served by GitHub Pages from `master`.

## Two views, one content layer
- **`index.html`** — *Console*: a terminal/SSH feel. **Default landing page.**
- **`ledger.html`** — *Ledger*: a single quiet column. Calm fallback.

Both render from the same `js/data.js`, so content is written once. A small `console · ledger` switch flips between them.

## Architecture
```
index.html / ledger.html    layout shells (mount points)
css/base.css                design tokens + themes (CSS custom properties)
css/console.css             Console structure
css/ledger.css              Ledger structure
js/data.js                  CONTENT — profile, experience[], projects[]
js/render-console.js        data → Console DOM (SHOW_HEROES flag: text-only vs hero images)
js/render-ledger.js         data → Ledger DOM
js/console-boot.js          Console boot + typed-command animation
js/theme.js                 Light / Dark / Terminal switch (+ localStorage)
assets/                     project hero images / GIFs
```
The load-bearing rule: **nothing hardcodes a color** — every value resolves through CSS variables on `:root[data-theme="…"]`. So a future "prompt-an-aesthetic" feature is just *emit one new `[data-theme]` block*, not a rewrite.

## Planning docs
- `VISION.md` — north-star & roadmap (console → interactive shell → game layer → generative UI)
- `IDEAS.md` — interactivity ideas by complexity tier + "wow"
- `COPY.md` — blurb variations, attention-tags, recommendations, fact-check log
- `HANDOFF.md` — pick-up guide for a new session

## Develop
Open `index.html` directly, or serve locally: `python3 -m http.server 8000`.
