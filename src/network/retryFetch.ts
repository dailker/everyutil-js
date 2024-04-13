/**
 * Retries a fetch-like function with delay between attempts.
 *
 * Example: retryFetch(() => fetch(url), 3, 1000)
 *
 * @author @dailker
 * @param {() => Promise<any>} fn - Fetch function.
 * @param {number} retries - Number of retries.
 * @param {number} delay - Delay in ms between retries.
 * @returns {Promise<any>} The fetch result.
 */
export async function retryFetch(fn: () => Promise<any>, retries: number, delay: number): Promise<any> {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (i < retries - 1) await new Promise(res => setTimeout(res, delay));
    }
  }
  throw lastErr;
}
