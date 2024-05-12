/**
 * Retries a fetch-like function with exponential backoff.
 *
 * Example: retryFetchWithBackoff(fn, 5, 100, 2)
 *
 * @author @dailker
 * @param {() => Promise<any>} fn - Fetch function.
 * @param {number} retries - Number of retries.
 * @param {number} baseDelay - Initial delay in ms.
 * @param {number} factor - Backoff multiplier.
 * @returns {Promise<any>} The fetch result.
 */
export async function retryFetchWithBackoff(fn: () => Promise<any>, retries: number, baseDelay: number = 100, factor: number = 2): Promise<any> {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (i < retries - 1) await new Promise(res => setTimeout(res, baseDelay * Math.pow(factor, i)));
    }
  }
  throw lastErr;
}
