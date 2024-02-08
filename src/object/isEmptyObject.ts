/**
 * Checks if an object has no own enumerable keys, with optional deep check.
 * @author @dailker
 * @param {object} obj
 * @param {boolean} [deep=false]
 * @returns {boolean}
 */
export function isEmptyObject(obj: any, deep: boolean = false): boolean {
  if (!deep) return Object.keys(obj).length === 0;
  for (const k in obj) {
    if (obj[k] && typeof obj[k] === 'object') {
      if (!isEmptyObject(obj[k], true)) return false;
    } else {
      return false;
    }
  }
  return true;
}
