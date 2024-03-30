/**
 * Fetch wrapper that retries on failure.
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} retryCount - Number of retries.
 * @returns {Promise<Response>} Fetch response.
 */
export async function fetchWithRetry(url: string, options?: RequestInit, retryCount: number = 3): Promise<Response> {
  let lastError: any;
  for (let i = 0; i <= retryCount; i++) {
    try {
      return await fetch(url, options);
    } catch (err) {
      lastError = err;
      if (i === retryCount) throw lastError;
      await new Promise(res => setTimeout(res, 2 ** i * 100));
    }
  }
  throw lastError;
}

/**
 * Fetch with timeout support.
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} timeoutMs - Timeout in milliseconds.
 * @returns {Promise<Response>} Fetch response.
 */
export async function fetchWithTimeout(url: string, options?: RequestInit, timeoutMs: number = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(id);
  }
}

/**
 * Fetch with local caching (in-memory).
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} cacheDurationMs - Cache duration in ms.
 * @returns {Promise<Response>} Fetch response.
 */
const _fetchCache = new Map<string, { expires: number; response: Response }>();
export async function cachedFetch(url: string, options?: RequestInit, cacheDurationMs: number = 60000): Promise<Response> {
  const key = url + JSON.stringify(options || {});
  const now = Date.now();
  const cached = _fetchCache.get(key);
  if (cached && cached.expires > now) {
    return cached.response.clone();
  }
  const response = await fetch(url, options);
  _fetchCache.set(key, { expires: now + cacheDurationMs, response: response.clone() });
  return response;
}
