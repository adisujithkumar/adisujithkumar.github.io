# adisujithkumar.github.io

Personal site for Adi Sujithkumar. Static, dependency-free (plain HTML/CSS/JS), served by GitHub Pages from `master`.

## Console
A single terminal/SSH-style page (`index.html`). It boots into a Terminal theme with a typed-command animation (once per tab session — append `?replay` to force it; respects reduced-motion). Light / Dark / Terminal are switchable from the window bar and persisted in `localStorage`.

## Architecture
```
index.html              layout shell (mount points)
css/base.css            design tokens + the 3 themes (CSS custom properties)
css/console.css         Console structure / styling
js/data.js              CONTENT — profile (name, one-line bio, links), experience[], projects[]
js/render-console.js    data → Console DOM (SHOW_HEROES flag: text-only vs hero images)
js/console-boot.js      Console boot + typed-command animation
js/theme.js             Light / Dark / Terminal switch (+ localStorage)
assets/                 project hero images / GIFs (currently suppressed in the Console)
```
Content lives once in `js/data.js`: a `profile` (name, one-line bio, links), `experience[]`, and `projects[]`. Each entry carries a `field` (its domain, shown as an accent chip) and a `tags` stack (concrete tech, shown as muted chips). The load-bearing rule: **nothing hardcodes a color** — every value resolves through CSS variables on `:root[data-theme="…"]`. So a future "prompt-an-aesthetic" feature is just *emit one new `[data-theme]` block*, not a rewrite.

## Planning docs
Under `.planning/` (never rendered on the site):
- `VISION.md` — north-star & roadmap (console → interactive shell → game layer → generative UI)
- `IDEAS.md` — interactivity ideas by complexity tier + "wow"
- `COPY.md` — blurb variations, recommendations, fact-check log
- `HANDOFF.md` — pick-up guide for a new session

## Develop
Open `index.html` directly, or serve locally: `python3 -m http.server 8000`.
