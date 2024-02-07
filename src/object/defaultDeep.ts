/**
 * Recursively assigns default values if missing (like _.defaultsDeep).
 * @author @dailker
 * @param {object} obj
 * @param {object} defaults
 * @returns {object}
 */
export function defaultDeep(obj: any, defaults: any): any {
  if (Array.isArray(obj)) return obj;
  if (obj && typeof obj === 'object') {
    for (const k in defaults) {
      if (obj[k] === undefined) obj[k] = defaults[k];
      else if (typeof obj[k] === 'object' && typeof defaults[k] === 'object') defaultDeep(obj[k], defaults[k]);
    }
  }
  return obj;
}
