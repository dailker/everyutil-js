/**
 * Fetch with local caching for a specified duration (in-memory).
 * @param url The URL to fetch.
 * @param options Fetch options.
 * @param cacheDurationMs Cache duration in milliseconds.
 * @returns The fetch response (cloned).
 */
const _fetchCache = new Map<string, { expires: number, response: Response }>();
export async function cachedFetch(url: string, options: RequestInit = {}, cacheDurationMs: number = 60000): Promise<Response> {
  const key = url + JSON.stringify(options);
  const now = Date.now();
  const cached = _fetchCache.get(key);
  if (cached && cached.expires > now) {
    return cached.response.clone();
  }
  const response = await fetch(url, options);
  _fetchCache.set(key, { expires: now + cacheDurationMs, response: response.clone() });
  return response;
}
