import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, cp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
async function fixture(t) {
  const root = await mkdtemp(resolve(tmpdir(), 'feed-publish-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(resolve(root, 'scripts'));
  await cp(resolve(repo, 'data'), resolve(root, 'data'), { recursive: true });
  for (const name of ['publish-npm-feed', 'validate-packages', 'validate-market-v2', 'market-v2', 'readme-install']) {
    await cp(resolve(repo, `scripts/${name}.mjs`), resolve(root, `scripts/${name}.mjs`));
  }
  return root;
}
async function run(root, response, publish = true) {
  // Replace only npm execution; validation still runs as real child processes.
  await writeFile(resolve(root, 'mock.mjs'), `
    import cp from 'node:child_process';
    import { syncBuiltinESMExports } from 'node:module';
    const original = cp.spawnSync;
    cp.spawnSync = (cmd, ...args) => cmd === 'npm'
      ? (console.log('MOCK_NPM_PUBLISH'), {status: 0}) : original(cmd, ...args);
    syncBuiltinESMExports();
    globalThis.fetch = async () => { ${response} };
  `);
  return spawnSync(process.execPath, ['--import', resolve(root, 'mock.mjs'), resolve(root, 'scripts/publish-npm-feed.mjs'), ...(publish ? ['--publish'] : [])], { encoding: 'utf8' });
}

test('registry errors block publishing but permit an explicitly offline build', async (t) => {
  const root = await fixture(t);
  for (const response of ["throw new Error('timeout')", 'return {status:503,ok:false}']) {
    const result = await run(root, response);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /Registry lookup failed/);
    assert.doesNotMatch(result.stdout, /MOCK_NPM_PUBLISH/);
  }
  assert.equal((await run(root, "throw new Error('timeout')", false)).status, 0);
});

test('inconsistent v1/v2 snapshots never reach npm', async (t) => {
  const root = await fixture(t);
  const file = resolve(root, 'data/market-v2.json');
  const v2 = JSON.parse(await readFile(file, 'utf8'));
  v2.entries = [];
  await writeFile(file, JSON.stringify(v2));
  const result = await run(root, 'return {status:404,ok:false}');
  assert.notEqual(result.status, 0);
  assert.doesNotMatch(result.stdout, /MOCK_NPM_PUBLISH/);
});

test('first publication, version bump and digest no-op', async (t) => {
  const root = await fixture(t);
  const first = await run(root, 'return {status:404,ok:false}');
  assert.equal(first.status, 0, first.stderr);
  assert.match(first.stdout, /MOCK_NPM_PUBLISH/);
  const manifest = JSON.parse(await readFile(resolve(root, 'dist-npm/package.json'), 'utf8'));
  const doc = { 'dist-tags': { latest: manifest.version }, versions: { [manifest.version]: manifest } };
  const response = () => `return {ok:true,status:200,json:async()=>(${JSON.stringify(doc)})}`;
  const noop = await run(root, response());
  assert.equal(noop.status, 0, noop.stderr);
  assert.doesNotMatch(noop.stdout, /MOCK_NPM_PUBLISH/);
  doc.versions[manifest.version].feedDigest = 'older';
  const bump = await run(root, response());
  assert.equal(bump.status, 0, bump.stderr);
  const next = JSON.parse(await readFile(resolve(root, 'dist-npm/package.json'), 'utf8'));
  assert.equal(next.version, manifest.version.replace(/\.0$/, '.1'));
});
