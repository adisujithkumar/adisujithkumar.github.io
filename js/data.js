/* data.js — single source of truth for site content.
   Every layout (ledger, console) and theme renders FROM this object,
   so adding a layout or a generated theme never touches the content.
   Content fact-checked against résumés + project repos (see COPY.md). */
const DATA = {
  profile: {
    name: "Adi Sujithkumar",
    // Shown only in <title>/meta for search + link previews — no on-page tagline by choice.
    tagline: "Software Engineer — Product, LLMs, Full-Stack",
    links: [
      { label: "GitHub",   short: "github",   url: "https://github.com/adisujithkumar" },
      { label: "LinkedIn", short: "linkedin", url: "https://linkedin.com/in/adi-sujithkumar" },
      { label: "X",        short: "x",        url: "https://x.com/AdiSujithkumar" },
      { label: "Email",    short: "email",    url: "mailto:adisujithkumar@gmail.com" }
    ]
  },

  experience: [
    {
      org: "Two Dots", role: "Software Engineer", year: "2025 →",
      blurb: "Build and own the LLM voice + chat agents that walk renters through housing approval and show leasing agents where each application stands.",
      detail: "Independently built and own multiple LLM-powered voice and chat bots end to end — the context pipeline, prompt architecture, and structured-output system behind them — and led the rollout to production. Turned a TurboTax-style income survey into a natural-language conversation through prompt engineering and persona-based testing, and built the eval infrastructure plus an internal training UI so the agents are measured, not tuned by feel.",
      tags: ["typescript", "llm", "voice-agents", "prompt-engineering", "evals"]
    },
    {
      org: "Sumo Logic", role: "Software Engineer II", year: "2024–25",
      blurb: "Core Platform team owning the API framework, authn/authz, and in-product app content.",
      detail: "Built backend features in Java and Scala on the Core Platform team responsible for the public API framework, authentication, authorization, and app content — including global security policies, with a focus on platform security and backend reliability.",
      tags: ["java", "scala", "backend", "authn", "authz", "api-design", "security"]
    },
    {
      org: "Brandbridg AI", role: "Backend & Data Engineer (part-time)", year: "2024–25",
      blurb: "Sole backend/data engineer at a pre-seed startup connecting creators and businesses.",
      detail: "Built the Python auth layer (sign-up / sign-in) and designed a scalable social-media data pipeline, then migrated it to AWS Lambda + S3 for automated, continuous scraping, processing, and storage.",
      tags: ["python", "aws-lambda", "s3", "data-pipeline", "web-scraping", "auth"]
    },
    {
      org: "AWS · Aurora Storage", role: "Software Development Engineer", year: "2022–23",
      blurb: "Shipped two Aurora MySQL features — Enhanced Binlog and Change Data Capture (CDC) Streams.",
      detail: "Did root-cause analysis in a multi-threaded C++ system, optimized crash recovery, built health-monitoring dashboards, and wrote integration tests across the storage stack. Worked in C++, Java, MySQL, Python, and Linux.",
      tags: ["c++", "java", "mysql", "python", "distributed-systems", "crash-recovery"]
    },
    {
      org: "Philadelphia Phillies", role: "Associate Quantitative Analyst", year: "2021",
      blurb: "Built novel defensive metrics to evaluate infielders — used in player development and acquisition.",
      detail: "Worked in the R&D department in Python (scipy / numpy / pandas / scikit-learn) on top of daily data ingestion via MySQL; the metrics fed into real player-development and acquisition decisions.",
      tags: ["python", "scikit-learn", "pandas", "mysql", "sports-analytics"]
    },
    {
      org: "UC Berkeley · RISELab", role: "Computer Vision Researcher (undergrad)", year: "2020–21",
      blurb: "Undergraduate research: ~3× faster transformer video super-resolution on CPU via lighter convolutions + quantization.",
      detail: "Inference optimization for transformer-based video super-resolution targeting near-real-time CPU performance — roughly 3× speedup using smaller and depthwise convolutions plus quantization in PyTorch. Also helped build an academic dataset to benchmark super-resolution models such as DLSS and TecoGAN.",
      tags: ["pytorch", "computer-vision", "super-resolution", "quantization", "research"]
    },
    {
      org: "UC Berkeley · Molecular & Cell Biology", role: "Computer Vision Researcher (undergrad)", year: "2020–21",
      blurb: "Undergraduate research: mouse eye-tracking for a blindsight VR study — +70% data extraction at ~95% accuracy.",
      detail: "Investigated blindsight in mice through a Unity VR setup; built a Python framework around DeepLabCut pose estimation, with debugging tools, to track eye movement from video — improving extraction by 70% at roughly 95% accuracy.",
      tags: ["python", "deeplabcut", "pose-estimation", "computer-vision", "unity", "research"]
    }
  ],

  education: {
    org: "UC Berkeley",
    detail: "B.S. Electrical Engineering & Computer Science (EECS) — Aug 2018 – Dec 2021"
  },

  projects: [
    {
      status: "live",
      title: "awpy — map control",
      blurb: "Shipped nav-mesh “map control” territory metrics into awpy (575★ CS analytics library), then forked it to CS2 with a threat-aware conical BFS validated across 9 maps.",
      detail: "Contributed the “map control” feature to awpy (pnxenopoulos/awpy): a BFS-over-nav-mesh metric scoring which team controls each area of the map, plus matplotlib heatmaps, animated round GIFs, and tests — merged via PR #235 and shipped in awpy 1.x (it was dropped in the 2.0 rewrite). A personal fork extends the idea to Counter-Strike 2 with a threat-aware “conical” BFS where cone depth and angle vary per weapon class (derived from HLTV kill-distance data), adds Z-floor gating for multi-level maps, and produces animated heatmaps validated across 9 competitive maps.",
      tags: ["python", "bfs", "nav-mesh", "matplotlib", "sports-analytics", "open-source", "cs2"],
      hero: "assets/awpy-mapcontrol.gif",
      heroCaption: "Map control on a real de_dust2 round — green = CT territory, red = T, tick by tick.",
      links: [
        { label: "merged PR #235", short: "pr#235", url: "https://github.com/pnxenopoulos/awpy/pull/235" },
        { label: "CS2 fork", short: "fork", url: "https://github.com/adisujithkumar/csgo" }
      ]
    },
    {
      status: "live",
      title: "Knockout RL",
      blurb: "Taught an agent the GamePigeon 3v3 “Knockout” physics game from scratch — GPU-vectorized physics (~19K env-steps/s), self-play, and a Claude-in-the-loop reward designer that recovered an agent from 0% to 84.8%.",
      detail: "End-to-end RL system: a GPU-vectorized physics engine (~19K env-steps/s at 4096 parallel environments), a PettingZoo environment, and PPO / MAPPO / self-play trainers. The research piece is an LLM-in-the-loop reward designer — Claude authors the reward, reads back training stats, and repairs it; in one run it recovered an agent that had learned to suicide off the edge (0%) up to 84.8% across three self-corrected iterations. Backed by 500+ tests, an ELO tournament across 9 bots, and a playable web frontend. Honest caveat: agents reach ~99% vs random but ~0–3% vs the hand-crafted heuristic — crossing that ceiling is the open problem.",
      tags: ["python", "pytorch", "reinforcement-learning", "ppo", "mappo", "self-play", "multi-agent", "llm"],
      hero: "assets/knockout-winrate.png",
      heroCaption: "Every method clears ~90–100% vs random and stalls at 0% vs the hand-crafted heuristic — the honest ceiling.",
      secondary: "assets/knockout-ui.png",
      secondaryCaption: "The playable web frontend — pick a bot, click-drag to launch penguins on the shrinking ice.",
      links: [
        { label: "GitHub", short: "github", url: "https://github.com/adisujithkumar/knockout-gamepigeon-ai" }
      ]
    },
    {
      status: "soon", title: "QBArena",
      blurb: "Wikipedia → pyramidal quiz-bowl questions via LLMs (GPT-4o + Instructor), plus a Go buzzer “arena” to play them live.",
      tags: ["python", "llm", "gpt-4o", "instructor", "go"]
    },
    {
      status: "soon", title: "catan-ai",
      blurb: "RL agent for Settlers of Catan — PPO with a graph-convolutional-network policy on Catanatron.",
      tags: ["python", "reinforcement-learning", "ppo", "gcn"]
    },
    {
      status: "soon", title: "sf-stride",
      blurb: "Agentic SF “walking coach” — Claude tool-calls Google Maps + weather to propose progressively harder curated walks.",
      tags: ["typescript", "nextjs", "claude", "agents", "google-maps"]
    },
    {
      status: "soon", title: "valorant-highlight-identification",
      blurb: "CV tool that finds your kills in Valorant footage — killfeed template-matching + OCR.",
      tags: ["python", "opencv", "ocr", "computer-vision"]
    },
    {
      status: "soon", title: "aca",
      blurb: "Token-budgeted memory + orchestration engine for AI coding agents — versioned SQLite context store + React graph UI.",
      tags: ["typescript", "sqlite", "agents", "orchestration"]
    }
  ]
};
