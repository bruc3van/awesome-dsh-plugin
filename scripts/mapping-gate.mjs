// The single gate every automatic install-mapping path shares (the daily
// catalog fill and the subscription expansion): a repository below
// MAPPING_MIN_STARS, or with no push for more than MAPPING_MAX_IDLE_DAYS before
// the snapshot it was read from, is not worth a new mapping. Existing mappings
// are never touched by this gate — it only decides what gets added.

export const MAPPING_MIN_STARS = 5;
export const MAPPING_MAX_IDLE_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * @param {{ stargazers_count?: number, pushed_at?: string }} repo
 * @param {string} referenceIso - the snapshot timestamp the repo was read from
 * @returns {{ ok: true } | { ok: false, reason: string }}
 */
export function mappingGate(repo, referenceIso) {
  const stars = Number(repo?.stargazers_count);
  if (!Number.isFinite(stars) || stars < MAPPING_MIN_STARS) {
    return { ok: false, reason: `below ${MAPPING_MIN_STARS} stars` };
  }
  const reference = Date.parse(referenceIso);
  const pushed = Date.parse(repo?.pushed_at ?? '');
  if (!Number.isFinite(reference)) throw new Error(`mappingGate needs a valid snapshot timestamp, got ${JSON.stringify(referenceIso)}`);
  if (!Number.isFinite(pushed)) return { ok: false, reason: 'no push date' };
  if (reference - pushed > MAPPING_MAX_IDLE_DAYS * DAY_MS) {
    return { ok: false, reason: `no push in the ${MAPPING_MAX_IDLE_DAYS} days before the snapshot` };
  }
  return { ok: true };
}
