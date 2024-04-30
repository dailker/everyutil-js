/**
 * Adds or merges query parameters into a URL.
 *
 * Example: addQueryParams('https://a.com', { foo: '1' }) → 'https://a.com?foo=1'
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @param {Record<string, string>} params - Params to add/merge.
 * @returns {string} The updated URL.
 */
export function addQueryParams(url: string, params: Record<string, string>): string {
  try {
    const u = new URL(url, 'http://x');
    Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
    return u.origin + u.pathname + (u.search ? '?' + u.searchParams.toString() : '') + (u.hash || '');
  } catch {
    return url;
  }
}
