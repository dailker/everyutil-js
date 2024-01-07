/**
 * Sorts based on a custom array schema.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {T[]} schema
 * @returns {T[]}
 */
export function sortBySchema<T>(array: T[], schema: T[]): T[] {
  const index = new Map<T, number>();
  schema.forEach((v, i) => index.set(v, i));
  return array.slice().sort((a, b) => (index.get(a) ?? Infinity) - (index.get(b) ?? Infinity));
}
