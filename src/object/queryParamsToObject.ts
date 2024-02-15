/**
 * Builds object from URL query string.
 * @author @dailker
 * @param {string} str
 * @returns {object}
 */
export function queryParamsToObject(str: string): object {
  return Object.fromEntries(new URLSearchParams(str));
}
