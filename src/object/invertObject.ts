/**
 * Inverts keys and values of an object (optionally handling duplicates).
 * @author @dailker
 * @param {object} obj
 * @param {boolean} [allowDuplicates=false] - If true, values become arrays of keys.
 * @returns {object}
 */
export function invertObject(obj: object, allowDuplicates = false): object {
  const result: any = {};
  for (const [k, v] of Object.entries(obj)) {
    if (allowDuplicates) {
      if (!result[v]) result[v] = [];
      result[v].push(k);
    } else {
      result[v] = k;
    }
  }
  return result;
}
