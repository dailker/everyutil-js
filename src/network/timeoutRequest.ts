/**
 * Wraps fetch with a timeout.
 *
 * @author @dailker
 * @param {string} url - The request URL.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} timeoutMs - Timeout in milliseconds.
 * @returns {Promise<Response>} The fetch response.
 */
export async function timeoutRequest(url: string, options: RequestInit = {}, timeoutMs: number): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs))
  ]);
}
