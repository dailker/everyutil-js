/**
 * Inverts an object but groups by value (value → array of keys).
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function invertByKey(obj: object): object {
  const result: any = {};
  for (const [k, v] of Object.entries(obj)) {
    if (!result[v]) result[v] = [];
    result[v].push(k);
  }
  return result;
}
