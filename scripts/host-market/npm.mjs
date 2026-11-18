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
    evidence = []
  let highest
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
    if (isPrivate(manifest)) throw Error(`${plugin.name}@${version.version}: tarball declares private: true`)
    if (!isBundle(manifest) || range instanceof Error || !matches)
      throw Error(
        `${plugin.name}@${version.version}: tarball bundle/engines differ from registry metadata`,
      )
    if (!highest) highest = { files, manifest }
    evidence.push({
      name: plugin.name,
      version: version.version,
      tarball: registryManifest.dist.tarball,
      integrity: registryManifest.dist.integrity,
    })
  }
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
    plugin: { name: plugin.name, ...display, versions: plugin.versions },
    diagnostics,
    evidence,
  }
}
