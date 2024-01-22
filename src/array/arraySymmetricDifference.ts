/**
 * Returns elements present in exactly one of two arrays.
 * @author @dailker
 * @template T
 * @param {T[]} a - First array.
 * @param {T[]} b - Second array.
 * @returns {T[]} Symmetric difference.
 */
export function arraySymmetricDifference<T>(a: T[], b: T[]): T[] {
  return a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));
}
