/**
 * Caches fetch responses in memory or localStorage.
 *
 * @author @dailker
 * @param {string} url - The request URL.
 * @param {RequestInit} [options] - Fetch options.
 * @param {'memory'|'localStorage'} [cacheType='memory'] - Cache type.
 * @returns {Promise<Response>} The cached or fetched response.
 */
const memoryCache = new Map<string, Response>();
export async function cacheRequest(url: string, options?: RequestInit, cacheType: 'memory'|'localStorage' = 'memory'): Promise<Response> {
  const key = url + JSON.stringify(options || {});
  if (cacheType === 'memory' && memoryCache.has(key)) {
    return memoryCache.get(key)!.clone();
  }
  if (cacheType === 'localStorage' && typeof localStorage !== 'undefined') {
    const cached = localStorage.getItem(key);
    if (cached) {
      return new Response(cached);
    }
  }
  const res = await fetch(url, options);
  const clone = res.clone();
  if (cacheType === 'memory') memoryCache.set(key, clone);
  if (cacheType === 'localStorage' && typeof localStorage !== 'undefined') {
    const text = await clone.text();
    localStorage.setItem(key, text);
  }
  return res;
}
