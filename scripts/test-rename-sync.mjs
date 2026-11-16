import test from 'node:test';
import assert from 'node:assert/strict';
import {
  applyRenames,
  detectIdentityChanges,
  isSameOwnerRename,
  syncSlug,
} from './rename-sync.mjs';

const RENAME = { from: 'Owner/Old-Repo', to: 'Owner/New-Repo' };

const baseData = () => ({
  approved: { 'Owner/Old-Repo': '2026-09-01', 'Other/Keep': '2026-09-02' },
  curated: {
    leaderboard_exclusions: { 'owner/old-repo': 'stars accrued as a game launcher' },
    excluded_repos: { 'other/keep': 'not a DSH plugin — a handbook' },
    market_exclusions: {},
    category_overrides: {},
    description_overrides: {},
  },
  packages: {
    schema_version: 1,
    updated_at: '2026-11-15',
    entries: {
      'owner/old-repo': {
        packages: [
          {
            profile: 'web',
            source: 'github:Owner/Old-Repo#v1.2.3&path:/pkg',
            install: 'https://github.com/Owner/Old-Repo#v1.2.3&path:/pkg',
            command: 'dsh plugin --profile web add "github:Owner/Old-Repo#v1.2.3&path:/pkg"',
          },
          { profile: 'web', source: 'npm:@Owner/old-repo', install: '@Owner/old-repo', command: 'dsh plugin --profile web add @Owner/old-repo' },
        ],
        status: 'readme-verified',
        verified_date: '2026-09-26',
        verified_via: 'README@main',
      },
      'other/keep': { packages: [{ profile: 'web', source: 'npm:keep', install: 'keep', command: 'dsh plugin --profile web add keep' }] },
    },
  },
  descriptions: [
    { 'owner/old-repo': '旧名描述' },
    { 'other/keep': '另一条' },
  ],
  featured: { entries: [{ full_name: 'Owner/Old-Repo', description: '精选' }] },
});

test('only github slug contexts move; npm names and #ref pins stay byte-identical', () => {
  assert.equal(syncSlug('github:Owner/Old-Repo#v1.2.3&path:/pkg', RENAME.from, RENAME.to), 'github:Owner/New-Repo#v1.2.3&path:/pkg');
  assert.equal(syncSlug('https://github.com/owner/old-repo', RENAME.from, RENAME.to), 'https://github.com/Owner/New-Repo');
  assert.equal(syncSlug('dsh plugin --profile web add "github:Owner/Old-Repo"', RENAME.from, RENAME.to), 'dsh plugin --profile web add "github:Owner/New-Repo"');
  assert.equal(syncSlug('npm:@Owner/old-repo', RENAME.from, RENAME.to), 'npm:@Owner/old-repo', 'npm scope/name never follows a rename');
  assert.equal(syncSlug('npm:old-repo', RENAME.from, RENAME.to), 'npm:old-repo');
  assert.equal(syncSlug('github:Other/Old-Repo', RENAME.from, RENAME.to), 'github:Other/Old-Repo', 'a different owner with the same repo name is untouched');
});

test('same-owner pure renames sync references and keep the original approval', () => {
  const data = baseData();
  const result = applyRenames(data, [RENAME, { from: 'Other/Keep', to: 'Other/Kept' }]);
  assert.deepEqual(result.applied, [RENAME, { from: 'Other/Keep', to: 'Other/Kept' }]);
  assert.deepEqual(result.review, []);
  assert.deepEqual(result.approved, { 'Owner/New-Repo': '2026-09-01', 'Other/Kept': '2026-09-02' });
  assert.deepEqual(result.curated.leaderboard_exclusions, { 'Owner/New-Repo': 'stars accrued as a game launcher' });
  const moved = result.packages.entries['owner/new-repo'];
  assert.equal(moved.status, 'readme-verified');
  assert.equal(moved.verified_date, '2026-09-26');
  assert.equal(moved.packages[0].source, 'github:Owner/New-Repo#v1.2.3&path:/pkg');
  assert.equal(moved.packages[0].install, 'https://github.com/Owner/New-Repo#v1.2.3&path:/pkg');
  assert.equal(moved.packages[0].command, 'dsh plugin --profile web add "github:Owner/New-Repo#v1.2.3&path:/pkg"');
  assert.equal(moved.packages[1].source, 'npm:@Owner/old-repo', 'npm target is untouched by the slug move');
  assert.equal(result.packages.entries['owner/old-repo'], undefined);
  assert.deepEqual(result.descriptions[0], { 'owner/new-repo': '旧名描述' });
  assert.deepEqual(result.featuredEntries, [{ full_name: 'Owner/New-Repo', description: '精选' }]);
});

test('owner transfers and reference-free renames stay in the review queue', () => {
  const data = baseData();
  const transfer = { from: 'Owner/Old-Repo', to: 'Moved/New-Repo' };
  const result = applyRenames(data, [transfer, { from: 'Nobody/Nothing', to: 'Nobody/Elsewhere' }]);
  assert.deepEqual(result.applied, []);
  assert.equal(result.review[0].reason, 'owner changed — transfer needs review');
  assert.equal(result.review[1].reason, 'rename detected, but no stored reference found — check manually');
  assert.equal(result.approved['Owner/Old-Repo'], '2026-09-01', 'approval untouched');
  assert.equal(result.packages.entries['owner/old-repo'].packages[0].source, 'github:Owner/Old-Repo#v1.2.3&path:/pkg');
});

test('a target-slug collision aborts the whole rename atomically', () => {
  const data = baseData();
  data.packages.entries['owner/new-repo'] = {
    packages: [{ profile: 'web', source: 'npm:pre-existing', install: 'pre-existing', command: 'dsh plugin --profile web add pre-existing' }],
    status: 'unverified',
    verified_date: '2026-10-01',
  };
  const result = applyRenames(data, [RENAME]);
  assert.deepEqual(result.applied, []);
  assert.equal(result.approved['Owner/Old-Repo'], '2026-09-01');
  assert.equal(result.packages.entries['owner/old-repo'].status, 'readme-verified');
  assert.equal(result.packages.entries['owner/new-repo'].packages[0].source, 'npm:pre-existing');
  assert.equal(result.review[0].reason, 'target slug already exists with different data — needs review');
});

test('identity changes — same slug, different repository id — are reported, never merged', () => {
  const previous = [
    { id: 11, full_name: 'owner/old-repo' },
    { id: 22, full_name: 'other/keep' },
  ];
  const current = [
    { id: 99, full_name: 'owner/old-repo' },
    { id: 22, full_name: 'other/keep' },
  ];
  const changes = detectIdentityChanges(current, previous, ['Owner/Old-Repo', 'Other/Keep']);
  assert.deepEqual(changes, [{ slug: 'Owner/Old-Repo', previousId: 11, currentId: 99 }]);
  assert.deepEqual(detectIdentityChanges(current, previous, ['Ghost/Gone']), []);
});

test('isSameOwnerRename is case-insensitive on the owner segment', () => {
  assert.equal(isSameOwnerRename({ from: 'Bruce/Repo', to: 'bruce/Repo2' }), true);
  assert.equal(isSameOwnerRename({ from: 'Bruce/Repo', to: 'Alice/Repo' }), false);
});
