/**
 * Returns the cumulative product of an array.
 * @author @dailker
 * @param {number[]} array - Input array.
 * @returns {number[]} Cumulative product array.
 */
export function arrayCumulativeProduct(array: number[]): number[] {
  let prod = 1;
  return array.map(x => (prod *= x));
}
