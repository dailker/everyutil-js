/**
 * Retries a fetch request X times with exponential backoff.
 *
 * @author @dailker
 * @param {string} url - The request URL.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} [retries=3] - Number of retries.
 * @param {number} [backoff=300] - Initial backoff in ms.
 * @returns {Promise<Response>} The fetch response.
 */
export async function retryRequest(url: string, options?: RequestInit, retries = 3, backoff = 300): Promise<Response> {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fetch(url, options);
    } catch (err) {
      lastErr = err;
      if (i < retries) await new Promise(r => setTimeout(r, backoff * Math.pow(2, i)));
    }
  }
  throw lastErr;
}
