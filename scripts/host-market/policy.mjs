export const MAX_PLUGINS = 20000
export const SELECTION_POLICY = 'size-budget-verified-plugins-by-stars-v2'

/** The subscription JSON is downloaded in whole by the host (50 per batch is
 * display-only), so the published index must stay under the gateway's 5 MiB
 * snapshot limit — the same bound the publish workflow enforces on artifacts.
 * Inclusion is therefore bounded by serialized bytes, not a plugin count
 * (2026-11-17): verified plugins enter by stars until the index approaches
 * this budget, lowest-starred non-featured entries dropping first. If the
 * gateway limit is ever raised, raising MAX_INDEX_BYTES alone lets the
 * budget — and the published count — grow with it. */
export const MAX_INDEX_BYTES = 5 * 1024 * 1024

/** Working target for generation: the gateway hard limit minus headroom for
 * serialization variance, metadata growth and icon re-encoding drift. */
export const INDEX_TARGET_BYTES = MAX_INDEX_BYTES - 384 * 1024

/** Refuse publishing incomplete reads, an oversized index, or a suspiciously collapsed catalog. */
export function assertPublishable({ index, indexBytes, fetchFailures = 0, featuredRepositoryCount, expectedFeaturedRepositoryCount }, previous) {
  if (fetchFailures)
    throw new Error(
      'Source lookup failed; see staging report. Published data was not replaced.',
    )
  if (!index.plugins.length)
    throw new Error(
      'No eligible bundles; see staging report. Published data was not replaced.',
    )
  if (indexBytes !== undefined &&
      (!Number.isInteger(indexBytes) || indexBytes < 0 || indexBytes > MAX_INDEX_BYTES))
    throw new Error(
      `Index is ${indexBytes} bytes; the published limit is ${MAX_INDEX_BYTES} bytes (5 MiB).`,
    )
  if (index.plugins.length > MAX_PLUGINS) {
    throw new Error(
      `Index contains ${index.plugins.length} plugins; the sanity ceiling is ${MAX_PLUGINS}.`,
    )
  }
  if (expectedFeaturedRepositoryCount !== undefined &&
      (!Number.isInteger(expectedFeaturedRepositoryCount) || expectedFeaturedRepositoryCount < 1 || featuredRepositoryCount !== expectedFeaturedRepositoryCount))
    throw new Error(`Editor's picks source contains ${featuredRepositoryCount} repositories, expected ${expectedFeaturedRepositoryCount}; published data was not replaced.`)
  const previousCount = previous
    ? Math.min(previous.plugins.length, MAX_PLUGINS)
    : 0
  if (previous && index.plugins.length < previousCount * 0.8) {
    throw new Error(
      `Index collapsed from ${previous.plugins.length} to ${index.plugins.length}; review staging diagnostics before replacing published data`,
    )
  }
}
