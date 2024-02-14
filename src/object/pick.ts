/**
 * Selects specific keys from an object, returning a new object.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 */
export function pick(obj: object, keys: string[]): object {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => keys.includes(k)));
}
