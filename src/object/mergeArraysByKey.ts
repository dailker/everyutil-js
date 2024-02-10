/**
 * Merges arrays inside objects by a unique key.
 * @author @dailker
 * @param {Array<object>} arr
 * @param {string} key
 * @returns {Array<object>}
 */
export function mergeArraysByKey(arr: Array<any>, key: string): Array<any> {
  const map = new Map<any, any>();
  for (const obj of arr) {
    if (!map.has(obj[key])) map.set(obj[key], {...obj});
    else Object.assign(map.get(obj[key]), obj);
  }
  return Array.from(map.values());
}
