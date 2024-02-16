/**
 * Safely sets nested values by path string/array.
 * @author @dailker
 * @param {object} obj
 * @param {string|string[]} path
 * @param {any} value
 * @returns {object}
 */
export function setNestedValue(obj: any, path: string | string[], value: any): any {
  const keys = Array.isArray(path) ? path : path.split('.');
  let curr = obj;
  keys.forEach((key, i) => {
    if (i === keys.length - 1) {
      curr[key] = value;
    } else {
      if (!curr[key] || typeof curr[key] !== 'object') curr[key] = {};
      curr = curr[key];
    }
  });
  return obj;
}
