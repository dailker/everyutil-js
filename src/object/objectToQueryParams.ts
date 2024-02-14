/**
 * Converts flat object to URL query string.
 * @author @dailker
 * @param {object} obj
 * @returns {string}
 */
export function objectToQueryParams(obj: object): string {
  return Object.entries(obj).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join('&');
}
