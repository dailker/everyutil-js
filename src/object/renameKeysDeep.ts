/**
 * Recursively renames keys throughout nested objects.
 * @author @dailker
 * @param {object} obj
 * @param {(key: string) => string}
 * @returns {object}
 */
export function renameKeysDeep(obj: any, fn: (key: string) => string): any {
  if (Array.isArray(obj)) return obj.map(v => renameKeysDeep(v, fn));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [fn(k), renameKeysDeep(v, fn)])
    );
  }
  return obj;
}
