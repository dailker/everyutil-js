/**
 * Calculates the Median Absolute Deviation (MAD) of an array of numbers.
 * @author @dailker
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number} The median absolute deviation.
 */
export function medianAbsoluteDeviation(numbers: number[]): number {
  const median = (arr: number[]) => {
    const s = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  };
  const med = median(numbers);
  return median(numbers.map(n => Math.abs(n - med)));
}
