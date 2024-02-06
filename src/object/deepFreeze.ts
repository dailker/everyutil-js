/**
 * Recursively freezes object to make it immutable.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function deepFreeze(obj: any): any {
  Object.freeze(obj);
  for (const k in obj) {
    if (obj[k] && typeof obj[k] === 'object' && !Object.isFrozen(obj[k])) deepFreeze(obj[k]);
  }
  return obj;
}
