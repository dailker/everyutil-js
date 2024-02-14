/**
 * Like objectSubset, but with values — useful for partial matches.
 * @author @dailker
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export function partialDeepEqual(a: any, b: any): boolean {
  for (const k in a) {
    if (!(k in b)) return false;
    if (typeof a[k] === 'object' && typeof b[k] === 'object') {
      if (!partialDeepEqual(a[k], b[k])) return false;
    } else if (a[k] !== b[k]) return false;
  }
  return true;
}
