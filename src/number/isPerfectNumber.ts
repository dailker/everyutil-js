/**
 * Checks if a number is a perfect number (equal to sum of its divisors except itself).
 * @author @dailker
 * @param {number} n - The number.
 * @returns {boolean}
 */
export function isPerfectNumber(n: number): boolean {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}
