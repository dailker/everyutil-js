/**
 * Computes the factorial of a number with BigInt support.
 * @author @dailker
 * @param {number|bigint} n - The number.
 * @returns {bigint} The factorial.
 */
export function factorial(n: number | bigint): bigint {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}
