# 待审核仓库 / Pending review

> 新增到 `dsh-plugin` Topic 下、带有简介、尚未经维护者核实的仓库。本文件由 `scripts/update.mjs` 每日刷新，仅供审核使用，不是用户可见页面。
>
> Repositories newly added to the `dsh-plugin` topic that the maintainer has not verified yet. Refreshed daily by `scripts/update.mjs`; review-only, not a user-facing page.

- 生成时间 / Generated: **2026-11-15**
- 快照日期 / Snapshot date: **2026-11-15 (UTC)**
- 待审核 / Pending: **358**
- 从快照消失的已核准仓库 / Approved repositories missing from the snapshot: **22**
- Star 异常增长 / Star-growth alerts: **9** — 先看下方告警节 / see the alert section first

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

**审查员请先看本节。** 对照上一份快照，把「一天内 +100★」「单日净减 ≥100★」或「突然进入 / 大幅跃升榜单」的仓库单独列出。这些条目**必须做增强分析**后再决定，不要只看 README 就核准进榜。

**Reviewers: start here.** Repositories that gained ≥100 stars in one snapshot interval, that lost ≥100 stars in one interval (GitHub clawing back farmed stars), or that would suddenly appear on / leap up the star board. Do extra analysis before approving them onto the board — a README check is not enough.

对比上一份快照 **2026-11-14** / vs previous snapshot **2026-11-14**。规则：日增 ≥100★；单日净减 ≥100★（GitHub 批量清号回收的签名——被回收的星通常是刷的，余下星数也应视为虚高）；已核准仓新入 Top 200（且 Δ≥50）/ 名次跃升 ≥50 / 冲入 Top 20；待审仓 ≥100★ 且核准后将进入 Top 200。

- 看 Star 是否与 fork、提交活跃度、仓库年龄匹配（高星零 fork、创建当天几百星，多为刷星）
- 单日大幅掉星 = 此前刷星被官方回收；刷星常贴着 +100★/日阈值之下滴灌增长，掉星往往是我们能机器检出的唯一痕迹
- 是否把已有高星的通用项目贴上 `dsh-plugin` Topic 蹭榜——插件本身可进目录，但应加入 `leaderboard_exclusions`，理由写清 stars accrued as …
- 待审仓若核准会直接冲进 Top 20 / Top 200，先确认热度来自 **DSH 插件本身**
- 已核准仓的异常跃升：确认后同样可记入 `leaderboard_exclusions`，不必下架目录

Check stars against forks, commit activity and age (hundreds of stars on day one, or high stars with zero forks, usually look bought). A generic high-star project that only just tagged `dsh-plugin` can stay in the catalog but should go to `leaderboard_exclusions` (reason: stars accrued as …). If approving a pending repo would drop it into Top 20 / Top 200, confirm the audience is the DSH plugin itself.

- 告警数 / Alerts: **9**

