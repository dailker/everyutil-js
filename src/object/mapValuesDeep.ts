/**
 * Recursively applies a mapper function to all values in an object.
 * @author @dailker
 * @param {object} obj
 * @param {(value: any, key: string) => any} fn
 * @returns {object}
 */
export function mapValuesDeep(obj: any, fn: (value: any, key: string) => any): any {
  if (Array.isArray(obj)) return obj.map((v, i) => mapValuesDeep(v, fn));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, mapValuesDeep(v, fn)])
    );
  }
  return fn(obj, '');
}
