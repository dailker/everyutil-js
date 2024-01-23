/**
 * Checks if a number is a Harshad number (divisible by the sum of its digits).
 * @author @dailker
 * @param {number} n - The number to check.
 * @returns {boolean} True if Harshad number.
 */
export function isHarshadNumber(n: number): boolean {
  const sum = Math.abs(n).toString().split('').reduce((a, b) => a + +b, 0);
  return n % sum === 0;
}
