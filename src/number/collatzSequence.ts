/**
 * Generates the Collatz sequence for a given starting number.
 * For example, collatzSequence(6) returns [6, 3, 10, 5, 16, 8, 4, 2, 1].
 * @author @dailker
 * @param {number} n - The starting number.
 * @returns {number[]} The Collatz sequence as an array.
 */
export function collatzSequence(n: number): number[] {
  const result: number[] = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    result.push(n);
  }
  return result;
}
