import { MAX_VALUE_LABELS, VALUE_LABELS } from './value-labels.mjs'

/** Market-owned discovery fields; package identity and install evidence stay untouched. */
export const FEATURED_LABEL = 'featured'
export const FEATURED_TITLE = { zh: '编辑推荐', en: "Editor's Picks" }
const DAY = 24 * 60 * 60 * 1000
const recency = [
  { id: 'updated-week', days: 7, title: { zh: '近7天更新', en: 'Updated in the last 7 days' } },
  { id: 'updated-month', days: 30, title: { zh: '近30天更新', en: 'Updated in the last 30 days' } },
]
// Below 1000 stars the coarse tiers stay; at 1000+ the single star label
// floors to two significant digits (75036 → '75k+', 7754 → '7.7k+'), while the
// exact count remains the sort value in metadata.sortKeys.
const popularity = [
  { id: 'stars-500', min: 500, title: { zh: '500+ Star', en: '500+ stars' } },
  { id: 'stars-100', min: 100, title: { zh: '100+ Star', en: '100+ stars' } },
  { id: 'stars-50', min: 50, title: { zh: '50+ Star', en: '50+ stars' } },
]

/** Label id for stars ≥ 1000: two-significant-digit floor, e.g. 75036 → 'stars-75000'. */
export function starLabelId(stars) {
  if (!Number.isFinite(stars) || stars < 1000) return ''
  const step = 10 ** (String(Math.floor(stars)).length - 2)
  return `stars-${Math.floor(stars / step) * step}`
}

/** 'stars-7700' → { zh: '7.7k+ Star', en: '7.7k+ stars' }; integer math only, no float drift. */
export function starLabelTitle(id) {
  const floored = Number(id.slice('stars-'.length))
  if (!Number.isInteger(floored) || floored < 1000 || id !== starLabelId(floored)) return undefined
  let text
  if (floored < 10000) {
    const k = floored / 100 // two digits 10..99: the first digit is the integer part
    text = k % 10 ? `${(k - (k % 10)) / 10}.${k % 10}k` : `${k / 10}k`
  } else {
    text = `${floored / 1000}k`
  }
  return { zh: `${text}+ Star`, en: `${text}+ stars` }
}

export function discoveryLabels({ stars, pushedAt, now = Date.now() }) {
  const labels = []
  const age = now - Date.parse(pushedAt)
  if (Number.isFinite(age) && age >= 0) {
    const tier = recency.find(item => age < item.days * DAY)
    if (tier) labels.push(tier.id)
  }
  if (Number.isFinite(stars) && stars >= 0) {
    const id = starLabelId(stars)
    if (id) labels.push(id)
    else {
      const tier = popularity.find(item => stars >= item.min)
      if (tier) labels.push(tier.id)
    }
  }
  return labels
}

export function applyDiscovery(plugins, ranks, options = {}) {
  const featured = new Set(
    [...(options.featured ?? [])].map((name) => String(name).toLowerCase()),
  )
  const now = options.now ?? Date.now()
  const categories = {}
  const labels = {
    npm: { title: { zh: 'npm 包', en: 'npm package' } },
    git: { title: { zh: 'Git 源码包', en: 'Git bundle' } },
  }
  for (const item of [...recency, ...popularity]) labels[item.id] = { title: item.title }
  const categoryNames = {
    'multi-agents': '多 Agent 协作',
    'agents-workflows': 'Agent 工作流',
    'media-vision': '设计与视觉',
    'utilities': '实用工具',
  }
  const categoryKeywords = {
    'developer-tools': ['开发工具', '编程', 'developer tools'],
    'ui-experience': ['界面体验', '界面增强', 'user interface'],
    'multi-agents': ['多智能体', '多 Agent', 'multi agent'],
    'integrations-sharing': ['集成', '分享', 'integration'],
    'web-browser': ['网页', '浏览器', 'web', 'browser'],
    'media-vision': ['设计', '视觉', 'media', 'vision'],
    'knowledge-research': ['知识', '研究', 'research'],
    'agents-workflows': ['智能体', '自动化', '工作流', 'workflow'],
    'ecosystem-resources': ['生态资源', 'ecosystem'],
    'utilities': ['实用工具', 'utilities'],
    [FEATURED_LABEL]: ['编辑推荐', '精选', "editor's picks"],
  }
  const sortKeys = {
    stars: { title: { zh: 'GitHub Star 数', en: 'GitHub stars' }, order: 'desc' },
    repositoryUpdated: { title: { zh: '仓库更新时间', en: 'Repository updated' }, order: 'desc' },
  }
  const featuredRepo = (plugin) =>
    (ranks.get(plugin.name)?.repo || ranks.get(plugin.name)?.row?.full_name || '').toLowerCase()
  if (plugins.some((plugin) => featured.has(featuredRepo(plugin))))
    labels[FEATURED_LABEL] = { title: FEATURED_TITLE }
  for (const plugin of plugins) {
    const rank = ranks.get(plugin.name), row = rank.row ?? {}
    const picked = featured.has(featuredRepo(plugin))
    const category = row.category
    if (row.category) categories[row.category] = {
      title: { zh: categoryNames[row.category] || row.category_zh || row.category, en: row.category_en || row.category },
    }
    const tags = [...new Set(plugin.metadata?.labels ?? [])]
      .filter(id => Object.hasOwn(VALUE_LABELS, id)).slice(0, MAX_VALUE_LABELS)
    for (const id of tags) labels[id] = { title: VALUE_LABELS[id].title }
    const updated = Math.floor(Date.parse(row.pushed_at) / 1000)
    const computed = discoveryLabels({ stars: rank.stars, pushedAt: row.pushed_at, now })
    // A pinned Git install is also direct evidence for its repository and package directory.
    const source = plugin.versions[0].source
    if (!plugin.repository && source.type === 'git') plugin.repository = {
      url: source.url.replace(/\.git$/, ''),
      ...(source.path ? { directory: source.path } : {}),
    }
    plugin.metadata = {
      ...(category ? { category } : {}),
      keywords: [...new Set([
        ...(plugin.metadata?.keywords ?? []),
        ...(row.packages?.tasks ?? []),
        ...tags.flatMap(id => VALUE_LABELS[id].keywords ?? []),
        ...(categoryKeywords[row.category] ?? []),
        ...(picked ? categoryKeywords[FEATURED_LABEL] : []),
      ])],
      labels: [...new Set([
        ...plugin.versions.map(version => version.source.type),
        ...computed,
        ...(picked ? [FEATURED_LABEL] : []),
        ...tags,
      ])],
      sortKeys: {
        ...(rank.stars >= 0 ? { stars: rank.stars } : {}),
        ...(Number.isFinite(updated) && updated >= 0 ? { repositoryUpdated: updated } : {}),
      },
    }
    // 1000+ star labels are per-value ids; declare each one actually used.
    for (const id of computed) {
      if (labels[id]) continue
      const title = starLabelTitle(id)
      if (title) labels[id] = { title }
    }
  }
  return { categories, labels, sortKeys }
}
