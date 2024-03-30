/**
 * Fetch wrapper that retries on failure.
 * @param url The URL to fetch.
 * @param options Fetch options.
 * @param retryCount Number of retries.
 * @returns The fetch response.
 */
export async function fetchWithRetry(url: string, options: RequestInit = {}, retryCount: number = 3): Promise<Response> {
  let lastError;
  for (let i = 0; i < retryCount; i++) {
    try {
      return await fetch(url, options);
    } catch (err) {
      lastError = err;
      if (i === retryCount - 1) throw lastError;
      await new Promise(res => setTimeout(res, 2 ** i * 100));
    }
  }
  throw lastError;
}
