export const MAX_PLUGINS = 1000
export const SELECTION_POLICY = `top-${MAX_PLUGINS}-verified-plugins-by-stars-v1`

/** Refuse publishing incomplete reads, an oversized index, or a suspiciously collapsed catalog. */
export function assertPublishable({ index, fetchFailures = 0, featuredRepositoryCount, expectedFeaturedRepositoryCount }, previous) {
  if (fetchFailures)
    throw new Error(
      'Source lookup failed; see staging report. Published data was not replaced.',
    )
  if (!index.plugins.length)
    throw new Error(
      'No eligible bundles; see staging report. Published data was not replaced.',
    )
  if (index.plugins.length > MAX_PLUGINS) {
    throw new Error(
      `Index contains ${index.plugins.length} plugins; the published cap is ${MAX_PLUGINS}.`,
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
