/**
 * Calculates the standard deviation in a moving window over the input array.
 * @author @dailker
 * @param {number[]} array - The input array of numbers.
 * @param {number} window - The window size for the rolling calculation.
 * @returns {number[]} An array of rolling standard deviations.
 */
export function rollingStdDev(array: number[], window: number): number[] {
  const result: number[] = [];
  for (let i = 0; i <= array.length - window; i++) {
    const win = array.slice(i, i + window);
    const mean = win.reduce((a, b) => a + b, 0) / win.length;
    const std = Math.sqrt(win.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / win.length);
    result.push(std);
  }
  return result;
}
