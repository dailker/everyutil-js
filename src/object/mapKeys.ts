/**
 * Maps/transforms keys of an object with a function.
 * @author @dailker
 * @param {object} obj
 * @param {(key: string) => string} fn
 * @returns {object}
 */
export function mapKeys(obj: object, fn: (key: string) => string): object {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k), v]));
}
