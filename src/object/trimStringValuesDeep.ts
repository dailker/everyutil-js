/**
 * Trim whitespace from all string values in an object recursively.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function trimStringValuesDeep(obj: any): any {
  if (Array.isArray(obj)) return obj.map(trimStringValuesDeep);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, trimStringValuesDeep(v)])
    );
  }
  return typeof obj === 'string' ? obj.trim() : obj;
}
