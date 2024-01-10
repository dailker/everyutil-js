/**
 * Rounds a number to a given number of decimal places, avoiding floating point errors.
 * @author @dailker
 * @param {number} n - The number to round.
 * @param {number} decimals - The number of decimal places.
 * @returns {number} The rounded number.
 */
export function preciseRound(n: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round((n + Number.EPSILON) * factor) / factor;
}
