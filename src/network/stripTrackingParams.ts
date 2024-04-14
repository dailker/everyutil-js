/**
 * Removes common tracking query parameters (e.g., utm_*) from a URL.
 *
 * Example: stripTrackingParams("https://a.com/?utm_source=foo&id=1") → "https://a.com/?id=1"
 *
 * @author @dailker
 * @param {string} url - The URL to clean.
 * @returns {string} The cleaned URL.
 */
export function stripTrackingParams(url: string): string {
  try {
    const u = new URL(url);
    [...u.searchParams.keys()].forEach(k => {
      if (/^(utm_|fbclid|gclid|mc_eid|mc_cid)/i.test(k)) u.searchParams.delete(k);
    });
    return u.toString();
  } catch {
    return url;
  }
}
