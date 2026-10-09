# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-10-09**
- 快照日期 / Snapshot date: **2026-10-09 (UTC)**
- 待审核 / Pending: **210**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **19**
- Star 异常增长 / Star-growth alerts: **4** — 先看下方告警节 / see the alert section first

审核决定记到数据文件后运行 `node scripts/merge.mjs` 生效：

- 通过 → 加入 [data/approved.json](../approved.json)（`"owner/name": "YYYY-MM-DD"`）
- 剔除 → 加入 [data/curated.json](../curated.json) 的 `excluded_repos`，理由只写「不是 DSH 插件 + 它是什么」，并同步从 `approved.json` 移除
- 只进目录、不进榜单 → 加入 `approved.json` + `curated.json` 的 `leaderboard_exclusions`
- desktop 客户端 / 桌面壳 / 启动器 → `leaderboard_exclusions`（TOP200 与下游市场都不出现）
- market 类（插件市场、商店、技能商城、内置市场的桌面端等）→ `leaderboard_exclusions` + `market_exclusions` 留底（市场不能包含市场）
- 其余非插件形态（手册教程、Docker、VS Code 扩展、配套工具等）与无安装路径的通用工具 → `excluded_repos` 整体剔除（同步从 `approved.json` 移除）
- 目录站 / awesome-list / 榜单站（如 `awesome-dsh-plugin*` 系列）→ `excluded_repos` 整体剔除，不留目录
- Star 异常增长（见告警节）→ 先做增强分析；热度并非来自 DSH 插件本身时，核准也加入 `leaderboard_exclusions`

完整约定见 [data/review/README.md](./README.md)。

Record decisions in the data files, then run `node scripts/merge.mjs`:

- Approve → add to [data/approved.json](../approved.json) (`"owner/name": "YYYY-MM-DD"`)
- Exclude → add to `excluded_repos` in [data/curated.json](../curated.json) — the reason just states "not a DSH plugin + what it is" — and remove it from `approved.json`
- Catalog-only (not in the board) → add to `approved.json` + `leaderboard_exclusions` in `curated.json`
- Desktop client / shell / launcher → `leaderboard_exclusions` (absent from both TOP200.md and the downstream market)
- Market class (plugin market, store, skill mall, desktop with a built-in market) → `leaderboard_exclusions` + a `market_exclusions` backstop entry (the market cannot include another market)
- Other non-plugin forms (handbooks, Docker, VS Code extensions, companion tooling) and generic tools without a DSH install path → `excluded_repos` outright (also removed from `approved.json`)
- Directory sites / awesome-lists / leaderboards (e.g. the `awesome-dsh-plugin*` family) → `excluded_repos` outright
- Star-growth alerts (see the section below) → extra analysis first; if the stars are not from the DSH plugin itself, approve into `leaderboard_exclusions` as well

See [data/review/README.md](./README.md) for the full convention.

