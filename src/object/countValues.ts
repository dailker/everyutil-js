/**
 * Counts how many times each value appears in an object (shallow).
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function countValues(obj: object): object {
  const counts: any = {};
  for (const v of Object.values(obj)) {
    counts[v] = (counts[v] || 0) + 1;
  }
  return counts;
}
