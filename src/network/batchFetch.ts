/**
 * Concurrently fetches multiple URLs with optional concurrency limit.
 *
 * Example: batchFetch(["/a","/b"], 2)
 *
 * @author @dailker
 * @param {string[]} urls - Array of URLs to fetch.
 * @param {number} [concurrency=5] - Max concurrent fetches.
 * @returns {Promise<(Response | null)[]>} Array of fetch responses or null for failed requests.
 */
export async function batchFetch(urls: string[], concurrency: number = 5): Promise<(Response | null)[]> {
  const results: (Response | null)[] = [];
  let i = 0;
  async function next() {
    if (i >= urls.length) return;
    const idx = i++;
    try {
      results[idx] = await fetch(urls[idx]);
    } catch {
      results[idx] = null;
    }
    await next();
  }
  await Promise.all(Array(Math.min(concurrency, urls.length)).fill(0).map(next));
  return results;
}
