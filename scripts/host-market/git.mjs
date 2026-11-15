/** Resolve only explicit HTTPS Git targets; never install or execute repository code. */
import './git-temp-cleanup.mjs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { createHash } from 'node:crypto'
import semver from 'semver'
import { parseMarketIndex } from '@deepseek-ai/dsh-plugin-market-index'
import { gitRefs, withGitObjects } from './vendor/fetchers.ts'
import {
  findBundlePackages,
  readManifest,
  isBundle,
  isPrivate,
  dshRange,
} from './vendor/packages.ts'
import { readDisplayMetadata } from './vendor/metadata.ts'
import { inlineIcon } from './icons.mjs'
const run = promisify(execFile)
const limits = { timeoutMs: 60_000, maxTarballBytes: 64 * 1024 * 1024 }
export function classifyTarget(spec) {
  if (typeof spec !== 'string')
    return { code: 'invalid_target', reason: '安装目标不是字符串' }
  if (/\.(tgz|tar\.gz)(?:[?#]|$)/i.test(spec))
    return {
      code: 'unsupported_tarball',
      reason:
        'format-1 不支持直接 tarball 来源；需提供 npm 包或可核实的 Git 来源',
    }
  if (!/^(git\+)?https:\/\//.test(spec))
    return {
      code: 'unsupported_target',
      reason: '不是受支持的 npm 精确版本、标签或 HTTPS Git 来源',
    }
  try {
    const url = new URL(spec.replace(/^git\+/, ''))
    if (url.hostname === 'codeload.github.com')
      return { code: 'unsupported_tarball', reason: 'GitHub codeload 是归档下载地址，不是 Git 仓库；format-1 需要 npm 包或经核实的 Git 来源' }
    const fragment = decodeURIComponent(url.hash.slice(1))
    url.hash = ''
    const parts = fragment.split('&')
    let ref = '',
      path
    for (const part of parts) {
      if (part.startsWith('path:')) {
        if (path !== undefined) throw Error()
        path = part.slice(5).replace(/^\//, '')
      } else if (part) {
        if (ref) throw Error()
        ref = part
      }
    }
    if (
      ref &&
      (!/^[a-zA-Z0-9._\/-]+$/.test(ref) ||
        ref.startsWith('-') ||
        ref.includes('..'))
    )
      throw Error()
    url.pathname = url.pathname.replace(/\/+$/, '').replace(/\.git$/, '')
    const source = {
      type: 'git',
      url: url.href,
      commit: '0'.repeat(40),
      ...(path ? { path } : {}),
    }
    parseMarketIndex(
      {
        format: 1,
        title: 'check',
        plugins: [
          {
            name: 'placeholder',
            versions: [
              {
                version: '1.0.0',
                publishTimestamp: 0,
                source,
                engines: { dsh: '*' },
              },
            ],
          },
        ],
      },
      'https://example.com/index.json',
    )
    return { kind: 'git', url: url.href, ref, path }
  } catch {
    return {
      code: 'invalid_git_target',
      reason: 'Git URL、引用或子目录格式无效，不能转换为固定提交来源',
    }
  }
}
export async function resolveRef(url, ref, transports = ['https']) {
  if (!ref) return gitRefs(url, transports, limits)
  if (/^[a-f0-9]{40}$/.test(ref)) return { head: ref, tags: new Map() }
  if (/^[a-f0-9]{7,39}$/.test(ref))
    throw Object.assign(
      Error('短 commit 无法无歧义固定；请提供完整 40 位 SHA'),
      { code: 'ambiguous_short_commit' },
    )
  const env = Object.fromEntries(
    Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_')),
  )
  const safety = [
    'core.hooksPath=/dev/null',
    'core.fsmonitor=false',
    'protocol.allow=never',
    ...transports.map((t) => `protocol.${t}.allow=always`),
  ].flatMap((s) => ['-c', s])
  const { stdout } = await run(
    'git',
    [
      ...safety,
      'ls-remote',
      '--',
      url,
      `refs/heads/${ref}`,
      `refs/tags/${ref}`,
      `refs/tags/${ref}^{}`,
    ],
    {
      timeout: limits.timeoutMs,
      maxBuffer: 1024 * 1024,
      env: { ...env, GIT_TERMINAL_PROMPT: '0' },
    },
  )
  const refs = new Map(
    stdout
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const [sha, name] = line.split('\t')
        return [name, sha]
      }),
  )
  const branch = refs.get(`refs/heads/${ref}`),
    tag = refs.get(`refs/tags/${ref}^{}`) || refs.get(`refs/tags/${ref}`)
  if (branch && tag && branch !== tag)
    throw Object.assign(Error('同名分支与标签指向不同提交'), {
      code: 'ambiguous_git_ref',
    })
  const head = tag || branch
  if (!head)
    throw Object.assign(Error('指定 Git 引用不存在'), {
      code: 'git_ref_not_found',
    })
  return { head, tags: tag ? new Map([[ref, head]]) : new Map() }
}
export async function readGitTarget(
  target,
  {
    transports = ['https'],
    resolve = resolveRef,
    openObjects = withGitObjects,
  } = {},
) {
  const diagnostics = [],
    evidence = [],
    plugins = []
  const warn = (reason) =>
    diagnostics.push({ code: 'metadata_warning', status: 'warning', reason })
  const refs = await resolve(target.url, target.ref, transports)
  await openObjects(target.url, refs, transports, limits, async (objects) => {
    const files = await objects.tree(refs.head, '')
    const paths =
      target.path !== undefined
        ? [target.path]
        : await findBundlePackages(files, warn)
    if (!paths.length)
      diagnostics.push({
        code: 'not_dsh_bundle',
        status: 'excluded',
        reason: '所选提交中未发现声明 dsh.bundle 的包',
      })
    for (const path of paths) {
      const scoped = files.within(path),
        manifest = await readManifest(scoped, '')
      const base = {
        path,
        commit: refs.head,
        name: manifest?.name,
        version: manifest?.version,
      }
      const exclude = (code, reason) =>
        diagnostics.push({ ...base, code, status: 'excluded', reason })
      if (!isBundle(manifest)) {
        exclude('not_dsh_bundle', '所选目录未声明有效的 dsh.bundle.patch')
        continue
      }
      if (isPrivate(manifest)) {
        exclude('private_package', '包声明 private: true，不作为可订阅插件收录')
        continue
      }
      const range = dshRange(manifest)
      if (range instanceof Error) {
        exclude(
          'invalid_host_range',
          range.message,
        )
        continue
      }
      if (
        typeof manifest.name !== 'string' ||
        !semver.valid(manifest.version)
      ) {
        exclude('invalid_manifest', '包名或版本无效')
        continue
      }
      const { display, iconFile } = await readDisplayMetadata(
        scoped,
        manifest,
        { inlineBytes: 32768, warn },
      )
      await inlineIcon(display, iconFile, (detail) => diagnostics.push({ ...base, ...detail }))
      const version = {
        version: manifest.version,
        publishTimestamp: await objects.committed(refs.head),
        source: {
          type: 'git',
          url: target.url,
          commit: refs.head,
          ...(path ? { path } : {}),
        },
        ...(typeof range === 'string' ? { engines: { dsh: range } } : {}),
      }
      const plugin = { name: manifest.name, ...display, versions: [version] }
      try {
        parseMarketIndex(
          { format: 1, title: 'check', plugins: [plugin] },
          'https://example.com/index.json',
        )
      } catch (error) {
        exclude('invalid_index_entry', error.message)
        continue
      }
      plugins.push(plugin)
      evidence.push({
        ...base,
        url: target.url,
        manifestSha256: createHash('sha256')
          .update(await scoped.read('package.json'))
          .digest('hex'),
        publishTimestamp: version.publishTimestamp,
      })
    }
  })
  return { plugins, diagnostics, evidence }
}
