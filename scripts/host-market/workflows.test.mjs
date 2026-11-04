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

test('bot mapping commits reach both publishers without relying on push events', () => {
  const expansion = workflows.get('expand-subscription-mappings.yml')
  const v2 = workflows.get('refresh-market-v2.yml')
  assert.ok(v2.on.workflow_run.workflows.includes(expansion.name))
  for (const file of ['refresh-host-market.yml', 'publish-npm-feed.yml']) {
    assert.ok(workflows.get(file).on.workflow_run.workflows.includes(v2.name))
  }
  assert.ok(!expansion.on.workflow_run, 'expansion must not form a publication feedback loop')
})

test('reviewed source changes reach the sole market producer', () => {
  assert.ok(!workflows.has('refresh-market.yml'))
  const feed = workflows.get('refresh-market-v2.yml')
  assert.ok(feed.on.workflow_run.workflows.includes(workflows.get('update-catalog.yml').name))
  for (const path of ['data/approved.json', 'data/curated.json', 'data/packages.json', 'data/featured.json', 'scripts/market-pool.mjs', 'scripts/categories.mjs', 'scripts/markdown.mjs']) {
    assert.ok(feed.on.push.paths.includes(path), `${path} must regenerate the current feed`)
  }
})

test('publishers follow main and npm publication is not cancelled midway', () => {
  for (const w of workflows.values()) {
    for (const job of Object.values(w.jobs)) {
      if (w.on.workflow_run) assert.match(job.if ?? (job.needs ? 'head_branch' : ''), /head_branch/)
    }
  }
  for (const name of ['expand-subscription-mappings', 'refresh-market-v2', 'refresh-showcase', 'update-catalog', 'publish-npm-feed']) {
    const job = Object.values(workflows.get(`${name}.yml`).jobs)[0]
    assert.equal(job.steps[0].with.ref, 'main')
  }
  assert.equal(workflows.get('publish-npm-feed.yml').concurrency['cancel-in-progress'], false)
  const hostPaths = workflows.get('refresh-host-market.yml').on.push.paths
  for (const p of ['data/packages.json', 'data/approved.json', 'data/curated.json', 'scripts/market-v2.mjs']) {
    assert.ok(!hostPaths.includes(p), `${p} must flow through v2 before host publication`)
  }
})
