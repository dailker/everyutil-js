/**
 * Recursively picks keys from an object based on a predicate function.
 * @author @dailker
 * @param {object} obj
 * @param {(value: any, key: string) => boolean} predicate
 * @returns {object}
 */
export function deepPickBy(obj: any, predicate: (value: any, key: string) => boolean): any {
  if (Array.isArray(obj)) return obj.map(v => deepPickBy(v, predicate));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([k, v]) => predicate(v, k))
        .map(([k, v]) => [k, deepPickBy(v, predicate)])
    );
  }
  return obj;
}
