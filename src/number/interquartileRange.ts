/**
 * Calculates the interquartile range (IQR) of an array of numbers.
 * IQR = Q3 - Q1.
 * @author @dailker
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number} The interquartile range.
 */
export function interquartileRange(numbers: number[]): number {
  const s = numbers.slice().sort((a, b) => a - b);
  const q = (p: number) => s[Math.floor(p * (s.length - 1))];
  return q(0.75) - q(0.25);
}
