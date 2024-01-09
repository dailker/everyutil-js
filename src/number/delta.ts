/**
 * Returns the first derivative (difference) between consecutive elements of an array.
 * For example, delta([5, 7, 10]) returns [2, 3].
 * @author @dailker
 * @param {number[]} array - The input array of numbers.
 * @returns {number[]} The array of differences.
 */
export function delta(array: number[]): number[] {
  const result: number[] = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i] - array[i - 1]);
  }
  return result;
}
