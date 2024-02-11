/**
 * Creates an object from an array of keys and a mapper function.
 * @author @dailker
 * @param {string[]} keys
 * @param {(key: string) => any} fn
 * @returns {object}
 */
export function objectFromKeys(keys: string[], fn: (key: string) => any): object {
  return Object.fromEntries(keys.map(k => [k, fn(k)]));
}
