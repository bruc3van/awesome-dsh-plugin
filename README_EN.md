# 🐳 Awesome DSH Plugins Pro

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Verified repos](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbruc3van%2Fawesome-dsh-plugin-pro%2Fmain%2Fdata%2Fstats.json&query=%24.repositories&label=verified%20repos&color=2563eb)](./CATALOG.md)
[![Snapshot & review queue](https://github.com/bruc3van/awesome-dsh-plugin-pro/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin-pro/actions/workflows/update-catalog.yml)
[![Refreshed](https://img.shields.io/github/last-commit/bruc3van/awesome-dsh-plugin-pro?label=refreshed&color=10b981)](./CATALOG.md)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[中文](./README.md) · [Full catalog](./CATALOG.md) · [Star Top 200](./TOP200.md) · [Author showcase](./SHOWCASE.md) · [Recommend a plugin](./CONTRIBUTING.md) · [Machine-readable data](./data/repositories.json)

A reviewed DeepSeek Harness (DSH) plugin directory and subscription feed: unrelated and topic-spam repositories are filtered out, with practical category picks, a full catalog, and verified install targets for both the plugin marketplace and the official Discover subscription.

## 🏪 Plugin Marketplace & DSH Discover Subscription

Two ways to browse and install plugins from this catalog inside DSH (both install through the official host plugin manager):

### Option 1: Install `dsh-market-pro` Marketplace (Recommended)

**[DSH Market Pro](https://github.com/bruc3van/dsh-market-pro)** (npm: [`dsh-market-pro`](https://www.npmjs.com/package/dsh-market-pro)) is a third-party plugin marketplace powered by this catalog — discover plugins (editor's picks + full catalog), install in one click or with AI-assisted verification, manage and update installed plugins, browse session skills, and run post-install AI security reviews in one place.

1. Open the **Plugins** page from the left navigation bar in DSH.
2. Enter **`dsh-market-pro`** in the official plugin installation interface to install and enable it.
3. Once installed, open **DSH Market Pro** anytime from the left navigation bar, the Plugins page tab, or the right sidebar inside a conversation.

### Option 2: Subscribe in DSH Official Discover

No extra plugin required — add the curated index directly to DSH's built-in Discover tab (**DSH ≥ V0.2.1-rc.2**):

**Subscription URL: [`https://bruc3van.com/dsh-plugins/index.json`](https://bruc3van.com/dsh-plugins/index.json)**

1. **Enable custom markets:** **Plugins** → **More** beside **Experimental plugins** → enable **Custom plugin markets**.
2. **Add subscription:** open the **Discover** tab → **Add index source** (or top-left dropdown → **Manage index sources…**), paste the URL above, and click **Add**.
3. **Browse & install:** select **Bruce's Plugin Picks** from the dropdown to filter and install.

## 🗺️ Ecosystem at a glance

<!-- dsh:panorama:start -->
As of 2026-11-21 the catalog lists **29,675** verified repositories. Here is the shape of it:

```mermaid
mindmap
  root((DSH ecosystem 29675))
    UI and experience · 8925
      Usage and billing panels
      Sidebar workbenches
      Skins and desktop pets
      Notifications and input
    Utilities and more · 3427
      Files and encodings
      Format conversion
    Agents automation workflows · 3090
      Session and context management
      Scheduled loops and event wakeups
      Approval budget and checkpoints
    Developer tools · 3087
      Git and diff
      Model gateways and keys
      Debugging and diagnostics
    Web and browser · 3057
      Browser bridge and page control
      Web search with citations
      Archiving and web forensics
    Integrations and sharing · 2049
      Chat import and sharing
      Remote access
      IM and external integrations
    Design media and vision · 1945
      Image understanding and OCR
      Design canvas and UI restoration
      Speech synthesis and recognition
    Knowledge and research · 1923
      Knowledge bases and cross-session memory
      Deep research
      Academia and math
    Ecosystem and resources · 1396
      Plugin markets and registries
      Skill libraries and plugin managers
      Templates and scaffolds
    Multi-agent orchestration · 776
      Subagents and orchestration boards
      Fleets and agent teams
      Role division and acceptance checks
```
<!-- dsh:panorama:end -->

To browse every project in a category, see [CATALOG.md](./CATALOG.md) — the catalog is split into one volume per category, and the index lists them all.

## 🧭 Quick index

| You want to… | Go to |
| --- | --- |
| Pick a plugin in 30 seconds | [Featured picks](#-featured-picks): great community plugins organized around "what do you want DSH to do" |
| Install your first plugins | [Starter kits](#-starter-kits): pick one combo closest to your current problem |
| Browse the full ranking by stars | [Community leaderboard](#-community-leaderboard) (home Top 50) · [TOP200.md](./TOP200.md) (full Top 200) |
| Browse everything by category | [CATALOG.md](./CATALOG.md) (full catalog) · [Ecosystem at a glance](#-ecosystem-at-a-glance) |
| See what authors are submitting themselves | [Author showcase](#-author-showcase) (10 most recent on the home page) · [SHOWCASE.md](./SHOWCASE.md) (all entries) |
| List or recommend your own plugin | [Recommend or correct an entry](#-recommend-or-correct-an-entry) / [CONTRIBUTING](./CONTRIBUTING.md) |

## ⭐ Featured picks

**These are not ranked by stars, but we prioritize community-verified high-star projects** — most picks come from the Star Top 200: they solve a clear problem, document themselves well, stay maintained, and have been validated by many users. A few are dozens-of-stars picks with no substitute. Start from your problem, find the closest line, and the answer is one click away. Inclusion is not an endorsement of security or compatibility. For the full star-ranked board, see the [Community leaderboard](#-community-leaderboard). Screenshots under each category below are taken from the repositories' own READMEs — click any screenshot to jump straight to its repository home page.

### 🖥️ Desktop & terminal

- **Want a standalone desktop client** instead of a browser tab: [DSH Desktop Pro](https://github.com/bruc3van/dsh-desktop-pro) — a professional DeepSeek Harness desktop client built around organization-wide configuration. For personal use it works out of the box: the window loads the authentic official Web UI, closing the window doesn't stop your task — it stays resident in the tray until you open it again — and the installer bundles the official runtime, so you just double-click to launch, no Node.js, no commands to type; on first launch it subscribes to this list's curated plugin index, ready to browse and install from the Discover page. In a company it goes further: IT deploys the open-source management server (or places a single configuration file) to set up the model gateway, plugin subscriptions, skills and tool permissions once, and employees sign in with their company account — with usage limits and a tamper-evident audit log. It runs on macOS, Windows, and Linux alike; security is hardened layer by layer — window sandboxing, navigation locking, a verified update chain, and least privilege.
- **Want a Claude Code-style terminal UI**: [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — Full-screen interactive terminals with a live status line, thought streaming, and context/TPS gauges; the tianshu build adds TDD and evidence-gate workflows.
- **Want fewer terminal headaches on Windows**: [dsh-ops](https://github.com/T-Auto/dsh-ops) — A Windows productivity kit: an optional bundled Bash takes over the error-prone built-in terminal, with native Rust low-token readers for token efficiency.
- **Want to run DSH locally on an Android phone**: [dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) — An Android APK shell: WebView UI + embedded Termux runtime, SAF directory bridge, keep-alive service, and watchdog. To remote-control DSH already running on your computer, see [dsh-pocket](https://github.com/shaobeichen/dsh-pocket) below.
- **Want the agent to explain disk usage and preview cleanup before removing anything**: [Mole](https://github.com/tw93/Mole) — Tw93's open-source computer cleanup tool, connected to DSH through the official `dsh-mole` skill plugin for macOS and Windows. Analyze disk usage, clean caches and app leftovers, and read system health. The agent shows a preview and asks for consent before cleanup; interactive uninstall and administrator steps stay in your own terminal. Requires the local Mole CLI; if it is missing, the agent asks before helping install it.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/bruc3van/dsh-desktop-pro"><img src="https://github.com/bruc3van/dsh-desktop-pro/raw/main/docs/images/dsh-desktop-home.png" alt="DSH Desktop Pro · client" width="280"></a><br>[DSH Desktop Pro](https://github.com/bruc3van/dsh-desktop-pro) | <a href="https://github.com/bruc3van/dsh-desktop-pro"><img src="https://raw.githubusercontent.com/bruc3van/dsh-desktop-pro/main/docs/images/console-overview.png" alt="DSH Desktop Pro · management console" width="280"></a><br>[DSH Desktop Pro](https://github.com/bruc3van/dsh-desktop-pro) | <a href="https://github.com/ccch1mneyyy/dsh-TUI"><img src="https://raw.githubusercontent.com/ccch1mneyyy/dsh-TUI/main/screenshots/social-preview.png" alt="dsh-TUI" width="280"></a><br>[dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) |
| <a href="https://github.com/huiliyi37/dsh-tianshu-tui"><img src="https://raw.githubusercontent.com/huiliyi37/dsh-tianshu-tui/main/docs/tui-screenshot.jpg" alt="dsh-tianshu-tui" width="280"></a><br>[dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | <a href="https://github.com/T-Auto/dsh-ops"><img src="https://raw.githubusercontent.com/T-Auto/dsh-ops/main/docs/assets/462/row-page.jpg" alt="dsh-ops" width="280"></a><br>[dsh-ops](https://github.com/T-Auto/dsh-ops) | <a href="https://github.com/tw93/Mole"><img src="https://raw.githubusercontent.com/tw93/Mole/main/docs/img/big-mole.png" alt="Mole · computer cleanup" width="280"></a><br>[Mole](https://github.com/tw93/Mole) |

### 🧰 Interface workbenches

- **Want one install that covers common UI needs**: [dsh-web](https://github.com/zhu1090093659/dsh-web) — Task board, Git graph, side panel, remote mobile UI, desktop pet, live token stats, and a skin center in one collection (renamed from `dsh-web-ui`).
- **Want to see what is inside the context window**: [dsh-context](https://github.com/bowenliang123/dsh-context) — A Context tab in the Web UI showing what the model's context window is made of and how it evolves — helps time trimming and token control.
- **Want to turn the sidebar into a workbench**: [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — File rendering/editing, terminal, Git, and subagents built in, with third-party tab extensions.
- **Want all your agent projects in one management console**: [dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) — A sidebar app drawer, dockable split workspaces, and a live control room watching every project.
- **Want a real office environment inside DSH**: [dsh-univer-office](https://github.com/dream-num/dsh-univer-office) — From the makers of Univer: spreadsheets, docs, slides, canvases, and relational tables brought into the conversation, with connected data.
- **Want the working status line to come alive**: [working-activity](https://github.com/ccch1mneyyy/working-activity) — Real-time tool activity and progress, witty copy, model self-narration, and context warnings — no more boring waits.
- **Want the agent to operate a browser**: [dsh-browser](https://github.com/omdsh-dev/dsh-browser) · [BrowserSkill](https://github.com/Tencent/BrowserSkill) — dsh-browser is a Chrome side-panel extension that grants the current tab and acts on it inside your conversation; BrowserSkill is Tencent's bridge to a real, already-logged-in browser (a separate Agent Window, so your own browsing is not interrupted), with a first-class DSH plugin at `@wxg-prc-cpg/browser-skill-dsh-plugin`.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/zhu1090093659/dsh-web"><img src="https://raw.githubusercontent.com/zhu1090093659/dsh-web/dev/docs/screenshots/13-hero-main.png" alt="dsh-web" width="280"></a><br>[dsh-web](https://github.com/zhu1090093659/dsh-web) | <a href="https://github.com/bowenliang123/dsh-context"><img src="https://raw.githubusercontent.com/bowenliang123/dsh-context/main/docs/context-command.png" alt="dsh-context" width="280"></a><br>[dsh-context](https://github.com/bowenliang123/dsh-context) | <a href="https://github.com/Tencent/BrowserSkill"><img src="https://github.com/Tencent/BrowserSkill/raw/main/docs/assets/browserskill-readme-banner.png" alt="BrowserSkill" width="280"></a><br>[BrowserSkill](https://github.com/Tencent/BrowserSkill) |
| <a href="https://github.com/Aisland-SJL/dsh-worktable"><img src="https://raw.githubusercontent.com/Aisland-SJL/dsh-worktable/main/docs/assets/shot-2-console.png" alt="dsh-worktable · control room" width="280"></a><br>[dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) | <a href="https://github.com/dream-num/dsh-univer-office"><img src="https://raw.githubusercontent.com/dream-num/dsh-univer-office/main/docs/assets/readme/chart-and-formatting.png" alt="dsh-univer-office · spreadsheet review" width="280"></a><br>[dsh-univer-office](https://github.com/dream-num/dsh-univer-office) | |

### 👀 Let the model see and search

- **Want to add visual understanding to DSH**: [modlens](https://github.com/liustack/modlens) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — modlens turns images into structured OCR/layout/semantics evidence; dsh-vision-toolkit covers image Q&A, long-screenshot OCR, UI restoration, and pixel diffs.
- **Want paste-and-go vision with no key and no Python**: [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) — a built-in free vision chain (five-model anonymous fallback, no signup or key); image turns work like ordinary tool turns, with the model driving 10 `vision_*` pixel tools (ground, crop, describe, pixel diff, fix, palette, OCR, cutout, SVG trace, screenshot) in continuous multi-step sequences, plus structured evidence JSON; one-command install (Web profile), Node only.
- **Want the agent to search the web and X with citations**: [modsearch](https://github.com/liustack/modsearch) · [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) — modsearch searches and fetches from the web/X inline, returning cited structured evidence; anysearch-dsh adds the AnySearch provider and advanced search tools as a complementary backend.
- **Want to generate images in the conversation**: [dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) — Calls `generate_image` in chat (Gemini / OpenAI / Seedream / DashScope), with a gallery, fullscreen preview, and one-click download.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/liustack/modlens"><img src="https://raw.githubusercontent.com/liustack/modlens/main/assets/demo-dsh-paste.jpg" alt="modlens" width="280"></a><br>[modlens](https://github.com/liustack/modlens) | <a href="https://github.com/Anionex/dsh-vision-toolkit"><img src="https://github.com/Anionex/dsh-vision-toolkit/raw/main/assets/dsh-view-example.png" alt="dsh-vision-toolkit" width="280"></a><br>[dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | <a href="https://github.com/ysr666/dsh-vision-router"><img src="https://github.com/ysr666/dsh-vision-router/raw/main/assets/dsh-conversation-image-qa.png" alt="dsh-vision-router" width="280"></a><br>[dsh-vision-router](https://github.com/ysr666/dsh-vision-router) |
| <a href="https://github.com/shanliuling/dsh-image-gen"><img src="https://github.com/shanliuling/dsh-image-gen/raw/main/docs/assets/chat-preview.png" alt="dsh-image-gen" width="280"></a><br>[dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | | |

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

- **Want to tune reasoning effort**: [dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) — Codex-style model and reasoning-effort sliders, plus a big-fish running slider.
- **Want Codex-style text annotations**: [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) — Select assistant text, optionally add a note, and send it along with your message; the model replies to each annotation by number, with hoverable chips in the reply.
- **Want conversations laid out on a canvas, organized by branches**: [dsh-synapse](https://github.com/liangmianya/dsh-synapse) — A canvas-based session explorer and branching workspace for untangling long, non-linear conversations.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/HanaAyane/dsh-reasoning-effort"><img src="https://raw.githubusercontent.com/HanaAyane/dsh-reasoning-effort/main/assets/readme/themes.webp" alt="dsh-reasoning-effort" width="280"></a><br>[dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | <a href="https://github.com/liangmianya/dsh-synapse"><img src="https://raw.githubusercontent.com/liangmianya/dsh-synapse/main/docs/images/synapse-map.jpg" alt="dsh-synapse · session map" width="280"></a><br>[dsh-synapse](https://github.com/liangmianya/dsh-synapse) | | |

### 🎨 Creation & fun

- **Want to change the skin / set a custom wallpaper**: [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) — dsh-deep-whale is the most popular whale-girl skin series (CC BY-NC-SA, non-commercial); DSH-Transparent-UI-Plugin is a highly customizable frosted-glass theme — blur, frost, and background all adjustable, with a switch back to the stock UI anytime.
- **Want your local Wallpaper Engine wallpapers as the background**: [dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) — Turns local Wallpaper Engine wallpapers into the DSH web background: live video playback, a liquid-glass settings window, content ratings, and auto-rotate (⚠️ the repository does not ship a license yet).
- **Want interactive UI rendered in chat**: [dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) — Charts, forms, quizzes, Mermaid diagrams, and 3D scenes rendered inline, or model-generated interactive visualization cards.
- **Want agents to operate a real design canvas / make slides**: [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [deepseek-design](https://github.com/Devin-AXIS/deepseek-design) — OpenPencil creates, edits, previews, and validates interactive multi-page designs; deepseek-design is a native Design / PPT / Video studio (template catalogs, canvas refinement, selection-aware Ask AI).
- **Want influencer-grade design suites**: [baoyu-design](https://github.com/JimLiu/baoyu-design) · [dsh-guizang-design](https://github.com/op7418/dsh-guizang-design) — Baoyu (@dotey) brings the Claude design suite to DSH: editable slides, design canvases, and scene-by-scene animation, with comment annotations on designs handed back to the agent; Guizang's (@op7418) content-production suite shares one design system across web slides, image cards, and page layouts, with a tone profile that learns your writing style (no extra signup for either).
- **Want the agent to drive Blender directly**: [dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) — A real-time TCP link to Blender: viewport screenshots, click-picking, render profiling, and headless unload, letting the AI drive Blender directly.
- **Want to write novels or produce short dramas**: [oh-story-dsh](https://github.com/zenstory-ai/oh-story-dsh) — A plugin for novel writing and short-drama production, powered by Oh Story and Drama Skills.
- **Want SillyTavern-style text adventures and roleplay**: [dsh-tavern](https://github.com/flizzywine/dsh-tavern) — A text-game agent with candidate generation, conversational character-card editing, script mode, and asset extraction.
- **Want a companion in the workspace**: [whale-girl](https://github.com/vlln/whale-girl) · [dsh-pet](https://github.com/PC2005-cloud/dsh-pet) — A draggable, feedable, playable desktop companion with persistent progression; or one-line-install pets (28 transparent animations) with a DIY pipeline that crafts custom pets from AI video.
- **Want a voice-driven AI companion**: [dsh-voice-ai-girlfriend](https://github.com/beiyege-01/dsh-voice-ai-girlfriend) — Voice input, TTS replies, and a companion animation window, with two-way QQ chat; needs the repo's voice bridge plus NapCat (⚠️ the repository does not ship a license yet).
- **Want a bit of fun**: [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) · [anime-find](https://github.com/cocofhu/anime-find) · [dsh-minigames](https://github.com/lhh010/dsh-minigames) — Turn DSH into a 2005 portal site; search anime across multiple sources with Bangumi ratings in-chat; or play 18 offline mini-games while waiting.
- **Want DSH to watch Bilibili for you**: [dsh-bili-scroll](https://github.com/c1overzz/dsh-bili-scroll) — Auto-scans videos every day, reads each subtitle track before judging, and writes the worthwhile ones into a Markdown report — especially good ones earn you a comment ping.
- **Want to read feeds and books in DSH**: [qiaomu-rss-dsh](https://github.com/joeseesun/qiaomu-rss-dsh) · [qiaomu-reader-dsh](https://github.com/joeseesun/qiaomu-reader-dsh) — Qiaomu's (@vista8) series: subscribe to overseas AI feeds with Chinese-summary rewriting; an EPUB/PDF/TXT/Markdown/HTML reader with highlights, notes, read-aloud, a vocabulary book, and native AI companion reading (some experimental features need an invite code and call the author's own service).

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/Small-tailqwq/dsh-deep-whale"><img src="https://github.com/Small-tailqwq/dsh-deep-whale/raw/main/maid-atelier/preview/light.webp" alt="dsh-deep-whale" width="280"></a><br>[dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | <a href="https://github.com/WYH66666666/DSH-Transparent-UI-Plugin"><img src="https://raw.githubusercontent.com/WYH66666666/DSH-Transparent-UI-Plugin/main/assets/1.png" alt="DSH-Transparent-UI-Plugin" width="280"></a><br>[DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | <a href="https://github.com/Nagi-ovo/dsh-visualize"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-visualize/main/assets/social-preview.jpg" alt="dsh-visualize" width="280"></a><br>[dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) |
| <a href="https://github.com/ZSeven-W/dsh-openpencil"><img src="https://github.com/ZSeven-W/dsh-openpencil/raw/main/docs/images/dsh-openpencil-overview.png" alt="dsh-openpencil" width="280"></a><br>[dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | <a href="https://github.com/PC2005-cloud/dsh-pet"><img src="https://github.com/PC2005-cloud/dsh-pet/raw/main/assets/screenshots/dsh-pet-running-1.png" alt="dsh-pet" width="280"></a><br>[dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | <a href="https://github.com/Nagi-ovo/dsh-ads"><img src="https://raw.githubusercontent.com/Nagi-ovo/dsh-ads/main/assets/screenshot.webp" alt="dsh-ads" width="280"></a><br>[dsh-ads](https://github.com/Nagi-ovo/dsh-ads) |
| <a href="https://github.com/cocofhu/anime-find"><img src="https://raw.githubusercontent.com/cocofhu/anime-find/main/docs/banner.jpg" alt="anime-find" width="280"></a><br>[anime-find](https://github.com/cocofhu/anime-find) | <a href="https://github.com/elysia395/dsh-wallpaper-engine"><img src="https://raw.githubusercontent.com/elysia395/dsh-wallpaper-engine/main/assets/readme/hero-light.png" alt="dsh-wallpaper-engine" width="280"></a><br>[dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | <a href="https://github.com/flizzywine/dsh-tavern"><img src="https://raw.githubusercontent.com/flizzywine/dsh-tavern/main/docs/images/readme/overview.png" alt="dsh-tavern" width="280"></a><br>[dsh-tavern](https://github.com/flizzywine/dsh-tavern) |
| <a href="https://github.com/JimLiu/baoyu-design"><img src="https://raw.githubusercontent.com/JimLiu/baoyu-design/main/assets/screenshots/claude-design-canvas.webp" alt="baoyu-design · design canvas" width="280"></a><br>[baoyu-design](https://github.com/JimLiu/baoyu-design) | <a href="https://github.com/op7418/dsh-guizang-design"><img src="https://raw.githubusercontent.com/op7418/dsh-guizang-design/main/screenshots/1-studio.jpg" alt="dsh-guizang-design · studio" width="280"></a><br>[dsh-guizang-design](https://github.com/op7418/dsh-guizang-design) | |

### 🛠️ Development & workflows

- **Want to turn one session into a collaborating team**: [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — The current session acts as the captain: create resumable subagents, split goals into tasks with dependencies, and coordinate members via direct messages, with a live Web UI activity panel.
- **Want to upgrade one-shot multi-agent runs into a workflow layer**: [dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) — Brings Claude Code's UltraCode mode to DSH: workflows that can be generated, saved, governed, observed, and recovered.
- **Want a resident squad of bots**: [DS-Bot](https://github.com/Fei2411/DS-Bot) — A team of long-lived bots in one host: a primary bot, bot-to-bot messages, and group-chat collaboration, each bot with its own job.
- **Want a local task board for your agent team**: [DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) — A SQLite-backed native taskboard: projects, agent claim/review, and a native Web UI — no iframe, no second chat runtime.
- **Want the agent to drive an iOS Simulator or a real iPhone**: [dsh-ios](https://github.com/ZSeven-W/dsh-ios) — Run a live iOS Simulator (or a USB-connected iPhone) inside the conversation, with 22 tools that boot, build, and drive the UI by accessibility id.
- **Want agent workflows that compose and keep improving**: [dsh-evolve-modes](https://github.com/GraySilver/dsh-evolve-modes) — Composable task controls plus isolated, human-reviewed self-evolution, so the way it works keeps getting better.
- **Want DSH connected to your database for analysis**: [dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) — Conversational data analysis and actionable business insights over your own database.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/NanmiCoder/dsh-agent-teams"><img src="https://raw.githubusercontent.com/NanmiCoder/dsh-agent-teams/main/assets/ui.png" alt="dsh-agent-teams" width="280"></a><br>[dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | <a href="https://github.com/shengsheng90/DSH-taskboard"><img src="https://raw.githubusercontent.com/shengsheng90/DSH-taskboard/main/docs/assets/taskboard-demo.gif" alt="DSH-taskboard" width="280"></a><br>[DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | <a href="https://github.com/ZSeven-W/dsh-ios"><img src="https://raw.githubusercontent.com/ZSeven-W/dsh-ios/main/docs/images/dsh-ios-overview.png" alt="dsh-ios" width="280"></a><br>[dsh-ios](https://github.com/ZSeven-W/dsh-ios) |
| <a href="https://github.com/GraySilver/dsh-evolve-modes"><img src="https://raw.githubusercontent.com/GraySilver/dsh-evolve-modes/main/assets/evolve-modes-review.png" alt="dsh-evolve-modes · self-evolution settings" width="280"></a><br>[dsh-evolve-modes](https://github.com/GraySilver/dsh-evolve-modes) | <a href="https://github.com/omdsh-dev/dsh-data-agent"><img src="https://raw.githubusercontent.com/omdsh-dev/dsh-data-agent/main/assets/tables.webp" alt="dsh-data-agent · query result" width="280"></a><br>[dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | <a href="https://github.com/Fei2411/DS-Bot"><img src="https://raw.githubusercontent.com/Fei2411/DS-Bot/main/docs/images/team.png" alt="DS-Bot · bot squad" width="280"></a><br>[DS-Bot](https://github.com/Fei2411/DS-Bot) |

### 🔀 Migration & integrations

- **Want to migrate chat histories from other tools into DSH**: [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — Imports sessions from 25+ AI coding agents into resumable DSH sessions, preserving tool calls, reasoning, and results, with reverse export/sync back to Claude Code.
- **Want to bring Pi-ecosystem extensions straight into DSH**: [pi2dsh](https://github.com/weijiafu14/pi2dsh) — One Pi Host ABI runs unmodified Pi extensions as native DSH plugins, bridging both ecosystems.
- **Want Claude Code / OpenCode / CodeBuddy and other ACP agents inside the DSH UI**: [dsh-ntr](https://github.com/GDWhisper/dsh-ntr) — Negotiated Target Routing: DSH provides the interface and your configured agent provides the capability — sessions, composer, and message rendering stay native while reasoning and tool execution run autonomously in the agent's own process.
- **Want to drive DSH from WeChat / Feishu / QQ and other chats**: [dsh-im](https://github.com/xmanrui/dsh-im) · [dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) — dsh-im connects Feishu, WeChat, DingTalk, WeCom, QQ, Slack, Telegram, Discord, and WhatsApp from one settings page; use dsh-qqbot when you only want Tencent's official QQ Bot.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/xmanrui/dsh-im"><img src="https://github.com/xmanrui/dsh-im/raw/main/docs/images/imbot.png" alt="dsh-im" width="280"></a><br>[dsh-im](https://github.com/xmanrui/dsh-im) | <a href="https://github.com/weijiafu14/pi2dsh"><img src="https://raw.githubusercontent.com/weijiafu14/pi2dsh/main/docs/posting-kit/assets/06-pi-surfaces-on-dsh.png" alt="pi2dsh · Pi plugins in DSH" width="280"></a><br>[pi2dsh](https://github.com/weijiafu14/pi2dsh) | <a href="https://github.com/GDWhisper/dsh-ntr"><img src="https://raw.githubusercontent.com/GDWhisper/dsh-ntr/main/docs/images/ntr-session.png" alt="dsh-ntr · ACP session" width="280"></a><br>[dsh-ntr](https://github.com/GDWhisper/dsh-ntr) |

### 🔌 Remote & external collaboration

- **Want to remote-control DSH already running on your computer from a phone**: [dsh-pocket](https://github.com/shaobeichen/dsh-pocket) — Run `dsh web` on the computer, scan a QR code on the phone, and get a live mirror (LAN + public tunnel, access password, mobile layout). Check progress, send tasks, and tap approvals while you are away.
- **Want the agent to operate remote hosts over SSH**: [dsh-remote](https://github.com/flymysql/dsh-remote) — SSH remote workspaces for DSH with parallel projects across hosts, file browsing and editing, recursive search, terminals, Git diffs, and Agent tools to edit, build and test remotely. Optional IDE layout.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/shaobeichen/dsh-pocket"><img src="https://github.com/shaobeichen/dsh-pocket/raw/main/docs/interface.jpg" alt="dsh-pocket" width="280"></a><br>[dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | | |

### 💰 Usage & billing

- **Want a corner widget for balance and per-turn spend**: [DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) — A draggable whale in the lower-right corner: account balance, today's spend, and a per-turn cost bubble. Works out of the box (default bookkeeping from balance deltas, no platform token required).
- **Want a token-usage and cost panel**: [dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) · [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) — dsh-usage-stats adds a GitHub-style usage heatmap, per-model breakdowns, and DeepSeek account balance to the Web GUI; dsh-cost-meter tracks per-session and daily costs synced with official pricing.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget"><img src="https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget/raw/main/assets/DSH2.png" alt="DeepSeek-Balance-Whale-Widget" width="280"></a><br>[DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | <a href="https://github.com/Ychris12138/dsh-usage-stats"><img src="https://github.com/Ychris12138/dsh-usage-stats/raw/main/docs/images/usage-panel.svg" alt="dsh-usage-stats" width="280"></a><br>[dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | <a href="https://github.com/Han-1413141/dsh-cost-meter"><img src="https://github.com/Han-1413141/dsh-cost-meter/raw/master/docs/screenshot-sidebar-footer.png" alt="dsh-cost-meter" width="280"></a><br>[dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) |

### 🔑 Models & subscriptions

- **Want to use an existing ChatGPT / Claude / Grok subscription as a model**, without another API key: [dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) — OAuth in Settings for ChatGPT (Codex), Claude, Grok (X Premium), and GitHub Copilot. Logged-in providers join the model picker, with usage windows plus image/video generation tools.
- **Want locally signed-in WorkBuddy models**: [dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) — Connects domestic and international WorkBuddy models to DSH: per-model credit multipliers read from the upstream catalog on each refresh, per-model image-input toggles and default reasoning effort, multi-account switching with an auto-rotating account pool, plus daily check-in and capsule credit read-outs.
- **Want routing and costs tracked for you**: [dsh-model-router](https://github.com/Alice-Marx/dsh-model-router) — A cost-aware model-routing workbench for the desktop client: local planning, comparison against configured routes, and execution-permission checks, running dependency work packages via the model API or the official CLI.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/V1ki/dsh-plugin-subscriptions"><img src="https://raw.githubusercontent.com/V1ki/dsh-plugin-subscriptions/main/docs/images/subscriptions.png" alt="dsh-plugin-subscriptions" width="280"></a><br>[dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | | |

### 🛡️ Security & audit

- **Want to check whether your API relay has been tampered with**: [api-relay-audit](https://github.com/toby-bridges/api-relay-audit) — a local audit for AI API relays & LLM proxies: detects prompt injection, model substitution, tool-call rewriting, SSE anomalies, error leakage, and Web3 wallet risks. A single-file Python tool that produces redacted reports on the spot (AGPL-3.0).
- **Want a safety net that can undo a broken DSH setup**: [dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) — undo changes to config and plugin code, secret-safe snapshots, one-click SAFE MODE; and when DSH won't even boot, an offline CLI/GUI rolls you back.
- **Want an authorized red-team workbench**: [dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) — A multi-mode red-team workbench over the DSH Web UI covering penetration testing, red-team assessment, and code auditing, with presets and runtime plugins managed from one settings page (authorized security research only).

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/toby-bridges/api-relay-audit"><img src="https://raw.githubusercontent.com/toby-bridges/api-relay-audit/master/assets/readme-banner.png" alt="api-relay-audit" width="280"></a><br>[api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | <a href="https://github.com/lire1131/dsh-undo-savepoint"><img src="https://raw.githubusercontent.com/lire1131/dsh-undo-savepoint/master/docs/shots/webui-header.png" alt="dsh-undo-savepoint · session header" width="280"></a><br>[dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | <a href="https://github.com/lire1131/dsh-undo-savepoint"><img src="https://raw.githubusercontent.com/lire1131/dsh-undo-savepoint/master/docs/shots/safe-mode-confirm.png" alt="dsh-undo-savepoint · safe mode confirmation" width="280"></a><br>[dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) |
| <a href="https://github.com/lire1131/dsh-undo-savepoint"><img src="https://raw.githubusercontent.com/lire1131/dsh-undo-savepoint/master/docs/shots/message-undo.png" alt="dsh-undo-savepoint · message-level undo" width="280"></a><br>[dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | | |

### 🌱 Ecosystem entry points

- **Want browsing, installation, updates, and AI review in one place**: [DSH Market Pro](https://github.com/bruc3van/dsh-market-pro) — curated plugins with official-manager installation and updates, plus optional read-only AI review of the installed version, started only after you send the draft.
- **Want a plugin market right inside the DSH UI**: the official DSH client (0.2.1+) ships a built-in **Plugin market** tab whose catalog is this list's daily snapshot; third-party options are [dsh-market](https://github.com/dsh-market/dsh-market) · [dsh-plugin-gating-hub](https://github.com/Noob-stupid/dsh-plugin-gating-hub) — dsh-market adds browse, search, and workshop-style distribution; dsh-plugin-gating-hub focuses on framework-upgrade safety and plugin gating — contract pre-checks, rollback points, auto-rollback on failure, evidence-gated auto-disable — plus a multi-source plugin market.

| | | |
| :---: | :---: | :---: |
| <a href="https://github.com/bruc3van/dsh-market-pro"><img src="https://raw.githubusercontent.com/bruc3van/dsh-market-pro/master/assets/screenshots/marketplace.png" alt="dsh-market-pro" width="280"></a><br>[dsh-market-pro](https://github.com/bruc3van/dsh-market-pro) | <a href="https://github.com/dsh-market/dsh-market"><img src="https://raw.githubusercontent.com/dsh-market/dsh-market/main/assets/demo-en.png" alt="dsh-market" width="280"></a><br>[dsh-market](https://github.com/dsh-market/dsh-market) | <a href="https://github.com/Noob-stupid/dsh-plugin-gating-hub"><img src="https://raw.githubusercontent.com/Noob-stupid/dsh-plugin-gating-hub/main/docs/images/upgrade-safety-panel.png" alt="dsh-plugin-gating-hub · upgrade safety panel" width="280"></a><br>[dsh-plugin-gating-hub](https://github.com/Noob-stupid/dsh-plugin-gating-hub) |

### 🚀 Starter kits

You do not need to install everything. Start with the kit closest to the problem you have today:

| Kit | For | Combination |
| --- | --- | --- |
| Everyday experience | First install: start with the desktop client, then turn the sidebar into a workbench | [DSH Desktop Pro](https://github.com/bruc3van/dsh-desktop-pro) · [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) |
| Pro plugin marketplace | Curated picks, browsing, installation, updates, and post-install AI review; install `dsh-market-pro@1.0.0` on demand | [DSH Market Pro](https://github.com/bruc3van/dsh-market-pro) |
| Terminal lover | Command-line fans who want a full-screen terminal (pick one) | [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) · [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) |
| Search & image gen | Search the web in-chat and generate images (official models already see images; no vision plugin required) | [modsearch](https://github.com/liustack/modsearch) · [dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) |
| Look & feel | Skins, frosted glass, and desktop pets | [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) · [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) · [whale-girl](https://github.com/vlln/whale-girl) |
| Multi-agent teams | Hand complex tasks to a team of agents | [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) · [dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) |
| Memory & long-running | Cross-session memory (pick one) + auto-resume for unattended projects | [mem9](https://github.com/mem9-ai/mem9) or [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) · [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) |
| Phone remote | Use the DSH on your computer while you are away | [dsh-pocket](https://github.com/shaobeichen/dsh-pocket) |
| Subscription models | Use existing ChatGPT / Claude / Grok subscriptions, no API key | [dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) |

**Read first:** [dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) — a deep 0-to-1 handbook for DSH: install, plugin development, performance tuning, and real-world case studies (Chinese + English PDF). Want to write your own plugins? Start with [hello-dsh](https://github.com/pingfanfan/hello-dsh) — a zero-to-plugin tutorial with 22 Chinese skill examples.

## 🏆 Community leaderboard

Community popularity by stars, from the 2026-11-21 snapshot. Repositories riding the `dsh-plugin` topic without being plugins, and blacklisted repositories, are excluded — see [data/curated.json](./data/curated.json); new repositories first enter the [review queue](./data/review/pending.md) and rank only after review ([data/approved.json](./data/approved.json)). The home page shows the Top 50; the full Top 200 is in [TOP200.md](./TOP200.md). Ranking reflects popularity only — not quality, compatibility, or security.

<!-- dsh:leaderboard:start -->
| # | Project | Description | ⭐ Stars | License |
| ---: | --- | --- | ---: | --- |
| 1 | [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | A team of long-lived bots for DeepSeek Harness: main bots, bot-to-bot m… | 8626 | Apache-2.0 |
| 2 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Claude Code-style full-screen terminal TUI: whale top bar, live status,… | 8072 | MIT |
| 3 | [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | Turn local Wallpaper Engine wallpapers into the DSH web background: dyn… | 7781 | MIT |
| 4 | [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | A bouncy whale-girl widget in the bottom-right corner of the DSH UI tra… | 7403 | MIT |
| 5 | [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | DSH desktop pet: a transparent animated companion installed in one comm… | 6596 | MIT |
| 6 | [T-Auto/dsh-ops](https://github.com/T-Auto/dsh-ops) | Windows token-efficiency toolkit: bundled bash 5.3 and PowerShell 7 tak… | 5971 | MIT |
| 7 | [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | One-stop context visualizer for DSH: a Context panel and commands for c… | 5398 | Apache-2.0 |
| 8 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Open sidebar foundation that lets third parties register new tabs; bund… | 5274 | MIT |
| 9 | [liustack/modlens](https://github.com/liustack/modlens) | External vision for text-only models: paste an image and get structured… | 5049 | MIT |
| 10 | [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | Wire IM bots into DSH via QR code or credentials: Feishu, WeChat, DingT… | 3749 | MIT |
| 11 | [liguobao/ds-harness-remote](https://github.com/liguobao/ds-harness-remote) | Multi-device remote access built on the DSH plugin system: P2P-first, e… | 3493 | MIT |
| 12 | [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | Whale-girl skin series for DeepSeek Harness. | 3130 | NOASSERTION |
| 13 | [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | Put DSH in your pocket: run dsh web on the computer, scan a QR code fro… | 3106 | GPL-2.0 |
| 14 | [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams multi-agent collaboration plugin for DeepSeek Harness. | 3057 | MIT |
| 15 | [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | Direct real-time Blender bridge for DSH over TCP: 16 tools across 186 o… | 2226 | BSD-3-Clause |
| 16 | [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | Editable design system for DSH: AI generation, visual editing, a templa… | 1971 | NOASSERTION |
| 17 | [dingminhua/dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) | Connect locally signed-in WorkBuddy models to DeepSeek Harness with a r… | 1883 | MIT |
| 18 | [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) | SillyTavern-style text-game agent on DSH: candidate-turn generation, co… | 1720 | AGPL-3.0 |
| 19 | [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | Lightweight plugin that generates images right inside the DSH conversat… | 1666 | Apache-2.0 |
| 20 | [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | Free web-search provider: DuckDuckGo backend, no API key. | 1567 | MIT |
| 21 | [Miaotofu01/Study-Mate](https://github.com/Miaotofu01/Study-Mate) | AI study partner that plans, explains, and builds projects with you — l… | 1513 | MIT |
| 22 | [c1overzz/dsh-bili-scroll](https://github.com/c1overzz/dsh-bili-scroll) | A DSH plugin that scrolls Bilibili for you daily: searches videos, read… | 1462 | MIT |
| 23 | [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Eyes for text-only DSH agents: a free vision chain (no key) plus pixel-… | 1297 | MIT |
| 24 | [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | Unlimited memory for OpenClaw. | 1236 | Apache-2.0 |
| 25 | [omdsh-dev/dsh-browser](https://github.com/omdsh-dev/dsh-browser) | Let DSH drive the browser you are already using: pages become structure… | 1116 | MIT |
| 26 | [beiyege-01/dsh-voice-ai-girlfriend](https://github.com/beiyege-01/dsh-voice-ai-girlfriend) | Voice AI companion plugin for DSH: Whisper voice input, Qwen3-TTS voice… | 1104 | NOASSERTION |
| 27 | [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Composable three-layer memory control plane for DSH: persistent runtime… | 1077 | MIT |
| 28 | [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Inline interactive UI inside assistant replies via dsh-ui fences: layou… | 1044 | MIT |
| 29 | [liustack/modsearch](https://github.com/liustack/modsearch) | Free web search for DSH: no signup, no API key — brings structured JSON… | 1028 | MIT |
| 30 | [op7418/dsh-guizang-design](https://github.com/op7418/dsh-guizang-design) | Guizang design suite: four skills — web slides, image-text cards, web t… | 1016 | AGPL-3.0 |
| 31 | [Alice-Marx/dsh-model-router](https://github.com/Alice-Marx/dsh-model-router) | A cost-aware model-routing workbench for DSH Desktop: plan locally, com… | 1009 | MIT |
| 32 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | A stronger vision toolkit for text-only models: one-line install, paste… | 950 | MIT |
| 33 | [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | Local security audit for AI API relays and LLM proxies: prompt injectio… | 925 | AGPL-3.0 |
| 34 | [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) | Multi-mode red-team workbench on dsh web: authorized security research… | 905 | MIT |
| 35 | [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) | Android client and secure remote access for DSH: LAN/remote connections… | 904 | Apache-2.0 |
| 36 | [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) | Agent project management console for DSH: sidebar app drawer, dockable… | 890 | MIT |
| 37 | [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Cross-session long-term memory + background self-evolution: five-track… | 880 | MIT |
| 38 | [6shenhonghong9/dsh-startup-screen](https://github.com/6shenhonghong9/dsh-startup-screen) | Startup animation plugin: studio logo, whiteout, warm technical-file ba… | 872 | MIT |
| 39 | [Yu-tao-Li/dsh-computer-use-win](https://github.com/Yu-tao-Li/dsh-computer-use-win) | Windows computer-use plugin: lets the agent see and drive real Windows… | 841 | MIT |
| 40 | [zenstory-ai/oh-story-dsh](https://github.com/zenstory-ai/oh-story-dsh) | Novel-writing and short-drama production plugin powered by Oh Story and… | 812 | MIT |
| 41 | [fourzkw/dsh-drawai](https://github.com/fourzkw/dsh-drawai) | DrawAI canvas: an editable drawing canvas in the DSH right sidebar, wit… | 800 | NOASSERTION |
| 42 | [ZSeven-W/dsh-game-studio](https://github.com/ZSeven-W/dsh-game-studio) | Describe a small game in one sentence and play it in the DSH sidebar: 1… | 776 | MIT |
| 43 | [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) | Real Office for DSH: the Univer runtime brings spreadsheets, docs, slid… | 744 | Apache-2.0 |
| 44 | [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Session cost meter: per-session and daily costs, budgets, provider bala… | 741 | MIT |
| 45 | [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) | Visual non-linear conversation workspace: canvas-style session explorat… | 737 | MIT |
| 46 | [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) | White-box AGI architecture exploration: metacognition loop, knowledge f… | 736 | MIT |
| 47 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Turn DSH into a 2005 web portal: parody ads, fake games, and pop-ups. | 735 | BSD-3-Clause |
| 48 | [SAOS-3624/dsh-see-now](https://github.com/SAOS-3624/dsh-see-now) | See Now real-time vision plugin: lets the AI actually see your screen,… | 730 | Apache-2.0 |
| 49 | [aureth-labs/dsh-aurabot-qq](https://github.com/aureth-labs/dsh-aurabot-qq) | Aurabot (Big Fat Fish): moves the AI in DSH into QQ as a persona with m… | 715 | MIT |
| 50 | [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | AnySearch web-search provider and advanced search tools for DeepSeek Ha… | 705 | MIT |
<!-- dsh:leaderboard:end -->

[See the full Star Top 200 →](./TOP200.md)

## 🆕 Recently joined

Screened recent projects, updated from time to time:

| Project | Description | Created |
| --- | --- | --- |
| [omdsh-dev/dsh-ego-browser](https://github.com/omdsh-dev/dsh-ego-browser) | Wire the ego-lite agent browser into DSH: 13 ego_* tools covering semantic snapshots, located clicks, form filling and CDP control, with a bundled runtime — works on Linux out of the box. | 2026-08-07 |
| [kaust-ark/ARK](https://github.com/kaust-ark/ARK) | idea2paper research pipeline: six agents turn one idea into a verifiable paper; the DSH bundle runs in a dedicated profile and reviewers can inspect raw rows and PDF pages. | 2026-03-24 |
| [roost-qq/dsh-roost](https://github.com/roost-qq/dsh-roost) | Move your AI into QQ through Roost: official-API messaging, no client hooking. | 2026-10-26 |
| [LINYT1416/dsh-memory-persona-affect](https://github.com/LINYT1416/dsh-memory-persona-affect) | A living brain for DSH: hippocampus-cortex-prefrontal-amygdala memory, a fifty-mechanism persona and a six-organ mood curve, all running on one clock. | 2026-11-20 |
| [Greatbeing/Aesthetics-OS](https://github.com/Greatbeing/Aesthetics-OS) | An aesthetic OS that says no: three red lines, a generate→judge→iterate loop, five Euler lenses and 22 native tools — no praise without inspecting the real artifact. | 2026-11-19 |
| [Kostyastudy/dsh-matu-tutor](https://github.com/Kostyastudy/dsh-matu-tutor) | A workbench for UESTC APTAT C-language homework: compile locally, submit for a real score, and learn with an AI tutor instead of copied answers. | 2026-11-20 |
| [aidc-lab/dsh-movie-workbench](https://github.com/aidc-lab/dsh-movie-workbench) | A movie finder: search TMDB, IMDb and Douban on one page and automatically discover BT resources. | 2026-11-19 |
| [Murphy2000-cyk/dsh-skill-plugin-tuning](https://github.com/Murphy2000-cyk/dsh-skill-plugin-tuning) | A workbench for DSH skills and plugin packages: 14-point compliance audits, real trigger-rate evaluation, tool-contract and dead-config checks. | 2026-09-13 |

## 📣 Author showcase

Self-submitted recommendations from plugin authors, following the [contributing rules](./CONTRIBUTING.md#作者自荐--self-promotion). **These entries are not editorially reviewed and carry no quality or security endorsement** — evaluate them yourself before installing (see Usage & safety below). At most 30 entries are kept — first in, first out; entries promoted to the [Featured picks](#-featured-picks) above are removed from this section without using a slot. The home page shows only the **10 most recent entries**; the complete list lives in [SHOWCASE.md](./SHOWCASE.md).

<!-- dsh:showcase:start -->
- **[BOWLUNA/dsh-custom-mode](https://github.com/BOWLUNA/dsh-custom-mode)** ([@BOWLUNA](https://github.com/BOWLUNA) · 2026-09-19) — Manage dsh agent modes from the settings page: choose a base composition, toggle plugin rows, edit the system prompt (takes effect on the next model step); several assistants can coexist.
- **[dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager)** ([@xiajiajun516](https://github.com/xiajiajun516) · 2026-09-27) — Backup, restore, export, import, migrate and sync a DeepSeek Harness (DSH) configuration: settings, providers, plugins, MCP servers, skills, agent presets and workspaces. Everything is previewed before it is written, conflicts are decided per item, a failed import rolls back, dead absolute paths are remapped across machines, and "export secrets" carries credentials inside an encrypted snapshot (scrypt + AES-256-GCM). A built-in configuration marketplace installs community configs in one click.
- **[dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup)** ([@xiaoyuyu6420](https://github.com/xiaoyuyu6420) · 2026-09-30) — One command to back up and restore all of `~/.dsh` (sessions, settings, skills, MCP configs, credentials): restart-surviving scheduled backups with tiered retention, automatic pre-upgrade snapshots, a session-log doctor with targeted repair and migration precheck, and an out-of-process rescue console for when the host will not boot; credentials are redacted by default with plaintext confined to a local vault, and private-repo GitHub sync covers machine migration. For DSH users who do not want an upgrade or a new laptop to cost them their data; published on npm as `@xiaoyuyu6420/dsh-backup`.
- **[dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter)** ([@Han-1413141](https://github.com/Han-1413141) · 2026-10-02) — Track session and model costs, token usage, budgets, provider balances and coding-plan quotas in a bilingual DSH interface.
- **[dsh-piggy](https://github.com/CLICGGER-TYPES/dsh-piggy)** ([@CLICGGER-TYPES](https://github.com/CLICGGER-TYPES) · 2026-10-03) — A pet pig for DSH Web that grows as you work, with care, study, jobs, fishing, a collection book, and skins. It registers no model tools and injects no pet state into conversations. npm package: `dsh-piggy`; standalone desktop builds are also available.
- **[dsh-sieve](https://github.com/Sev7eEn7/dsh-sieve)** ([@Sev7eEn7](https://github.com/Sev7eEn7) · 2026-10-10) — Filters tool outputs, prunes stale context and discloses skills on demand for DSH 0.2.1-alpha.1.
- **[dsh-oh-my-claude](https://github.com/lcestou/dsh-oh-my-claude)** ([@lcestou](https://github.com/lcestou) · 2026-10-13) — Claude Code as a model provider in DSH: log in once with the `claude` CLI, pick a Claude model in the session picker, and the CLI's own permission modes, images, resume and compaction work from the DSH chat. DSH's subagents, background jobs and skills reach Claude as MCP tools. A workspace can run Claude on another machine over SSH.
- **[dsh-zhihu-search](https://github.com/dsh-plugin-lab/dsh-zhihu-search)** ([@zlZayn](https://github.com/zlZayn) · 2026-10-27) — Zhihu search for DSH: in-site search, global web search and Zhida answers as three tools, over the official Zhihu Open Platform API rather than scraping, with a citable source link on every result (in-site results also carry vote counts) — for Chinese-language research and fact-checking.
- **[AgentCompare](https://github.com/lijiaqi-AI-Product-Manager/dsh-agent-compare)** ([@lijiaqi-AI-Product-Manager](https://github.com/lijiaqi-AI-Product-Manager) · 2026-11-04) — AgentCompare compares 2–4 answers, files or live pages in the DSH Desktop/Web main conversation, with Chinese/English UI, shared conversation context, blind or open picks and reviewed adoption. [Screenshots and demo](https://github.com/lijiaqi-AI-Product-Manager/dsh-agent-compare/blob/v3.1.1/docs/storefront-gallery.md)
- **[BloomTutor](https://github.com/Li-Evan/BloomTutor)** ([@Li-Evan](https://github.com/Li-Evan) · 2026-11-16) — A one-on-one AI tutor as Skills: bloom-tutor writes a syllabus, then one Markdown lesson at a time in your workspace, and shapes each next lesson from your ??? marks and feedback; plus six learn-* learning-method Skills.
<!-- dsh:showcase:end -->

[See all 30 showcase entries →](./SHOWCASE.md)

## 🔍 How this list is maintained

- **Built for users, not crawlers:** the front page is organized around "what I want to get done", not hundreds of repo names.
- **Layered: curated picks + full index:** the front page carries curated featured picks and the showcase preview; [CATALOG.md](./CATALOG.md) and its per-category volumes list every reviewed repository; new repositories first enter the [review queue](./data/review/pending.md) and appear after review and merge (convention: [data/review/README.md](./data/review/README.md)).
- **Automated data, curated recommendations:** the raw snapshot and the review queue refresh daily by script; the catalog and Top 200 leaderboard are regenerated only after a review merge (generators: [scripts/merge.mjs](./scripts/merge.mjs), [scripts/top.mjs](./scripts/top.mjs), switchable back to Top 100); the home-page featured picks, showcase, and recently-joined sections are maintained separately, so polluted API data (star inflation, topic riders) never rewrites recommendations automatically.
- **Riders removed:** repositories carrying the `dsh-plugin` topic without being DSH plugins (the platform itself, other agent tools, competing catalogs) and blacklisted repositories are excluded from the catalog and leaderboard, with per-repo reasons recorded in [data/curated.json](./data/curated.json) (the leaderboard additionally honors `leaderboard_exclusions` for repos that stay in the catalog but do not rank) — auditable and contestable at any time.
- **Auditable review trail:** every inclusion decision can be checked — approval dates live in [data/approved.json](./data/approved.json), and each removal or leaderboard exclusion carries its reason in [data/curated.json](./data/curated.json); bulk reviews additionally keep a narrative record (e.g. the [2026-11-21 review log](./data/review/2026-11-21.md)), and the whole workflow is documented in [data/review/README.md](./data/review/README.md).
- **Market data (npm feed):** [awesome-dsh-plugin-feed](https://www.npmjs.com/package/awesome-dsh-plugin-feed) publishes `market-catalog.json` (schema 3: the complete reviewed catalog, each row carrying `install_status` and its install mapping, plus the official subscription and the editorial picks) and `packages.json` (the install-mapping source). It is projected by `scripts/safe-market-catalog.mjs`, packaged by `publish-npm-feed.mjs`, and mirrored through npmmirror.
- **Chinese by default, bilingual:** native readability for the main audience, with a dedicated English entry point.

As of 2026-11-21, the catalog lists **29,675** repositories across **41** primary languages; **27,313** declare a license and **29,351** are neither archived nor disabled (the catalog updates after each review merge — see [CATALOG.md](./CATALOG.md) for current numbers).

## ⚠️ Usage & safety

Third-party plugins can read conversations, files, network traffic, or system resources. Before installing, check the source, permissions, license, install method, and recent activity — and try new plugins in an isolated environment first. This list is for discovery and organization only; it is not affiliated with or endorsed by DSH, and inclusion is not a security or compatibility endorsement.

## 🤝 Recommend or correct an entry

Spot a miss, a wrong category, or stale wording? Open an Issue or Pull Request:

- **Get your plugin listed:** a public repo tagged `dsh-plugin` that is actually a DSH plugin enters the [review queue](./data/review/pending.md) on the next daily refresh and appears in the full catalog after review — **no PR to this repo needed**. Topic riders are removed, with reasons recorded in [data/curated.json](./data/curated.json).
- **Self-promote as an author:** if you own the plugin, append one entry (Chinese and English) to [SHOWCASE.md](./SHOWCASE.md) following the [contributing rules](./CONTRIBUTING.md#作者自荐--self-promotion) — no editorial review needed. Once merged, the home-page showcase preview is refreshed automatically by a workflow; do not hand-edit it.
- **Get on the front page:** the featured picks and recently-joined sections are maintained separately — open an Issue telling us what problem it solves and for whom, or edit the corresponding Markdown directly with your reasoning. The leaderboard [TOP200.md](./TOP200.md) is generated by script; to keep a repository out of the board, register it under `leaderboard_exclusions` in [data/curated.json](./data/curated.json) with a reason.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bruc3van/awesome-dsh-plugin-pro&type=Date)](https://star-history.com/#bruc3van/awesome-dsh-plugin-pro&Date)

## 🔗 Related projects

**Maintained by the author**

- **[dsh-desktop-pro](https://github.com/bruc3van/dsh-desktop-pro)** — DSH Desktop Pro: a professional DeepSeek Harness desktop client built around organization-wide configuration. For personal use it works out of the box: the window loads the authentic official Web UI, closing the window doesn't stop your task — it stays resident in the tray until you open it again — and the installer bundles the official runtime, so you just double-click to launch; on first launch it subscribes to a curated plugin index. In a company, IT configures the model gateway, plugin subscriptions, skills and tool permissions once through the open-source management server, and employees sign in with their company account — with usage limits and a tamper-evident audit log. Runs on macOS, Windows, and Linux.
- **[DSH Market Pro](https://github.com/bruc3van/dsh-market-pro)** — curated plugin browsing, installation, updates, and optional post-install AI review. It consumes the complete reviewed catalog and subscription picks in the npm feed's `market-catalog.json`.
- **[bruce-md2word](https://github.com/bruc3van/bruce-md2word)** — a Markdown-to-Word tool built for AI agents: Chinese typography, Mermaid diagrams rendered to images and editable math formulas, shipped in three forms — a Skill, a standalone CLI and a DSH plugin. (Also listed in the [utilities volume](./catalog/utilities.md) of this catalog.)

**Official repositories**

- **[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)** — DeepSeek Harness: Everything is a Plugin. The upstream project behind the official `dsh` and Web UI — every plugin in this catalog exists for it.

## License

This list is published under the [MIT License](./LICENSE); each listed project remains under its own license.

## Community index for DSH Discover

This repository also owns a format-1 index and its generation and exclusions report, served through a fixed HTTPS route on bruc3van.com. See [generation and delivery details](scripts/host-market/README.md).
