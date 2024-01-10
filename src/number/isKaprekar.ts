/**
 * Checks if a number is a Kaprekar number.
 * For example, 45^2 = 2025, and 20 + 25 = 45.
 * @author @dailker
 * @param {number} n - The number to check.
 * @returns {boolean} True if n is a Kaprekar number, false otherwise.
 */
export function isKaprekar(n: number): boolean {
  if (n < 1) return false;
  const sq = (n * n).toString();
  for (let i = 1; i < sq.length; i++) {
    const left = parseInt(sq.slice(0, i), 10);
    const right = parseInt(sq.slice(i), 10);
    if (right && left + right === n) return true;
  }
  return n === 1;
}
