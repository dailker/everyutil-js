/**
 * Removes all null / undefined / empty string values recursively.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function deepCompact(obj: any): any {
  if (Array.isArray(obj)) return obj.map(deepCompact).filter(Boolean);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => [k, deepCompact(v)])
    );
  }
  return obj;
}