| Project | Queue | Stars | Δ | Forks | Age | Signals | 审核提示 / Hint |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| ⚠️ [Bytedesk/bytedesk](https://github.com/Bytedesk/bytedesk) | 待审 / pending | 540 | — | 145 | 1129d | 待审高星 | 核准即榜 #61 |
| ⚠️ [scarletkc/Hatoba](https://github.com/scarletkc/Hatoba) | 待审 / pending | 247 | — | 20 | 38d | 待审高星 | 核准即榜 #114 |
| ⚠️ [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) | 已核准 / approved | 75671 | +1433 | 2122 | 51d | 日增百星 | 日增 +1433★；已不进榜单 |
| ⚠️ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) | 已核准 / approved | 19114 | +235 | 652 | 93d | 日增百星 | 日增 +235★；已不进榜单 |
| ⚠️ [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 已核准 / approved | 7069 | +152 | 117 | 90d | 日增百星 | 日增 +152★ |
| ⚠️ [Fei2411/DS-Bot](https://github.com/Fei2411/DS-Bot) | 已核准 / approved | 7903 | +149 | 780 | 38d | 日增百星 | 日增 +149★ |
| ⚠️ [tw93/Mole](https://github.com/tw93/Mole) | 已核准 / approved | 75161 | +125 | 2706 | 417d | 日增百星 | 日增 +125★；已不进榜单 |
| ⚠️ [helloHub1212/dsh-windows-mcp](https://github.com/helloHub1212/dsh-windows-mcp) | 已核准 / approved | 1317 | +122 | 7 | 34d | 日增百星 | 日增 +122★；★/fork 188.1；已不进榜单 |
| ⚠️ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | 已核准 / approved | 12521 | +105 | 479 | 92d | 日增百星 | 日增 +105★；已不进榜单 |


| # | Project | Stars | Created | First seen | Description |
| ---: | --- | ---: | ---: | ---: | --- |
| 1 | [Bytedesk/bytedesk](https://github.com/Bytedesk/bytedesk) ⚠️ | 540 | 2023-10-12 | 2026-11-15 | Open Souce IM with AI powered live-chat, email, ticket support, omni-channel customer service，alternative to slack + zendesk |
| 2 | [scarletkc/Hatoba](https://github.com/scarletkc/Hatoba) ⚠️ | 247 | 2026-10-07 | 2026-11-15 | Open-source desktop SSH client with an AI assistant and end-to-end encrypted sync through your own Cloudflare account |
| 3 | [bruc3van/dsh-desktop-pro](https://github.com/bruc3van/dsh-desktop-pro) | 98 | 2026-08-12 | 2026-11-15 | DeepSeek Harness 专业版桌面客户端，主打企业级配置：模型、插件、Skill 和工具权限统一下发，自带管理控制台、模型网关和防篡改审计；个人也能直接用。安全、协作、便捷。 |
| 4 | [ChenJun25/dsh-console-hm](https://github.com/ChenJun25/dsh-console-hm) | 15 | 2026-10-18 | 2026-11-15 | DSH console panel: scan a QR code and control your DSH desktop from your phone |
| 5 | [peiyucn/dsh-sparrow](https://github.com/peiyucn/dsh-sparrow) | 5 | 2026-08-30 | 2026-11-15 | Desk One (同桌) — one desk for you and harness. Notes, tasks, read-only calendar and AI-written notebook review in one DSH panel; plus three small tools. |
| 6 | [beings-labs/dsh-cloudflare-connector](https://github.com/beings-labs/dsh-cloudflare-connector) | 4 | 2026-11-13 | 2026-11-15 | Cloudflare access for DeepSeek Harness agents and plugin developers. |
| 7 | [mutualgaze/dsh-desktop-notify](https://github.com/mutualgaze/dsh-desktop-notify) | 3 | 2026-11-15 | 2026-11-15 | Windows toasts + a taskbar badge when DSH needs an approval, finishes a turn, or hits an error. · DSH 桌面提醒插件 |
| 8 | [publicwww-com/doublekeys](https://github.com/publicwww-com/doublekeys) | 3 | 2026-11-15 | 2026-11-15 | On-screen keyboard for the DeepSeek Harness web composer: split layouts, 15 languages, no predictions, no autocapitalisation. |
| 9 | [ailuvu-art/dsh-favicon-status](https://github.com/ailuvu-art/dsh-favicon-status) | 2 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: Session status on the browser tab — favicon badge (red failed, yellow waiting, green done, spinner running) and title prefix. |
| 10 | [anheon/dsh-sift-kb](https://github.com/anheon/dsh-sift-kb) | 2 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin for the local sift knowledge base: lifecycle, sidebar panel, courseware import, and agent retrieval. |
| 11 | [Fantasy-XY808/dsh-every-models](https://github.com/Fantasy-XY808/dsh-every-models) | 2 | 2026-11-15 | 2026-11-15 | 把 75 家厂商、1692 个公开模型一口气装进 DSH 模型选择器：从 2013 年老古董到 2026 年旗舰，GPT-6、Claude Fable、Gemini 4 想选哪个选哪个。放心，全是假的——不管你问什么，插件都在本地回复“我是 XXX，由 XXX 研发……”，看起来就像真的在跟你聊。不联网、不推理、不扣余额，装逼、截图、发群专用。 |
| 12 | [Harm0ny-AI/DSH-Video2Agent](https://github.com/Harm0ny-AI/DSH-Video2Agent) | 2 | 2026-11-15 | 2026-11-15 | Video search and understanding for DSH. Turn local files and Bilibili links into one library: search across videos, or read 3-10 together and compare their points. Optional Bilibili login for discovery, favorites and subtitles. CLI + DSH plugin. |
| 13 | [liangdabiao/dsh-amazon-image-studio](https://github.com/liangdabiao/dsh-amazon-image-studio) | 2 | 2026-11-15 | 2026-11-15 | dsh-amazon-image-studio · 亚马逊图片工作台 DeepSeek Harness（dsh）插件：Amazon Listing / A+ 图片 AI 策划 + 逐张生图 + 合规打标。把粘贴的 Listing 文案策划成 MAIN + PT01-06（7-12 张可调）Listing 图方案或四套 A+ 模块（普通/标准/高级/手机）逐张方案——每张含中文策划说明、英文生图 PromptDeepSeek Harness plugin: Amazon Listing / A+ image AI planning and slot-by-slot generation with compliance checks, style palettes and XMP tagging |
| 14 | [xiaotianya14/apk-reverse-skill](https://github.com/xiaotianya14/apk-reverse-skill) | 2 | 2026-11-14 | 2026-11-15 | 手机版逆向skill —— 手机端 Android APK 逆向研究技能包（解包/反编译/广告清理/补丁重签/真机验证） |
| 15 | [54747/operator-anchor](https://github.com/54747/operator-anchor) | 1 | 2026-11-15 | 2026-11-15 | 操作者锚定框架：把提示词方法论做成可安装的宿主插件（DeepSeek Harness + WorkBuddy 双端）。Persistent frame at the prompt head, recency anchor at the tail, subagent anchor inside delegations. |
| 16 | [54dsb1/dsh-stream-agent](https://github.com/54dsb1/dsh-stream-agent) | 1 | 2026-11-15 | 2026-11-15 | \[Based on github program xuxiang-thinkflow\]针对deepseekharness推理优化插件，大幅60%以上节省token消耗。 |
| 17 | [879745uhjun/dsh-running-sessions](https://github.com/879745uhjun/dsh-running-sessions) | 1 | 2026-11-15 | 2026-11-15 | A live status bar in the DeepSeek Harness conversation header naming every session that is working right now. |
| 18 | [879745uhjun/dsh-session-boxes](https://github.com/879745uhjun/dsh-session-boxes) | 1 | 2026-11-15 | 2026-11-15 | Custom session boxes (groups) inside the DeepSeek Harness workspace sidebar, with multi-box membership, collapse, colors, and drag ordering. |
| 19 | [879745uhjun/dsh-session-broadcast](https://github.com/879745uhjun/dsh-session-broadcast) | 1 | 2026-11-15 | 2026-11-15 | Send one message to several DSH sessions at once: a composer toolbar button opens a picker, and every selected session receives the message. |
| 20 | [879745uhjun/dsh-session-notify](https://github.com/879745uhjun/dsh-session-notify) | 1 | 2026-11-15 | 2026-11-15 | A bottom-right desktop card the moment a watched conversation finishes its turn: watch several sessions and get told when one is done. |
| 21 | [879745uhjun/dsh-session-quickbar](https://github.com/879745uhjun/dsh-session-quickbar) | 1 | 2026-11-15 | 2026-11-15 | A configurable quick-action strip on the right of every sidebar Session row, with a two-way channel to the Sessions that author plugins. |
| 22 | [879745uhjun/dsh-session-todos](https://github.com/879745uhjun/dsh-session-todos) | 1 | 2026-11-15 | 2026-11-15 | Per-session todo checkboxes in the DeepSeek Harness sidebar plus a dedicated Todo page grouping sessions as in progress, to do, and done. |
| 23 | [879745uhjun/dsh-session-transfer](https://github.com/879745uhjun/dsh-session-transfer) | 1 | 2026-11-15 | 2026-11-15 | Pack any DSH session, its subagent sessions and attachments into a portable .dshpack, and import it into another DSH installation. |
| 24 | [879745uhjun/dsh-sidebar-pin](https://github.com/879745uhjun/dsh-sidebar-pin) | 1 | 2026-11-15 | 2026-11-15 | Pins the sidebar panel rows (Plugins, Token usage, Todos, ...) to the top of the sidebar while the session list scrolls. |
| 25 | [879745uhjun/dsh-token-usage](https://github.com/879745uhjun/dsh-token-usage) | 1 | 2026-11-15 | 2026-11-15 | Live and historical token usage for every DeepSeek Harness session: totals, cache traffic, a daily history strip, and a sortable table. |
| 26 | [admin6a/dsh-sidebar-extension](https://github.com/admin6a/dsh-sidebar-extension) | 1 | 2026-11-15 | 2026-11-15 | 把 dsh（127.0.0.1:3080）固定到浏览器侧边栏，并可读取当前页面内容，选中文本即可引用给 dsh。 |
| 27 | [airainal/dsh-edge-companion](https://github.com/airainal/dsh-edge-companion) | 1 | 2026-10-24 | 2026-11-15 | Drive DeepSeek Harness with your real, logged-in Microsoft Edge: MV3 extension + local CDP bridge + DSH plugin. |
| 28 | [alexnobug/dsh-code-factory](https://github.com/alexnobug/dsh-code-factory) | 1 | 2026-11-15 | 2026-11-15 | Code Factory for DeepSeek Harness: multi-agent software-team pipeline plugin |
| 29 | [alwayXXX/dsh-market-radar](https://github.com/alwayXXX/dsh-market-radar) | 1 | 2026-11-15 | 2026-11-15 | 黄金、A 股和美股的 DeepSeek Harness 轻量行情雷达 |
| 30 | [anheon/dsh-session-manager-delete](https://github.com/anheon/dsh-session-manager-delete) | 1 | 2026-11-15 | 2026-11-15 | DSH 会话删除插件：彻底删除已归档会话，清理磁盘、工作区登记与浏览器本地状态。 |
| 31 | [Astral-Yang/dsh-preset-editor](https://github.com/Astral-Yang/dsh-preset-editor) | 1 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 原生 Agent 预设编辑器：编辑/新增内置 preset、人格与插件组合、逐工具过滤、自动备份与回滚。 |
| 32 | [chen114514st/dsh-go-adb-link](https://github.com/chen114514st/dsh-go-adb-link) | 1 | 2026-11-15 | 2026-11-15 | DSH Go 原生插件（二改版）：自动找到手机上的 ADB TCP 端口并保持连接 |
| 33 | [Chenpi-Sakura/harness-supervisor](https://github.com/Chenpi-Sakura/harness-supervisor) | 1 | 2026-10-27 | 2026-11-15 | Make other harnesses work for yours. Turn native AI harnesses into subagents your main harness can command and manage. \| 让你的主 Harness 当老板，其他 Harness 来干活。把各家原生 Harness 变成它可委派、可管理的子智能体。 |
| 34 | [Destinhue/dsh-better-ears](https://github.com/Destinhue/dsh-better-ears) | 1 | 2026-11-15 | 2026-11-15 | 让 agent 听得见声音：DeepSeek Harness 音频分析插件（语音 / 音乐 / 视频声音，本地 ffmpeg + DSP） |
| 35 | [eurekame2000/dsh-vision-direct](https://github.com/eurekame2000/dsh-vision-direct) | 1 | 2026-11-15 | 2026-11-15 | Self-contained vision backend for DeepSeek Harness: own read-image tool, paste-to-path, optional loopback OpenAI/Anthropic endpoint. No external vision CLI. |
| 36 | [Exceptions-del/dsh-plugin-install-progress](https://github.com/Exceptions-del/dsh-plugin-install-progress) | 1 | 2026-11-15 | 2026-11-15 | DSH 插件：智能体安装插件 / 下载大文件时，在输入框上方显示进度卡片 |
| 37 | [Exceptions-del/dsh-session-categories](https://github.com/Exceptions-del/dsh-session-categories) | 1 | 2026-11-15 | 2026-11-15 | DSH 插件：智能体安装插件 / 下载大文件时，在输入框上方显示进度卡片 |
| 38 | [fish133/dsh-admin-gate](https://github.com/fish133/dsh-admin-gate) | 1 | 2026-11-07 | 2026-11-15 | 进 Harness 前先过一道门：管理员输密码，访客免密码进入并按名单放行接口与工具。闸门落在 host 侧，客户端遮罩绕不过去。 |
| 39 | [HakureiMonika/dsh-better-tips](https://github.com/HakureiMonika/dsh-better-tips) | 1 | 2026-11-14 | 2026-11-15 | 更好的DSH报错提示与自动重试 \| Better DSH error messages and automatic retries |
| 40 | [haoran37/dsh-better-voice](https://github.com/haoran37/dsh-better-voice) | 1 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 更好的语音输入：DeepSeek 原生 ASR、自动 AI 优化、光标回填与长录音恢复。复用宿主凭据和模型，配置 Key 后即插即用。 |
| 41 | [hmhm2333/dsh-braingames](https://github.com/hmhm2333/dsh-braingames) | 1 | 2026-11-10 | 2026-11-15 | 等 Agent 执行任务时，玩几分钟像素风认知训练小游戏。 |
| 42 | [HuaGyuu/dsh-pure-mode-preset](https://github.com/HuaGyuu/dsh-pure-mode-preset) | 1 | 2026-11-15 | 2026-11-15 | Pure Mode preset for DeepSeek Harness: sends only user and assistant messages — no system prompt, no tools, no runtime context, no injected messages. |
| 43 | [huajikano/dsh-feibi-breaker](https://github.com/huajikano/dsh-feibi-breaker) | 1 | 2026-11-15 | 2026-11-15 | 菲比破限 · DeepSeek-Harness 提示词塑形 + 提交前拦截插件，与 dsh-gatekeeper 共存 |
| 44 | [huanlin-labs/dsh-vpn-guard](https://github.com/huanlin-labs/dsh-vpn-guard) | 1 | 2026-11-14 | 2026-11-15 | DSH 出口与 AI 风险监测：不限厂商的出口 IP / 地区 / ASN 体检，可选 Clash/Mihomo 适配器；不读订阅与凭据 |
| 45 | [hujiajunyu-lab/dsh-wanxiang-hall](https://github.com/hujiajunyu-lab/dsh-wanxiang-hall) | 1 | 2026-11-15 | 2026-11-15 | Delivery org for DeepSeek Harness — intake, architect, review, dispatch, build, accept, with hard gates, a heartbeat from session logs, and a cross-project knowledge base. |
| 46 | [JeremyWXL/dsh-guancli-mentions](https://github.com/JeremyWXL/dsh-guancli-mentions) | 1 | 2026-11-14 | 2026-11-15 | 观远 BI 数据集/看板 @ 引用插件 for DeepSeek Harness：授权按 guancli 已鉴权环境生效，不需绑定 Agent |
| 47 | [Kai-Dreamer/dsh-delete-conversation](https://github.com/Kai-Dreamer/dsh-delete-conversation) | 1 | 2026-11-15 | 2026-11-15 | Permanently delete a DeepSeek Harness session (including local log files) from the Web UI sidebar menu. |
| 48 | [Kattentions/dsh-katt-browser](https://github.com/Kattentions/dsh-katt-browser) | 1 | 2026-11-15 | 2026-11-15 | DeepSeek Harness sidebar browser plugin: structure-first page reading (AX/DOM/worker/network) with multi-account cookie snapshots, over CDP. |
| 49 | [Khuraie/dsh-mistral-vibe-provider](https://github.com/Khuraie/dsh-mistral-vibe-provider) | 1 | 2026-11-13 | 2026-11-15 | Mistral Vibe for DeepSeek Harness: the Vibe Code provider route with PKCE browser sign-in and real Vibe/Studio budget meters. |
| 50 | [KKhxr/dsh-plugin-bilibili](https://github.com/KKhxr/dsh-plugin-bilibili) | 1 | 2026-11-15 | 2026-11-15 | dsh-plugin-bilibili |
| 51 | [linbei0203-zh/dsh-ink-poem-wallpaper](https://github.com/linbei0203-zh/dsh-ink-poem-wallpaper) | 1 | 2026-11-15 | 2026-11-15 | 水墨诗词壁纸 · Ink-wash poetry wallpaper for DeepSeek Harness — a daily Chinese couplet set in brush calligraphy on a landscape generated from the verse's own imagery. |
| 52 | [magicbaobaoli/dsh-getnote](https://github.com/magicbaobaoli/dsh-getnote) | 1 | 2026-11-15 | 2026-11-15 | 得到大脑 / Get笔记 panel for DSH — local-first Markdown vault with optional cloud sync |
| 53 | [Neon088/dsh-growth-workbench](https://github.com/Neon088/dsh-growth-workbench) | 1 | 2026-11-09 | 2026-11-15 | 给做运营的人用的 DSH 侧边栏插件，数据记在自己的 Obsidian 里 |
| 54 | [newpage1/dsh-ascend-perf](https://github.com/newpage1/dsh-ascend-perf) | 1 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: Ascend NPU fleet monitor + controlled vLLM container deployment |
| 55 | [pawvis/dsh-zhixing](https://github.com/pawvis/dsh-zhixing) | 1 | 2026-11-15 | 2026-11-15 | 知行：a local-first workday workspace for DeepSeek Harness (today, reports, goals, settings, plus 今天吃什么 / 今日运势) |
| 56 | [PhoenixYM0307/dsh-voice](https://github.com/PhoenixYM0307/dsh-voice) | 1 | 2026-11-15 | 2026-11-15 | DeepSeek Harness（DSH）的语音插件：说话转文字，回复自动朗读。  在聊天输入框右边放一颗麦克风，按一下开始说话、再按一下把语音转成文字填进输入框（不会替你发送，说完还能改）；旁边的小喇叭是自动朗读开关，打开后助手每轮回复结束会自动念出来。  语音识别和语音合成都调用 DeepSeek 官方接口 |
| 57 | [qiaozy-16/dsh-vhcu](https://github.com/qiaozy-16/dsh-vhcu) | 1 | 2026-11-07 | 2026-11-15 | A multimodal Computer Use Agent (CUA) plugin for DSH, featuring on-demand vision, local audio transcription, and self-evolving macros. |
| 58 | [shigu666/dsh-everything-es](https://github.com/shigu666/dsh-everything-es) | 1 | 2026-11-13 | 2026-11-15 | 让dsh在Windows使用everything搜索文件 |
| 59 | [show-thesky/bing](https://github.com/show-thesky/bing) | 1 | 2026-11-06 | 2026-11-15 | 这是一个学习仓库 |
| 60 | [tangyixiao/dsh-task-signal](https://github.com/tangyixiao/dsh-task-signal) | 1 | 2026-11-15 | 2026-11-15 | DSH task completion sounds with Codex/ZCode styles, native background playback, and persistent per-event controls. |
| 61 | [WeidongTech/dsh-live-token-speed](https://github.com/WeidongTech/dsh-live-token-speed) | 1 | 2026-11-15 | 2026-11-15 | DSH 插件：把输入框统计条的会话平均 tok/s 换成 2 秒滑动窗口的实时速度 |
| 62 | [WeidongTech/dsh-model-sorter](https://github.com/WeidongTech/dsh-model-sorter) | 1 | 2026-11-15 | 2026-11-15 | DSH 模型选择器排序插件：字母索引栏 + 版本倒序 + 同族归并 + 搜索 |
| 63 | [Xiao-53/dsh-mindmap](https://github.com/Xiao-53/dsh-mindmap) | 1 | 2026-11-15 | 2026-11-15 | DSH 原生侧栏思维导图插件，多层子节点和离线 HTML 导出。 |
| 64 | [xiaoweiqianluo/dsh-desktop-notify](https://github.com/xiaoweiqianluo/dsh-desktop-notify) | 1 | 2026-11-15 | 2026-11-15 | Windows desktop popup alerts for DeepSeek Harness: a chat-style card when a turn finishes or the Harness waits for you. |
| 65 | [xieiscoding/dsh-frosted-glass](https://github.com/xieiscoding/dsh-frosted-glass) | 1 | 2026-11-15 | 2026-11-15 | deepseek harness desktop原生磨砂玻璃UI |
| 66 | [ygc06/fishpet-release](https://github.com/ygc06/fishpet-release) | 1 | 2026-11-15 | 2026-11-15 | 大肥鱼桌宠：有情绪和记忆、会聊天，也能在你明确同意后看屏幕的 DSH Live2D 桌宠 |
| 67 | [YIFUHEYAN-5/dsh-work-process-3d](https://github.com/YIFUHEYAN-5/dsh-work-process-3d) | 1 | 2026-11-15 | 2026-11-15 | DSH plugin that renders the agent's work as a live 3D factory: tokens are the fuel, tool calls run at machine stations, each turn's results become a product batch. dsh工作进程3D实时可视化 |
| 68 | [yoobinkim541/dsh-figma-mcp](https://github.com/yoobinkim541/dsh-figma-mcp) | 1 | 2026-11-15 | 2026-11-15 | Figma MCP over stdio for DeepSeek Harness and any MCP client: reuses the OAuth credential your host already stored. Zero LLM turns per call. |
| 69 | [yoyume374/dsh-agent-mail](https://github.com/yoyume374/dsh-agent-mail) | 1 | 2026-11-15 | 2026-11-15 | DSH 会话之间的 agent 邮件：经提示词投递、可唤醒对方、可多轮交流，并在会话上方「邮件」页签按线程查看 |
| 70 | [ytsu-ki/dsh-p3r-ui](https://github.com/ytsu-ki/dsh-p3r-ui) | 1 | 2026-11-15 | 2026-11-15 | Persona 3 Reload (Makoto Yuki) 60fps video backdrop, adaptive frosted-glass theme, and draggable HUD widgets for DeepSeek Harness |
| 71 | [zhiyaunhe-ops/dsh-excalidraw-canvas](https://github.com/zhiyaunhe-ops/dsh-excalidraw-canvas) | 1 | 2026-11-05 | 2026-11-15 | Cloud Excalidraw workspace for DeepSeek Harness: autosave, persistent assistant sessions, and document-scoped editing. |
| 72 | [ZOU2850/dsh-file-launcher](https://github.com/ZOU2850/dsh-file-launcher) | 1 | 2026-11-15 | 2026-11-15 | A right-sidebar file launcher for DeepSeek Harness: live file inventory, previews, missing-file markers, pins, archive, and a theme-only settings page. |
| 73 | [ZQGuoDev/dsh-go-craft-anything](https://github.com/ZQGuoDev/dsh-go-craft-anything) | 1 | 2026-11-15 | 2026-11-15 | Craft Anything 的 dsh-go 原生与 Harness Web 插件：双端面板、净室/深度切换、MCP 桥与工具白名单、CLI 状态及依赖部署，适配 Android Ubuntu/proot。 |
| 74 | [01TY10/dsh-pin-window](https://github.com/01TY10/dsh-pin-window) | 0 | 2026-11-15 | 2026-11-15 | Windows title-bar pin for DeepSeek Harness |
| 75 | [0xlucifereth/xhs-job-hunter](https://github.com/0xlucifereth/xhs-job-hunter) | 0 | 2026-11-15 | 2026-11-15 | 支持小红书招聘笔记自动检索并整理为表格。使用方法：安装DSH后，安装插件，在新的对话里输入 地区+岗位。eg.上海 前端 |
| 76 | [2648782102/dsh-edit-message](https://github.com/2648782102/dsh-edit-message) | 0 | 2026-11-14 | 2026-11-15 | DeepSeek Harness plugin: edit one of your own messages and resend it, even while the agent is still replying. |
| 77 | [27Synthesis/dsh-xiumi-studio](https://github.com/27Synthesis/dsh-xiumi-studio) | 0 | 2026-11-15 | 2026-11-15 | 把 Word 文稿变成排好版的公众号推文：DSH 插件 + 桌面 exe，成品进秀米「我的图文」 |
| 78 | [5777-wq/dsh-opencode-go-quota](https://github.com/5777-wq/dsh-opencode-go-quota) | 0 | 2026-11-15 | 2026-11-15 | OpenCode Go subscription usage (rolling 5h / weekly / monthly) in the DSH Web UI: sidebar window bars, trend forecast, adaptive polling, and an agent tool. |
| 79 | [6977-com/dsh-ai-security-lab](https://github.com/6977-com/dsh-ai-security-lab) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 的 AI 模型安全测试插件：越狱抵抗、提示词注入、隐私与指令层级、多轮对抗测试，含评分、历史与 JSON/HTML 报告。 |
| 80 | [7starsseeker/dsh-card-export](https://github.com/7starsseeker/dsh-card-export) | 0 | 2026-11-09 | 2026-11-15 | Report and conversation export for DeepSeek Harness: any Markdown report or DSH session excerpt to shareable PNG images. Zero npm dependencies. |
| 81 | [7starsseeker/dsh-task-anchor](https://github.com/7starsseeker/dsh-task-anchor) | 0 | 2026-11-15 | 2026-11-15 | Keep the running task anchored when a mid-turn user message arrives: a prompt contract, a suspended-plan anchor that survives compaction, and a turn-stopping guard that makes unfinished work explicit instead of silently dropped. |
| 82 | [A-Zee029/dsh-model-palette](https://github.com/A-Zee029/dsh-model-palette) | 0 | 2026-11-15 | 2026-11-15 | Keyboard-driven model &amp; reasoning-effort palette plugin for DeepSeek Harness (Ctrl+L) |
| 83 | [aa-zza1/dsh-badge](https://github.com/aa-zza1/dsh-badge) | 0 | 2026-11-15 | 2026-11-15 | 给桌面 agent 用的「正在操作」状态角标 / A tiny always-on-top status badge for desktop agents on Windows |
| 84 | [abinadwan/deepseek-harness-environment-sidebar](https://github.com/abinadwan/deepseek-harness-environment-sidebar) | 0 | 2026-11-15 | 2026-11-15 | Native right-sidebar inspector for DeepSeek Harness (DSH) — workspace context, model token usage and session activity. Read-only community plugin. |
| 85 | [ad-vertly/adextract-mcp-server](https://github.com/ad-vertly/adextract-mcp-server) | 0 | 2026-07-10 | 2026-11-15 | MCP server for AI agents - search Meta, Google Ads, LinkedIn &amp; TikTok ad libraries and analyze ad creatives with ad_reader. 50 free searches. |
| 86 | [AiLunSin/dsh-overwatch](https://github.com/AiLunSin/dsh-overwatch) | 0 | 2026-11-14 | 2026-11-15 | 受控蜂群的两层监管：无模型硬闸门 + 受工具限制的值班员 + 哈希链证据账（Host + Web 面板）。Guard &amp; watch officer for DeepSeek Harness swarms. |
| 87 | [alotherss/DeepSeekHarness-plugin](https://github.com/alotherss/DeepSeekHarness-plugin) | 0 | 2026-11-15 | 2026-11-15 | 专门存放做好的插件 |
| 88 | [alszmxn/dsh-writing-mode-push](https://github.com/alszmxn/dsh-writing-mode-push) | 0 | 2026-11-15 | 2026-11-15 | 写作工作模式：给 DSH 的 AI 一个写作工具（起草/润色/扩写/精简/大纲/续写），短文本走本地模型、长文走豆包，带轻量设置页。 |
| 89 | [amd47802574/dsh-turn-hider](https://github.com/amd47802574/dsh-turn-hider) | 0 | 2026-11-14 | 2026-11-15 | 隐藏 DSH 会话中的任意一轮（用户消息+AI回复+工具过程）：仅前端展示层，会话日志不动，随时可恢复 / Hide any chat turn from the transcript view only |
| 90 | [amosbake/zoho-projects-mcp](https://github.com/amosbake/zoho-projects-mcp) | 0 | 2026-11-15 | 2026-11-15 | Open-source Zoho Projects MCP server and plugins for Codex and DeepSeek Harness |
| 91 | [amzingluo/dsh-py-runner](https://github.com/amzingluo/dsh-py-runner) | 0 | 2026-11-15 | 2026-11-15 | VSCode-style Python run/debug console for the DeepSeek Harness (DSH) sidebar: open a .py file, hit Run or Debug, watch the output stream live. |
| 92 | [Anguis-L/dsh-hindsight-board](https://github.com/Anguis-L/dsh-hindsight-board) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: left-sidebar entry that embeds the Hindsight Control Plane dashboard, starts it on demand, and auto-stops it after 15 idle minutes. |
| 93 | [Anseya/flow-tower-context](https://github.com/Anseya/flow-tower-context) | 0 | 2026-11-15 | 2026-11-15 | Compaction-driven project-level context memory for DeepSeek Harness (DSH): cited dictionary, adaptive injection, multi-agent sharing. |
| 94 | [arcxya09/dsh-ssh-compute](https://github.com/arcxya09/dsh-ssh-compute) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: run compute-heavy work on remote SSH servers |
| 95 | [Auron0901/CET_assistant](https://github.com/Auron0901/CET_assistant) | 0 | 2026-11-15 | 2026-11-15 | 英语四六级写译助手，内涵真题，AI诊断，高级词汇等帮你提高写译水平...... |
| 96 | [Aurophyllis/dsh-question-bubbles](https://github.com/Aurophyllis/dsh-question-bubbles) | 0 | 2026-11-09 | 2026-11-15 | 在模型思考时把「没问出口的疑问」显示成气泡，可当场作答并温和并入会话｜Surface unasked questions as bubbles during DSH reasoning. Requires dsh-whale-widget. |
| 97 | [awa-123-cw/dsh-ui-polish](https://github.com/awa-123-cw/dsh-ui-polish) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 桌面端界面质感精修插件：去边框微分层 / 暗色字重补偿 / 双环聚焦 / 等宽数字 / 弹性动效 / 流式水墨（含思考输出）。纯展示层，零依赖，不碰 app.asar。 |
| 98 | [awychoi/cue9](https://github.com/awychoi/cue9) | 0 | 2026-11-15 | 2026-11-15 | A desk companion and plugin ecosystem that shows what your coding agent is stuck on, right in your peripheral vision. |
| 99 | [awychoi/dsh-cue9-mote](https://github.com/awychoi/dsh-cue9-mote) | 0 | 2026-11-14 | 2026-11-15 | The connection between DSH and desk companion for cue9 |
| 100 | [AYGYSKY/zephyr-theme](https://github.com/AYGYSKY/zephyr-theme) | 0 | 2026-11-15 | 2026-11-15 | 防风主题：冷青配色、立绘背景、飘雪与启动画面 |
| 101 | [AYGYSKY/zephyr-widget](https://github.com/AYGYSKY/zephyr-widget) | 0 | 2026-11-15 | 2026-11-15 | DSH 右下角的防风贴纸挂件：12 张表情/会话联动/花费与峰谷 |
| 102 | [AZ-666316/dsh-ask-aside](https://github.com/AZ-666316/dsh-ask-aside) | 0 | 2026-11-15 | 2026-11-15 | 划词提问：选中正文里看不懂的术语 → 右侧栏独立会话里追问，不打断主对话；默认 fork 主会话承接全部上下文，也可切「只看引文」。 |
| 103 | [AzureKyrielight/dsh-mingyuanhu](https://github.com/AzureKyrielight/dsh-mingyuanhu) | 0 | 2026-11-15 | 2026-11-15 | Sichuan University campus services for DeepSeek Harness: account sign-in, grades, timetables and electricity balance. |
| 104 | [BearingSteel/dsh-enter-newline](https://github.com/BearingSteel/dsh-enter-newline) | 0 | 2026-11-08 | 2026-11-15 | An installable DSH Web UI plugin that swaps the conversation composer's Enter behavior: Enter inserts a newline, and Shift+Enter sends the message.  |
| 105 | [BearingSteel/dsh-inline-download](https://github.com/BearingSteel/dsh-inline-download) | 0 | 2026-11-08 | 2026-11-15 | Put a download button directly on file cards inside the DSH conversation. One click and the original file goes to the current device through the browser's download manager. |
| 106 | [beidou6972yh/dsh-bw-router](https://github.com/beidou6972yh/dsh-bw-router) | 0 | 2026-11-14 | 2026-11-15 | B&amp;W (小棒 &amp; 灰狼) — DeepSeek Harness plugin: plan a task into stages, pick the right model per stage, and switch models in-session without losing context. |
| 107 | [beiwei91/dsh-paper-reader](https://github.com/beiwei91/dsh-paper-reader) | 0 | 2026-11-14 | 2026-11-15 | 自己vibe的论文辅助阅读dsh插件 |
| 108 | [BrainZombie/dsh-media-rescue](https://github.com/BrainZombie/dsh-media-rescue) | 0 | 2026-11-15 | 2026-11-15 | Repair broken markdown image paths in DeepSeek Harness (dsh): shadows GET /api/file, five-tier name matching, prevention inside tool results, escape-proof /ws/ URLs. |
| 109 | [BrightStonebody/dsh-native-tools](https://github.com/BrightStonebody/dsh-native-tools) | 0 | 2026-11-15 | 2026-11-15 | Three native macOS tools in one DSH plugin: drag-to-screenshot with annotation and OCR, clipboard history, select-to-translate. |
| 110 | [bunpai/fusion-next](https://github.com/bunpai/fusion-next) | 0 | 2026-11-15 | 2026-11-15 | Fusion Next for DeepSeek Harness: per-session planner/executor pair — a frontier Lead reads, briefs and reviews; a cheaper Sidekick writes the code. |
| 111 | [c-dyang/dsh-night-watch](https://github.com/c-dyang/dsh-night-watch) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: a four-stage memory loop for agents — settle a day, audit it in a separate process, keep a deniable ledger, recall by layer. Default read-only; execution needs a human signature. |
| 112 | [CalmAndFocused/dsh-prompt-template](https://github.com/CalmAndFocused/dsh-prompt-template) | 0 | 2026-11-13 | 2026-11-15 | Prompt rewriter for the DeepSeek Harness composer: three modes (system prompt, user prompt, iterate) that keep {{variable}} placeholders verbatim, plus an optimize_prompt agent tool. |
| 113 | [caobanheitu/dsh-work-eta](https://github.com/caobanheitu/dsh-work-eta) | 0 | 2026-11-14 | 2026-11-15 | Live estimate of how much longer the running turn needs, drawn from the DSH session log. |
| 114 | [cengcengcai-creator/dsh-ruleset](https://github.com/cengcengcai-creator/dsh-ruleset) | 0 | 2026-11-15 | 2026-11-15 | Behavioral rule compliance for DeepSeek Harness: one policy drives prompt injection and evidence-backed three-value checks. |
| 115 | [Ch1Ems/dsh-printer-chat](https://github.com/Ch1Ems/dsh-printer-chat) | 0 | 2026-11-15 | 2026-11-15 | Print every finished DSH conversation turn to a real printer - Windows spooler and CUPS, with a PNG preview and two model tools. |
| 116 | [chenqianyu486-sys/dsh-save-delete-tool](https://github.com/chenqianyu486-sys/dsh-save-delete-tool) | 0 | 2026-11-14 | 2026-11-15 | 把文件与目录移入工作区的可恢复隔离区，并在所有 Agent 模式下拒绝常见的不可恢复 Shell 删除与 run_code 程序删除。 |
| 117 | [Clusm/dsh-trading-workbench](https://github.com/Clusm/dsh-trading-workbench) | 0 | 2026-09-10 | 2026-11-15 | DSH Trading Workbench: AI decision chain + per-day round archive + Demo execution &amp; risk views for DeepSeek Harness, over a local Python trading service. |
| 118 | [Congcong19655/dsh-projects](https://github.com/Congcong19655/dsh-projects) | 0 | 2026-11-15 | 2026-11-15 | claude project style experience in deepseek harness  |
| 119 | [contextos-devops/dsh-contextos-devops](https://github.com/contextos-devops/dsh-contextos-devops) | 0 | 2026-11-15 | 2026-11-15 | contextos devops for ai |
| 120 | [CoolrfulDARkness/resource-lease](https://github.com/CoolrfulDARkness/resource-lease) | 0 | 2026-11-14 | 2026-11-15 | Cross-process resource locks + lease visibility for parallel coding agents. Shared lock format across a CLI, an MCP server and a DSH plugin. |
| 121 | [ctrlasistent/dsh-tts-supertonic](https://github.com/ctrlasistent/dsh-tts-supertonic) | 0 | 2026-11-13 | 2026-11-15 | Local Supertonic text-to-speech plugin for deepseek-harness. Automatically reads assistant replies aloud. No cloud services or API keys required. |
| 122 | [ctrlasistent/dsh-voice-parlaspeech-hr](https://github.com/ctrlasistent/dsh-voice-parlaspeech-hr) | 0 | 2026-11-13 | 2026-11-15 | Lokalni ParlaSpeech plugin za prepoznavanje i pretvorbu hrvatskog govora u tekst, namijenjen za korištenje unutar DeepSeek Harnessa / Local Croatian speech-to-text dsh-plugin using ParlaSpeech wav2vec2 model, for use within DeepSeek Harness |
| 123 | [cup319/dsh-mmpl](https://github.com/cup319/dsh-mmpl) | 0 | 2026-11-15 | 2026-11-15 | MMPL Memory Palace plugin for DeepSeek Harness (@cup319/dsh-mmpl) — DuckDB vector memory MCP with skills and forgetting curve. |
| 124 | [dadiaoliyaqiao-max/dsh-brand-logo](https://github.com/dadiaoliyaqiao-max/dsh-brand-logo) | 0 | 2026-11-15 | 2026-11-15 | Replace the DeepSeek Harness sidebar brand with the Action Formula (言动方程) logo. |
| 125 | [Daphne999/dsh-auto-plugin-factory](https://github.com/Daphne999/dsh-auto-plugin-factory) | 0 | 2026-11-15 | 2026-11-15 | 每日需求雷达：采集 HN + GitHub 的求工具需求，对两个插件市场查重打分，产出 Markdown 日报。只判断，不产插件代码。 |
| 126 | [Daphne999/dsh-prompt-reverse](https://github.com/Daphne999/dsh-prompt-reverse) | 0 | 2026-11-12 | 2026-11-15 | Reverse-engineer an image style into a reproducible prompt: measures palette, contrast, warmth, grain with pure algorithms, then fills only the semantic slots you confirm. \| 把图片风格反推成可复现的提示词：颜色/对比/色温/颗粒全靠算法测，语义槽只填你确认过的。 |
| 127 | [Daphne999/dsh-qq-waifu](https://github.com/Daphne999/dsh-qq-waifu) | 0 | 2026-11-05 | 2026-11-15 | Waifu mode for QQ: split every reply into several chat bubbles with human-like typing pacing, strip trailing periods, keep tables/code intact. \| 让 AI 在 QQ 里一句一句发消息。 |
| 128 | [Dawnivers/dsh-orchestrator](https://github.com/Dawnivers/dsh-orchestrator) | 0 | 2026-11-15 | 2026-11-15 | DSH 多模型编码编排插件：独立 planner / worker / reviewer 路由、逐任务源码可行性自检、定向修复轮与结构化复核清单。 |
| 129 | [deepseekmaid/dsh-open-guard](https://github.com/deepseekmaid/dsh-open-guard) | 0 | 2026-11-15 | 2026-11-15 | Admission control for cold session reads in DeepSeek Harness: estimate, queue, or refuse opens that would blow the host heap budget. |
| 130 | [Demerier/dsh-deep-research-workflow](https://github.com/Demerier/dsh-deep-research-workflow) | 0 | 2026-11-15 | 2026-11-15 | Deep-research workflow for DSH: six phases, budget caps in code, strict findings validation, mechanical citation audit. Port of MiMo Code deep-research (MIT). |
| 131 | [dexwebcode/dsh-plugin-cost-tracker](https://github.com/dexwebcode/dsh-plugin-cost-tracker) | 0 | 2026-11-15 | 2026-11-15 | Track your DeepSeek API balance in real time, see how much each message costs, and monitor the total cost of every chat you have. Never run out of credits mid-conversation again. |
| 132 | [EAbird-Z/dsh-script-library](https://github.com/EAbird-Z/dsh-script-library) | 0 | 2026-11-15 | 2026-11-15 | Script Library for DeepSeek Harness — a per-machine registry of reusable scripts. One click scans for what you wrote since last time, you add one sentence per script, and the agent can find and call it from any workspace. Chinese UI; English summary at the bottom. |
| 133 | [ee1801446016/dsh-plugin-remover](https://github.com/ee1801446016/dsh-plugin-remover) | 0 | 2026-11-15 | 2026-11-15 | Delete a DSH conversation together with the files it produced or read, its subagent conversations, and unreferenced attachments — behind a recycle bin that restores a whole group or one file at a time. |
| 134 | [explorer-exe-bilibili/Plugin-shot](https://github.com/explorer-exe-bilibili/Plugin-shot) | 0 | 2026-10-30 | 2026-11-15 | 万物皆插件的截图工具：Windows 即用，Linux X11/Wayland 已验证（单显示器）。宿主只做加载、校验、调度，截图能力全部来自插件。C++23 / Apache-2.0 |
| 135 | [feiyu-whale-05/dsh-sidebar-tidy](https://github.com/feiyu-whale-05/dsh-sidebar-tidy) | 0 | 2026-11-15 | 2026-11-15 | DSH sidebar tidy: panel More menu, drag reorder, merged mobile drawer layout with close animation, file logging |
| 136 | [Fengoffer/dsh-desktop-notify](https://github.com/Fengoffer/dsh-desktop-notify) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness桌面通知：任务跑完、出错、需要你回答或授权时，由 DSH自己弹出系统通知并播放对应提示音2 |
| 137 | [FlyingCharon/dsh-hear](https://github.com/FlyingCharon/dsh-hear) | 0 | 2026-11-08 | 2026-11-15 | 给 DSH 里的 agent 装一对耳朵：整段波形直接交给会听音频的模型（本地 Qwen2-Audio 7B，4bit 约 4.5G 显存），不走先转写再读文字那条路。模型听完描述语气、情绪、停顿和背景，插件再算基频、能量、频谱重心和停顿分布核对，两边对得上才下结论。超过一分钟先问要不要分段；能盯 QQ 语音，静默 9 秒凑齐才算说完；八个本地模型可下可切，也能填 Key 走云端。Windows 10/11，MIT，v0.1 测试版 |
| 138 | [Frank-Fan-1058/dsh-document-view](https://github.com/Frank-Fan-1058/dsh-document-view) | 0 | 2026-11-15 | 2026-11-15 | 边看文档，边聊 AI：DSH 分栏文档视图插件（文档居中 + 右侧会话） |
| 139 | [gabrielbav/dsh-workspace](https://github.com/gabrielbav/dsh-workspace) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugins in one repo: Code mode (gVisor sandboxes), Airlock (install security scans), Connectors, AWS MCP servers and session delete, plus the tooling to build and run them from source |
| 140 | [gezi-wen/dsh-naiwa-laugh](https://github.com/gezi-wen/dsh-naiwa-laugh) | 0 | 2026-11-10 | 2026-11-15 | 每轮跑完笑一声：随机播放奶蛙音效的 DSH 插件，纯折磨人用（ |
| 141 | [GoForIt-2026/dsh-skills-cn](https://github.com/GoForIt-2026/dsh-skills-cn) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 技能管理插件：中文名 + 中文说明对照已安装技能，按来源分组、列宽可拖动、批量删除进回收站、一键插入斜杠命令。离线、无依赖、无构建。 |
| 142 | [google-q-dot/dsh-mcp-bridge](https://github.com/google-q-dot/dsh-mcp-bridge) | 0 | 2026-11-15 | 2026-11-15 | MCP bridge for the running DeepSeek Harness desktop: 26 tools over a loopback MCP endpoint so Antigravity, Claude Code, Codex or Cursor drive the same live sessions, answer approvals and questions from the MCP side, keep per-session interaction modes, and use a reconnecting stdio proxy with a no-duplicate replay policy. |
| 143 | [guanguming9-art/dsh-chonky-fps](https://github.com/guanguming9-art/dsh-chonky-fps) | 0 | 2026-11-15 | 2026-11-15 | 大肥鱼专属帧率模式：四档锁定帧率（60/90/120/144Hz），仅用于 DSH |
| 144 | [gushengsheng/dsh-mobile-link](https://github.com/gushengsheng/dsh-mobile-link) | 0 | 2026-11-15 | 2026-11-15 | a tool connects your phone to your dsh |
| 145 | [gushengsheng/dsh-task-hub](https://github.com/gushengsheng/dsh-task-hub) | 0 | 2026-11-15 | 2026-11-15 | a manager for tasks |
| 146 | [GuyeQiuchen/dsh-mode-router](https://github.com/GuyeQiuchen/dsh-mode-router) | 0 | 2026-11-15 | 2026-11-15 | 自动分辨每条消息是聊天还是派活，并切换回答协议；/chat /work /auto 手动覆盖，mode_status 可复盘。纯规则打分，不调模型。 |
| 147 | [Gwen-Liu/whalewing](https://github.com/Gwen-Liu/whalewing) | 0 | 2026-10-27 | 2026-11-15 | 鲸翼 · DSH 超级个体工作台：小鲸当总管的专家团队、本机第二大脑、技能与 MCP、定时任务、办公工坊和模型世界。DeepSeek Harness 开源插件。积厚培风，扶摇九万里 |
| 148 | [gxhyj666-png/mcp_switch](https://github.com/gxhyj666-png/mcp_switch) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：在设置页列出所有已配置的 MCP 服务器并逐个启停，改动写入 cordis.patch.yml，重启宿主后生效 |
| 149 | [haidashu79-prog/dsh-prompt-booster](https://github.com/haidashu79-prog/dsh-prompt-booster) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: auto-completes vague/incomplete prompts for non-expert users, with key-point highlights |
| 150 | [haiwenxiang061-dev/dsh-arcgispro](https://github.com/haiwenxiang061-dev/dsh-arcgispro) | 0 | 2026-11-15 | 2026-11-15 | Operate ArcGIS Pro from DeepSeek Harness: 87 tools over 1977 geoprocessing tools, .aprx projects, maps, layers, layouts and licensing. |
| 151 | [haiwenxiang061-dev/dsh-envi](https://github.com/haiwenxiang061-dev/dsh-envi) | 0 | 2026-11-15 | 2026-11-15 | Operate ENVI from DeepSeek Harness: 26 tools over 295 ENVI task-engine tasks, with the envi skill and /envi-check command. |
| 152 | [haiwenxiang061-dev/dsh-plugins](https://github.com/haiwenxiang061-dev/dsh-plugins) | 0 | 2026-11-15 | 2026-11-15 | Plugin market index (format 1) for the DSH plugins published by haiwenxiang061-dev. |
| 153 | [haiwenxiang061-dev/dsh-prompt-complete](https://github.com/haiwenxiang061-dev/dsh-prompt-complete) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: rewrite the composer draft into a complete, precise prompt using the live conversation, with a 12-second undo. |
| 154 | [hanhan9999999999999999999/dsh-see-world](https://github.com/hanhan9999999999999999999/dsh-see-world) | 0 | 2026-11-15 | 2026-11-15 | Give DeepSeek Harness an eye: look, watch, snapshot. A webcam tool for DSH with a draggable 30fps panel. |
| 155 | [hemu996/smart-ppt-designer](https://github.com/hemu996/smart-ppt-designer) | 0 | 2026-11-13 | 2026-11-15 | 国赛级原生可编辑 PPT 生成技能包：风格按内容检索、28 条红线脚本校验、静态排版检测 + 自评分 |
| 156 | [Heresy0/dsh-redframe-digitizer](https://github.com/Heresy0/dsh-redframe-digitizer) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin bridge for reviewed PDF red-frame graph digitization and Excel export. |
| 157 | [hexa-center/dsh-octagon-alerts](https://github.com/hexa-center/dsh-octagon-alerts) | 0 | 2026-11-15 | 2026-11-15 | Session chimes for choice, approval and completion — a DeepSeek Harness client plugin. |
| 158 | [hexiaowu/dsh-web-search-zai](https://github.com/hexiaowu/dsh-web-search-zai) | 0 | 2026-11-15 | 2026-11-15 | Z.ai / Zhipu GLM web-search provider for DeepSeek Harness (ctx.web) |
| 159 | [Hieupt1904/dsh-tvkt-vi](https://github.com/Hieupt1904/dsh-tvkt-vi) | 0 | 2026-11-13 | 2026-11-15 | Chuẩn tiếng Việt kỹ thuật TVKT-100 cho DeepSeek Harness: prompt contract cho mọi mode, skill tvkt-vi, linter L001-L007, agent mode DRAFT/REVIEW/REWRITE |
| 160 | [hj178250/dsh-exam-gen](https://github.com/hj178250/dsh-exam-gen) | 0 | 2026-11-15 | 2026-11-15 | K12 理科出题插件：一句话出卷、五类 PDF 版式、题库管理页。零配置，走你自己的 DSH 模型。 |
| 161 | [hsushjk/dsh-net-consent](https://github.com/hsushjk/dsh-net-consent) | 0 | 2026-11-13 | 2026-11-15 | DSH 联网审批插件：会话里自己抓网页、在命令行跑联网工具之前，先弹卡片确认 |
| 162 | [hsushjk/dsh-traffic-statistics](https://github.com/hsushjk/dsh-traffic-statistics) | 0 | 2026-11-13 | 2026-11-15 | DSH 公网流量统计插件 |
| 163 | [hyper-open/dsh-activity-board](https://github.com/hyper-open/dsh-activity-board) | 0 | 2026-11-15 | 2026-11-15 | A Workbench plugin for DSH (DeepSeek Harness): a three-column kanban over your sessions with live task progress. |
| 164 | [hzlooolzh/ThinkBuilder](https://github.com/hzlooolzh/ThinkBuilder) | 0 | 2026-11-15 | 2026-11-15 | 把流程图变成 AI 能直接照着干活的工程骨架 —— DeepSeek Harness 插件：侧栏画逻辑块，机械导出极省 token 的文件夹树，模型逐块实现并打勾。 |
| 165 | [iHatePostingOrg/iHatePosting-Agent](https://github.com/iHatePostingOrg/iHatePosting-Agent) | 0 | 2026-11-13 | 2026-11-15 | iHatePosting for AI agents a CLI, skill, and plugins that connect Claude, Cursor, Gemini, Grok and more to your social accounts on autopilot. Draft, schedule, and publish posts, upload media, and read analytics across 15 platforms, straight from your agent or the command line. |
| 166 | [iLazarus/dsh-composer-shortcuts](https://github.com/iLazarus/dsh-composer-shortcuts) | 0 | 2026-11-15 | 2026-11-15 | A left-sidebar DeepSeek Harness plugin for custom send and line-break keys in the composer. |
| 167 | [Inspiring26/dsh-cost-display](https://github.com/Inspiring26/dsh-cost-display) | 0 | 2026-11-05 | 2026-11-15 | 在dsh对话用量后追加显示每次对话花费 |
| 168 | [isdou/dsh-asset-library](https://github.com/isdou/dsh-asset-library) | 0 | 2026-11-14 | 2026-11-15 | DeepSeek Harness asset library installation packages. Copyright retained. |
| 169 | [IWHBIWHB/dsh-injection-manager](https://github.com/IWHBIWHB/dsh-injection-manager) | 0 | 2026-11-15 | 2026-11-15 | Manage and switch everything a new DeepSeek Harness session injects before its first request — prompt sections, runtime contexts, skills, tool schemas and workspace rules — clustered into suites, with presets and a token budget. |
| 170 | [Jaye1465/dsh-fresh-session](https://github.com/Jaye1465/dsh-fresh-session) | 0 | 2026-11-15 | 2026-11-15 | DSH Web/Desktop plugin: New Session creates a genuinely fresh Session from the current preset and model allowlist instead of reusing a blank shell. |
| 171 | [JEESZZLY/dsh-sansheng-liubu](https://github.com/JEESZZLY/dsh-sansheng-liubu) | 0 | 2026-11-15 | 2026-11-15 | Sansheng Liubu — a Three Departments &amp; Six Ministries board for DSH agent teams |
| 172 | [jensentsts/dsh-bubble-conversation](https://github.com/jensentsts/dsh-bubble-conversation) | 0 | 2026-11-15 | 2026-11-15 | Role-aware bubble conversations and model avatars for DeepSeek Harness. |
| 173 | [jensentsts/dsh-conversation-audio](https://github.com/jensentsts/dsh-conversation-audio) | 0 | 2026-11-15 | 2026-11-15 | Audio playback and voice extensions in DeepSeek Harness conversations. |
| 174 | [jensentsts/dsh-independent-foundations](https://github.com/jensentsts/dsh-independent-foundations) | 0 | 2026-11-15 | 2026-11-15 | Version-pinned conversation and workspace foundations for DeepSeek Harness plugins. |
| 175 | [jensentsts/dsh-message-router](https://github.com/jensentsts/dsh-message-router) | 0 | 2026-11-15 | 2026-11-15 | Message routing across DeepSeek Harness sessions and external channels. |
| 176 | [jensentsts/dsh-remote-plugin](https://github.com/jensentsts/dsh-remote-plugin) | 0 | 2026-11-15 | 2026-11-15 | Remote workspaces, sessions and tools for DeepSeek Harness. |
| 177 | [jensentsts/dsh-resource-picker](https://github.com/jensentsts/dsh-resource-picker) | 0 | 2026-11-15 | 2026-11-15 | Workspace, session and file picker for DeepSeek Harness plugins. |
| 178 | [jensentsts/dsh-steer-merge](https://github.com/jensentsts/dsh-steer-merge) | 0 | 2026-11-15 | 2026-11-15 | Combine closely spaced steering messages in DeepSeek Harness. |
| 179 | [jensentsts/dsh-workspace-reference](https://github.com/jensentsts/dsh-workspace-reference) | 0 | 2026-11-15 | 2026-11-15 | Readable workspace and session references for DeepSeek Harness. |
| 180 | [jerryjiao/dsh-ai-study-kit](https://github.com/jerryjiao/dsh-ai-study-kit) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin bundling the ai-study-kit study-coach skills (ask-coach, study-coach, study-doctor, study-recap, study-podcast) |
| 181 | [jes-phd/dsh-read-it-later](https://github.com/jes-phd/dsh-read-it-later) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：把每一轮对话发到飞书/微信 —— 稍后读、预处理后自动发送、跨设备会话接力 |
| 182 | [jiangdongceng/dsh-context-handoff](https://github.com/jiangdongceng/dsh-context-handoff) | 0 | 2026-11-15 | 2026-11-15 | 把 DSH 对话的设定与背景整理成 AI 摘要，在新对话中载入上下文；不复制旧对话，不自动继续旧任务。 |
| 183 | [Joe-Miller-1314/dsh-companion-heartbeat](https://github.com/Joe-Miller-1314/dsh-companion-heartbeat) | 0 | 2026-11-14 | 2026-11-15 | A small impulse engine for AI companions, packaged as a DeepSeek Harness plugin. |
| 184 | [joythatway/dsh-screenshot](https://github.com/joythatway/dsh-screenshot) | 0 | 2026-11-14 | 2026-11-15 | DeepSeek Harness 输入框截图插件：框选 / 窗口 / 整屏，图片直接进草稿 · Composer screenshot plugin for DeepSeek Harness |
| 185 | [jqlong17/dsh-meeting-memo](https://github.com/jqlong17/dsh-meeting-memo) | 0 | 2026-11-15 | 2026-11-15 | 会议纪要 · DeepSeek Harness 右侧栏插件：本机录音、本地转写、结构化纪要 |
| 186 | [kesheng539-sudo/dsh-sidebar-studio](https://github.com/kesheng539-sudo/dsh-sidebar-studio) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 侧栏编辑工作台，支持图片、PowerPoint、AI 框选审阅和自定义主题 |
| 187 | [Knot-chord/dsh-capability-policy](https://github.com/Knot-chord/dsh-capability-policy) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：让多个自动化插件不抢同一窗口——同一目标一回合一个动手类，决策写入 JSONL 审计。 |
| 188 | [Kongbaige010/dsh-cad-panel](https://github.com/Kongbaige010/dsh-cad-panel) | 0 | 2026-11-15 | 2026-11-15 | Third-party DSH plugin: text-to-cad live viewer in the right sidebar + offline rotatable model previews |
| 189 | [LaynePeng/dsh-email](https://github.com/LaynePeng/dsh-email) | 0 | 2026-11-13 | 2026-11-15 | DSH 邮件插件：Hotmail/Outlook 设备码 OAuth2 + 通用 SMTP 双通道发信，带对话内预览卡。零运行时依赖。 |
| 190 | [LegifyX/dsh-peak-router](https://github.com/LegifyX/dsh-peak-router) | 0 | 2026-11-15 | 2026-11-15 | Provider-agnostic peak/off-peak model routing for DeepSeek Harness: ordered fallback routes, subscription-quota guard, and a Web Extensions settings page. |
| 191 | [LegifyX/dsh-usage](https://github.com/LegifyX/dsh-usage) | 0 | 2026-11-06 | 2026-11-15 | LegifyX fork of @linxin666/dsh-usage for DeepSeek Harness: signed-in DeepSeek account balance in every currency, deeprelay flat-plan subscription meters (monthly + rolling 7-day input/output) in the Usage tab and sidebar card, always-on peak marker, LAN trust. Upstream: zhu1090093659/dsh-web packages/dsh-usage. |
| 192 | [leleou209/dsh-commander](https://github.com/leleou209/dsh-commander) | 0 | 2026-11-13 | 2026-11-15 | 给 AI 请一位常驻指挥员：它不替你干活，它替你做决策。DeepSeek Harness 的决策托管插件——可实现全自动ai代理决断托管。 |
| 193 | [let5sne/dsh-prompt-enhance](https://github.com/let5sne/dsh-prompt-enhance) | 0 | 2026-11-15 | 2026-11-15 | Adds a star button left of the composer model selector that rewrites the draft with the default model |
| 194 | [liangdabiao/dsh-storyboard-director](https://github.com/liangdabiao/dsh-storyboard-director) | 0 | 2026-11-15 | 2026-11-15 | Seedance 2.0 genre-neutral short-drama studio dsh plugin: skill snapshot + drama_check format validator + Jimeng CLI image/video generation + director workbench panel |
| 195 | [lianglllll/VideoArchive](https://github.com/lianglllll/VideoArchive) | 0 | 2026-11-15 | 2026-11-15 | 把游戏录像整理成能搜能看的本地档案库 |
| 196 | [liangzz1998/dsh-desktop-restart](https://github.com/liangzz1998/dsh-desktop-restart) | 0 | 2026-11-15 | 2026-11-15 | ? Agent ???? DeepSeek Harness ???:restart_dsh ?? + ?????????? |
| 197 | [LISHUANGXI1412/dsh-context-kit](https://github.com/LISHUANGXI1412/dsh-context-kit) | 0 | 2026-11-15 | 2026-11-15 | Tune DSH agent presets without freezing them: the override is regenerated from the shipped preset in app.asar. |
| 198 | [LISHUANGXI1412/dsh-restart-continue](https://github.com/LISHUANGXI1412/dsh-restart-continue) | 0 | 2026-11-15 | 2026-11-15 | Restart DSH Desktop from an agent tool and resume the same conversation automatically. |
| 199 | [liudiw/ez-dsh-memo](https://github.com/liudiw/ez-dsh-memo) | 0 | 2026-11-13 | 2026-11-15 | Sticky-note wall for DeepSeek Harness: markdown notes, categories, reminders, wiki links, fast-note-sync mirroring |
| 200 | [liuyiwei521/dsh-horizontal-panel-dock](https://github.com/liuyiwei521/dsh-horizontal-panel-dock) | 0 | 2026-11-15 | 2026-11-15 | Turn DeepSeek Harness sidebar panel entries into one horizontal icon row under the New-session button. |
| 201 | [lklkuu/dsh-prompt-optimizer](https://github.com/lklkuu/dsh-prompt-optimizer) | 0 | 2026-11-15 | 2026-11-15 | 给 DeepSeek Harness 对话框加「优化」按钮，用当前模型按 prompt-optimizer 基础优化模板改写草稿并写回输入框 |
| 202 | [lllirunze/dsh-session-delete](https://github.com/lllirunze/dsh-session-delete) | 0 | 2026-11-15 | 2026-11-15 | Remove session from DSH. |
| 203 | [loftspire/dsh-github-inventory](https://github.com/loftspire/dsh-github-inventory) | 0 | 2026-11-15 | 2026-11-15 | 给 DeepSeek Harness 设置页加一页「本地扩展清单」：看清从 GitHub 装了什么、能干什么、装在哪、有没有新版本，不用的技能随手关掉。 |
| 204 | [longsunny6/dsh-session-delete](https://github.com/longsunny6/dsh-session-delete) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: right-click a session to move it to a recycle bin after DSH quits; undo pending deletions and restore entries |
| 205 | [lt123456b/dsh-global-fonts](https://github.com/lt123456b/dsh-global-fonts) | 0 | 2026-11-15 | 2026-11-15 | Pin a fixed font table (Source Han Sans/Serif) into the DSH system prompt so the model never re-detects or asks about fonts; ships a settings panel to remap every role. |
| 206 | [luisrinaldi/dsh-free-llm](https://github.com/luisrinaldi/dsh-free-llm) | 0 | 2026-11-15 | 2026-11-15 | Use the AI coding CLIs you already have (OpenCode free models, Grok Build, OpenAI Codex) as model providers in DeepSeek Harness, with a local usage and quota dashboard. Zero dependencies. |
| 207 | [lukema95/dsh-news](https://github.com/lukema95/dsh-news) | 0 | 2026-11-14 | 2026-11-15 | ShellPulse news for DeepSeek Harness: right-sidebar feed, arXiv reader, selection explain/translate |
| 208 | [luorenyu/dsh-deepsearch](https://github.com/luorenyu/dsh-deepsearch) | 0 | 2026-11-14 | 2026-11-15 | Local-first conversation full-text search for DeepSeek Harness. Chinese substring matching, native message navigation, and configurable glass UI. |
| 209 | [lvguqingyou/dsh-project-anchor](https://github.com/lvguqingyou/dsh-project-anchor) | 0 | 2026-11-15 | 2026-11-15 | 项目锚定 / Project anchor — 新会话首句自动判定项目归属并注入项目上下文（DeepSeek Harness 插件） |
| 210 | [maomaocatpanda-eng/dsh-quiet-identity](https://github.com/maomaocatpanda-eng/dsh-quiet-identity) | 0 | 2026-11-15 | 2026-11-15 | Removes the fixed "You are an AI agent powered by DeepSeek Harness." opener from the assembled system prompt, for gateways that reject or rate-limit requests carrying it. |
| 211 | [mashago/dsh-code-prompt](https://github.com/mashago/dsh-code-prompt) | 0 | 2026-11-15 | 2026-11-15 | Claude-Code-style prompt and tool-description levers for DeepSeek Harness (DSH) |
| 212 | [menzi11/dsh-session-cost](https://github.com/menzi11/dsh-session-cost) | 0 | 2026-11-15 | 2026-11-15 | A flat session-cost card for DeepSeek Harness: spend so far, peak/off-peak split, and the unit prices in force. |
| 213 | [meowdan/dsh-mastodon-toot](https://github.com/meowdan/dsh-mastodon-toot) | 0 | 2026-11-15 | 2026-11-15 | 长毛象小本本：把自己的 Mastodon bot 收进 DeepSeek Harness，带本地小本本、互动边界和发帖管线 |
| 214 | [Mikajin1206/dsh-glm-quota](https://github.com/Mikajin1206/dsh-glm-quota) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: view GLM Coding Plan quota (5-hour / weekly remaining allowance, monthly MCP calls) from open.bigmodel.cn or api.z.ai |
| 215 | [mocaran/dsh-project-desk](https://github.com/mocaran/dsh-project-desk) | 0 | 2026-11-15 | 2026-11-15 | DSH 项目工作台：点名字建项目、随手改 AGENTS.md、用原生文件对话框挂载要带进对话的文件 |
| 216 | [mota-developer/dsh-mota-executor](https://github.com/mota-developer/dsh-mota-executor) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: run several bound Pull Agents for MoTA Creator — per-Agent queue and concurrency, token/cost stats, filterable logs. |
| 217 | [moyuer233/dsh-skill-forge](https://github.com/moyuer233/dsh-skill-forge) | 0 | 2026-11-15 | 2026-11-15 | Skill Forge for DeepSeek Harness: a left-sidebar panel to browse, inspect, validate and scaffold skills. |
| 218 | [MQ-lifes/dsh-moss-background](https://github.com/MQ-lifes/dsh-moss-background) | 0 | 2026-11-15 | 2026-11-15 | MOSS 550W dual-layer background + deep-space glass skin for DeepSeek Harness (WIP / semi-finished; adapted from QIFANAI/dsh-startup-moss2) |
| 219 | [MrFeng-rancheng/dsh-ctxfold](https://github.com/MrFeng-rancheng/dsh-ctxfold) | 0 | 2026-11-15 | 2026-11-15 | Guarded context assembly for long coding sessions: doctor / ask / status tools that cut input tokens, with the CLI bundled. |
| 220 | [msudustin/dsh-magpie-monitor](https://github.com/msudustin/dsh-magpie-monitor) | 0 | 2026-11-15 | 2026-11-15 | Magpie Monitor for DeepSeek Harness — sidebar widget showing live request routing, usage totals and provider quotas from the local Magpie gateway |
| 221 | [msyzzm/dsh-ccswitch-sync](https://github.com/msyzzm/dsh-ccswitch-sync) | 0 | 2026-11-15 | 2026-11-15 | dsh-TUI plugin: mirror CC Switch's DSH providers and MCP servers into the dsh-tui profile, with a footer freshness field. |
| 222 | [Mudio233/dsh-restart-button](https://github.com/Mudio233/dsh-restart-button) | 0 | 2026-11-15 | 2026-11-15 | Restart DeepSeek Harness from the sidebar, with confirmation and an automatic page reconnect. |
| 223 | [myname1234/dsh-deepseek-usage](https://github.com/myname1234/dsh-deepseek-usage) | 0 | 2026-11-15 | 2026-11-15 | dsh plugin for query the usage of deepseek-api |
| 224 | [N0rmal-114/feiyu-memgate](https://github.com/N0rmal-114/feiyu-memgate) | 0 | 2026-11-15 | 2026-11-15 | A memory gateway for chat agents: access policy, recall pipeline, write guards, forgetting curve. 给聊天机器人和智能体的记忆网关 |
| 225 | [NakliTechie/parallax](https://github.com/NakliTechie/parallax) | 0 | 2026-11-09 | 2026-11-15 | Conversations in DeepSeek Harness (dsh) that message each other and delegate tasks. dsh plugin, MIT. |
| 226 | [namandhakad712/dsh-hackatime](https://github.com/namandhakad712/dsh-hackatime) | 0 | 2026-10-09 | 2026-11-15 | Track your DeepSeek Harness coding time on Hackatime (WakaTime-compatible heartbeats). DSH Cordis plugin. |
| 227 | [nan1010082085/aigc-suite-skills](https://github.com/nan1010082085/aigc-suite-skills) | 0 | 2026-11-01 | 2026-11-15 | 漫剧（AI 短剧）创作技能套件：从小说/想法到成片的 14 个 Claude Code skill |
| 228 | [nan1010082085/dsh-plugin-aigc-skill](https://github.com/nan1010082085/dsh-plugin-aigc-skill) | 0 | 2026-11-07 | 2026-11-15 | DSH plugin: AIGC 漫剧创作技能套件（18 skills + 规则词典 + 机器闸门随包分发） |
| 229 | [netxeye/dsh-bitwarden](https://github.com/netxeye/dsh-bitwarden) | 0 | 2026-11-15 | 2026-11-15 | Bitwarden / Vaultwarden vault for DeepSeek Harness (dsh): vault panel, masked reads, TOTP, passkeys, live sync, read/write tools. Works with Bitwarden cloud (US/EU) and self-hosted Vaultwarden. Fixes the official-cloud Argon2id password-login bug. |
| 230 | [Nolitor/dsh-korean-locale](https://github.com/Nolitor/dsh-korean-locale) | 0 | 2026-10-22 | 2026-11-15 | Korean (ko) language pack for DeepSeek Harness — 68 dictionaries / 3,019 strings, scoped Pretendard typography, marketplace-ready. |
| 231 | [Nolitor/dsh-notify](https://github.com/Nolitor/dsh-notify) | 0 | 2026-10-22 | 2026-11-15 | Notify for Chrome — Chrome notifications for DeepSeek Harness turns, approvals, questions and errors, with a 7-segment DeepSeek peak countdown chip. Package: @nolit/dsh-notify. |
| 232 | [Nolitor/dsh-sidebar-manager](https://github.com/Nolitor/dsh-sidebar-manager) | 0 | 2026-10-22 | 2026-11-15 | Sidebar Manager for DeepSeek Harness — purge, archive/restore, move, rename, and fork sessions/workspaces with journaled 2PC transactions. |
| 233 | [Nolitor/dsh-tokeneconomizer](https://github.com/Nolitor/dsh-tokeneconomizer) | 0 | 2026-11-14 | 2026-11-15 | TokenEconomizer for DeepSeek Harness — turn-based output tiering, tool-result dedup, KV-cache-safe prompt slot, loop breaker with thinking watchdog, prior-session recall, and the microsoft/TokenEconomizer engine bridge. Package: @nolit/dsh-tokeneconomizer. |
| 234 | [NOOBCG/DSH-Prompt-Optimizer](https://github.com/NOOBCG/DSH-Prompt-Optimizer) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件 / DSH bundle：把输入框草稿改写成结构化提示词（角色/任务/输入/输出/示例/步骤）并原地回填、不发送。Rewrites the composer draft into a structured prompt and writes it back without sending. 呼吸光带、按钮图标、快捷键可配。 |
| 235 | [NorthBlizzard/dsh-gui-bridge](https://github.com/NorthBlizzard/dsh-gui-bridge) | 0 | 2026-11-15 | 2026-11-15 | Agent tools that drive DeepSeek Harness GUI operations: sessions, workspaces, permission mode, settings, and the plugin market. |
| 236 | [norths7ar/dsh-task-notifications](https://github.com/norths7ar/dsh-task-notifications) | 0 | 2026-11-15 | 2026-11-15 | 让 DeepSeek Harness 在任务结束或需要你处理时主动提醒你。 |
| 237 | [nowhiler/dsh-notify-webhook](https://github.com/nowhiler/dsh-notify-webhook) | 0 | 2026-11-15 | 2026-11-15 | DSH 桌面版 host 插件：会话回合结束 / 等待审批 / 等你回答时，把提醒推送到钉钉、企业微信、Server酱、PushPlus、Bark 或通用 Webhook。 |
| 238 | [Oliver-314/dsh-meow-notifier](https://github.com/Oliver-314/dsh-meow-notifier) | 0 | 2026-11-15 | 2026-11-15 | 一个可以在DSH的状态更新时在鸿蒙端的MeoW软件接收到消息的插件 |
| 239 | [openfcp/dsh-fcp](https://github.com/openfcp/dsh-fcp) | 0 | 2026-11-15 | 2026-11-15 | 在 DSH（DeepSeek Harness）里搭建一个金融消保工作台，帮助消保从业人员把政策研究、消保审查、投诉管理、金融教育、合规销售与综合管理集中到一处：六位内置专家自动调度、技能市场、知识库、思维方法卡片与规范公文输出。 |
| 240 | [ORIOW/dsh-amd-model-load](https://github.com/ORIOW/dsh-amd-model-load) | 0 | 2026-10-31 | 2026-11-15 | DSH Desktop 插件 · 在模型选择器与插件管理页显示 AMD Radeon TokenFactory 免费模型的实时使用率（Public Free 15 个模型，5 类分组） |
| 241 | [OtonashiHorobu/dsh-wayland-vdesk](https://github.com/OtonashiHorobu/dsh-wayland-vdesk) | 0 | 2026-11-13 | 2026-11-15 | Per-conversation off-screen Wayland desktops for DeepSeek Harness: run, screenshot, drive and watch GUI programs without touching your real desktop. |
| 242 | [owenKu1010/dsh-pure-mode](https://github.com/owenKu1010/dsh-pure-mode) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: a composer switch that mounts no skill in one session - removes the skill tool and its catalog, restores them on toggle. |
| 243 | [Oyyyyyy-y/dsh-presets-plan-native-act-ptc](https://github.com/Oyyyyyy-y/dsh-presets-plan-native-act-ptc) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness preset: plan mode uses native tools, approved execution stays on stock PTC |
| 244 | [Paradeluxe/dsh-live-markdown](https://github.com/Paradeluxe/dsh-live-markdown) | 0 | 2026-11-15 | 2026-11-15 | Obsidian-style Live Preview for Markdown in DeepSeek Harness: blocks render in place, only the block you edit shows source. Tables, images (double-click lightbox), callouts, embeds, math, folding — layout measured from Obsidian 1.15.1. |
| 245 | [paranoidPhantom/dsh-telegram-remote](https://github.com/paranoidPhantom/dsh-telegram-remote) | 0 | 2026-11-15 | 2026-11-15 | A full fledged Telegram experience for Deepseek Harness |
| 246 | [passing11/dsh-screenshot-classify](https://github.com/passing11/dsh-screenshot-classify) | 0 | 2026-11-15 | 2026-11-15 | Screenshot capture with automatic content classification for DeepSeek Harness — 截图即存 · 自动分类 |
| 247 | [pengtang1024/dsh-clipboard-png](https://github.com/pengtang1024/dsh-clipboard-png) | 0 | 2026-11-15 | 2026-11-15 | DSH host plugin: normalize non-PNG clipboard images (WeChat BMP screenshots) to real PNG on Linux Wayland, so pasting into the composer works. |
| 248 | [pengtang1024/dsh-paste-image](https://github.com/pengtang1024/dsh-paste-image) | 0 | 2026-11-15 | 2026-11-15 | Paste any image into DeepSeek Harness: converts XPM/BMP/TIFF and MIME-lying images to real PNG in the renderer |
| 249 | [person-clouds/dsh-workflow-shortcuts](https://github.com/person-clouds/dsh-workflow-shortcuts) | 0 | 2026-11-15 | 2026-11-15 | DSH Web workflow slash commands: /D discuss and write a plan, /G start a fresh implementation session from that plan. |
| 250 | [Poy-Coder/dsh-channel-feishu](https://github.com/Poy-Coder/dsh-channel-feishu) | 0 | 2026-11-15 | 2026-11-15 | Feishu channel for DeepSeek Harness: one chat bound to one DSH session, verbatim inbound, streaming cards, attachments. |
| 251 | [purakkon/dsh-desk-stickers](https://github.com/purakkon/dsh-desk-stickers) | 0 | 2026-11-15 | 2026-11-15 | 给 DeepSeek Harness 的桌面贴纸：窗口置顶、侧栏折叠、便利贴、插件更新与一键重启 |
| 252 | [pykkkkk/dsh-info-check](https://github.com/pykkkkk/dsh-info-check) | 0 | 2026-11-15 | 2026-11-15 | A DSH bundle that puts confirmation gates around agent work: clarify intent first, confirm the plan once, accept every milestone, and sign off before the final result. |
| 253 | [qibufengliu-design/dsh-global-research](https://github.com/qibufengliu-design/dsh-global-research) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 插件：把开放问题做成带引用、可核查的研究简报（零依赖） |
| 254 | [qing-yylx/DSH-550W-Theme](https://github.com/qing-yylx/DSH-550W-Theme) | 0 | 2026-11-15 | 2026-11-15 | A beautiful transparent theme for DSH |
| 255 | [qisimaomao/dsh-session-delete](https://github.com/qisimaomao/dsh-session-delete) | 0 | 2026-11-15 | 2026-11-15 | Adds a delete-session action to the DSH sidebar session context menu and hover row actions. |
| 256 | [Qithonic/dsh-plugin-meme-crafter](https://github.com/Qithonic/dsh-plugin-meme-crafter) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: AI-powered meme and sticker generator for DeepSeek Harness. |
| 257 | [Qithonic/dsh-plugin-mobile-workbench](https://github.com/Qithonic/dsh-plugin-mobile-workbench) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: Personal mobile web workbench with voice input and customizable panels. |
| 258 | [Qithonic/dsh-plugin-phone-helper](https://github.com/Qithonic/dsh-plugin-phone-helper) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: Floating overlay guide, automated assistance, and remote help for mobile. |
| 259 | [Qithonic/dsh-plugin-subway-subtitles](https://github.com/Qithonic/dsh-plugin-subway-subtitles) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: Real-time Chinese (and future English) live subtitles for mobile video watching. |
| 260 | [Qithonic/dsh-plugin-voice-swap](https://github.com/Qithonic/dsh-plugin-voice-swap) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: Audio pipeline to replace the lead speaker's voice with a custom voice. |
| 261 | [QLNPLUS/dsh-workspace-groups](https://github.com/QLNPLUS/dsh-workspace-groups) | 0 | 2026-11-15 | 2026-11-15 | DSH sidebar plugin: group workspaces into named, colored, collapsible folders (groups → projects → conversations) |
| 262 | [QZLin/dsh-workspace](https://github.com/QZLin/dsh-workspace) | 0 | 2026-11-01 | 2026-11-15 | 一个面向 DSH 工作区的本地 IPC 工具：Host 插件在运行中的 profile 内提供 workspaceRegistry 管理能力，原生 Go CLI 通过 Unix socket / Windows 命名管道实现增查改序删，零额外运行时依赖，不改动 DSH 自身注册表。 |
| 263 | [Railly1983/dsh-meetingstone](https://github.com/Railly1983/dsh-meetingstone) | 0 | 2026-11-13 | 2026-11-15 | DSH 插件：按角色把任务派给不同 AI CLI（Codex / CodeBuddy / Claude Code），内置开箱即用的默认角色 |
| 264 | [ramin-mahmoodi/deepseek-rtl](https://github.com/ramin-mahmoodi/deepseek-rtl) | 0 | 2026-11-15 | 2026-11-15 | Persian RTL plugin for DeepSeek Harness — smart bidi text, bundled Vazirmatn, one-command install with npx. |
| 265 | [realRoc/dsh-screensaver](https://github.com/realRoc/dsh-screensaver) | 0 | 2026-11-15 | 2026-11-15 | macOS screen saver that keeps AI coding agents (Claude Code, Codex, DeepSeek Harness) running while you step away: Touch ID unlock, no sleep, lid-closed awake, live agent session themes. DeepSeek Harness plugin. |
| 266 | [rongyishuaige7/dsh-team-kanban](https://github.com/rongyishuaige7/dsh-team-kanban) | 0 | 2026-11-15 | 2026-11-15 | DSH（DeepSeek Harness）右侧栏的多智能体协作活体看板：三列流转、依赖 DAG、队友运行态，直接消费原生 agentTeam 投影。 |
| 267 | [RuriLothlorien/dsh-session-import](https://github.com/RuriLothlorien/dsh-session-import) | 0 | 2026-11-15 | 2026-11-15 | Import Codex, Claude Code / Claude Desktop and WorkBuddy conversations into DeepSeek Harness as DSH sessions |
| 268 | [rush-db/agent-plugins](https://github.com/rush-db/agent-plugins) | 0 | 2026-11-15 | 2026-11-15 | RushDB for AI coding agents: Claude Code, Codex, Gemini CLI, Qwen Code, Antigravity, Pi and DeepSeek Harness. MCP tools, skills and optional automatic context. |
| 269 | [SaberQing/dsh-study-notes](https://github.com/SaberQing/dsh-study-notes) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：划词提问进入独立分支，不占用主对话上下文；持久高亮、笔记索引、定位回对话、可选记忆、回注、Markdown/KaTeX 渲染与 Word 导出。 |
| 270 | [sabishii-me/dsh-happenings](https://github.com/sabishii-me/dsh-happenings) | 0 | 2026-11-15 | 2026-11-15 | A live AI-game and vibe-coding event calendar on Cloudflare Workers + D1. |
| 271 | [Sandwich-git/dsh-decisions-board](https://github.com/Sandwich-git/dsh-decisions-board) | 0 | 2026-11-15 | 2026-11-15 | Pending-decision board in the DSH session header: agents record a decision as they ask, clicking an option fills the composer instead of sending it, and a reply in the conversation marks it decided. |
| 272 | [sarsgy-wenjian/dsh-session-query-cjk](https://github.com/sarsgy-wenjian/dsh-session-query-cjk) | 0 | 2026-11-15 | 2026-11-15 | 中文会话检索：字级全文索引（1 个字起可搜）＋口语别名扩展＋拼音模糊匹配，可直接替代 DeepSeek Harness 官方 dsh-session-query-sqlite 后端。 |
| 273 | [scientificmaniac/dsh-vm-control](https://github.com/scientificmaniac/dsh-vm-control) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 的 VMware 虚拟机管理插件：电源、快照、实时占用、网络配置与 VMX 参数，一处管完。 |
| 274 | [scifmat/dsh-bidgenie](https://github.com/scifmat/dsh-bidgenie) | 0 | 2026-11-15 | 2026-11-15 | DSH（DeepSeek Harness） 的投标技术方案自动化插件：从招标文件解析、分包选择、大纲/正文生成、审查优化，到技术方案与工作概览导出。 |
| 275 | [shamaya90/dsh-napcat-autostart](https://github.com/shamaya90/dsh-napcat-autostart) | 0 | 2026-11-14 | 2026-11-15 | DSH plugin: keep NapCat alive - watchdog, autostart, status page, QR/password login |
| 276 | [shattradingle/dsh-mobile-ui](https://github.com/shattradingle/dsh-mobile-ui) | 0 | 2026-11-15 | 2026-11-15 | A phone layout for the DeepSeek Harness web GUI: drawer sidebars, edge swipe, keyboard-aware composer, Enter-to-send. |
| 277 | [ShawnHanXiao/opendesign-reasoning-and-monitor](https://github.com/ShawnHanXiao/opendesign-reasoning-and-monitor) | 0 | 2026-11-15 | 2026-11-15 | OpenDesign in DeepSeek Harness: fills in reasoning-effort levels for OpenDesign models and shows the 5h / 7d quota as a pill in the conversation header. |
| 278 | [shehuilaoliumang/dsh-memory](https://github.com/shehuilaoliumang/dsh-memory) | 0 | 2026-10-28 | 2026-11-15 | Personal long-term memory knowledge base for DeepSeek Harness (sanitized public snapshot) |
| 279 | [Shimatu373/dsh-live2d-companion](https://github.com/Shimatu373/dsh-live2d-companion) | 0 | 2026-11-15 | 2026-11-15 | 基于鲸语与鱼搭子的赛博搭档 |
| 280 | [shuimuR/dsh-yingmi](https://github.com/shuimuR/dsh-yingmi) | 0 | 2026-11-15 | 2026-11-15 | 盈米基金MCP在DSH中使用，包括oAuth 认证拉起，浏览器认证，之后调用官方MCP实现各种功能。 |
| 281 | [shyoka/whale-ledger](https://github.com/shyoka/whale-ledger) | 0 | 2026-11-15 | 2026-11-15 | 鲸账 — 当前对话的 Token 用量与费用侧边栏（DeepSeek Harness Web 插件）「使用dsh许愿生成的，其实我感觉这个插件没啥用」 |
| 282 | [sido-meet/dsh-classic-quotes](https://github.com/sido-meet/dsh-classic-quotes) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 插件：名人名句每日一条 + 回合鼓励卡 + 可核查出处的语录墙，附独立 MCP server |
| 283 | [SLZ2025/dsh-del-chat](https://github.com/SLZ2025/dsh-del-chat) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: a “Delete conversation” item in the Session header menu that permanently removes an archived Session log, projection cache and Workspace record. |
| 284 | [SLZ2025/dsh-open-code-workspace](https://github.com/SLZ2025/dsh-open-code-workspace) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: open a VS Code .code-workspace file from the sidebar as one multi-root Workspace. |
| 285 | [soffits/dsh-restart-resume](https://github.com/soffits/dsh-restart-resume) | 0 | 2026-11-15 | 2026-11-15 | Continue the turns a DeepSeek Harness restart cut off, subagents included |
| 286 | [soffits/dsh-rummage-recall](https://github.com/soffits/dsh-rummage-recall) | 0 | 2026-11-15 | 2026-11-15 | Automatic recall for DeepSeek Harness: leads from your own files and chats via rummage, added after each message you write. |
| 287 | [SPYfighting/dsh-science-plugin](https://github.com/SPYfighting/dsh-science-plugin) | 0 | 2026-11-08 | 2026-11-15 | 🧪 Science team workbench for DeepSeek Harness — 9-role research agents, paper-blueprint workflow, task-flow DAG, DB/SSH/figures toolchains |
| 288 | [sqeqceqacv/dsh-workspace-scope](https://github.com/sqeqceqacv/dsh-workspace-scope) | 0 | 2026-11-08 | 2026-11-15 | DeepSeek Harness 工作区扩展：旨在减少不必要的工具定义开销，并提高工作区在单一项目的专精度。支持按工作区控制工具组、MCP 、记忆、SOUL等，自动发现本机插件工具。并且提供了手动修改、审批等功能。 |
| 289 | [sssdex/dsh-plugins](https://github.com/sssdex/dsh-plugins) | 0 | 2026-11-15 | 2026-11-15 | 自研 DeepSeek Harness 插件与预设合集，按功能分类 |
| 290 | [stardust-ovo/dsh-freechan](https://github.com/stardust-ovo/dsh-freechan) | 0 | 2026-11-14 | 2026-11-15 | DSH plugin: free AI channels (API-first, Node-only) as native tools — ask / image / condense / dispatch |
| 291 | [steelunicorn/dsh-db-tool-ru](https://github.com/steelunicorn/dsh-db-tool-ru) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin fork of dsh-db-tool: Russian UI, English server layer, per-grant database allowlists (9 database engines) |
| 292 | [sweet560/dsh-plugin-yanyan-toolkit](https://github.com/sweet560/dsh-plugin-yanyan-toolkit) | 0 | 2026-11-15 | 2026-11-15 | 研研工具包：DeepSeek Harness 插件集合（插件更新 / 会话管理 / 子智能体管理），支持物理删除与会话日志根除 |
| 293 | [T-MKT/dsh-gitall](https://github.com/T-MKT/dsh-gitall) | 0 | 2026-11-13 | 2026-11-15 | 让 DSH 的变更请求面板支持 GitLab、Gitea 与 Gitee及其命令行操作。Brings GitLab, Gitea, and Gitee repos to the DSH change request panel.  |
| 294 | [terry2010/dsh-control-surfbird-for-kitesurf](https://github.com/terry2010/dsh-control-surfbird-for-kitesurf) | 0 | 2026-11-15 | 2026-11-15 | DSH plugin: AI agent controls a Kitesurf/surfbird browser engine over CDP — 28 surfbird_* tools with per-session isolation, semantic snapshots, screenshots/PDF. 中文README included. |
| 295 | [Testiphi/dsh-stage-prose](https://github.com/Testiphi/dsh-stage-prose) | 0 | 2026-11-13 | 2026-11-15 | Progress narration and readable collapsed turns for DeepSeek Harness |
| 296 | [Tetrachlorosilane/dsh-extraworkspace](https://github.com/Tetrachlorosilane/dsh-extraworkspace) | 0 | 2026-11-15 | 2026-11-15 | Per-session extra workspaces for DeepSeek Harness on Windows — extends the file sandbox and low-integrity process sandbox (dsh-plugin) |
| 297 | [THao712/dsh-session-cleaner](https://github.com/THao712/dsh-session-cleaner) | 0 | 2026-10-30 | 2026-11-15 | Preview and permanently delete archived DeepSeek Harness Sessions together with their workspace artifacts. |
| 298 | [TianyiMa96/dsh-polymcrystal-blender](https://github.com/TianyiMa96/dsh-polymcrystal-blender) | 0 | 2026-11-15 | 2026-11-15 | 为了分子在dsh协助下在blender快速建模构建的插件 |
| 299 | [tinyhan9/dsh-ding](https://github.com/tinyhan9/dsh-ding) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 的轮次结束提示音插件：一轮对话跑完时播一声合成的水滴声。七种音色、可调音量、总开关，零运行期依赖、不带音频文件、不联网。 |
| 300 | [Tirpitz-39/dsh-no-guess](https://github.com/Tirpitz-39/dsh-no-guess) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：需求不清楚时先问再干 — ask before guessing |
| 301 | [Tirpitz-39/dsh-selftest](https://github.com/Tirpitz-39/dsh-selftest) | 0 | 2026-11-15 | 2026-11-15 | Derived self-check for changed files in AI coding-agent sessions: parses PowerShell/JS/JSON, runs the tests that own each changed plugin/project, and fails a plugin source change that ships no tests. |
| 302 | [tm5452/dsh-workspace-browser](https://github.com/tm5452/dsh-workspace-browser) | 0 | 2026-11-14 | 2026-11-15 | Folder browsing for the DeepSeek Harness workspace sidebar |
| 303 | [triagmas/dsh-token-economizer](https://github.com/triagmas/dsh-token-economizer) | 0 | 2026-11-15 | 2026-11-15 | DSH port of Microsoft TokenEconomizer mechanisms: micro-skills, tool pruning, loop guard (functional core, not full product) |
| 304 | [trumpleond/dsh-skill-manager](https://github.com/trumpleond/dsh-skill-manager) | 0 | 2026-11-15 | 2026-11-15 | DSH bundle: a Skills panel in the left sidebar that lists every skill and switches automatic model invocation on or off. |
| 305 | [Tulipe1735/dsh-plugin-paper-reader](https://github.com/Tulipe1735/dsh-plugin-paper-reader) | 0 | 2026-11-15 | 2026-11-15 | Zotero-like bilingual reading library for DeepSeek Harness: papers, tech blogs and long reads with a DSH-model translation and article chat. |
| 306 | [Vesna-Strivozha-cn/dsh-modpack-kit](https://github.com/Vesna-Strivozha-cn/dsh-modpack-kit) | 0 | 2026-11-15 | 2026-11-15 | DSH 也要整合包：把多个 DeepSeek Harness 插件打成 .dshpack 一次装好；打包强制查敏感信息与风险代码，安装前校验完整性与兼容性。 |
| 307 | [victor-github86/dsh-local-voice](https://github.com/victor-github86/dsh-local-voice) | 0 | 2026-11-15 | 2026-11-15 | Local GPT-SoVITS voice engine for DeepSeek Harness — prosody-aware pauses, content self-check, pronunciation guard. Runs fully offline. |
| 308 | [wanan8396/dsh-skill-manager](https://github.com/wanan8396/dsh-skill-manager) | 0 | 2026-11-15 | 2026-11-15 | Skill manager for DeepSeek Harness (DSH): a sidebar row and page to install, import and delete local SKILL.md skills. |
| 309 | [wanan8396/dsh-toolchain-manager](https://github.com/wanan8396/dsh-toolchain-manager) | 0 | 2026-11-15 | 2026-11-15 | Toolchain and dependency manager for DeepSeek Harness (DSH): a Settings page for the dependency root, installed toolchains, npm/pip packages and caches. |
| 310 | [wangzhen110/dsh-omni-memory](https://github.com/wangzhen110/dsh-omni-memory) | 0 | 2026-11-15 | 2026-11-15 | 全息记忆：DeepSeek Harness 长期记忆插件（源码可见 · 仅限个人自用 · 禁止商用与转售） |
| 311 | [wdy8841693/ipadpet](https://github.com/wdy8841693/ipadpet) | 0 | 2026-11-15 | 2026-11-15 | 鲸鱼娘 DSH 宠物 🐋 — iPad mini 4 全屏海底桌宠 + DeepSeek Harness 语音 Agent 插件（SpriteKit / SenseVoice / 零第三方依赖） |
| 312 | [wlq6dfup20090104/dsh-douyin-video](https://github.com/wlq6dfup20090104/dsh-douyin-video) | 0 | 2026-11-15 | 2026-11-15 | 贴一条抖音分享链接，直接落成本地 mp4（图集落成 jpg），不带水印。DSH 插件 / 命令行 / MCP server，零依赖。 |
| 313 | [WonderLawrence/daily-report-skill](https://github.com/WonderLawrence/daily-report-skill) | 0 | 2026-10-18 | 2026-11-15 | Daily and weekly report generation skill |
| 314 | [wsqwsq735/dsh-run-progress](https://github.com/wsqwsq735/dsh-run-progress) | 0 | 2026-11-15 | 2026-11-15 | Right-edge run progress rail, live token usage with an RMB estimate, and a per-turn run flow panel for the DSH Web GUI. |
| 315 | [wuchhao/dsh-duel](https://github.com/wuchhao/dsh-duel) | 0 | 2026-11-13 | 2026-11-15 | 让两个模型互博：一个写，一个独立审。编写-审核对抗闭环，P0/P1 硬门禁 |
| 316 | [xeoriam/witty](https://github.com/xeoriam/witty) | 0 | 2026-11-13 | 2026-11-15 | Witty - 英语学习工具：逐句打字与翻译、阅读出题、AI 精读、作文训练（DSH 插件 + Electron 桌面版） |
| 317 | [XiangXiaoYuan5254/dsh-jingjing](https://github.com/XiangXiaoYuan5254/dsh-jingjing) | 0 | 2026-11-15 | 2026-11-15 | 鲸鲸：住在 DeepSeek Harness 里的一整个她。QQ 聊天、人设与记忆、心情、作息、主动找你、自己刷 B 站和上网、写日记，和「大肥鱼的家」连在一起。 |
| 318 | [xiaobaga281/dsh-ink-splash](https://github.com/xiaobaga281/dsh-ink-splash) | 0 | 2026-11-02 | 2026-11-15 | DeepSeek Harness 水墨开屏动画插件 — 一条墨锋写就字标与山水，宣纸/夜山双皮肤，字标×运笔×画面三轴自由搭配 |
| 319 | [xinming-chenniang/dsh-quiet-update](https://github.com/xinming-chenniang/dsh-quiet-update) | 0 | 2026-11-14 | 2026-11-15 | Silent startup-time updates for installed DSH plugins through the host plugin manager. 启动后静默更新已装插件。 |
| 320 | [Xm-Coding/dsh-turn-notifier](https://github.com/Xm-Coding/dsh-turn-notifier) | 0 | 2026-10-25 | 2026-11-15 | A macOS-only DeepSeek Harness plugin that sends a Notification Center alert with the final assistant message when a turn completes. |
| 321 | [xskhy-kongyi/dsh-conversation-vault](https://github.com/xskhy-kongyi/dsh-conversation-vault) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 会话仓库插件 |
| 322 | [xys20071111/dsh-vm-sandbox](https://github.com/xys20071111/dsh-vm-sandbox) | 0 | 2026-11-15 | 2026-11-15 | 给dsh用的拿libkrun跑沙盒的插件 |
| 323 | [Yellster/dsh-regenerate](https://github.com/Yellster/dsh-regenerate) | 0 | 2026-11-15 | 2026-11-15 | A DSH Web UI plugin that adds regeneration and prompt editing to the conversation. |
| 324 | [yishan/dsh-synthesizer](https://github.com/yishan/dsh-synthesizer) | 0 | 2026-11-11 | 2026-11-15 | Name reserved for the DeepSeek Harness multi-track synthesizer plugin. |
| 325 | [yli42409-tech/dsh-session-durability](https://github.com/yli42409-tech/dsh-session-durability) | 0 | 2026-11-15 | 2026-11-15 | A conversation durability score for DeepSeek Harness: context, compaction and repetition wear in one pill. |
| 326 | [Ylsssq926/dsh-last-word](https://github.com/Ylsssq926/dsh-last-word) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：改模型回复，不重跑工具，从你的版本继续。Edit the model's reply without re-running tools. |
| 327 | [YMoose/dsh-seam](https://github.com/YMoose/dsh-seam) | 0 | 2026-11-14 | 2026-11-15 | DSH 插件开发支持工具：自动发现插件与 DSH 的接口接触面（seam），编译期兼容性检查，并将破坏性变更定位到源码位置。 |
| 328 | [YouHui1/dsh-serial](https://github.com/YouHui1/dsh-serial) | 0 | 2026-11-15 | 2026-11-15 | Serial port debugging plugin for DeepSeek Harness: tools for the agent, a live terminal tab, and searchable logs. |
| 329 | [Yourtokenkeeper/dsh-deepseek-c](https://github.com/Yourtokenkeeper/dsh-deepseek-c) | 0 | 2026-11-12 | 2026-11-15 | DSH plugin that exposes a personal DeepSeek web session as agent tools (chat / sessions / history), with built-in rate limiting. |
| 330 | [Yu1018/dsh-hub-center](https://github.com/Yu1018/dsh-hub-center) | 0 | 2026-11-15 | 2026-11-15 | DSH 左栏中枢（dsh-hub-center） |
| 331 | [yuan-xin-9997/dsh-config-transfer](https://github.com/yuan-xin-9997/dsh-config-transfer) | 0 | 2026-11-15 | 2026-11-15 | Export and import DeepSeek Harness plugin bundles, plugin configuration, MCP servers and agent presets by category. |
| 332 | [yuan-xin-9997/dsh-global-session-search](https://github.com/yuan-xin-9997/dsh-global-session-search) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin: search the content of every session - CJK-friendly literal matching, grouped snippets, jump-to-session. Web UI, local-only. |
| 333 | [Yuaneen/dsh-ai-gateway](https://github.com/Yuaneen/dsh-ai-gateway) | 0 | 2026-11-15 | 2026-11-15 | AI Gateway + budget governance for DeepSeek Harness: one admission gate for every model call, session/day/month cost caps, alert/block/degrade, and a /gateway control surface. |
| 334 | [yubudong/dsh-time-desk](https://github.com/yubudong/dsh-time-desk) | 0 | 2026-11-15 | 2026-11-15 | DSH 原生时间工作台：项目、习惯、农历日程、番茄钟与 AI 时间精灵。 |
| 335 | [yuhhhong/dsh-sidechat](https://github.com/yuhhhong/dsh-sidechat) | 0 | 2026-11-14 | 2026-11-15 | DeepSeek Harness（DSH）的侧边聊天插件。在主会话右侧栏打开带有当前背景快照的临时侧聊，用于调研问题、澄清细节或讨论支线，避免把临时讨论过程写入主会话上下文。 |
| 336 | [Yuhuan-zz/pet-kit](https://github.com/Yuhuan-zz/pet-kit) | 0 | 2026-11-15 | 2026-11-15 | Give your dsh-pet feeding, status and screen-looking — without touching upstream. |
| 337 | [yumonai/dsh-theme-wanderer](https://github.com/yumonai/dsh-theme-wanderer) | 0 | 2026-08-16 | 2026-11-15 | 《原神》流浪者主题 · DeepSeek Harness 插件：内嵌 1080p 动态壁纸视频、液态玻璃面板与鎏金卷轴边框｜Genshin Wanderer theme for the DeepSeek Harness Web UI |
| 338 | [YunFengyi/dsh-landmarks-3d](https://github.com/YunFengyi/dsh-landmarks-3d) | 0 | 2026-11-15 | 2026-11-15 | Four world landmarks in 3D (Eiffel Tower, Great Wall, Forbidden City, Colosseum) as a DeepSeek Harness left-sidebar plugin — procedural geometry, hand-written WebGL, no dependencies. |
| 339 | [yuyeyubee/dsh-effort-slider](https://github.com/yuyeyubee/dsh-effort-slider) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 插件：在输入框底部直接拖动调节模型思考强度，与原生模型菜单合并为一个控件。 |
| 340 | [yuyeyubee/dsh-link](https://github.com/yuyeyubee/dsh-link) | 0 | 2026-11-08 | 2026-11-15 | DSH Link: connect DeepSeek Harness on several computers and an Android phone through your own TLS relay — native remote Sessions, remote model/preset settings, streaming switch, AI tools, and on-device voice input. |
| 341 | [yuyeyubee/dsh-ssh-manager](https://github.com/yuyeyubee/dsh-ssh-manager) | 0 | 2026-11-08 | 2026-11-15 | DSH SSH Manager: save SSH servers in DeepSeek Harness, attach one with @, and run agent commands on it. |
| 342 | [z11y11w/dsh-context-slimmer](https://github.com/z11y11w/dsh-context-slimmer) | 0 | 2026-11-15 | 2026-11-15 | 把 DSH 主代理每轮要为工具说明书付的 token 收起来：工具按组折叠，模型需要时自己打开。 |
| 343 | [z11y11w/dsh-subagent-tool-guard](https://github.com/z11y11w/dsh-subagent-tool-guard) | 0 | 2026-11-15 | 2026-11-15 | Keeps each DSH subagent limited to the tools its own agent preset declares, and removes every tool it would inherit from the global layer. Main agents are untouched. |
| 344 | [Z5-Bit/dsh-vertex-sa](https://github.com/Z5-Bit/dsh-vertex-sa) | 0 | 2026-11-15 | 2026-11-15 | Vertex AI Gemini provider for DeepSeek Harness using local service-account JSON, with model settings and per-model request coordination. |
| 345 | [zaytsev/dsh-git-bug](https://github.com/zaytsev/dsh-git-bug) | 0 | 2026-11-15 | 2026-11-15 | deepseek-harness plugin for git-bug |
| 346 | [zebbkira/dsh-browser-context](https://github.com/zebbkira/dsh-browser-context) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 独立引用浏览器：网页正文、企微选区、B站可访问字幕与截图以紧凑引用加入草稿，保留来源，不自动发送。 |
| 347 | [zefferry/dsh-chat-mode](https://github.com/zefferry/dsh-chat-mode) | 0 | 2026-11-15 | 2026-11-15 | DSH 聊天模式：只聊天、省 Token 的 Agent 预设，保留联网搜索与深度思考。 |
| 348 | [zefferry/dsh-instance-manager](https://github.com/zefferry/dsh-instance-manager) | 0 | 2026-11-15 | 2026-11-15 | Manage isolated DSH instances: own kernel, profile, fixed port and workspace attribution. |
| 349 | [zefferry/dsh-station-tuner](https://github.com/zefferry/dsh-station-tuner) | 0 | 2026-11-15 | 2026-11-15 | 为 Mineradio 主题增加工作区电台调台。 |
| 350 | [zefferry/dsh-wechat-friendly](https://github.com/zefferry/dsh-wechat-friendly) | 0 | 2026-11-15 | 2026-11-15 | 在微信里远程使用 DSH：中文指令、图片卡片、多实例绑定。 |
| 351 | [zeroandcat/dsh-plugin-deposon](https://github.com/zeroandcat/dsh-plugin-deposon) | 0 | 2026-11-15 | 2026-11-15 | Pre-registered memory-probe experiment harness: frozen criteria, self-contained readings packages, dual-review evidence chain, Lean+Python dual gate implementations. v0.x preview. |
| 352 | [zhengqiuyang/dsh-extra-income](https://github.com/zhengqiuyang/dsh-extra-income) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin that bundles the monetize skill: turn a career history into an honest, actionable side-income plan |
| 353 | [zhengqiuyang/dsh-readme-polish](https://github.com/zhengqiuyang/dsh-readme-polish) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness plugin that bundles the readme-polish skill: upgrade an existing README to the standard of top repos in its own ecosystem |
| 354 | [ziyepei06/dsh-font-tuner](https://github.com/ziyepei06/dsh-font-tuner) | 0 | 2026-11-15 | 2026-11-15 | DeepSeek Harness 字体调节插件：整体缩放、仅文字放大、字重加粗，右下角浮动面板，设置存本机。 |
| 355 | [ziyepei06/dsh-writeguard](https://github.com/ziyepei06/dsh-writeguard) | 0 | 2026-11-15 | 2026-11-15 | DSH 插件：跨会话写锁 + 写者协作留言板 + 网页面板。Cross-session write locks, a coordination board and a web panel for DeepSeek Harness. |
| 356 | [zjhsxb/dsh-clawd](https://github.com/zjhsxb/dsh-clawd) | 0 | 2026-11-15 | 2026-11-15 | 🦀 Clawd娘 —— 住在 DeepSeek Harness 里的橙色像素螃蟹桌宠（Claude 吉祥物 Clawd 的娘化形态）：会话状态感知、气泡碎碎念、双击查看余额与 token 用量。搭配 dsh-claude-style 打造仿 Claude 体验。非官方爱好者作品，与 Anthropic 无关联。 |
| 357 | [ZTHHero/dsh-settings-plus](https://github.com/ZTHHero/dsh-settings-plus) | 0 | 2026-11-14 | 2026-11-15 | dsh-settings-plus for DeepSeek Harness: send shortcut, default workspace, permanent session deletion, Windows window memory, and a DeepSeek settings-card switch. |
| 358 | [zzwtian/dsh-plugin-session-purge](https://github.com/zzwtian/dsh-plugin-session-purge) | 0 | 2026-11-15 | 2026-11-15 | 彻底删除 DSH 会话：右键菜单 + host 端真实擦除（零依赖 DSH 插件） |

## 从快照消失的已核准仓库 / Approved repositories missing from the snapshot

已核准但已不在当前快照中（删除或改名），核实后从 [data/approved.json](../approved.json) 移除或更新名称。

Approved but no longer present in the current snapshot (deleted or renamed) — after checking, remove them from [data/approved.json](../approved.json) or update the name.

- 3341284397-max/dsh-question-bubbles
- bruc3van/dsh-desktop
- ChenJun25/dsh-console-plugin
- Djokovical5294/DeepSeek-Harness-Token-Free
- G1en-114/dsh-codex-import
- G1en-114/dsh-failbook
- gabrielbav/dsh-connectors
- gabrielbav/dsh-plugin-airlock
- gabrielbav/dsh-plugin-aws
- gabrielbav/dsh-plugin-session-delete
- HeartQwQ/dsh-prompt-library
- Joe-Miller-1314/dsh-heartbeat
- moonwellxh/DSH-Launcher
- PaidaxingTuT/dsh-code-runner
- Scorpioflz/dsh-cbw-memory
- slchy/dsh-pet-wearable
- SPYfighting/deepseek-science
- WindFromKadath/dsh-plugin-branch-origin
- WuZiyi521/dsh-chat-columns
- xinming-chenniang/dsh-auto-update
- yang208691-source/dsh-nutstore-backup
- ZTH-zero/dsh-settings-plus
