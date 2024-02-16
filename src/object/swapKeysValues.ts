/**
 * Swaps keys and values for all keys matching a condition.
 * @author @dailker
 * @param {object} obj
 * @param {(key: string) => boolean} predicate
 * @returns {object}
 */
export function swapKeysValues(obj: object, predicate: (key: string) => boolean): object {
  const result: any = {};
  for (const [k, v] of Object.entries(obj)) {
    if (predicate(k)) result[v] = k;
    else result[k] = v;
  }
  return result;
}
