/**
 * Finds the next prime number after the given input.
 * @author @dailker
 * @param {number} n - The starting number.
 * @returns {number} The next prime.
 */
export function nextPrime(n: number): number {
  function isPrime(x: number): boolean {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) if (x % i === 0) return false;
    return true;
  }
  let candidate = Math.max(2, Math.floor(n) + 1);
  while (!isPrime(candidate)) candidate++;
  return candidate;
}
