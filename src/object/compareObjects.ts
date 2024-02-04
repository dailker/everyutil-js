/**
 * Deep equality check with custom comparator support.
 * @author @dailker
 * @param {any} a
 * @param {any} b
 * @param {(a: any, b: any) => boolean} [comparator]
 * @returns {boolean}
 */
export function compareObjects(a: any, b: any, comparator?: (a: any, b: any) => boolean): boolean {
  if (comparator) return comparator(a, b);
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object' || a === null || b === null) return false;
  const aKeys = Object.keys(a), bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (const k of aKeys) {
    if (!compareObjects(a[k], b[k])) return false;
  }
  return true;
}
