/**
 * Swaps keys and values but preserves value types (values converted to strings).
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function keyValueSwap(obj: object): object {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [String(v), k]));
}
