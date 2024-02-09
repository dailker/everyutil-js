/**
 * Checks if nested key/path exists in an object.
 * @author @dailker
 * @param {object} obj
 * @param {string|string[]} path
 * @returns {boolean}
 */
export function hasNestedKey(obj: any, path: string | string[]): boolean {
  const keys = Array.isArray(path) ? path : path.split('.');
  let curr = obj;
  for (const key of keys) {
    if (!curr || !(key in curr)) return false;
    curr = curr[key];
  }
  return true;
}