## ⚠️ Star 异常增长 / Star-growth alerts

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-10-08** / vs previous snapshot **2026-10-08**。规则：日增 ≥100★；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **4**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [hanliang97/MatrixMedia](https://github.com/hanliang97/MatrixMedia) | 待审 / pending | 944 | — | 126 | 201d | 待审高星 | 核准即 Top 14 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 5462 | +1029 | 110 | 14d | 日增百星 | 日增 +1029★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 12601 | +241 | 463 | 56d | 日增百星 | 日增 +241★；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 5968 | +105 | 255 | 55d | 日增百星 | 日增 +105★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [hanliang97/MatrixMedia](https://github.com/hanliang97/MatrixMedia) ⚠️ | 944 | 2026-03-21 | 2026-10-09 | 视频矩阵工具 vue electorn puppeteer 批量发布 视频到各个视频平台 自媒体 矩阵 抖音 小红书 头条 视频号 快手等 ai 自动化 cli |
| 2 | [zaofan-make/dsh-qqbot](https://github.com/zaofan-make/dsh-qqbot) | 23 | 2026-09-04 | 2026-10-09 | AI 统管 QQ 群组：审核放行、群发文件、沟通其他 web 会话的 AI！ ；气氛组担当：表情包自动入库、AI 自己决定开口、多预设多人格轮班陪聊！； 远程办公：权限审批、提问卡片转发到 QQ。； 自定义互动按钮：AI 帮你轻松搭文字游戏 —— 卡片逻辑由 AI 帮你写 ；省 token 设计：群聊价值评分后才唤醒 AI，上下文自动压缩。 |
| 3 | [William2333ZZ/mywork-deepseekharness](https://github.com/William2333ZZ/mywork-deepseekharness) | 6 | 2026-09-21 | 2026-10-09 | MyWork — a personal agent on DeepSeek Harness: AI teammates that each own a long-running job, work in the background, have every deliverable checked by a second session, and reach your phone through an end-to-end encrypted relay. All dsh plugins; your data stays on your computer. 住在你电脑里的 AI 同事。 |
| 4 | [91koukou/dsh-gpt-sovits](https://github.com/91koukou/dsh-gpt-sovits) | 2 | 2026-10-02 | 2026-10-09 | GPT-SoVITS text-to-speech for DeepSeek Harness |
| 5 | [apify/apify-deepseek-harness-plugin](https://github.com/apify/apify-deepseek-harness-plugin) | 2 | 2026-09-02 | 2026-10-09 | Apify plugin for the DeepSeek harness |
| 6 | [Baboo-ming/dsh-session-delete](https://github.com/Baboo-ming/dsh-session-delete) | 2 | 2026-10-09 | 2026-10-09 | dsh 侧栏会话删除插件。支持普通用户安全清理侧栏会话数据，可穿透 junction/符号链接定位真实文件并彻底删除，安装使用简单。 \| A dsh plugin to securely delete side session data, with junction/symlink resolution. |
| 7 | [bloodarea/dsh-agent-team-presets](https://github.com/bloodarea/dsh-agent-team-presets) | 2 | 2026-10-09 | 2026-10-09 | Reusable Agent Team presets for DeepSeek Harness: a captain plus members with their own prompt, model, reasoning effort, and tools. |
| 8 | [cangwu-ai/dsh-easyremote](https://github.com/cangwu-ai/dsh-easyremote) | 2 | 2026-08-25 | 2026-10-09 | Local-first Android remote workspace with one-command Cloudflare Tunnel setup |
| 9 | [FinalLawer/dsh-native-code-workbench](https://github.com/FinalLawer/dsh-native-code-workbench) | 2 | 2026-10-06 | 2026-10-09 | DeepSeek Harness 桌面端的原生 AI 代码工作台插件，提供文件树、Monaco 编辑器、Tab AI 补全和对话代码引用。 |
| 10 | [hawkongz/dsh-task-reminder](https://github.com/hawkongz/dsh-task-reminder) | 2 | 2026-09-21 | 2026-10-09 | Conversation task-completion reminders for the DeepSeek Harness Web UI: reminder card, four Web Audio chimes, and system notifications |
| 11 | [LFY-bot/dsh-api-probe](https://github.com/LFY-bot/dsh-api-probe) | 2 | 2026-10-09 | 2026-10-09 | 在配置前验证 API Key 和模型可用性，保姆级中文报错诊断插件，专为 DeepSeek Harness 打造。 |
| 12 | [ljcoder2015/dsh-canvas-flow](https://github.com/ljcoder2015/dsh-canvas-flow) | 2 | 2026-09-17 | 2026-10-09 | dsh-plugin |
| 13 | [Ronniealgo/dsh-route-balance](https://github.com/Ronniealgo/dsh-route-balance) | 2 | 2026-10-09 | 2026-10-09 | DSH 实验插件：侧边栏显示 API 余额与 ChatGPT/Codex 剩余额度；认证接口、零运行时依赖。 |
| 14 | [xiaotuchu/dsh-theme-eye-care](https://github.com/xiaotuchu/dsh-theme-eye-care) | 2 | 2026-10-04 | 2026-10-09 | Eye-care palettes — three switchable low-glare themes for the DeepSeek Harness GUI. |
| 15 | [xiaoweiqianluo/dsh-pardofelis-widget](https://github.com/xiaoweiqianluo/dsh-pardofelis-widget) | 2 | 2026-10-01 | 2026-10-09 | 给 DeepSeek Harness 做的《崩坏3》帕朵菲莉丝（Pardofelis）主题挂件。  对话页右下角多一个猫耳头像的悬浮按钮，点开是一个本地音乐播放器。 导入你自己电脑上的音乐文件，播放、切歌、调音量。  |
| 16 | [xling001/dsh-reading-companion](https://github.com/xling001/dsh-reading-companion) | 2 | 2026-09-23 | 2026-10-09 | DSH 的本地 TXT 书架 + 不剧透 AI 陪读：按你的进度滚动阅读，AI 只看得见你读过的部分，并把摘抄与感想整理成一份你自己可编辑的结构化背景笔记。 |
| 17 | [Yansera/dsh-living-memoir](https://github.com/Yansera/dsh-living-memoir) | 2 | 2026-10-07 | 2026-10-09 | DSH plugin — long-term memory as a short, categorized Markdown living document, rewritten in place each turn. |
| 18 | [yanwenzong1-pixel/xinlan-dsh-plugin](https://github.com/yanwenzong1-pixel/xinlan-dsh-plugin) | 2 | 2026-09-24 | 2026-10-09 | DSH 扩展坞｜给 DeepSeek Harness（DSH）插上更多接口：输入框预存文案/预存命令一键追加、一句话把整件事派给 PTC 子代理、长任务中断分级报警。DSH plugins for DeepSeek Harness: quick-append / ptc-task / dialogue-alert |
| 19 | [12we21/cute-fat-fish-pet](https://github.com/12we21/cute-fat-fish-pet) | 1 | 2026-10-08 | 2026-10-09 | 蓝毛小女仆 (Blue-Haired Little Maid) · 住在 Windows 桌面上的 Q 版蓝发小女仆桌宠：106 个手绘透明动画、本地 Ollama 或在线模型陪聊、可选看屏幕吐槽、离线语音识别。免费开源 MIT。同时是 DeepSeek Harness 桌宠插件（dsh-plugin）。By Mikolu. |
| 20 | [571242/dsh-armor-switch](https://github.com/571242/dsh-armor-switch) | 1 | 2026-10-07 | 2026-10-09 | A tiny, always-toggleable delivery-contract plugin for DeepSeek Harness. Off = byte-identical to stock; no host file is ever modified. |
| 21 | [arnen7000/DSH-Workbuddy-WebSearch](https://github.com/arnen7000/DSH-Workbuddy-WebSearch) | 1 | 2026-10-02 | 2026-10-09 | 将 WorkBuddy 桌面 App 的网络搜索接入 DeepSeek Harness 的 web_search 工具（零配置、零硬依赖） |
| 22 | [berhbro/dsh-cyrene-theme](https://github.com/berhbro/dsh-cyrene-theme) | 1 | 2026-10-09 | 2026-10-09 | Cyrene theme dsh plugin |
| 23 | [BioAIEvolu/dsh-md-studio](https://github.com/BioAIEvolu/dsh-md-studio) | 1 | 2026-10-09 | 2026-10-09 | Markdown Studio - DeepSeek Harness 原生右侧 Markdown 预览插件：Mermaid 图表 · KaTeX 公式 · 代码高亮，渲染引擎随包内置完全离线 / Native DSH sidebar preview with offline Mermaid, KaTeX and highlighting |
| 24 | [CN-Mg/dsh_infj_pet](https://github.com/CN-Mg/dsh_infj_pet) | 1 | 2026-10-08 | 2026-10-09 | INFJ-A_Just for w. |
| 25 | [ethanweave/dsh-connect-workbuddy](https://github.com/ethanweave/dsh-connect-workbuddy) | 1 | 2026-10-08 | 2026-10-09 | 在 DSH 中免费使用腾讯 CodeBuddy（WorkBuddy）账号额度：本机网关一键安装、开机自启、统一管理 \| Use your CodeBuddy quota inside DSH for free: one-shot Windows installer, logon autostart and unified management for workbuddy-gateway |
| 26 | [frankshi2024/dsh-compact-manager](https://github.com/frankshi2024/dsh-compact-manager) | 1 | 2026-10-09 | 2026-10-09 | Layered compaction-threshold manager for DeepSeek Harness: global / context-window tier / model policies with a live sidebar editor. |
| 27 | [isheng-eqi/dsh-educoder](https://github.com/isheng-eqi/dsh-educoder) | 1 | 2026-10-09 | 2026-10-09 | 头歌（EduCoder）作业自动化 DSH 插件：全量扫描未完成作业并一次做完。选择题零 token（平台在提交响应里回吐答案键），只有代码题调用模型。 |
| 28 | [jk-uzi/dsh-multi-remote](https://github.com/jk-uzi/dsh-multi-remote) | 1 | 2026-10-09 | 2026-10-09 | DSH 插件：SSH / WSL / Docker 三种远程开发 —— agent 的文件读写、命令、终端全部落在目标环境 |
| 29 | [lakeofsky347/dsh-wen_xiang](https://github.com/lakeofsky347/dsh-wen_xiang) | 1 | 2026-10-03 | 2026-10-09 | divination plugin for DeepSeek Harness desktop |
| 30 | [lion231226/dsh-peak-hours](https://github.com/lion231226/dsh-peak-hours) | 1 | 2026-10-09 | 2026-10-09 | Run-window switch for DeepSeek Harness: run always, or only in off-peak hours - every task pauses at China peak-price windows and resumes at the boundary. |
| 31 | [MajidAsghariTabrizi/credence](https://github.com/MajidAsghariTabrizi/credence) | 1 | 2026-10-08 | 2026-10-09 | Evidence-first agent memory and durable mission runtime — UNKNOWN states, immutable belief history, governed learning, and missions that survive kill -9. Zero-dependency TypeScript kernel. |
| 32 | [Mrdifferent2022/dsh-cad-design](https://github.com/Mrdifferent2022/dsh-cad-design) | 1 | 2026-10-09 | 2026-10-09 | Parametric CAD tools for DeepSeek Harness (dsh) — agent-driven mechanical design: CadQuery modeling, geometry validation, preview rendering, STEP/IGES/STL/3MF export |
| 33 | [Nakie-zjm/dsh-session-delete](https://github.com/Nakie-zjm/dsh-session-delete) | 1 | 2026-10-09 | 2026-10-09 | 给 DeepSeek Harness Desktop侧栏会话菜单加一项永久删除：删除会话日志与投影缓存并摘除工作区记账，失败时不留半删目录树。\| Permanent session delete for the DeepSeek Harness sidebar: removes a Session's log and projection cache, failure-safe, no runtime dependencies. |
| 34 | [OpencodeSilver/OpencodeSilver](https://github.com/OpencodeSilver/OpencodeSilver) | 1 | 2026-10-08 | 2026-10-09 | The complete autonomous AI coding assistant &amp; agent workspace for Desktop, Web, and VS Code. Multi-model fusion, 180 bundled skills, chat, and live trajectory. |
| 35 | [rifkyazizf/dsh-session-tabs](https://github.com/rifkyazizf/dsh-session-tabs) | 1 | 2026-10-08 | 2026-10-09 | small session tabs plugin for the DeepSeek Harness (dsh) desktop app |
| 36 | [ruiyukirin/dsh-prompt-optimization-master](https://github.com/ruiyukirin/dsh-prompt-optimization-master) | 1 | 2026-10-09 | 2026-10-09 | DSH 输入框一键提示词增强按钮 \| One-click prompt enhancement for the DeepSeek Harness composer: rewrite the unsent draft into a clearer, more specific prompt, restore the original with one click. Ported from Tencent WorkBuddy's EnhancePrompt design; independent model call that never touches the session log. |
| 37 | [ShawnRen57/omni-learning-assistant](https://github.com/ShawnRen57/omni-learning-assistant) | 1 | 2026-10-08 | 2026-10-09 | Omni Learning Assistant: a portable Agent Skill for personalized learning plans and daily PDF lessons. 通用学习助手。 |
| 38 | [SssoGin/MALTS](https://github.com/SssoGin/MALTS) | 1 | 2026-06-07 | 2026-10-09 | Multi-Agent Long-Task Scheduling and Growth System for AI coding agents, with file-based state, verification, handoff, and reusable learning. |
| 39 | [studyzy/dsh-i-am-rich](https://github.com/studyzy/dsh-i-am-rich) | 1 | 2026-10-09 | 2026-10-09 | dsh有钱人才用得起的插件 |
| 40 | [TheFold060629/dsh-task-assist](https://github.com/TheFold060629/dsh-task-assist) | 1 | 2026-10-09 | 2026-10-09 | DSH 任务辅助启动器：在对话框发送键旁放置一个常驻按钮，点击后自动扫描本会话已安装的、对当前任务有帮助的技能与 MCP 工具，弹候选清单（默认勾选匹配项），一键确认后把选中技能注入当前对话交给 Agent 自动执行。 |
| 41 | [YDT-china/dsh-web-search-session](https://github.com/YDT-china/dsh-web-search-session) | 1 | 2026-10-09 | 2026-10-09 | DSH web search using the current session model and a self-hosted retrieval backend |
| 42 | [ygzhang-lab/dsh-plugin-git-commit-push](https://github.com/ygzhang-lab/dsh-plugin-git-commit-push) | 1 | 2026-09-30 | 2026-10-09 | One-call Conventional-Commits git workflow for DSH: survey + commit + optional tag + push, plus a /commit-push slash command that runs with no model involvement. Windows and macOS/Linux. |
| 43 | [ZariaEcho/dsh-github-workflow](https://github.com/ZariaEcho/dsh-github-workflow) | 1 | 2026-08-14 | 2026-10-09 | GitHub deep-workflow tools for DeepSeek Harness (DSH) agents: issue triage with 4-layer context, template-aware draft PRs, graded PR review, CI diagnosis and GraphQL merge — behind a fail-closed mutation guard (read-only / approval / token scopes). |
| 44 | [Zhiyi-Zhao/dsh-notify](https://github.com/Zhiyi-Zhao/dsh-notify) | 1 | 2026-10-08 | 2026-10-09 | DeepSeek Harness plugin: real OS notifications (Windows Action Center, macOS Notification Center) when a turn finishes, fails, or an agent waits for your confirmation. |
| 45 | [zzy-fxxxexxxyxxx/dsh-openclaw-memory](https://github.com/zzy-fxxxexxxyxxx/dsh-openclaw-memory) | 1 | 2026-10-07 | 2026-10-09 | Keep your OpenClaw persona and memory when moving to DeepSeek Harness: one shared Markdown workspace, bounded context, and a native DSH Sidebar. |
| 46 | [135ty/dsh-git-commit-panel](https://github.com/135ty/dsh-git-commit-panel) | 0 | 2026-10-09 | 2026-10-09 | 在 DSH 网页界面里悬浮一个 Git 提交面板，改动看得见，提交信息交给 AI 写，一键提交。 |
| 47 | [439436269-ctrl/dsh-piano](https://github.com/439436269-ctrl/dsh-piano) | 0 | 2026-10-09 | 2026-10-09 | 滑动钢琴：在 DSH 界面里弹一条钢琴键盘，鼠标/触控板滑过去像刮奏（glissando）一样出声。A glissando piano keyboard inside the DeepSeek Harness UI. |
| 48 | [439436269-ctrl/dsh-scroll-piano](https://github.com/439436269-ctrl/dsh-scroll-piano) | 0 | 2026-10-09 | 2026-10-09 | 滚动钢琴：鼠标滑过 DSH 聊天区右边缘的竖条时，按纵向位置发出钢琴音（越上越高，特雷门琴式），竖条上还带「我的消息」刻度可跳转。A theremin-style scroll piano for the DeepSeek Harness UI. |
| 49 | [439436269-ctrl/dsh-session-path](https://github.com/439436269-ctrl/dsh-session-path) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: copy a session's log path (and an agent-readable handoff) so another session can read it and continue the work. |
| 50 | [4399Accelerator/dsh-study-planner](https://github.com/4399Accelerator/dsh-study-planner) | 0 | 2026-10-09 | 2026-10-09 | DSH（DeepSeek Harness）学习计划插件：会话视图里的「学习计划」标签，显示每日计划、课后题与打卡进度可视化，计划由对话生成。 |
| 51 | [acdsh4869/dsh-deepseek-web-relay](https://github.com/acdsh4869/dsh-deepseek-web-relay) | 0 | 2026-09-29 | 2026-10-09 | DSH (DeepSeek Harness) 插件：在左侧边栏加原生菜单项打开 chat.deepseek.com（独立窗口 + 登录态持久化），并支持 DSH 与网页端双向划词互传（基于 CDP）。 |
| 52 | [agi-redtea/dsh-weixin-web](https://github.com/agi-redtea/dsh-weixin-web) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness 微信 iLink 通道插件 |
| 53 | [agi321/dsh-temp-chat](https://github.com/agi321/dsh-temp-chat) | 0 | 2026-10-08 | 2026-10-09 | dsh-temp-chat可以在DeepSeek Harness的主会话里开启临时会话，用来向大模型提问与主会话上下文无关的内容，不会读取和污染主会话的上下文。可以在一个主会话里用/single-turn 开启多个上下文互不相关的临时会话。 |
| 54 | [ai-tool-labs/dsh-plugin-square](https://github.com/ai-tool-labs/dsh-plugin-square) | 0 | 2026-10-09 | 2026-10-09 | An all-in-one workspace plugin for DSH (DeepSeek Harness): it adds a global 「Square」panel to the Web GUI sidebar that manages Skills / Experts / Connectors (MCP) / Plugins in a single place. Web (\`dsh web\`) and Desktop (DeepSeek Harness.app) share the same code and build output. |
| 55 | [AIcivilization/dsh-model](https://github.com/AIcivilization/dsh-model) | 0 | 2026-10-08 | 2026-10-09 | Many model sources behind one OpenAI-compatible endpoint for DeepSeek Harness (dsh) and your tools: WorkBuddy, OpenCode Zen, Codex, Kimi… 多家模型汇成一个 OpenAI 兼容地址，dsh 和其他软件都能直接用。 |
| 56 | [aqiu817/dsh-llm-kilo-gateway](https://github.com/aqiu817/dsh-llm-kilo-gateway) | 0 | 2026-10-09 | 2026-10-09 | Kilo Gateway free-model provider for DeepSeek Harness: auto-discovers the free model catalog, exposes tools/reasoning/image capabilities, and adds a settings page for your own API key, the change log and token stats. |
| 57 | [Arun1016/dsh-cost](https://github.com/Arun1016/dsh-cost) | 0 | 2026-10-09 | 2026-10-09 | Account balance and per-session cost pill for DeepSeek Harness (dsh) web GUI: official peak/off-peak pricing, per-model breakdown, no credentials stored. |
| 58 | [Asthmatic123/dsh-newtype-multititle](https://github.com/Asthmatic123/dsh-newtype-multititle) | 0 | 2026-10-09 | 2026-10-09 | DSH 自由工作台插件 —— tab 化多会话 · 自由分栏 · 每窗格宿主原版对话框 (DeepSeek Harness plugin) |
| 59 | [Babydunx1/dsh-knowledge-bridge](https://github.com/Babydunx1/dsh-knowledge-bridge) | 0 | 2026-10-08 | 2026-10-09 | Host-level knowledge vault access with zero-config discovery, 3 retrieval tools, and destructive command safety guard for DeepSeek Harness. |
| 60 | [bauerelizabeth07139/dsh-math-rigor](https://github.com/bauerelizabeth07139/dsh-math-rigor) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: auditable mathematical proving — a local stdio MCP server with 23 tools, a bundled workflow skill and two slash commands. proven / refuted / inconclusive are never conflated. |
| 61 | [BruceZhang1993/dsh-codex-chrome](https://github.com/BruceZhang1993/dsh-codex-chrome) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: migrates OpenAI Codex's chrome@openai-bundled plugin into DSH as native mcp__chrome__* tools — drive your own Chrome (tabs, logged-in sessions, accessibility trees, screenshots, input) with a bundled control-chrome skill and zero runtime dependencies. |
| 62 | [BruceZhang1993/dsh-computer-use-linux](https://github.com/BruceZhang1993/dsh-computer-use-linux) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: bridges the computer-use-linux MCP server into DSH as native mcp__cul__* tools — AT-SPI accessibility trees, screenshots, window targeting, and Wayland/X11 input for Linux desktop control. |
| 63 | [bzhao0110/dsh-usage-dashboard](https://github.com/bzhao0110/dsh-usage-dashboard) | 0 | 2026-10-09 | 2026-10-09 | Token usage statistics dashboard plugin for DeepSeek Harness: stat cards, 53-week activity heatmap, per-model trend and model share |
| 64 | [Caiccc-a11y/dsh-wyymusic-player](https://github.com/Caiccc-a11y/dsh-wyymusic-player) | 0 | 2026-10-08 | 2026-10-09 | 一款可以在DSH里听wyy的插件 |
| 65 | [caob23/dsh-origin-bridge](https://github.com/caob23/dsh-origin-bridge) | 0 | 2026-10-09 | 2026-10-09 | Drive local Origin/OriginPro from chat: import .dat/.csv/.xlsx and workstation .bin, plot, fit, export, save editable .opju. dsh (DeepSeek Harness) plugin, 25 MCP tools. |
| 66 | [catEatRabbit/dsh-light-green-theme](https://github.com/catEatRabbit/dsh-light-green-theme) | 0 | 2026-10-09 | 2026-10-09 | DSH 浅绿主题 |
| 67 | [ccl4-56-23-5/DSH-Plugins](https://github.com/ccl4-56-23-5/DSH-Plugins) | 0 | 2026-10-09 | 2026-10-09 | DSH插件源码、完整文档与版本化安装包。api-switcher：供应商管理、模型启用、搜索与API切换。 |
| 68 | [chaunye/dsh-effort-slider-chaunye](https://github.com/chaunye/dsh-effort-slider-chaunye) | 0 | 2026-10-09 | 2026-10-09 | 推理等级滑条：DSH Web composer 里模型选择器旁的胶囊，点开是整宽渐变滑条（蓝→紫随档位推进、流光扫过、白钮拖动），复用官方模型目录的会话状态。 |
| 69 | [chenqaq123/dsh-remote-ssh](https://github.com/chenqaq123/dsh-remote-ssh) | 0 | 2026-10-08 | 2026-10-09 | deepseek harness的remote-ssh插件 |
| 70 | [cijiezhi/dsh-proxy-auto](https://github.com/cijiezhi/dsh-proxy-auto) | 0 | 2026-10-09 | 2026-10-09 | 让 DeepSeek Harness 自动跟随本机代理（开关代理免重启），并提供能翻墙抓页面的 proxy_fetch 工具 |
| 71 | [czk200518-hash/dsh-tlogs](https://github.com/czk200518-hash/dsh-tlogs) | 0 | 2026-10-07 | 2026-10-09 | DSH 内嵌 Token 历史总用量组件 |
| 72 | [dakeqiqi123/dsh-skill-market](https://github.com/dakeqiqi123/dsh-skill-market) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness 插件：在输入框里直接选技能，并在同一处管理技能（本地文件夹 / zip / 粘贴 / GitHub 四种安装来源） |
| 73 | [drscrewdriver/dsh-paste-dock](https://github.com/drscrewdriver/dsh-paste-dock) | 0 | 2026-10-03 | 2026-10-09 | DeepSeek Harness 插件:大段文本粘贴自动存为 pastes/*.txt,输入框上方 dock 卡片管理,草稿内只留最小徽标(auto-paste × paste-to-path 整合) |
| 74 | [Endless-zby/dsh-lan-share](https://github.com/Endless-zby/dsh-lan-share) | 0 | 2026-10-09 | 2026-10-09 | LAN text and file sharing for DeepSeek Harness — discover peers, send text/files, accept-or-ask policy |
| 75 | [f4ah6o/dsh-SIWC](https://github.com/f4ah6o/dsh-SIWC) | 0 | 2026-10-09 | 2026-10-09 | Sign in with ChatGPT on deepseek harness |
| 76 | [Faide-cyber/dsh-model-in-use](https://github.com/Faide-cyber/dsh-model-in-use) | 0 | 2026-10-08 | 2026-10-09 | 标记正在被其他会话占用的模型，记住每个模型的推理档位与分组折叠状态。 |
| 77 | [faith372/dsh-account-glance](https://github.com/faith372/dsh-account-glance) | 0 | 2026-10-09 | 2026-10-09 | DSH Web GUI sidebar glance card: DeepSeek account balance, peak/off-peak billing countdown and today's spend / tokens / calls, seated right above the account row. |
| 78 | [FenZhenHua/dsh-balance-meter](https://github.com/FenZhenHua/dsh-balance-meter) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: API 余额与本次会话费用（官方计费） |
| 79 | [FiVE0016/dsh-fold-polish](https://github.com/FiVE0016/dsh-fold-polish) | 0 | 2026-10-07 | 2026-10-09 | DSH 插件（显示名：UI 美化）：消息与工作步骤自动折叠、输入框与右侧栏可调、折叠内容可搜索｜Display polish for DeepSeek Harness: fold long messages and work-step blocks, resize the composer and the right sidebar, search folded content. |
| 80 | [Funny1Potato/dsh-onebot-hub](https://github.com/Funny1Potato/dsh-onebot-hub) | 0 | 2026-10-09 | 2026-10-09 | OneBot v11 hub for DeepSeek Harness: relays QQ events verbatim to downstream bots while giving the agent a full timeline, action ledger and 28 onebot_* tools. |
| 81 | [furkancak1r/dsh-composer-plus](https://github.com/furkancak1r/dsh-composer-plus) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness composer helpers: input history, one-click Continue, drag-and-drop queue reordering |
| 82 | [Fyue7/dsh-memory-optin](https://github.com/Fyue7/dsh-memory-optin) | 0 | 2026-10-09 | 2026-10-09 | 给 DSH 加一个会话级的记忆开关：每个对话由你决定要不要进全局记忆，默认不进。输入框工具行里的按钮 + 跨会话摘要注入。非官方插件。 |
| 83 | [Fyue7/dsh-restart-button](https://github.com/Fyue7/dsh-restart-button) | 0 | 2026-10-09 | 2026-10-09 | 给 DSH 会话头部加一颗重启按钮：完全退出并把新实例拉回来，全程零窗口。非官方插件。 |
| 84 | [gg947919490-byte/dsh-task-overlay](https://github.com/gg947919490-byte/dsh-task-overlay) | 0 | 2026-10-09 | 2026-10-09 | Desktop task overlay for DeepSeek Harness: goal / todo progress / pending-confirmation alerts, with an in-app switch. |
| 85 | [gmen1057/dsh-arckep](https://github.com/gmen1057/dsh-arckep) | 0 | 2026-10-09 | 2026-10-09 | Balance and spending of an arckep.ru account inside the DeepSeek Harness (DSH) web UI. Unofficial community plugin. |
| 86 | [Gnatnaituy/dsh-sidebar-git](https://github.com/Gnatnaituy/dsh-sidebar-git) | 0 | 2026-10-09 | 2026-10-09 | A Git tab in DSH's right sidebar: follows the session's repository to review changes and diffs, stage, commit, switch branches, push/pull — destructive ops go through a prepare→confirm gate. |
| 87 | [guiyidu-ui/dsh-plugin-3d-viewer](https://github.com/guiyidu-ui/dsh-plugin-3d-viewer) | 0 | 2026-10-09 | 2026-10-09 | DSH 三维查看器插件：消息里的 3d 代码块原地渲染为 Three.js 视图 + 右侧栏常驻 3D 预览面板（支持 obj/stl/gltf/glb） |
| 88 | [guomi6450/dsh-folder-timemachine](https://github.com/guomi6450/dsh-folder-timemachine) | 0 | 2026-10-09 | 2026-10-09 | 给任意文件夹留历史版本、随时回到过去——像 Git 一样有版本历史，但不需要懂 Git，游戏存档 / 软件配置 / 散落文档都能用。实时（改动静默 8 秒）或定时自动存档，按内容去重、内容没变不产生空版本、空文件夹也记录；每次恢复前自动存安全点，所以恢复本身也可撤销。DeepSeek Harness 插件，纯 JS 零依赖。 |
| 89 | [hanfengcan/dsh-viewer-kit](https://github.com/hanfengcan/dsh-viewer-kit) | 0 | 2026-10-04 | 2026-10-09 | 一个增强deepseek harness会话内容显示效果的插件 |
| 90 | [Hashing2030/dsh-bulwark](https://github.com/Hashing2030/dsh-bulwark) | 0 | 2026-10-09 | 2026-10-09 | DSH plugin: enforce AI rules and protect tools/paths from accidental modification. |
| 91 | [HEArtattaCK2332/dsh-text-explain](https://github.com/HEArtattaCK2332/dsh-text-explain) | 0 | 2026-10-09 | 2026-10-09 | 划词即解释：当ai叽里咕噜说一些看不懂的东西时，让他自己来解释。 |
| 92 | [helloHupc/dsh-wander-chat](https://github.com/helloHupc/dsh-wander-chat) | 0 | 2026-10-09 | 2026-10-09 | DSH 插件：在侧边栏「新会话」下方新增「新建漫游会话」，一键在不选择本地目录的情况下开会话；所有漫游会话统一归入一个可配置的固定工作区。 |
| 93 | [hjnvv00v/dsh-web-search-tavily-relay](https://github.com/hjnvv00v/dsh-web-search-tavily-relay) | 0 | 2026-10-09 | 2026-10-09 | Tavily-compatible web search provider for the DeepSeek Harness web seam (ctx.web): the official Tavily API, a Tavily-shaped relay, or an OpenAI-compatible gateway, all from configuration |
| 94 | [honwee/dsh-plugin-mynah](https://github.com/honwee/dsh-plugin-mynah) | 0 | 2026-10-09 | 2026-10-09 | Give your DeepSeek Harness agent a talking face: drive a Mynah realtime digital human (speak, interrupt, sessions, channels, knowledge base). |
| 95 | [Hope-Phenom/dsh-plugin-code-quality](https://github.com/Hope-Phenom/dsh-plugin-code-quality) | 0 | 2026-10-09 | 2026-10-09 | DSH 插件：给 \`/\` 菜单加上 /simplify（不改行为的清理）与 /code-review（多角度找 bug + 独立验证，/review 为别名），适配 DSH 的工具、指令文件布局与 subagent 模型。｜A DSH plugin adding /simplify and /code-review (alias /review) to the \`/\` menu. |
| 96 | [huangfuren/dsh-bg-plugin](https://github.com/huangfuren/dsh-bg-plugin) | 0 | 2026-09-08 | 2026-10-09 | DSH plugin: persistent full-window background image - upload, live preview, opacity/brightness/mask/blur/position/fit, config persisted to disk. Two packages: host + client. |
| 97 | [huangfuren/dsh-client-ui-aqua](https://github.com/huangfuren/dsh-client-ui-aqua) | 0 | 2026-09-27 | 2026-10-09 | Aqua: highly customizable glassmorphism theme for the DeepSeek Harness Web surface - adjustable blur, frost, fluid or wallpaper backdrop, unified corners, and motion. |
| 98 | [huangfuren/dsh-client-ui-balance](https://github.com/huangfuren/dsh-client-ui-balance) | 0 | 2026-09-08 | 2026-10-09 | Real-time provider API balance capsule for the DSH conversation session header |
| 99 | [huangfuren/dsh-localsend](https://github.com/huangfuren/dsh-localsend) | 0 | 2026-09-06 | 2026-10-09 | DSH plugin: send files across the LAN via LocalSend v2, share a temporary HTTP download link, or push to an SMB share - no client software needed on the receiver. |
| 100 | [huangfuren/dsh-sync](https://github.com/huangfuren/dsh-sync) | 0 | 2026-09-22 | 2026-10-09 | 把本机 dsh 配置同步到另一台机器：导出可移植 bundle（settings / 凭据(可选) / 插件源码 / profile 清单）并生成自安装 apply.ps1。接收方无需装 dsh-sync，跑一次脚本即可继续用 dsh。 |
| 101 | [hugefiver/ocmm](https://github.com/hugefiver/ocmm) | 0 | 2026-06-18 | 2026-10-09 | An alternative of omo. |
| 102 | [HunterXing/jev-judge](https://github.com/HunterXing/jev-judge) | 0 | 2026-10-09 | 2026-10-09 | A judgment kernel for coding agents: routine judgments go to a small Jev judge, and every verdict is recorded in a ledger. |
| 103 | [iBobbyTS/dsh-zcode-bridge](https://github.com/iBobbyTS/dsh-zcode-bridge) | 0 | 2026-10-08 | 2026-10-09 | Use Zcode runtime in DSH GUI, may use with other plugins in DSH. |
| 104 | [icyaaaww/dsh-time-machine](https://github.com/icyaaaww/dsh-time-machine) | 0 | 2026-10-09 | 2026-10-09 | An undo button for DeepSeek Harness: persistent checkpoints, diff previews and selected-file restoration. 改动时光机 |
| 105 | [irisblackwood/focus-guard](https://github.com/irisblackwood/focus-guard) | 0 | 2026-09-28 | 2026-10-09 | AI 履职执法模型 v3.0 + 动态预算系统 — ZCode 全自动防思考失控护栏插件（零依赖，MIT） |
| 106 | [ivanant/dsh-simple-remote](https://github.com/ivanant/dsh-simple-remote) | 0 | 2026-10-06 | 2026-10-09 | 这是一款 DeepSeek Harness Plugin，安装后无需设置，手机即可访问 |
| 107 | [JeffTsuiCUG/dsh-connect-minimaxcode](https://github.com/JeffTsuiCUG/dsh-connect-minimaxcode) | 0 | 2026-10-08 | 2026-10-09 | Bring MiniMax Code desktop app models into DeepSeek Harness (DSH). Unofficial, MIT. |
| 108 | [jjmlovesgit/dsh-plugin-coding-delegate](https://github.com/jjmlovesgit/dsh-plugin-coding-delegate) | 0 | 2026-10-06 | 2026-10-09 | A preventive governance plugin for DeepSeek Harness: the cloud planner is denied write and shell access, a local worker implements inside a bounded workspace, and promotion is hash-bound against a machine-checked or operator-attested record. Five boundaries, each failing closed. |
| 109 | [JochenYang/dsh-rewind-plugin](https://github.com/JochenYang/dsh-rewind-plugin) | 0 | 2026-10-09 | 2026-10-09 | Message recall for DeepSeek Harness (dsh): cut the conversation back to before a message you already sent, and put its text back in the composer. |
| 110 | [keatsyh/dsh-plugin-addir](https://github.com/keatsyh/dsh-plugin-addir) | 0 | 2026-10-09 | 2026-10-09 | Multi-directory workspaces for DeepSeek Harness. |
| 111 | [Kerberos255/dsh-desktop-tools](https://github.com/Kerberos255/dsh-desktop-tools) | 0 | 2026-10-09 | 2026-10-09 | Windows desktop automation for DeepSeek Harness: UI Automation, screenshots, scoped actions and native permissions. |
| 112 | [Kiteluo/dsh-bgame](https://github.com/Kiteluo/dsh-bgame) | 0 | 2026-10-08 | 2026-10-09 | DSH Web 小游戏插件：德州扑克、21 点、五子棋、UNO，支持电脑和模型对手。 |
| 113 | [krodon998/dsh-get-memory](https://github.com/krodon998/dsh-get-memory) | 0 | 2026-10-09 | 2026-10-09 | Get记忆插件：DSH 的外置大脑——对话开始自动拉取 GitHub 仓库内容注入上下文，对话结束提取值得长期记住的新信息按文件写回并提交；左栏面板 + 原生设置页全图形化配置。Get 记忆 + Git 记忆。 |
| 114 | [lance808/dsh-think-zh](https://github.com/lance808/dsh-think-zh) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: make the agent reason (think) in Chinese by contributing a system-prompt section |
| 115 | [LanYun417/dsh-expert-suite](https://github.com/LanYun417/dsh-expert-suite) | 0 | 2026-10-09 | 2026-10-09 | 面向 DSH（DeepSeek Harness）的专家与专家团插件：给 AI 加"角色与团队"两个协作维度——用一个领域专家的身份干活，或拉起一支多 Agent 团队按流程交付。 |
| 116 | [LEEKINBUN-dsh-tools/dsh-backroom](https://github.com/LEEKINBUN-dsh-tools/dsh-backroom) | 0 | 2026-10-09 | 2026-10-09 | dsh plugin: read-only host diagnostics (log tail, service-face reachability, crash attribution) plus a key-gated session mouth, closed by default. |
| 117 | [leolee9086/dsh-better-session-query](https://github.com/leolee9086/dsh-better-session-query) | 0 | 2026-09-25 | 2026-10-09 | DSH plugin: block-level parallel index over session history |
| 118 | [LiBinDeve/dsh-secretary](https://github.com/LiBinDeve/dsh-secretary) | 0 | 2026-10-09 | 2026-10-09 | A secretary agent preset for DeepSeek Harness to create projects, start independent task sessions, read progress, and send follow-up instructions. |
| 119 | [lion231226/dsh-verified-progress](https://github.com/lion231226/dsh-verified-progress) | 0 | 2026-10-09 | 2026-10-09 | Verified-progress ledger for long-running DSH work: an independent verifier certifies each claimed step, and a fingerprint check voids any verdict whose verifier mutated the workspace. |
| 120 | [Lithane/dsh-account-balance](https://github.com/Lithane/dsh-account-balance) | 0 | 2026-10-09 | 2026-10-09 | dsh-account-balance插件，在dsh左下角显示deepseek账号余额 |
| 121 | [Liuyixin-lily/dsh-bio-human-microbiome-function-mining](https://github.com/Liuyixin-lily/dsh-bio-human-microbiome-function-mining) | 0 | 2026-10-09 | 2026-10-09 | 人体微生物功能暗物质挖掘 dsh 插件：把目标酶/EC/底物-产物反应转化为候选蛋白、序列/结构/FedKEA/文献证据链与可验证实验方案。内置 9 个 skill 和 19 个脚本，支持 DIAMOND/CD-HIT/US-align/DEER/FedKEA/Bakta 外部工具接入，结构优先排序。 |
| 122 | [louisremi/dsh-always-on](https://github.com/louisremi/dsh-always-on) | 0 | 2026-10-01 | 2026-10-09 | DSH Alway-On: adapt DeepSeek Harness to be used in containers. Browse folders, download files and edit them right from DSH's Web UI |
| 123 | [loyalchiiina/dsh-lit-fetch](https://github.com/loyalchiiina/dsh-lit-fetch) | 0 | 2026-10-09 | 2026-10-09 | DSH literature fetcher: search academic papers, download PDFs via Sci-Hub/Open Access, generate batch manifests |
| 124 | [lsnnn123/dsh-screenshot-win](https://github.com/lsnnn123/dsh-screenshot-win) | 0 | 2026-10-08 | 2026-10-09 | DSH 屏幕截图插件（Windows）：聊天输入框的相机按钮 + Agent 可调用的 screenshot 工具，支持框选区域、指定窗口、整屏；截图直接进入对话，并保存到工作区。 |
| 125 | [Luca4Don3/dsh-opencode-live-models](https://github.com/Luca4Don3/dsh-opencode-live-models) | 0 | 2026-09-28 | 2026-10-09 | Keep OpenCode Go models fresh in DeepSeek Harness without waiting for bundled pi-ai catalog updates |
| 126 | [Luca4Don3/dsh-shell](https://github.com/Luca4Don3/dsh-shell) | 0 | 2026-09-29 | 2026-10-09 | DSH 插件：为智能体一次性命令与持久终端选择 Shell（Bash、Zsh、fish、PowerShell、Git Bash、MSYS2、Cygwin、WSL）。 / DSH plugin: choose the shell for agent one-shot commands and persistent terminals (Bash, Zsh, fish, PowerShell, Git Bash, MSYS2, Cygwin, WSL). |
| 127 | [luhcow/dsh-native-search](https://github.com/luhcow/dsh-native-search) | 0 | 2026-10-09 | 2026-10-09 | Native hosted web search for DeepSeek Harness: one request, verified search evidence, no fallback. |
| 128 | [MacilyDots/dsh-image-count-guard](https://github.com/MacilyDots/dsh-image-count-guard) | 0 | 2026-10-07 | 2026-10-09 | DSH 插件：上游网关按图片张数拒绝请求时，把最旧的图片卸载为占位文本并重试，恢复卡死的视觉模型会话（复用官方 image/offload 投影）。 |
| 129 | [MacilyDots/dsh-mobile-access](https://github.com/MacilyDots/dsh-mobile-access) | 0 | 2026-10-07 | 2026-10-09 | DeepSeek Harness 移动访问插件：同一局域网内手机扫码、浏览器访问。独立 HTTPS 网关 + PIN 认证 + 反向代理 + DSH 浏览器会话认证桥接，不修改 DSH 源码，DSH Web 仍留在 127.0.0.1。 |
| 130 | [MacilyDots/dsh-olivia-bridge](https://github.com/MacilyDots/dsh-olivia-bridge) | 0 | 2026-10-06 | 2026-10-09 | 《BSide: Olivia Lin》离线客户端的本地信件桥：复现 /toy/letter/* 契约，由 DSH agent 会话回信并记住每一封信 |
| 131 | [MacilyDots/dsh-prompt-inject](https://github.com/MacilyDots/dsh-prompt-inject) | 0 | 2026-10-06 | 2026-10-09 | DSH plugin: register a configurable prompt variable so agent presets that use complete:true personas can still receive an injected text block. |
| 132 | [MacilyDots/dsh-session-inherit](https://github.com/MacilyDots/dsh-session-inherit) | 0 | 2026-10-09 | 2026-10-09 | DSH plugin: adds an "Inherit" row to the session menu - mechanically extracts concrete anchors (task, recent instructions, touched files, commands, todos) from a long session and continues the work in a clean session without the old history. No LLM call. |
| 133 | [MacilyDots/dsh-turn-chime](https://github.com/MacilyDots/dsh-turn-chime) | 0 | 2026-10-06 | 2026-10-09 | Conversation-completion chime for DeepSeek Harness: plays a sound when a user-initiated task actually finishes, not when it is interrupted. |
| 134 | [Mark-mph/dsh-kb-curator](https://github.com/Mark-mph/dsh-kb-curator) | 0 | 2026-10-09 | 2026-10-09 | Bundles the kb-curator skill: a local three-layer knowledge base engine for DeepSeek Harness that refuses to index anything you have not approved. |
| 135 | [megablue/dsh-feature-map](https://github.com/megablue/dsh-feature-map) | 0 | 2026-10-09 | 2026-10-09 | Docs before code: one page per feature so your agent stops grepping and starts knowing. |
| 136 | [mhxy13867806343/dsh-sidebar-account](https://github.com/mhxy13867806343/dsh-sidebar-account) | 0 | 2026-10-09 | 2026-10-09 | DSH Desktop 侧栏余额行插件：显示「余额 ¥xx + 充值」，与「版本 / 检查更新」那行对齐（余额在左、充值在右） |
| 137 | [mhxy13867806343/dsh-update-vd](https://github.com/mhxy13867806343/dsh-update-vd) | 0 | 2026-10-09 | 2026-10-09 | dsh-update-vd |
| 138 | [MingShi350/dsh-ikuai-mcp](https://github.com/MingShi350/dsh-ikuai-mcp) | 0 | 2026-10-09 | 2026-10-09 | DSH plugin: control iKuai (爱快) soft routers over their JSON API. Zero-dependency Node MCP stdio server exposing 11 read tools plus a write-gated generic API call; credentials live in the DSH credential store. |
| 139 | [Mr54233/dsh-restart-now](https://github.com/Mr54233/dsh-restart-now) | 0 | 2026-10-09 | 2026-10-09 | One-click full-app restart plugin for DeepSeek Harness desktop (DSH) — 侧边栏一键重启 DeepSeek Harness 桌面版 |
| 140 | [mutoharohfiqhiabcd-source/dsh-lead-panel](https://github.com/mutoharohfiqhiabcd-source/dsh-lead-panel) | 0 | 2026-10-09 | 2026-10-09 | DSH 领导面板：与「领导」对话、切换它的模型、实时看 token/金额/预计剩余时间，并由它把任务派给工人 AI（Agent Teams） |
| 141 | [Naskete/dsh-agnes-image](https://github.com/Naskete/dsh-agnes-image) | 0 | 2026-10-09 | 2026-10-09 | 使用agens免费api key生成图片 |
| 142 | [new-sailfish/duck-fleet](https://github.com/new-sailfish/duck-fleet) | 0 | 2026-10-08 | 2026-10-09 | Herd computers like ducks. 🦆 |
| 143 | [nsswkj/dsh-typewriter-blip](https://github.com/nsswkj/dsh-typewriter-blip) | 0 | 2026-10-09 | 2026-10-09 | Speech blips while the assistant's answer streams - audible even when the window is in the background; swappable voices, or shape your own. |
| 144 | [okku000/dsh-ollama-quota](https://github.com/okku000/dsh-ollama-quota) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: show the Ollama Cloud credit balance and recent usage as a Settings section, with an in-page API key editor. |
| 145 | [OrinVoss/dsh-plugins](https://github.com/OrinVoss/dsh-plugins) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness (DSH) 社区插件集：长期记忆 / 桌面宠物 / 7 套皮肤 / Token 用量报表 / 系统状态 / 旁支提问 / Agent Teams fork（上限 16 + release_teammate）\| Community plugins for DeepSeek Harness. |
| 146 | [Physicolor/dsh-design-resources](https://github.com/Physicolor/dsh-design-resources) | 0 | 2026-10-05 | 2026-10-09 | DeepSeek Design Resources — the interface spec, the reusable-source knowledge base and a live component gallery for DeepSeek Harness plugin authors. |
| 147 | [programerror233/dsh-zh-thinking](https://github.com/programerror233/dsh-zh-thinking) | 0 | 2026-10-09 | 2026-10-09 | 强制 DeepSeek Harness 中的模型用简体中文思考与作答：注册常驻 system prompt section，对所有会话、工作区与子代理生效，不进历史、不被压缩丢弃。 |
| 148 | [QR-0W/dsh-independent-auto-review](https://github.com/QR-0W/dsh-independent-auto-review) | 0 | 2026-10-09 | 2026-10-09 | Independent Auto Review model settings and GUI for DeepSeek Harness. |
| 149 | [qusaykhadour/dsh-notify-ar](https://github.com/qusaykhadour/dsh-notify-ar) | 0 | 2026-10-09 | 2026-10-09 | Arabic-first actionable Windows notifications for DeepSeek Harness (dsh): toast buttons that approve permissions, continue, or stop the agent — without opening the app. Bilingual ar/en with RTL. |
| 150 | [QWHYQ114514-cell/dsh-balance-peek](https://github.com/QWHYQ114514-cell/dsh-balance-peek) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness plugin: minimal two-line balance, today's spend and peak/off-peak readout at the sidebar foot. |
| 151 | [renjianbuchai/dsh-session-attention](https://github.com/renjianbuchai/dsh-session-attention) | 0 | 2026-10-09 | 2026-10-09 | Browser-side attention reminders for DeepSeek Harness — desktop notification, tab-title dot and PWA badge when a reply finishes in the background or a session needs your input. 会话在后台跑完或等你回应时：系统通知 + 标题红点 + PWA 徽标。 |
| 152 | [RonnieGex/dsh-cited](https://github.com/RonnieGex/dsh-cited) | 0 | 2026-10-09 | 2026-10-09 | Cited for DeepSeek Harness: search your documents and answer with citations. Install by pasting this repository in Plugins. |
| 153 | [samirliu/dsh-goalloop-agentteams](https://github.com/samirliu/dsh-goalloop-agentteams) | 0 | 2026-10-09 | 2026-10-09 | Deterministic goal-completion gate for DSH: contract-first AC grammar, re-runs every verify command itself (zero model trust), binds verdicts to a tree digest, denies false completion on update_goal/update_task via tools/pre-execute. Ports goal-loop's judging face onto native Agent Teams + task board. |
| 154 | [scottzx/session-reader](https://github.com/scottzx/session-reader) | 0 | 2026-09-13 | 2026-10-09 | Search and read local Claude Code, Codex, Antigravity, Grok and DSH sessions with the 1session CLI or DSH Web plugin. Raw files stay local; SQLite speeds search. |
| 155 | [seekbuddy/dsh-ui](https://github.com/seekbuddy/dsh-ui) | 0 | 2026-10-09 | 2026-10-09 | Unofficial React components in the DeepSeek Harness (DSH) web UI design system: the DSH primitives plus the components DSH lacks (cards, tabs, pagination, messages, upload, date/time pickers), on the same --dsw-* tokens. |
| 156 | [senyayume/dsh-image-once](https://github.com/senyayume/dsh-image-once) | 0 | 2026-10-09 | 2026-10-09 | DSH plugin: inline each image block only in the request where it first appears, then swap it for the harness's own placeholder text |
| 157 | [shinchen6/dsh-git-view](https://github.com/shinchen6/dsh-git-view) | 0 | 2026-10-09 | 2026-10-09 | dsh中查看git修改，支持编辑和git暂存、提交等操作，支持使用dsh中配置的模型生成提交信息 |
| 158 | [sixzjd/dsh-folder-attach](https://github.com/sixzjd/dsh-folder-attach) | 0 | 2026-10-09 | 2026-10-09 | Add folder references to the DeepSeek Harness web composer: host folder dialog, /folder command, and folder drag/paste resolved into @path mentions. |
| 159 | [skillre/dsh-plugin-tavily-firecrawl](https://github.com/skillre/dsh-plugin-tavily-firecrawl) | 0 | 2026-09-30 | 2026-10-09 | Tavily search and Firecrawl fetch providers for the DeepSeek Harness web seam, with a rotating multi-key credential pool |
| 160 | [slow-stack/dsh-study-desk](https://github.com/slow-stack/dsh-study-desk) | 0 | 2026-10-08 | 2026-10-09 | DSH（DeepSeek Harness）考研工作台插件：Notion 式待办墙 + 按复习时长点亮的学习热力图 + 跨面板存活的番茄钟，零运行时依赖，只消费主题 token。 |
| 161 | [sopreigj/dsh-project-forge](https://github.com/sopreigj/dsh-project-forge) | 0 | 2026-10-09 | 2026-10-09 | Project Forge — a DeepSeek Harness agent preset: local-only git, four state documents, layout &amp; naming discipline, compaction recovery, five write guards. |
| 162 | [sugarmaster666/dsh-persona-forge](https://github.com/sugarmaster666/dsh-persona-forge) | 0 | 2026-10-09 | 2026-10-09 | 给 DeepSeek Harness 用的角色扮演提示词改写插件：在输入框选一张角色卡，草稿就会由 harness 的模型改写成该角色的口吻（跟随当前会话正在使用的模型），然后直接发出或先人工审查。零依赖、零构建。 |
| 163 | [TerryYu12/dsh-liang-calibrator](https://github.com/TerryYu12/dsh-liang-calibrator) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness 前端插件：把模型/推理等级控件换成一台滑动变阻器（31 档，档位图铺背景后 5 秒淡出） |
| 164 | [timestatic/dsh-session-notebook](https://github.com/timestatic/dsh-session-notebook) | 0 | 2026-10-02 | 2026-10-09 | 面向 DeepSeek Harness(DSH)的本地优先笔记插件:把对话片段划线、引用, 整理成侧边栏里可搜索、可打标签、可导出的个人知识库。 |
| 165 | [TJZF-4j97/dsh-sandbox-console-fix](https://github.com/TJZF-4j97/dsh-sandbox-console-fix) | 0 | 2026-10-09 | 2026-10-09 | ⚠️ NOT REVIEWED BY ANY HUMAN - AI-generated (DeepSeek V4.1-flash). DeepSeek Harness desktop 0.2.0-rc.2 (Windows) bundle: gives the ACL sandbox runner a console so confined pwsh/cmd/powershell start again under workspace-write. No confinement is relaxed. dsh-plugin. |
| 166 | [tyjean428/ccreach-dsh-web-search](https://github.com/tyjean428/ccreach-dsh-web-search) | 0 | 2026-10-08 | 2026-10-09 | CCReach capability-search provider for DeepSeek Harness. Lets agents discover data sources, tools, APIs, MCP servers, skills and workflows with source evidence and access conditions. |
| 167 | [vb2250158/dsh-environment-sync](https://github.com/vb2250158/dsh-environment-sync) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH environment synchronization and personal plugin management |
| 168 | [vb2250158/dsh-gpt-tool-schema-compatibility](https://github.com/vb2250158/dsh-gpt-tool-schema-compatibility) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH plugin: dsh-gpt-tool-schema-compatibility |
| 169 | [vb2250158/dsh-gpt-web-search](https://github.com/vb2250158/dsh-gpt-web-search) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH plugin: dsh-gpt-web-search |
| 170 | [vb2250158/dsh-jev-context-gate](https://github.com/vb2250158/dsh-jev-context-gate) | 0 | 2026-09-22 | 2026-10-09 | Data-driven preflight and evidence-aware review gates for DeepSeek Harness |
| 171 | [vb2250158/dsh-mobile-layout](https://github.com/vb2250158/dsh-mobile-layout) | 0 | 2026-08-31 | 2026-10-09 | Mobile-first layout plugin for DeepSeek Harness |
| 172 | [vb2250158/dsh-nas-workspace-support](https://github.com/vb2250158/dsh-nas-workspace-support) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH plugin: dsh-nas-workspace-support |
| 173 | [vb2250158/dsh-openai-responses-web-search](https://github.com/vb2250158/dsh-openai-responses-web-search) | 0 | 2026-08-27 | 2026-10-09 | Configurable OpenAI Responses API provider for DSH web search. |
| 174 | [vb2250158/dsh-provider-visibility](https://github.com/vb2250158/dsh-provider-visibility) | 0 | 2026-08-27 | 2026-10-09 | Provider visibility policy and Model list settings page |
| 175 | [vb2250158/dsh-rabi-default-persona](https://github.com/vb2250158/dsh-rabi-default-persona) | 0 | 2026-08-27 | 2026-10-09 | Durable global Rabi persona prompt and its DSH settings page |
| 176 | [vb2250158/dsh-rabiroute-agent](https://github.com/vb2250158/dsh-rabiroute-agent) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH plugin: dsh-rabiroute-agent |
| 177 | [vb2250158/dsh-source-preservation-guidance](https://github.com/vb2250158/dsh-source-preservation-guidance) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH plugin: dsh-source-preservation-guidance |
| 178 | [vb2250158/dsh-speech-service](https://github.com/vb2250158/dsh-speech-service) | 0 | 2026-10-07 | 2026-10-09 | Removable speech enhancements for DeepSeek Harness voice input |
| 179 | [vb2250158/dsh-subagent-output-sanitizer](https://github.com/vb2250158/dsh-subagent-output-sanitizer) | 0 | 2026-08-27 | 2026-10-09 | Open-source DSH plugin: dsh-subagent-output-sanitizer |
| 180 | [vb2250158/dsh-theme-blue](https://github.com/vb2250158/dsh-theme-blue) | 0 | 2026-08-27 | 2026-10-09 | Private blue theme foundation for the DeepSeek Harness web client |
| 181 | [vb2250158/dsh-turn-continuation](https://github.com/vb2250158/dsh-turn-continuation) | 0 | 2026-08-27 | 2026-10-09 | Continue an unfinished interrupted DSH Web agent turn from its saved session context |
| 182 | [weimingyu9312/DSHDirect](https://github.com/weimingyu9312/DSHDirect) | 0 | 2026-10-09 | 2026-10-09 | 把原本独立的 MCP 直连管理器 \`dsh-mcp-direct\` 封装成 DSH 持久化插件，并在 Web GUI 内提供 MCP 服务器管理界面。绕开DSH 自带的 \`@deepseek-ai/dsh-mcp-client\`导致的Desktop 宿主 V8 OOM 崩溃 |
| 183 | [wobenshiwomu/dsh-bite](https://github.com/wobenshiwomu/dsh-bite) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness 插件：咬钩 —— 钉住的关键回合（提问+回复打包）在上下文压缩后自动找回重注入，压缩也带不走；Web UI 钉子按钮 + 肥鱼掠食动画 \| Pin your turns; survive compaction |
| 184 | [Woo3aN/dsh-peak-bar](https://github.com/Woo3aN/dsh-peak-bar) | 0 | 2026-10-09 | 2026-10-09 | DSH 插件：窗口标题栏居中的一枚小胶囊，显示 DeepSeek API 峰谷时段、账户余额与今日已用；颜色跟随当前皮肤。 |
| 185 | [wqzhellohhwy/dsh-web-fetch-lan](https://github.com/wqzhellohhwy/dsh-web-fetch-lan) | 0 | 2026-10-09 | 2026-10-09 | 让 DeepSeek Harness 的 web_fetch 在 Clash/mihomo 的 fake-ip（TUN）下可用：放行 fake-ip 段，仍拒绝回环/内网/云元数据等地址。零依赖 DSH 插件。 |
| 186 | [wt0812/dsh-vocab-study](https://github.com/wt0812/dsh-vocab-study) | 0 | 2026-10-09 | 2026-10-09 | Offline vocabulary panel for DeepSeek Harness: a capsule beside the composer and a sidebar tab. |
| 187 | [xiaoiver/dsh-unified-computer-use](https://github.com/xiaoiver/dsh-unified-computer-use) | 0 | 2026-10-09 | 2026-10-09 | Persistent Computer Use REPL and embedded browser for DeepSeek Harness; reuses the host runtime without patches |
| 188 | [xinyangGL/dsh-open-code-review](https://github.com/xinyangGL/dsh-open-code-review) | 0 | 2026-10-08 | 2026-10-09 | 代码评审插件（DeepSeek Harness × 阿里 OpenCodeReview）：默认不打扰，回合尾部一个按钮或一句「跑一次评审」即可；结果逐条落到文件:行 \[severity\] 问题。也能做自动评审与独立评审 agent。 |
| 189 | [xixifu018/LyricDisplay](https://github.com/xixifu018/LyricDisplay) | 0 | 2026-10-09 | 2026-10-09 | 洛雪音乐桌面歌词浮窗 + DSH Web GUI 插件 |
| 190 | [xuliji/bark-notify](https://github.com/xuliji/bark-notify) | 0 | 2026-10-09 | 2026-10-09 | DSH 插件：Agent 运行结束、需要人工授权、或运行出错时，通过 Bark 推送到 iPhone / Apple Watch。 |
| 191 | [xwamt/at-terminal-dsh](https://github.com/xwamt/at-terminal-dsh) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness native SSH terminal and SFTP workspace with direct agent tools and security sandboxing. |
| 192 | [Xylocarpro/dsh-reasoning-slider](https://github.com/Xylocarpro/dsh-reasoning-slider) | 0 | 2026-10-08 | 2026-10-09 | 类Codex的DSH思考强度滑动条/滑块 |
| 193 | [xyrrrrr-r/dsh-eval-control](https://github.com/xyrrrrr-r/dsh-eval-control) | 0 | 2026-10-09 | 2026-10-09 | Host-side DSH evaluation control plugin for aeval：一次评测试次的配置注入、预算封顶与证据归属 |
| 194 | [yebaihyp/dsh-vibe-coding-prd](https://github.com/yebaihyp/dsh-vibe-coding-prd) | 0 | 2026-10-09 | 2026-10-09 | 把一个说不清需求的人，通过一问一答，带到一份 AI 能直接照着开工的 PRD。 |
| 195 | [yijiezhong/dsh-testhud](https://github.com/yijiezhong/dsh-testhud) | 0 | 2026-09-16 | 2026-10-09 | On-screen progress HUD for automated tests in DeepSeek Harness (dsh): a click-through panel drawn over the app under test, plus the test_hud tool that drives it. |
| 196 | [youhuangqing/dsh-pet-plus](https://github.com/youhuangqing/dsh-pet-plus) | 0 | 2026-10-09 | 2026-10-09 | DSH 桌宠插件 dsh-pet 的二创版：新增亲密度养成、番茄钟、语音朗读、音效、增强菜单、每日统计；可与原版并存 |
| 197 | [yuanstarstar/dsh-bit-login](https://github.com/yuanstarstar/dsh-bit-login) | 0 | 2026-10-08 | 2026-10-09 | DSH plugin for BIT: campus network (Srun) status/login/logout, plus scores, schedule, profile, free classrooms and exams. |
| 198 | [yunyv/dsh-intelligent-ui](https://github.com/yunyv/dsh-intelligent-ui) | 0 | 2026-10-09 | 2026-10-09 | DSH 插件：生成式界面 / Generative UI for DeepSeek Harness。模型写声明式 DSL，无 DOM Worker 沙箱里执行，宿主用原生 DOM 画成真界面；另有一条自包含文档的逃生舱。原地改写、版本历史、跨重启可 patch。对标 ChatGPT Intelligent UI 与 Claude Artifacts。 |
| 199 | [yuyang2230/dsh-zcode-coding-plan](https://github.com/yuyang2230/dsh-zcode-coding-plan) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness desktop plugin: dispatch GLM Coding Plan tasks through the official ZCode CLI (1.5x plan credits, native agent tools, quota-aware auto-routing) |
| 200 | [zbzbhshs/dsh-gov-workbench](https://github.com/zbzbhshs/dsh-gov-workbench) | 0 | 2026-10-09 | 2026-10-09 | 政务门户风格的 dsh 插件：独立端口提供一个办事大厅界面，直接对接宿主的会话、模型与权限。 |
| 201 | [ZeroClave/zeroclave-dsh-privacy](https://github.com/ZeroClave/zeroclave-dsh-privacy) | 0 | 2026-09-09 | 2026-10-09 | Privacy firewall for DeepSeek Harness: detect and redact sensitive text before sending. |
| 202 | [zhanghui6666/paste-as-text-attachment](https://github.com/zhanghui6666/paste-as-text-attachment) | 0 | 2026-10-09 | 2026-10-09 | 将 DSH 聊天输入框中的长文本粘贴转为 .txt 附件。支持设置字符阈值和启用/关闭；普通输入与短文本粘贴不受影响。 |
| 203 | [zhangj1164/dsh-mega-plugins](https://github.com/zhangj1164/dsh-mega-plugins) | 0 | 2026-09-09 | 2026-10-09 | DSH mega plugins monorepo — a collection of DeepSeek Harness plugins |
| 204 | [zhanshenovo/dsh-brake-pedal](https://github.com/zhanshenovo/dsh-brake-pedal) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness 客户端插件：给长任务一场『6 脚全力制动测试』，支架随机断在第 2–6 脚（约 1/8 不裂）。纯表演，从不接管、不拦截、不延迟任何停止动作。 |
| 205 | [zhanshenovo/dsh-bushaoxin](https://github.com/zhanshenovo/dsh-bushaoxin) | 0 | 2026-10-09 | 2026-10-09 | 把「不烧心」做成 DeepSeek Harness 文风层 + 短剧改写引擎。不改代码，只改你听警告时的注意力。 |
| 206 | [zhishengplus/dsh-image-annotate](https://github.com/zhishengplus/dsh-image-annotate) | 0 | 2026-10-09 | 2026-10-09 | An annotation pen for the DeepSeek Harness image lightbox: circle, label, then keep moving / resizing / re-editing every mark — and send the annotated PNG straight into the composer. 给 DSH 图片预览加一支画笔。 |
| 207 | [zongyanbai/dsh-context-continuum](https://github.com/zongyanbai/dsh-context-continuum) | 0 | 2026-10-08 | 2026-10-09 | 把 DeepSeek Harness 的上下文压缩从「滚动重写的叙事摘要」改成「只追加的会话索引」；三条实测缺陷已取证，征集社区修复。 |
| 208 | [ztllll/dida-todo](https://github.com/ztllll/dida-todo) | 0 | 2026-08-10 | 2026-10-09 | 中文优先：让滴答清单成为人类与 Agent 共享的 Todo 真源（Pi 扩展 + dsh 插件），双向同步、提醒、强制人类验收，dsh 会话中断自动续跑。 |
| 209 | [zx06/dsh-plugins](https://github.com/zx06/dsh-plugins) | 0 | 2026-10-09 | 2026-10-09 | DeepSeek Harness (DSH) plugins monorepo — Tavily web search plugin with a ctx.web search provider, five agent tools, and a settings page |
| 210 | [zx06/dsh-tavily](https://github.com/zx06/dsh-tavily) | 0 | 2026-10-09 | 2026-10-09 | Tavily web search plugin for DeepSeek Harness (DSH): ctx.web search provider + search/extract/crawl/map/research tools + settings page (API key, quota, audit) |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- acdsh4869/dsh-DeepSeek-chat
- diqierjia/StrataGate-AgentMemory
- EmmanuelMartinez/tolten-image-attach
- ethanweave/workbuddy-gateway-dsh
- FiVE0016/dsh-bubble-fold
- gcry13067381632-jpg/dsh-qqbot
- hakimedes/dsh-easyremote
- jingkun05/dsh-session-delete-native
- Koierrr/Thalamus
- lakeofsky347/dsh-meihua
- laym0nd/dsh-labrador
- levi-qiao/dsh-plugin-longgraph
- ljcoder2015/dsh-canvas
- louisremi/dsh-docker-adapter
- Mrtime-gege/dsh-agent-shell
- supengpeng/dsh-ssh
- WayneJin0918/dsh-wm
- xiaomao49/dsh-model-probe
- Zleap-AI/dsh-sag
