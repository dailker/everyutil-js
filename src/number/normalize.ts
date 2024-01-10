/**
 * Normalizes an array of numbers using min-max or z-score normalization.
 * @author @dailker
 * @param {number[]} numbers - The array of numbers to normalize.
 * @param {'minmax'|'zscore'} [method='minmax'] - The normalization method.
 * @returns {number[]} The normalized array.
 */
export function normalize(numbers: number[], method: 'minmax' | 'zscore' = 'minmax'): number[] {
  if (method === 'minmax') {
    const min = Math.min(...numbers), max = Math.max(...numbers);
    return numbers.map(n => (n - min) / (max - min));
  }
  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const std = Math.sqrt(numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / numbers.length);
  return numbers.map(n => (n - mean) / (std || 1));
}
