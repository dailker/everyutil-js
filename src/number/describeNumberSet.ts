/**
 * Returns a summary description of a set of numbers, including range, mean, std dev, and outlier count.
 * @author @dailker
 * @param {number[]} numbers - The array of numbers to describe.
 * @returns {string} A summary string describing the number set.
 */
export function describeNumberSet(numbers: number[]): string {
  const n = numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const mean = numbers.reduce((a, b) => a + b, 0) / n;
  const std = Math.sqrt(numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n);
  const outliers = numbers.filter(x => Math.abs(x - mean) > 2 * std).length;
  return `${n} values, range ${min}–${max}, mean: ${mean.toFixed(2)}, std dev: ${std.toFixed(2)}, outliers: ${outliers}`;
}
