/**
 * Calculates the simple moving average (SMA) of an array with a given window size.
 * For example, movingAverage([1,2,3,4,5], 3) returns [2,3,4].
 * @author @dailker
 * @param {number[]} array - The input array of numbers.
 * @param {number} windowSize - The size of the moving window.
 * @returns {number[]} The array of moving averages.
 */
export function movingAverage(array: number[], windowSize: number): number[] {
  const result: number[] = [];
  for (let i = 0; i <= array.length - windowSize; i++) {
    const window = array.slice(i, i + windowSize);
    result.push(window.reduce((a, b) => a + b, 0) / window.length);
  }
  return result;
}
