/**
 * Apply a function to every full path in the object (transform paths or values by path).
 * @author @dailker
 * @param {object} obj
 * @param {(path: string[], value: any) => any} fn
 * @param {string[]} [prefix=[]]
 * @returns {object}
 */
export function mapPaths(obj: any, fn: (path: string[], value: any) => any, prefix: string[] = []): any {
  if (Array.isArray(obj)) return obj.map((v, i) => mapPaths(v, fn, [...prefix, String(i)]));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, mapPaths(v, fn, [...prefix, k])])
    );
  }
  return fn(prefix, obj);
}
