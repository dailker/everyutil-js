/**
 * Recursively freezes an object and nested objects.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function freezeDeep(obj: any): any {
  Object.freeze(obj);
  for (const k in obj) {
    if (obj[k] && typeof obj[k] === 'object' && !Object.isFrozen(obj[k])) freezeDeep(obj[k]);
  }
  return obj;
}
