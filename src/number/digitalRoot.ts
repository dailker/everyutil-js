/**
 * Calculates the digital root of a number (sum of digits until a single digit).
 * For example, digitalRoot(942) returns 6.
 * @author @dailker
 * @param {number} n - The number to process.
 * @returns {number} The digital root.
 */
export function digitalRoot(n: number): number {
  while (n >= 10) {
    n = n.toString().split('').reduce((a, b) => a + +b, 0);
  }
  return n;
}
