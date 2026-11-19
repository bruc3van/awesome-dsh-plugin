import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import YAML from 'yaml'

const dir = new URL('../../.github/workflows/', import.meta.url)
const workflows = new Map(readdirSync(dir).filter(n => n.endsWith('.yml')).map(n => [n, YAML.parse(readFileSync(new URL(n, dir), 'utf8'))]))

test('workflow_run publication graph has no cycles, unknown parents, or chains over three levels', () => {
  const byName = new Map([...workflows.values()].map(w => [w.name, w]))
  function visit(w, path = []) {
    assert.ok(!path.includes(w.name), `cycle: ${[...path, w.name].join(' -> ')}`)
    assert.ok(path.length <= 3, `workflow_run depth exceeds GitHub limit: ${[...path, w.name].join(' -> ')}`)
    for (const parent of w.on.workflow_run?.workflows ?? []) {
      assert.ok(byName.has(parent), `unknown upstream: ${parent}`)
      visit(byName.get(parent), [...path, w.name])
    }
  }
  for (const w of workflows.values()) visit(w)
})

test('one daily mapping job feeds the host index once, then the npm feed', () => {
  assert.ok(!workflows.has('expand-subscription-mappings.yml'), 'expansion is folded into the daily mapping job')
  const fill = workflows.get('fill-catalog-mappings.yml')
  const host = workflows.get('refresh-host-market.yml')
  const publish = workflows.get('publish-npm-feed.yml')
  assert.ok(host.on.workflow_run.workflows.includes(fill.name), 'the daily mapping job refreshes the index')
  assert.ok(publish.on.workflow_run.workflows.includes(host.name), 'the published index triggers the feed build')
  assert.ok(!fill.on.workflow_run, 'the mapping job must not form a publication feedback loop')
  assert.deepEqual(fill.on.schedule.map((entry) => entry.cron), ['40 15 * * *'], 'mapping runs once a day, after the snapshot')
  const runs = fill.jobs.fill.steps.map((step) => step.run ?? '').join('\n')
  assert.match(runs, /catalog-mappings\.mjs/)
  assert.match(runs, /expand-mappings\.mjs --fill --size 200/)
  assert.doesNotMatch(runs, /for batch in/, 'one expansion batch per day')
  assert.match(runs, /git add [^\n]*data\/review\/subscription/, 'the subscription review queue is committed with the mappings')
})

test('reviewed source changes reach host index first, then cascade to npm feed and R2', () => {
  assert.ok(!workflows.has('refresh-market.yml'))
  assert.ok(!workflows.has('refresh-market-v2.yml'), 'the schema-2 feed was retired')
  const host = workflows.get('refresh-host-market.yml')
  assert.ok(host.on.workflow_run.workflows.includes(workflows.get('update-catalog.yml').name), 'snapshots refresh the index')
  for (const path of [
    'data/approved.json', 'data/curated.json', 'data/packages.json', 'data/featured.json',
    'scripts/market-pool.mjs', 'scripts/market-shadow.mjs', 'scripts/market-wire.mjs',
  ]) {
    assert.ok(host.on.push.paths.includes(path), `${path} must regenerate the official host index`)
  }
  assert.ok(host.jobs['publish-r2'], 'Plan A R2 mirror job must exist on host publication')
  assert.equal(host.jobs['publish-r2']['continue-on-error'], true, 'an R2 failure must not fail the run and strand an already-published release')
  const publish = workflows.get('publish-npm-feed.yml')
  assert.ok(publish.on.workflow_run.workflows.includes(host.name))
  assert.match(publish.jobs.publish.if, /conclusion == 'failure'/, 'a failed host refresh must not hold back landed feed changes')
  assert.doesNotMatch(publish.jobs.publish.if, /cancelled|skipped/)
  assert.ok(publish.on.push.paths.includes('scripts/safe-market-catalog.mjs'))
})

test('publishers follow main and npm publication is not cancelled midway', () => {
  for (const w of workflows.values()) {
    for (const job of Object.values(w.jobs)) {
      if (w.on.workflow_run) assert.match(job.if ?? (job.needs ? 'head_branch' : ''), /head_branch|published/)
    }
  }
  for (const name of ['fill-catalog-mappings', 'refresh-host-market', 'refresh-showcase', 'update-catalog', 'publish-npm-feed']) {
    const job = Object.values(workflows.get(`${name}.yml`).jobs)[0]
    assert.equal(job.steps[0].with.ref, 'main')
  }
  assert.equal(workflows.get('publish-npm-feed.yml').concurrency['cancel-in-progress'], false)
})

test('cap literals stay in lockstep with policy.mjs across CI gates', async () => {
  const { readFileSync } = await import('node:fs')
  const { MAX_PLUGINS } = await import('../host-market/policy.mjs')
  const mapping = readFileSync(new URL('../../.github/workflows/fill-catalog-mappings.yml', import.meta.url), 'utf8')
  const publication = readFileSync(new URL('../../.github/workflows/refresh-host-market.yml', import.meta.url), 'utf8')
  assert.ok(!/count\s*<\s*\d+/.test(mapping), 'mapping must not gate on a plugin count')
  assert.ok(publication.includes(`<= ${MAX_PLUGINS}`), 'publish artifact gate must use the sanity ceiling')
  assert.ok(!mapping.includes('toward 1000') && !publication.includes('<= 1000'), 'stale cap literals must not survive')
})

test('the feed publisher runs only fast data gates; the heavy regression suite gates code in validate-curated', () => {
  const publish = workflows.get('publish-npm-feed.yml').jobs.publish
  const runs = publish.steps.map((step) => step.run ?? '').join('\n')
  const heavy = ['test-publish-npm-feed.mjs', 'test-readme-install.mjs', 'test-safe-market-catalog.mjs', 'test-catalog-mappings.mjs']
  for (const file of heavy) assert.ok(!runs.includes(file), `${file} must not run inside the npm publish job`)
  assert.doesNotMatch(runs, /node --test/, 'no regression suite inside the npm publish job')
  assert.match(runs, /publish-npm-feed\.mjs --publish/, 'the publisher (which spawns validate-packages / validate-market-catalog) still runs')
  assert.ok(publish['timeout-minutes'] <= 10, 'without the regression suite the publish job needs a short cap')

  const curated = workflows.get('validate-curated.yml')
  const suite = curated.jobs.validate.steps.map((step) => step.run ?? '').join('\n')
  for (const file of heavy) assert.ok(suite.includes(file), `${file} must keep running in validate-curated.yml`)
  for (const path of ['scripts/**', '.github/workflows/**']) {
    assert.ok(curated.on.pull_request.paths.includes(path), `PRs touching ${path} run the suite`)
    assert.ok(curated.on.push.paths.includes(path), `pushes touching ${path} run the suite`)
  }
})

test('the npmmirror sync ping uses the sync-task route and never fails silently', () => {
  const runs = workflows.get('publish-npm-feed.yml').jobs.publish.steps.map((step) => step.run ?? '').join('\n')
  assert.match(runs, /registry-direct\.npmmirror\.com\/-\/package\/awesome-dsh-plugin-feed\/syncs/)
  assert.doesNotMatch(runs, /npmmirror[^\n]*\|\| true/, 'a failed sync must surface as a warning')
  assert.match(runs, /::warning::npmmirror sync request failed/)
})
