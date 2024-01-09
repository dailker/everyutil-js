/**
 * Returns all factors of a number in ascending order.
 * @author @dailker
 * @param {number} n - The number to factor.
 * @returns {number[]} An array of all factors of n.
 */
export function factors(n: number): number[] {
  const result: number[] = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (i !== n / i) result.push(n / i);
    }
  }
  return result.sort((a, b) => a - b);
}
