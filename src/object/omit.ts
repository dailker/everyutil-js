/**
 * Omits specified keys from an object.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 */
export function omit(obj: object, keys: string[]): object {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
}
