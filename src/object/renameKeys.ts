/**
 * Renames keys of an object based on a mapping or function.
 * @author @dailker
 * @param {object} obj
 * @param {object|function} mapOrFn - Mapping object or function(key)
 * @returns {object}
 */
export function renameKeys(obj: object, mapOrFn: Record<string, string> | ((key: string) => string)): object {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [typeof mapOrFn === 'function' ? mapOrFn(k) : (mapOrFn[k] || k), v])
  );
}
