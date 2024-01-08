/**
 * Converts a decimal number to its simplest fractional form.
 * For example, decimalToFraction(0.75) returns [3, 4].
 * @author @dailker
 * @param {number} n - The decimal number to convert.
 * @returns {[number, number]} The numerator and denominator of the fraction.
 */
export function decimalToFraction(n: number): [number, number] {
  if (Number.isInteger(n)) return [n, 1];
  let denominator = 1;
  while (Math.round(n * denominator) !== n * denominator) denominator *= 10;
  const numerator = Math.round(n * denominator);
  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
  const d = gcd(numerator, denominator);
  return [numerator / d, denominator / d];
}
