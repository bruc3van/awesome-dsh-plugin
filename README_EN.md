# 🐳 Awesome DSH Plugins

> Find the DeepSeek Harness plugin that truly fits you in 30 seconds. Every day, we automatically fetch and review GitHub projects tagged `dsh-plugin`: real plugins are organized by category, while topic riders are removed. With scenario-based categories, featured picks, popularity rankings, and visual guides, you can quickly see what each plugin does, who it is for, and how to get started. Star this project and help great plugins get discovered faster.

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Repositories](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbruc3van%2Fawesome-dsh-plugin%2Fmain%2Fdata%2Frepositories.json&query=%24.total_count&label=repositories&color=2563eb)](./CATALOG.md)
[![Snapshot & review queue](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
[![Refreshed](https://img.shields.io/github/last-commit/bruc3van/awesome-dsh-plugin?label=refreshed&color=10b981)](./CATALOG.md)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[中文](./README.md) · [Full catalog](./CATALOG.md) · [Star Top 200](./TOP200.md) · [Author showcase](./SHOWCASE.md) · [Recommend a plugin](./CONTRIBUTING.md) · [Machine-readable data](./data/repositories.json)

**If this list helps you discover something useful, consider leaving a Star ⭐ so more DSH users can find the ecosystem.**

## 🧭 Quick index

| You want to… | Go to |
| --- | --- |
| Pick a plugin in 30 seconds | [Featured picks](#-featured-picks): great community plugins organized around "what do you want DSH to do" |
| Install your first plugins | [Starter kits](#-starter-kits): pick one combo closest to your current problem |
| Browse the full ranking by stars | [Community leaderboard](#-community-leaderboard) (home Top 20) · [TOP200.md](./TOP200.md) (full Top 200) |
| Browse everything by category | [CATALOG.md](./CATALOG.md) (full catalog) · [Ecosystem at a glance](#-ecosystem-at-a-glance) |
| See what authors are submitting themselves | [Author showcase](#-author-showcase) (10 most recent on the home page) · [SHOWCASE.md](./SHOWCASE.md) (all entries) |
| Consume plugin data programmatically | [data/market.json](./data/market.json) — the curated downstream-market file (≤500 KB, see the [interface spec](https://github.com/bruc3van/dsh-desktop-safe-market/blob/master/docs/market-json-spec.md)); [data/repositories.json](./data/repositories.json) — daily automated snapshot with stars, license, and activity metadata |
| List or recommend your own plugin | [Recommend or correct an entry](#-recommend-or-correct-an-entry) / [CONTRIBUTING](./CONTRIBUTING.md) |

## 🗺️ Ecosystem at a glance

<!-- dsh:panorama:start -->
As of 2026-08-23 the catalog lists **9,365** verified repositories. Here is the shape of it:

```mermaid
mindmap
  root((DSH ecosystem 9365))
    Agents automation workflows · 3762
      Scheduled loops and event wakeups
      Multi-agent teamwork
      Long-term memory and self-evolution
      Approval budget and checkpoints
    UI and experience · 1715
      Desktop clients and terminal TUI
      Sidebar workbenches
      Skins and desktop pets
      Notifications and input
    Web and browser · 1352
      Browser bridge and page control
      Web search with citations
      Archiving and web forensics
    Design media and vision · 499
      Image understanding and OCR
      Design canvas and UI restoration
    Utilities and more · 467
      Files and encodings
      Format conversion
    Knowledge and research · 454
      Knowledge bases and cross-session memory
      Deep research
      Academia and math
    Ecosystem and resources · 434
      Plugin markets and registries
      Templates and scaffolds
      Guides and handbooks
    Developer tools · 427
      Git and diff
      Sandbox and runtimes
      Debugging and diagnostics
    Integrations and sharing · 255
      Chat import and sharing
      Remote access
      IM and external integrations
```
<!-- dsh:panorama:end -->

To browse every project in a category, see [CATALOG.md](./CATALOG.md) — the catalog is split into one volume per category, and the index lists them all.

## ⭐ Featured picks

**These are not ranked by stars, but we prioritize community-verified high-star projects** — most picks come from the Star Top 200: they solve a clear problem, document themselves well, stay maintained, and have been validated by many users. A few are dozens-of-stars picks with no substitute. Start from your problem, find the closest line, and the answer is one click away. Inclusion is not an endorsement of security or compatibility. For the full star-ranked board, see the [Community leaderboard](#-community-leaderboard). Screenshots under each category below are taken from the repositories' own READMEs — click any screenshot to jump straight to its repository home page.

### 🖥️ Desktop & terminal

- **Want a standalone desktop client** instead of a browser tab: [dsh-desktop](https://github.com/bruc3van/dsh-desktop) — the authentic official Web UI, with little modification, and closing the window doesn't stop your task: it stays resident in the tray until you open it again. The installer bundles the official runtime, so you just double-click to launch — no Node.js, no commands to type. Smart mode reuses the local instance you're already running, and fixed-address mode connects straight to a Web UI you maintain yourself. On security it's hardened layer by layer — window sandboxing, navigation locking, a hijack-proof update chain, and least privilege — and it ships a bundled security market with a curated selection of 600+ plugins, all reviewed before they install.
- **Want a Claude Code-style terminal UI**: [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — Full-screen interactive terminals with a live status line, thought streaming, and context/TPS gauges; the tianshu build adds TDD and evidence-gate workflows.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/bruc3van/dsh-desktop"><img src="https://github.com/bruc3van/dsh-desktop/raw/main/docs/images/marketplace.png" alt="dsh-desktop · marketplace" width="280"></a><br>[dsh-desktop](https://github.com/bruc3van/dsh-desktop) | <a href="https://github.com/bruc3van/dsh-desktop"><img src="https://raw.githubusercontent.com/bruc3van/dsh-desktop/main/docs/images/marketplace-sec-install.png" alt="dsh-desktop · safe install" width="280"></a><br>[dsh-desktop](https://github.com/bruc3van/dsh-desktop) | <a href="https://github.com/ccch1mneyyy/dsh-TUI"><img src="https://raw.githubusercontent.com/ccch1mneyyy/dsh-TUI/main/screenshots/splash.png" alt="dsh-TUI" width="280"></a><br>[dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) |
| <a href="https://github.com/huiliyi37/dsh-tianshu-tui"><img src="https://raw.githubusercontent.com/huiliyi37/dsh-tianshu-tui/main/docs/tui-screenshot.jpg" alt="dsh-tianshu-tui" width="280"></a><br>[dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | | |

### 🧰 Interface workbenches

- **Want one install that covers common UI needs**: [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) — Task board, Git graph, side panel, remote mobile UI, desktop pet, live token stats, and a skin center in one collection.
- **Want to see what is inside the context window**: [dsh-context](https://github.com/bowenliang123/dsh-context) — A Context tab in the Web UI showing what the model's context window is made of and how it evolves — helps time trimming and token control.
- **Want to turn the sidebar into a workbench**: [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — File rendering/editing, terminal, Git, and subagents built in, with third-party tab extensions.
- **Want the working status line to come alive**: [working-activity](https://github.com/ccch1mneyyy/working-activity) — Real-time tool activity and progress, witty copy, model self-narration, and context warnings — no more boring waits.
- **Want to inspect and operate the current web page from your dev conversation**: [dsh-browser](https://github.com/Lum1104/dsh-browser) — A Chrome side-panel extension that lets DSH operate your browser directly, with no vision capabilities required: grant the current tab and let DSH read and act on the page inside your existing conversation.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/zhu1090093659/dsh-web-ui"><img src="https://raw.githubusercontent.com/zhu1090093659/dsh-web-ui/main/docs/screenshots/13-hero-main.png" alt="dsh-web-ui" width="280"></a><br>[dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | <a href="https://github.com/bowenliang123/dsh-context"><img src="https://raw.githubusercontent.com/bowenliang123/dsh-context/main/docs/context-command.png" alt="dsh-context" width="280"></a><br>[dsh-context](https://github.com/bowenliang123/dsh-context) | |

### 👀 Let the model see and search

- **Want to add visual understanding to DSH**: [modlens](https://github.com/liustack/modlens) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — modlens turns images into structured OCR/layout/semantics evidence; dsh-vision-toolkit covers image Q&A, long-screenshot OCR, UI restoration, and pixel diffs.
- **Want paste-and-go vision with no key and no Python**: [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) — a built-in free vision chain (five-model anonymous fallback, no signup or key); image turns work like ordinary tool turns, with the model driving 10 `vision_*` pixel tools (ground, crop, describe, pixel diff, fix, palette, OCR, cutout, SVG trace, screenshot) in continuous multi-step sequences, plus structured evidence JSON; one-command install (Web profile), Node only.
- **Want the agent to search the web and X with citations**: [modsearch](https://github.com/liustack/modsearch) · [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) — modsearch searches and fetches from the web/X inline, returning cited structured evidence; anysearch-dsh adds the AnySearch provider and advanced search tools as a complementary backend.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/liustack/modlens"><img src="https://raw.githubusercontent.com/liustack/modlens/main/assets/demo-dsh-paste.jpg" alt="modlens" width="280"></a><br>[modlens](https://github.com/liustack/modlens) | <a href="https://github.com/Anionex/dsh-vision-toolkit"><img src="https://github.com/Anionex/dsh-vision-toolkit/raw/main/assets/dsh-view-example.png" alt="dsh-vision-toolkit" width="280"></a><br>[dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | <a href="https://github.com/ysr666/dsh-vision-router"><img src="https://github.com/ysr666/dsh-vision-router/raw/main/assets/dsh-conversation-image-qa.png" alt="dsh-vision-router" width="280"></a><br>[dsh-vision-router](https://github.com/ysr666/dsh-vision-router) |

### 🧠 Memory & unattended runs

- **Want auditable cross-session memory**: [mem9](https://github.com/mem9-ai/mem9) · [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) — mem9 is cross-session / cross-machine / cross-agent persistent shared memory with hybrid recall and a visual dashboard, with a native DeepSeek Harness integration; Mnemon is a three-tier memory control plane: persistent runtime context, searchable project documents, pluggable long-term memory, and smart routing.
- **Want coding tasks to run on a schedule**: [dsh-automation](https://github.com/titanwings/dsh-automation) — Run tasks in fresh Agent sessions on a plan, with schedules created and managed from the DSH Web UI or by an agent.
- **Requests keep dying to network hiccups and timeouts**, and you do not want to say "continue" by hand every time: [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) — Auto-sends a queued "continue" after non-human failures: error classification resumes only transient faults, adaptive backoff avoids hammering a broken upstream, and templated continue text keeps you in the loop — all configurable from the plugin settings card.
- **Want to rewind conversation and workspace state**: [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — Rewind to any earlier turn via a persistent Change Ledger, restoring both conversation and workspace state.
- **Want a desktop notification when a turn finishes**: [dsh-notification](https://github.com/omdsh-dev/dsh-notification) — Per-outcome notifications with keyword include/exclude rules so long tasks need no babysitting.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/omdsh-dev/dsh-mnemon"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-mnemon/9196fd9991676a6bd9a84d615fcd301eb52e872a/docs/assets/media/dsh-mnemon-memory-system-demo-poster.jpg" alt="dsh-mnemon" width="280"></a><br>[dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | <a href="https://github.com/titanwings/dsh-automation"><img src="https://raw.githubusercontent.com/titanwings/dsh-automation/main/docs/01-dashboard-en.png" alt="dsh-automation" width="280"></a><br>[dsh-automation](https://github.com/titanwings/dsh-automation) | |
| <a href="https://github.com/HsiangNianian/dsh-auto-continue"><img src="https://raw.githubusercontent.com/HsiangNianian/dsh-auto-continue/main/docs/demo.svg" alt="dsh-auto-continue" width="280"></a><br>[dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | <a href="https://github.com/Anionex/dsh-turn-rewind"><img src="https://raw.githubusercontent.com/Anionex/dsh-turn-rewind/main/docs/assets/turn-rewind-dialog.png" alt="dsh-turn-rewind" width="280"></a><br>[dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | |

### ✍️ Conversation details

- **Want to reference workspace files with @ mentions, like Codex**: [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — @-search workspace files in the composer and attach their contents to the prompt, no copy-paste needed.
- **Want to tune reasoning effort**: [dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) — Codex-style model and reasoning-effort sliders, plus a big-fish running slider.
- **Want to navigate and annotate long conversations**: [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) · [dsh-navbar](https://github.com/vlln/dsh-navbar) — Codex-style text annotations and quick jumps between user-message nodes.
- **Want a safety net for DSH**: [dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) — Undo config and plugin-code changes, secret-safe snapshots, one-click SAFE MODE, plus offline CLI/GUI that work even when DSH won't boot.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/omdsh-dev/dsh-at-file"><img src="https://github.com/omdsh-dev/dsh-at-file/raw/main/assets/screenshots/workspace-path-picker.png" alt="dsh-at-file" width="280"></a><br>[dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | <a href="https://github.com/HanaAyane/dsh-reasoning-effort"><img src="https://raw.githubusercontent.com/HanaAyane/dsh-reasoning-effort/main/assets/readme/themes.webp" alt="dsh-reasoning-effort" width="280"></a><br>[dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | <a href="https://github.com/vlln/dsh-navbar"><img src="https://raw.githubusercontent.com/vlln/dsh-navbar/main/docs/preview/navbar.png" alt="dsh-navbar" width="280"></a><br>[dsh-navbar](https://github.com/vlln/dsh-navbar) |
| <a href="https://github.com/lire1131/dsh-undo-savepoint"><img src="https://github.com/lire1131/dsh-undo-savepoint/raw/master/docs/webui-header.png" alt="dsh-undo-savepoint" width="280"></a><br>[dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | | |

### 🎨 Creation & fun

- **Want to change the skin / set a custom wallpaper**: [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) — dsh-deep-whale is the most popular whale-girl skin series (CC BY-NC-SA, non-commercial); DSH-Transparent-UI-Plugin is a highly customizable frosted-glass theme — blur, frost, and background all adjustable, with a switch back to the stock UI anytime.
- **Want interactive UI rendered in chat**: [dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) — Charts, forms, quizzes, Mermaid diagrams, and 3D scenes rendered inline, or model-generated interactive visualization cards.
- **Want agents to operate a real design canvas**: [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) — Create, edit, preview, and validate interactive multi-page OpenPencil designs.
- **Want a companion in the workspace**: [whale-girl](https://github.com/vlln/whale-girl) · [dsh-pet](https://github.com/PC2005-cloud/dsh-pet) — A draggable, feedable, playable desktop companion with persistent progression; or one-line-install pets (28 transparent animations) with a DIY pipeline that crafts custom pets from AI video.
- **Want a bit of fun**: [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · [anime-find](https://github.com/cocofhu/anime-find) · [dsh-minigames](https://github.com/lhh010/dsh-minigames) — Turn DSH into a 2005 portal site; search anime across multiple sources with Bangumi ratings in-chat; or play 18 offline mini-games while waiting.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/Small-tailqwq/dsh-deep-whale"><img src="https://github.com/Small-tailqwq/dsh-deep-whale/raw/main/maid-atelier/preview/light.webp" alt="dsh-deep-whale" width="280"></a><br>[dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | <a href="https://github.com/WYH66666666/DSH-Transparent-UI-Plugin"><img src="https://raw.githubusercontent.com/WYH66666666/DSH-Transparent-UI-Plugin/main/assets/1.png" alt="DSH-Transparent-UI-Plugin" width="280"></a><br>[DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | <a href="https://github.com/Nagi-ovo/dsh-visualize"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-visualize/main/assets/social-preview.jpg" alt="dsh-visualize" width="280"></a><br>[dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) |
| <a href="https://github.com/ZSeven-W/dsh-openpencil"><img src="https://github.com/ZSeven-W/dsh-openpencil/raw/main/docs/images/dsh-openpencil-overview.png" alt="dsh-openpencil" width="280"></a><br>[dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | <a href="https://github.com/PC2005-cloud/dsh-pet"><img src="https://github.com/PC2005-cloud/dsh-pet/raw/main/assets/screenshots/dsh-pet-running-1.png" alt="dsh-pet" width="280"></a><br>[dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | <a href="https://github.com/Nagi-ovo/dsh-ads"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-ads/main/assets/screenshot.webp" alt="dsh-ads" width="280"></a><br>[dsh-ads](https://github.com/Nagi-ovo/dsh-ads) |
| <a href="https://github.com/cocofhu/anime-find"><img src="https://raw.githubusercontent.com/cocofhu/anime-find/main/docs/banner.jpg" alt="anime-find" width="280"></a><br>[anime-find](https://github.com/cocofhu/anime-find) | | |

### 🛠️ Development & workflows

- **Want to turn one session into a collaborating team**: [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — The current session acts as the captain: create resumable subagents, split goals into tasks with dependencies, and coordinate members via direct messages, with a live Web UI activity panel.
- **Want to upgrade one-shot multi-agent runs into a workflow layer**: [dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) — Brings Claude Code's UltraCode mode to DSH: workflows that can be generated, saved, governed, observed, and recovered.
- **Want fewer manual approvals, safely**: [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) — Safe automatic permissions for DeepSeek Harness.
- **Want to reverse-engineer any app or binary**: [rea](https://github.com/morluto/rea) — Reverse engineer anything with agents, from app behavior down to native binaries (advanced users).
- **Want to turn existing application code into agent-callable capabilities**: [Code2Skill](https://github.com/leechen298/Code2Skill) — Generate Functions, MCP tools, workflow Skills, and offline tests from user-authorized frontend, backend, or full-stack source code, packaged as an installable DSH bundle.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/NanmiCoder/dsh-agent-teams"><img src="https://raw.githubusercontent.com/NanmiCoder/dsh-agent-teams/main/assets/ui.png" alt="dsh-agent-teams" width="280"></a><br>[dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | | |

### 🔀 Migration & integrations

- **Want to migrate chat histories from other tools into DSH**: [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — Full-fidelity import from 13 sources (Claude Code/Codex/ChatGPT/Cursor/Gemini/Reasonix/opencode/ZCode/Grok Build/OpenClaw/Pi/Hermes/Kimi) into resumable DSH sessions, plus reverse export/sync back to Claude Code.
- **Want to connect DSH to a QQ Bot**: [dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) — The official Tencent plugin bridging a QQ Bot into DeepSeek Harness.

### 🔌 Remote & external collaboration

- **Want to use DSH from a phone or tablet**: [dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) — An Android APK shell: WebView UI + embedded Termux runtime, SAF directory bridge, keep-alive service, and watchdog.
- **Want an external agent to drive Harness**: [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) — Runs an MCP server inside Harness so any MCP client (e.g. Hermes) can delegate coding tasks to Harness — a 'brain + arms' setup.
- **Want to access your local Harness securely from another device / operate remote hosts**: [dsh-remote](https://github.com/flymysql/dsh-remote) — A remote-work assistant (npm v0.8.x): multi-machine SSH (password / private key / agent / OTP / jump host) plus remote workspace selection and 21 `rw_*` tools (list / read / edit / exec / search / port forward / two-way SFTP mirror); ships a 🌐 remote-files sidebar (embedding dsh-better-sidebar), an audit log, and self-update. Respects the official safety design: no 0.0.0.0 hacks.

### 💰 Usage & billing

- **Want to track token usage and costs**: [dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) · [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) — dsh-usage-stats adds a GitHub-style usage heatmap, per-model breakdowns, and DeepSeek account balance to the Web GUI; dsh-cost-meter tracks per-session and daily costs synced with official pricing.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/Ychris12138/dsh-usage-stats"><img src="https://github.com/Ychris12138/dsh-usage-stats/raw/main/docs/images/usage-panel.svg" alt="dsh-usage-stats" width="280"></a><br>[dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | <a href="https://github.com/Han-1413141/dsh-cost-meter"><img src="https://github.com/Han-1413141/dsh-cost-meter/raw/master/docs/screenshot-sidebar-footer.png" alt="dsh-cost-meter" width="280"></a><br>[dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | |

### 🌱 Ecosystem entry points

- **Want to review before you install (security first)**: [dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) — a review-before-install DSH marketplace: the feed comes from this list's daily snapshot plus human curation, and "Safe install" executes nothing — it hands a security-review prompt to the agent, which actually reads the plugin's code, and only after it comes back clean do you decide whether to run the official install command. Off by default — it goes online only once you enable it, and the plugin itself has no interface that can run an install.
- **Want a plugin market right inside the DSH UI**: [dsh-market](https://github.com/dsh-market/dsh-market) · [DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) · [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) — dsh-market brings browse/search/one-click-install into the DSH UI; DSH-Plugins-Marketplace covers one-click browse/install/update of every GitHub dsh-plugin plugin; dsh-plugin-hub is a plugin manager & marketplace with one-click enable/disable, update detection, and one-click framework upgrade, covering all GitHub dsh-plugin plugins & skills.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/bruc3van/dsh-desktop-safe-market"><img src="https://raw.githubusercontent.com/bruc3van/dsh-desktop-safe-market/master/assets/screenshots/marketplace.png" alt="dsh-desktop-safe-market" width="280"></a><br>[dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) | <a href="https://github.com/dsh-market/dsh-market"><img src="https://raw.githubusercontent.com/dsh-market/dsh-market/main/assets/demo-en.png" alt="dsh-market" width="280"></a><br>[dsh-market](https://github.com/dsh-market/dsh-market) | |

### 🚀 Starter kits

You do not need to install everything. Start with the kit closest to the problem you have today:

| Kit | For | Combination |
| --- | --- | --- |
| Everyday experience | First install: start with the desktop client, then common input | [dsh-desktop](https://github.com/bruc3van/dsh-desktop) · [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) |
| Terminal lover | Command-line fans who want a full-screen terminal | [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) |
| Vision & search | Let a text-only model see and search | [modlens](https://github.com/liustack/modlens) · [modsearch](https://github.com/liustack/modsearch) · [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) |
| Look & feel | Skins, frosted glass, and desktop pets | [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) · [whale-girl](https://github.com/vlln/whale-girl) |
| Multi-agent teams | Hand complex tasks to a team of agents | [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) · [dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) · [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) |
| Memory & long-running | Cross-session memory + auto-resume for unattended projects | [mem9](https://github.com/mem9-ai/mem9) · [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) · [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) |

**Read first:** [dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) — a deep 0-to-1 handbook for DSH: install, plugin development, performance tuning, and real-world case studies (Chinese + English PDF). Want to write your own plugins? Start with [hello-dsh](https://github.com/pingfanfan/hello-dsh) — a zero-to-plugin tutorial with 22 Chinese skill examples.

## 🏆 Community leaderboard

Community popularity by stars, from the 2026-08-23 snapshot. Repositories riding the `dsh-plugin` topic without being plugins, and editorially blacklisted repositories, are excluded — see [data/curated.json](./data/curated.json); new repositories first enter the [review queue](./data/review/pending.md) and rank only after the maintainer has verified them ([data/approved.json](./data/approved.json)). The home page shows the Top 20; the full Top 200 is in [TOP200.md](./TOP200.md). Ranking reflects popularity only — not quality, compatibility, or security.

<!-- dsh:leaderboard:start -->
| # | Project | ⭐ Stars | License |
| ---: | --- | ---: | --- |
| 1 | [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | 6692 | — |
| 2 | [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | 5711 | Apache-2.0 |
| 3 | [liustack/modlens](https://github.com/liustack/modlens) | 3545 | MIT |
| 4 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 2706 | MIT |
| 5 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 2356 | MIT |
| 6 | [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 1978 | MIT |
| 7 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | 1623 | — |
| 8 | [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | 1278 | MIT |
| 9 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | 1197 | Apache-2.0 |
| 10 | [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | 989 | MIT |
| 11 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 941 | MIT |
| 12 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 932 | Apache-2.0 |
| 13 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | 884 | MIT |
| 14 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 814 | MIT |
| 15 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | 801 | AGPL-3.0 |
| 16 | [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | 680 | MIT |
| 17 | [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity) | 654 | MIT |
| 18 | [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | 638 | — |
| 19 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 635 | MIT |
| 20 | [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop) | 621 | MIT |
<!-- dsh:leaderboard:end -->

[See the full Star Top 200 →](./TOP200.md)

## 🆕 Recently joined

Manually screened recent projects, updated from time to time:

| Project | Description | Created |
| --- | --- | --- |
| [10086ggqq/dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) | Terraria pixel-world skin: wizard companion, live dialogue, tool approval, and difficulty switching. | 2026-08-22 |
| [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | Live Android emulator or USB device stream inside a DSH conversation, driven through adb. | 2026-08-21 |
| [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | Distilled long-term memory: recall by meaning, writing gated by evidence; DSH plugin + MCP server. | 2026-08-21 |
| [qkycir-123/dsh-run2skill](https://github.com/qkycir-123/dsh-run2skill) | Local-first Run-to-Skill plugin: turn a completed run into a reusable DSH skill. | 2026-08-19 |
| [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | Injector + task-aware reasoning-mode router kit (measured P1–P23). | 2026-08-14 |
| [yjh051108/dsh-router-standard](https://github.com/yjh051108/dsh-router-standard) | Task-aware reasoning-mode router with spec/mixed/react bands and phase-transition evidence. | 2026-08-14 |
| [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | 5 MB Tauri desktop client: zero environment setup, preset plugins, Windows/macOS/Linux. | 2026-08-14 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | Evidence-first deep-research workspace with persistent workflow state and a research Web UI. | 2026-08-12 |

## 📣 Author showcase

Self-submitted recommendations from plugin authors, following the [contributing rules](./CONTRIBUTING.md#作者自荐--self-promotion). **These entries are not editorially reviewed and carry no quality or security endorsement** — evaluate them yourself before installing (see Usage & safety below). At most 30 entries are kept — first in, first out; entries promoted to the [Featured picks](#-featured-picks) above are removed from this section without using a slot. The home page shows only the **10 most recent entries**; the complete list lives in [SHOWCASE.md](./SHOWCASE.md).

<!-- dsh:showcase:start -->
- **[dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens)** ([@labmimors](https://github.com/labmimors) · 2026-08-15) — Keeps a large MCP catalog behind two model-visible interfaces, `mcp_search` and `mcp_call`, reveals a small set of exact schemas on demand, and applies the same `allowTools` / `denyTools` policy to search and calls; for DSH users connecting dozens to thousands of MCP tools, with a local schema-byte calculator and CI budget Action.
- **[dsh-movein](https://github.com/sjh9714/dsh-movein)** ([@sjh9714](https://github.com/sjh9714) · 2026-08-16) — Moves a whole Claude Code setup into DSH in one command: skills, slash commands, MCP servers, hooks, subagents and permission rules (deny/ask bridge with a migration diff report), dry run by default; `--reverse` brings DSH-born skills back for dual boot, and v0.5 adds a doctor post-move health check (including the frontmatter shape DSH silently drops) plus automatic pre-write backups with one-command restore.
- **[dsh-compressor](https://github.com/lifeodyssey/dsh-compressor)** ([@lifeodyssey](https://github.com/lifeodyssey) · 2026-08-16) — A slim port of Headroom: compresses tool output, cuts up to 20% of context, without touching the context cache. For long tool logs / JSON / diffs that bloat context.
- **[dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream)** ([@Laplace-bit](https://github.com/Laplace-bit) · 2026-08-16) — Silky streaming reveal for the DSH Web UI: typewriter follows token arrival, Markdown renders while streaming, line breaks glide in, no flicker; follow stays with the user and prefers-reduced-motion is respected.
- **[dsh-win32](https://github.com/sjh9714/dsh-win32)** ([@sjh9714](https://github.com/sjh9714) · 2026-08-18) — Native Windows shell and Workspace Write sandbox presets for DSH without WSL. Sandboxed sessions use busybox-w32 and unrestricted sessions use Git Bash. It preserves GBK and UTF-16 reads, while `doctor` checks presets, bundles, write boundaries, and known setup problems. Windows CI covers persistent shell round trips and interrupts under a restricted token.
- **[dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory)** ([@Phant0Meow](https://github.com/Phant0Meow) · 2026-08-19) — Cross-session long-term memory for DeepSeek Harness: seven-layer node:sqlite store (soul/user/project/fact/lesson/topic/rules), cache-friendly injection on the first message, memory_* retrieve/read/write tools, per-message keyword matching, BM25 × Ebbinghaus-weighted retrieval, and per-window nightly consolidation (dream).
- **[dsh-trace-compare](https://github.com/lamost423/dsh-trace-compare)** ([@lamost423](https://github.com/lamost423) · 2026-08-20) — Trace Compare & Live Maze: draws how the agent actually explored on one wall-clock timeline — the main path, failed detours, backtracks, and subagent branches; upload 1–2 session logs for a single-run maze or a same-axis comparison (per-turn alignment plus a detour inventory), or watch the maze grow live in a session tab; all verdicts are deterministic rules with hover rationale — no LLM judging.
- **[dsh-feishu](https://github.com/PGZXB/dsh-feishu)** ([@PGZXB](https://github.com/PGZXB) · 2026-08-20) — DeepSeek Harness inside Feishu: one chat maps to one dsh session, with the command panel, approvals and questions all card-based and output streaming as live cards; one QR scan completes the setup, so you can drive your local agent from phone or desktop. Published on npm as `@dsh-feishu/dsh-feishu`.
- **[dsh-easyrewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite)** ([@Renzic-Stone](https://github.com/Renzic-Stone) · 2026-08-21) — Inline edit and recall for your own user messages in DSH Web: click a bubble to edit in place, or hit the recall key to truncate and resend — lazy commit, seamless archive/replace, a version pager to flip through history, per-session draft persistence with timeout auto-backup, and a trilingual UI (zh/en/ja); official extension points only, zero source patches.
- **[tabbit-browser](https://github.com/Tabbit-Browser/dsh-tabbit)** ([@Tabbit-Browser](https://github.com/Tabbit-Browser) · 2026-08-21) — Lets the DSH agent drive your Tabbit Browser through the browser-owned, task-isolated Playwright CLI (`tabbit-cli`): real pages, real login state, real interactions, for web automation, information extraction, QA and benchmarks. Ships a `tabbit-browser` skill (persistent task spaces, locators and waits, screenshots, receipts and recovery; auto-registered with the plugin, called via `/tabbit-browser`) and a `tabbit_browser_install` preflight tool (detects stable editions ≥1.9.0 and the runtime; starts a DSH background job to download the region-appropriate installer when missing or outdated). One-command install: `dsh plugin --profile web add github:Tabbit-Browser/dsh-tabbit`. ⚠️ No LICENSE file in the repo (README states MIT).
<!-- dsh:showcase:end -->

[See all 30 showcase entries →](./SHOWCASE.md)

## 🔍 How this list is maintained

- **Built for users, not crawlers:** the front page is organized around "what I want to get done", not hundreds of repo names.
- **Layered: human picks + full index:** the front page carries only hand-screened featured picks and the showcase preview; [CATALOG.md](./CATALOG.md) and its per-category volumes list every verified repository; new repositories first enter the [review queue](./data/review/pending.md) and appear after verification and merge (convention: [data/review/README.md](./data/review/README.md)).
- **Automated data, human pages:** the raw snapshot and the review queue refresh daily by script; the catalog and Top 200 leaderboard are regenerated only after a human review merge (generators: [scripts/merge.mjs](./scripts/merge.mjs), [scripts/top.mjs](./scripts/top.mjs), switchable back to Top 100); the home-page featured picks, showcase, and recently-joined sections are edited by hand, so polluted API data (star inflation, topic riders) never rewrites recommendations automatically.
- **Riders removed:** repositories carrying the `dsh-plugin` topic without being DSH plugins (the platform itself, other agent tools, competing catalogs) and editorially blacklisted repositories are excluded from the catalog and leaderboard, with per-repo reasons recorded in [data/curated.json](./data/curated.json) (the leaderboard additionally honors `leaderboard_exclusions` for repos that stay in the catalog but do not rank) — auditable and contestable at any time.
- **Downstream market file:** [data/market.json](./data/market.json) is the curated file downstream markets consume (e.g. the DSH desktop plugin market): the snapshot plus curation, filtered, cleaned, and dealt round-robin across categories (≤600 rows, ≤500 KB). It is rebuilt on every daily snapshot refresh and immediately after every curation merge; the field and generation rules live in the downstream [publishing spec](https://github.com/bruc3van/dsh-desktop-safe-market/blob/master/docs/market-json-spec.md). The same runs also publish [MARKET.md](./MARKET.md), a read-only star-ranked rendering of the file for previewing the market on GitHub without installing anything.
- **Chinese by default, bilingual:** native readability for the main audience, with a dedicated English entry point.

As of 2026-08-23, the catalog lists **9,365** repositories across **28** primary languages; **8,309** declare a license and **9,338** are neither archived nor disabled (the catalog updates after each human review merge — see [CATALOG.md](./CATALOG.md) for current numbers).

## ⚠️ Usage & safety

Third-party plugins can read conversations, files, network traffic, or system resources. Before installing, check the source, permissions, license, install method, and recent activity — and try new plugins in an isolated environment first. This list is for discovery and organization only; it is not affiliated with or endorsed by DSH, and inclusion is not a security or compatibility endorsement.

## 🤝 Recommend or correct an entry

Spot a miss, a wrong category, or stale wording? Open an Issue or Pull Request:

- **Get your plugin listed:** a public repo tagged `dsh-plugin` that is actually a DSH plugin enters the [review queue](./data/review/pending.md) on the next daily refresh and appears in the full catalog after we verify it — **no PR to this repo needed**. Topic riders are removed, with reasons recorded in [data/curated.json](./data/curated.json).
- **Self-promote as an author:** if you own the plugin, append one entry (Chinese and English) to [SHOWCASE.md](./SHOWCASE.md) following the [contributing rules](./CONTRIBUTING.md#作者自荐--self-promotion) and sync the home-page showcase preview to the 10 most recent entries — no editorial review needed.
- **Get on the front page:** the featured picks and recently-joined sections are hand-maintained — open an Issue telling us what problem it solves and for whom, or edit the corresponding Markdown directly with your reasoning. The leaderboard [TOP200.md](./TOP200.md) is generated by script; to keep a repository out of the board, register it under `leaderboard_exclusions` in [data/curated.json](./data/curated.json) with a reason.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bruc3van/awesome-dsh-plugin&type=Date)](https://star-history.com/#bruc3van/awesome-dsh-plugin&Date)

## 🔗 Related projects

**Maintained by the author**

- **[dsh-desktop](https://github.com/bruc3van/dsh-desktop)** — a standalone DeepSeek Harness client that keeps an agent safely resident on your desktop. The window loads the authentic official Web UI, with little modification; closing the window doesn't stop your task — it stays resident in the tray until you open it again; the installer bundles the official runtime, so you just double-click to launch. Smart mode reuses an existing local instance and fixed-address mode connects straight to a Web UI you maintain yourself; security is hardened layer by layer, and it ships a bundled security market with 600+ curated plugins, all reviewed before they install. (Its bundled marketplace's catalog data comes from this repository's [`market.json`](./data/market.json).)
- **[dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market)** — the review-before-install DSH marketplace. (The downstream market consuming this repository's [`market.json`](./data/market.json); it powers the Plugins marketplace bundled with the DSH desktop client.)

**Official repositories**

- **[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)** — DeepSeek Harness: Everything is a Plugin. The upstream project behind the official `dsh` and Web UI — every plugin in this catalog exists for it.

## License

This list is published under the [MIT License](./LICENSE); each listed project remains under its own license.
