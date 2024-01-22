/**
 * Splices multiple segments at once with a single call.
 * @author @dailker
 * @template T
 * @param {T[]} array - The array to splice.
 * @param {Array<{start: number, deleteCount: number, items?: T[]}>} splices - Array of splice instructions.
 * @returns {T[]} The modified array.
 */
export function arraySpliceMultiple<T>(array: T[], splices: Array<{start: number, deleteCount: number, items?: T[]}>): T[] {
  // Sort splices in reverse order to avoid index shifting
  splices.sort((a, b) => b.start - a.start);
  for (const {start, deleteCount, items} of splices) {
    array.splice(start, deleteCount, ...(items || []));
  }
  return array;
}
