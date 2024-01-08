/**
 * Returns the cumulative sum of an array of numbers.
 * For example, cumulativeSum([1,2,3]) returns [1,3,6].
 * @author @dailker
 * @param {number[]} array - The input array of numbers.
 * @returns {number[]} The array of cumulative sums.
 */
export function cumulativeSum(array: number[]): number[] {
  let sum = 0;
  return array.map(n => sum += n);
}
