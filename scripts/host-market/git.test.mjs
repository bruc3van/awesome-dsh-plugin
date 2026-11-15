import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, writeFile, mkdir, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { classifyTarget, readGitTarget, resolveRef } from './git.mjs'
import { withGitObjects } from './vendor/fetchers.ts'

test('classifies tarballs separately and validates refs and package paths', () => {
  assert.equal(
    classifyTarget('https://github.com/a/b/releases/download/v1/a.tgz').code,
    'unsupported_tarball',
  )
  assert.equal(classifyTarget('https://codeload.github.com/a/b/tar.gz/refs/heads/main').code, 'unsupported_tarball')
  assert.deepEqual(
    classifyTarget('git+https://github.com/a/b.git#main&path:/packages/demo'),
    {
      kind: 'git',
      url: 'https://github.com/a/b',
      ref: 'main',
      path: 'packages/demo',
    },
  )
  for (const s of [
    'https://u:p@github.com/a/b',
    'https://github.com/a/b#path:/../outside',
    'https://github.com/a/b#main&path:/a&path:/b',
    'http://github.com/a/b',
  ])
    assert.ok(classifyTarget(s).code)
})
test('reads pinned Git objects and subdirectory bundles without executing scripts', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'market-fixture-'))
  const git = (...args) =>
    execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8' }).trim()
  try {
    git('init', '-q')
    git('config', 'user.name', 'Fixture')
    git('config', 'user.email', 'fixture@example.invalid')
    await mkdir(join(dir, 'packages/demo'), { recursive: true })
    const manifest = {
      name: 'fixture-bundle',
      version: '1.2.3',
      dsh: { bundle: { patch: ['./patch.yml'] } },
      engines: { dsh: '>=0.2.1-alpha.5' },
      scripts: { prepare: 'touch SHOULD_NOT_EXIST' },
    }
    await writeFile(
      join(dir, 'packages/demo/package.json'),
      JSON.stringify(manifest),
    )
    git('add', '.')
    git('commit', '-qm', 'fixture')
    const commit = git('rev-parse', 'HEAD')
    const resolved = await resolveRef(dir, '', ['file'])
    assert.equal(resolved.head, commit)
    const target = {
      url: 'https://example.com/owner/repo',
      ref: '',
      path: 'packages/demo',
    }
    // Keep public URL in the output; redirect the transport only in this local fixture.
    await withGitObjects(
      dir,
      resolved,
      ['file'],
      { timeoutMs: 5000, maxTarballBytes: 1024 },
      async (objects) => {
        const files = await objects.tree(commit, 'packages/demo')
        assert.equal(
          JSON.parse(Buffer.from(await files.read('package.json')).toString())
            .name,
          'fixture-bundle',
        )
        assert.ok((await objects.committed(commit)) > 0)
      },
    )
    const result = await readGitTarget(target, {
      transports: ['file'],
      resolve: async () => resolved,
      openObjects: (_url, ...args) => withGitObjects(dir, ...args),
    })
    assert.equal(result.plugins.length, 1)
    assert.equal(result.plugins[0].versions[0].source.commit, commit)
    assert.equal(result.plugins[0].versions[0].source.path, 'packages/demo')
    assert.equal(result.evidence[0].manifestSha256.length, 64)
    manifest.engines = undefined
    await writeFile(
      join(dir, 'packages/demo/package.json'),
      JSON.stringify(manifest),
    )
    git('add', '.')
    git('commit', '-qm', 'missing range')
    const missing = await readGitTarget(
      target,
      {
        transports: ['file'],
        resolve: async () => resolveRef(dir, '', ['file']),
        openObjects: (_url, ...args) => withGitObjects(dir, ...args),
      },
    )
    assert.equal(missing.plugins.length, 1)
    assert.equal(Object.hasOwn(missing.plugins[0].versions[0], 'engines'), false)
    manifest.private = true
    await writeFile(join(dir, 'packages/demo/package.json'), JSON.stringify(manifest))
    git('add', '.')
    git('commit', '-qm', 'private package')
    const privateResult = await readGitTarget(target, {
      transports: ['file'],
      resolve: async () => resolveRef(dir, '', ['file']),
      openObjects: (_url, ...args) => withGitObjects(dir, ...args),
    })
    assert.equal(privateResult.plugins.length, 0)
    assert.equal(privateResult.diagnostics.at(-1).code, 'private_package')
    const { existsSync } = await import('node:fs')
    assert.equal(existsSync(join(dir, 'SHOULD_NOT_EXIST')), false)
    await assert.rejects(
      resolveRef(dir, '099dd37', ['file']),
      (e) => e.code === 'ambiguous_short_commit',
    )
    await assert.rejects(
      resolveRef(dir, 'missing-tag', ['file']),
      (e) => e.code === 'git_ref_not_found',
    )
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})
