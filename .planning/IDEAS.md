# Interactivity Ideas — adisujithkumar.github.io

Ways to make the terminal site interactive, sorted by build cost. **Backend?** = needs more than static GitHub Pages (a serverless function or a hosted model).

## Tier 0 — micro (no backend · hours)
- **Real typeable shell** — `help`, `ls`, `cat <file>`, `open <project>`, `theme <name>`, `clear`, `whoami`, `history`. The core upgrade; almost everything below hangs off a command parser.
- Command history (↑/↓), tab-completion, friendly "command not found → try `help`".
- Hotkeys: `t` cycles theme, `/` focuses the prompt, `g` → GitHub.
- Easter eggs: `sudo`, `rm -rf /` (joke), `uname`, `fortune`, `coffee`, Konami code.
- `cat resume.pdf` → downloads the PDF; `contact` → copies the email.

## Tier 1 — light dynamic (no backend · localStorage · days)
- **Fake filesystem** — `cd projects/knockout`, `ls`, `cat README`; explore like a real box.
- **Unlockables** — a hidden `secret/` dir / `progress` tracked in localStorage, revealed after a command or sequence.
- **Tiny terminal games** — guess-the-number, a typing test, tic-tac-toe vs a trivial AI, `2048`.
- **Curated `theme make`** — pick from a few preset "vibes" (no LLM yet).
- Tailored greeting by referrer (arrived from LinkedIn → "hi, recruiter").

## Tier 2 — smart (needs a tiny backend OR a client-side model)
- **★ Ask-me bot (your idea)** — an `ask "..."` command that answers questions about my experience/projects and, when unsure, says *"email me."* Three ways, cheapest first:
  - **(a) Retrieval-only, NO backend — "insanely lightweight":** ship a curated FAQ + experience/project snippets; match the question (keywords, or a tiny embedding model via transformers.js) → return the best snippet, else the email fallback. 100% in-browser, works on Pages, no API key. Genuinely light.
  - **(b) Serverless RAG:** a Vercel/Cloudflare function proxies a cheap model (Claude Haiku) over a small context JSON — better phrasing, hides the key, costs ~nothing.
  - **(c) In-browser LLM:** a quantized small model via WebLLM — "whoa, it runs the model in my tab." Heavier download, still no backend.
  - Guardrails either way: scope to my data, refuse off-topic, always offer `email me`.
- Live GitHub stats in `cat github` (stars / recent commits via the API).
- `contact` form → email (serverless or Formspree).

## Tier 3 — "wow" (ambitious · memorable)
- **★ Beat-the-bot to unlock** — play my actual Knockout bot (policy compiled to JS/WASM) in a mini canvas; winning unlocks hidden sections. Ties straight to the flagship.
- **★ CS2D-style mini-game** with a bot to beat — visualize live "map control," tie-in to the awpy work.
- **Generative UI** — `theme make "warm 70s terminal"` → an LLM emits a CSS-variable theme at runtime (the reach goal).
- **Talk to terminal-Adi** — the ask-me bot with personality + optional TTS voice; a conversational "clone."
- **Career as a text adventure** — `go aws`, `examine aurora`; each role is a room.
- **Runnable demo** — execute a real snippet of a project in-browser (Pyodide), e.g. map-control on a sample.
- **Guestbook** — `sign` leaves a message others see (needs a tiny store).

## Suggested path
1. **Typeable shell (Tier 0)** — unlocks games, unlocks, and the bot all at once.
2. **Retrieval ask-me bot (2a)** — the first "smart" feature, on-brand "insanely lightweight," no backend.
3. Pick one **wow** (beat-the-bot or generative UI) once the shell exists.
