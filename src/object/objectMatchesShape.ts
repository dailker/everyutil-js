/**
 * Checks if object conforms to a shape schema (keys/types only).
 * @author @dailker
 * @param {object} obj
 * @param {object} shape
 * @returns {boolean}
 */
export function objectMatchesShape(obj: any, shape: any): boolean {
  for (const k in shape) {
    if (!(k in obj)) return false;
    if (typeof shape[k] === 'string') {
      if (typeof obj[k] !== shape[k]) return false;
    } else if (typeof shape[k] === 'object') {
      if (!objectMatchesShape(obj[k], shape[k])) return false;
    }
  }
  return true;
}
