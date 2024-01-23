/**
 * Sums the digits of a number in an arbitrary base.
 * @author @dailker
 * @param {number} n - The number.
 * @param {number} base - The base.
 * @returns {number} Sum of digits.
 */
export function digitSumInBase(n: number, base: number): number {
  let sum = 0;
  n = Math.abs(n);
  while (n > 0) {
    sum += n % base;
    n = Math.floor(n / base);
  }
  return sum;
}
