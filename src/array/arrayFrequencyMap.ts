/**
 * Returns a map of element frequencies in the array.
 * @author @dailker
 * @template T
 * @param {T[]} array - Input array.
 * @returns {Map<T, number>} Frequency map.
 */
export function arrayFrequencyMap<T>(array: T[]): Map<T, number> {
  const map = new Map<T, number>();
  for (const item of array) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}
