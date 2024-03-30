/**
 * Memoizes fetch results in-memory with TTL.
 *
 * Example: fetchMemoized(url, 1000)
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {number} ttl - Time to live in ms.
 * @returns {Promise<Response>} The fetch response.
 */
const _fetchMemoCache = new Map<string, { expires: number, response: Response }>();
export async function fetchMemoized(url: string, ttl: number): Promise<Response> {
  const now = Date.now();
  const cached = _fetchMemoCache.get(url);
  if (cached && cached.expires > now) return cached.response.clone();
  const response = await fetch(url);
  _fetchMemoCache.set(url, { expires: now + ttl, response: response.clone() });
  return response;
}
