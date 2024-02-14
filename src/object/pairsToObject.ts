/**
 * Builds object from array of [key, value] pairs.
 * @author @dailker
 * @param {Array<[string, any]>} pairs
 * @returns {object}
 */
export function pairsToObject(pairs: Array<[string, any]>): object {
  return Object.fromEntries(pairs);
}
