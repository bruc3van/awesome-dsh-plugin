/** Bounded retry for one lookup, so a registry/Git edge hiccup cannot freeze a publication. */

/**
 * Run one operation, retrying it exactly once when the failure is not
 * classified as permanent.
 * @param run - the operation to run (called again on retry).
 * @param options - `shouldRetry` decides permanence, `delayMs` spaces the retry,
 * `onRetry` receives the first error for logging.
 * @returns the operation result.
 * @throws the first permanent error, or the second error when both attempts fail.
 */
export async function retryOnce(
  run,
  { shouldRetry = () => true, delayMs = 2_000, onRetry = () => {} } = {},
) {
  try {
    return await run();
  } catch (error) {
    if (!shouldRetry(error)) throw error;
    onRetry(error);
    if (delayMs > 0) await new Promise((resolve) => setTimeout(resolve, delayMs));
    return await run();
  }
}
