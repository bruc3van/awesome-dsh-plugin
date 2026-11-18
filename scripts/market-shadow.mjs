// The schema-2-shaped projection the subscription generator and its audit
// tooling still consume (entries with `packages` blocks, featured picks with
// inline packages, generated_at). It is built in memory from the reviewed
// sources — the published market-v2.json was retired on 2026-11-18, but the
// index generator's input contract predates schema 3, so this adapter keeps
// one source of truth without shipping a legacy file.

import { buildEntry, categoryForRepo, filterPool } from './market-pool.mjs';
import { packagesBlockFor } from './market-wire.mjs';

export function buildMarketShadow({ snapshot, curated, approved, packages, featured = null }) {
  const mappings = new Map(
    Object.entries(packages.entries ?? {}).map(([key, value]) => [key.toLowerCase(), value]),
  );
  const { repos } = filterPool(snapshot, curated, approved);
  const entries = repos
    .map(({ repo, category }) => {
      const record = mappings.get(repo.full_name.toLowerCase());
      return {
        ...buildEntry(repo, category),
        stargazers_count: repo.stargazers_count,
        ...(record ? { packages: packagesBlockFor(record) } : {}),
      };
    })
    .sort((a, b) => b.stargazers_count - a.stargazers_count || (a.full_name < b.full_name ? -1 : 1));

  const bySlug = new Map(
    (snapshot.repositories ?? []).map((repo) => [String(repo.full_name).toLowerCase(), repo]),
  );
  const featuredEntries = (featured?.entries ?? []).map((entry) => {
    const slug = String(entry.full_name).toLowerCase();
    const repo = bySlug.get(slug);
    const record = mappings.get(slug);
    return {
      full_name: entry.full_name,
      description: entry.description,
      ...(repo ? { stargazers_count: repo.stargazers_count, default_branch: repo.default_branch } : {}),
      ...(record ? { packages: packagesBlockFor(record) } : {}),
    };
  });

  return {
    schema_version: 2,
    generated_at: new Date().toISOString(),
    entries,
    ...(featured === null ? {} : {
      featured: {
        entries: featuredEntries,
        ...(featured.expected_repository_count === undefined
          ? {}
          : { expected_repository_count: featured.expected_repository_count }),
      },
    }),
  };
}
