/**
 * Gets all keys in nested objects, flattened as paths.
 * @author @dailker
 * @param {object} obj
 * @param {string} [prefix]
 * @returns {string[]}
 */
export function getKeysDeep(obj: any, prefix = ''): string[] {
  let keys: string[] = [];
  for (const k in obj) {
    const path = prefix ? `${prefix}.${k}` : k;
    keys.push(path);
    if (obj[k] && typeof obj[k] === 'object') keys = keys.concat(getKeysDeep(obj[k], path));
  }
  return keys;
}
