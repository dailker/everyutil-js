/**
 * Removes keys with undefined/null/empty values recursively.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function cleanObject(obj: any): any {
  if (Array.isArray(obj)) return obj.map(cleanObject).filter(Boolean);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => [k, cleanObject(v)])
    );
  }
  return obj;
}
