# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-08-20**
- 快照日期 / Snapshot date: **2026-08-20 (UTC)**
- 待审核 / Pending: **1250**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **64**

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos` 并注明理由
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) with a reason
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`

See [data/review/README.md](./README.md) for the full convention.

| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | --- | --- | --- |
| 1 | [houyanchao/chatgpt-gemini-timeline](https://github.com/houyanchao/chatgpt-gemini-timeline) | 424 | 2025-10-11 | 2026-08-20 | ChatGPT & Gemini：Add Folders, Timeline & Prompts. - 为 ChatGPT & Gemini 添加文件夹、提示词库和时间轴。 |
| 2 | [sunchaokun/PPT-Design-Skill](https://github.com/sunchaokun/PPT-Design-Skill) | 127 | 2026-07-09 | 2026-08-20 | Precision PPT design  skill for OpenCode/Claude Code/Codex, with 40,000+ styles, pixel-perfect build-mode control, and AI image generation |
| 3 | [MiaoQichuan/new-litigation-visualization](https://github.com/MiaoQichuan/new-litigation-visualization) | 39 | 2026-07-09 | 2026-08-20 | 把法律画出来 · Make the Law Visible —— 给法律人的诉讼可视化工具集：把凌乱的诉讼图重画成能进材料的图，或直接读案件材料画准一张时间轴。Claude Skill / DeepSeek Harness 通用。 |
| 4 | [taptap/instant-games-open-mcp](https://github.com/taptap/instant-games-open-mcp) | 27 | 2025-10-11 | 2026-08-20 | TapTap 小游戏开放能力 mcp |
| 5 | [Fisfzy/dsh-ego-browser](https://github.com/Fisfzy/dsh-ego-browser) | 26 | 2026-08-07 | 2026-08-20 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。 |
| 6 | [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) | 16 | 2026-08-19 | 2026-08-20 | DeepSeek Harness (DSH) plugin: a live iOS Simulator — and a USB-connected iPhone — inside the conversation. 21 agent tools for booting, building, driving the UI by accessibility identity, OCR text or list rows, plus a streaming sidebar panel you can tap and drag on. |
| 7 | [npxcnency-ux/pi-trace-extension](https://github.com/npxcnency-ux/pi-trace-extension) | 15 | 2026-06-10 | 2026-08-20 | Langfuse-style trace viewer for pi-agent — local-first, zero-setup, single-file HTML |
| 8 | [ayuanwong/dsh-ux](https://github.com/ayuanwong/dsh-ux) | 14 | 2026-08-13 | 2026-08-20 | 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand. |
| 9 | [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) | 12 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 社区内置插件市场（dsh-plugin）— 搜索插件、下载并安装 4000+ 人工精选社区插件，每日更新、完全免费。内置在 Harness「设置 → 插件中心」，无需离开应用即可浏览、搜索、安装各类 AI 插件。 |
| 10 | [TiantianFlow/dsh-tailscale-gateway](https://github.com/TiantianFlow/dsh-tailscale-gateway) | 11 | 2026-08-16 | 2026-08-20 | Private Tailscale access for DeepSeek Harness Web: exact user allowlists, loopback-only gateway, and guarded Serve setup |
| 11 | [yanglongyun/ramify-dsh](https://github.com/yanglongyun/ramify-dsh) | 11 | 2026-08-13 | 2026-08-20 | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 |
| 12 | [WM-CODER/custom-first-control-prompt](https://github.com/WM-CODER/custom-first-control-prompt) | 10 | 2026-08-15 | 2026-08-20 | DeepSeek Harness plugin for insert custom prompt |
| 13 | [pypcfx-glitch/risk-rule-design](https://github.com/pypcfx-glitch/risk-rule-design) | 9 | 2026-08-19 | 2026-08-20 | Rule mining for data risk control, distilled from the ideas of the "100-Day Risk Control Expert" course  |
| 14 | [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway) | 7 | 2026-08-17 | 2026-08-20 | 手机远程 DeepSeek Harness：扫码即可继续使用电脑上的 DSH，无需远程桌面 / SSH / 公网 IP，支持一次性配对、独立设备授权与随时撤销。 |
| 15 | [woooooooooolf/ser2mcp](https://github.com/woooooooooolf/ser2mcp) | 6 | 2026-08-03 | 2026-08-20 | UART serial port MCP server: expose local serial ports to AI assistants as standard MCP tools（串口转 MCP 服务器，以最适合 AI 的方式提供串口读写支持） |
| 16 | [Yuer6327/NoLetMe](https://github.com/Yuer6327/NoLetMe) | 6 | 2026-08-16 | 2026-08-20 | Deepseek v4 神鬼二象性观测面板 |
| 17 | [Chael-Chael/dsh-reference-anything](https://github.com/Chael-Chael/dsh-reference-anything) | 5 | 2026-08-16 | 2026-08-20 | Reference Anything in DeepSeek Harness—enhance the @ menu to reference commands, skills, files, DSH sessions, and conversations from external chatbot platforms \| 在 DeepSeek Harness 中引用一切——增强@菜单，统一引用命令、Skills、文件、DSH 会话与外部 Chatbot 平台对话 |
| 18 | [Enter3211/dsh-web-search-all-modes](https://github.com/Enter3211/dsh-web-search-all-modes) | 5 | 2026-08-20 | 2026-08-20 | 所有 dsh 对话模式支持联网搜索，极简模式可用。Web search for all dsh conversation modes, minimal included. |
| 19 | [lesliechowsh/dsh-memo](https://github.com/lesliechowsh/dsh-memo) | 5 | 2026-08-19 | 2026-08-20 | Memo — session memory search for DeepSeek Harness agents (memo_search / memo_remember / memo_stats on the official sessionQuery service). Every benchmark number is the shipped product's own, with the experiment trail published. |
| 20 | [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | 5 | 2026-08-13 | 2026-08-20 | DSH plugin for Longbridge HK/US market data, accounts, positions, and approval-gated order placement, with a built-in settings panel. |
| 21 | [wangyihao0001-oss/dsh-task-memory](https://github.com/wangyihao0001-oss/dsh-task-memory) | 5 | 2026-08-20 | 2026-08-20 | Task-isolated long-term memory for DeepSeek Harness — remember / recall / search stay inside one task boundary. |
| 22 | [xiaomengxinbb/dsh-qq-bridge](https://github.com/xiaomengxinbb/dsh-qq-bridge) | 5 | 2026-08-13 | 2026-08-20 | 将 QQ（私聊+群聊）接入 DeepSeek Harness 的双向桥插件：每个 QQ 对话一个隔离持久 Agent 会话，支持命令/审批/多媒体/出站文件 |
| 23 | [Coprexist/AIsChat](https://github.com/Coprexist/AIsChat) | 4 | 2026-06-14 | 2026-08-20 | AIsChat is an open-source AI companion space where intelligent agents have their own states, memories, and rhythms — not just tools, but presences that stay.AI qunliao |
| 24 | [dsh-ssh/dsh-ssh](https://github.com/dsh-ssh/dsh-ssh) | 4 | 2026-08-15 | 2026-08-20 | SSH remote workspaces for DeepSeek Harness — run bash, file, and search tools on any remote machine. |
| 25 | [euanguo/dsh-studio](https://github.com/euanguo/dsh-studio) | 4 | 2026-08-20 | 2026-08-20 | DSH Studio — a local development workbench for DeepSeek Harness: project tree, Git review, terminal, and plugin marketplace (Desktop + Web) |
| 26 | [gugu123a/dsh-tool-see-image](https://github.com/gugu123a/dsh-tool-see-image) | 4 | 2026-08-13 | 2026-08-20 | see_image tool for DSH: lets text-only models 'see' images by routing them to a configurable vision model (default Zhipu GLM-4V-Flash, free) |
| 27 | [lo2589/deepseek-harness-meida](https://github.com/lo2589/deepseek-harness-meida) | 4 | 2026-08-14 | 2026-08-20 | use glm/minimax/openai/claude api in your deepseek harness |
| 28 | [PensiveFei/deep-read-summarize](https://github.com/PensiveFei/deep-read-summarize) | 4 | 2026-08-18 | 2026-08-20 | Deep reading & summarization workflow for books/papers/videos/web — plugin parsers, MapReduce deep-read, JSON Schema output, Obsidian-ready (DSH) |
| 29 | [polaris-smart/dsh-devices](https://github.com/polaris-smart/dsh-devices) | 4 | 2026-08-17 | 2026-08-20 | Turn your devices into a fleet — dph plugin for decentralized multi-device collaboration: mDNS discovery, key pairing, SSH direct exec. Tools auto-register for dph agents. |
| 30 | [sjh9714/cover-my-repo](https://github.com/sjh9714/cover-my-repo) | 4 | 2026-08-19 | 2026-08-20 | Agent skill that designs your GitHub social preview (og:image) as one self-contained HTML file. Five moods, CJK-first, deterministic checks, PNG export. repo cover, opengraph, link card. |
| 31 | [Aampidy/dsh-mcmp](https://github.com/Aampidy/dsh-mcmp) | 3 | 2026-08-18 | 2026-08-20 | Deepseek-Harness数学建模竞赛论文全自动撰写流水线插件。Deepseek-Harness fully automatic pipeline plugin for writing mathematical modeling competition papers. |
| 32 | [baisama-cloud/dsh-custom-brand](https://github.com/baisama-cloud/dsh-custom-brand) | 3 | 2026-08-15 | 2026-08-20 | DeepSeek Harness（DSH）网页界面可自定义品牌区域——用您自己的本地图片替换鲸鱼标志和 DeepSeek 字标，并编辑 HARNESS 徽章文字。 |
| 33 | [DonnieTangzhili/dsh-ops-console](https://github.com/DonnieTangzhili/dsh-ops-console) | 3 | 2026-08-20 | 2026-08-20 | 因为官方的web版想重启比较麻烦，这个插件实现了一种懒人的方式 |
| 34 | [handsomeboyck/dsh-wps-plugings](https://github.com/handsomeboyck/dsh-wps-plugings) | 3 | 2026-08-19 | 2026-08-20 | dsh wps云文档插件 |
| 35 | [heekei/dsh-usage](https://github.com/heekei/dsh-usage) | 3 | 2026-08-20 | 2026-08-20 | DSH 供应商用量查询插件 — 实时查询 Kimi/智谱/DeepSeek/火山方舟等套餐与余额, 在输入框下方显示用量读数条。Install: dsh plugin --profile web add github:heekei/dsh-usage |
| 36 | [hibays/DSHL](https://github.com/hibays/DSHL) | 3 | 2026-08-15 | 2026-08-20 | 极简 DeepSeek Harness 桌面版：单EXE，~4M，即开即用；自动复用本地 dsh 安装、自安装/更新 dsh，启动完全可配置；托盘收纳时自动销毁UI层，内存占用极低，dsh 后台持续服务、随时唤回。 |
| 37 | [hunter118/dsh-s7r](https://github.com/hunter118/dsh-s7r) | 3 | 2026-08-19 | 2026-08-20 | A System 7-inspired desktop interface for DeepSeek Harness (DSH) |
| 38 | [LAU-MARS/dsh-cad](https://github.com/LAU-MARS/dsh-cad) | 3 | 2026-08-20 | 2026-08-20 | deepseek harness 2D and 3D CAD plugin |
| 39 | [Lheyang/orca-dsh-launcher](https://github.com/Lheyang/orca-dsh-launcher) | 3 | 2026-08-16 | 2026-08-20 | 🐋 Orca DSH Launcher：DSH 更新检查 + 服务器启停 + 系统托盘 + 图形控制台 + 一键安装（Cordis 插件 + 桌面端） |
| 40 | [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | 3 | 2026-08-13 | 2026-08-20 | DSH plugin for PaddleOCR-VL document layout parsing: convert PDFs and images to Markdown with async jobs, progress tracking, and workspace export. |
| 41 | [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | 3 | 2026-08-13 | 2026-08-20 | Local offline voice input for DSH using FunASR ONNX, with Web Speech fallback, optional LLM polishing, and a browser settings panel. |
| 42 | [Phant0Meow/dsh-meow-smooth](https://github.com/Phant0Meow/dsh-meow-smooth) | 3 | 2026-08-19 | 2026-08-20 | 手机端ui交互优化，让手机端dsh真正可用。你可以躺着coding了。 电脑、手机都支持的通知系统。AI跑任务，你切出去刷b站了，AI跑完任务或者中途提问，会发通知给你。 还有一些ui交互方面的细节优化。 |
| 43 | [renjianguojinqianfan/Project-Bootstrap-Harness](https://github.com/renjianguojinqianfan/Project-Bootstrap-Harness) | 3 | 2026-04-13 | 2026-08-20 | A lightweight Python project protocol template for AI-assisted development. 轻量级 Python 项目协议模板，内置协作协议与质量门禁。 |
| 44 | [sandbaseai/dsh-plugin-store](https://github.com/sandbaseai/dsh-plugin-store) | 3 | 2026-08-17 | 2026-08-20 | Native plugin marketplace for DeepSeek Harness: discover, filter, install, and manage 4,000+ community plugin packages. |
| 45 | [swell05/dsh-whale-tank](https://github.com/swell05/dsh-whale-tank) | 3 | 2026-08-20 | 2026-08-20 | 鲸鱼缸——一个DSH 插件开发沙盒辅助工具：隔离 DSH_HOME，建立开发态的DSH配置沙箱与插件开发骨架、附带开发知识包、插拔副作用检测与沙箱复原、第三方插件vet体检功能 |
| 46 | [tttwh/dsh-plugin-diraud](https://github.com/tttwh/dsh-plugin-diraud) | 3 | 2026-08-14 | 2026-08-20 | 将DeepSeek Harness插件列表按来源分组展示——官方插件与自行安装插件，一目了然。 |
| 47 | [Web0926/dsh-llm-verifier](https://github.com/Web0926/dsh-llm-verifier) | 3 | 2026-08-20 | 2026-08-20 | Best-of-3/5 LLM-as-a-Verifier plugin for DeepSeek Harness |
| 48 | [Whatsmore-nf/dsh-pdf-edit](https://github.com/Whatsmore-nf/dsh-pdf-edit) | 3 | 2026-08-20 | 2026-08-20 | PDF编辑插件，AI只改文字不改样式，支持单页、批量、换版式，HTML中转保留样式，高效处理大文件。     PDF editor with AI text-only edits (styles unchanged). Supports single-page, batch, and layout changes. HTML intermediate preserves styles. Optimized for large files. |
| 49 | [ZhanboHua/dsh-pet](https://github.com/ZhanboHua/dsh-pet) | 3 | 2026-08-14 | 2026-08-20 | A community DeepSeek Pet client plugin for DeepSeek Harness |
| 50 | [zhangz-2018/dsh-project-orchestrator](https://github.com/zhangz-2018/dsh-project-orchestrator) | 3 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 持久化、审批驱动的项目编排工作台 |
| 51 | [alloevil/dsh-xray](https://github.com/alloevil/dsh-xray) | 2 | 2026-08-20 | 2026-08-20 | X-ray for your DeepSeek Harness — see what's actually loaded, why, and what it costs you. |
| 52 | [Andrew111888/dsh-plugin-balance](https://github.com/Andrew111888/dsh-plugin-balance) | 2 | 2026-08-20 | 2026-08-20 | DSH 插件：DeepSeek / OpenCode Go 额度悬浮窗 + DSH 会话 token 用量统计与官方峰谷价费用估算 |
| 53 | [baisama-cloud/dsh-galgame-generator](https://github.com/baisama-cloud/dsh-galgame-generator) | 2 | 2026-08-17 | 2026-08-20 | DeepSeek Harness (DSH) 的 Galgame 生成器：提供一份剧本文档 + 立绘/背景/音乐素材，即可生成一个可玩的视觉小说（Galgame）网页。 新增一个GalGame生成模式，在这个模式的工作区下提供一份剧本文档 + 立绘/CG/背景/音乐素材等，即可生成Galgame网页。 |
| 54 | [bentong-chain/dsh-dir-tree](https://github.com/bentong-chain/dsh-dir-tree) | 2 | 2026-08-19 | 2026-08-20 | A DeepSeek Harness (DSH) floating workspace directory-tree plugin. Install with `dsh plugin add`, drag-drop file paths into chat, lazy-load, and auto-follows workspace switches. |
| 55 | [chenaptx/deepseek-harness-mac](https://github.com/chenaptx/deepseek-harness-mac) | 2 | 2026-08-14 | 2026-08-20 | Tiny macOS shell for DeepSeek Harness — 132KB Swift+WKWebView, zero Electron |
| 56 | [daha1216/dsh-skill-adult-tension-narrative](https://github.com/daha1216/dsh-skill-adult-tension-narrative) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 成年人(18+/adult)互动叙事 Skill：NPC 活人感（有记忆/立场/底线）、自带破甲与张力引擎、随机开局可预锁、时间推进、全维 YAML 存档。仅限虚构成年人。 |
| 57 | [ddtcorex/agent-dev-skills](https://github.com/ddtcorex/agent-dev-skills) | 2 | 2026-05-25 | 2026-08-20 | Universal AI Agent Development Skills Hub & Cordis Plugin for Govard, Magento 2, Laravel. Works with Claude Code, Codex CLI, OpenCode, GitHub Copilot, DeepSeek Harness. |
| 58 | [fancr-code/dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 的 Windows 桌面托盘启动器：无窗口运行 dsh web，快捷方式 + 系统托盘（打开界面/日志/退出即全退），一键安装。 |
| 59 | [Final-LX/dsh-ui-customizer](https://github.com/Final-LX/dsh-ui-customizer) | 2 | 2026-08-15 | 2026-08-20 | DeepSeek Harness自定义主题插件 |
| 60 | [fyjgtddco/DSH-SW-and-CAD](https://github.com/fyjgtddco/DSH-SW-and-CAD) | 2 | 2026-08-20 | 2026-08-20 | （目前只是测试！用不了，先不要用！实在不行也可以帮我修bug）这个是DeepSeek Harness一键式导入工程模式，然后可以让DeepSeek Harness直接将“完成工图”作为第一目标，你可以选择让AI帮你直接作图，在完成复杂的工艺流程图的时候，可以完全按照AI的想法去做或者自己下命令 |
| 61 | [gehennawu/dsh-service](https://github.com/gehennawu/dsh-service) | 2 | 2026-08-19 | 2026-08-20 | DSH Web 自托管运维插件：安全重启/恢复、健康诊断、模型用量与错误统计、备份及 Linux 权限维护｜Self-hosted operations plugin for DSH Web: safe restart/recovery, health diagnostics, model usage/error stats, backups, and Linux permission repair. |
| 62 | [gxpppp/dsh-obsidian](https://github.com/gxpppp/dsh-obsidian) | 2 | 2026-08-14 | 2026-08-20 | Obsidian bridge plugin for DSH |
| 63 | [Han-Yao94/dsh-session-toolkit](https://github.com/Han-Yao94/dsh-session-toolkit) | 2 | 2026-08-19 | 2026-08-20 | 会话身份、会话自动上线、会话日志按钮、会话间通信 + 全局提示词/重启服务这类工作台工具 |
| 64 | [having5548/deepseek-harness-desktop](https://github.com/having5548/deepseek-harness-desktop) | 2 | 2026-08-20 | 2026-08-20 | 一个基于WinUI的deepseek harness客户端 |
| 65 | [Icather/dsh-clean-desktop-shell](https://github.com/Icather/dsh-clean-desktop-shell) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 的纯净桌面壳（DSH 插件形态）：复用现有 web profile，托盘管理后端，窗口离线自动重连，开机自启，零视觉改造。Clean desktop shell for DeepSeek Harness as a DSH plugin — reuses your web profile, tray-managed backend, offline auto-reconnect, zero visual changes. |
| 66 | [InterPSS-Project/ipss-agent](https://github.com/InterPSS-Project/ipss-agent) | 2 | 2026-05-11 | 2026-08-20 | InterPSS Agentic Power System Simulation Agent for AC load flow, DC-based contingency analysis, and NERC TPL style reporting. Integrated into Deepseek Harness as a DSH Plugin, one can run power system simulations in the traditional way in a local sandbox or in the native AI env. |
| 67 | [khaosnie/dsh-cli](https://github.com/khaosnie/dsh-cli) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 终端交互 profile |
| 68 | [kiligzzz/dsh-session-nav](https://github.com/kiligzzz/dsh-session-nav) | 2 | 2026-08-20 | 2026-08-20 | Piano-key style in-conversation navigation bar for the DeepSeek Harness web GUI: one key per user message, hover preview tooltip, click-to-jump across full history. Official dual-face dsh plugin, no dsh source changes. |
| 69 | [lokic7123-star/dsh-route-resilience](https://github.com/lokic7123-star/dsh-route-resilience) | 2 | 2026-08-19 | 2026-08-20 | Multi-route high-availability, fault isolation and observability for DeepSeek Harness: model groups fail over between authorized provider routes on rate limits, retry-after, transport and auth failures. |
| 70 | [LongSir0419/dsh-mcp-manager](https://github.com/LongSir0419/dsh-mcp-manager) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness (DSH) 的 MCP 服务器管理插件——在 Web 设置里可视化查看、新增、编辑、删除 MCP 服务器，并支持主动连接测试。 |
| 71 | [mmzm0808/dsh-ventus-search](https://github.com/mmzm0808/dsh-ventus-search) | 2 | 2026-08-19 | 2026-08-20 | 🔍 Ventus 搜索 · DeepSeek Harness 多引擎搜索与正文抓取插件 — Bing/360/Bilibili 并发搜索、评分去重、正文抽取、总开关与测试按钮 / Multi-engine web search and fetch providers for DeepSeek Harness (Bing, 360, Bilibili) with scoring, dedup, readability extraction, master switch and test button. |
| 72 | [OneZero-Y/dsh-tint-theme](https://github.com/OneZero-Y/dsh-tint-theme) | 2 | 2026-08-15 | 2026-08-20 | A skin picker for the DeepSeek Harness (DSH) Web GUI |
| 73 | [OpenCnid/deepseek-rlm](https://github.com/OpenCnid/deepseek-rlm) | 2 | 2026-08-20 | 2026-08-20 | Persistent IPython state, durable snapshots, and native recursive subagents for DeepSeek Harness—packaged as a Prime-compatible Cordis plugin bundle. |
| 74 | [Puxora/dsh-browserpilot](https://github.com/Puxora/dsh-browserpilot) | 2 | 2026-08-20 | 2026-08-20 | BrowserPilot 的 DeepSeek Harness（DSH）插件，为 Agent 提供受权限策略控制的本机 Chrome 浏览能力，并集成 BrowserPilot 管理后台入口与连接状态诊断。 |
| 75 | [q35888/dsh-plugin-browser](https://github.com/q35888/dsh-plugin-browser) | 2 | 2026-08-20 | 2026-08-20 | Native browser automation for DeepSeek Harness (DSH): 15 browser_* tools on ctx.tools via Playwright + CDP. Shares one logged-in Chrome with pi/agentic-browser-mcp. |
| 76 | [QIANLING-0831/dsh-memory-plus](https://github.com/QIANLING-0831/dsh-memory-plus) | 2 | 2026-08-18 | 2026-08-20 | 可以有效减少token消耗！DeepSeek Harness memory plugins (dsh-plugin): CJK-aware session full-text search, tool-result dedup, hybrid vector+FTS5 memory search, cross-session core memory, near-lossless compaction locators. Real-harness verified, 47 tests. |
| 77 | [RealAlexandreAI/dsh-noc-memory](https://github.com/RealAlexandreAI/dsh-noc-memory) | 2 | 2026-08-13 | 2026-08-20 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| 78 | [SLin-code/dsh-task-notice-board](https://github.com/SLin-code/dsh-task-notice-board) | 2 | 2026-08-18 | 2026-08-20 | One installable DeepSeek Harness plugin for managing Workspace → Task → Session collaboration. |
| 79 | [taltara/mddl-harness](https://github.com/taltara/mddl-harness) | 2 | 2026-08-19 | 2026-08-20 | Visual orchestrator for DeepSeek Harness — drag models and tools onto a canvas, export a real cordis.patch.yml overlay. |
| 80 | [TinyPanda168/SpecsRelay-DSH](https://github.com/TinyPanda168/SpecsRelay-DSH) | 2 | 2026-08-15 | 2026-08-20 | DeepSeek 网页对话 → 自动整理与澄清需求 → 发送到 DSH 项目启动 Agent；仅支持 DSH Desktop、Pilot Harness、DataElement DSH Desktop 和 myYangyunfan DSH Desktop。 |
| 81 | [TryDing-T/dsh-Plugin--ChineseChess](https://github.com/TryDing-T/dsh-Plugin--ChineseChess) | 2 | 2026-08-19 | 2026-08-20 | 等待dsh任务的功夫来和dsh下一局象棋吧 |
| 82 | [VinsonWild/Wangdefa.Memory](https://github.com/VinsonWild/Wangdefa.Memory) | 2 | 2026-08-10 | 2026-08-20 | Wangdefa.Memory 是一个为企业级 Agent 设计的五层记忆体组件，采用「本地优先」的存储策略，达到轻量、可控、可解释。 |
| 83 | [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) | 2 | 2026-08-14 | 2026-08-20 | Billing and usage inspection plugin for DeepSeek Harness. |
| 84 | [WindyPro-rourou/dsh-logcat](https://github.com/WindyPro-rourou/dsh-logcat) | 2 | 2026-08-19 | 2026-08-20 | Android Logcat viewer for the DeepSeek Harness (DSH) Web GUI: auto-connect adb devices, live logcat stream with level/keyword filters, pause/clear/export, plus the logcat_recent agent tool. |
| 85 | [worldwonderer/oh-story-dsh](https://github.com/worldwonderer/oh-story-dsh) | 2 | 2026-08-19 | 2026-08-20 | Native DeepSeek Harness workbenches for novel writing and short-drama production, powered by Oh Story and Drama Skills. |
| 86 | [writeCasually/deepseek-harness-plugins](https://github.com/writeCasually/deepseek-harness-plugins) | 2 | 2026-08-14 | 2026-08-20 | deepseek harness plugins view |
| 87 | [WZZNNE/DSH-CyberWorkStation](https://github.com/WZZNNE/DSH-CyberWorkStation) | 2 | 2026-08-19 | 2026-08-20 | DSH CyberWorkStation — one-click DeepSeek Harness (dsh) bundle: cyberpunk desktop launcher, SillyTavern-grade Control Deck, 8 production plugins, AI skin studio & markets. Vendored core rc.8, run setup.cmd and go. 一键部署的 dsh 赛博工作站整合包。 |
| 88 | [XMoon/dsh-subagent-router](https://github.com/XMoon/dsh-subagent-router) | 2 | 2026-08-19 | 2026-08-20 | Dynamic model routing for DSH subagents, with continuable spawn sessions and one-shot fork support. |
| 89 | [xuxun-oss/dsh-vision-imagen](https://github.com/xuxun-oss/dsh-vision-imagen) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness all-in-one: no model switching — regular DeepSeek auto-routes to vision & image gen. Multi-backend: Gemini + any OpenAI-compatible (GPT-4o, Qwen-VL, GLM-4V, gpt-image, DALL-E, Flux, OpenRouter). gemini_vision/gemini_generate_image/gemini_optimize_image with vision self-check. Better than modlens. |
| 90 | [ycr40/dsh-prolong-memory](https://github.com/ycr40/dsh-prolong-memory) | 2 | 2026-08-20 | 2026-08-20 | PRO-LONG-style programmatic memory plugin for DeepSeek Harness (DSH): appends every durable session event to a per-workspace log.txt the agent retrieves with grep/python. Built-in write probe, /prolong status command, permission-deny counter, and a reproducible compaction A/B experiment. |
| 91 | [YNM10086/DSH-Collaboration](https://github.com/YNM10086/DSH-Collaboration) | 2 | 2026-08-15 | 2026-08-20 | Cordis Bundle 插件，为 DSH 提供多模型并行调度、多代理协同执行能力 |
| 92 | [YTyangtao666/dsh-skills-bridge](https://github.com/YTyangtao666/dsh-skills-bridge) | 2 | 2026-08-20 | 2026-08-20 | Bring your Claude Code skills into DeepSeek Harness — zero migration, one plugin. 一个插件把 Claude Code 技能桥接进 DeepSeek Harness |
| 93 | [Yu-tao-Li/dsh-read-image-view](https://github.com/Yu-tao-Li/dsh-read-image-view) | 2 | 2026-08-17 | 2026-08-20 | 用于展示对话中读取的图片（read_image 结果）：DSH Web GUI 对话流专用 Read image 行，默认缩略图 + 页面内全精度放大层（缩放按钮/滚轮/1:1）· Displays images read in the conversation (read_image results) in the DSH Web GUI |
| 94 | [YUEEEEY/dsh-desktop-tools](https://github.com/YUEEEEY/dsh-desktop-tools) | 2 | 2026-08-18 | 2026-08-20 | dsh 环境管理插件（TypeScript）：安装即配备桌面窗口（Rust/Tauri 宿主自动获取）、运行时一键更新、平台兼容自动适配、DeepSeek 官方计费与工作区代码编辑器。 |
| 95 | [zhenghaoyang24/dsh-desktop](https://github.com/zhenghaoyang24/dsh-desktop) | 2 | 2026-08-14 | 2026-08-20 | DeepSeek Harness desktop.DeepSeek Harness 桌面端。 |
| 96 | [zhujiaqi/dsh-secret-paste](https://github.com/zhujiaqi/dsh-secret-paste) | 2 | 2026-08-19 | 2026-08-20 | DeepSeek Harness plugin: detect pasted secrets, store them in the credentials seam, and send [secret:REF] placeholders to the model. |
| 97 | [253071608/dsh-localnote](https://github.com/253071608/dsh-localnote) | 1 | 2026-08-20 | 2026-08-20 | 把"以后再说"的灵感，准时摆到你面前：随手记下，到点由 AI 自动替你把它想透、做透，回来只看结果。 |
| 98 | [502399493zjw-lgtm/dsh-codex-shared-pool](https://github.com/502399493zjw-lgtm/dsh-codex-shared-pool) | 1 | 2026-08-20 | 2026-08-20 | Community DeepSeek Harness bundle for Codex account-pool integration |
| 99 | [502399493zjw-lgtm/dsh-plugin-best-practices-skill](https://github.com/502399493zjw-lgtm/dsh-plugin-best-practices-skill) | 1 | 2026-08-20 | 2026-08-20 | Agent skill and executable toolkit for building, validating, and delivering external DSH plugins |
| 100 | [57ggfk/dsh-turn-status-phrases](https://github.com/57ggfk/dsh-turn-status-phrases) | 1 | 2026-08-20 | 2026-08-20 | 像 Claude Code 一样，DeepSeek Harness 现在也允许您自定义等待 AI 回复时的状态提示语。您可以根据不同轮次或场景，灵活替换占位文案，让开发助手在“思考”时也能传递您想要的信息。 |
| 101 | [a903067276-rgb/dsh-todo-guard](https://github.com/a903067276-rgb/dsh-todo-guard) | 1 | 2026-08-19 | 2026-08-20 | Reliable todo panel for DeepSeek Harness (dsh) web: survives restarts, completion verified against evidence paths |
| 102 | [abcdream-Lary/dshsearch-multi](https://github.com/abcdream-Lary/dshsearch-multi) | 1 | 2026-08-19 | 2026-08-20 | DeepSeek Harness (DSH) 的多提供商网页搜索和页面获取插件：AnySearch、Bing、DuckDuckGo、Tavily、Exa |
| 103 | [ADVeRTs13/dsh-auto-model-router](https://github.com/ADVeRTs13/dsh-auto-model-router) | 1 | 2026-08-20 | 2026-08-20 | Auto model router for DeepSeek Harness: routes each user input to the best model through L0–L3 tiers, with cost modes, keyword scoring, and optional LLM classifier. |
| 104 | [aizzaua/dsh-mail-connector](https://github.com/aizzaua/dsh-mail-connector) | 1 | 2026-08-20 | 2026-08-20 | A DeepSeek Harness plugin that gives your AI a mailbox — zero-dependency IMAP/SMTP engine for reading, searching, attachments, and sending.DeepSeek Harness 邮箱插件 · 零依赖 IMAP/SMTP 引擎，让 AI 读信、搜索、下载附件、发信。 |
| 105 | [AKI2253/Sidor_UI](https://github.com/AKI2253/Sidor_UI) | 1 | 2026-08-20 | 2026-08-20 | SIDOR starfield skin for DeepSeek Harness Web GUI: intro animation, starfield, balance badge, settings FX, low-balance alerts |
| 106 | [alpacachen/dsh-kanban](https://github.com/alpacachen/dsh-kanban) | 1 | 2026-08-20 | 2026-08-20 | A shared kanban board for people and AI agents in DeepSeek Harness. |
| 107 | [anyuinlara-bit/dsh-BFF-pet](https://github.com/anyuinlara-bit/dsh-BFF-pet) | 1 | 2026-08-20 | 2026-08-20 | DSH 桌面宠物插件 🐾 透明悬浮窗 + WebM 动画，由 Agent 真实状态驱动的 Windows 桌宠。纯 Windows / WSL 均支持，自动识别 Electron 环境。 |
| 108 | [autorouter0-ai/dsh-llm-autorouter](https://github.com/autorouter0-ai/dsh-llm-autorouter) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: use AutoRouter as your LLM provider — unified routing, failover, and model discovery |
| 109 | [auuduu/dsh-zai-coding-models](https://github.com/auuduu/dsh-zai-coding-models) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness bridge plugin: newest Zhipu/Z.AI coding-plan models (glm-5.3) on zai-coding-cn before the bundled pi-ai catalog catches up |
| 110 | [baisama-cloud/dsh-composer-history](https://github.com/baisama-cloud/dsh-composer-history) | 1 | 2026-08-19 | 2026-08-20 | Command history for the DeepSeek Harness (DSH) web GUI composer — press ↑ / ↓ to cycle through your previously sent instructions, then restore the draft you were editing when you reach the end of the history. |
| 111 | [baisama-cloud/dsh-omni-bridge](https://github.com/baisama-cloud/dsh-omni-bridge) | 1 | 2026-08-16 | 2026-08-20 | DeepSeek Harness（DSH）多通道消息桥：将微信（ClawBot/iLink）、QQ和飞书（Lark）聊天消息路由给DSH代理，并将代理的回复反馈给发送方。 |
| 112 | [bloodtmai-cmyk/dsh-ai-hub](https://github.com/bloodtmai-cmyk/dsh-ai-hub) | 1 | 2026-08-20 | 2026-08-20 | 面向企业内部 Harness 工作台的轻量控制面 |
| 113 | [bloodtmai-cmyk/dsh-harness-enterprise](https://github.com/bloodtmai-cmyk/dsh-harness-enterprise) | 1 | 2026-08-20 | 2026-08-20 | 面向企业内部管控的 DeepSeek Harness 统一智能工作台入口 |
| 114 | [brianwang2007xjtu/dsh-nailong-pet](https://github.com/brianwang2007xjtu/dsh-nailong-pet) | 1 | 2026-08-20 | 2026-08-20 | dsh pet-plugin of nailong |
| 115 | [callmesoul/deepseek-kanban-plugin](https://github.com/callmesoul/deepseek-kanban-plugin) | 1 | 2026-08-20 | 2026-08-20 | DSH (DeepSeek Harness) 任务看板插件：主机状态机 + git 调度 + 浏览器看板 UI，agent 自动执行任务、审核后自动合并回基础分支 |
| 116 | [ccbili30-collab/dsh-plugin-rollback-whale](https://github.com/ccbili30-collab/dsh-plugin-rollback-whale) | 1 | 2026-08-19 | 2026-08-20 | 回档大肥鱼：DeepSeek Harness 的可安装外置回档与恢复插件 |
| 117 | [CH4ACKO3/dsh-turn-fold](https://github.com/CH4ACKO3/dsh-turn-fold) | 1 | 2026-08-19 | 2026-08-20 | Codex-style completed-turn folding for DeepSeek Harness, powered by dsh-harmony. |
| 118 | [ChadCSong/dsh-cliproxyapi-provider](https://github.com/ChadCSong/dsh-cliproxyapi-provider) | 1 | 2026-08-20 | 2026-08-20 | Auto-discovery CLIProxyAPI provider for DeepSeek Harness, featuring dynamic model sync, native model switching, and vision-model selection. |
| 119 | [charleswin7/dsh-skill-browser](https://github.com/charleswin7/dsh-skill-browser) | 1 | 2026-08-19 | 2026-08-20 | DSH web 插件：在「设置」里新增一个 **Skills** 页面，列出本机已安装的所有 skills，并一键打开每个 skill 所在的文件夹。 |
| 120 | [Chenmo0414/openanalyst](https://github.com/Chenmo0414/openanalyst) | 1 | 2026-08-20 | 2026-08-20 | Turn your coding agent into a data analyst — DuckDB engine, auto-profiling, read-only SQL, and Vega-Lite charts. Ships as a DeepSeek Harness plugin (charts render live in the conversation) and an MCP server for Claude Code / Codex / Cursor. 把编码 Agent 变成数据分析师：dsh 插件对话内出图 + MCP server |
| 121 | [chouxiaohuai/dsh-uiskin-theme](https://github.com/chouxiaohuai/dsh-uiskin-theme) | 1 | 2026-08-17 | 2026-08-20 | Blue Glass Theme (ocean fantasy) for DeepSeek Harness Web — static profile bundle. 海洋幻想主题:海洋背景、玻璃气泡、海洋侧边栏、鲸鱼设置按钮、炫彩模型文字。安装: dsh plugin --profile web add github:chouxiaohuai/uiskin-theme |
| 122 | [ciky20171114/dsh-plugin-midscene](https://github.com/ciky20171114/dsh-plugin-midscene) | 1 | 2026-08-20 | 2026-08-20 | Midscene-based AI UI automation plugin for DeepSeek Harness (android_ui + web_ui) |
| 123 | [CJYLZS/dsh-opencode-go-autosync](https://github.com/CJYLZS/dsh-opencode-go-autosync) | 1 | 2026-08-20 | 2026-08-20 | auto sync opencode-go models in dsh |
| 124 | [CMSKL/dsh-plugin-observatory](https://github.com/CMSKL/dsh-plugin-observatory) | 1 | 2026-08-17 | 2026-08-20 | DSH plugin compatibility audit and bounded Loader lifecycle observation |
| 125 | [CN-WenYu/dsh-git-conventions](https://github.com/CN-WenYu/dsh-git-conventions) | 1 | 2026-08-20 | 2026-08-20 | Configurable Git commit and pull-request conventions for DeepSeek Harness — enforce user-defined rules on commit messages and PR titles/descriptions. ｜ DeepSeek Harness 的可配置 Git 提交与拉取请求规范插件，按用户自定义规则校验提交信息与 PR 标题/描述。 |
| 126 | [CNSeniorious000/dsh-generative-ui](https://github.com/CNSeniorious000/dsh-generative-ui) | 1 | 2026-08-20 | 2026-08-20 | Generative UI for DeepSeek Harness — the agent writes TSX, dsh web renders it live, inline in chat and in a canvas panel |
| 127 | [codingayice/dsh-interview](https://github.com/codingayice/dsh-interview) | 1 | 2026-08-20 | 2026-08-20 | 针对开发岗的面试复习dsh插件 |
| 128 | [congyaqwq/dsh-quick-prompts](https://github.com/congyaqwq/dsh-quick-prompts) | 1 | 2026-08-18 | 2026-08-20 | deepseek harness quick prompts |
| 129 | [dangthanhtam529-dev/dsh-plugin-news-report](https://github.com/dangthanhtam529-dev/dsh-plugin-news-report) | 1 | 2026-08-18 | 2026-08-20 | deepseek-harness 新闻报告插件，用于制作早报等 |
| 130 | [DDDFXYqiming/dsh-pseudo-vision](https://github.com/DDDFXYqiming/dsh-pseudo-vision) | 1 | 2026-08-20 | 2026-08-20 | Tools and a request-time image→text bridge that lets text-only DeepSeek Harness models 'see' via OCR, color statistics, pixel scanning, and image metadata. Reifies the pseudo-vision flow surfaced by @YinsenW_ on 2026-08-20. |
| 131 | [deepseek-dsh/dsh-workspace](https://github.com/deepseek-dsh/dsh-workspace) | 1 | 2026-08-19 | 2026-08-20 | DeepSeek Harness Web UI 增强插件：余额用量概览、项目文件浏览、Git 变更与历史、内置终端、Harness 更新检查 |
| 132 | [developerdh/dsh-sandbox-allowlist](https://github.com/developerdh/dsh-sandbox-allowlist) | 1 | 2026-08-20 | 2026-08-20 | 为 DSH 默认沙箱增加可配置的「沙箱授权目录」，允许工作区外的受信修改。 |
| 133 | [dhicoc/dsh-theme-mineradio](https://github.com/dhicoc/dsh-theme-mineradio) | 1 | 2026-08-17 | 2026-08-20 | A cinematic visual-radio glass theme for DeepSeek Harness (DSH) Desktop — port of the Mineradio music player's champagne-glass aesthetic. Fluid or wallpaper backdrop, light-glass panels, custom knobs, and the drifting-glow cursor treatment. |
| 134 | [DIAG5/dsh-better-input](https://github.com/DIAG5/dsh-better-input) | 1 | 2026-08-20 | 2026-08-20 | Better input experience for DeepSeek Harness : voice input, AI prompt polishing, PDF & image input.DeepSeek Harness输入体验增强：语音输入、AI提示词润色、PDF转md、图片输入。 |
| 135 | [domparent/OLEDCare](https://github.com/domparent/OLEDCare) | 1 | 2026-08-20 | 2026-08-20 | OLED burn-in care plugin for the DeepSeek Harness Web GUI: true-black nap screensaver, pure-black surfaces, gamma-aware dimming, hue rotation |
| 136 | [dreamer0323/dsh-desktop](https://github.com/dreamer0323/dsh-desktop) | 1 | 2026-08-17 | 2026-08-20 | 一个dsh桌面端应用，可自定义主题以及桌宠，内置了雾雨魔理沙主题。 |
| 137 | [drscrewdriver/dsh-switch-search](https://github.com/drscrewdriver/dsh-switch-search) | 1 | 2026-08-19 | 2026-08-20 | 给 DeepSeek Harness 侧边栏加一个会话内容检索——标题/内容一键切换，还能按用户/回复/工具筛选 |
| 138 | [emiliagarfield6-bot/dsh-telegram-notify](https://github.com/emiliagarfield6-bot/dsh-telegram-notify) | 1 | 2026-08-20 | 2026-08-20 | Telegram notifications for DeepSeek Harness — get pinged when your agent finishes a task or needs you. DeepSeek Harness 的 Telegram 通知插件：任务完成、提问、审批时自动发消息提醒你。 |
| 139 | [FeatherHunter/dsh-chinese-skill-patch](https://github.com/FeatherHunter/dsh-chinese-skill-patch) | 1 | 2026-08-19 | 2026-08-20 | 让 DSH 原生支持中文技能名 · Make DSH discover Chinese skill names without renaming — /私 → 私家大厨 · More by @FeatherHunter: 🎨 dsh-opencode-palette · ⚡ dsh-prompt |
| 140 | [FeiZhuNiU-INFJA/dsh-stock-ticker](https://github.com/FeiZhuNiU-INFJA/dsh-stock-ticker) | 1 | 2026-08-20 | 2026-08-20 | dsh-plugin: floating semi-transparent market ticker for DeepSeek Harness — 上证指数 / 创业板指 / 科创50 / 恒生科技 |
| 141 | [felixzhang-glitch/dsh-panel](https://github.com/felixzhang-glitch/dsh-panel) | 1 | 2026-08-16 | 2026-08-20 | DeepSeek Harness token usage dashboard: settings UI with overview / by-date / by-model breakdowns, host aggregation over session logs |
| 142 | [fore-vip/dsh-live](https://github.com/fore-vip/dsh-live) | 1 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 多平台直播插件：摄像头/屏幕/画中画，视频号/抖音/快手/斗鱼/B站/YY/虎牙/CC 多选同步推流，ffmpeg 引擎真实 RTMP 推流 (dsh-plugin) |
| 143 | [frankxxxxue/dsh-photo-skins](https://github.com/frankxxxxue/dsh-photo-skins) | 1 | 2026-08-19 | 2026-08-20 | A DeepSeek Harness plugin that turns your photos into Web GUI skins — auto-extracted accent colors, all files stay local. |
| 144 | [Free-corner/dsh-chat-tools](https://github.com/Free-corner/dsh-chat-tools) | 1 | 2026-08-19 | 2026-08-20 | DSH chat tools plugin；Make the interface more efficient, add content area width adjustment, question history, and add a table of contents outline feature for markdown format. |
| 145 | [gausszhou/dsh-web-search-local](https://github.com/gausszhou/dsh-web-search-local) | 1 | 2026-08-17 | 2026-08-20 | Keyless multi-engine web search + fetch providers for the DeepSeek Harness (dsh) web seam — works with any model backend |
| 146 | [gengmao/dsh-session-s3](https://github.com/gengmao/dsh-session-s3) | 1 | 2026-08-19 | 2026-08-20 | Community DSH plugin: S3-backed SessionPersistence (wal3-Lite). Immutable JSONL fragments + CAS manifest. |
| 147 | [H2O-MERO/dsh-git-sidebar](https://github.com/H2O-MERO/dsh-git-sidebar) | 1 | 2026-08-20 | 2026-08-20 | 嵌入式 Git 可视化工作台（代码 Diff / 未提交改动面板 / 对话页侧边改动模块）A Git visualization workbench embedded in the DeepSeek Harness Web GUI |
| 148 | [HaoyueQin/dsh-better-reasoning-effort](https://github.com/HaoyueQin/dsh-better-reasoning-effort) | 1 | 2026-08-19 | 2026-08-20 | Reasoning-effort editing for third-party models in DeepSeek Harness: per-model thinking levels with a knowledge base + protocol inference, edited inside the official Models page card. |
| 149 | [HaoyueQin/dsh-usage-statistics-panel](https://github.com/HaoyueQin/dsh-usage-statistics-panel) | 1 | 2026-08-19 | 2026-08-20 | DSH web plugin: per-day token usage statistics with a GitHub-style activity heatmap, cache hit-rate curve and per-model breakdown |
| 150 | [HeathHe/dsh-model-search](https://github.com/HeathHe/dsh-model-search) | 1 | 2026-08-20 | 2026-08-20 | Adds a search box to the DeepSeek Harness Web GUI model switcher — filter by model name, ID, or provider instantly while preserving every official interaction. |
| 151 | [helibeiqi/dsh-time-travel](https://github.com/helibeiqi/dsh-time-travel) | 1 | 2026-08-20 | 2026-08-20 | DSH (DeepSeek Harness) Cordis 插件：可逆时间旅行与审计 —— 工具副作用快照 + rewindTo 补偿 + 审计规则引擎 |
| 152 | [HenrlyLin16/dsh-quickstart](https://github.com/HenrlyLin16/dsh-quickstart) | 1 | 2026-08-18 | 2026-08-20 | DeepSeek Harness (dsh) community Quickstart — install, model channels, curated plugins (docs, not a plugin) |
| 153 | [hhhh124hhhh/cocos-extensions](https://github.com/hhhh124hhhh/cocos-extensions) | 1 | 2026-08-16 | 2026-08-20 | 让 AI 直接驱动 Cocos Creator 做游戏开发 — DeepSeek Harness MCP 全栈方案（场景操作、构建验证、视觉验证、多Agent团队） |
| 154 | [hollis-openlab/dsh-matt-skills-flow](https://github.com/hollis-openlab/dsh-matt-skills-flow) | 1 | 2026-08-20 | 2026-08-20 | Matt Skills engineering workflow plugin for DeepSeek Harness |
| 155 | [hoyyang/dsh-image-gen](https://github.com/hoyyang/dsh-image-gen) | 1 | 2026-08-20 | 2026-08-20 | 🎨 DeepSeek Harness 通用 AI 生图插件：任意 OpenAI 兼容生图网关/模型，设置页可视化配置，/dsh-image-gen 一句话出图 |
| 156 | [iia-arg/dsh-plugins](https://github.com/iia-arg/dsh-plugins) | 1 | 2026-08-19 | 2026-08-20 | Community plugins for DeepSeek Harness — starting with a Telegram channel the harness does not ship |
| 157 | [jinsiyu/dsh-safemode-profile](https://github.com/jinsiyu/dsh-safemode-profile) | 1 | 2026-08-19 | 2026-08-20 | dsh安全模式插件，通过构建空白profile实现零第三方插件启动。The dsh security mode plugin achieves a zero third-party plugin startup by constructing a blank profile. |
| 158 | [JoFe2/kaleidosphere-dsh-plugin](https://github.com/JoFe2/kaleidosphere-dsh-plugin) | 1 | 2026-08-20 | 2026-08-20 | Native KaleidoSphere database-analysis plugin for DeepSeek Harness |
| 159 | [kakapengta/DSH-Skill-Security-Inspector](https://github.com/kakapengta/DSH-Skill-Security-Inspector) | 1 | 2026-08-20 | 2026-08-20 | 一个可直接链接到 DeepSeek Harness（DSH）Web profile 的独立安全检查插件。在安装或使用不受信任的 Skill 前，先执行浏览器本地粗检，再由用户决定是否调用 DSH 已配置的大模型进行结构化复核。 |
| 160 | [kee0012/dsh-sidebar-panel](https://github.com/kee0012/dsh-sidebar-panel) | 1 | 2026-08-20 | 2026-08-20 | DSH（DeepSeek Harness，Web profile）的右侧面板插件：在会话头部右上角新增一个面板折叠按钮，点击展开/收起右侧列。包括概览、文件、改动、工具,。 |
| 161 | [krystal-cao/deepseek-harness-desktop](https://github.com/krystal-cao/deepseek-harness-desktop) | 1 | 2026-08-15 | 2026-08-20 | DeepSeek Harness 的非官方桌面封装：本地优先、沙箱隔离，内置 dsh 版本管理与插件管理，支持自动更新与任务完成桌面通知（macOS）。 |
| 162 | [Lenonss/DSH_VsCodeMode](https://github.com/Lenonss/DSH_VsCodeMode) | 1 | 2026-08-20 | 2026-08-20 | deepseek-harness |
| 163 | [libaie/dsh-flotilla](https://github.com/libaie/dsh-flotilla) | 1 | 2026-08-14 | 2026-08-20 | Multi-repo workflow isolation skill for DeepSeek Harness - one isolated entry agent per repo, one controller for cross-project dispatch, model routing & hash-chained ledger |
| 164 | [liguobao/dsh-file-viewer](https://github.com/liguobao/dsh-file-viewer) | 1 | 2026-08-19 | 2026-08-20 | A universal file preview layer for DeepSeek Harness: open and inspect files right inside the web UI — no external application needed. |
| 165 | [lijian-888/dsh-nba-pets](https://github.com/lijian-888/dsh-nba-pets) | 1 | 2026-08-20 | 2026-08-20 | 🏀 为 DeepSeek Harness 打造的篮球桌面宠物插件：自由切换 Curry 30、King 23，支持投篮待机动画、AI 任务状态提醒、拖拽与位置记忆，让每一次 AI 编程都像置身比赛现场！ |
| 166 | [LilycleHeart/dsh-liuli-ui-enhance](https://github.com/LilycleHeart/dsh-liuli-ui-enhance) | 1 | 2026-08-20 | 2026-08-20 | 琉璃 UI 增强 —— DSH 主题插件:M3 动态取色、壁纸磨砂材质、声纹可视化、dock shell、嵌入式浏览器 |
| 167 | [linfunss/dsh-win-notify](https://github.com/linfunss/dsh-win-notify) | 1 | 2026-08-19 | 2026-08-20 | Windows 11 system notification bridge plugin for DeepSeek Harness: branded toasts (name + whale icon + sound) when user confirmation is needed and when the model finishes running. Zero dependencies, zero build. |
| 168 | [lingyingaojue/dsh-l10n-hardpatch](https://github.com/lingyingaojue/dsh-l10n-hardpatch) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (dsh) 硬编码中文化补丁插件：导入即汉化，dsh 更新后自动重打 |
| 169 | [lizhouai/dsh-provider-usage](https://github.com/lizhouai/dsh-provider-usage) | 1 | 2026-08-18 | 2026-08-20 | Live balance & quota panel for all your LLM providers, right in the DeepSeek Harness sidebar. |
| 170 | [LongSir0419/dsh-skill-manager](https://github.com/LongSir0419/dsh-skill-manager) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (DSH) 的 Skill 管理插件——在 Web 设置里管理所有用户级 Skill：查看、启用/停用、编辑、新增、删除、改名。停用的 Skill 会从模型目录中排除（不再加载）。 |
| 171 | [lovedheart/dsh-plugin-token-usage](https://github.com/lovedheart/dsh-plugin-token-usage) | 1 | 2026-08-20 | 2026-08-20 | DSH plugin for cross-session token usage statistics (/usage command + Web GUI Token 用量 panel) |
| 172 | [lovesiss/dsh-notify](https://github.com/lovesiss/dsh-notify) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness desktop notifications: turn done, approval and question pings；任务进度提醒插件，在别的页面工作时,若DSH需要审批，回答，或对话完成都会弹出系统弹窗提示 |
| 173 | [lovstudio/dsh-plugin-creator-skill](https://github.com/lovstudio/dsh-plugin-creator-skill) | 1 | 2026-08-20 | 2026-08-20 | Create a @deepseek-ai/dsh-* plugin package end-to-end — choose the extension point or capability seam, scaffold the package, implement the tool/hook/service, and run the repo gates. |
| 174 | [lovstudio/dsh-plugin-publisher-skill](https://github.com/lovstudio/dsh-plugin-publisher-skill) | 1 | 2026-08-20 | 2026-08-20 | Publish a validated DSH plugin package (@deepseek-ai/dsh-* or @lovstudio/dsh-*) to npm, git, or tarball channels and verify it loads in the DeepSeek Harness. |
| 175 | [ltsone9/dsh-filemenu](https://github.com/ltsone9/dsh-filemenu) | 1 | 2026-08-19 | 2026-08-20 | Right-click file menu for DeepSeek Harness (DSH) web UI: open, reveal in Explorer, open with editor, copy path; sidebar workspace/session menus. 对话文件右键菜单插件。 |
| 176 | [lumi-lei/interchange-plugin](https://github.com/lumi-lei/interchange-plugin) | 1 | 2026-08-16 | 2026-08-20 | Local-first role-based collaboration tools for DeepSeek Harness, with an embedded panel and human-confirmed delivery. |
| 177 | [luoxunhao/deepseek-harness-plugins](https://github.com/luoxunhao/deepseek-harness-plugins) | 1 | 2026-08-16 | 2026-08-20 | dsh插件仓库 |
| 178 | [Lyt-LZ/dsh-catpet-desktop-pet](https://github.com/Lyt-LZ/dsh-catpet-desktop-pet) | 1 | 2026-08-19 | 2026-08-20 | A cute cat meme desktop pet plugin for DSH (DeepSeek Harness)  |
| 179 | [LzqSuShi/dsh-layout-control](https://github.com/LzqSuShi/dsh-layout-control) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness Web layout overlay: dock the composer, hide chrome, filter transcript nodes. |
| 180 | [Mason-1011/dsh-task-center](https://github.com/Mason-1011/dsh-task-center) | 1 | 2026-08-17 | 2026-08-20 | Task lifecycle plugin suite for DeepSeek Harness (dsh): agents claim work across sessions, wake up on schedule, quota-aware; idle/imported chats auto-mined into board candidates; full web kanban. \| dsh 任务全生命周期插件族:跨会话认领、定时唤醒、额度感知、闲置会话自动抽取候选,配 Web 看板。 |
| 181 | [meliwanx/dsh-office-cli](https://github.com/meliwanx/dsh-office-cli) | 1 | 2026-08-19 | 2026-08-20 | Secure DeepSeek Harness plugin for official WeCom, DingTalk, and Feishu/Lark CLIs |
| 182 | [MickLife/mex](https://github.com/MickLife/mex) | 1 | 2026-08-05 | 2026-08-20 | 一个运行于你的电脑本地的记忆系统，存储并提供用户个人相关的记忆上下文，尤其是用户画像相关的条目，从而帮助用户实现个性化的 AI 服务。 |
| 183 | [mjylfz/dsh-skill-mover](https://github.com/mjylfz/dsh-skill-mover) | 1 | 2026-08-20 | 2026-08-20 | 把其他 Agent 的技能一键搬进 DeepSeek Harness：支持 14 个平台 + 共享层识别、同名技能合并、不重复搬运、可回滚。DSH 技能搬家插件 (skill mover). |
| 184 | [moyu-good/dsh-lark-bridge](https://github.com/moyu-good/dsh-lark-bridge) | 1 | 2026-08-14 | 2026-08-20 | 🕊️ Run a full DeepSeek Harness coding agent inside Feishu/Lark — native thinking process (CoT), interactive approval cards, live reactions, slash commands, WS long-connection. No public callback URL. (云鹊桥) |
| 185 | [muzyLink/dsh-subagent-profile](https://github.com/muzyLink/dsh-subagent-profile) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 子 Agent 派发方案化插件：按任务指定预设/模型/推理强度/工具范围，常用组合存成命名方案一键派发，内置成本护栏。 |
| 186 | [nmbzth/dsh_update_check](https://github.com/nmbzth/dsh_update_check) | 1 | 2026-08-20 | 2026-08-20 | dsh_update_check是一个dsh插件，能自动检查dsharness官方上游仓库比对差异并提示更新。Dynamic Cordis plugin for DeepSeek Harness update checking. |
| 187 | [omdsh-dev/dsh-tool-tariff](https://github.com/omdsh-dev/dsh-tool-tariff) | 1 | 2026-08-20 | 2026-08-20 | DSH peak/off-peak tariff, DeepSeek API balance, reminder, and Web status badge plugin |
| 188 | [pai535Huang/dsh-superpower](https://github.com/pai535Huang/dsh-superpower) | 1 | 2026-08-19 | 2026-08-20 | DSH plugin bundle for obra/superpowers skills and development workflows |
| 189 | [Pasumao/dsh-plugin-table-zoom](https://github.com/Pasumao/dsh-plugin-table-zoom) | 1 | 2026-08-19 | 2026-08-20 | DSH 聊天表格浮窗插件：长/宽 markdown 表格一键弹出可滚动浮窗查看，支持复制为 Markdown。纯前端 DOM 增强，零依赖。 |
| 190 | [piggy00544/dsh-upgrade-kit](https://github.com/piggy00544/dsh-upgrade-kit) | 1 | 2026-08-20 | 2026-08-20 | DSH 装备升级套件：看钱（dsh-cost 费用面板）、看文件（file-preview 预览）、搜外网（research-mcp）、看图片（vision-bridge）。一条命令全装。 |
| 191 | [pwangxo-sg/dsh-feishu-bridge](https://github.com/pwangxo-sg/dsh-feishu-bridge) | 1 | 2026-08-20 | 2026-08-20 | 飞书↔DeepSeek Harness 完整通道（双向会话 + 飞书审批）\| Full Feishu/Lark channel for DeepSeek Harness: two-way chat + Feishu approvals |
| 192 | [qtjg/dsh-plugin-git-context](https://github.com/qtjg/dsh-plugin-git-context) | 1 | 2026-08-20 | 2026-08-20 | A DeepSeek Harness plugin that exposes bounded Git status, diff, and log context to the model. |
| 193 | [qwert702/dsh-auto-translate](https://github.com/qwert702/dsh-auto-translate) | 1 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 插件:英文回复自动翻译成中文,工具调用附带一行中文注释;翻译走独立请求,不占用上下文窗口 |
| 194 | [R2h1/deepseek-harness-app](https://github.com/R2h1/deepseek-harness-app) | 1 | 2026-08-16 | 2026-08-20 | DeepSeek Harness 桌面端 —— 自包含的 ElectroBun 外壳，内置可自动更新的 dsh 引擎，附带 Windows 图形化安装程序 |
| 195 | [satan9394/dsh-codebase-design](https://github.com/satan9394/dsh-codebase-design) | 1 | 2026-08-19 | 2026-08-20 | DSH skill: 深模块设计, 接口与接缝（受 mattpocock/skills 223k★ 启发） |
| 196 | [satan9394/dsh-content-distillation](https://github.com/satan9394/dsh-content-distillation) | 1 | 2026-08-19 | 2026-08-20 | DSH skill: 把书/长视频/播客蒸馏成可调用 AI skills（RIA-TV++ 七阶段流水线、三重验证、压力测试）（受 kangarooking/cangjie-skill 8.4k★ 启发） |
| 197 | [satan9394/dsh-doc-compiled-skills](https://github.com/satan9394/dsh-doc-compiled-skills) | 1 | 2026-08-20 | 2026-08-20 | DSH skill: 文档预编译成可执行技能（提取→分类→按需揭示、预编译 vs RAG、动作/选择/护栏结构化）（受 MicrosoftDocs/Agent-Skills 启发） |
| 198 | [satan9394/dsh-html-template-library](https://github.com/satan9394/dsh-html-template-library) | 1 | 2026-08-20 | 2026-08-20 | DSH skill: HTML 模板库方法论（34 设计系统、index.json 选型匹配、克隆适配、3 张多布局预览、可复用设计 token）（受 zarazhangrui/beautiful-html-templates 4k★ 启发） |
| 199 | [satan9394/dsh-plugin-eval](https://github.com/satan9394/dsh-plugin-eval) | 1 | 2026-08-19 | 2026-08-20 | DSH skill: 插件质量评估方法论, 三层评估与改进（受 wshobson/agents 38k★ 启发） |
| 200 | [satan9394/dsh-prototype](https://github.com/satan9394/dsh-prototype) | 1 | 2026-08-19 | 2026-08-20 | DSH skill: 原型验证, 可丢弃代码回答设计问题（受 mattpocock/skills 223k★ 启发） |
| 201 | [satan9394/dsh-scientific-research](https://github.com/satan9394/dsh-scientific-research) | 1 | 2026-08-20 | 2026-08-20 | DSH skill: 科学技能包（100+ 数据库查询带来源、文献综述与证据有界假设、实验方案与预算、同行评审回复、方法验证 ICH/USP/CLSI、出版级图表）（受 K-Dense-AI/scientific-agent-skills 33.9k★ 启发） |
| 202 | [satan9394/dsh-startup-business-analyst](https://github.com/satan9394/dsh-startup-business-analyst) | 1 | 2026-08-19 | 2026-08-20 | DSH skill: 创业业务分析, 市场测算与财务模型（受 wshobson/agents 38k★ 启发） |
| 203 | [Scotlight/dsh-guardian-approval](https://github.com/Scotlight/dsh-guardian-approval) | 1 | 2026-08-18 | 2026-08-20 | Independent model-backed automatic approval plugin for DSH (Codex Guardian-style auto-review) |
| 204 | [scriptsnet/dsh-fleet](https://github.com/scriptsnet/dsh-fleet) | 1 | 2026-08-20 | 2026-08-20 | ⚡ DSH 多机算力组网：把朋友间/局域网/云上 ECS 的闲置算力汇聚成分布式 AI 算力池，一台机调用整个团队的算力。一个人掌控多台 Harness 并行开发研究。 |
| 205 | [SCT192221/dsh-multimodal](https://github.com/SCT192221/dsh-multimodal) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek harness多模态插件，接近原生体验。 |
| 206 | [SH-9999/what-was-that](https://github.com/SH-9999/what-was-that) | 1 | 2026-08-20 | 2026-08-20 | 小白+AI开发，for小白的dsh小插件，解释AI吐出的“黑话” |
| 207 | [shawnyhu/dsh-balance](https://github.com/shawnyhu/dsh-balance) | 1 | 2026-08-20 | 2026-08-20 | DeepSeek API balance in the DSH sidebar · 在 DSH 侧边栏显示 DeepSeek API 余额 |
| 208 | [shenyan-008/dsh-visual-aid](https://github.com/shenyan-008/dsh-visual-aid) | 1 | 2026-08-18 | 2026-08-20 | dsh visual aid plugin: lets text-only main models handle images via a vision model |
| 209 | [soyoungzsy/soya](https://github.com/soyoungzsy/soya) | 1 | 2026-08-19 | 2026-08-20 | 🐳 SOYA Personal Board — your private board of directors: 12 great minds from history for decisions, morning meetings & card vault. DeepSeek Harness preset + portable skills. 个人董事会：让古今智者组成你的私人智慧大脑。 |
| 210 | [startGalway/dsh-secure-remote](https://github.com/startGalway/dsh-secure-remote) | 1 | 2026-08-19 | 2026-08-20 | Secure, stable SSH remote workspaces for DeepSeek Harness |
| 211 | [sunx16963-design/dsh-web-search-thirdparty](https://github.com/sunx16963-design/dsh-web-search-thirdparty) | 1 | 2026-08-20 | 2026-08-20 | A configurable third-party web-search plugin for DSH (DeepSeek Harness)/一个用于DSH（DeepSeek Harness）的可配置第三方网络搜索插件 |
| 212 | [SuperMate-Ai/SuperMate-Harness-System](https://github.com/SuperMate-Ai/SuperMate-Harness-System) | 1 | 2026-01-22 | 2026-08-20 | Give DeepSeek Eyes · 给 DeepSeek 装眼睛 — a DeepSeek Harness (DSH) Skill: local vision models or vision APIs let DeepSeek read images and graphic files |
| 213 | [Takinggg/dsh-updater](https://github.com/Takinggg/dsh-updater) | 1 | 2026-08-19 | 2026-08-20 | One-click updates for DeepSeek Harness (DSH). Community plugin — incremental npm tarballs, backup and rollback. Not official DeepSeek software. |
| 214 | [TFboy1/dsh-minecraft-ui](https://github.com/TFboy1/dsh-minecraft-ui) | 1 | 2026-08-18 | 2026-08-20 | deepseek harness  Minecraft UI  |
| 215 | [tieveto666-code/dsh-client-ui-trace-graph](https://github.com/tieveto666-code/dsh-client-ui-trace-graph) | 1 | 2026-08-19 | 2026-08-20 | DSH Web GUI plugin: interactive ReactFlow DAG for the official trajectory ledger — sequence + structure edges, dagre/force layouts. |
| 216 | [TIZ36/evo](https://github.com/TIZ36/evo) | 1 | 2026-08-14 | 2026-08-20 | agent memory plugin based on CLP |
| 217 | [tsingshitao-nuke/dsh-set-workspace](https://github.com/tsingshitao-nuke/dsh-set-workspace) | 1 | 2026-08-16 | 2026-08-20 | DSH web plugin: a Codex-style file tree with right-click "Set as workspace" on folders. |
| 218 | [upJiang/dsh-ccswitch](https://github.com/upJiang/dsh-ccswitch) | 1 | 2026-08-19 | 2026-08-20 | dsh 直接连接 ccswith 的所有可用模型，包括密钥以及 auth 登录 |
| 219 | [Vergil-long/dsh-custom-font](https://github.com/Vergil-long/dsh-custom-font) | 1 | 2026-08-19 | 2026-08-20 | DSH自定义界面字体插件 |
| 220 | [watericetangcw/dsh-approve-for-me](https://github.com/watericetangcw/dsh-approve-for-me) | 1 | 2026-08-19 | 2026-08-20 | An Automated Escalation Reviewer Plugin for DeepSeek Harness |
| 221 | [Whatsmore-nf/dsh-context-steward](https://github.com/Whatsmore-nf/dsh-context-steward) | 1 | 2026-08-15 | 2026-08-20 | DSH 智能上下文压缩插件 —— 在有限窗口内管理认知资源，让 Agent 记住真正重要的信息。                 Smart context compression for DSH — managing cognitive resources within limited windows, so your Agent remembers what truly matters. |
| 222 | [WindyPro-rourou/dsh-code-studio](https://github.com/WindyPro-rourou/dsh-code-studio) | 1 | 2026-08-19 | 2026-08-20 | Code Studio for DSH Web GUI - VS Code + Cline hybrid: file tree, syntax-highlighted editor, Cline-style line diffs that auto-appear when the agent edits files. |
| 223 | [WintryGrass/dsh-multi-candidate](https://github.com/WintryGrass/dsh-multi-candidate) | 1 | 2026-08-20 | 2026-08-20 | Multi-candidate mode plugin for DeepSeek Harness (test-time scaling): floating whale panel config, model auto-runs parallel candidates + verifier selection. 多候选模式插件 |
| 224 | [wzxzhuxi/dsh-MT](https://github.com/wzxzhuxi/dsh-MT) | 1 | 2026-08-20 | 2026-08-20 | 基于vim哲学设计的dsh的终端会话管理器;A terminal session manager for dsh, designed with Vim philosophy. |
| 225 | [xiayuhkust/knowledge-territory](https://github.com/xiayuhkust/knowledge-territory) | 1 | 2026-08-19 | 2026-08-20 | User-facing pace-control popups for the DeepSeek Harness (dsh): install once, get the set (grasp-probe, crosslens, 记一笔, and a floating hub); switch any off in the bar. |
| 226 | [Xinlong-Wu/dsh-github-reviewer](https://github.com/Xinlong-Wu/dsh-github-reviewer) | 1 | 2026-08-18 | 2026-08-20 | A github reviewer based on the Deepseek Harness |
| 227 | [xuzhougeng/dsh-wisp-science-lab](https://github.com/xuzhougeng/dsh-wisp-science-lab) | 1 | 2026-08-19 | 2026-08-20 | DSH plugin: laboratory PI for local Wisp Science. Read-only snapshots, evidence-backed advice. / 实验室 PI：只读查看本机 Wisp Science 课题进展，按快照给意见。 |
| 228 | [yamingmou/dsh-message-editor](https://github.com/yamingmou/dsh-message-editor) | 1 | 2026-08-19 | 2026-08-20 | Recall (撤回), edit-and-resend (编辑重发) and regenerate (重新生成) for DeepSeek Harness conversation messages — Web and Desktop plugin |
| 229 | [yhfgyyf/dsh-auto-preset-router](https://github.com/yhfgyyf/dsh-auto-preset-router) | 1 | 2026-08-20 | 2026-08-20 | Routes the first DSH prompt to Standard, PTC, Minimal, or Cordis with DeepSeek V4 Flash. |
| 230 | [yhfgyyf/dsh-tui-app](https://github.com/yhfgyyf/dsh-tui-app) | 1 | 2026-08-20 | 2026-08-20 | Readline-based interactive terminal profile bundle for DeepSeek Harness. |
| 231 | [YLifeOnlyOnce/dsh-calendar](https://github.com/YLifeOnlyOnce/dsh-calendar) | 1 | 2026-08-20 | 2026-08-20 | See at a glance what DeepSeek did, and when. A beautiful usage calendar for DeepSeek Harness — every project and task's execution time, in day / 7-day / month / year views, with recurring reminders, animations, and full theme awareness. |
| 232 | [young-tim/dsh-llm-governor](https://github.com/young-tim/dsh-llm-governor) | 1 | 2026-08-19 | 2026-08-20 | Multi-model governance, routing, fallback, quota, and usage for DeepSeek Harness |
| 233 | [zexadev/dsh-tether](https://github.com/zexadev/dsh-tether) | 1 | 2026-08-19 | 2026-08-20 | Reach the DeepSeek Harness on your dev machine from your phone — across networks, through no server at all (iroh P2P) |
| 234 | [zhangnan/dsh-plugin-hotplug](https://github.com/zhangnan/dsh-plugin-hotplug) | 1 | 2026-08-20 | 2026-08-20 | Runtime plugin inventory and hot-plug manager for DeepSeek Harness |
| 235 | [zhangzhimou78-code/deepseek-visual-plugin](https://github.com/zhangzhimou78-code/deepseek-visual-plugin) | 1 | 2026-08-20 | 2026-08-20 | dsh-plugin |
| 236 | [zhy201810576/dsh-vditor](https://github.com/zhy201810576/dsh-vditor) | 1 | 2026-08-20 | 2026-08-20 | 用 Vditor 3.11.3（IR 即时渲染模式）接管 DSH Web 的聊天输入卡片，并把用户消息渲染为完整 Markdown。 |
| 237 | [zzjzgz/dsh-frieren-zzj](https://github.com/zzjzgz/dsh-frieren-zzj) | 1 | 2026-08-14 | 2026-08-20 | dsh芙莉莲插件 |
| 238 | [0imzero/dsh-workspace-menu](https://github.com/0imzero/dsh-workspace-menu) | 0 | 2026-08-19 | 2026-08-20 | DSH workspace/chat enhancement menu: pin, rename, open in file explorer, archive, fork, copy, new window. Settings integrated into General. |
| 239 | [0x5446/reins](https://github.com/0x5446/reins) | 0 | 2026-08-14 | 2026-08-20 | Native iOS client for DeepSeek Harness (dsh). Answer your agent from your phone — the relay only ever sees ciphertext. |
| 240 | [136155330/dsh-btw](https://github.com/136155330/dsh-btw) | 0 | 2026-08-19 | 2026-08-20 | /btw side-question command for DeepSeek Harness (dsh) — ask a context-aware question, never touch the main conversation |
| 241 | [386842536/dsh-launcher](https://github.com/386842536/dsh-launcher) | 0 | 2026-08-19 | 2026-08-20 | DSH 启动器 — 双击一键启动 DeepSeek Harness / Double-click macOS launcher |
| 242 | [502399493zjw-lgtm/dsh-chat-fold](https://github.com/502399493zjw-lgtm/dsh-chat-fold) | 0 | 2026-08-20 | 2026-08-20 | Per-turn execution folding for stock DeepSeek Harness Chat |
| 243 | [502399493zjw-lgtm/dsh-model-retry](https://github.com/502399493zjw-lgtm/dsh-model-retry) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin for configuring the global model-request retry budget |
| 244 | [a1113622001/dsh-auto-update](https://github.com/a1113622001/dsh-auto-update) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness (cordis) plugin: self-update for the harness launcher - checks npm for a newer @deepseek-ai/dsh, stages it, and applies it on harness exit (or update-and-restart from the web panel). |
| 245 | [a1113622001/dsh-session-stats-panel](https://github.com/a1113622001/dsh-session-stats-panel) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness client plugin: right-side session stats panel - cache hit rate, session cost (DeepSeek official peak/off-peak pricing), account balance, runtime, request count, cumulative tokens. |
| 246 | [a554878526/dsh-debug-mode](https://github.com/a554878526/dsh-debug-mode) | 0 | 2026-08-20 | 2026-08-20 | Runtime-first Debug Mode plugin for DeepSeek Harness |
| 247 | [a903067276-rgb/dsh-backup](https://github.com/a903067276-rgb/dsh-backup) | 0 | 2026-08-20 | 2026-08-20 | Automated backups of DSH sessions, config and custom directories — scheduled or manual, packed as tgz with rotation |
| 248 | [AGSQ11/dsh-ai-council](https://github.com/AGSQ11/dsh-ai-council) | 0 | 2026-08-19 | 2026-08-20 | A role-driven enterprise AI deliberation plugin for DeepSeek Harness (DSH). |
| 249 | [aipaigyx/wan-tavern](https://github.com/aipaigyx/wan-tavern) | 0 | 2026-08-20 | 2026-08-20 | 玩 · 酒馆模式 — 为 deepseek-harness (DSH) 打造的角色扮演插件，让 AI 化身「老板娘」，在虚拟酒馆中与你互动、记住你、陪你聊天。 |
| 250 | [AKS1st/dock](https://github.com/AKS1st/dock) | 0 | 2026-08-20 | 2026-08-20 | DSH Web 工作台基础插件：VSCode 风格布局外壳与 ctx.workbench 注册表服务 \| DSH Web workbench base: VSCode-style layout shell with the ctx.workbench registry service |
| 251 | [AKS1st/dock-editor](https://github.com/AKS1st/dock-editor) | 0 | 2026-08-20 | 2026-08-20 | DSH dock 文本查看/编辑器：撤销重做、Ctrl+S 保存、未保存确认 \| Text viewer/editor for the DSH dock: undo/redo, Ctrl+S save, unsaved-change confirmation |
| 252 | [AKS1st/dock-files](https://github.com/AKS1st/dock-files) | 0 | 2026-08-20 | 2026-08-20 | DSH dock 文件浏览插件：浏览会话工作目录并打开文件 \| File explorer for the DSH dock: browse the session workspace and open files |
| 253 | [AKS1st/dock-git](https://github.com/AKS1st/dock-git) | 0 | 2026-08-20 | 2026-08-20 | DSH dock Git 历史可视化：提交图、分支、标签、远端、暂存提交推送 \| Git history viewer for the DSH dock: commit graph, branches, tags, remotes, stage/commit/push |
| 254 | [AKS1st/dock-images](https://github.com/AKS1st/dock-images) | 0 | 2026-08-20 | 2026-08-20 | DSH dock 图片查看器：PNG/JPEG/GIF/WebP/BMP/SVG/ICO/AVIF \| Image viewer for the DSH dock: renders PNG, JPEG, GIF, WebP, BMP, SVG, ICO, AVIF |
| 255 | [AKS1st/dock-markdown](https://github.com/AKS1st/dock-markdown) | 0 | 2026-08-20 | 2026-08-20 | DSH dock Markdown 查看器：md/markdown/mdx 渲染，一键切换编辑 \| Markdown viewer for the DSH dock: renders md/markdown/mdx with one-click switch to editing |
| 256 | [alfonsoferrertorres-cyber/saare-suite](https://github.com/alfonsoferrertorres-cyber/saare-suite) | 0 | 2026-08-03 | 2026-08-20 | Enterprise L7 AI Governance, Ex-Ante PII Redaction (<1.16ms RAM), and Cryptographic Forensic Evidence Vault for LLM Ecosystems & DeepSeek Harness (ISO 42001 / DORA / EU AI Act). |
| 257 | [aloof-ai/dsh-aloof](https://github.com/aloof-ai/dsh-aloof) | 0 | 2026-08-20 | 2026-08-20 | 把 Aloof 接成 DeepSeek Harness（dsh）的原生工具。一张自带地址的接入令牌，粘一串就能用。 |
| 258 | [Alvinpro/DSH-Launcher](https://github.com/Alvinpro/DSH-Launcher) | 0 | 2026-08-19 | 2026-08-20 | A single-file Rust Windows OS launcher for the dsh (DeepSeek Harness) web UI — no WebView2, no runtime deps, just a few hundred KB. Double-click to start; close the browser and the whole process tree is torn down — no terminal to babysit, no leftover node processes holding the port, no console flash. |
| 259 | [Angel-GP/dsh-gitpeek](https://github.com/Angel-GP/dsh-gitpeek) | 0 | 2026-08-18 | 2026-08-20 | GitHub panel for DeepSeek Harness: Actions runs, Commits & Releases side by side, right in your DSH session |
| 260 | [anglesvideo/anglesvideo-dsh-plugin](https://github.com/anglesvideo/anglesvideo-dsh-plugin) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin for creating product launch videos from software repositories with Angles. |
| 261 | [ANITOCE/dsh-task-board](https://github.com/ANITOCE/dsh-task-board) | 0 | 2026-08-19 | 2026-08-20 | 可热插拔的 DeepSeek Harness (DSH) 任务看板插件：侧边栏入口 + 五列看板，任务以真实 DSH 会话执行并回写状态，支持 5 段 cron 定时与本地持久化。Hot-pluggable kanban task board for DeepSeek Harness — real session execution, cron scheduling, localStorage persistence. |
| 262 | [ArtificialNotImbecile/dsh-remote-runtime](https://github.com/ArtificialNotImbecile/dsh-remote-runtime) | 0 | 2026-08-20 | 2026-08-20 | Managed, isolated DeepSeek Harness runtimes over OpenSSH with a native Web control surface. |
| 263 | [Asianfleet/dsh-message-copy-enhance](https://github.com/Asianfleet/dsh-message-copy-enhance) | 0 | 2026-08-18 | 2026-08-20 | Copy dsh assistant output as Markdown, preserving links, LaTeX sources and code fences. |
| 264 | [Asong6824/dsh-llm-rate-limit](https://github.com/Asong6824/dsh-llm-rate-limit) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin for LLM API rate limiting, concurrency control, FIFO queuing, token budgets, and adaptive 429 cooldown |
| 265 | [Atman-Angle/dsh-evolve](https://github.com/Atman-Angle/dsh-evolve) | 0 | 2026-08-20 | 2026-08-20 | Evidence-driven execution experience plugin for DeepSeek Harness |
| 266 | [Baizhuojielan/dsh-doro](https://github.com/Baizhuojielan/dsh-doro) | 0 | 2026-08-19 | 2026-08-20 | Doro-themed skin plugin for the DeepSeek Harness web GUI (粉丝向非商用皮肤插件) |
| 267 | [balaleikaerina/dsh-paper](https://github.com/balaleikaerina/dsh-paper) | 0 | 2026-08-20 | 2026-08-20 | paper design mcp forward for deepseek harness (unofficial port) |
| 268 | [baobaolaodie/flow-comet](https://github.com/baobaolaodie/flow-comet) | 0 | 2026-08-02 | 2026-08-20 | An automated execution engine that turns AI coding discipline into a verifiable state machine — for the flow-kit 9-stage workflow, built for Claude Code, Codex, and DeepSeek Harness. |
| 269 | [BaronCyrus/dsh-ugui-preset](https://github.com/BaronCyrus/dsh-ugui-preset) | 0 | 2026-08-20 | 2026-08-20 | UGUI制作模式：让 AI agent 在浏览器设计/预览 uGUI，并一键构建工程内可交互、自带测试数据的 uGUI prefab（DSH agent preset） |
| 270 | [bbbz123/dsh-imagedit](https://github.com/bbbz123/dsh-imagedit) | 0 | 2026-08-20 | 2026-08-20 | Game asset postprocess pipeline for DeepSeek Harness: rembg/quick cutout, trim, padding, canvas, sprite sheet, PNG/WebP export |
| 271 | [bHorse/dsh-session-sync](https://github.com/bHorse/dsh-session-sync) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness(DSH)会话跨设备同步插件 |
| 272 | [BigAdam-h/dsh-api-meter](https://github.com/BigAdam-h/dsh-api-meter) | 0 | 2026-08-20 | 2026-08-20 | 多供应商 API 用量/余额监控插件（DeepSeek Harness） |
| 273 | [bitterSmilezzz/dsh-model-fix](https://github.com/bitterSmilezzz/dsh-model-fix) | 0 | 2026-08-19 | 2026-08-20 | DSH 模型流式缺陷修复：opencode 端点 muse-spark-1.2 不发送 finish_reason/[DONE]，llm/stream 收尾改 stop（直连可用、不触发重试） |
| 274 | [bobowsh/dsh-llm-opencode](https://github.com/bobowsh/dsh-llm-opencode) | 0 | 2026-08-20 | 2026-08-20 | OpenCode Zen free model adapter for DeepSeek Harness (DSH) — DeepSeek V4 Flash Free, Nemotron 3 Ultra Free, MiMo V2.5 Free, Big Pickle |
| 275 | [BubblePtr/dsh-holdem](https://github.com/BubblePtr/dsh-holdem) | 0 | 2026-08-20 | 2026-08-20 | Six-max No-Limit Hold'em for DeepSeek Harness: one human and five LLM agents. |
| 276 | [ChaoYuZhang001/dsh-auto-router](https://github.com/ChaoYuZhang001/dsh-auto-router) | 0 | 2026-08-20 | 2026-08-20 | Configurable Auto model routing tier for DeepSeek Harness |
| 277 | [chenghaoYang/dsh-regression](https://github.com/chenghaoYang/dsh-regression) | 0 | 2026-08-20 | 2026-08-20 | Turn coding-agent corrections into executable DeepSeek Harness regression tests. |
| 278 | [ChrisDeadman/dsh-web-search-brave](https://github.com/ChrisDeadman/dsh-web-search-brave) | 0 | 2026-08-20 | 2026-08-20 | Brave Search API-backed web search provider for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) |
| 279 | [cilis/dsh-tauri-launcher](https://github.com/cilis/dsh-tauri-launcher) | 0 | 2026-08-20 | 2026-08-20 | 一个以插件形式存在的DeepSeek Harness启动器 |
| 280 | [clarkzhao/dsh-airp](https://github.com/clarkzhao/dsh-airp) | 0 | 2026-08-18 | 2026-08-20 | an AI role play plugin for DeepSeek Harness |
| 281 | [clawk2026/dsh-precheck](https://github.com/clawk2026/dsh-precheck) | 0 | 2026-08-20 | 2026-08-20 | Security & Trust Checks for DeepSeek Harness Plugins |
| 282 | [collapsey/xiaokui-pet](https://github.com/collapsey/xiaokui-pet) | 0 | 2026-08-20 | 2026-08-20 | 小葵 XiaoKui 桌宠：一只玳瑁小猫，可出现在 Windows 桌面(PyQt5)、任意网页(Chrome/Edge 扩展)和 DeepSeek Harness 界面中，支持喂食/玩耍/睡觉/巡逻/属性养成 |
| 283 | [Couioly/plugin-audio-alert](https://github.com/Couioly/plugin-audio-alert) | 0 | 2026-08-20 | 2026-08-20 | 给DeepSeek Harness (DSH)的审批语音告警插件：当 DSH 遇到需要人工审核/审批时，用电脑 TTS 自动语音呼叫你——把"需要你审核"的内容念出来，同时照常在网页上弹出审批按钮让你点。 |
| 284 | [cqnxnzg/dsh-llm-openai-compatible](https://github.com/cqnxnzg/dsh-llm-openai-compatible) | 0 | 2026-08-19 | 2026-08-20 | MIT License  Copyright (c) 2026 cqnxnzg  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell cop |
| 285 | [CSlawyer1985/dsh-excalidraw-board](https://github.com/CSlawyer1985/dsh-excalidraw-board) | 0 | 2026-08-19 | 2026-08-20 | DSH Web GUI 画板插件：右上角一键打开全屏 Excalidraw 白板，直接嵌入官方原站，侧边栏感知不遮挡 |
| 286 | [daha1216/dsh-skill-h3-prompt-writing](https://github.com/daha1216/dsh-skill-h3-prompt-writing) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness & AI agent skill: h3-prompt-writing MiniMax H3 视频生成提示词（T2VA/I2VA/FL2VA/L2VA/Ref2VA） |
| 287 | [darkchaox/dsh-restart-control](https://github.com/darkchaox/dsh-restart-control) | 0 | 2026-08-20 | 2026-08-20 | 為 DSH Web 提供跨平台、受控的「重啟 DSH」設定頁面。不執行任意 shell 命令，也不需要 root 或 sudo 權限。 |
| 288 | [Developerprit/dsh-new-ui](https://github.com/Developerprit/dsh-new-ui) | 0 | 2026-08-20 | 2026-08-20 | He can change your DeepSeek Harness (DSH) page, but it will conflict with dsh-web-ui. |
| 289 | [dncore/dsh-inhibition](https://github.com/dncore/dsh-inhibition) | 0 | 2026-08-20 | 2026-08-20 | DSH plugin: rate-limit model calls per provider/model via FIFO queues (minIntervalMs + maxConcurrent) on the llm/stream waterfall |
| 290 | [DON738110198/dsh-session-integrity](https://github.com/DON738110198/dsh-session-integrity) | 0 | 2026-08-20 | 2026-08-20 | Diagnose poisoned DeepSeek Harness sessions and continue from provider-safe recovery boundaries |
| 291 | [DongYaoZe/texpage-bridge](https://github.com/DongYaoZe/texpage-bridge) | 0 | 2026-08-19 | 2026-08-20 | Portable local bridge for isolated Git snapshots, queued Chromium compilation, and sanitized artifact retrieval. |
| 292 | [dphmoblie/dsh-error-tell](https://github.com/dphmoblie/dsh-error-tell) | 0 | 2026-08-19 | 2026-08-20 | 一个尝试在dsh web 启动前检测其他可能导致崩溃插件并禁用的插件 |
| 293 | [dsh-plugins/dsh-loader](https://github.com/dsh-plugins/dsh-loader) | 0 | 2026-08-19 | 2026-08-20 | A version‑aware adapter registry that decouples third‑party Cordis plugins from dsh’s internal service names, paths, and RPC internals. 基于版本感知适配器注册表，为 dsh Cordis 插件提供运行时兼容层，使第三方插件与内部服务名、模块路径及 RPC 细节解耦。 |
| 294 | [DshMarketPlace/dsh-plugin-validator](https://github.com/DshMarketPlace/dsh-plugin-validator) | 0 | 2026-08-17 | 2026-08-20 | Sandboxed install validation for DeepSeek Harness plugins — installs each one into a fresh profile in a throwaway container and reports what the harness recorded |
| 295 | [elonmaskhair-prog/dsh-plugin-diepi](https://github.com/elonmaskhair-prog/dsh-plugin-diepi) | 0 | 2026-08-20 | 2026-08-20 | DSH plugin and MCP adapter for deterministic diePi quantitative backtesting. |
| 296 | [EnernityLune/dsh-luvian-ui-wallpaper](https://github.com/EnernityLune/dsh-luvian-ui-wallpaper) | 0 | 2026-08-19 | 2026-08-20 | Luvian UI wallpaper theme plugin for DeepSeek Harness web UI. Bring-your-own-assets, stable selector contracts, official theme/slots APIs. |
| 297 | [EnglandTong/governance-multi-agent-harness](https://github.com/EnglandTong/governance-multi-agent-harness) | 0 | 2026-08-20 | 2026-08-20 | Governance-Multi-Agent-Harness-Plugin-for-DeepSeek-Harness |
| 298 | [f25h-233/dsh-cli-switch](https://github.com/f25h-233/dsh-cli-switch) | 0 | 2026-08-20 | 2026-08-20 | LLM-provider plugin for DeepSeek Harness: use local AI CLIs (claude / opencode / gemini / cursor / codex) as model backends, hot-switch in the model selector. DSH 的 LLM provider 层插件：本地 AI CLI 当模型后端，一键热切换。 |
| 299 | [Feng-jsy/dsh-lightweight-plugin-enhance](https://github.com/Feng-jsy/dsh-lightweight-plugin-enhance) | 0 | 2026-08-20 | 2026-08-20 | 轻量插件增强 for DeepSeek Harness: 区分官方/第三方插件，一键启用/停用第三方插件 (Lightweight plugin enhance) |
| 300 | [ffsszzll/dsh-sidebar-tools](https://github.com/ffsszzll/dsh-sidebar-tools) | 0 | 2026-08-20 | 2026-08-20 | A dynamic Cordis plugin developed for the DeepSeek Harness Web GUI |
| 301 | [ffyuuu/dsh-llm-longcat](https://github.com/ffyuuu/dsh-llm-longcat) | 0 | 2026-08-20 | 2026-08-20 | LongCat (LongCat-2.0) provider for DeepSeek Harness — 1M context, thinking mode, tool calling |
| 302 | [foxi-ui/dsh-command-vscode](https://github.com/foxi-ui/dsh-command-vscode) | 0 | 2026-08-19 | 2026-08-20 | Deepseek Harness 插件-工作区快速打开编辑器vscode、idea等 |
| 303 | [gaochonggeng/dsh-aloof](https://github.com/gaochonggeng/dsh-aloof) | 0 | 2026-08-19 | 2026-08-20 | 把 Aloof 的办公审批接成 DeepSeek Harness（dsh）的原生工具：查待办、列模板、读表单、提单。写操作过 dsh 审批闸门，也是一份可运行的 dsh 插件样板。 |
| 304 | [gaogx96/trajectory-clean](https://github.com/gaogx96/trajectory-clean) | 0 | 2026-08-20 | 2026-08-20 | Clean trajectory view plugin for DeepSeek Harness（DeepSeek Harness 的清洁轨迹视图插件） |
| 305 | [GeekRicardo/dsh-better-tool-ui](https://github.com/GeekRicardo/dsh-better-tool-ui) | 0 | 2026-08-18 | 2026-08-20 | DeepSeek Harness web 插件：把工具调用（含 MCP）、流式工具行与 thinking 行渲染成紧凑时间线 |
| 306 | [Gelomen/glm-vision-plugin](https://github.com/Gelomen/glm-vision-plugin) | 0 | 2026-08-19 | 2026-08-20 | DSH 插件：把智谱（Zhipu）GLM 视觉模型接进 DSH，提供 analyze_image 工具。 |
| 307 | [GMH13552/dsh-longrun-suite](https://github.com/GMH13552/dsh-longrun-suite) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness long-run mission suite: mission control, Long-Run Captain preset, patched LLM-as-a-Verifier, self-wake timer |
| 308 | [Golopuer/cot-translation](https://github.com/Golopuer/cot-translation) | 0 | 2026-08-19 | 2026-08-20 | When you use DeepSeek harness,you may hate that the big fish is always thinking in English,not Chinese(or the other language).Dot't worry,Deepseek has written an Plugin to translate it,but with qwen 3.5 0.8B's help......This Plugin will translate thinking without API.It is helped by deepseek V4 pro. |
| 309 | [GooDAnDReaDY/dsh-fal-image-gen](https://github.com/GooDAnDReaDY/dsh-fal-image-gen) | 0 | 2026-08-18 | 2026-08-20 | Image generation for DeepSeek Harness: a generate_image tool backed by the FAL queue API, with the picture shown inline in the conversation |
| 310 | [GooDAnDReaDY/dsh-im-hub-media](https://github.com/GooDAnDReaDY/dsh-im-hub-media) | 0 | 2026-08-18 | 2026-08-20 | Multi-platform IM gateway for DeepSeek Harness: Telegram voice, photo, document and video with speech-to-text, plus Feishu and WeCom |
| 311 | [GooDAnDReaDY/dsh-key-rotation](https://github.com/GooDAnDReaDY/dsh-key-rotation) | 0 | 2026-08-18 | 2026-08-20 | Per-provider API key rotation for DeepSeek Harness: a key pool per provider, automatic switch to the next key on quota or rate-limit failures, with live key status in the Web UI |
| 312 | [GooDAnDReaDY/dsh-tts](https://github.com/GooDAnDReaDY/dsh-tts) | 0 | 2026-08-20 | 2026-08-20 | Text-to-speech for DeepSeek Harness: speak agent replies in the Web UI with a provider fallback chain |
| 313 | [GooDAnDReaDY/dsh-vision-bridge](https://github.com/GooDAnDReaDY/dsh-vision-bridge) | 0 | 2026-08-18 | 2026-08-20 | Vision bridge for DeepSeek Harness: images are described by the vision model you pick, so a text-only chat model never fails a turn on a picture |
| 314 | [GooDAnDReaDY/dsh-voice](https://github.com/GooDAnDReaDY/dsh-voice) | 0 | 2026-08-19 | 2026-08-20 | Voice input for DeepSeek Harness: dictation chunked by pauses and voice messages, each with its own provider fallback chain (Deepgram, Groq, HuggingFace, local whisper.cpp) |
| 315 | [guozede12593312/dsh-pomodoro](https://github.com/guozede12593312/dsh-pomodoro) | 0 | 2026-08-20 | 2026-08-20 | 番茄时钟：25/5 标准番茄工作法倒计时，纯本地计时零依赖 |
| 316 | [Guyao146/dsh-better-model-thinking-control](https://github.com/Guyao146/dsh-better-model-thinking-control) | 0 | 2026-08-20 | 2026-08-20 | DSH 插件：为 OpenAI 兼容中转站按模型管理思考强度，并自动识别公开能力 |
| 317 | [hanlinlibham/dsh-native-tui](https://github.com/hanlinlibham/dsh-native-tui) | 0 | 2026-08-19 | 2026-08-20 | Classic, dependable DeepSeek Harness TUI with session, provider, and model management. |
| 318 | [haoku123/dsh-blast-radius](https://github.com/haoku123/dsh-blast-radius) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: semantic blast radius for agent code edits — who calls what the agent just changed, and which of those callers have no test |
| 319 | [HarmlessFunny/dsh-pet-in-frame](https://github.com/HarmlessFunny/dsh-pet-in-frame) | 0 | 2026-08-16 | 2026-08-20 | DeepSeek Harness 宠物 |
| 320 | [hatter123/dsh-ai-teacher](https://github.com/hatter123/dsh-ai-teacher) | 0 | 2026-08-20 | 2026-08-20 | ai老师帮助你吃透一本pdf |
| 321 | [huaiyuWangh/dsh-session-notify](https://github.com/huaiyuWangh/dsh-session-notify) | 0 | 2026-08-20 | 2026-08-20 | DSH web plugin: session-stop alerts (notification / chime / title flash) — finished output or waiting for human input. Click to jump to the session. |
| 322 | [huajuan2024/dsh-session-manager](https://github.com/huajuan2024/dsh-session-manager) | 0 | 2026-08-20 | 2026-08-20 | DSH plugin that lists, views, deletes, and exports DeepSeek Harness session histories. |
| 323 | [HuanLinOTO/dsh-plugin-input-history](https://github.com/HuanLinOTO/dsh-plugin-input-history) | 0 | 2026-08-20 | 2026-08-20 | 在 DSH prompt 输入框按上/下方向键切换最近发送过的消息（终端式历史导航），跨会话 localStorage 持久化。 \| Terminal-style prompt history navigation for the DSH composer: ArrowUp/ArrowDown cycles through recently sent prompts, persisted across sessions. |
| 324 | [HuanLinOTO/dsh-plugin-sidebar-brand-text](https://github.com/HuanLinOTO/dsh-plugin-sidebar-brand-text) | 0 | 2026-08-20 | 2026-08-20 | 替换侧边栏左上角的品牌名与构建徽标文案（WebUI 插件配置页卡片实时配置） \| Replace the sidebar's top-left brand name and build-revision badge text via a live settings card in the Plugin Config page. |
| 325 | [Huauauaa/dsh-notify](https://github.com/Huauauaa/dsh-notify) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness HTTP 通知插件 |
| 326 | [Huauauaa/dsh-ppt-studio](https://github.com/Huauauaa/dsh-ppt-studio) | 0 | 2026-08-20 | 2026-08-20 | ppt generator |
| 327 | [Huauauaa/privacy](https://github.com/Huauauaa/privacy) | 0 | 2026-08-20 | 2026-08-20 | dsh-privacy-mask |
| 328 | [huazhiliange/dsh-share-page](https://github.com/huazhiliange/dsh-share-page) | 0 | 2026-08-20 | 2026-08-20 | Share any DeepSeek Harness (DSH) session as a self-contained, read-only static webpage — timeline, collapsible tool calls & reasoning, default redaction, dual SHA-256 fingerprints, watermark. |
| 329 | [Hubert-hwk/dsh-loop-doctor](https://github.com/Hubert-hwk/dsh-loop-doctor) | 0 | 2026-08-20 | 2026-08-20 | Self-diagnosing plugin family for DeepSeek Harness (dsh): deterministic detour detection over the SessionEvent log, replay-verified optimization suggestions, and accepted-fix sediment. |
| 330 | [initial-d/dsh-plugin-mlquant-benchmark](https://github.com/initial-d/dsh-plugin-mlquant-benchmark) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness tools for reproducing the ml-quant-trading protocol v1 benchmark. |
| 331 | [ising-tech/isingq-toolkit](https://github.com/ising-tech/isingq-toolkit) | 0 | 2026-08-19 | 2026-08-20 | 面向 MCP 与原生 AI Agent 集成的 IsingQ 工具集：本地 QUBO 建模与校验，用户确认后提交 IsingQ 求解。 |
| 332 | [JackFGreen/dsh-plugin-minimal-web](https://github.com/JackFGreen/dsh-plugin-minimal-web) | 0 | 2026-08-18 | 2026-08-20 | DeepSeek Harness（DSH）的独立最小Web插件，自定义Web体系 |
| 333 | [jasoncanada77-star/dsh-tetris](https://github.com/jasoncanada77-star/dsh-tetris) | 0 | 2026-08-20 | 2026-08-20 | 俄罗斯方块 DSH 动态插件：在 DSH 对话流中直接游玩的经典 Tetris（Canvas + Web Audio，7-bag / SRS / Hold / 幽灵方块） |
| 334 | [JavierNier/balance-show](https://github.com/JavierNier/balance-show) | 0 | 2026-08-19 | 2026-08-20 | Balance & usage card plugin built on the DeepSeek Harness for its Web GUI: DeepSeek account balance with color tiers, plus live per-conversation token usage and cost (peak/off-peak priced). |
| 335 | [JerryPhoenixCKY/dsh-plugin-wallpaper](https://github.com/JerryPhoenixCKY/dsh-plugin-wallpaper) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness Web wallpaper plugin: upload and crop a local image as the web workspace desktop background. |
| 336 | [jianzhexu/dsh-token-billing](https://github.com/jianzhexu/dsh-token-billing) | 0 | 2026-08-19 | 2026-08-20 | Token billing plugin for DeepSeek Harness — per-call cost readout under the web composer |
| 337 | [jindaxia2026/dsh-duobaxian](https://github.com/jindaxia2026/dsh-duobaxian) | 0 | 2026-08-20 | 2026-08-20 | 多巴仙 — DeepSeek Harness Web UI 主题：八仙×多巴胺亮色，8 套仙家变体+界面切换器+明暗双模式。仙气多巴胺，界面好心情。 |
| 338 | [JohnXu22786/apply-patch](https://github.com/JohnXu22786/apply-patch) | 0 | 2026-08-20 | 2026-08-20 | Apply structured unified diffs (git format) to the real filesystem inside DeepSeek Harness (dsh): multi-file parsing, fuzzy hunk location, all-or-nothing application, dry-run, and reverse-patch undo. |
| 339 | [JohnXu22786/bookkeeping](https://github.com/JohnXu22786/bookkeeping) | 0 | 2026-08-17 | 2026-08-20 | Conversational bookkeeping plugin for DeepSeek Harness (dsh bundle: record expenses/income by chat, query, report, export CSV/HTML, monthly budgets) |
| 340 | [JohnXu22786/db-connector](https://github.com/JohnXu22786/db-connector) | 0 | 2026-08-20 | 2026-08-20 | Database connector bundle for DeepSeek Harness (dsh): SQLite/PostgreSQL/MySQL connections, schema introspection, read-only safety, a write approval gate and a JSONL SQL audit trail. |
| 341 | [JohnXu22786/docindex](https://github.com/JohnXu22786/docindex) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (dsh) bundle: local semantic index over workspace documents (MD/PDF/DOCX/TXT) with FTS5 BM25 + local embedding hybrid retrieval, line-numbered citations and incremental updates. |
| 342 | [JohnXu22786/headless-json](https://github.com/JohnXu22786/headless-json) | 0 | 2026-08-20 | 2026-08-20 | Structured, machine-readable CI output for DeepSeek Harness (dsh): JSON/NDJSON session reports, JUnit XML, semantic exit codes, artifact collection and privacy redaction - a dsh profile bundle plus a standalone CLI. |
| 343 | [JohnXu22786/market-watch](https://github.com/JohnXu22786/market-watch) | 0 | 2026-08-20 | 2026-08-20 | Financial market monitor for DeepSeek Harness (dsh bundle): real-time quotes, local watchlist, threshold alerts, periodic polling, ASCII/mermaid charts for A-share stocks, indices and crypto. |
| 344 | [JohnXu22786/memory-standard](https://github.com/JohnXu22786/memory-standard) | 0 | 2026-08-20 | 2026-08-20 | Memory Standard Protocol (mm) for DeepSeek Harness: layered MEMORY.md, deterministic budgets, frozen snapshots, cross-agent markdown/URI interop; dsh bundle + standalone CLI. |
| 345 | [JohnXu22786/net-debug](https://github.com/JohnXu22786/net-debug) | 0 | 2026-08-20 | 2026-08-20 | HTTP network debugging toolset for DeepSeek Harness (dsh): general-purpose HTTP client with SSRF/private-network protection, per-session request history with replay, response inspection, HAR export, and a zero-dependency CLI. |
| 346 | [JohnXu22786/review-gate](https://github.com/JohnXu22786/review-gate) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (dsh) bundle that turns code review into a hard gate: deterministic severity rules, LLM-assisted findings, team approval quorum and a compliance audit trail. |
| 347 | [JohnXu22786/rss-digest](https://github.com/JohnXu22786/rss-digest) | 0 | 2026-08-20 | 2026-08-20 | RSS/Atom digest plugin for DeepSeek Harness (dsh bundle): subscribe, fetch on schedule, dedupe, LLM summaries, daily Markdown briefings. |
| 348 | [JohnXu22786/semantic-search](https://github.com/JohnXu22786/semantic-search) | 0 | 2026-08-20 | 2026-08-20 | Local semantic code search for DeepSeek Harness (dsh): fragment-level, symbol-aware indexing, offline lexical embeddings or OpenAI-compatible endpoints, and hybrid vector + BM25 retrieval fused with RRF - three dsh tools (sema_search / sema_reindex / sema_stats) plus a sema CLI. |
| 349 | [JohnXu22786/session-export](https://github.com/JohnXu22786/session-export) | 0 | 2026-08-20 | 2026-08-20 | Session export, redaction and compliance archiving bundle for DeepSeek Harness (dsh). |
| 350 | [jorinyang/dsh-hermit](https://github.com/jorinyang/dsh-hermit) | 0 | 2026-08-19 | 2026-08-20 | Hermit（小寄）— 常驻用户侧的多模态交互中枢，基于 DeepSeek Harness (DSH) 插件组合实现 |
| 351 | [joyboy-yy/dsh-plugin-sound-notify](https://github.com/joyboy-yy/dsh-plugin-sound-notify) | 0 | 2026-08-19 | 2026-08-20 | Sound notifications for DeepSeek Harness when tasks finish or user choices require attention, with volume controls and persistent settings. |
| 352 | [JxaMe/dsh-condense](https://github.com/JxaMe/dsh-condense) | 0 | 2026-08-19 | 2026-08-20 | Token optimizer for DeepSeek Harness — condense your context, keep the essence. 为 DSH 的 agent 上下文减负并汇报每一分节省。 |
| 353 | [Jxy-hy/dsh-updater](https://github.com/Jxy-hy/dsh-updater) | 0 | 2026-08-20 | 2026-08-20 | DSH web plugin: version check and safe update while preserving user configuration |
| 354 | [kaijia323/dsh-ymc-sidebar](https://github.com/kaijia323/dsh-ymc-sidebar) | 0 | 2026-08-19 | 2026-08-20 | DSH Web Client 的 VSCode 风格文件树侧栏插件：虚拟化懒加载文件树，支持文本 / Markdown / 图片预览。 |
| 355 | [kaixinbaba/dsh-session-activity](https://github.com/kaixinbaba/dsh-session-activity) | 0 | 2026-08-20 | 2026-08-20 | DSH sidebar session organization by activity, attention state, and Focus mode |
| 356 | [Kenerlee/dsh-moments-aieo](https://github.com/Kenerlee/dsh-moments-aieo) | 0 | 2026-08-19 | 2026-08-20 | AIEO (GEO/AEO) delivery method as a DeepSeek Harness bundle: five moments-aieo-* skills over a shared question library |
| 357 | [kerlyken/dsh-filetransfer](https://github.com/kerlyken/dsh-filetransfer) | 0 | 2026-08-20 | 2026-08-20 | Native file drafts, transcript cards, and local deliverable downloads for DeepSeek Harness Web. |
| 358 | [kiwifruit13/dsh-context-pro](https://github.com/kiwifruit13/dsh-context-pro) | 0 | 2026-08-17 | 2026-08-20 | DSH Agent 上下文浸泡器：注入五维认知图鉴 + 链协议模式（prestep 零干预）+ JSON 快照链演化提取 |
| 359 | [klpzj/dsh-peer-relay](https://github.com/klpzj/dsh-peer-relay) | 0 | 2026-08-20 | 2026-08-20 | Host-only peer session relay tools for DeepSeek Harness |
| 360 | [lanscer/dsh-workspace-drag](https://github.com/lanscer/dsh-workspace-drag) | 0 | 2026-08-20 | 2026-08-20 | DSH Web UI plugin — drag a conversation onto any workspace to organize it |
| 361 | [leanderli/dsh-files-git](https://github.com/leanderli/dsh-files-git) | 0 | 2026-08-20 | 2026-08-20 | DSH Web UI 的文件与变更面板插件：为当前会话的工作区目录提供一体化的 文件浏览 / 搜索 / 预览 / 编辑与 Git 操作（状态、暂存、提交、拉取、推送、 分支、历史、diff 等），在浏览器里以居中模态面板呈现，无需离开 WebUI 即可完成 日常文件与版本控制操作。 |
| 362 | [Lem0nTea2002/dsh-tool-cassette](https://github.com/Lem0nTea2002/dsh-tool-cassette) | 0 | 2026-08-20 | 2026-08-20 | Record normalized DeepSeek Harness tool results and replay them offline with strict matching and zero tool-body execution. |
| 363 | [lhwu1/dsh-withSsh](https://github.com/lhwu1/dsh-withSsh) | 0 | 2026-08-20 | 2026-08-20 | ai使用ssh链接服务器指令可视化，可直观查看结构日志，可以人机协同，人工输入命令或者ai输入但是ai输入具有中文解释。可以更加直观并留痕。 |
| 364 | [Liaominduyh/GitHub-dsh-plugin-market](https://github.com/Liaominduyh/GitHub-dsh-plugin-market) | 0 | 2026-08-20 | 2026-08-20 | github-dsh插件市场：DSH 插件市场（双源聚合 2830+ 插件浏览、官方一键安装、自动翻译、git 订阅管理） |
| 365 | [lijiajia96/dsh-tool-adb](https://github.com/lijiajia96/dsh-tool-adb) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (DSH) plugin exposing Android Debug Bridge (adb) operations as model-facing tools: devices, shell, install, uninstall, screenshot, push/pull, logcat |
| 366 | [limbo947/DSH-Console](https://github.com/limbo947/DSH-Console) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness local service control panel - WPF tray tool to start/stop dsh web with one click, status monitoring, auto-launch and auto-start \| DSH 本地服务控制面板 |
| 367 | [LittleBeaverStudio/agnes-media](https://github.com/LittleBeaverStudio/agnes-media) | 0 | 2026-08-20 | 2026-08-20 | Registers generate_image and generate_video tools for Agnes AI media models in DeepSeek Harness. |
| 368 | [liuhange789/data-asset-inspector](https://github.com/liuhange789/data-asset-inspector) | 0 | 2026-08-20 | 2026-08-20 | ??????? |
| 369 | [Liyuk/dsh-quota-router](https://github.com/Liyuk/dsh-quota-router) | 0 | 2026-08-20 | 2026-08-20 | Policy-only multi-source quota router for DeepSeek Harness: deterministic task profiles, ordered candidate chains, health-aware fallback, subtask model leases, and observable decisions / DSH 多源配额路由插件 |
| 370 | [logandoo/vibeweaver-dsh](https://github.com/logandoo/vibeweaver-dsh) | 0 | 2026-08-19 | 2026-08-20 | vibeweaver 的 deepseek harness 专属发行版，帮你的 dsh 交付可信任，经过验证的代码。 |
| 371 | [LongSir0419/dsh-toolkit](https://github.com/LongSir0419/dsh-toolkit) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (DSH) 插件工具包——一条命令安装两个常用插件：mcp管理 与 Skill管理。装完即用，设置页自动出现 mcp管理 与 Skill管理 两个分区。 |
| 372 | [LvDAO/dsh-exec-extension](https://github.com/LvDAO/dsh-exec-extension) | 0 | 2026-08-19 | 2026-08-20 | An exec extension for headless dsh runner allowing more flags etc. |
| 373 | [lvxinrong/dsh-archscope](https://github.com/lvxinrong/dsh-archscope) | 0 | 2026-08-18 | 2026-08-20 | Evidence-driven system architecture reconnaissance for DeepSeek Harness. |
| 374 | [lyuwen/dsh-codeact-tools](https://github.com/lyuwen/dsh-codeact-tools) | 0 | 2026-08-20 | 2026-08-20 | CodeAct Agent toolkit for DeepSeek Harness, developed with DeepSeek Harness |
| 375 | [MarchLiu/dsh-rich-editor](https://github.com/MarchLiu/dsh-rich-editor) | 0 | 2026-08-19 | 2026-08-20 | Third-party dsh web plugin: a rich Markdown notebook for the composer region — tool-row toggle plus a CodeMirror editor card with Codex-style list editing |
| 376 | [me9rez/dsh-workbuddy-experts](https://github.com/me9rez/dsh-workbuddy-experts) | 0 | 2026-08-20 | 2026-08-20 | 在 DeepSeek Harness（dsh）中复用 WorkBuddy 专家市场：Web 输入框内嵌按会话的「专家选择器」，选中专家后将其人设注入该会话的系统提示词、并把该专家捆绑的技能开放给该会话使用（按会话隔离、无需为每个专家维护预设），选择状态跨刷新/重启持久化。 |
| 377 | [MeghanBao/dsh-backstory](https://github.com/MeghanBao/dsh-backstory) | 0 | 2026-08-20 | 2026-08-20 | Ask any line of code its backstory: what it does, and why it's here — grounded in git history (dsh plugin) |
| 378 | [MFWTW/dsh_AutoLoad_workflow](https://github.com/MFWTW/dsh_AutoLoad_workflow) | 0 | 2026-08-18 | 2026-08-20 | 加载我们本地自己写的插件 |
| 379 | [minglu6/dsh-provider-qoder](https://github.com/minglu6/dsh-provider-qoder) | 0 | 2026-08-20 | 2026-08-20 | Qoder CN adapter plugin for DeepSeek Harness |
| 380 | [MisRightW/dsh-at-file](https://github.com/MisRightW/dsh-at-file) | 0 | 2026-08-19 | 2026-08-20 | dsh-at-file. |
| 381 | [MistyBridge/dsh-agent-bus](https://github.com/MistyBridge/dsh-agent-bus) | 0 | 2026-08-18 | 2026-08-20 | Multi-agent orchestration for DeepSeek Harness. Sessions in one workspace assign work, review results, and run DAG workflows — without you as the messenger. |
| 382 | [MoRanYue/dsh-openrouter-providers](https://github.com/MoRanYue/dsh-openrouter-providers) | 0 | 2026-08-20 | 2026-08-20 | DSH 插件：设置页配置 OpenRouter 提供商列表，注入 provider.only / provider.order 路由参数；状态持久化 |
| 383 | [Morriaty-The-Murderer/dsh-plugin-abtest](https://github.com/Morriaty-The-Murderer/dsh-plugin-abtest) | 0 | 2026-08-19 | 2026-08-20 | Reproducible paired A/B experiments for DeepSeek Harness plugins, with isolated runners, auditable evidence, and deterministic promotion gates. |
| 384 | [Mr-Neutr0n/dsh-medseek](https://github.com/Mr-Neutr0n/dsh-medseek) | 0 | 2026-08-19 | 2026-08-20 | Clinical tools for DeepSeek Harness: handover and discharge drafts, de-identification, completeness checks, and cited lookups. Draft-only, not a medical device. |
| 385 | [mrgaoang/dsh-remote](https://github.com/mrgaoang/dsh-remote) | 0 | 2026-08-19 | 2026-08-20 | Remote control for DeepSeek Harness (dsh web) from any phone browser — secure gateway, mobile web client, full feature coverage (incl. privileged methods). 手机远程控制 DeepSeek Harness |
| 386 | [MrTrujay/dsh-ui-easyfold](https://github.com/MrTrujay/dsh-ui-easyfold) | 0 | 2026-08-18 | 2026-08-20 | Easy-fold plugin for the dsh Web GUI: sticky Think fold row and fold scroll compensation for long expanded content |
| 387 | [muyuanjin/dsh-element-inspector](https://github.com/muyuanjin/dsh-element-inspector) | 0 | 2026-08-20 | 2026-08-20 | dsh-element-inspector：识别 DSH 页面元素的插件归属，导出所选元素，并隐藏不需要的界面元素。 |
| 388 | [muyuanjin/dsh-ptc-plus](https://github.com/muyuanjin/dsh-ptc-plus) | 0 | 2026-08-20 | 2026-08-20 | A session-bound agent-native REPL for DeepSeek Harness PTC mode. |
| 389 | [nabin-qq273274877/dsh-multi-user](https://github.com/nabin-qq273274877/dsh-multi-user) | 0 | 2026-08-19 | 2026-08-20 | Single-process multi-user workspace view partitioning for DeepSeek Harness |
| 390 | [Nalleyer/dsh_session_cost](https://github.com/Nalleyer/dsh_session_cost) | 0 | 2026-08-20 | 2026-08-20 | show cost for your current dsh session |
| 391 | [Neumannzc/dsh-native-session-split](https://github.com/Neumannzc/dsh-native-session-split) | 0 | 2026-08-20 | 2026-08-20 | VS Code style native session split patch for DeepSeek Harness |
| 392 | [niaccky/dsh-install-guard](https://github.com/niaccky/dsh-install-guard) | 0 | 2026-08-19 | 2026-08-20 | npm 安装门禁插件:在 DeepSeek Harness 执行 npm install 前审计漏洞、许可证、体积与包健康度,自动放行/询问/拦截。 |
| 393 | [nickhelion/dsh-qwen-token-plan-cn-responses](https://github.com/nickhelion/dsh-qwen-token-plan-cn-responses) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness adapter for Qwen Token Plan CN Responses API with live official model and built-in tool catalog sync |
| 394 | [nienieai/dsh-chime-alerts](https://github.com/nienieai/dsh-chime-alerts) | 0 | 2026-08-20 | 2026-08-20 | DSH 声音提醒插件:九类 Agent 事件(完成/子任务/后台任务/审批/提问/评审/受阻/打断/失败)独立铃声、音量与开关,浏览器合成音 + Windows 系统蜂鸣,工作区快捷静音 |
| 395 | [NIU-001-LIU/dsh-win-minimal](https://github.com/NIU-001-LIU/dsh-win-minimal) | 0 | 2026-08-20 | 2026-08-20 | Windows minimal agent preset for DeepSeek Harness: one-line fixed persona, three tools, no runtime context. Installs via dsh plugin add. |
| 396 | [NOirBRight/dsh-codex-sidebar](https://github.com/NOirBRight/dsh-codex-sidebar) | 0 | 2026-08-19 | 2026-08-20 | Codex-app-style sidebar for a DeepSeek Harness 主会话 |
| 397 | [NOirBRight/dsh-llm-assistant](https://github.com/NOirBRight/dsh-llm-assistant) | 0 | 2026-08-19 | 2026-08-20 | Resident DeepSeek assistant seat for DeepSeek Harness: chat, reminders, duty heartbeat, and on-demand task reference. |
| 398 | [Norman-else/dsh-claude](https://github.com/Norman-else/dsh-claude) | 0 | 2026-08-15 | 2026-08-20 | Run Claude Code as a first-class DSH conversation while preserving its native agent loop, tools, skills, hooks, and MCP integrations in DSH. |
| 399 | [Octo-o-o-o/dsh-plugin-deploy](https://github.com/Octo-o-o-o/dsh-plugin-deploy) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 插件：一句话把项目部署到 Cloudflare，一句话把插件发布到 npm。零账号也能拿到线上地址；凭据模型看不到。 |
| 400 | [oli-bot/dsh-desktop](https://github.com/oli-bot/dsh-desktop) | 0 | 2026-08-18 | 2026-08-20 | DeepWork — community desktop shell for DeepSeek Harness: Electron + sidecar DSH engine + stock DSH web UI, sharing $DSH_HOME (unofficial, MIT) |
| 401 | [Pagemalthusian934/deepseek-desktop](https://github.com/Pagemalthusian934/deepseek-desktop) | 0 | 2026-08-20 | 2026-08-20 | Unify DeepSeek Chat and Harness in one native desktop app for macOS and Windows. |
| 402 | [passingby000/dsh-nl-model-switch](https://github.com/passingby000/dsh-nl-model-switch) | 0 | 2026-08-19 | 2026-08-20 | Switch the current DSH session's model with a natural-language sentence (independent of any IM bridge). |
| 403 | [penguin-oo/dsh-delegate-router](https://github.com/penguin-oo/dsh-delegate-router) | 0 | 2026-08-16 | 2026-08-20 | Automatic Flash/Pro routing for DeepSeek Harness subagent calls: light tasks go cheap, heavy tasks stay strong — with /delegate overrides. |
| 404 | [PerryLink/dsh-kit](https://github.com/PerryLink/dsh-kit) | 0 | 2026-08-16 | 2026-08-20 | One-command starter pack: install all 15 PerryLink DeepSeek Harness plugins |
| 405 | [pzchenhui/teacher-workbench](https://github.com/pzchenhui/teacher-workbench) | 0 | 2026-08-20 | 2026-08-20 | 中小学教师的一体化教学与班主任工作台 |
| 406 | [QiE2035/dsh-llm-headers](https://github.com/QiE2035/dsh-llm-headers) | 0 | 2026-08-16 | 2026-08-20 | 为 DeepSeek Harness 的自定义 LLM API 请求注入 HTTP Headers（典型用途：改写 user-agent，例如网关要求 UA 带指定品牌字样）。 |
| 407 | [quei4r/dsh-client-paste-image](https://github.com/quei4r/dsh-client-paste-image) | 0 | 2026-08-19 | 2026-08-20 | DSH web client plugin: pasted images become file paths on text-only model routes (via dsh-drop-caret's upload route); vision models keep the native pipeline |
| 408 | [rand0wn/dsh-wrapped](https://github.com/rand0wn/dsh-wrapped) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (dsh) plugin: /wrapped generates a shareable SVG summary card for the current session |
| 409 | [ravenli059/dsh-android-agent](https://github.com/ravenli059/dsh-android-agent) | 0 | 2026-08-20 | 2026-08-20 | 支持从dshweb连接到android手机，进行各种操作 |
| 410 | [Re-s/dsh-memory-s3](https://github.com/Re-s/dsh-memory-s3) | 0 | 2026-08-17 | 2026-08-20 | S3-backed cross-session memory for DeepSeek Harness. Semantic recall, vector search, structured entries with attachments. |
| 411 | [RHY006/agency-agents-zh-dsh-plugin](https://github.com/RHY006/agency-agents-zh-dsh-plugin) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness (dsh) plugin: agency-agents-zh Chinese AI expert library (268 roles / 20 departments) as native skills |
| 412 | [royenheart/dsh-plugin-skills-manager](https://github.com/royenheart/dsh-plugin-skills-manager) | 0 | 2026-08-20 | 2026-08-20 | deepseek harness plugin skill manager. Use to enable/disable your skills with global/workspace/session range |
| 413 | [RyensX/dsh-message-fold](https://github.com/RyensX/dsh-message-fold) | 0 | 2026-08-19 | 2026-08-20 | 为 DeepSeek Harness 提供 Codex 风格的会话消息折叠。/ Provides Codex-style session message folding for DeepSeek Harness. |
| 414 | [sagetta1/dsh-verdict-guard](https://github.com/sagetta1/dsh-verdict-guard) | 0 | 2026-08-19 | 2026-08-20 | Native DeepSeek Harness plugin: a turn that states a verdict without evidence is held back and steered for proof. |
| 415 | [satan9394/dsh-a11y-audit](https://github.com/satan9394/dsh-a11y-audit) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: WCAG 2.2 无障碍审计，POUR 原则/合规等级/自动化+人工验证/修复建议（受 wshobson/agents 38k★ 启发） |
| 416 | [satan9394/dsh-academic-research](https://github.com/satan9394/dsh-academic-research) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 学术研究流水线，研究问题→文献→核验→综合→写作→评审（受 Imbad0202/academic-research-skills 43k★ 启发） |
| 417 | [satan9394/dsh-adhd-friendly](https://github.com/satan9394/dsh-adhd-friendly) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: ADHD 友好输出（行动先行/步骤编号/抑制离题/重申状态/具体时间估计/列表≤5 项/无客套）（受 ayghri/i-have-adhd 22.3k★ 启发） |
| 418 | [satan9394/dsh-agent-loop-engineering](https://github.com/satan9394/dsh-agent-loop-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Agent 循环工程（L1/L2 循环分级、triage/PR 保姆/依赖清扫/changelog 循环模式、多循环协调、验证器与人工门、loop-audit）（受 cobusgreyling/loop-engineering 10k★ 启发） |
| 419 | [satan9394/dsh-agent-reach](https://github.com/satan9394/dsh-agent-reach) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 给 AI Agent 一键装互联网能力（15+ 平台、零配置优先、多后端路由自动切换、doctor 诊断、Cookie 仅本地）（受 Panniantong/Agent-Reach 73k★ 启发） |
| 420 | [satan9394/dsh-agent-teams](https://github.com/satan9394/dsh-agent-teams) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 多 agent 团队协作，角色/任务协调/并行工作流/沟通协议（受 wshobson/agents 38k★ 启发） |
| 421 | [satan9394/dsh-ai-image-design](https://github.com/satan9394/dsh-ai-image-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: AI 图像生成工作流, 提示词与批量派生（受 wshobson/agents 38k★ 启发） |
| 422 | [satan9394/dsh-algorithmic-art](https://github.com/satan9394/dsh-algorithmic-art) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 算法艺术生成, 哲学与 p5.js 表达（受 Anthropic skills Apache-2.0 启发） |
| 423 | [satan9394/dsh-api-design](https://github.com/satan9394/dsh-api-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: API/接口设计，Hyrum Law/REST/GraphQL/模块边界/变更评估（受 addyosmani/agent-skills 88k★ 启发） |
| 424 | [satan9394/dsh-api-documentation](https://github.com/satan9394/dsh-api-documentation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: API 文档与开发者体验, OpenAPI 与门户（受 wshobson/agents 38k★ 启发） |
| 425 | [satan9394/dsh-api-scaffolding](https://github.com/satan9394/dsh-api-scaffolding) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: FastAPI 脚手架, 异步与分层结构（受 wshobson/agents 38k★ 启发） |
| 426 | [satan9394/dsh-architecture](https://github.com/satan9394/dsh-architecture) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 架构模式，Clean/Hexagonal/DDD 战术模式/依赖规则/测试边界（受 wshobson/agents 38k★ 启发） |
| 427 | [satan9394/dsh-auth](https://github.com/satan9394/dsh-auth) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 认证与授权实现，JWT/OAuth2/会话/RBAC/安全清单（受 wshobson/agents 38k★ 启发） |
| 428 | [satan9394/dsh-autonomous-research](https://github.com/satan9394/dsh-autonomous-research) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 自主研究 agent（改代码→固定 5 分钟训练→val_bpb 判优劣→保留/丢弃循环、单文件修改、program.md 超轻量 skill、一晚约 100 实验）（受 karpathy/autoresearch 94k★ 启发） |
| 429 | [satan9394/dsh-bash-scripting](https://github.com/satan9394/dsh-bash-scripting) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Bash 脚本防御模式，set -euo pipefail/参数校验/错误处理/安全（受 wshobson/agents 启发） |
| 430 | [satan9394/dsh-bash-testing](https://github.com/satan9394/dsh-bash-testing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Shell 脚本测试, BATS 单元测试（受 wshobson/agents 38k★ 启发） |
| 431 | [satan9394/dsh-bazel-build-optimization](https://github.com/satan9394/dsh-bazel-build-optimization) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Bazel 构建优化, 远程缓存与构建提速（受 wshobson/agents 38k★ 启发） |
| 432 | [satan9394/dsh-before-you-build](https://github.com/satan9394/dsh-before-you-build) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 建前风险预审, 七维检查与最小验证（受 wshobson/agents 38k★ 启发） |
| 433 | [satan9394/dsh-better-interface](https://github.com/satan9394/dsh-better-interface) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 界面质量技能系列（六维度 UI/排版/颜色/可访问性/布局/写作、variant 多版本实测、explain-interface 逆向解释、interface-review 全维度评审）（受 jakubkrehel/skills 3.9k★ 启发） |
| 434 | [satan9394/dsh-blockchain-web3](https://github.com/satan9394/dsh-blockchain-web3) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Web3 与智能合约安全, Solidity 与 CEI 模式（受 wshobson/agents 38k★ 启发） |
| 435 | [satan9394/dsh-brand-design](https://github.com/satan9394/dsh-brand-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 品牌设计系统（品牌资产协议 5 步、设计方向顾问三套逻辑并行、Junior Designer 工作流、反 AI slop、5 维度评审）（受 alchaincyf/huashu-design 23k★ 启发） |
| 436 | [satan9394/dsh-brand-guidelines](https://github.com/satan9394/dsh-brand-guidelines) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 品牌风格应用, 色板与字体纪律（受 Anthropic skills Apache-2.0 启发） |
| 437 | [satan9394/dsh-brand-landingpage](https://github.com/satan9394/dsh-brand-landingpage) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 品牌落地页设计, 访谈到可部署HTML（受 wshobson/agents 38k★ 启发） |
| 438 | [satan9394/dsh-browser-testing](https://github.com/satan9394/dsh-browser-testing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 浏览器测试与 UI 验证，真实浏览器验证 DOM/控制台/网络/性能（受 addyosmani/agent-skills 88k★ 启发） |
| 439 | [satan9394/dsh-cad-modeling](https://github.com/satan9394/dsh-cad-modeling) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 参数化 CAD 建模（STEP 优先 build123d、自然语言转 CAD、装配 joints/mating、几何验证、STL/3MF/GLB 导出）（受 earthtojake/text-to-cad 13k★ 启发） |
| 440 | [satan9394/dsh-canvas-design](https://github.com/satan9394/dsh-canvas-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 视觉设计, 设计哲学到海报作品（受 Anthropic skills Apache-2.0 启发） |
| 441 | [satan9394/dsh-career-ops](https://github.com/satan9394/dsh-career-ops) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 求职指挥中心，JD 评估 A-F 评分/简历优化/面试准备（受 career-ops 65k★ 启发） |
| 442 | [satan9394/dsh-caveman-speak](https://github.com/satan9394/dsh-caveman-speak) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 输出 token 压缩（穴居人语回复省 65% 输出 token、代码/命令/错误字节精确、token 下沉点四类审计、渐进披露回忆）（受 JuliusBrussee/caveman 86k★ 启发） |
| 443 | [satan9394/dsh-changelog](https://github.com/satan9394/dsh-changelog) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 变更日志自动化，Keep a Changelog + Conventional Commits + 语义化版本（受 wshobson/agents 启发） |
| 444 | [satan9394/dsh-channel-assistant](https://github.com/satan9394/dsh-channel-assistant) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 渠道化个人助手（Gateway 控制平面、8+ 消息频道即界面、Control UI/CLI/TUI、配对安全、工具沙箱、ClawHub 插件）（受 openclaw/openclaw 247k★ 启发） |
| 445 | [satan9394/dsh-cicd](https://github.com/satan9394/dsh-cicd) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: CI/CD 自动化，质量门禁/shift-left/部署策略/调试 CI 失败（受 addyosmani/agent-skills 启发） |
| 446 | [satan9394/dsh-cli-anything](https://github.com/satan9394/dsh-cli-anything) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 让任何软件 agent 化（7 阶段 CLI 封装流水线、真实后端集成、JSON 输出、REPL 双模式、refine 增量补全、输出验证）（受 HKUDS/CLI-Anything 48k★ 启发） |
| 447 | [satan9394/dsh-cloud-cost-optimization](https://github.com/satan9394/dsh-cloud-cost-optimization) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 云成本优化, 定价模型与 FinOps（受 wshobson/agents 38k★ 启发） |
| 448 | [satan9394/dsh-cloud-well-architected](https://github.com/satan9394/dsh-cloud-well-architected) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 云 Well-Architected 六支柱评审（可靠性/成本/运维/性能/安全/可持续、SLO+错误预算、golden signals、优雅降级、恢复测试、无指责复盘）（受 google/skills 18.5k★ 启发） |
| 449 | [satan9394/dsh-code-review](https://github.com/satan9394/dsh-code-review) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 五轴代码评审，正确性/可读性/架构/安全/性能 + 质量门槛（受 addyosmani/agent-skills 启发） |
| 450 | [satan9394/dsh-code-simplify](https://github.com/satan9394/dsh-code-simplify) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 代码简化，删冗余/降复杂度/去不必要抽象（受 addyosmani/agent-skills 启发） |
| 451 | [satan9394/dsh-codebase-scanner](https://github.com/satan9394/dsh-codebase-scanner) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 代码库扫描, 项目文档与漂移检测（受 wshobson/agents ship-mate 启发） |
| 452 | [satan9394/dsh-colleague-creation](https://github.com/satan9394/dsh-colleague-creation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 把真人蒸馏成 AI 技能（Work Skill + 五层人格、源材料采集、人格/文化/职级标签、增量演进与版本回滚）（受 titanwings/colleague-skill 23.5k★ 启发） |
| 453 | [satan9394/dsh-commit-message](https://github.com/satan9394/dsh-commit-message) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Git 提交信息规范化, Conventional Commits（基于社区规范原创） |
| 454 | [satan9394/dsh-content-marketing](https://github.com/satan9394/dsh-content-marketing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 内容营销, SEO 与多渠道分发（受 wshobson/agents 38k★ 启发） |
| 455 | [satan9394/dsh-context-engineering](https://github.com/satan9394/dsh-context-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 上下文工程，按五层层级主动策划 agent 看到的信息（受 addyosmani/agent-skills 88k★ 启发） |
| 456 | [satan9394/dsh-css-art-styles](https://github.com/satan9394/dsh-css-art-styles) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: CSS 艺术风格配方, 液态玻璃等美学（受 xuanxuan-prompts 启发） |
| 457 | [satan9394/dsh-data-engineering](https://github.com/satan9394/dsh-data-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 数据工程, Airflow/dbt/Spark（受 wshobson/agents 38k★ 启发） |
| 458 | [satan9394/dsh-data-quality](https://github.com/satan9394/dsh-data-quality) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 数据质量框架，校验规则/数据契约/质量监控/CI 自动化（受 wshobson/agents 38k★ 启发） |
| 459 | [satan9394/dsh-data-storytelling](https://github.com/satan9394/dsh-data-storytelling) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 数据叙事，SCQA 结构/图表选型/标题即结论/可信度（受 wshobson/agents 38k★ 启发） |
| 460 | [satan9394/dsh-database-design](https://github.com/satan9394/dsh-database-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 数据库表设计，主键/规范化/索引/数据类型/约束/性能模式，PostgreSQL 重点（受 wshobson/agents 38k★ 启发） |
| 461 | [satan9394/dsh-dataset-curation](https://github.com/satan9394/dsh-dataset-curation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 数据集整理，清洗/质量筛选/多样性/拆分/标注（受 wshobson/agents 启发） |
| 462 | [satan9394/dsh-db-migration](https://github.com/satan9394/dsh-db-migration) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 数据库迁移，up/down/expand-contract/不宕机变更/一致性校验（受 wshobson/agents 启发） |
| 463 | [satan9394/dsh-debug-recovery](https://github.com/satan9394/dsh-debug-recovery) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 调试与错误恢复，证据优先/错误分类/恢复策略/防回归（受 addyosmani/agent-skills 启发） |
| 464 | [satan9394/dsh-deployment-validation](https://github.com/satan9394/dsh-deployment-validation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 部署验证与配置管理, schema 与密钥扫描（受 wshobson/agents 38k★ 启发） |
| 465 | [satan9394/dsh-deprecation](https://github.com/satan9394/dsh-deprecation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 弃用与迁移，代码是负债/安全移除/迁移生命周期（受 addyosmani/agent-skills 88k★ 启发） |
| 466 | [satan9394/dsh-designmd](https://github.com/satan9394/dsh-designmd) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: DESIGN.md 设计系统格式（YAML tokens + Markdown rationale、token 引用、lint/diff/export 工具链、WCAG AA 对比度）（受 google-labs-code/design.md 27k★ 启发） |
| 467 | [satan9394/dsh-desktop-agent-gui](https://github.com/satan9394/dsh-desktop-agent-gui) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: Agent 桌面编排（零配置向导、@agent 路由聊天、多频道多账号、cron 投递、本地技能管理、钥匙串凭证）（受 ValueCell-ai/ClawX 7.6k★ 启发） |
| 468 | [satan9394/dsh-diagram-design](https://github.com/satan9394/dsh-diagram-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 编辑级图表设计, 38 种类型自包含SVG（受 diagram-design 23k★ MIT 启发） |
| 469 | [satan9394/dsh-discernment-nudge](https://github.com/satan9394/dsh-discernment-nudge) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 判断力轻推, 核查与质疑推理（受 Anthropic skills Apache-2.0 启发） |
| 470 | [satan9394/dsh-distributed-debugging](https://github.com/satan9394/dsh-distributed-debugging) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 分布式排障, 应急响应与根因分析（受 wshobson/agents 38k★ 启发） |
| 471 | [satan9394/dsh-doc-coauthoring](https://github.com/satan9394/dsh-doc-coauthoring) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 文档协作撰写, 三阶段与读者测试（受 Anthropic skills Apache-2.0 启发） |
| 472 | [satan9394/dsh-docs-adr](https://github.com/satan9394/dsh-docs-adr) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 文档与架构决策记录，ADR 格式/文档策略/何时不写（受 addyosmani/agent-skills 88k★ 启发） |
| 473 | [satan9394/dsh-document-generation](https://github.com/satan9394/dsh-document-generation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Office 文档生成, Word/Excel 制作（受 Anthropic skills Apache-2.0 启发） |
| 474 | [satan9394/dsh-domain-modeling](https://github.com/satan9394/dsh-domain-modeling) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 领域建模，维护术语表 CONTEXT.md 与 ADR 决策记录（受 mattpocock/skills 223k★ 启发） |
| 475 | [satan9394/dsh-dotnet-backend](https://github.com/satan9394/dsh-dotnet-backend) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: .NET 后端模式, Clean Architecture 与 EF Core（受 wshobson/agents 38k★ 启发） |
| 476 | [satan9394/dsh-doubt-driven-dev](https://github.com/satan9394/dsh-doubt-driven-dev) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 怀疑驱动开发，非平凡决策落地前接受新鲜上下文对抗性审查（受 addyosmani/agent-skills 启发） |
| 477 | [satan9394/dsh-e2e-testing](https://github.com/satan9394/dsh-e2e-testing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 端到端测试, Playwright/Cypress（受 wshobson/agents 38k★ 启发） |
| 478 | [satan9394/dsh-error-handling](https://github.com/satan9394/dsh-error-handling) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 错误处理模式，分层/类型化/优雅降级/可观测/恢复（受 wshobson/agents 启发） |
| 479 | [satan9394/dsh-event-driven-architecture](https://github.com/satan9394/dsh-event-driven-architecture) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 事件驱动架构, CQRS/事件溯源/Saga（受 wshobson/agents 38k★ 启发） |
| 480 | [satan9394/dsh-file-conversion](https://github.com/satan9394/dsh-file-conversion) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 文件格式转换, 本地工具与在线服务（受 wshobson/agents 38k★ 启发） |
| 481 | [satan9394/dsh-framework-migration](https://github.com/satan9394/dsh-framework-migration) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 框架迁移, Angular/React 与依赖升级（受 wshobson/agents 38k★ 启发） |
| 482 | [satan9394/dsh-frontend-engineering](https://github.com/satan9394/dsh-frontend-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 前端 UI 工程，组件/状态管理/数据获取/性能与可维护性（受 addyosmani/agent-skills 启发） |
| 483 | [satan9394/dsh-frontend-mobile](https://github.com/satan9394/dsh-frontend-mobile) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 前端与移动开发, RN 与 Next.js（受 wshobson/agents 38k★ 启发） |
| 484 | [satan9394/dsh-frontend-slides](https://github.com/satan9394/dsh-frontend-slides) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 零依赖 HTML 演示文稿（show-don't-tell 视觉风格发现、PPT 转网页、anti-AI-slop 风格、34 bold 模板渐进加载）（受 zarazhangrui/frontend-slides 27k★ 启发） |
| 485 | [satan9394/dsh-full-stack-orchestration](https://github.com/satan9394/dsh-full-stack-orchestration) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 全栈功能编排, 状态机与检查点（受 wshobson/agents 38k★ 启发） |
| 486 | [satan9394/dsh-functional-programming](https://github.com/satan9394/dsh-functional-programming) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 函数式编程, Elixir/OTP 与 Haskell 类型（受 wshobson/agents 38k★ 启发） |
| 487 | [satan9394/dsh-game-development](https://github.com/satan9394/dsh-game-development) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 游戏开发模式, Godot 与 Unity ECS（受 wshobson/agents 38k★ 启发） |
| 488 | [satan9394/dsh-geo-seo](https://github.com/satan9394/dsh-geo-seo) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: GEO-first AI 搜索优化（ChatGPT/Claude/Perplexity/Gemini/AI Overviews、citability 评分、AI crawler、llms.txt、品牌提及、Schema E-E-A-T、5 并行子代理审计）（受 zubair-trabzada/geo-seo-claude 9.4k★ 启发） |
| 489 | [satan9394/dsh-gif-creator](https://github.com/satan9394/dsh-gif-creator) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: GIF 创建, 搜索与自定义动画（受 Anthropic skills Apache-2.0 启发） |
| 490 | [satan9394/dsh-git-guardrails](https://github.com/satan9394/dsh-git-guardrails) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Git 安全护栏, 拦截危险命令（受 mattpocock/skills 223k★ 启发） |
| 491 | [satan9394/dsh-git-workflow](https://github.com/satan9394/dsh-git-workflow) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: git 工作流与版本管理，主干开发/提交纪律/语义化版本/发布流程（受 addyosmani/agent-skills 88k★ 启发） |
| 492 | [satan9394/dsh-gitops](https://github.com/satan9394/dsh-gitops) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: GitOps 工作流，声明式基础设施/Git 即真源/持续协调/渐进式交付（受 wshobson/agents 38k★ 启发） |
| 493 | [satan9394/dsh-hallmark-design](https://github.com/satan9394/dsh-hallmark-design) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 拒绝 AI 味的 UI 设计（21 主题、57 slop 测试门+自我批评、audit/redesign/study 三动词、Custom 模式）（受 Nutlope/hallmark 25.8k★ 启发） |
| 494 | [satan9394/dsh-handoff](https://github.com/satan9394/dsh-handoff) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 会话交接文档，压缩当前会话供新会话/agent 接手（受 mattpocock/skills 223k★ 启发） |
| 495 | [satan9394/dsh-harness-os](https://github.com/satan9394/dsh-harness-os) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: Agent harness 配置系统（四层分工 rules/skills/agents/hooks、instincts 持续学习、AgentShield 安全审计、Unified Memory Vault、GateGuard）（受 affaan-m/ECC 185k★ 启发） |
| 496 | [satan9394/dsh-hr-legal-compliance](https://github.com/satan9394/dsh-hr-legal-compliance) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: HR 与法律合规, 雇佣文档与 GDPR（受 wshobson/agents 38k★ 启发） |
| 497 | [satan9394/dsh-html-ppt](https://github.com/satan9394/dsh-html-ppt) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: HTML PPT Studio（36 主题/31 布局/47 动画/15 全套模板、演讲者模式磁吸卡+逐字稿+计时器、token 驱动换肤、零构建）（受 lewislulu/html-ppt-skill 8k★ 启发） |
| 498 | [satan9394/dsh-humanizer-zh](https://github.com/satan9394/dsh-humanizer-zh) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 中文去 AI 痕迹，改写 AI 腔让文字更像人写的（受 Humanizer-zh 15.6k★ 启发） |
| 499 | [satan9394/dsh-hybrid-cloud](https://github.com/satan9394/dsh-hybrid-cloud) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 混合云网络, VPN 与专线互联（受 wshobson/agents 38k★ 启发） |
| 500 | [satan9394/dsh-idea-refine](https://github.com/satan9394/dsh-idea-refine) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 想法打磨，发散-收敛思考把模糊想法变成可执行概念（受 addyosmani/agent-skills 88k★ 启发） |
| 501 | [satan9394/dsh-incremental](https://github.com/satan9394/dsh-incremental) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 增量实现，小步可验证保持可运行避免大爆炸改动（受 addyosmani/agent-skills 启发） |
| 502 | [satan9394/dsh-internal-comms](https://github.com/satan9394/dsh-internal-comms) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 内部沟通写作, 3P 更新与通讯（受 Anthropic skills Apache-2.0 启发） |
| 503 | [satan9394/dsh-investment-research](https://github.com/satan9394/dsh-investment-research) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 个人投研方法论（五维分析、多空辩论、反思审计、每日复盘，不荐股不预测）（受 simonlin1212/Vibe-Research 2.1k★ 启发） |
| 504 | [satan9394/dsh-issue-triage](https://github.com/satan9394/dsh-issue-triage) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Issue/PR 分流, 状态机与简报（受 mattpocock/skills 223k★ 启发） |
| 505 | [satan9394/dsh-javascript-typescript](https://github.com/satan9394/dsh-javascript-typescript) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: JS/TS 开发模式, 现代语法与高级类型（受 wshobson/agents 38k★ 启发） |
| 506 | [satan9394/dsh-karpathy-methodology](https://github.com/satan9394/dsh-karpathy-methodology) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Karpathy 编码方法论，先想后写/简单优先/外科手术式改动/目标驱动验证 |
| 507 | [satan9394/dsh-knowledge-brain](https://github.com/satan9394/dsh-knowledge-brain) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 知识大脑层（合成答案带引用、自连线知识图谱零 LLM 调用、差距分析、24/7 梦境周期、公司大脑登录隔离）（受 garrytan/gbrain 29k★ 启发） |
| 508 | [satan9394/dsh-kpi-dashboard-design](https://github.com/satan9394/dsh-kpi-dashboard-design) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: KPI 仪表盘设计, 指标选型与治理（受 wshobson/agents 38k★ 启发） |
| 509 | [satan9394/dsh-kubernetes-operations](https://github.com/satan9394/dsh-kubernetes-operations) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Kubernetes 运维, Helm 与安全策略（受 wshobson/agents 38k★ 启发） |
| 510 | [satan9394/dsh-last30days](https://github.com/satan9394/dsh-last30days) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 跨平台近 30 天研究（16+ 平台并行、按真实参与度评分、AI 裁判综合简报、发现爆发前主题、招人信号）（受 mvanhorn/last30days-skill 26k★ 启发） |
| 511 | [satan9394/dsh-live-docs](https://github.com/satan9394/dsh-live-docs) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 最新文档注入防幻觉（版本化文档直取、CLI+MCP 双模式、library ID 直取、版本指定、rule 自动触发）（受 upstash/context7 61k★ 启发） |
| 512 | [satan9394/dsh-llm-api-integration](https://github.com/satan9394/dsh-llm-api-integration) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: LLM API 集成模式, 流式与工具调用（受 Anthropic skills Apache-2.0 启发） |
| 513 | [satan9394/dsh-llm-eval](https://github.com/satan9394/dsh-llm-eval) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: LLM 评估，忠实度/相关性/测试集/幻觉检测/回归守护（受 wshobson/agents 启发） |
| 514 | [satan9394/dsh-llm-finetuning](https://github.com/satan9394/dsh-llm-finetuning) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: LLM 微调路由与配方, SFT/DPO/GRPO 选型（受 wshobson/agents 38k★ 启发） |
| 515 | [satan9394/dsh-marketing-growth](https://github.com/satan9394/dsh-marketing-growth) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 营销增长技能树（product-marketing 根基、七大技能簇 CRO/文案/SEO/广告/留存/GTM/策略、技能互引用、营销 loops）（受 coreyhaines31/marketingskills 44.9k★ 启发） |
| 516 | [satan9394/dsh-mcp-builder](https://github.com/satan9394/dsh-mcp-builder) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: MCP 服务器构建, 工具设计与四阶段流程（受 Anthropic skills Apache-2.0 启发） |
| 517 | [satan9394/dsh-merge-conflicts](https://github.com/satan9394/dsh-merge-conflicts) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 解决 git 合并/变基冲突五步流程（受 mattpocock/skills 启发） |
| 518 | [satan9394/dsh-microservices](https://github.com/satan9394/dsh-microservices) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 微服务架构模式，服务边界/通信/分布式数据/韧性/事件驱动（受 wshobson/agents 38k★ 启发） |
| 519 | [satan9394/dsh-mlops](https://github.com/satan9394/dsh-mlops) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: ML 管线工作流，数据→训练→评估→部署→监控 MLOps（受 wshobson/agents 启发） |
| 520 | [satan9394/dsh-model-gateway](https://github.com/satan9394/dsh-model-gateway) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 模型路由网关（290+ 提供商一端点、配额感知自动回退、19 路由策略、RTK+Caveman 压缩省 15-95%、免费层诚实预算）（受 diegosouzapw/OmniRoute 51k★ 启发） |
| 521 | [satan9394/dsh-monorepo](https://github.com/satan9394/dsh-monorepo) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Monorepo 管理, workspace 依赖与增量构建（受 wshobson/agents 38k★ 启发） |
| 522 | [satan9394/dsh-multi-cloud](https://github.com/satan9394/dsh-multi-cloud) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 多云架构, 决策框架与防锁定（受 wshobson/agents 38k★ 启发） |
| 523 | [satan9394/dsh-observability](https://github.com/satan9394/dsh-observability) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 可观测性与埋点，日志/指标/追踪三支柱/告警设计（受 addyosmani/agent-skills 启发） |
| 524 | [satan9394/dsh-observability-tools](https://github.com/satan9394/dsh-observability-tools) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 可观测性工具, Prometheus/Grafana/追踪（受 wshobson/agents 38k★ 启发） |
| 525 | [satan9394/dsh-obsidian-vault](https://github.com/satan9394/dsh-obsidian-vault) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: Obsidian 知识库操作（风味 Markdown wikilinks/callouts、Bases 视图、JSON Canvas、Obsidian CLI、Defuddle 网页净提取）（受 kepano/obsidian-skills 36k★ 启发） |
| 526 | [satan9394/dsh-office-cli](https://github.com/satan9394/dsh-office-cli) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 为 AI 设计的 Office 套件（单二进制控制 Word/Excel/PPT、路径选择器、HTML 渲染闭环 render→look→fix、live preview、多视图）（受 iOfficeAI/OfficeCLI 28.8k★ 启发） |
| 527 | [satan9394/dsh-operating-kit](https://github.com/satan9394/dsh-operating-kit) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 会话操作纪律, 开始简报与结束收尾（受 wshobson/agents 38k★ 启发） |
| 528 | [satan9394/dsh-opinion-analysis](https://github.com/satan9394/dsh-opinion-analysis) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 多 Agent 舆情分析（30+ 社媒覆盖、四类 Agent+辩论主持人、Agent 论坛链式辩论、多模态解析、公私域融合、交互式报告）（受 666ghj/BettaFish 42k★ 启发） |
| 529 | [satan9394/dsh-parallel-agent-ade](https://github.com/satan9394/dsh-parallel-agent-ade) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 并行 agent 开发环境（worktree 扇出合并、移动伴侣、Design Mode、GitHub/Linear 原生、SSH 远程、AI diff 标注）（受 stablyai/orca 49k★ 启发） |
| 530 | [satan9394/dsh-parallel-dev](https://github.com/satan9394/dsh-parallel-dev) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 并行功能开发，文件所有权/接口契约/垂直切片 vs 水平分层（受 wshobson/agents 启发） |
| 531 | [satan9394/dsh-payment-processing](https://github.com/satan9394/dsh-payment-processing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 支付处理与订阅计费, 账单自动化与PCI合规（受 wshobson/agents 38k★ 启发） |
| 532 | [satan9394/dsh-pci-compliance](https://github.com/satan9394/dsh-pci-compliance) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: PCI 合规，卡数据保护/六大支柱控制清单/缩小范围策略（受 wshobson/agents 启发） |
| 533 | [satan9394/dsh-pdf-processing](https://github.com/satan9394/dsh-pdf-processing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: PDF 处理, 提取/合并/表单/OCR（受 Anthropic skills Apache-2.0 启发） |
| 534 | [satan9394/dsh-performance](https://github.com/satan9394/dsh-performance) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 性能优化，测量先行/瓶颈定位/缓存懒加载/性能预算（受 addyosmani/agent-skills 启发） |
| 535 | [satan9394/dsh-persistent-memory](https://github.com/satan9394/dsh-persistent-memory) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 跨会话持久记忆压缩（生命周期 hooks 捕获观察、3 层检索 search→timeline→details 省 10x token、渐进披露、私有标签、混合搜索）（受 thedotmack/claude-mem 86k★ 启发） |
| 536 | [satan9394/dsh-personal-content-discovery](https://github.com/satan9394/dsh-personal-content-discovery) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 跨平台个性化内容发现（五层灵魂画像、MBTI 推断、主动破茧、跨平台兴趣融合、本地优先、朋友式推荐）（受 whiteguo233/OpenBiliClaw 2.9k★ 启发） |
| 537 | [satan9394/dsh-planning](https://github.com/satan9394/dsh-planning) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 计划与任务拆解，可验证任务/依赖排序/估算/里程碑（受 addyosmani/agent-skills 启发） |
| 538 | [satan9394/dsh-planning-files](https://github.com/satan9394/dsh-planning-files) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 三文件持久化规划（task_plan/findings/progress 落地磁盘、每轮 hook 重注入、扛过 /clear/崩溃、会话 catchup 恢复、并行隔离目录）（受 OthmanAdi/planning-with-files 25k★ 启发） |
| 539 | [satan9394/dsh-ponytail-dev](https://github.com/satan9394/dsh-ponytail-dev) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 懒人高级开发哲学，YAGNI 阶梯 + 根因修复 + 极简纪律（受 DietrichGebert/ponytail 105k★ 启发） |
| 540 | [satan9394/dsh-postmortem](https://github.com/satan9394/dsh-postmortem) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 事故复盘写作，无指责文化/根因分析/时间线/行动项（受 wshobson/agents 38k★ 启发） |
| 541 | [satan9394/dsh-ppt-creator](https://github.com/satan9394/dsh-ppt-creator) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 中文 PPT 生成，大纲→视觉设计→HTML/PPTX 出稿，附排版自查清单 |
| 542 | [satan9394/dsh-pptx-engineering](https://github.com/satan9394/dsh-pptx-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: PPTX 工程, pptxgenjs 与验证（受 Anthropic skills Apache-2.0 启发） |
| 543 | [satan9394/dsh-prompt-audit](https://github.com/satan9394/dsh-prompt-audit) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 提示词审计与模型迁移, 过时模式扫描（受 Anthropic skills Apache-2.0 启发） |
| 544 | [satan9394/dsh-prompt-engineering](https://github.com/satan9394/dsh-prompt-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 提示词工程模式，CoT/few-shot/模板/优化调试（受 wshobson/agents 38k★ 启发） |
| 545 | [satan9394/dsh-python-development](https://github.com/satan9394/dsh-python-development) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Python 开发模式, 结构与类型安全（受 wshobson/agents 38k★ 启发） |
| 546 | [satan9394/dsh-quant-backtest](https://github.com/satan9394/dsh-quant-backtest) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 量化回测与风险指标，规避偏差/walk-forward/夏普回撤（受 wshobson/agents 启发） |
| 547 | [satan9394/dsh-rag](https://github.com/satan9394/dsh-rag) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: RAG 检索增强生成，向量库/嵌入/文档管线/检索策略/幻觉治理（受 wshobson/agents 38k★ 启发） |
| 548 | [satan9394/dsh-recsys-pipeline](https://github.com/satan9394/dsh-recsys-pipeline) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 推荐/排序流水线, 六阶段框架（受 wshobson/agents 38k★ 启发） |
| 549 | [satan9394/dsh-relationship-coach](https://github.com/satan9394/dsh-relationship-coach) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 恋爱/关系军师（先接情绪再解决事、事实/推测/未知分离、互惠/现实/风险/机会成本分析、可执行话术与停止条件、危险情境优先安全）（受 powerycy/goutoujunshi 2.3k★ 启发） |
| 550 | [satan9394/dsh-repo-graphify](https://github.com/satan9394/dsh-repo-graphify) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 仓库知识图谱（多模态提取、EXTRACTED/INFERRED/AMBIGUOUS 边标签、god nodes、71.5x token 节省、wiki 导航、--watch 同步）（受 safishamsi/graphify 48.7k★ 启发） |
| 551 | [satan9394/dsh-reverse-engineering](https://github.com/satan9394/dsh-reverse-engineering) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 逆向工程, 二进制分析与取证（受 wshobson/agents 38k★ 启发） |
| 552 | [satan9394/dsh-review-agent-governance](https://github.com/satan9394/dsh-review-agent-governance) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Agent 审查治理, 人工审批窗口与签名收据（受 wshobson/agents 38k★ 启发） |
| 553 | [satan9394/dsh-runbook](https://github.com/satan9394/dsh-runbook) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 事故手册，严重度分级/五阶段响应/升级路径/值班交接（受 wshobson/agents 启发） |
| 554 | [satan9394/dsh-sales-automation](https://github.com/satan9394/dsh-sales-automation) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 销售自动化与客服, 冷邮序列与异议处理（受 wshobson/agents 38k★ 启发） |
| 555 | [satan9394/dsh-sast-security](https://github.com/satan9394/dsh-sast-security) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: SAST 工具配置, Semgrep/SonarQube/CodeQL（受 wshobson/agents 38k★ 启发） |
| 556 | [satan9394/dsh-screenshot-to-code](https://github.com/satan9394/dsh-screenshot-to-code) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 截图转代码, 渲染对比迭代（受 screenshot-to-code 74k★ 启发） |
| 557 | [satan9394/dsh-security-compliance](https://github.com/satan9394/dsh-security-compliance) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 安全审计与合规, DevSecOps 与框架（受 wshobson/agents 38k★ 启发） |
| 558 | [satan9394/dsh-security-hardening](https://github.com/satan9394/dsh-security-hardening) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 安全加固，威胁建模 STRIDE + 三层边界系统（受 addyosmani/agent-skills 88k★ 启发） |
| 559 | [satan9394/dsh-security-requirements](https://github.com/satan9394/dsh-security-requirements) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 安全需求提取, 威胁转可行动需求（受 wshobson/agents 38k★ 启发） |
| 560 | [satan9394/dsh-self-improving-agent](https://github.com/satan9394/dsh-self-improving-agent) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 自改进 AI agent（闭环学习回路、技能自创建自改进、跨会话回忆、Honcho 用户建模、跨平台网关、cron 调度、serverless 休眠）（受 NousResearch/hermes-agent 154k★ 启发） |
| 561 | [satan9394/dsh-service-mesh](https://github.com/satan9394/dsh-service-mesh) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 服务网格, Istio/Linkerd 与 mTLS（受 wshobson/agents 38k★ 启发） |
| 562 | [satan9394/dsh-setup-wizard](https://github.com/satan9394/dsh-setup-wizard) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 交互式设置向导, 人工步骤逐步引导（受 mattpocock/skills 223k★ 启发） |
| 563 | [satan9394/dsh-shipping](https://github.com/satan9394/dsh-shipping) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 发布上线，检查清单/灰度/回滚优先/上线后监控（受 addyosmani/agent-skills 启发） |
| 564 | [satan9394/dsh-signed-audit-trails](https://github.com/satan9394/dsh-signed-audit-trails) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Agent 签名审计, Cedar 策略与 Ed25519 收据（受 wshobson/agents 38k★ 启发） |
| 565 | [satan9394/dsh-skill-optimization](https://github.com/satan9394/dsh-skill-optimization) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 把技能当可训练参数（epochs/批大小/学习率/验证门禁但不碰模型权重、rollout→evaluate 循环、held-out 严格改善才接受、零推理开销）（受 microsoft/SkillOpt 启发） |
| 566 | [satan9394/dsh-skill-seekers](https://github.com/satan9394/dsh-skill-seekers) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 技能数据层（18 种来源→22 种目标导出、AI 驱动项目扫描、RAG/编码助手打包）（受 yusufkaraaslan/Skill_Seekers 14k★ 启发） |
| 567 | [satan9394/dsh-slo](https://github.com/satan9394/dsh-slo) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: SLI/SLO/错误预算，可衡量可靠性目标与 SRE 实践（受 wshobson/agents 38k★ 启发） |
| 568 | [satan9394/dsh-social-publishing](https://github.com/satan9394/dsh-social-publishing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 社媒内容发布, 平台原生文案与排期（受 wshobson/agents 38k★ 启发） |
| 569 | [satan9394/dsh-social-simulation](https://github.com/satan9394/dsh-social-simulation) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 百万 agent 社交模拟（Twitter/Reddit 风格、23 种动作、兴趣/热度推荐、信息传播/群体极化/羊群行为研究）（受 camel-ai/oasis 5k★ 启发） |
| 570 | [satan9394/dsh-source-driven](https://github.com/satan9394/dsh-source-driven) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 源码驱动开发，框架决策官方文档背书/引用来源（受 addyosmani/agent-skills 88k★ 启发） |
| 571 | [satan9394/dsh-spec-driven](https://github.com/satan9394/dsh-spec-driven) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 规格驱动开发，先写 spec 再实现，四阶段门控（受 addyosmani/agent-skills 88k★ 启发） |
| 572 | [satan9394/dsh-sql-optimization](https://github.com/satan9394/dsh-sql-optimization) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: SQL 优化, EXPLAIN 分析与索引策略（受 wshobson/agents 38k★ 启发） |
| 573 | [satan9394/dsh-superpowers-essentials](https://github.com/satan9394/dsh-superpowers-essentials) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 工程方法论，动手前分类获批 + 系统化调试（受 obra/superpowers 274k★ 启发） |
| 574 | [satan9394/dsh-swarm-prediction](https://github.com/satan9394/dsh-swarm-prediction) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 群体智能预测引擎（平行数字世界、数千智能体社会演化、上帝视角变量注入、零风险决策演练、深度交互报告）（受 666ghj/MiroFish 71k★ 启发） |
| 575 | [satan9394/dsh-systems-programming](https://github.com/satan9394/dsh-systems-programming) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 系统级编程, 内存安全与并发模式（受 wshobson/agents 38k★ 启发） |
| 576 | [satan9394/dsh-taste-review](https://github.com/satan9394/dsh-taste-review) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 审美判断调用（UI 打磨/文案/命名模糊决策，多选项权衡+推荐+备选，深度匹配决策量级）（受 bholmesdev/skills taste-review 启发） |
| 577 | [satan9394/dsh-tdd](https://github.com/satan9394/dsh-tdd) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 测试驱动开发，红绿重构循环 + Prove-It 修复模式（受 addyosmani/agent-skills 88k★ 启发） |
| 578 | [satan9394/dsh-teach](https://github.com/satan9394/dsh-teach) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 教学与讲解, 教学工作区与合意困难（受 mattpocock/skills 223k★ 启发） |
| 579 | [satan9394/dsh-tech-debt](https://github.com/satan9394/dsh-tech-debt) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 技术债治理, 审计与还债优先级（受 wshobson/agents 38k★ 启发） |
| 580 | [satan9394/dsh-terraform](https://github.com/satan9394/dsh-terraform) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Terraform 模块库，模块设计/变量输出约定/IaC 最佳实践（受 wshobson/agents 启发） |
| 581 | [satan9394/dsh-test-desktop-app](https://github.com/satan9394/dsh-test-desktop-app) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: Electron 应用端到端测试（CDP 连接真实渲染器、DOM/JS/截图、DPR/右键/popup 坑）（受 bholmesdev/hubble.md test-desktop-app 启发） |
| 582 | [satan9394/dsh-theme-factory](https://github.com/satan9394/dsh-theme-factory) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 主题工厂, 预设主题与视觉统一（受 Anthropic skills Apache-2.0 启发） |
| 583 | [satan9394/dsh-threat-modeling](https://github.com/satan9394/dsh-threat-modeling) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 威胁建模, 攻击树与 STRIDE（受 wshobson/agents 38k★ 启发） |
| 584 | [satan9394/dsh-to-questionnaire](https://github.com/satan9394/dsh-to-questionnaire) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 决策转问卷, 提取他人知识（受 mattpocock/skills 223k★ 启发） |
| 585 | [satan9394/dsh-track-driven-dev](https://github.com/satan9394/dsh-track-driven-dev) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Track 驱动开发, spec/plan 与质量门（受 wshobson/agents conductor 启发） |
| 586 | [satan9394/dsh-vector-search](https://github.com/satan9394/dsh-vector-search) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 向量检索工程, embedding 与混合检索（受 wshobson/agents 38k★ 启发） |
| 587 | [satan9394/dsh-virtual-eng-team](https://github.com/satan9394/dsh-virtual-eng-team) | 0 | 2026-08-20 | 2026-08-20 | DSH skill: 虚拟工程团队（23 专家角色、office-hours 6 强制问题、plan-ceo/eng/design-review、review/qa/ship 发布流、cso 安全审计、retro 复盘）（受 garrytan/gstack 128k★ 启发） |
| 588 | [satan9394/dsh-wayfinder](https://github.com/satan9394/dsh-wayfinder) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 大工程决策地图, 决策票据逐个解析（受 mattpocock/skills 223k★ 启发） |
| 589 | [satan9394/dsh-web-artifacts](https://github.com/satan9394/dsh-web-artifacts) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 交互式 Web 组件, React+shadcn 单文件打包（受 Anthropic skills Apache-2.0 启发） |
| 590 | [satan9394/dsh-web-clone](https://github.com/satan9394/dsh-web-clone) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 网页复刻，从参考图/URL 提取字体/颜色/动画/组件规格生成高还原网页（受 xuanxuan-prompts 启发） |
| 591 | [satan9394/dsh-web-scripting](https://github.com/satan9394/dsh-web-scripting) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: PHP/Ruby Web 开发, 现代惯用法（受 wshobson/agents 38k★ 启发） |
| 592 | [satan9394/dsh-webapp-testing](https://github.com/satan9394/dsh-webapp-testing) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: Web 应用测试, Playwright 工作流（受 Anthropic skills Apache-2.0 启发） |
| 593 | [satan9394/dsh-workflow-loop](https://github.com/satan9394/dsh-workflow-loop) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 可委托工作流设计, 循环视角与规格（受 mattpocock/skills 223k★ 启发） |
| 594 | [satan9394/dsh-writing-beats](https://github.com/satan9394/dsh-writing-beats) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 节拍式写作, 冒险式路径与奠基（受 mattpocock/skills 223k★ 启发） |
| 595 | [satan9394/dsh-writing-for-agents](https://github.com/satan9394/dsh-writing-for-agents) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 写给 agent 的文档, 指针与信息层级（受 mattpocock/skills 223k★ 启发） |
| 596 | [satan9394/dsh-writing-fragments](https://github.com/satan9394/dsh-writing-fragments) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 写作探索, 碎片挖掘与领航词（受 mattpocock/skills 223k★ 启发） |
| 597 | [satan9394/dsh-writing-shape](https://github.com/satan9394/dsh-writing-shape) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: 写作塑形, 素材成文与奠基纪律（受 mattpocock/skills 223k★ 启发） |
| 598 | [satan9394/dsh-x-twitter-research](https://github.com/satan9394/dsh-x-twitter-research) | 0 | 2026-08-19 | 2026-08-20 | DSH skill: X/Twitter 研究, 社交倾听与受控发帖（受 wshobson/agents hermes-tweet 启发） |
| 599 | [SchrodiL/dsh-chrome-app-launcher](https://github.com/SchrodiL/dsh-chrome-app-launcher) | 0 | 2026-08-20 | 2026-08-20 | Desktop launcher for Deepseek Harness as a Chrome APP |
| 600 | [seaskyblue/dsh-channel-feishu](https://github.com/seaskyblue/dsh-channel-feishu) | 0 | 2026-08-20 | 2026-08-20 | Feishu (Lark) channel plugin for DeepSeek Harness: turn a Feishu bot into a full DSH agent (tools, filesystem, shell). Multiple bots supported. |
| 601 | [secretLjp/dsh-weave](https://github.com/secretLjp/dsh-weave) | 0 | 2026-08-20 | 2026-08-20 | Harness-native conversation branches and explicit semantic harvests for DeepSeek Harness |
| 602 | [shaun5297/dsh-launcher](https://github.com/shaun5297/dsh-launcher) | 0 | 2026-08-20 | 2026-08-20 | One-click launcher for DeepSeek Harness: detect → start backend (dsh web) → wait ready → open Chrome new window. Zero-dependency CLI, cross-platform. |
| 603 | [shellexy/dsh-webviewgtk](https://github.com/shellexy/dsh-webviewgtk) | 0 | 2026-08-20 | 2026-08-20 | A GTK4 + WebKitGTK 6.0 based web launcher for dsh |
| 604 | [SilasSolivagus/MetaBoard](https://github.com/SilasSolivagus/MetaBoard) | 0 | 2026-08-20 | 2026-08-20 | Execution trajectories for work that isn't code — a DeepSeek Harness plugin, starting with content production. |
| 605 | [simune/dsh-desktop](https://github.com/simune/dsh-desktop) | 0 | 2026-08-15 | 2026-08-20 | DeepSeek Harness 的插件管理工作区与一个基于 Tauri 的桌面客户端（dsh-desktop），把 dsh Web 服务捆绑并以原生窗口呈现，简化桌面端部署与使用体验。 |
| 606 | [SiriusWJ/dsh-lite-memory](https://github.com/SiriusWJ/dsh-lite-memory) | 0 | 2026-08-20 | 2026-08-20 | DSH 简化版记忆插件:SQLite 条目化记忆(标题/重要程度/来源/内容,增删改查)+ 日历与到点提醒(月视图+时间轴+待执行/已完成双tab),对话面板记忆 tab 与设置二级菜单,中英双语自动跟随。 |
| 607 | [sjh9714/profile-cover](https://github.com/sjh9714/profile-cover) | 0 | 2026-08-19 | 2026-08-20 | Agent skill that designs your GitHub profile README as an editorial page. Kerned serif mastheads as path-outlined SVGs, light and dark pairs, zero external resources, deterministic checks. profile readme, github profile, masthead. |
| 608 | [sjk1949/orca-cat](https://github.com/sjk1949/orca-cat) | 0 | 2026-08-19 | 2026-08-20 | A third-party launcher for the DeepSeek Harness. |
| 609 | [skepsun/dsh-engram](https://github.com/skepsun/dsh-engram) | 0 | 2026-08-18 | 2026-08-20 | 极简·省 token 的 DSH 长期记忆插件：零 LLM 自动捕获、符号索引渐进披露、ESR 证据闭环。Minimalist token-saving memory for DeepSeek Harness: zero-LLM auto-capture, symbolic index, ESR-lite evidence closure. |
| 610 | [Skylarking/dsh-plugin-chat-renderer](https://github.com/Skylarking/dsh-plugin-chat-renderer) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: chat renderer |
| 611 | [Skylarking/dsh-plugin-codex-pets](https://github.com/Skylarking/dsh-plugin-codex-pets) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: codex-pets |
| 612 | [Skylarking/dsh-plugin-desktop-plugin-inventory](https://github.com/Skylarking/dsh-plugin-desktop-plugin-inventory) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: desktop plugin inventory |
| 613 | [Skylarking/dsh-plugin-workspace-multi](https://github.com/Skylarking/dsh-plugin-workspace-multi) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: multi workspace |
| 614 | [Skylarking/dsh-sidebar](https://github.com/Skylarking/dsh-sidebar) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: workspace console |
| 615 | [snanjib/DSH-minesweeper](https://github.com/snanjib/DSH-minesweeper) | 0 | 2026-08-20 | 2026-08-20 | 扫雷小游戏 × 鲸鱼娘帮选 —— DeepSeek Harness (Cordis) 浮层插件 · Minesweeper overlay plugin with a whale-girl helper |
| 616 | [SodaZheng/dsh-more](https://github.com/SodaZheng/dsh-more) | 0 | 2026-08-19 | 2026-08-20 | 为 DeepSeek Harness Web 补齐上下文与历史控制能力的一组实用补丁；每个补丁都可以独立启停。 |
| 617 | [sol5766/dshm_client](https://github.com/sol5766/dshm_client) | 0 | 2026-08-20 | 2026-08-20 | deepseek harnes HarmonyOS PC client |
| 618 | [spike-faye-lei/dsh-harmonyos-arkts](https://github.com/spike-faye-lei/dsh-harmonyos-arkts) | 0 | 2026-08-19 | 2026-08-20 | HarmonyOS NEXT / ArkTS development skills plugin for DeepSeek Harness |
| 619 | [sprainJinyu/dsh-vision-link](https://github.com/sprainJinyu/dsh-vision-link) | 0 | 2026-08-20 | 2026-08-20 | Route-preserving image understanding for text-only models in DeepSeek Harness (DSH). |
| 620 | [stark-L-1/skill](https://github.com/stark-L-1/skill) | 0 | 2026-08-20 | 2026-08-20 | AI写入的skill |
| 621 | [SuCriss/dsh-version-update](https://github.com/SuCriss/dsh-version-update) | 0 | 2026-08-20 | 2026-08-20 | Version update menu for the DeepSeek Harness Web GUI settings panel: check @deepseek-ai/dsh releases, install one with a click, then restart the host and reload the page automatically. |
| 622 | [SUJIElearning/dsh-free-search-builder](https://github.com/SUJIElearning/dsh-free-search-builder) | 0 | 2026-08-20 | 2026-08-20 | Free web search plugin for DeepSeek Harness (DSH) - scrapes public Bing search results, no API key needed. |
| 623 | [T-MKT/dsh-ui-settings](https://github.com/T-MKT/dsh-ui-settings) | 0 | 2026-08-19 | 2026-08-20 | Provide general UI settings for DeepSeek Harness, suiting your personalization.  |
| 624 | [taltara/capmark](https://github.com/taltara/capmark) | 0 | 2026-08-20 | 2026-08-20 | Capability manifests for AI agent plugins. Declare what a plugin may do, in Markdown, and check it. |
| 625 | [tangzheng202202/dsh-sparkos](https://github.com/tangzheng202202/dsh-sparkos) | 0 | 2026-08-20 | 2026-08-20 | SparkOS - DeepSeek Harness AI 自媒体工作台：sparkos_run + 8/9-tab 工作台 + intel 情报指挥所（只读接入三管道 + 健康看板 + 融合入口） |
| 626 | [TaurenMountain/dsh-llm-as-a-verifier](https://github.com/TaurenMountain/dsh-llm-as-a-verifier) | 0 | 2026-08-20 | 2026-08-20 | LLM-as-a-Verifier for DeepSeek Harness: fine-grained reward, Probabilistic Pivot Tournament best-of-N selection, and per-step progress tracking as agent tools. |
| 627 | [teresalu2024/dsh-qual](https://github.com/teresalu2024/dsh-qual) | 0 | 2026-08-20 | 2026-08-20 | Qualitative research full-lifecycle orchestrator: six-stage companion for qualitative researchers |
| 628 | [Thomas-Novato/deepseek-harness-paper-assistant](https://github.com/Thomas-Novato/deepseek-harness-paper-assistant) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness plugin for reading, understanding, summarizing and translating academic PDFs (Python) |
| 629 | [timedomain1/dsh-mermaid-renderer](https://github.com/timedomain1/dsh-mermaid-renderer) | 0 | 2026-08-20 | 2026-08-20 | Render Mermaid diagrams in the DeepSeek Harness web chat — repeatable zoom, fullscreen viewer, beautify defaults. |
| 630 | [timsok-shit/dsh-preset-switch](https://github.com/timsok-shit/dsh-preset-switch) | 0 | 2026-08-19 | 2026-08-20 | Switch agent presets in any DSH conversation — even ones that already have messages. |
| 631 | [timsok-shit/dsh-quick-resume](https://github.com/timsok-shit/dsh-quick-resume) | 0 | 2026-08-19 | 2026-08-20 | One-click resume button for interrupted DSH agents: a continue button in the assistant message action row that resumes the agent via host agent.followup |
| 632 | [tkliuxing/dsh-hypatia](https://github.com/tkliuxing/dsh-hypatia) | 0 | 2026-08-20 | 2026-08-20 | Hypatia skills for DeepSeek Harness: knowledge-graph query skill plus automatic conversation-memory bridge. Requires the hypatia CLI on PATH. |
| 633 | [TOBYCAI/dsh-archived-sessions](https://github.com/TOBYCAI/dsh-archived-sessions) | 0 | 2026-08-20 | 2026-08-20 | Manage archived sessions in DSH — view / restore / permanently delete, with workspace tags, session dates & batch multi-select. \| DSH 归档会话管理器：查看/恢复/彻底删除已归档 session，含工作区标签、会话日期与批量多选。 |
| 634 | [trewvip-arch/dsh-open-in-app](https://github.com/trewvip-arch/dsh-open-in-app) | 0 | 2026-08-20 | 2026-08-20 | dsh web-UI plugin: open the current session's workspace folder with an installed app (Finder, Terminal, VS Code, Ghostty, Zed, ...) — icons included |
| 635 | [TYEclipse/dsh-checkdigit](https://github.com/TYEclipse/dsh-checkdigit) | 0 | 2026-08-19 | 2026-08-20 | Check-digit mathematics toolbox for DeepSeek Harness (dsh): generate, validate and detect Luhn / Verhoeff / Damm / ISBN / EAN / UPC / ISIN / CUSIP / IBAN check digits — zero runtime dependencies |
| 636 | [uaapple/dsh-ui-cost](https://github.com/uaapple/dsh-ui-cost) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness Web UI plugin for live token usage and estimated cost |
| 637 | [uckkk/dsh-ab-sample](https://github.com/uckkk/dsh-ab-sample) | 0 | 2026-08-20 | 2026-08-20 | A/B测试样本量 |
| 638 | [uckkk/dsh-abs](https://github.com/uckkk/dsh-abs) | 0 | 2026-08-19 | 2026-08-20 | 绝对值 |
| 639 | [uckkk/dsh-ac-size](https://github.com/uckkk/dsh-ac-size) | 0 | 2026-08-20 | 2026-08-20 | 空调匹数选择 |
| 640 | [uckkk/dsh-accounting-cert](https://github.com/uckkk/dsh-accounting-cert) | 0 | 2026-08-20 | 2026-08-20 | 会计证书要求 |
| 641 | [uckkk/dsh-acre2ha](https://github.com/uckkk/dsh-acre2ha) | 0 | 2026-08-19 | 2026-08-20 | 英亩转公顷 |
| 642 | [uckkk/dsh-actinium](https://github.com/uckkk/dsh-actinium) | 0 | 2026-08-20 | 2026-08-20 | 锕元素 |
| 643 | [uckkk/dsh-ad-bid](https://github.com/uckkk/dsh-ad-bid) | 0 | 2026-08-20 | 2026-08-20 | 广告出价上限 |
| 644 | [uckkk/dsh-ad-roi](https://github.com/uckkk/dsh-ad-roi) | 0 | 2026-08-20 | 2026-08-20 | 广告ROI计算 |
| 645 | [uckkk/dsh-afghanistan](https://github.com/uckkk/dsh-afghanistan) | 0 | 2026-08-20 | 2026-08-20 | 阿富汗国家 |
| 646 | [uckkk/dsh-age-calc](https://github.com/uckkk/dsh-age-calc) | 0 | 2026-08-19 | 2026-08-20 | 年龄计算 |
| 647 | [uckkk/dsh-agriculture-terms](https://github.com/uckkk/dsh-agriculture-terms) | 0 | 2026-08-20 | 2026-08-20 | 农业术语 |
| 648 | [uckkk/dsh-ai-models](https://github.com/uckkk/dsh-ai-models) | 0 | 2026-08-20 | 2026-08-20 | AI 模型 |
| 649 | [uckkk/dsh-ai-terms](https://github.com/uckkk/dsh-ai-terms) | 0 | 2026-08-20 | 2026-08-20 | AI 术语 |
| 650 | [uckkk/dsh-albania](https://github.com/uckkk/dsh-albania) | 0 | 2026-08-20 | 2026-08-20 | 阿尔巴尼亚国家 |
| 651 | [uckkk/dsh-algeria](https://github.com/uckkk/dsh-algeria) | 0 | 2026-08-20 | 2026-08-20 | 阿尔及利亚国家 |
| 652 | [uckkk/dsh-aluminium](https://github.com/uckkk/dsh-aluminium) | 0 | 2026-08-20 | 2026-08-20 | 铝元素 |
| 653 | [uckkk/dsh-americium](https://github.com/uckkk/dsh-americium) | 0 | 2026-08-20 | 2026-08-20 | 镅元素 |
| 654 | [uckkk/dsh-andorra](https://github.com/uckkk/dsh-andorra) | 0 | 2026-08-19 | 2026-08-20 | 安道尔国 |
| 655 | [uckkk/dsh-animal-bear](https://github.com/uckkk/dsh-animal-bear) | 0 | 2026-08-20 | 2026-08-20 | 棕熊 |
| 656 | [uckkk/dsh-animal-cat](https://github.com/uckkk/dsh-animal-cat) | 0 | 2026-08-20 | 2026-08-20 | 猫 |
| 657 | [uckkk/dsh-animal-cow](https://github.com/uckkk/dsh-animal-cow) | 0 | 2026-08-20 | 2026-08-20 | 牛 |
| 658 | [uckkk/dsh-animal-dog](https://github.com/uckkk/dsh-animal-dog) | 0 | 2026-08-20 | 2026-08-20 | 狗 |
| 659 | [uckkk/dsh-animal-dolphin](https://github.com/uckkk/dsh-animal-dolphin) | 0 | 2026-08-20 | 2026-08-20 | 海豚 |
| 660 | [uckkk/dsh-animal-eagle](https://github.com/uckkk/dsh-animal-eagle) | 0 | 2026-08-20 | 2026-08-20 | 老鹰 |
| 661 | [uckkk/dsh-animal-elephant](https://github.com/uckkk/dsh-animal-elephant) | 0 | 2026-08-19 | 2026-08-20 | 大象 |
| 662 | [uckkk/dsh-animal-giraffe](https://github.com/uckkk/dsh-animal-giraffe) | 0 | 2026-08-20 | 2026-08-20 | 长颈鹿 |
| 663 | [uckkk/dsh-animal-horse](https://github.com/uckkk/dsh-animal-horse) | 0 | 2026-08-20 | 2026-08-20 | 马 |
| 664 | [uckkk/dsh-animal-kangaroo](https://github.com/uckkk/dsh-animal-kangaroo) | 0 | 2026-08-20 | 2026-08-20 | 袋鼠 |
| 665 | [uckkk/dsh-animal-lion](https://github.com/uckkk/dsh-animal-lion) | 0 | 2026-08-19 | 2026-08-20 | 狮子 |
| 666 | [uckkk/dsh-animal-monkey](https://github.com/uckkk/dsh-animal-monkey) | 0 | 2026-08-20 | 2026-08-20 | 猴子 |
| 667 | [uckkk/dsh-animal-owl](https://github.com/uckkk/dsh-animal-owl) | 0 | 2026-08-20 | 2026-08-20 | 猫头鹰 |
| 668 | [uckkk/dsh-animal-panda](https://github.com/uckkk/dsh-animal-panda) | 0 | 2026-08-19 | 2026-08-20 | 大熊猫 |
| 669 | [uckkk/dsh-animal-rabbit](https://github.com/uckkk/dsh-animal-rabbit) | 0 | 2026-08-20 | 2026-08-20 | 兔子 |
| 670 | [uckkk/dsh-animal-tiger](https://github.com/uckkk/dsh-animal-tiger) | 0 | 2026-08-19 | 2026-08-20 | 老虎 |
| 671 | [uckkk/dsh-animal-whale](https://github.com/uckkk/dsh-animal-whale) | 0 | 2026-08-20 | 2026-08-20 | 蓝鲸 |
| 672 | [uckkk/dsh-animal-wolf](https://github.com/uckkk/dsh-animal-wolf) | 0 | 2026-08-20 | 2026-08-20 | 狼 |
| 673 | [uckkk/dsh-annual-leave](https://github.com/uckkk/dsh-annual-leave) | 0 | 2026-08-20 | 2026-08-20 | 年假计算器 |
| 674 | [uckkk/dsh-aov-up](https://github.com/uckkk/dsh-aov-up) | 0 | 2026-08-20 | 2026-08-20 | 客单价提升测算 |
| 675 | [uckkk/dsh-arithmetic-series](https://github.com/uckkk/dsh-arithmetic-series) | 0 | 2026-08-19 | 2026-08-20 | 等差数列 |
| 676 | [uckkk/dsh-ascii](https://github.com/uckkk/dsh-ascii) | 0 | 2026-08-19 | 2026-08-20 | ASCII 转换 |
| 677 | [uckkk/dsh-atbash](https://github.com/uckkk/dsh-atbash) | 0 | 2026-08-19 | 2026-08-20 | Atbash 密码 |
| 678 | [uckkk/dsh-average](https://github.com/uckkk/dsh-average) | 0 | 2026-08-19 | 2026-08-20 | 平均值 |
| 679 | [uckkk/dsh-baby-clothes](https://github.com/uckkk/dsh-baby-clothes) | 0 | 2026-08-20 | 2026-08-20 | 婴儿衣物尺码 |
| 680 | [uckkk/dsh-baby-milk](https://github.com/uckkk/dsh-baby-milk) | 0 | 2026-08-20 | 2026-08-20 | 宝宝奶量估算 |
| 681 | [uckkk/dsh-baby-weight](https://github.com/uckkk/dsh-baby-weight) | 0 | 2026-08-20 | 2026-08-20 | 宝宝体重标准 |
| 682 | [uckkk/dsh-bahrain](https://github.com/uckkk/dsh-bahrain) | 0 | 2026-08-20 | 2026-08-20 | 巴林国 |
| 683 | [uckkk/dsh-bar2psi](https://github.com/uckkk/dsh-bar2psi) | 0 | 2026-08-19 | 2026-08-20 | 巴转 PSI |
| 684 | [uckkk/dsh-base16](https://github.com/uckkk/dsh-base16) | 0 | 2026-08-19 | 2026-08-20 | Base16 编码 |
| 685 | [uckkk/dsh-base32](https://github.com/uckkk/dsh-base32) | 0 | 2026-08-19 | 2026-08-20 | Base32 编解码（RFC 4648） |
| 686 | [uckkk/dsh-base36](https://github.com/uckkk/dsh-base36) | 0 | 2026-08-19 | 2026-08-20 | Base36 编码 |
| 687 | [uckkk/dsh-base58](https://github.com/uckkk/dsh-base58) | 0 | 2026-08-19 | 2026-08-20 | Base58 编解码 |
| 688 | [uckkk/dsh-base62](https://github.com/uckkk/dsh-base62) | 0 | 2026-08-19 | 2026-08-20 | Base62 编码 |
| 689 | [uckkk/dsh-baseboard](https://github.com/uckkk/dsh-baseboard) | 0 | 2026-08-20 | 2026-08-20 | 踢脚线用量 |
| 690 | [uckkk/dsh-battery-check](https://github.com/uckkk/dsh-battery-check) | 0 | 2026-08-20 | 2026-08-20 | 电瓶寿命 |
| 691 | [uckkk/dsh-battery-life](https://github.com/uckkk/dsh-battery-life) | 0 | 2026-08-20 | 2026-08-20 | 电池续航估算 |
| 692 | [uckkk/dsh-bbl2l](https://github.com/uckkk/dsh-bbl2l) | 0 | 2026-08-19 | 2026-08-20 | 桶转升 |
| 693 | [uckkk/dsh-bcrypt](https://github.com/uckkk/dsh-bcrypt) | 0 | 2026-08-19 | 2026-08-20 | 密码哈希（PBKDF2/scrypt） |
| 694 | [uckkk/dsh-benin](https://github.com/uckkk/dsh-benin) | 0 | 2026-08-20 | 2026-08-20 | 贝宁国 |
| 695 | [uckkk/dsh-beryllium](https://github.com/uckkk/dsh-beryllium) | 0 | 2026-08-19 | 2026-08-20 | 铍元素 |
| 696 | [uckkk/dsh-bilibili-live](https://github.com/uckkk/dsh-bilibili-live) | 0 | 2026-08-20 | 2026-08-20 | B站视频信息 |
| 697 | [uckkk/dsh-binary](https://github.com/uckkk/dsh-binary) | 0 | 2026-08-19 | 2026-08-20 | 二进制转换 |
| 698 | [uckkk/dsh-bird-albatross](https://github.com/uckkk/dsh-bird-albatross) | 0 | 2026-08-20 | 2026-08-20 | 信天翁 |
| 699 | [uckkk/dsh-bird-crane](https://github.com/uckkk/dsh-bird-crane) | 0 | 2026-08-20 | 2026-08-20 | 鹤 |
| 700 | [uckkk/dsh-bird-crow](https://github.com/uckkk/dsh-bird-crow) | 0 | 2026-08-20 | 2026-08-20 | 乌鸦 |
| 701 | [uckkk/dsh-bird-emu](https://github.com/uckkk/dsh-bird-emu) | 0 | 2026-08-20 | 2026-08-20 | 鸸鹋 |
| 702 | [uckkk/dsh-bird-flamingo](https://github.com/uckkk/dsh-bird-flamingo) | 0 | 2026-08-20 | 2026-08-20 | 火烈鸟 |
| 703 | [uckkk/dsh-bird-hummingbird](https://github.com/uckkk/dsh-bird-hummingbird) | 0 | 2026-08-20 | 2026-08-20 | 蜂鸟 |
| 704 | [uckkk/dsh-bird-kingfisher](https://github.com/uckkk/dsh-bird-kingfisher) | 0 | 2026-08-20 | 2026-08-20 | 翠鸟 |
| 705 | [uckkk/dsh-bird-kiwi](https://github.com/uckkk/dsh-bird-kiwi) | 0 | 2026-08-20 | 2026-08-20 | 几维鸟 |
| 706 | [uckkk/dsh-bird-magpie](https://github.com/uckkk/dsh-bird-magpie) | 0 | 2026-08-20 | 2026-08-20 | 喜鹊 |
| 707 | [uckkk/dsh-bird-peacock](https://github.com/uckkk/dsh-bird-peacock) | 0 | 2026-08-20 | 2026-08-20 | 孔雀 |
| 708 | [uckkk/dsh-bird-pigeon](https://github.com/uckkk/dsh-bird-pigeon) | 0 | 2026-08-20 | 2026-08-20 | 鸽子 |
| 709 | [uckkk/dsh-bird-seagull](https://github.com/uckkk/dsh-bird-seagull) | 0 | 2026-08-20 | 2026-08-20 | 海鸥 |
| 710 | [uckkk/dsh-bird-sparrow](https://github.com/uckkk/dsh-bird-sparrow) | 0 | 2026-08-19 | 2026-08-20 | 麻雀 |
| 711 | [uckkk/dsh-bird-swallow](https://github.com/uckkk/dsh-bird-swallow) | 0 | 2026-08-20 | 2026-08-20 | 燕子 |
| 712 | [uckkk/dsh-bird-swan](https://github.com/uckkk/dsh-bird-swan) | 0 | 2026-08-20 | 2026-08-20 | 天鹅 |
| 713 | [uckkk/dsh-bird-woodpecker](https://github.com/uckkk/dsh-bird-woodpecker) | 0 | 2026-08-20 | 2026-08-20 | 啄木鸟 |
| 714 | [uckkk/dsh-blood-pressure](https://github.com/uckkk/dsh-blood-pressure) | 0 | 2026-08-20 | 2026-08-20 | 血压分类 |
| 715 | [uckkk/dsh-bmi](https://github.com/uckkk/dsh-bmi) | 0 | 2026-08-20 | 2026-08-20 | BMI计算器 |
| 716 | [uckkk/dsh-bmi-adjust](https://github.com/uckkk/dsh-bmi-adjust) | 0 | 2026-08-20 | 2026-08-20 | 减重计划拆解 |
| 717 | [uckkk/dsh-boron](https://github.com/uckkk/dsh-boron) | 0 | 2026-08-19 | 2026-08-20 | 硼元素 |
| 718 | [uckkk/dsh-brushing-time](https://github.com/uckkk/dsh-brushing-time) | 0 | 2026-08-20 | 2026-08-20 | 刷牙时长 |
| 719 | [uckkk/dsh-burkina-faso](https://github.com/uckkk/dsh-burkina-faso) | 0 | 2026-08-20 | 2026-08-20 | 布基纳法索国 |
| 720 | [uckkk/dsh-business-days](https://github.com/uckkk/dsh-business-days) | 0 | 2026-08-19 | 2026-08-20 | 工作日计算 |
| 721 | [uckkk/dsh-butter-convert](https://github.com/uckkk/dsh-butter-convert) | 0 | 2026-08-20 | 2026-08-20 | 黄油换算 |
| 722 | [uckkk/dsh-caesar](https://github.com/uckkk/dsh-caesar) | 0 | 2026-08-19 | 2026-08-20 | 凯撒密码 |
| 723 | [uckkk/dsh-caffeine](https://github.com/uckkk/dsh-caffeine) | 0 | 2026-08-20 | 2026-08-20 | 咖啡因半衰期 |
| 724 | [uckkk/dsh-cake-pan](https://github.com/uckkk/dsh-cake-pan) | 0 | 2026-08-20 | 2026-08-20 | 蛋糕模具换算 |
| 725 | [uckkk/dsh-camelcase](https://github.com/uckkk/dsh-camelcase) | 0 | 2026-08-19 | 2026-08-20 | 驼峰命名 |
| 726 | [uckkk/dsh-cape-verde](https://github.com/uckkk/dsh-cape-verde) | 0 | 2026-08-20 | 2026-08-20 | 佛得角国 |
| 727 | [uckkk/dsh-capitalize](https://github.com/uckkk/dsh-capitalize) | 0 | 2026-08-19 | 2026-08-20 | 首字母大写 |
| 728 | [uckkk/dsh-car](https://github.com/uckkk/dsh-car) | 0 | 2026-08-20 | 2026-08-20 | 中非共和国国 |
| 729 | [uckkk/dsh-car-loan](https://github.com/uckkk/dsh-car-loan) | 0 | 2026-08-20 | 2026-08-20 | 车贷月供计算 |
| 730 | [uckkk/dsh-carbon](https://github.com/uckkk/dsh-carbon) | 0 | 2026-08-19 | 2026-08-20 | 碳元素 |
| 731 | [uckkk/dsh-cat-persian](https://github.com/uckkk/dsh-cat-persian) | 0 | 2026-08-20 | 2026-08-20 | 波斯猫 |
| 732 | [uckkk/dsh-cat-siamese](https://github.com/uckkk/dsh-cat-siamese) | 0 | 2026-08-20 | 2026-08-20 | 暹罗猫 |
| 733 | [uckkk/dsh-catalan](https://github.com/uckkk/dsh-catalan) | 0 | 2026-08-19 | 2026-08-20 | 卡塔兰数 |
| 734 | [uckkk/dsh-cb-convert](https://github.com/uckkk/dsh-cb-convert) | 0 | 2026-08-20 | 2026-08-20 | 可转债转股价值 |
| 735 | [uckkk/dsh-cet-pass](https://github.com/uckkk/dsh-cet-pass) | 0 | 2026-08-20 | 2026-08-20 | 四六级过线判断 |
| 736 | [uckkk/dsh-cet-score](https://github.com/uckkk/dsh-cet-score) | 0 | 2026-08-20 | 2026-08-20 | 四六级估分 |
| 737 | [uckkk/dsh-chad](https://github.com/uckkk/dsh-chad) | 0 | 2026-08-20 | 2026-08-20 | 乍得国 |
| 738 | [uckkk/dsh-charge-time](https://github.com/uckkk/dsh-charge-time) | 0 | 2026-08-20 | 2026-08-20 | 充电时间估算 |
| 739 | [uckkk/dsh-chunk](https://github.com/uckkk/dsh-chunk) | 0 | 2026-08-19 | 2026-08-20 | 数组分块 |
| 740 | [uckkk/dsh-circle](https://github.com/uckkk/dsh-circle) | 0 | 2026-08-19 | 2026-08-20 | 圆计算 |
| 741 | [uckkk/dsh-city-amsterdam-city](https://github.com/uckkk/dsh-city-amsterdam-city) | 0 | 2026-08-19 | 2026-08-20 | 阿姆斯特丹市 |
| 742 | [uckkk/dsh-city-athens-city](https://github.com/uckkk/dsh-city-athens-city) | 0 | 2026-08-20 | 2026-08-20 | 雅典市 |
| 743 | [uckkk/dsh-city-budapest-city](https://github.com/uckkk/dsh-city-budapest-city) | 0 | 2026-08-20 | 2026-08-20 | 布达佩斯市 |
| 744 | [uckkk/dsh-city-copenhagen-city](https://github.com/uckkk/dsh-city-copenhagen-city) | 0 | 2026-08-20 | 2026-08-20 | 哥本哈根市 |
| 745 | [uckkk/dsh-city-dublin-city](https://github.com/uckkk/dsh-city-dublin-city) | 0 | 2026-08-20 | 2026-08-20 | 都柏林市 |
| 746 | [uckkk/dsh-city-edinburgh-city](https://github.com/uckkk/dsh-city-edinburgh-city) | 0 | 2026-08-20 | 2026-08-20 | 爱丁堡市 |
| 747 | [uckkk/dsh-city-hamburg-city](https://github.com/uckkk/dsh-city-hamburg-city) | 0 | 2026-08-20 | 2026-08-20 | 汉堡市 |
| 748 | [uckkk/dsh-city-helsinki-city](https://github.com/uckkk/dsh-city-helsinki-city) | 0 | 2026-08-20 | 2026-08-20 | 赫尔辛基市 |
| 749 | [uckkk/dsh-city-lisbon-city](https://github.com/uckkk/dsh-city-lisbon-city) | 0 | 2026-08-20 | 2026-08-20 | 里斯本市 |
| 750 | [uckkk/dsh-city-manchester-city](https://github.com/uckkk/dsh-city-manchester-city) | 0 | 2026-08-20 | 2026-08-20 | 曼彻斯特市 |
| 751 | [uckkk/dsh-city-munich-city](https://github.com/uckkk/dsh-city-munich-city) | 0 | 2026-08-20 | 2026-08-20 | 慕尼黑市 |
| 752 | [uckkk/dsh-city-oslo-city](https://github.com/uckkk/dsh-city-oslo-city) | 0 | 2026-08-20 | 2026-08-20 | 奥斯陆市 |
| 753 | [uckkk/dsh-city-prague-city](https://github.com/uckkk/dsh-city-prague-city) | 0 | 2026-08-19 | 2026-08-20 | 布拉格市 |
| 754 | [uckkk/dsh-city-stockholm-city](https://github.com/uckkk/dsh-city-stockholm-city) | 0 | 2026-08-20 | 2026-08-20 | 斯德哥尔摩市 |
| 755 | [uckkk/dsh-city-vienna-city](https://github.com/uckkk/dsh-city-vienna-city) | 0 | 2026-08-19 | 2026-08-20 | 维也纳市 |
| 756 | [uckkk/dsh-city-warsaw-city](https://github.com/uckkk/dsh-city-warsaw-city) | 0 | 2026-08-20 | 2026-08-20 | 华沙市 |
| 757 | [uckkk/dsh-city-zurich-city](https://github.com/uckkk/dsh-city-zurich-city) | 0 | 2026-08-20 | 2026-08-20 | 苏黎世市 |
| 758 | [uckkk/dsh-civil-exam](https://github.com/uckkk/dsh-civil-exam) | 0 | 2026-08-20 | 2026-08-20 | 行测答题节奏 |
| 759 | [uckkk/dsh-clamp](https://github.com/uckkk/dsh-clamp) | 0 | 2026-08-19 | 2026-08-20 | 数值限幅 |
| 760 | [uckkk/dsh-club-ajax](https://github.com/uckkk/dsh-club-ajax) | 0 | 2026-08-20 | 2026-08-20 | 阿贾克斯 |
| 761 | [uckkk/dsh-club-arsenal](https://github.com/uckkk/dsh-club-arsenal) | 0 | 2026-08-20 | 2026-08-20 | 阿森纳 |
| 762 | [uckkk/dsh-club-barcelona](https://github.com/uckkk/dsh-club-barcelona) | 0 | 2026-08-19 | 2026-08-20 | 巴塞罗那 |
| 763 | [uckkk/dsh-club-bayern](https://github.com/uckkk/dsh-club-bayern) | 0 | 2026-08-20 | 2026-08-20 | 拜仁慕尼黑 |
| 764 | [uckkk/dsh-club-benfica](https://github.com/uckkk/dsh-club-benfica) | 0 | 2026-08-20 | 2026-08-20 | 本菲卡 |
| 765 | [uckkk/dsh-club-boca](https://github.com/uckkk/dsh-club-boca) | 0 | 2026-08-20 | 2026-08-20 | 博卡青年 |
| 766 | [uckkk/dsh-club-celtic](https://github.com/uckkk/dsh-club-celtic) | 0 | 2026-08-20 | 2026-08-20 | 凯尔特人 |
| 767 | [uckkk/dsh-club-dortmund](https://github.com/uckkk/dsh-club-dortmund) | 0 | 2026-08-20 | 2026-08-20 | 多特蒙德 |
| 768 | [uckkk/dsh-club-flamengo](https://github.com/uckkk/dsh-club-flamengo) | 0 | 2026-08-20 | 2026-08-20 | 弗拉门戈 |
| 769 | [uckkk/dsh-club-galatasaray](https://github.com/uckkk/dsh-club-galatasaray) | 0 | 2026-08-20 | 2026-08-20 | 加拉塔萨雷 |
| 770 | [uckkk/dsh-club-inter](https://github.com/uckkk/dsh-club-inter) | 0 | 2026-08-20 | 2026-08-20 | 国际米兰 |
| 771 | [uckkk/dsh-club-juventus](https://github.com/uckkk/dsh-club-juventus) | 0 | 2026-08-20 | 2026-08-20 | 尤文图斯 |
| 772 | [uckkk/dsh-club-liverpool](https://github.com/uckkk/dsh-club-liverpool) | 0 | 2026-08-19 | 2026-08-20 | 利物浦 |
| 773 | [uckkk/dsh-club-man-city](https://github.com/uckkk/dsh-club-man-city) | 0 | 2026-08-19 | 2026-08-20 | 曼城 |
| 774 | [uckkk/dsh-club-man-united](https://github.com/uckkk/dsh-club-man-united) | 0 | 2026-08-19 | 2026-08-20 | 曼联 |
| 775 | [uckkk/dsh-club-milan](https://github.com/uckkk/dsh-club-milan) | 0 | 2026-08-20 | 2026-08-20 | AC米兰 |
| 776 | [uckkk/dsh-club-porto](https://github.com/uckkk/dsh-club-porto) | 0 | 2026-08-20 | 2026-08-20 | 波尔图 |
| 777 | [uckkk/dsh-club-psg](https://github.com/uckkk/dsh-club-psg) | 0 | 2026-08-20 | 2026-08-20 | 巴黎圣日耳曼 |
| 778 | [uckkk/dsh-club-real-madrid](https://github.com/uckkk/dsh-club-real-madrid) | 0 | 2026-08-19 | 2026-08-20 | 皇家马德里 |
| 779 | [uckkk/dsh-club-river](https://github.com/uckkk/dsh-club-river) | 0 | 2026-08-20 | 2026-08-20 | 河床 |
| 780 | [uckkk/dsh-cocktail-ratio](https://github.com/uckkk/dsh-cocktail-ratio) | 0 | 2026-08-20 | 2026-08-20 | 调酒比例 |
| 781 | [uckkk/dsh-coffee-ratio](https://github.com/uckkk/dsh-coffee-ratio) | 0 | 2026-08-20 | 2026-08-20 | 咖啡粉水比 |
| 782 | [uckkk/dsh-coffee-temp](https://github.com/uckkk/dsh-coffee-temp) | 0 | 2026-08-20 | 2026-08-20 | 咖啡水温 |
| 783 | [uckkk/dsh-collatz](https://github.com/uckkk/dsh-collatz) | 0 | 2026-08-19 | 2026-08-20 | 考拉兹序列 |
| 784 | [uckkk/dsh-column](https://github.com/uckkk/dsh-column) | 0 | 2026-08-19 | 2026-08-20 | 列格式化 |
| 785 | [uckkk/dsh-comoros](https://github.com/uckkk/dsh-comoros) | 0 | 2026-08-20 | 2026-08-20 | 科摩罗国 |
| 786 | [uckkk/dsh-compound-interest](https://github.com/uckkk/dsh-compound-interest) | 0 | 2026-08-20 | 2026-08-20 | 复利计算器 |
| 787 | [uckkk/dsh-cone](https://github.com/uckkk/dsh-cone) | 0 | 2026-08-19 | 2026-08-20 | 圆锥计算 |
| 788 | [uckkk/dsh-consumer-loan](https://github.com/uckkk/dsh-consumer-loan) | 0 | 2026-08-20 | 2026-08-20 | 消费贷月供 |
| 789 | [uckkk/dsh-contract-unlimited](https://github.com/uckkk/dsh-contract-unlimited) | 0 | 2026-08-20 | 2026-08-20 | 无固定期限合同判断 |
| 790 | [uckkk/dsh-cookie](https://github.com/uckkk/dsh-cookie) | 0 | 2026-08-19 | 2026-08-20 | Cookie 解析 |
| 791 | [uckkk/dsh-cosmetics-shelf](https://github.com/uckkk/dsh-cosmetics-shelf) | 0 | 2026-08-20 | 2026-08-20 | 化妆品保质期 |
| 792 | [uckkk/dsh-countdown](https://github.com/uckkk/dsh-countdown) | 0 | 2026-08-19 | 2026-08-20 | 倒计时 |
| 793 | [uckkk/dsh-counter-height](https://github.com/uckkk/dsh-counter-height) | 0 | 2026-08-20 | 2026-08-20 | 台面高度 |
| 794 | [uckkk/dsh-coupon-opt](https://github.com/uckkk/dsh-coupon-opt) | 0 | 2026-08-20 | 2026-08-20 | 优惠券判断 |
| 795 | [uckkk/dsh-coupon-profit](https://github.com/uckkk/dsh-coupon-profit) | 0 | 2026-08-20 | 2026-08-20 | 优惠券后毛利 |
| 796 | [uckkk/dsh-crop-factor](https://github.com/uckkk/dsh-crop-factor) | 0 | 2026-08-20 | 2026-08-20 | 等效焦距换算 |
| 797 | [uckkk/dsh-csv-parse](https://github.com/uckkk/dsh-csv-parse) | 0 | 2026-08-19 | 2026-08-20 | 健壮 CSV 解析器 |
| 798 | [uckkk/dsh-ctr-significance](https://github.com/uckkk/dsh-ctr-significance) | 0 | 2026-08-20 | 2026-08-20 | 转化率显著性 |
| 799 | [uckkk/dsh-ctr-split](https://github.com/uckkk/dsh-ctr-split) | 0 | 2026-08-20 | 2026-08-20 | 点击率拆解 |
| 800 | [uckkk/dsh-cube](https://github.com/uckkk/dsh-cube) | 0 | 2026-08-19 | 2026-08-20 | 立方体计算 |
| 801 | [uckkk/dsh-cuid](https://github.com/uckkk/dsh-cuid) | 0 | 2026-08-19 | 2026-08-20 | CUID 生成 |
| 802 | [uckkk/dsh-currency](https://github.com/uckkk/dsh-currency) | 0 | 2026-08-19 | 2026-08-20 | 货币格式化与换算 |
| 803 | [uckkk/dsh-current-calc](https://github.com/uckkk/dsh-current-calc) | 0 | 2026-08-20 | 2026-08-20 | 电流计算 |
| 804 | [uckkk/dsh-cylinder](https://github.com/uckkk/dsh-cylinder) | 0 | 2026-08-19 | 2026-08-20 | 圆柱计算 |
| 805 | [uckkk/dsh-daily-calorie](https://github.com/uckkk/dsh-daily-calorie) | 0 | 2026-08-20 | 2026-08-20 | 每日热量需求 |
| 806 | [uckkk/dsh-data-rate](https://github.com/uckkk/dsh-data-rate) | 0 | 2026-08-20 | 2026-08-20 | 网速换算 |
| 807 | [uckkk/dsh-date-format](https://github.com/uckkk/dsh-date-format) | 0 | 2026-08-19 | 2026-08-20 | 日期格式化 |
| 808 | [uckkk/dsh-day-of-year](https://github.com/uckkk/dsh-day-of-year) | 0 | 2026-08-19 | 2026-08-20 | 年内第几天 |
| 809 | [uckkk/dsh-deep-clone](https://github.com/uckkk/dsh-deep-clone) | 0 | 2026-08-19 | 2026-08-20 | 深拷贝 |
| 810 | [uckkk/dsh-deep-equal](https://github.com/uckkk/dsh-deep-equal) | 0 | 2026-08-19 | 2026-08-20 | 深比较 |
| 811 | [uckkk/dsh-depth-of-field](https://github.com/uckkk/dsh-depth-of-field) | 0 | 2026-08-20 | 2026-08-20 | 景深计算器 |
| 812 | [uckkk/dsh-detergent-dose](https://github.com/uckkk/dsh-detergent-dose) | 0 | 2026-08-20 | 2026-08-20 | 洗衣液用量 |
| 813 | [uckkk/dsh-deworm](https://github.com/uckkk/dsh-deworm) | 0 | 2026-08-20 | 2026-08-20 | 驱虫计划 |
| 814 | [uckkk/dsh-diaper-size](https://github.com/uckkk/dsh-diaper-size) | 0 | 2026-08-20 | 2026-08-20 | 纸尿裤尺码 |
| 815 | [uckkk/dsh-difference](https://github.com/uckkk/dsh-difference) | 0 | 2026-08-19 | 2026-08-20 | 集合差集 |
| 816 | [uckkk/dsh-distance-2d](https://github.com/uckkk/dsh-distance-2d) | 0 | 2026-08-19 | 2026-08-20 | 两点距离 |
| 817 | [uckkk/dsh-divisor-count](https://github.com/uckkk/dsh-divisor-count) | 0 | 2026-08-19 | 2026-08-20 | 因子个数 |
| 818 | [uckkk/dsh-dog-beagle](https://github.com/uckkk/dsh-dog-beagle) | 0 | 2026-08-20 | 2026-08-20 | 比格犬 |
| 819 | [uckkk/dsh-dog-bulldog](https://github.com/uckkk/dsh-dog-bulldog) | 0 | 2026-08-20 | 2026-08-20 | 斗牛犬 |
| 820 | [uckkk/dsh-dog-chihuahua](https://github.com/uckkk/dsh-dog-chihuahua) | 0 | 2026-08-20 | 2026-08-20 | 吉娃娃 |
| 821 | [uckkk/dsh-dog-chow-chow](https://github.com/uckkk/dsh-dog-chow-chow) | 0 | 2026-08-20 | 2026-08-20 | 松狮 |
| 822 | [uckkk/dsh-dog-corgi](https://github.com/uckkk/dsh-dog-corgi) | 0 | 2026-08-20 | 2026-08-20 | 柯基 |
| 823 | [uckkk/dsh-dog-french-bulldog](https://github.com/uckkk/dsh-dog-french-bulldog) | 0 | 2026-08-19 | 2026-08-20 | 法斗 |
| 824 | [uckkk/dsh-dog-german-shepherd](https://github.com/uckkk/dsh-dog-german-shepherd) | 0 | 2026-08-19 | 2026-08-20 | 德国牧羊犬 |
| 825 | [uckkk/dsh-dog-golden](https://github.com/uckkk/dsh-dog-golden) | 0 | 2026-08-19 | 2026-08-20 | 金毛 |
| 826 | [uckkk/dsh-dog-labrador](https://github.com/uckkk/dsh-dog-labrador) | 0 | 2026-08-19 | 2026-08-20 | 拉布拉多 |
| 827 | [uckkk/dsh-dog-poodle](https://github.com/uckkk/dsh-dog-poodle) | 0 | 2026-08-20 | 2026-08-20 | 贵宾犬 |
| 828 | [uckkk/dsh-dog-pug](https://github.com/uckkk/dsh-dog-pug) | 0 | 2026-08-20 | 2026-08-20 | 巴哥 |
| 829 | [uckkk/dsh-dog-rottweiler](https://github.com/uckkk/dsh-dog-rottweiler) | 0 | 2026-08-20 | 2026-08-20 | 罗威纳 |
| 830 | [uckkk/dsh-dog-samoyed](https://github.com/uckkk/dsh-dog-samoyed) | 0 | 2026-08-20 | 2026-08-20 | 萨摩耶 |
| 831 | [uckkk/dsh-dog-shiba](https://github.com/uckkk/dsh-dog-shiba) | 0 | 2026-08-20 | 2026-08-20 | 柴犬 |
| 832 | [uckkk/dsh-dog-siberian-husky](https://github.com/uckkk/dsh-dog-siberian-husky) | 0 | 2026-08-20 | 2026-08-20 | 哈士奇 |
| 833 | [uckkk/dsh-domain](https://github.com/uckkk/dsh-domain) | 0 | 2026-08-19 | 2026-08-20 | 域名解析 |
| 834 | [uckkk/dsh-dotenv](https://github.com/uckkk/dsh-dotenv) | 0 | 2026-08-19 | 2026-08-20 | .env 解析与序列化 |
| 835 | [uckkk/dsh-dough-hydration](https://github.com/uckkk/dsh-dough-hydration) | 0 | 2026-08-20 | 2026-08-20 | 面团含水量 |
| 836 | [uckkk/dsh-dry-guide](https://github.com/uckkk/dsh-dry-guide) | 0 | 2026-08-20 | 2026-08-20 | 晾晒烘干指南 |
| 837 | [uckkk/dsh-egg-size](https://github.com/uckkk/dsh-egg-size) | 0 | 2026-08-20 | 2026-08-20 | 鸡蛋大小 |
| 838 | [uckkk/dsh-electricity-bill](https://github.com/uckkk/dsh-electricity-bill) | 0 | 2026-08-20 | 2026-08-20 | 阶梯电费计算 |
| 839 | [uckkk/dsh-ellipse](https://github.com/uckkk/dsh-ellipse) | 0 | 2026-08-19 | 2026-08-20 | 椭圆面积 |
| 840 | [uckkk/dsh-ellipsis](https://github.com/uckkk/dsh-ellipsis) | 0 | 2026-08-19 | 2026-08-20 | 省略缩写 |
| 841 | [uckkk/dsh-email-length](https://github.com/uckkk/dsh-email-length) | 0 | 2026-08-20 | 2026-08-20 | 邮件字数建议 |
| 842 | [uckkk/dsh-euler-totient](https://github.com/uckkk/dsh-euler-totient) | 0 | 2026-08-19 | 2026-08-20 | 欧拉函数 |
| 843 | [uckkk/dsh-ev-range](https://github.com/uckkk/dsh-ev-range) | 0 | 2026-08-20 | 2026-08-20 | 电动车续航估算 |
| 844 | [uckkk/dsh-ev-vs-fuel](https://github.com/uckkk/dsh-ev-vs-fuel) | 0 | 2026-08-20 | 2026-08-20 | 油车电车成本对比 |
| 845 | [uckkk/dsh-exam-timing](https://github.com/uckkk/dsh-exam-timing) | 0 | 2026-08-20 | 2026-08-20 | 考试时间分配 |
| 846 | [uckkk/dsh-exercise-calories](https://github.com/uckkk/dsh-exercise-calories) | 0 | 2026-08-20 | 2026-08-20 | 运动消耗计算 |
| 847 | [uckkk/dsh-exposure-calc](https://github.com/uckkk/dsh-exposure-calc) | 0 | 2026-08-20 | 2026-08-20 | 曝光组合计算 |
| 848 | [uckkk/dsh-factorial](https://github.com/uckkk/dsh-factorial) | 0 | 2026-08-19 | 2026-08-20 | 阶乘 |
| 849 | [uckkk/dsh-fertilizer-npk](https://github.com/uckkk/dsh-fertilizer-npk) | 0 | 2026-08-20 | 2026-08-20 | 施肥NPK配比 |
| 850 | [uckkk/dsh-fibonacci](https://github.com/uckkk/dsh-fibonacci) | 0 | 2026-08-19 | 2026-08-20 | 斐波那契 |
| 851 | [uckkk/dsh-figure-alexander](https://github.com/uckkk/dsh-figure-alexander) | 0 | 2026-08-20 | 2026-08-20 | 亚历山大大帝 |
| 852 | [uckkk/dsh-figure-caesar](https://github.com/uckkk/dsh-figure-caesar) | 0 | 2026-08-19 | 2026-08-20 | 凯撒 |
| 853 | [uckkk/dsh-figure-churchill](https://github.com/uckkk/dsh-figure-churchill) | 0 | 2026-08-20 | 2026-08-20 | 丘吉尔 |
| 854 | [uckkk/dsh-figure-cleopatra](https://github.com/uckkk/dsh-figure-cleopatra) | 0 | 2026-08-20 | 2026-08-20 | 克利奥帕特拉 |
| 855 | [uckkk/dsh-figure-confucius](https://github.com/uckkk/dsh-figure-confucius) | 0 | 2026-08-20 | 2026-08-20 | 孔子 |
| 856 | [uckkk/dsh-figure-elizabeth1](https://github.com/uckkk/dsh-figure-elizabeth1) | 0 | 2026-08-20 | 2026-08-20 | 伊丽莎白一世 |
| 857 | [uckkk/dsh-figure-gandhi](https://github.com/uckkk/dsh-figure-gandhi) | 0 | 2026-08-20 | 2026-08-20 | 甘地 |
| 858 | [uckkk/dsh-figure-genghis](https://github.com/uckkk/dsh-figure-genghis) | 0 | 2026-08-20 | 2026-08-20 | 成吉思汗 |
| 859 | [uckkk/dsh-figure-lincoln](https://github.com/uckkk/dsh-figure-lincoln) | 0 | 2026-08-20 | 2026-08-20 | 林肯 |
| 860 | [uckkk/dsh-figure-mao](https://github.com/uckkk/dsh-figure-mao) | 0 | 2026-08-20 | 2026-08-20 | 毛泽东 |
| 861 | [uckkk/dsh-figure-napoleon](https://github.com/uckkk/dsh-figure-napoleon) | 0 | 2026-08-20 | 2026-08-20 | 拿破仑 |
| 862 | [uckkk/dsh-figure-nelson](https://github.com/uckkk/dsh-figure-nelson) | 0 | 2026-08-20 | 2026-08-20 | 纳尔逊 |
| 863 | [uckkk/dsh-figure-petra1](https://github.com/uckkk/dsh-figure-petra1) | 0 | 2026-08-20 | 2026-08-20 | 彼得大帝 |
| 864 | [uckkk/dsh-figure-qinshihuang](https://github.com/uckkk/dsh-figure-qinshihuang) | 0 | 2026-08-19 | 2026-08-20 | 秦始皇 |
| 865 | [uckkk/dsh-figure-wu-zetian](https://github.com/uckkk/dsh-figure-wu-zetian) | 0 | 2026-08-20 | 2026-08-20 | 武则天 |
| 866 | [uckkk/dsh-figure-zhukov](https://github.com/uckkk/dsh-figure-zhukov) | 0 | 2026-08-20 | 2026-08-20 | 朱可夫 |
| 867 | [uckkk/dsh-first-maintenance](https://github.com/uckkk/dsh-first-maintenance) | 0 | 2026-08-20 | 2026-08-20 | 首保提醒 |
| 868 | [uckkk/dsh-flash-gn](https://github.com/uckkk/dsh-flash-gn) | 0 | 2026-08-20 | 2026-08-20 | 闪光灯GN计算 |
| 869 | [uckkk/dsh-flatten](https://github.com/uckkk/dsh-flatten) | 0 | 2026-08-19 | 2026-08-20 | 数组扁平化 |
| 870 | [uckkk/dsh-flight-luggage](https://github.com/uckkk/dsh-flight-luggage) | 0 | 2026-08-20 | 2026-08-20 | 行李额度参考 |
| 871 | [uckkk/dsh-flour-swap](https://github.com/uckkk/dsh-flour-swap) | 0 | 2026-08-20 | 2026-08-20 | 面粉替代 |
| 872 | [uckkk/dsh-fluorine](https://github.com/uckkk/dsh-fluorine) | 0 | 2026-08-19 | 2026-08-20 | 氟元素 |
| 873 | [uckkk/dsh-follower-goal](https://github.com/uckkk/dsh-follower-goal) | 0 | 2026-08-20 | 2026-08-20 | 涨粉目标拆解 |
| 874 | [uckkk/dsh-food-transition](https://github.com/uckkk/dsh-food-transition) | 0 | 2026-08-20 | 2026-08-20 | 换粮过渡 |
| 875 | [uckkk/dsh-foundation-dose](https://github.com/uckkk/dsh-foundation-dose) | 0 | 2026-08-20 | 2026-08-20 | 粉底用量 |
| 876 | [uckkk/dsh-fuel-cost](https://github.com/uckkk/dsh-fuel-cost) | 0 | 2026-08-20 | 2026-08-20 | 油耗成本计算 |
| 877 | [uckkk/dsh-fx-convert](https://github.com/uckkk/dsh-fx-convert) | 0 | 2026-08-20 | 2026-08-20 | 汇率换算 |
| 878 | [uckkk/dsh-fx-live](https://github.com/uckkk/dsh-fx-live) | 0 | 2026-08-20 | 2026-08-20 | 实时汇率换算 |
| 879 | [uckkk/dsh-gambia](https://github.com/uckkk/dsh-gambia) | 0 | 2026-08-20 | 2026-08-20 | 冈比亚国 |
| 880 | [uckkk/dsh-gaokao-split](https://github.com/uckkk/dsh-gaokao-split) | 0 | 2026-08-20 | 2026-08-20 | 备考时间拆解 |
| 881 | [uckkk/dsh-gcd](https://github.com/uckkk/dsh-gcd) | 0 | 2026-08-19 | 2026-08-20 | 最大公约数 |
| 882 | [uckkk/dsh-geometric-series](https://github.com/uckkk/dsh-geometric-series) | 0 | 2026-08-19 | 2026-08-20 | 等比数列 |
| 883 | [uckkk/dsh-github-live](https://github.com/uckkk/dsh-github-live) | 0 | 2026-08-20 | 2026-08-20 | GitHub仓库信息 |
| 884 | [uckkk/dsh-glob](https://github.com/uckkk/dsh-glob) | 0 | 2026-08-19 | 2026-08-20 | Glob 模式匹配工具 |
| 885 | [uckkk/dsh-gold-live](https://github.com/uckkk/dsh-gold-live) | 0 | 2026-08-20 | 2026-08-20 | 实时金价 |
| 886 | [uckkk/dsh-goldbach](https://github.com/uckkk/dsh-goldbach) | 0 | 2026-08-19 | 2026-08-20 | 哥德巴赫分解 |
| 887 | [uckkk/dsh-gpa-calc](https://github.com/uckkk/dsh-gpa-calc) | 0 | 2026-08-20 | 2026-08-20 | GPA换算 |
| 888 | [uckkk/dsh-gradient](https://github.com/uckkk/dsh-gradient) | 0 | 2026-08-19 | 2026-08-20 | 渐变色 |
| 889 | [uckkk/dsh-graduate-exam](https://github.com/uckkk/dsh-graduate-exam) | 0 | 2026-08-20 | 2026-08-20 | 考研过线判断 |
| 890 | [uckkk/dsh-gross-margin](https://github.com/uckkk/dsh-gross-margin) | 0 | 2026-08-20 | 2026-08-20 | 毛利率计算 |
| 891 | [uckkk/dsh-group](https://github.com/uckkk/dsh-group) | 0 | 2026-08-19 | 2026-08-20 | 数组分组 |
| 892 | [uckkk/dsh-group-buy](https://github.com/uckkk/dsh-group-buy) | 0 | 2026-08-20 | 2026-08-20 | 拼单团购 |
| 893 | [uckkk/dsh-group-by](https://github.com/uckkk/dsh-group-by) | 0 | 2026-08-19 | 2026-08-20 | 按键分组 |
| 894 | [uckkk/dsh-grout-calc](https://github.com/uckkk/dsh-grout-calc) | 0 | 2026-08-20 | 2026-08-20 | 美缝剂用量 |
| 895 | [uckkk/dsh-guid](https://github.com/uckkk/dsh-guid) | 0 | 2026-08-19 | 2026-08-20 | GUID 生成 |
| 896 | [uckkk/dsh-guinea-bissau](https://github.com/uckkk/dsh-guinea-bissau) | 0 | 2026-08-20 | 2026-08-20 | 几内亚比绍国 |
| 897 | [uckkk/dsh-hair-wash](https://github.com/uckkk/dsh-hair-wash) | 0 | 2026-08-20 | 2026-08-20 | 洗头频率 |
| 898 | [uckkk/dsh-harmonic](https://github.com/uckkk/dsh-harmonic) | 0 | 2026-08-19 | 2026-08-20 | 调和级数 |
| 899 | [uckkk/dsh-hashid](https://github.com/uckkk/dsh-hashid) | 0 | 2026-08-19 | 2026-08-20 | Hash ID |
| 900 | [uckkk/dsh-heart-rate](https://github.com/uckkk/dsh-heart-rate) | 0 | 2026-08-20 | 2026-08-20 | 运动心率区间 |
| 901 | [uckkk/dsh-helium](https://github.com/uckkk/dsh-helium) | 0 | 2026-08-19 | 2026-08-20 | 氦元素 |
| 902 | [uckkk/dsh-hongbao](https://github.com/uckkk/dsh-hongbao) | 0 | 2026-08-20 | 2026-08-20 | 红包计算 |
| 903 | [uckkk/dsh-hotel-tax](https://github.com/uckkk/dsh-hotel-tax) | 0 | 2026-08-20 | 2026-08-20 | 酒店税费计算 |
| 904 | [uckkk/dsh-html-decode](https://github.com/uckkk/dsh-html-decode) | 0 | 2026-08-19 | 2026-08-20 | HTML 反转义 |
| 905 | [uckkk/dsh-html-to-markdown](https://github.com/uckkk/dsh-html-to-markdown) | 0 | 2026-08-19 | 2026-08-20 | HTML 转 Markdown |
| 906 | [uckkk/dsh-humidity](https://github.com/uckkk/dsh-humidity) | 0 | 2026-08-20 | 2026-08-20 | 湿度参考 |
| 907 | [uckkk/dsh-hydrogen](https://github.com/uckkk/dsh-hydrogen) | 0 | 2026-08-19 | 2026-08-20 | 氢元素 |
| 908 | [uckkk/dsh-hydroponics](https://github.com/uckkk/dsh-hydroponics) | 0 | 2026-08-20 | 2026-08-20 | 水培营养液配比 |
| 909 | [uckkk/dsh-indent](https://github.com/uckkk/dsh-indent) | 0 | 2026-08-19 | 2026-08-20 | 缩进文本 |
| 910 | [uckkk/dsh-index-live](https://github.com/uckkk/dsh-index-live) | 0 | 2026-08-20 | 2026-08-20 | 大盘指数行情 |
| 911 | [uckkk/dsh-initials](https://github.com/uckkk/dsh-initials) | 0 | 2026-08-19 | 2026-08-20 | 首字母缩写 |
| 912 | [uckkk/dsh-inspection](https://github.com/uckkk/dsh-inspection) | 0 | 2026-08-20 | 2026-08-20 | 年检周期 |
| 913 | [uckkk/dsh-insurance-estimate](https://github.com/uckkk/dsh-insurance-estimate) | 0 | 2026-08-20 | 2026-08-20 | 车险费用估算 |
| 914 | [uckkk/dsh-inventory-turnover](https://github.com/uckkk/dsh-inventory-turnover) | 0 | 2026-08-20 | 2026-08-20 | 库存周转 |
| 915 | [uckkk/dsh-ip-live](https://github.com/uckkk/dsh-ip-live) | 0 | 2026-08-20 | 2026-08-20 | 公网IP归属地 |
| 916 | [uckkk/dsh-is-coprime](https://github.com/uckkk/dsh-is-coprime) | 0 | 2026-08-19 | 2026-08-20 | 互质判断 |
| 917 | [uckkk/dsh-iso8601](https://github.com/uckkk/dsh-iso8601) | 0 | 2026-08-19 | 2026-08-20 | ISO8601 转换 |
| 918 | [uckkk/dsh-json-pointer](https://github.com/uckkk/dsh-json-pointer) | 0 | 2026-08-19 | 2026-08-20 | JSON Pointer |
| 919 | [uckkk/dsh-json5](https://github.com/uckkk/dsh-json5) | 0 | 2026-08-19 | 2026-08-20 | JSON5 解析与序列化 |
| 920 | [uckkk/dsh-jsonl](https://github.com/uckkk/dsh-jsonl) | 0 | 2026-08-19 | 2026-08-20 | JSONL 转换 |
| 921 | [uckkk/dsh-kebabcase](https://github.com/uckkk/dsh-kebabcase) | 0 | 2026-08-19 | 2026-08-20 | 短横线命名 |
| 922 | [uckkk/dsh-key-by](https://github.com/uckkk/dsh-key-by) | 0 | 2026-08-19 | 2026-08-20 | 按键索引 |
| 923 | [uckkk/dsh-keyword-extract](https://github.com/uckkk/dsh-keyword-extract) | 0 | 2026-08-19 | 2026-08-20 | 关键词提取 |
| 924 | [uckkk/dsh-kpi-reach](https://github.com/uckkk/dsh-kpi-reach) | 0 | 2026-08-20 | 2026-08-20 | KPI缺口拆解 |
| 925 | [uckkk/dsh-lamp-count](https://github.com/uckkk/dsh-lamp-count) | 0 | 2026-08-20 | 2026-08-20 | 灯具数量 |
| 926 | [uckkk/dsh-laundry-temp](https://github.com/uckkk/dsh-laundry-temp) | 0 | 2026-08-20 | 2026-08-20 | 洗涤水温 |
| 927 | [uckkk/dsh-lcm](https://github.com/uckkk/dsh-lcm) | 0 | 2026-08-19 | 2026-08-20 | 最小公倍数 |
| 928 | [uckkk/dsh-leap-year](https://github.com/uckkk/dsh-leap-year) | 0 | 2026-08-19 | 2026-08-20 | 闰年判断 |
| 929 | [uckkk/dsh-leave-days](https://github.com/uckkk/dsh-leave-days) | 0 | 2026-08-20 | 2026-08-20 | 年假天数 |
| 930 | [uckkk/dsh-led-circuit](https://github.com/uckkk/dsh-led-circuit) | 0 | 2026-08-20 | 2026-08-20 | 照明回路计算 |
| 931 | [uckkk/dsh-liberia](https://github.com/uckkk/dsh-liberia) | 0 | 2026-08-20 | 2026-08-20 | 利比里亚国 |
| 932 | [uckkk/dsh-liechtenstein](https://github.com/uckkk/dsh-liechtenstein) | 0 | 2026-08-19 | 2026-08-20 | 列支敦士登国 |
| 933 | [uckkk/dsh-light-need](https://github.com/uckkk/dsh-light-need) | 0 | 2026-08-20 | 2026-08-20 | 光照需求参考 |
| 934 | [uckkk/dsh-listing-price](https://github.com/uckkk/dsh-listing-price) | 0 | 2026-08-20 | 2026-08-20 | 定价策略 |
| 935 | [uckkk/dsh-lithium](https://github.com/uckkk/dsh-lithium) | 0 | 2026-08-19 | 2026-08-20 | 锂元素 |
| 936 | [uckkk/dsh-live-stream](https://github.com/uckkk/dsh-live-stream) | 0 | 2026-08-20 | 2026-08-20 | 直播带货拆解 |
| 937 | [uckkk/dsh-load-estimate](https://github.com/uckkk/dsh-load-estimate) | 0 | 2026-08-20 | 2026-08-20 | 用电负荷估算 |
| 938 | [uckkk/dsh-log-any](https://github.com/uckkk/dsh-log-any) | 0 | 2026-08-19 | 2026-08-20 | 任意底对数 |
| 939 | [uckkk/dsh-lowercase](https://github.com/uckkk/dsh-lowercase) | 0 | 2026-08-19 | 2026-08-20 | 小写转换 |
| 940 | [uckkk/dsh-lpr-convert](https://github.com/uckkk/dsh-lpr-convert) | 0 | 2026-08-20 | 2026-08-20 | LPR加点换算 |
| 941 | [uckkk/dsh-luggage-weight](https://github.com/uckkk/dsh-luggage-weight) | 0 | 2026-08-20 | 2026-08-20 | 行李超重计算 |
| 942 | [uckkk/dsh-luminance](https://github.com/uckkk/dsh-luminance) | 0 | 2026-08-19 | 2026-08-20 | 相对亮度 |
| 943 | [uckkk/dsh-mandarin-grade](https://github.com/uckkk/dsh-mandarin-grade) | 0 | 2026-08-20 | 2026-08-20 | 普通话等级 |
| 944 | [uckkk/dsh-marathon-pace](https://github.com/uckkk/dsh-marathon-pace) | 0 | 2026-08-20 | 2026-08-20 | 马拉松配速 |
| 945 | [uckkk/dsh-markdown-to-html](https://github.com/uckkk/dsh-markdown-to-html) | 0 | 2026-08-19 | 2026-08-20 | Markdown 转 HTML |
| 946 | [uckkk/dsh-mask-frequency](https://github.com/uckkk/dsh-mask-frequency) | 0 | 2026-08-20 | 2026-08-20 | 面膜频率 |
| 947 | [uckkk/dsh-mauritius](https://github.com/uckkk/dsh-mauritius) | 0 | 2026-08-20 | 2026-08-20 | 毛里求斯国 |
| 948 | [uckkk/dsh-max](https://github.com/uckkk/dsh-max) | 0 | 2026-08-19 | 2026-08-20 | 最大值 |
| 949 | [uckkk/dsh-median](https://github.com/uckkk/dsh-median) | 0 | 2026-08-19 | 2026-08-20 | 中位数 |
| 950 | [uckkk/dsh-meeting-cost](https://github.com/uckkk/dsh-meeting-cost) | 0 | 2026-08-20 | 2026-08-20 | 会议成本计算 |
| 951 | [uckkk/dsh-microwave-time](https://github.com/uckkk/dsh-microwave-time) | 0 | 2026-08-20 | 2026-08-20 | 微波时间换算 |
| 952 | [uckkk/dsh-midpoint](https://github.com/uckkk/dsh-midpoint) | 0 | 2026-08-19 | 2026-08-20 | 中点计算 |
| 953 | [uckkk/dsh-min](https://github.com/uckkk/dsh-min) | 0 | 2026-08-19 | 2026-08-20 | 最小值 |
| 954 | [uckkk/dsh-minify](https://github.com/uckkk/dsh-minify) | 0 | 2026-08-19 | 2026-08-20 | JS/CSS/HTML 代码压缩 |
| 955 | [uckkk/dsh-mobius](https://github.com/uckkk/dsh-mobius) | 0 | 2026-08-19 | 2026-08-20 | 莫比乌斯函数 |
| 956 | [uckkk/dsh-mode](https://github.com/uckkk/dsh-mode) | 0 | 2026-08-19 | 2026-08-20 | 众数 |
| 957 | [uckkk/dsh-monaco](https://github.com/uckkk/dsh-monaco) | 0 | 2026-08-19 | 2026-08-20 | 摩纳哥国 |
| 958 | [uckkk/dsh-monitor-ppi](https://github.com/uckkk/dsh-monitor-ppi) | 0 | 2026-08-20 | 2026-08-20 | 显示器PPI |
| 959 | [uckkk/dsh-month-name](https://github.com/uckkk/dsh-month-name) | 0 | 2026-08-19 | 2026-08-20 | 月份名称 |
| 960 | [uckkk/dsh-morse](https://github.com/uckkk/dsh-morse) | 0 | 2026-08-19 | 2026-08-20 | 摩尔斯电码编解码 |
| 961 | [uckkk/dsh-mortgage-equal-installment](https://github.com/uckkk/dsh-mortgage-equal-installment) | 0 | 2026-08-20 | 2026-08-20 | 等额本息房贷计算器 |
| 962 | [uckkk/dsh-mortgage-equal-principal](https://github.com/uckkk/dsh-mortgage-equal-principal) | 0 | 2026-08-20 | 2026-08-20 | 等额本金房贷计算器 |
| 963 | [uckkk/dsh-motor-current](https://github.com/uckkk/dsh-motor-current) | 0 | 2026-08-20 | 2026-08-20 | 电机电流计算 |
| 964 | [uckkk/dsh-nail-trim](https://github.com/uckkk/dsh-nail-trim) | 0 | 2026-08-20 | 2026-08-20 | 剪指甲周期 |
| 965 | [uckkk/dsh-nanoid](https://github.com/uckkk/dsh-nanoid) | 0 | 2026-08-19 | 2026-08-20 | Nano ID 生成器（crypto 安全随机） |
| 966 | [uckkk/dsh-nba-lakers](https://github.com/uckkk/dsh-nba-lakers) | 0 | 2026-08-20 | 2026-08-20 | 湖人 |
| 967 | [uckkk/dsh-nd-filter](https://github.com/uckkk/dsh-nd-filter) | 0 | 2026-08-20 | 2026-08-20 | ND滤镜快门计算 |
| 968 | [uckkk/dsh-ndjson](https://github.com/uckkk/dsh-ndjson) | 0 | 2026-08-19 | 2026-08-20 | NDJSON 转换 |
| 969 | [uckkk/dsh-neon](https://github.com/uckkk/dsh-neon) | 0 | 2026-08-19 | 2026-08-20 | 氖元素 |
| 970 | [uckkk/dsh-newborn-care](https://github.com/uckkk/dsh-newborn-care) | 0 | 2026-08-20 | 2026-08-20 | 新生儿护理 |
| 971 | [uckkk/dsh-next-prime](https://github.com/uckkk/dsh-next-prime) | 0 | 2026-08-19 | 2026-08-20 | 下一个素数 |
| 972 | [uckkk/dsh-nitrogen](https://github.com/uckkk/dsh-nitrogen) | 0 | 2026-08-19 | 2026-08-20 | 氮元素 |
| 973 | [uckkk/dsh-noncompete-pay](https://github.com/uckkk/dsh-noncompete-pay) | 0 | 2026-08-20 | 2026-08-20 | 竞业限制补偿 |
| 974 | [uckkk/dsh-npm-live](https://github.com/uckkk/dsh-npm-live) | 0 | 2026-08-20 | 2026-08-20 | npm包最新版本 |
| 975 | [uckkk/dsh-nth-prime](https://github.com/uckkk/dsh-nth-prime) | 0 | 2026-08-19 | 2026-08-20 | 第 N 个素数 |
| 976 | [uckkk/dsh-nth-root](https://github.com/uckkk/dsh-nth-root) | 0 | 2026-08-19 | 2026-08-20 | N 次方根 |
| 977 | [uckkk/dsh-objectid](https://github.com/uckkk/dsh-objectid) | 0 | 2026-08-19 | 2026-08-20 | ObjectId 生成 |
| 978 | [uckkk/dsh-octal](https://github.com/uckkk/dsh-octal) | 0 | 2026-08-19 | 2026-08-20 | 八进制转换 |
| 979 | [uckkk/dsh-oil-change](https://github.com/uckkk/dsh-oil-change) | 0 | 2026-08-20 | 2026-08-20 | 换油周期 |
| 980 | [uckkk/dsh-okr-split](https://github.com/uckkk/dsh-okr-split) | 0 | 2026-08-20 | 2026-08-20 | OKR目标拆解 |
| 981 | [uckkk/dsh-omit](https://github.com/uckkk/dsh-omit) | 0 | 2026-08-19 | 2026-08-20 | 忽略字段 |
| 982 | [uckkk/dsh-one-rep-max](https://github.com/uckkk/dsh-one-rep-max) | 0 | 2026-08-20 | 2026-08-20 | 1RM估算 |
| 983 | [uckkk/dsh-option-intrinsic](https://github.com/uckkk/dsh-option-intrinsic) | 0 | 2026-08-20 | 2026-08-20 | 期权内在价值 |
| 984 | [uckkk/dsh-order-threshold](https://github.com/uckkk/dsh-order-threshold) | 0 | 2026-08-20 | 2026-08-20 | 凑单满减 |
| 985 | [uckkk/dsh-oven-convert](https://github.com/uckkk/dsh-oven-convert) | 0 | 2026-08-20 | 2026-08-20 | 烤箱温度换算 |
| 986 | [uckkk/dsh-overtime-limit](https://github.com/uckkk/dsh-overtime-limit) | 0 | 2026-08-20 | 2026-08-20 | 加班时长合规校验 |
| 987 | [uckkk/dsh-overtime-pay](https://github.com/uckkk/dsh-overtime-pay) | 0 | 2026-08-20 | 2026-08-20 | 加班费计算器 |
| 988 | [uckkk/dsh-oxygen](https://github.com/uckkk/dsh-oxygen) | 0 | 2026-08-19 | 2026-08-20 | 氧元素 |
| 989 | [uckkk/dsh-packing-list](https://github.com/uckkk/dsh-packing-list) | 0 | 2026-08-20 | 2026-08-20 | 打包清单 |
| 990 | [uckkk/dsh-paint-tint](https://github.com/uckkk/dsh-paint-tint) | 0 | 2026-08-20 | 2026-08-20 | 乳胶漆调色 |
| 991 | [uckkk/dsh-pascalcase](https://github.com/uckkk/dsh-pascalcase) | 0 | 2026-08-19 | 2026-08-20 | 帕斯卡命名 |
| 992 | [uckkk/dsh-percent-encode](https://github.com/uckkk/dsh-percent-encode) | 0 | 2026-08-19 | 2026-08-20 | 百分号编码 |
| 993 | [uckkk/dsh-pet-bath](https://github.com/uckkk/dsh-pet-bath) | 0 | 2026-08-20 | 2026-08-20 | 宠物洗澡频率 |
| 994 | [uckkk/dsh-pick](https://github.com/uckkk/dsh-pick) | 0 | 2026-08-19 | 2026-08-20 | 挑选字段 |
| 995 | [uckkk/dsh-pixel-print](https://github.com/uckkk/dsh-pixel-print) | 0 | 2026-08-20 | 2026-08-20 | 像素打印尺寸 |
| 996 | [uckkk/dsh-pizza-size](https://github.com/uckkk/dsh-pizza-size) | 0 | 2026-08-20 | 2026-08-20 | 披萨尺寸换算 |
| 997 | [uckkk/dsh-play-revenue](https://github.com/uckkk/dsh-play-revenue) | 0 | 2026-08-20 | 2026-08-20 | 播放收益估算 |
| 998 | [uckkk/dsh-pluck](https://github.com/uckkk/dsh-pluck) | 0 | 2026-08-19 | 2026-08-20 | 提取字段 |
| 999 | [uckkk/dsh-plug-type](https://github.com/uckkk/dsh-plug-type) | 0 | 2026-08-20 | 2026-08-20 | 电源插头查询 |
| 1000 | [uckkk/dsh-port](https://github.com/uckkk/dsh-port) | 0 | 2026-08-19 | 2026-08-20 | 端口检查 |
| 1001 | [uckkk/dsh-post-frequency](https://github.com/uckkk/dsh-post-frequency) | 0 | 2026-08-20 | 2026-08-20 | 更新频率建议 |
| 1002 | [uckkk/dsh-potting-mix](https://github.com/uckkk/dsh-potting-mix) | 0 | 2026-08-20 | 2026-08-20 | 配土方案 |
| 1003 | [uckkk/dsh-power-mod](https://github.com/uckkk/dsh-power-mod) | 0 | 2026-08-19 | 2026-08-20 | 模幂 |
| 1004 | [uckkk/dsh-ppt-pages](https://github.com/uckkk/dsh-ppt-pages) | 0 | 2026-08-20 | 2026-08-20 | PPT页数建议 |
| 1005 | [uckkk/dsh-pregnancy-week](https://github.com/uckkk/dsh-pregnancy-week) | 0 | 2026-08-20 | 2026-08-20 | 孕周预产期计算 |
| 1006 | [uckkk/dsh-prenatal-nutrition](https://github.com/uckkk/dsh-prenatal-nutrition) | 0 | 2026-08-20 | 2026-08-20 | 孕期营养 |
| 1007 | [uckkk/dsh-prime](https://github.com/uckkk/dsh-prime) | 0 | 2026-08-19 | 2026-08-20 | 素数判断 |
| 1008 | [uckkk/dsh-prime-factors](https://github.com/uckkk/dsh-prime-factors) | 0 | 2026-08-19 | 2026-08-20 | 质因数分解 |
| 1009 | [uckkk/dsh-print-dpi](https://github.com/uckkk/dsh-print-dpi) | 0 | 2026-08-20 | 2026-08-20 | 打印尺寸计算 |
| 1010 | [uckkk/dsh-probation-period](https://github.com/uckkk/dsh-probation-period) | 0 | 2026-08-20 | 2026-08-20 | 试用期上限 |
| 1011 | [uckkk/dsh-project-schedule](https://github.com/uckkk/dsh-project-schedule) | 0 | 2026-08-20 | 2026-08-20 | 项目排期估算 |
| 1012 | [uckkk/dsh-protein-intake](https://github.com/uckkk/dsh-protein-intake) | 0 | 2026-08-20 | 2026-08-20 | 蛋白质摄入计算 |
| 1013 | [uckkk/dsh-punycode](https://github.com/uckkk/dsh-punycode) | 0 | 2026-08-19 | 2026-08-20 | Punycode 转换 |
| 1014 | [uckkk/dsh-pypi-live](https://github.com/uckkk/dsh-pypi-live) | 0 | 2026-08-20 | 2026-08-20 | PyPI包最新版本 |
| 1015 | [uckkk/dsh-quadratic](https://github.com/uckkk/dsh-quadratic) | 0 | 2026-08-19 | 2026-08-20 | 二次方程 |
| 1016 | [uckkk/dsh-quartiles](https://github.com/uckkk/dsh-quartiles) | 0 | 2026-08-19 | 2026-08-20 | 四分位数 |
| 1017 | [uckkk/dsh-quote](https://github.com/uckkk/dsh-quote) | 0 | 2026-08-19 | 2026-08-20 | 添加引号 |
| 1018 | [uckkk/dsh-railfence](https://github.com/uckkk/dsh-railfence) | 0 | 2026-08-19 | 2026-08-20 | 栅栏密码 |
| 1019 | [uckkk/dsh-range](https://github.com/uckkk/dsh-range) | 0 | 2026-08-19 | 2026-08-20 | 生成范围 |
| 1020 | [uckkk/dsh-reading-time](https://github.com/uckkk/dsh-reading-time) | 0 | 2026-08-19 | 2026-08-20 | 阅读时间 |
| 1021 | [uckkk/dsh-rectangle](https://github.com/uckkk/dsh-rectangle) | 0 | 2026-08-19 | 2026-08-20 | 矩形计算 |
| 1022 | [uckkk/dsh-regular-polygon](https://github.com/uckkk/dsh-regular-polygon) | 0 | 2026-08-19 | 2026-08-20 | 正多边形 |
| 1023 | [uckkk/dsh-repeat](https://github.com/uckkk/dsh-repeat) | 0 | 2026-08-19 | 2026-08-20 | 重复字符串 |
| 1024 | [uckkk/dsh-repotting](https://github.com/uckkk/dsh-repotting) | 0 | 2026-08-20 | 2026-08-20 | 换盆建议 |
| 1025 | [uckkk/dsh-reptile-alligator](https://github.com/uckkk/dsh-reptile-alligator) | 0 | 2026-08-20 | 2026-08-20 | 短吻鳄 |
| 1026 | [uckkk/dsh-reptile-anaconda](https://github.com/uckkk/dsh-reptile-anaconda) | 0 | 2026-08-20 | 2026-08-20 | 水蚺 |
| 1027 | [uckkk/dsh-reptile-caiman](https://github.com/uckkk/dsh-reptile-caiman) | 0 | 2026-08-20 | 2026-08-20 | 凯门鳄 |
| 1028 | [uckkk/dsh-reptile-chameleon](https://github.com/uckkk/dsh-reptile-chameleon) | 0 | 2026-08-20 | 2026-08-20 | 变色龙 |
| 1029 | [uckkk/dsh-reptile-cobra](https://github.com/uckkk/dsh-reptile-cobra) | 0 | 2026-08-20 | 2026-08-20 | 眼镜蛇 |
| 1030 | [uckkk/dsh-reptile-gecko](https://github.com/uckkk/dsh-reptile-gecko) | 0 | 2026-08-20 | 2026-08-20 | 壁虎 |
| 1031 | [uckkk/dsh-reptile-iguana](https://github.com/uckkk/dsh-reptile-iguana) | 0 | 2026-08-20 | 2026-08-20 | 鬣蜥 |
| 1032 | [uckkk/dsh-reptile-monitor-lizard](https://github.com/uckkk/dsh-reptile-monitor-lizard) | 0 | 2026-08-20 | 2026-08-20 | 巨蜥 |
| 1033 | [uckkk/dsh-reptile-newt](https://github.com/uckkk/dsh-reptile-newt) | 0 | 2026-08-20 | 2026-08-20 | 欧螈 |
| 1034 | [uckkk/dsh-reptile-python](https://github.com/uckkk/dsh-reptile-python) | 0 | 2026-08-20 | 2026-08-20 | 蟒蛇 |
| 1035 | [uckkk/dsh-reptile-rattlesnake](https://github.com/uckkk/dsh-reptile-rattlesnake) | 0 | 2026-08-20 | 2026-08-20 | 响尾蛇 |
| 1036 | [uckkk/dsh-reptile-salamander](https://github.com/uckkk/dsh-reptile-salamander) | 0 | 2026-08-20 | 2026-08-20 | 蝾螈 |
| 1037 | [uckkk/dsh-reptile-terrapin](https://github.com/uckkk/dsh-reptile-terrapin) | 0 | 2026-08-20 | 2026-08-20 | 水龟 |
| 1038 | [uckkk/dsh-reptile-tortoise](https://github.com/uckkk/dsh-reptile-tortoise) | 0 | 2026-08-20 | 2026-08-20 | 陆龟 |
| 1039 | [uckkk/dsh-repurchase](https://github.com/uckkk/dsh-repurchase) | 0 | 2026-08-20 | 2026-08-20 | 复购率计算 |
| 1040 | [uckkk/dsh-rest-time](https://github.com/uckkk/dsh-rest-time) | 0 | 2026-08-20 | 2026-08-20 | 组间休息时间 |
| 1041 | [uckkk/dsh-revenue-plan](https://github.com/uckkk/dsh-revenue-plan) | 0 | 2026-08-20 | 2026-08-20 | 销售目标拆解 |
| 1042 | [uckkk/dsh-rice-water](https://github.com/uckkk/dsh-rice-water) | 0 | 2026-08-20 | 2026-08-20 | 煮饭米水比 |
| 1043 | [uckkk/dsh-road-trip-cost](https://github.com/uckkk/dsh-road-trip-cost) | 0 | 2026-08-20 | 2026-08-20 | 自驾费用估算 |
| 1044 | [uckkk/dsh-roast-time](https://github.com/uckkk/dsh-roast-time) | 0 | 2026-08-20 | 2026-08-20 | 烤箱时间估算 |
| 1045 | [uckkk/dsh-rot](https://github.com/uckkk/dsh-rot) | 0 | 2026-08-19 | 2026-08-20 | 字母位移 |
| 1046 | [uckkk/dsh-rot13](https://github.com/uckkk/dsh-rot13) | 0 | 2026-08-19 | 2026-08-20 | ROT13 位移 |
| 1047 | [uckkk/dsh-round](https://github.com/uckkk/dsh-round) | 0 | 2026-08-19 | 2026-08-20 | 四舍五入 |
| 1048 | [uckkk/dsh-running-pace](https://github.com/uckkk/dsh-running-pace) | 0 | 2026-08-20 | 2026-08-20 | 跑步配速计算 |
| 1049 | [uckkk/dsh-safe-shutter](https://github.com/uckkk/dsh-safe-shutter) | 0 | 2026-08-20 | 2026-08-20 | 安全快门 |
| 1050 | [uckkk/dsh-salary-deduction-limit](https://github.com/uckkk/dsh-salary-deduction-limit) | 0 | 2026-08-20 | 2026-08-20 | 工资扣除限额 |
| 1051 | [uckkk/dsh-san-marino](https://github.com/uckkk/dsh-san-marino) | 0 | 2026-08-19 | 2026-08-20 | 圣马力诺国 |
| 1052 | [uckkk/dsh-scientist-bohr](https://github.com/uckkk/dsh-scientist-bohr) | 0 | 2026-08-20 | 2026-08-20 | 玻尔 |
| 1053 | [uckkk/dsh-scientist-copernicus](https://github.com/uckkk/dsh-scientist-copernicus) | 0 | 2026-08-20 | 2026-08-20 | 哥白尼 |
| 1054 | [uckkk/dsh-scientist-curie](https://github.com/uckkk/dsh-scientist-curie) | 0 | 2026-08-20 | 2026-08-20 | 居里夫人 |
| 1055 | [uckkk/dsh-scientist-darwin](https://github.com/uckkk/dsh-scientist-darwin) | 0 | 2026-08-19 | 2026-08-20 | 达尔文 |
| 1056 | [uckkk/dsh-scientist-einstein](https://github.com/uckkk/dsh-scientist-einstein) | 0 | 2026-08-19 | 2026-08-20 | 爱因斯坦 |
| 1057 | [uckkk/dsh-scientist-euler](https://github.com/uckkk/dsh-scientist-euler) | 0 | 2026-08-20 | 2026-08-20 | 欧拉 |
| 1058 | [uckkk/dsh-scientist-faraday](https://github.com/uckkk/dsh-scientist-faraday) | 0 | 2026-08-20 | 2026-08-20 | 法拉第 |
| 1059 | [uckkk/dsh-scientist-feynman](https://github.com/uckkk/dsh-scientist-feynman) | 0 | 2026-08-20 | 2026-08-20 | 费曼 |
| 1060 | [uckkk/dsh-scientist-galileo](https://github.com/uckkk/dsh-scientist-galileo) | 0 | 2026-08-19 | 2026-08-20 | 伽利略 |
| 1061 | [uckkk/dsh-scientist-gauss](https://github.com/uckkk/dsh-scientist-gauss) | 0 | 2026-08-20 | 2026-08-20 | 高斯 |
| 1062 | [uckkk/dsh-scientist-hawking](https://github.com/uckkk/dsh-scientist-hawking) | 0 | 2026-08-20 | 2026-08-20 | 霍金 |
| 1063 | [uckkk/dsh-scientist-lovelace](https://github.com/uckkk/dsh-scientist-lovelace) | 0 | 2026-08-20 | 2026-08-20 | 阿达·洛夫莱斯 |
| 1064 | [uckkk/dsh-scientist-maxwell](https://github.com/uckkk/dsh-scientist-maxwell) | 0 | 2026-08-20 | 2026-08-20 | 麦克斯韦 |
| 1065 | [uckkk/dsh-scientist-mendeleev](https://github.com/uckkk/dsh-scientist-mendeleev) | 0 | 2026-08-20 | 2026-08-20 | 门捷列夫 |
| 1066 | [uckkk/dsh-scientist-newton](https://github.com/uckkk/dsh-scientist-newton) | 0 | 2026-08-19 | 2026-08-20 | 牛顿 |
| 1067 | [uckkk/dsh-scientist-pasteur](https://github.com/uckkk/dsh-scientist-pasteur) | 0 | 2026-08-20 | 2026-08-20 | 巴斯德 |
| 1068 | [uckkk/dsh-scientist-shannon](https://github.com/uckkk/dsh-scientist-shannon) | 0 | 2026-08-20 | 2026-08-20 | 香农 |
| 1069 | [uckkk/dsh-scientist-tesla](https://github.com/uckkk/dsh-scientist-tesla) | 0 | 2026-08-20 | 2026-08-20 | 特斯拉 |
| 1070 | [uckkk/dsh-scientist-turing](https://github.com/uckkk/dsh-scientist-turing) | 0 | 2026-08-20 | 2026-08-20 | 图灵 |
| 1071 | [uckkk/dsh-scientist-von-neumann](https://github.com/uckkk/dsh-scientist-von-neumann) | 0 | 2026-08-20 | 2026-08-20 | 冯·诺依曼 |
| 1072 | [uckkk/dsh-script-words](https://github.com/uckkk/dsh-script-words) | 0 | 2026-08-20 | 2026-08-20 | 口播稿字数 |
| 1073 | [uckkk/dsh-sd-capacity](https://github.com/uckkk/dsh-sd-capacity) | 0 | 2026-08-20 | 2026-08-20 | 录像存储容量 |
| 1074 | [uckkk/dsh-seed-depth](https://github.com/uckkk/dsh-seed-depth) | 0 | 2026-08-20 | 2026-08-20 | 播种深度 |
| 1075 | [uckkk/dsh-serum-concentration](https://github.com/uckkk/dsh-serum-concentration) | 0 | 2026-08-20 | 2026-08-20 | 精华浓度参考 |
| 1076 | [uckkk/dsh-severance-pay](https://github.com/uckkk/dsh-severance-pay) | 0 | 2026-08-20 | 2026-08-20 | 经济补偿金计算 |
| 1077 | [uckkk/dsh-seychelles](https://github.com/uckkk/dsh-seychelles) | 0 | 2026-08-20 | 2026-08-20 | 塞舌尔国 |
| 1078 | [uckkk/dsh-shade](https://github.com/uckkk/dsh-shade) | 0 | 2026-08-19 | 2026-08-20 | 颜色加深 |
| 1079 | [uckkk/dsh-shallow-clone](https://github.com/uckkk/dsh-shallow-clone) | 0 | 2026-08-19 | 2026-08-20 | 浅拷贝 |
| 1080 | [uckkk/dsh-shipping-fee](https://github.com/uckkk/dsh-shipping-fee) | 0 | 2026-08-20 | 2026-08-20 | 运费计算 |
| 1081 | [uckkk/dsh-shortid](https://github.com/uckkk/dsh-shortid) | 0 | 2026-08-19 | 2026-08-20 | 短 ID 生成 |
| 1082 | [uckkk/dsh-shower-size](https://github.com/uckkk/dsh-shower-size) | 0 | 2026-08-20 | 2026-08-20 | 淋浴房尺寸 |
| 1083 | [uckkk/dsh-shuffle](https://github.com/uckkk/dsh-shuffle) | 0 | 2026-08-19 | 2026-08-20 | 数组洗牌 |
| 1084 | [uckkk/dsh-sick-leave-pay](https://github.com/uckkk/dsh-sick-leave-pay) | 0 | 2026-08-20 | 2026-08-20 | 病假工资 |
| 1085 | [uckkk/dsh-sierra-leone](https://github.com/uckkk/dsh-sierra-leone) | 0 | 2026-08-20 | 2026-08-20 | 塞拉利昂国 |
| 1086 | [uckkk/dsh-sign](https://github.com/uckkk/dsh-sign) | 0 | 2026-08-19 | 2026-08-20 | 符号判断 |
| 1087 | [uckkk/dsh-skin-type](https://github.com/uckkk/dsh-skin-type) | 0 | 2026-08-20 | 2026-08-20 | 肤质判断 |
| 1088 | [uckkk/dsh-sleep-cycle](https://github.com/uckkk/dsh-sleep-cycle) | 0 | 2026-08-20 | 2026-08-20 | 睡眠周期入睡建议 |
| 1089 | [uckkk/dsh-sleep-debt](https://github.com/uckkk/dsh-sleep-debt) | 0 | 2026-08-20 | 2026-08-20 | 睡眠债务计算 |
| 1090 | [uckkk/dsh-slope](https://github.com/uckkk/dsh-slope) | 0 | 2026-08-19 | 2026-08-20 | 斜率计算 |
| 1091 | [uckkk/dsh-slugify](https://github.com/uckkk/dsh-slugify) | 0 | 2026-08-19 | 2026-08-20 | URL slug 生成器 |
| 1092 | [uckkk/dsh-snakecase](https://github.com/uckkk/dsh-snakecase) | 0 | 2026-08-19 | 2026-08-20 | 蛇形命名 |
| 1093 | [uckkk/dsh-snowflake](https://github.com/uckkk/dsh-snowflake) | 0 | 2026-08-19 | 2026-08-20 | 雪花 ID |
| 1094 | [uckkk/dsh-social-insurance](https://github.com/uckkk/dsh-social-insurance) | 0 | 2026-08-20 | 2026-08-20 | 五险一金计算 |
| 1095 | [uckkk/dsh-socket-count](https://github.com/uckkk/dsh-socket-count) | 0 | 2026-08-20 | 2026-08-20 | 开关插座数量 |
| 1096 | [uckkk/dsh-solid-food](https://github.com/uckkk/dsh-solid-food) | 0 | 2026-08-20 | 2026-08-20 | 辅食添加指南 |
| 1097 | [uckkk/dsh-sort](https://github.com/uckkk/dsh-sort) | 0 | 2026-08-19 | 2026-08-20 | 数组排序 |
| 1098 | [uckkk/dsh-sort-unique](https://github.com/uckkk/dsh-sort-unique) | 0 | 2026-08-19 | 2026-08-20 | 排序去重 |
| 1099 | [uckkk/dsh-sphere](https://github.com/uckkk/dsh-sphere) | 0 | 2026-08-19 | 2026-08-20 | 球体计算 |
| 1100 | [uckkk/dsh-split-bill](https://github.com/uckkk/dsh-split-bill) | 0 | 2026-08-20 | 2026-08-20 | AA分摊 |
| 1101 | [uckkk/dsh-stain-removal](https://github.com/uckkk/dsh-stain-removal) | 0 | 2026-08-20 | 2026-08-20 | 去渍方法 |
| 1102 | [uckkk/dsh-stair-calc](https://github.com/uckkk/dsh-stair-calc) | 0 | 2026-08-20 | 2026-08-20 | 楼梯踏步计算 |
| 1103 | [uckkk/dsh-star-achernar](https://github.com/uckkk/dsh-star-achernar) | 0 | 2026-08-20 | 2026-08-20 | 水委一 |
| 1104 | [uckkk/dsh-star-aldebaran](https://github.com/uckkk/dsh-star-aldebaran) | 0 | 2026-08-20 | 2026-08-20 | 毕宿五 |
| 1105 | [uckkk/dsh-star-altair](https://github.com/uckkk/dsh-star-altair) | 0 | 2026-08-20 | 2026-08-20 | 牛郎星 |
| 1106 | [uckkk/dsh-star-antares](https://github.com/uckkk/dsh-star-antares) | 0 | 2026-08-20 | 2026-08-20 | 心宿二 |
| 1107 | [uckkk/dsh-star-arcturus](https://github.com/uckkk/dsh-star-arcturus) | 0 | 2026-08-19 | 2026-08-20 | 大角星 |
| 1108 | [uckkk/dsh-star-betelgeuse](https://github.com/uckkk/dsh-star-betelgeuse) | 0 | 2026-08-20 | 2026-08-20 | 参宿四 |
| 1109 | [uckkk/dsh-star-canopus](https://github.com/uckkk/dsh-star-canopus) | 0 | 2026-08-19 | 2026-08-20 | 老人星 |
| 1110 | [uckkk/dsh-star-capella](https://github.com/uckkk/dsh-star-capella) | 0 | 2026-08-20 | 2026-08-20 | 五车二 |
| 1111 | [uckkk/dsh-star-deneb](https://github.com/uckkk/dsh-star-deneb) | 0 | 2026-08-20 | 2026-08-20 | 天津四 |
| 1112 | [uckkk/dsh-star-fomalhaut](https://github.com/uckkk/dsh-star-fomalhaut) | 0 | 2026-08-20 | 2026-08-20 | 北落师门 |
| 1113 | [uckkk/dsh-star-hadar](https://github.com/uckkk/dsh-star-hadar) | 0 | 2026-08-20 | 2026-08-20 | 马腹一 |
| 1114 | [uckkk/dsh-star-pollux](https://github.com/uckkk/dsh-star-pollux) | 0 | 2026-08-20 | 2026-08-20 | 北河三 |
| 1115 | [uckkk/dsh-star-procyon](https://github.com/uckkk/dsh-star-procyon) | 0 | 2026-08-20 | 2026-08-20 | 南河三 |
| 1116 | [uckkk/dsh-star-rigel](https://github.com/uckkk/dsh-star-rigel) | 0 | 2026-08-20 | 2026-08-20 | 参宿七 |
| 1117 | [uckkk/dsh-star-rigil-centaurus](https://github.com/uckkk/dsh-star-rigil-centaurus) | 0 | 2026-08-19 | 2026-08-20 | 南门二 |
| 1118 | [uckkk/dsh-star-sirius](https://github.com/uckkk/dsh-star-sirius) | 0 | 2026-08-19 | 2026-08-20 | 天狼星 |
| 1119 | [uckkk/dsh-star-spica](https://github.com/uckkk/dsh-star-spica) | 0 | 2026-08-20 | 2026-08-20 | 角宿一 |
| 1120 | [uckkk/dsh-star-vega](https://github.com/uckkk/dsh-star-vega) | 0 | 2026-08-19 | 2026-08-20 | 织女星 |
| 1121 | [uckkk/dsh-stddev](https://github.com/uckkk/dsh-stddev) | 0 | 2026-08-19 | 2026-08-20 | 标准差 |
| 1122 | [uckkk/dsh-step-goal](https://github.com/uckkk/dsh-step-goal) | 0 | 2026-08-20 | 2026-08-20 | 步数步幅计算 |
| 1123 | [uckkk/dsh-stock-live](https://github.com/uckkk/dsh-stock-live) | 0 | 2026-08-20 | 2026-08-20 | A股实时行情 |
| 1124 | [uckkk/dsh-study-plan](https://github.com/uckkk/dsh-study-plan) | 0 | 2026-08-20 | 2026-08-20 | 备考时间分配 |
| 1125 | [uckkk/dsh-sugar-convert](https://github.com/uckkk/dsh-sugar-convert) | 0 | 2026-08-20 | 2026-08-20 | 糖类换算 |
| 1126 | [uckkk/dsh-sum](https://github.com/uckkk/dsh-sum) | 0 | 2026-08-19 | 2026-08-20 | 求和 |
| 1127 | [uckkk/dsh-sum-of-divisors](https://github.com/uckkk/dsh-sum-of-divisors) | 0 | 2026-08-19 | 2026-08-20 | 因子之和 |
| 1128 | [uckkk/dsh-sunscreen-spf](https://github.com/uckkk/dsh-sunscreen-spf) | 0 | 2026-08-20 | 2026-08-20 | 防晒SPF选择 |
| 1129 | [uckkk/dsh-swapcase](https://github.com/uckkk/dsh-swapcase) | 0 | 2026-08-19 | 2026-08-20 | 大小写互换 |
| 1130 | [uckkk/dsh-swim-pace](https://github.com/uckkk/dsh-swim-pace) | 0 | 2026-08-20 | 2026-08-20 | 游泳配速 |
| 1131 | [uckkk/dsh-syllable](https://github.com/uckkk/dsh-syllable) | 0 | 2026-08-19 | 2026-08-20 | 音节估算 |
| 1132 | [uckkk/dsh-takeout-tip](https://github.com/uckkk/dsh-takeout-tip) | 0 | 2026-08-20 | 2026-08-20 | 外卖费用 |
| 1133 | [uckkk/dsh-tax-bonus](https://github.com/uckkk/dsh-tax-bonus) | 0 | 2026-08-20 | 2026-08-20 | 年终奖个税 |
| 1134 | [uckkk/dsh-tax-income](https://github.com/uckkk/dsh-tax-income) | 0 | 2026-08-20 | 2026-08-20 | 个税计算器 |
| 1135 | [uckkk/dsh-tax-refund](https://github.com/uckkk/dsh-tax-refund) | 0 | 2026-08-20 | 2026-08-20 | 退税估算 |
| 1136 | [uckkk/dsh-taxi-fare](https://github.com/uckkk/dsh-taxi-fare) | 0 | 2026-08-20 | 2026-08-20 | 打车费估算 |
| 1137 | [uckkk/dsh-tea-brew](https://github.com/uckkk/dsh-tea-brew) | 0 | 2026-08-20 | 2026-08-20 | 泡茶水温时间 |
| 1138 | [uckkk/dsh-teacher-cert](https://github.com/uckkk/dsh-teacher-cert) | 0 | 2026-08-20 | 2026-08-20 | 教师资格证科目 |
| 1139 | [uckkk/dsh-timezone](https://github.com/uckkk/dsh-timezone) | 0 | 2026-08-19 | 2026-08-20 | 时区查询 |
| 1140 | [uckkk/dsh-timezone-diff](https://github.com/uckkk/dsh-timezone-diff) | 0 | 2026-08-20 | 2026-08-20 | 时差换算 |
| 1141 | [uckkk/dsh-timor-leste](https://github.com/uckkk/dsh-timor-leste) | 0 | 2026-08-20 | 2026-08-20 | 东帝汶国 |
| 1142 | [uckkk/dsh-tint](https://github.com/uckkk/dsh-tint) | 0 | 2026-08-19 | 2026-08-20 | 颜色提亮 |
| 1143 | [uckkk/dsh-tip-calc](https://github.com/uckkk/dsh-tip-calc) | 0 | 2026-08-20 | 2026-08-20 | 小费计算 |
| 1144 | [uckkk/dsh-tire-pressure](https://github.com/uckkk/dsh-tire-pressure) | 0 | 2026-08-20 | 2026-08-20 | 胎压建议 |
| 1145 | [uckkk/dsh-tire-wear](https://github.com/uckkk/dsh-tire-wear) | 0 | 2026-08-20 | 2026-08-20 | 轮胎磨损判断 |
| 1146 | [uckkk/dsh-title-length](https://github.com/uckkk/dsh-title-length) | 0 | 2026-08-20 | 2026-08-20 | 标题字数建议 |
| 1147 | [uckkk/dsh-titlecase](https://github.com/uckkk/dsh-titlecase) | 0 | 2026-08-19 | 2026-08-20 | 标题格式 |
| 1148 | [uckkk/dsh-toddler-height](https://github.com/uckkk/dsh-toddler-height) | 0 | 2026-08-20 | 2026-08-20 | 幼儿身高标准 |
| 1149 | [uckkk/dsh-togo](https://github.com/uckkk/dsh-togo) | 0 | 2026-08-20 | 2026-08-20 | 多哥国 |
| 1150 | [uckkk/dsh-train-refund](https://github.com/uckkk/dsh-train-refund) | 0 | 2026-08-20 | 2026-08-20 | 火车票退改费 |
| 1151 | [uckkk/dsh-trapezoid](https://github.com/uckkk/dsh-trapezoid) | 0 | 2026-08-19 | 2026-08-20 | 梯形面积 |
| 1152 | [uckkk/dsh-travel-docs](https://github.com/uckkk/dsh-travel-docs) | 0 | 2026-08-20 | 2026-08-20 | 旅行证件 |
| 1153 | [uckkk/dsh-travel-insurance](https://github.com/uckkk/dsh-travel-insurance) | 0 | 2026-08-20 | 2026-08-20 | 旅行险价格估算 |
| 1154 | [uckkk/dsh-travel-med](https://github.com/uckkk/dsh-travel-med) | 0 | 2026-08-20 | 2026-08-20 | 旅行药品清单 |
| 1155 | [uckkk/dsh-treasury-yield](https://github.com/uckkk/dsh-treasury-yield) | 0 | 2026-08-20 | 2026-08-20 | 国债收益率 |
| 1156 | [uckkk/dsh-tree](https://github.com/uckkk/dsh-tree) | 0 | 2026-08-19 | 2026-08-20 | 树形展示 |
| 1157 | [uckkk/dsh-triangle](https://github.com/uckkk/dsh-triangle) | 0 | 2026-08-19 | 2026-08-20 | 三角形计算 |
| 1158 | [uckkk/dsh-trim](https://github.com/uckkk/dsh-trim) | 0 | 2026-08-19 | 2026-08-20 | 去除空白 |
| 1159 | [uckkk/dsh-trip-itinerary](https://github.com/uckkk/dsh-trip-itinerary) | 0 | 2026-08-20 | 2026-08-20 | 行程规划 |
| 1160 | [uckkk/dsh-truncate](https://github.com/uckkk/dsh-truncate) | 0 | 2026-08-19 | 2026-08-20 | 截断文本 |
| 1161 | [uckkk/dsh-tsv](https://github.com/uckkk/dsh-tsv) | 0 | 2026-08-19 | 2026-08-20 | TSV 转换 |
| 1162 | [uckkk/dsh-ulid](https://github.com/uckkk/dsh-ulid) | 0 | 2026-08-19 | 2026-08-20 | ULID 生成/解析（时间可排序 ID） |
| 1163 | [uckkk/dsh-unemployment-period](https://github.com/uckkk/dsh-unemployment-period) | 0 | 2026-08-20 | 2026-08-20 | 失业金领取期限 |
| 1164 | [uckkk/dsh-union](https://github.com/uckkk/dsh-union) | 0 | 2026-08-19 | 2026-08-20 | 集合并集 |
| 1165 | [uckkk/dsh-unique](https://github.com/uckkk/dsh-unique) | 0 | 2026-08-19 | 2026-08-20 | 数组去重 |
| 1166 | [uckkk/dsh-uppercase](https://github.com/uckkk/dsh-uppercase) | 0 | 2026-08-19 | 2026-08-20 | 大写转换 |
| 1167 | [uckkk/dsh-url-decode](https://github.com/uckkk/dsh-url-decode) | 0 | 2026-08-19 | 2026-08-20 | URL 解码 |
| 1168 | [uckkk/dsh-vaccine-schedule](https://github.com/uckkk/dsh-vaccine-schedule) | 0 | 2026-08-20 | 2026-08-20 | 疫苗接种时间表 |
| 1169 | [uckkk/dsh-variance](https://github.com/uckkk/dsh-variance) | 0 | 2026-08-19 | 2026-08-20 | 方差 |
| 1170 | [uckkk/dsh-vatican](https://github.com/uckkk/dsh-vatican) | 0 | 2026-08-20 | 2026-08-20 | 梵蒂冈国 |
| 1171 | [uckkk/dsh-video-length](https://github.com/uckkk/dsh-video-length) | 0 | 2026-08-20 | 2026-08-20 | 视频时长建议 |
| 1172 | [uckkk/dsh-vigenere](https://github.com/uckkk/dsh-vigenere) | 0 | 2026-08-19 | 2026-08-20 | 维吉尼亚密码 |
| 1173 | [uckkk/dsh-vision-check](https://github.com/uckkk/dsh-vision-check) | 0 | 2026-08-20 | 2026-08-20 | 视力屈光度 |
| 1174 | [uckkk/dsh-voltage-drop](https://github.com/uckkk/dsh-voltage-drop) | 0 | 2026-08-20 | 2026-08-20 | 电压降校核 |
| 1175 | [uckkk/dsh-water-electrolyte](https://github.com/uckkk/dsh-water-electrolyte) | 0 | 2026-08-20 | 2026-08-20 | 出汗电解质 |
| 1176 | [uckkk/dsh-water-intake](https://github.com/uckkk/dsh-water-intake) | 0 | 2026-08-20 | 2026-08-20 | 每日饮水量 |
| 1177 | [uckkk/dsh-watering-schedule](https://github.com/uckkk/dsh-watering-schedule) | 0 | 2026-08-20 | 2026-08-20 | 浇水频率建议 |
| 1178 | [uckkk/dsh-weather-live](https://github.com/uckkk/dsh-weather-live) | 0 | 2026-08-20 | 2026-08-20 | 实时天气查询 |
| 1179 | [uckkk/dsh-week-number](https://github.com/uckkk/dsh-week-number) | 0 | 2026-08-19 | 2026-08-20 | 周数计算 |
| 1180 | [uckkk/dsh-weekday-name](https://github.com/uckkk/dsh-weekday-name) | 0 | 2026-08-19 | 2026-08-20 | 星期名称 |
| 1181 | [uckkk/dsh-wiper-replace](https://github.com/uckkk/dsh-wiper-replace) | 0 | 2026-08-20 | 2026-08-20 | 雨刮更换 |
| 1182 | [uckkk/dsh-wire-gauge](https://github.com/uckkk/dsh-wire-gauge) | 0 | 2026-08-20 | 2026-08-20 | 电线线径选择 |
| 1183 | [uckkk/dsh-work-injury-allowance](https://github.com/uckkk/dsh-work-injury-allowance) | 0 | 2026-08-20 | 2026-08-20 | 工伤伤残补助金 |
| 1184 | [uckkk/dsh-workout-split](https://github.com/uckkk/dsh-workout-split) | 0 | 2026-08-20 | 2026-08-20 | 训练分化计划 |
| 1185 | [uckkk/dsh-xor-cipher](https://github.com/uckkk/dsh-xor-cipher) | 0 | 2026-08-19 | 2026-08-20 | XOR 加密 |
| 1186 | [uckkk/dsh-yeast-convert](https://github.com/uckkk/dsh-yeast-convert) | 0 | 2026-08-20 | 2026-08-20 | 酵母用量计算 |
| 1187 | [usersx/dsh-automation-center](https://github.com/usersx/dsh-automation-center) | 0 | 2026-08-19 | 2026-08-20 | Root-level automation center for DeepSeek Harness: scheduled tasks, fresh Result Sessions, and cross-workspace run history. |
| 1188 | [Vinzelles/dsh-prompt-enhancer](https://github.com/Vinzelles/dsh-prompt-enhancer) | 0 | 2026-08-20 | 2026-08-20 | DSH 提示词增强插件:输入框强化/还原图标,隔离子会话 agent 重写提示词 |
| 1189 | [w2831120407/dsh-ctl](https://github.com/w2831120407/dsh-ctl) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness (dsh) Web control plugin: restart/shutdown the dsh web process from the Settings panel, plus a treat (小鱼干) top-up for the whale-girl pet. / dsh 系统控制插件：设置页一键重启/关闭 dsh web，并为鲸鱼娘宠物补给小鱼干。 |
| 1190 | [Wang-Lin-Chang/dsh-vap](https://github.com/Wang-Lin-Chang/dsh-vap) | 0 | 2026-08-20 | 2026-08-20 | VAP - Verifiable Agent Protocol: a tested trust machine for agent-to-agent messages (zero third-party dependencies, 217 tests, full experiment ledger) |
| 1191 | [Wang-yifan666/Repo_Tutor](https://github.com/Wang-yifan666/Repo_Tutor) | 0 | 2026-08-20 | 2026-08-20 | An interactive repository learning tutor for DeepSeek Harness. Learn unfamiliar codebases through guided exploration, implementation-level explanations and adaptive questioning. |
| 1192 | [welay21312312321/dsh-design-feishu-docs](https://github.com/welay21312312321/dsh-design-feishu-docs) | 0 | 2026-08-20 | 2026-08-20 | Feishu/Lark document design & layout skill for DeepSeek Harness (dsh) — management-readable, brand-consistent, evidence-traceable formatting for long-form docs. 飞书文档设计排版技能（DeepSeek Harness 技能插件）：管理层可扫描、品牌一致、证据可追溯的长文排版。 |
| 1193 | [welay21312312321/dsh-pitch-doc-generator](https://github.com/welay21312312321/dsh-pitch-doc-generator) | 0 | 2026-08-20 | 2026-08-20 | Feishu/Lark bid-proposal document generator skill for DeepSeek Harness (dsh) — structured pitch docs with cover, background, solution, pricing, team & cases. 飞书讲标方案文档生成器（DeepSeek Harness 技能插件）：封面/背景/需求/方案/报价/团队/案例等章节。 |
| 1194 | [welay21312312321/dsh-quote-sheet-generator](https://github.com/welay21312312321/dsh-quote-sheet-generator) | 0 | 2026-08-20 | 2026-08-20 | Feishu/Lark spreadsheet quotation generator skill for DeepSeek Harness (dsh) — auto cost, headcount, margin, payment milestones & ROI sheets. 飞书电子表格报价单生成器（DeepSeek Harness 技能插件），自动计算成本/人力/利润率/付款节点/ROI。 |
| 1195 | [welay21312312321/dsh-write-feishu-docs](https://github.com/welay21312312321/dsh-write-feishu-docs) | 0 | 2026-08-20 | 2026-08-20 | Evidence-driven Feishu/Lark document writing skill for DeepSeek Harness (dsh) — turn business material into verified, structured docs with conclusions, evidence & actions. 飞书文档证据化编写技能（DeepSeek Harness 技能插件）：从业务资料到可验证飞书成稿。 |
| 1196 | [whyzsm/dsh-clipfile](https://github.com/whyzsm/dsh-clipfile) | 0 | 2026-08-20 | 2026-08-20 | Attach files/folders in the DSH composer: clipboard paste, native picker, @-mention path search, paged Markdown conversion |
| 1197 | [WilShi/dsh-skill-station](https://github.com/WilShi/dsh-skill-station) | 0 | 2026-08-20 | 2026-08-20 | Skill station for DeepSeek Harness: scan Claude/Codex/Cursor/Gemini skill libraries, one-click import, global/project skill management, drag-and-drop install — all from a sidebar panel. |
| 1198 | [Win-Hao/seek-on-dsh](https://github.com/Win-Hao/seek-on-dsh) | 0 | 2026-08-16 | 2026-08-20 | 像素化的 DeepSeek 小鲸鱼，浮在 dsh web 右下角，跟着你的 Harness 会话状态做反应。A DSH plugin: the DeepSeek whale as a pixel-animated desktop pet. |
| 1199 | [winyh/dsh-business](https://github.com/winyh/dsh-business) | 0 | 2026-08-20 | 2026-08-20 | 商业策略与商业化插件，覆盖商业模式、定价与渠道价盘、盈利能力、电梯 Pitch 和商业计划。 Evidence-backed business strategy and commercialization tools for business models, pricing architecture, channel economics, profitability, elevator pitches and business plans. |
| 1200 | [winyh/dsh-idea](https://github.com/winyh/dsh-idea) | 0 | 2026-08-20 | 2026-08-20 | dsh-idea 是一个面向外部机会、市场变化和真实需求发现的 DeepSeek Harness 插件包。 dsh-idea is a DeepSeek Harness bundle for evidence-backed external opportunity discovery and product discovery. |
| 1201 | [winyh/dsh-product](https://github.com/winyh/dsh-product) | 0 | 2026-08-20 | 2026-08-20 | dsh-product 是一个“互联网资讯查询 + 本地项目上下文”的 DeepSeek Harness 插件，用于把已经确认的产品机会转化为可验证、可交付、可迭代的产品。 dsh-product is a web-aware DeepSeek Harness plugin that combines public internet research with local product context to turn a validated opportunity handoff into a shippable, observable and iterated product. |
| 1202 | [winyh/dsh-sales](https://github.com/winyh/dsh-sales) | 0 | 2026-08-20 | 2026-08-20 | dsh-sales 是一个 DeepSeek Harness 插件，负责把已经确认的客户机会推进到可成交、可复盘、可预测和可扩张的销售运营层。 dsh-sales is a DeepSeek Harness plugin for the commercial operating layer between qualified demand and repeatable revenue. |
| 1203 | [WODE25500/dsh-az](https://github.com/WODE25500/dsh-az) | 0 | 2026-08-19 | 2026-08-20 | Azure CLI 的 DeepSeek Harness 插件 — 查询/展示/部署/诊断 Azure 资源，JSON 输出 |
| 1204 | [WODE25500/dsh-codex](https://github.com/WODE25500/dsh-codex) | 0 | 2026-08-19 | 2026-08-20 | OpenAI Codex CLI 的 DeepSeek Harness 插件 — 一次性任务/仓库审查/会话续接（默认只读沙箱，支持 DeepSeek provider） |
| 1205 | [WODE25500/dsh-k6](https://github.com/WODE25500/dsh-k6) | 0 | 2026-08-19 | 2026-08-20 | Grafana k6 的 DeepSeek Harness 插件 — 编写/运行/分析负载测试，冒烟测试优先 |
| 1206 | [WODE25500/dsh-kubectl](https://github.com/WODE25500/dsh-kubectl) | 0 | 2026-08-19 | 2026-08-20 | Kubernetes (kubectl) 的 DeepSeek Harness 插件 — 查资源/日志/describe/端口转发/执行，JSON 结构化输出 |
| 1207 | [WODE25500/dsh-maf](https://github.com/WODE25500/dsh-maf) | 0 | 2026-08-20 | 2026-08-20 | Microsoft Agent Framework (MAF) 的 DeepSeek Harness 插件 — 验证/运行/搭建 declarative agents 与 workflows（YAML） |
| 1208 | [WODE25500/dsh-skillopt](https://github.com/WODE25500/dsh-skillopt) | 0 | 2026-08-19 | 2026-08-20 | Microsoft SkillOpt-Sleep integration for DeepSeek Harness (dsh): nightly sleep cycle - harvest sessions, replay recurring tasks, consolidate validated skills behind a held-out gate. ?? DSH ? SkillOpt ?? |
| 1209 | [WODE25500/dsh-ssh-pro](https://github.com/WODE25500/dsh-ssh-pro) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 的 SSH 增强运维插件 — 补齐 base dsh-ssh 的缺口：连接测试/远程目录/ssh-config 导入/指纹检查/多主机批量 |
| 1210 | [WODE25500/dsh-terraform](https://github.com/WODE25500/dsh-terraform) | 0 | 2026-08-19 | 2026-08-20 | HashiCorp Terraform 的 DeepSeek Harness 插件 — plan/apply 门控、state/output 查询、配置校验 |
| 1211 | [WODE25500/dsh-winget](https://github.com/WODE25500/dsh-winget) | 0 | 2026-08-19 | 2026-08-20 | Windows Package Manager (winget) 的 DeepSeek Harness 插件 — 搜索/安装/升级/卸载/导入导出 Windows 软件 |
| 1212 | [WODE25500/dsh-wsl](https://github.com/WODE25500/dsh-wsl) | 0 | 2026-08-19 | 2026-08-20 | WSL (Windows Subsystem for Linux) 的 DeepSeek Harness 桥接插件 — 跑 Linux 命令、管理发行版、路径转换与跨系统复制 |
| 1213 | [wx971025/dsh-openspec](https://github.com/wx971025/dsh-openspec) | 0 | 2026-08-20 | 2026-08-20 | dsh的openspec显示编辑器 |
| 1214 | [wyStars/dsh-parallel-pool](https://github.com/wyStars/dsh-parallel-pool) | 0 | 2026-08-19 | 2026-08-20 | 动态滚动窗口子代理任务池：一次调用跑完整批独立任务，内部滚动补位 |
| 1215 | [wyzh0117/dsh-skill-select](https://github.com/wyzh0117/dsh-skill-select) | 0 | 2026-08-20 | 2026-08-20 | DSH web plugin: pick skills from a sidebar and inject them into the current session. |
| 1216 | [X-avier-W/dsh-elegent-balance-tracker](https://github.com/X-avier-W/dsh-elegent-balance-tracker) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 计费插件：当前会话成本 + 官方余额（官方峰谷价 / 每分钟余额对齐 / 期间实时扣减） |
| 1217 | [xia-sc/dsh-update-notifier](https://github.com/xia-sc/dsh-update-notifier) | 0 | 2026-08-20 | 2026-08-20 | DSH 启动时检测 @deepseek-ai/dsh 可更新版本（npm + GitHub Tags 交叉验证） |
| 1218 | [xiaoliang2/enterprise-compliance](https://github.com/xiaoliang2/enterprise-compliance) | 0 | 2026-08-20 | 2026-08-20 | enterprise-compliance |
| 1219 | [xiaoyanjin15-ux/dsh-history-mirror-plugin](https://github.com/xiaoyanjin15-ux/dsh-history-mirror-plugin) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness Web plugin that mirrors the current conversation into a scrollable right-side history panel. |
| 1220 | [xingjisen/dsh-secure-gate](https://github.com/xingjisen/dsh-secure-gate) | 0 | 2026-08-18 | 2026-08-20 | 是一个为 DeepSeek Harness Web UI 提供企业级安全防护的认证网关插件。 |
| 1221 | [xingyingyuzhui/dsh-observability](https://github.com/xingyingyuzhui/dsh-observability) | 0 | 2026-08-18 | 2026-08-20 | Shared Claw suite diagnostics for DeepSeek Harness. 治理插件共用诊断日志。 |
| 1222 | [Xliecc/dsh-session-theme](https://github.com/Xliecc/dsh-session-theme) | 0 | 2026-08-16 | 2026-08-20 | DSH web plugin: show every session's theme in the left sidebar on load |
| 1223 | [xmuwenxiang/dsh-web-chat](https://github.com/xmuwenxiang/dsh-web-chat) | 0 | 2026-08-20 | 2026-08-20 | Deepseek Harness插件，可以直接在Deepseek Harness中使用网页版deepseek进行聊天，并将聊天过程直接迁移到Deepseek Harness进一步进行开发。主要目的是节省前期方案讨论时的token |
| 1224 | [xsluck/dsh-llm-pi-ai-headers](https://github.com/xsluck/dsh-llm-pi-ai-headers) | 0 | 2026-08-16 | 2026-08-20 | 为dsh提供商添加自定义请求头 |
| 1225 | [xujiping/dsh-plugins](https://github.com/xujiping/dsh-plugins) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness 自研插件全家桶（monorepo）：dsh-memory 全局记忆等 |
| 1226 | [xusuyang030218/dsh-session-viz](https://github.com/xusuyang030218/dsh-session-viz) | 0 | 2026-08-20 | 2026-08-20 | DSH (DeepSeek Harness) 会话日志可视化插件：三层渐进式查看器（摘要卡片 / 执行故事线 / 技术事件树），随 harness 启动 |
| 1227 | [xxwj225-James/tomilite-dsh-plugin](https://github.com/xxwj225-James/tomilite-dsh-plugin) | 0 | 2026-08-20 | 2026-08-20 | DeepSeek Harness plugin: give your DSH agent access to your local TomiLite tasks, notes, and project stats |
| 1228 | [yangpeng-space/my-image-drop](https://github.com/yangpeng-space/my-image-drop) | 0 | 2026-08-20 | 2026-08-20 | DSH plugin: drag-and-drop images to file paths for text-only models |
| 1229 | [Yash-Kavaiya/dsh-cxas](https://github.com/Yash-Kavaiya/dsh-cxas) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness plugin exposing the CXAS SCRAPI (cxas) CLI as model-facing tools (apps, deployments, evals, traces, tools, pull/push, lint). |
| 1230 | [YeqingTang/dsh-task-watcher-plugin](https://github.com/YeqingTang/dsh-task-watcher-plugin) | 0 | 2026-08-20 | 2026-08-20 | Windows tray monitor shell plugin for DeepSeek Harness: deploys & manages the standalone DshTaskWatcher tray app, with a start/stop switch in Settings > Plugins. |
| 1231 | [yhyfhgs/dsh-providers-extension](https://github.com/yhyfhgs/dsh-providers-extension) | 0 | 2026-08-20 | 2026-08-20 | Provider accounts, live model catalogs, and model selection for DeepSeek Harness. |
| 1232 | [yihefeikong-rgb/dsh-cc-haha-dream](https://github.com/yihefeikong-rgb/dsh-cc-haha-dream) | 0 | 2026-08-20 | 2026-08-20 | DSH 自动做梦插件：后台定期回顾会话与记忆整合去重（复刻 CC-HAHA autoDream）· Auto memory consolidation (dream) plugin for DeepSeek Harness, inspired by CC-HAHA |
| 1233 | [yijin-starshadow01/dsh--jin](https://github.com/yijin-starshadow01/dsh--jin) | 0 | 2026-08-20 | 2026-08-20 | 用dsh搓的插件 |
| 1234 | [yLong765/dsh-ide-bridge](https://github.com/yLong765/dsh-ide-bridge) | 0 | 2026-08-20 | 2026-08-20 | DSH (Harness) 插件，让 IDE 和 Harness 双向联通 |
| 1235 | [YNM10086/deepseek-mcp-plugin](https://github.com/YNM10086/deepseek-mcp-plugin) | 0 | 2026-08-15 | 2026-08-20 | DSH 宿主级图片理解插件：vision_describe 工具，MiniMax → 智谱 → Ollama 三层后端自动降级，随 DSH 启动自动挂载 |
| 1236 | [Yokira404/dsh-highlight-LETME](https://github.com/Yokira404/dsh-highlight-LETME) | 0 | 2026-08-20 | 2026-08-20 | 自动标红思考过程中的let_me |
| 1237 | [yu-xin-c/dsh-evolution-console](https://github.com/yu-xin-c/dsh-evolution-console) | 0 | 2026-08-19 | 2026-08-20 | Offline evaluation and guarded self-evolution loop for DeepSeek Harness |
| 1238 | [yuanbaoerer/dsh-decision-split](https://github.com/yuanbaoerer/dsh-decision-split) | 0 | 2026-08-20 | 2026-08-20 | 决策分屏：DSH Web UI 主窗口摘要+决策编辑，右侧详情栏完整 markdown 展示，决策一键回传 agent |
| 1239 | [yuanzhenqi/dsh-mobile-ui](https://github.com/yuanzhenqi/dsh-mobile-ui) | 0 | 2026-08-20 | 2026-08-20 | Narrow-screen drawer shell for DSH Web |
| 1240 | [ywandy/dsh-plugins](https://github.com/ywandy/dsh-plugins) | 0 | 2026-08-19 | 2026-08-20 | Community plugins for DeepSeek Harness |
| 1241 | [ywzhang1031/dsh-aside](https://github.com/ywzhang1031/dsh-aside) | 0 | 2026-08-18 | 2026-08-20 | 把追问绑定到主对话具体文字并持久保存的 DeepSeek Harness 只读旁注插件。Persistent read-only side conversations anchored to exact prose. |
| 1242 | [zhangnan/think-like-codex](https://github.com/zhangnan/think-like-codex) | 0 | 2026-08-20 | 2026-08-20 | Codex-inspired decision and planning policy plugin for DeepSeek Harness |
| 1243 | [zhangxiubo/dsh-llm-chatgpt-oauth](https://github.com/zhangxiubo/dsh-llm-chatgpt-oauth) | 0 | 2026-08-19 | 2026-08-20 | ChatGPT Plus/Pro OAuth model provider for DeepSeek Harness using pi-ai openai-codex. |
| 1244 | [ZhangZiFei/dsh-model-aliases](https://github.com/ZhangZiFei/dsh-model-aliases) | 0 | 2026-08-17 | 2026-08-20 | 为 DeepSeek Harness Web 提供持久化模型别名：将提供商、模型与推理等级绑定为易记名称，并通过输入框旁的单一选择器快速切换。 |
| 1245 | [Zhaokaka21/daily-sanxing](https://github.com/Zhaokaka21/daily-sanxing) | 0 | 2026-08-20 | 2026-08-20 | 一日三省 — 个人日常三件套（日结/日启/反思）：Claude Code 命令 + DSH skill \| A battle-tested personal daily workflow trio: Close, Start, Reflect. |
| 1246 | [zhuoxuanliu53-svg/dsh-plugin-market](https://github.com/zhuoxuanliu53-svg/dsh-plugin-market) | 0 | 2026-08-20 | 2026-08-20 | 可视化插件市场：双源(curated + GitHub topic)浏览/搜索/排序/关注/一键安装/更新/卸载/自动更新/热禁用/组合包导入导出 (DSH bundle plugin) |
| 1247 | [zukunftsholz/dsh-zgit](https://github.com/zukunftsholz/dsh-zgit) | 0 | 2026-08-20 | 2026-08-20 | 敏捷的 git 替代插件，提升 DSH agent 效率 \| An agile Git-alternative plugin designed to boost DSH Agent efficiency. |
| 1248 | [zxck5xz/dsh-memory-vi](https://github.com/zxck5xz/dsh-memory-vi) | 0 | 2026-08-20 | 2026-08-20 | Per-project long-term memory for DeepSeek Harness (DSH), backed by SQLite. |
| 1249 | [zyfgood/dsh-feishu-bot](https://github.com/zyfgood/dsh-feishu-bot) | 0 | 2026-08-20 | 2026-08-20 | 飞书机器人指挥deepseek Harness工作 |
| 1250 | [Zzzzkd/dsh-workflow-studio](https://github.com/Zzzzkd/dsh-workflow-studio) | 0 | 2026-08-19 | 2026-08-20 | DeepSeek Harness 的可视化工作流插件。侧栏打开全屏工作台，用节点编排有限 DAG；已保存的工作流可在工作台运行，也可在会话里用 workflow_run 或 /workflow 调用。贴图后回车可由读图工作流识别图片，会话可以继续使用纯文本模型。 |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 1148281964/dsh-token-stats
- 2nd1st/dsh-plugin-open-app
- Aampidy/dsh-mcmp-1
- AEicn/dsh-desktop
- ayuanwong/deepseek-harness-ux
- Breeze136/dsh-kb-rag
- chengxiaosheng/dsh-desktop
- chouxiaohuai/uiskin-theme
- Da-Mie/dsh-beacons
- Da-Mie/dsh-delete-session
- Da-Mie/dsh-notify
- Da-Mie/dsh-rewind
- DocJlm/dsh-supervisor
- dog-lin/dsh-session-cost
- EnkiduGilgamesh/dsh-codex-side-outline
- felixzhang-glitch/dsh-token-usage
- Fisfzy/ego-browser
- franksong2702/dsh-daybook
- GHJIVHIDD/dsh-plugin-usage
- hardcandydemoralisation573/dsh-xiaoyao-skins
- henryxiao709/dsh-pdf
- hyper-dsh-plugins/dsh-open-efforts
- jeffi369/SuperMate-Harness-System
- jiesou/dsh-cline-free-provider
- jonah791/dsh-agent-skill-forge
- joyiok/dsh-memory
- kirigayakazima/dsh-usage-vendor-stats
- lanbaolu/dsh-wechat-bridge
- libaie/onboard-dsh-projects
- lijx122/dsh-plugin-auth-guard
- limulin778-web/dsh-translator
- lizhouai/dsh-provider-quota
- lo2589/deepseek-harness-provider
- Lrxc/dsh-manage-hub
- LSAI2023/dsh-ide-context
- ltao0829/dsh-task-notify
- lvxinrong/Kantu
- MFWTW/Auto_Load_Our_Plugin
- Odefined/dsh-mobile-webui
- polaris-smart/dph-fleet
- pwangxo-sg/financial-market-analysis
- QIANLING-0831/dsh-memory
- RealAlexandreAI/dsh-nocturne-memory
- RevolutionLA/dsh-mate
- Scotlight/dsh-auto-approval
- skepsun/dsh-loom
- tttwh/dsh-plugin-audit
- VincentPhoton/SeekBalance
- Vulcan626/dsh-pet
- WASD258-jpg/dsh-preset-force
- Win-Hao/seekwhale-on-dsh
- wwumit/dsh-plugin-tools
- X9wd09ncc/dsh-x9-theme
- xiayuhkust/dsh-pace-popups
- xuxun-oss/dsh-gemini-bridge
- xxiaoxiong/dsh-ci
- xxiaoxiong/dsh-issue-tracker
- xxiaoxiong/dsh-kubernetes
- yanglongyun/dsh-ramify
- yeruizhi/dsh-lark-meeting-notifier
- Yu-tao-Li/dsh-read-image
- YuanyuanMa03/dsh-funnel
- Yun-tech123/dsh-document-reader
- yuzhounh/dsh-windows-tray-launcher
