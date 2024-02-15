/**
 * Recursively picks keys from nested objects.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 */
export function pickDeep(obj: any, keys: string[]): any {
  if (Array.isArray(obj)) return obj.map(v => pickDeep(v, keys));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([k]) => keys.includes(k))
        .map(([k, v]) => [k, pickDeep(v, keys)])
    );
  }
  return obj;
}
