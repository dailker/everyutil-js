/**
 * Returns the prime factorization of a number as an array of prime factors.
 * For example, primeFactorization(60) returns [2, 2, 3, 5].
 * @author @dailker
 * @param {number} n - The number to factorize.
 * @returns {number[]} An array of prime factors.
 */
export function primeFactorization(n: number): number[] {
  const result: number[] = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }
  if (n > 1) result.push(n);
  return result;
}
