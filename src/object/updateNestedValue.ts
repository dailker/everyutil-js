/**
 * Updates a nested value with an updater function.
 * @author @dailker
 * @param {object} obj
 * @param {string|string[]} path
 * @param {(val: any) => any} updater
 * @returns {object}
 */
export function updateNestedValue(obj: any, path: string | string[], updater: (val: any) => any): any {
  const keys = Array.isArray(path) ? path : path.split('.');
  let curr = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!curr[keys[i]] || typeof curr[keys[i]] !== 'object') curr[keys[i]] = {};
    curr = curr[keys[i]];
  }
  curr[keys[keys.length - 1]] = updater(curr[keys[keys.length - 1]]);
  return obj;
}
