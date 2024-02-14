/**
 * Deep compare objects ignoring property order.
 * @author @dailker
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
export function objectsEqualIgnoreOrder(a: any, b: any): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object' || a === null || b === null) return false;
  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) return false;
  for (let i = 0; i < aKeys.length; i++) {
    if (aKeys[i] !== bKeys[i]) return false;
    if (!objectsEqualIgnoreOrder(a[aKeys[i]], b[bKeys[i]])) return false;
  }
  return true;
}
