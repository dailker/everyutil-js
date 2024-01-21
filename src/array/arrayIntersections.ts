/**
 * Finds common elements across multiple arrays.
 * @author @dailker
 * @template T
 * @param {...T[][]} arrays - Arrays to intersect.
 * @returns {T[]} Array of common elements.
 */
export function arrayIntersections<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  return arrays.reduce((a, b) => a.filter(x => b.includes(x)));
}
