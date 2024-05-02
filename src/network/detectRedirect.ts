/**
 * Detects and follows/limits redirects manually.
 *
 * @author @dailker
 * @param {string} url - The request URL.
 * @param {RequestInit} [options] - Fetch options.
 * @param {number} [maxRedirects=5] - Maximum redirects to follow.
 * @returns {Promise<Response>} The final response.
 */
export async function detectRedirect(url: string, options?: RequestInit, maxRedirects = 5): Promise<Response> {
  let currentUrl = url;
  let redirects = 0;
  let res: Response;
  while (redirects < maxRedirects) {
    res = await fetch(currentUrl, { ...options, redirect: 'manual' });
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      currentUrl = res.headers.get('location')!;
      redirects++;
    } else {
      return res;
    }
  }
  throw new Error('Too many redirects');
}
