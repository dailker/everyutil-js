/**
 * Generates all primes up to N using the Sieve of Eratosthenes.
 * @author @dailker
 * @param {number} n - Upper limit (inclusive).
 * @returns {number[]} Array of primes.
 */
export function primeSieve(n: number): number[] {
  const sieve = Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) sieve[j] = false;
    }
  }
  return sieve.map((v, i) => v ? i : -1).filter(x => x !== -1);
}
