/**
 * Deep clones an object, handling common types (dates, arrays).
 * @author @dailker
 * @param {any} obj
 * @returns {any}
 */
export function cloneDeep(obj: any): any {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (Array.isArray(obj)) return obj.map(cloneDeep);
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cloneDeep(v)]));
}
