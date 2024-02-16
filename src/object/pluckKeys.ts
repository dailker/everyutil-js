/**
 * Extracts values of given keys into an array, supporting nested keys.
 * @author @dailker
 * @param {object} obj
 * @param {Array<string|string[]>} keys
 * @returns {any[]}
 */
export function pluckKeys(obj: any, keys: Array<string | string[]>): any[] {
  return keys.map(path => {
    const arr = Array.isArray(path) ? path : path.split('.');
    return arr.reduce((acc, k) => (acc ? acc[k] : undefined), obj);
  });
}
