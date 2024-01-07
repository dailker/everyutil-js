/**
 * Finds derivative-like changes in time-based numeric arrays.
 * @author @dailker
 * @param {number[]} array
 * @param {number} [unit=1]
 * @returns {number[]}
 */
export function timeSeriesDelta(array: number[], unit = 1): number[] {
  const result: number[] = [];
  for (let i = unit; i < array.length; i++) {
    result.push(array[i] - array[i - unit]);
  }
  return result;
}
