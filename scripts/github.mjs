// Shared GitHub API helpers for the fetching scripts.
//
// Every call this repository makes to api.github.com goes through
// fetchWithRetry: GitHub answers with 403/429 (primary and secondary rate
// limits) and 502/503/504 (gateway hiccups) often enough that a single
// unlucky response must not fail a whole daily run. Transient statuses and
// network errors are retried with exponential backoff, honouring Retry-After
// when GitHub sends one; every other status (200, 404, …) is returned on the
// first try and is the caller's business.
//
// What a final failure means is also the caller's decision:
//   - update.mjs hard-fails on a search page (a missing page means a
//     truncated snapshot) but degrades a failed reconciliation probe to a
//     warning (reconciliation is best-effort);
//   - validate-curated.mjs degrades a failed reference check to a warning,
//     while a real 404 still hard-fails.

export const RETRYABLE_STATUSES = new Set([403, 429, 502, 503, 504]);
export const DEFAULT_RETRIES = 2;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// The standard header set, with the token attached when one is in the
// environment. Callers may override or add fields (e.g. a diff Accept).
export function githubHeaders(extra = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'awesome-dsh-plugin',
    'X-GitHub-Api-Version': '2022-11-28',
    ...extra,
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return headers;
}

// Returns the Response. Throws only when the network itself keeps failing
// after every retry — a retryable status that survives the retries is handed
// back to the caller so it can decide between warning and error.
export async function fetchWithRetry(url, { headers, retries = DEFAULT_RETRIES } = {}) {
  for (let attempt = 0; ; attempt++) {
    let response;
    try {
      response = await fetch(url, { headers });
    } catch (error) {
      if (attempt < retries) {
        await delay(1000 * 2 ** attempt);
        continue;
      }
      throw error;
    }
    if (RETRYABLE_STATUSES.has(response.status) && attempt < retries) {
      const retryAfter = Number(response.headers.get('retry-after'));
      const backoff = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1000 * 2 ** attempt;
      await delay(backoff);
      continue;
    }
    return response;
  }
}
