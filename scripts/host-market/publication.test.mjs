import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { delimiter, join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import YAML from 'yaml'
import { MAX_PLUGINS } from './policy.mjs'
const workflow = YAML.parse(readFileSync(new URL('../../.github/workflows/refresh-host-market.yml', import.meta.url), 'utf8'))
const step = workflow.jobs.publish.steps.at(-1).run
const code = step.split("python3 - <<'PYCODE'\n")[1].split('\nPYCODE')[0]
test('publisher accepts matching data and rejects tampered or unexpected artifacts before writing', () => {
  for (const scenario of ['valid', 'hash', 'extra', 'overflow', 'failure']) {
    const dir = mkdtempSync(join(tmpdir(), 'market-publication-'))
    try {
      mkdirSync(join(dir, 'release-data')); mkdirSync(join(dir, 'data'))
      const index = JSON.stringify({ plugins: Array.from({ length: scenario === 'overflow' ? MAX_PLUGINS + 1 : 1 }, () => ({ name: 'demo' })) })
      const report = { indexSha256: scenario === 'hash' ? '0'.repeat(64) : createHash('sha256').update(index).digest('hex'), included: JSON.parse(index).plugins.length, fetchFailures: scenario === 'failure' ? 1 : 0 }
      writeFileSync(join(dir, 'release-data/dsh-market-index.json'), index)
      writeFileSync(join(dir, 'release-data/dsh-market-index.report.json'), JSON.stringify(report))
      if (scenario === 'extra') writeFileSync(join(dir, 'release-data/run.sh'), 'untrusted')
      const result = spawnSync(process.platform === 'win32' ? 'python' : 'python3', ['-c', code], { cwd: dir, encoding: 'utf8', env: { ...process.env, SOURCE_SHA: 'a'.repeat(40), TRIGGER_SHA: 'b'.repeat(40), RUN_ID: '123' } })
      assert.ifError(result.error)
      assert.equal(result.status === 0, scenario === 'valid', result.stderr)
      if (scenario === 'valid') {
        const release = JSON.parse(readFileSync(join(dir, 'data/dsh-market-release.json')))
        assert.equal(release.indexSha256, report.indexSha256)
        assert.equal(release.runId, 123)
      }
    } finally { rmSync(dir, { recursive: true, force: true }) }
  }
})

test('atomic publication retries moved main with fresh generation, but not permission failures or exhausted retries', () => {
  for (const scenario of ['success', 'moved', 'denied', 'exhausted', 'dispatch-failed']) {
    const dir = mkdtempSync(join(tmpdir(), 'market-push-'))
    try {
      const remote = join(dir, 'remote.git'), repo = join(dir, 'repo'), bin = join(dir, 'bin')
      mkdirSync(repo); mkdirSync(bin)
      const git = (...args) => {
        const result = spawnSync('git', args, { cwd: repo, encoding: 'utf8' })
        assert.equal(result.status, 0, result.stderr)
        return result.stdout.trim()
      }
      git('init', '--bare', remote)
      git('init', '-b', 'main')
      git('config', 'user.name', 'Test'); git('config', 'user.email', 'test@example.com')
      writeFileSync(join(repo, 'README.md'), 'source\n')
      git('add', '.'); git('commit', '-m', 'source')
      const source = git('rev-parse', 'HEAD')
      git('remote', 'add', 'origin', remote)
      git('push', 'origin', 'HEAD:main', 'HEAD:market-release')
      if (['moved', 'exhausted', 'dispatch-failed'].includes(scenario)) {
        writeFileSync(join(repo, 'README.md'), 'new source\n')
        git('add', '.'); git('commit', '-m', 'concurrent update'); git('push', 'origin', 'HEAD:main')
      }
      const mainBefore = git('rev-parse', 'HEAD')
      git('checkout', '--detach', source)
      if (scenario === 'denied') writeFileSync(join(remote, 'hooks/pre-receive'), '#!/bin/sh\nexit 1\n', { mode: 0o755 })
      mkdirSync(join(repo, 'release-data')); mkdirSync(join(repo, 'data'))
      const index = JSON.stringify({ plugins: [{ name: 'demo' }] })
      writeFileSync(join(repo, 'release-data/dsh-market-index.json'), index)
      writeFileSync(join(repo, 'release-data/dsh-market-index.report.json'), JSON.stringify({ indexSha256: createHash('sha256').update(index).digest('hex'), included: 1, fetchFailures: 0 }))
      // Windows ships a Store stub named python3 that exits 49; point the step at the real interpreter.
      if (process.platform === 'win32') writeFileSync(join(bin, 'python3'), '#!/bin/sh\nexec python "$@"\n', { mode: 0o755 })
      writeFileSync(join(bin, 'gh'), '#!/bin/sh\nif [ "$1" = auth ]; then exit 0; fi\nprintf "%s\\n" "$*" > "$DISPATCH_LOG"\nexit "$DISPATCH_STATUS"\n', { mode: 0o755 })
      const log = join(dir, 'dispatch.log')
      const output = join(dir, 'github-output.txt')
      const result = spawnSync('bash', ['-e', '-o', 'pipefail', '-c', step], {
        cwd: repo, encoding: 'utf8', env: { ...process.env, GITHUB_OUTPUT: output, PATH: `${bin}${delimiter}${process.env.PATH}`, SOURCE_SHA: source, TRIGGER_SHA: source, RUN_ID: '123', RETRY_COUNT: scenario === 'exhausted' ? '2' : '0', DISPATCH_LOG: log, DISPATCH_STATUS: scenario === 'dispatch-failed' ? '1' : '0' },
      })
      assert.equal(result.status === 0, ['success', 'moved'].includes(scenario), `${scenario}: ${result.stderr}${result.stdout}`)
      const remoteMain = git('--git-dir', remote, 'rev-parse', 'main')
      const release = git('--git-dir', remote, 'rev-parse', 'market-release')
      if (scenario === 'success') {
        assert.notEqual(remoteMain, source)
        assert.equal(release, remoteMain)
        // publish-r2 keys off these outputs: it must upload exactly the revision that was pushed.
        const outputs = readFileSync(output, 'utf8')
        assert.match(outputs, /^published=true$/m)
        assert.match(outputs, new RegExp(`^revision=${remoteMain}$`, 'm'))
      } else {
        assert.ok(!existsSync(output) || !/published=true/.test(readFileSync(output, 'utf8')), 'R2 must not publish when the push did not land')
        assert.equal(remoteMain, mainBefore, 'failed atomic publication must not change main')
        assert.equal(release, source, 'failed atomic publication must not change market-release')
      }
      assert.equal(existsSync(log), ['moved', 'dispatch-failed'].includes(scenario))
      if (existsSync(log)) assert.equal(readFileSync(log, 'utf8').trim(), 'workflow run refresh-host-market.yml --ref main -f retry_count=1')
    } finally { rmSync(dir, { recursive: true, force: true }) }
  }
})
