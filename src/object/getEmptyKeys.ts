/**
 * Returns keys whose values are null, undefined, or empty strings.
 * @author @dailker
 * @param {object} obj
 * @returns {string[]}
 */
export function getEmptyKeys(obj: object): string[] {
  return Object.entries(obj).filter(([_, v]) => v === null || v === undefined || v === '').map(([k]) => k);
}
