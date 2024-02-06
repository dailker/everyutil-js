/**
 * Deeply freezes an object except specified keys.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} except
 * @returns {object}
 */
export function deepFreezeExcept(obj: any, except: string[] = []): any {
  Object.freeze(obj);
  for (const k in obj) {
    if (!except.includes(k) && obj[k] && typeof obj[k] === 'object' && !Object.isFrozen(obj[k])) deepFreezeExcept(obj[k], except);
  }
  return obj;
}
