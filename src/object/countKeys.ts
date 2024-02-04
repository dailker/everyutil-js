/**
 * Counts the total number of keys in an object, optionally deep count.
 * @author @dailker
 * @param {object} obj
 * @param {boolean} [deep=false]
 * @returns {number}
 */
export function countKeys(obj: any, deep: boolean = false): number {
  if (!deep) return Object.keys(obj).length;
  let count = 0;
  for (const k in obj) {
    count++;
    if (obj[k] && typeof obj[k] === 'object') count += countKeys(obj[k], true);
  }
  return count;
}
