/* data.js — single source of truth for site content.
   The console layout and every theme render FROM this object,
   so adding a theme never touches the content.
   Content fact-checked against résumés + project repos (see .planning/COPY.md). */
const DATA = {
  profile: {
    name: "Adi Sujithkumar",
    // Shown only in <title>/meta for search + link previews — no on-page tagline by choice.
    tagline: "Software Engineer — Product, LLMs, Full-Stack",
    // One-line bio under the name (whoami): industry experience + research interest.
    standfirst: "full-stack engineer — llm agents & scalable backends; cv research background, exploring rl & llms",
    links: [
      { label: "GitHub",   short: "github",   url: "https://github.com/adisujithkumar" },
      { label: "LinkedIn", short: "linkedin", url: "https://linkedin.com/in/adi-sujithkumar" },
      { label: "X",        short: "x",        url: "https://x.com/AdiSujithkumar" },
      { label: "Email",    short: "email",    url: "mailto:adisujithkumar@gmail.com" }
    ]
  },

  experience: [
    {
      org: "Two Dots", role: "Software Engineer", year: "2025 →", field: "full stack",
      blurb: "Build and own the LLM voice + chat agents that walk renters through housing approval and show leasing agents where each application stands.",
      detail: "Independently built and own multiple LLM-powered voice and chat bots end to end — the context pipeline, prompt architecture, and structured-output system behind them — and led the rollout to production. Turned a TurboTax-style income survey into a natural-language conversation through prompt engineering and persona-based testing, and built the eval infrastructure plus an internal training UI so the agents are measured, not tuned by feel.",
      tags: ["typescript"]
    },
    {
      org: "Sumo Logic", role: "Software Engineer II", year: "2024–25", field: "platform & security",
      blurb: "Hardened the platform everything else runs on — API framework, auth, global security policies — in Java/Scala.",
      detail: "Built backend features in Java and Scala on the Core Platform team responsible for the public API framework, authentication, authorization, and app content — including global security policies, with a focus on platform security and backend reliability.",
      tags: ["java", "scala"]
    },
    {
      org: "Brandbridg AI", role: "Backend & Data Engineer (part-time)", year: "2024–25", field: "backend & data",
      blurb: "Owned the entire backend + data pipeline for a pre-seed creator↔business startup — auth, scraping, AWS Lambda/S3.",
      detail: "Built the Python auth layer (sign-up / sign-in) and designed a scalable social-media data pipeline, then migrated it to AWS Lambda + S3 for automated, continuous scraping, processing, and storage.",
      tags: ["python", "aws-lambda", "s3"]
    },
    {
      org: "AWS · Aurora Storage", role: "Software Development Engineer", year: "2022–23", field: "distributed systems",
      blurb: "Built two production features deep in Aurora MySQL's storage engine (Enhanced Binlog, CDC Streams) in a multi-threaded C++ system.",
      detail: "Did root-cause analysis in a multi-threaded C++ system, optimized crash recovery, built health-monitoring dashboards, and wrote integration tests across the storage stack. Worked in C++, Java, MySQL, Python, and Linux.",
      tags: ["c++", "mysql"]
    },
    {
      org: "Philadelphia Phillies", role: "Associate Quantitative Analyst", year: "2021", field: "sports analytics",
      blurb: "Invented new defensive metrics for an MLB R&D team that fed real player-development and acquisition calls.",
      detail: "Worked in the R&D department in Python (scipy / numpy / pandas / scikit-learn) on top of daily data ingestion via MySQL; the metrics fed into real player-development and acquisition decisions.",
      tags: ["python", "scikit-learn", "pandas"]
    },
    {
      org: "UC Berkeley · RISELab", role: "Computer Vision Researcher (undergrad)", year: "2020–21", field: "computer vision",
      blurb: "Made transformer video super-resolution ~3× faster on CPU (depthwise convs + quantization) at Berkeley's RISELab.",
      detail: "Inference optimization for transformer-based video super-resolution targeting near-real-time CPU performance — roughly 3× speedup using smaller and depthwise convolutions plus quantization in PyTorch. Also helped build an academic dataset to benchmark super-resolution models such as DLSS and TecoGAN.",
      tags: ["pytorch", "python"]
    },
    {
      org: "UC Berkeley · Molecular & Cell Biology", role: "Computer Vision Researcher (undergrad)", year: "2020–21", field: "computer vision",
      blurb: "Built the CV eye-tracking pipeline (DeepLabCut + Unity VR) for a Berkeley blindsight study — +70% extraction, ~95% accuracy.",
      detail: "Investigated blindsight in mice through a Unity VR setup; built a Python framework around DeepLabCut pose estimation, with debugging tools, to track eye movement from video — improving extraction by 70% at roughly 95% accuracy.",
      tags: ["python", "deeplabcut", "unity"]
    }
  ],

  education: {
    org: "UC Berkeley",
    detail: "B.S. Electrical Engineering & Computer Science (EECS) — Aug 2018 – Dec 2021"
  },

  projects: [
    {
      status: "live",
      title: "awpy — map control", field: "game analytics",
      blurb: "Shipped nav-mesh “map control” territory metrics into awpy (575★ CS analytics library), then forked it to CS2 with a threat-aware conical BFS validated across 9 maps.",
      detail: "Contributed the “map control” feature to awpy (pnxenopoulos/awpy): a BFS-over-nav-mesh metric scoring which team controls each area of the map, plus matplotlib heatmaps, animated round GIFs, and tests — merged via PR #235 and shipped in awpy 1.x (it was dropped in the 2.0 rewrite). A personal fork extends the idea to Counter-Strike 2 with a threat-aware “conical” BFS where cone depth and angle vary per weapon class (derived from HLTV kill-distance data), adds Z-floor gating for multi-level maps, and produces animated heatmaps validated across 9 competitive maps.",
      tags: ["python", "matplotlib"],
      hero: "assets/awpy-mapcontrol.gif",
      heroCaption: "Map control on a real de_dust2 round — green = CT territory, red = T, tick by tick.",
      links: [
        { label: "merged PR #235", short: "pr#235", url: "https://github.com/pnxenopoulos/awpy/pull/235" },
        { label: "CS2 fork", short: "fork", url: "https://github.com/adisujithkumar/csgo" }
      ]
    },
    {
      status: "live",
      title: "Knockout RL", field: "reinforcement learning",
      blurb: "A from-scratch RL stack for the GamePigeon 3v3 “Knockout” physics game — GPU-vectorized physics, self-play, and an LLM that designs its own reward. Self-play agents reliably beat random play; the current push is beating the hand-crafted heuristic bots.",
      detail: "An end-to-end RL system built from scratch: a GPU-vectorized physics engine (~19K env-steps/s), a PettingZoo environment, and PPO / MAPPO / self-play / MCTS trainers. The novel piece is an LLM-in-the-loop reward designer — Claude writes the reward, reads the training stats, and revises it (it once wrote a reward that taught the agent to suicide off the edge, caught that in the logs, and fixed it). Self-play agents now reliably beat random play; the current focus is the harder problem — beating a strong hand-crafted heuristic — where the real obstacles are a sparse, all-or-nothing reward and getting the MCTS priors right.",
      tags: ["python", "pytorch"],
      hero: "assets/knockout-winrate.png",
      heroCaption: "Every method clears ~90–100% vs random and stalls at 0% vs the hand-crafted heuristic — the honest ceiling.",
      secondary: "assets/knockout-ui.png",
      secondaryCaption: "The playable web frontend — pick a bot, click-drag to launch penguins on the shrinking ice.",
      links: [
        { label: "GitHub", short: "github", url: "https://github.com/adisujithkumar/knockout-gamepigeon-ai" }
      ]
    },
    {
      status: "soon", title: "QBArena", field: "llm agents",
      blurb: "Wikipedia → pyramidal quiz-bowl questions via LLMs (GPT-4o + Instructor), plus a Go buzzer “arena” to play them live.",
      tags: ["python", "go"]
    },
    {
      status: "soon", title: "catan-ai", field: "reinforcement learning",
      blurb: "RL agent for Settlers of Catan — PPO with a graph-convolutional-network policy on Catanatron.",
      tags: ["python"]
    },
    {
      status: "soon", title: "sf-stride", field: "llm agents",
      blurb: "Agentic SF “walking coach” — Claude tool-calls Google Maps + weather to propose progressively harder curated walks.",
      tags: ["typescript", "next.js"]
    },
    {
      status: "soon", title: "valorant-highlight-identification", field: "computer vision",
      blurb: "CV tool that finds your kills in Valorant footage — killfeed template-matching + OCR.",
      tags: ["python", "opencv"]
    },
    {
      status: "soon", title: "aca", field: "agent infra",
      blurb: "Token-budgeted memory + orchestration engine for AI coding agents — versioned SQLite context store + React graph UI.",
      tags: ["typescript", "sqlite"]
    }
  ]
};
