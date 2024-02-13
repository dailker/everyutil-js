/**
 * Checks if one object is a deep subset of another.
 * @author @dailker
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export function objectSubset(a: any, b: any): boolean {
  for (const k in a) {
    if (!(k in b)) return false;
    if (typeof a[k] === 'object' && typeof b[k] === 'object') {
      if (!objectSubset(a[k], b[k])) return false;
    } else if (a[k] !== b[k]) return false;
  }
  return true;
}
