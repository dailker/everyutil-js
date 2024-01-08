/**
 * Calculates the coefficient of variation (standard deviation divided by mean) of an array of numbers.
 * @author @dailker
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number} The coefficient of variation.
 */
export function coefficientOfVariation(numbers: number[]): number {
  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const std = Math.sqrt(numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / numbers.length);
  return std / mean;
}
