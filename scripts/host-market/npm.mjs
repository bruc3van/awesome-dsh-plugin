/** Verify the installable tarball before publishing its identity and display fields. */
import semver from 'semver'
import { npmTarball } from './vendor/fetchers.ts'
import { isBundle, isPrivate, dshRange } from './vendor/packages.ts'
import { readDisplayMetadata } from './vendor/metadata.ts'
import { inlineIcon } from './icons.mjs'
import { retryOnce } from './retry.mjs'
/** Bounded size and "no tarball in the registry entry" are policy/input failures, not transient. */
function permanentTarballFailure(error) {
  return /(?:^|: )(?:registry lists no tarball with integrity|(?:unpacked )?tarball exceeds \d+ bytes)$/.test(
    String(error?.message ?? ''),
  )
}

export async function verifyNpmPlugin(
  plugin,
  packument,
  limits = { timeoutMs: 60000, maxTarballBytes: 64 * 1024 * 1024 },
) {
  const diagnostics = [],
    evidence = [],
    kept = []
  let highest
  // Integrity, network and size failures stay fatal (thrown). A tarball that
  // disagrees with its own registry metadata is a permanent property of that
  // one release: exclude just that version and keep the package's good ones,
  // so one broken upstream publish never freezes the whole index.
  for (const version of plugin.versions) {
    const registryManifest = packument.versions[version.version]
    const { files, manifest } = await retryOnce(
      () => npmTarball(plugin.name, version.version, registryManifest.dist, limits),
      {
        shouldRetry: (error) => !permanentTarballFailure(error),
        onRetry: (error) =>
          console.warn(`retrying tarball ${plugin.name}@${version.version} after: ${error.message}`),
      },
    )
    const range = dshRange(manifest)
    const expected = version.engines?.dsh
    // npm can reorder peer keys; intersected ranges must match semantically.
    const matches = range === expected || (
      typeof range === 'string' && typeof expected === 'string' &&
      semver.subset(range, expected, { includePrerelease: true }) &&
      semver.subset(expected, range, { includePrerelease: true })
    )
    if (isPrivate(manifest) || !isBundle(manifest) || range instanceof Error || !matches) {
      const isPrivateTarball = isPrivate(manifest)
      diagnostics.push({
        name: plugin.name,
        version: version.version,
        code: isPrivateTarball ? 'private_package' : 'tarball_metadata_mismatch',
        status: 'excluded',
        reason: isPrivateTarball
          ? `${plugin.name}@${version.version}: tarball declares private: true`
          : `${plugin.name}@${version.version}: tarball bundle/engines differ from registry metadata`,
      })
      continue
    }
    kept.push(version)
    if (!highest) highest = { files, manifest }
    evidence.push({
      name: plugin.name,
      version: version.version,
      tarball: registryManifest.dist.tarball,
      integrity: registryManifest.dist.integrity,
    })
  }
  // Every listed version was excluded: no plugin, diagnostics only (not a fetch failure).
  if (!kept.length) return { diagnostics, evidence }
  const { display, iconFile } = await readDisplayMetadata(
    highest.files,
    highest.manifest,
    {
      inlineBytes: 32768,
      warn: (reason) =>
        diagnostics.push({
          name: plugin.name,
          code: 'metadata_warning',
          status: 'warning',
          reason,
        }),
    },
  )
  await inlineIcon(display, iconFile, (detail) => diagnostics.push({ name: plugin.name, ...detail }))
  return {
    plugin: { name: plugin.name, ...display, versions: kept },
    diagnostics,
    evidence,
  }
}
