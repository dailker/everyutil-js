/**
 * Extracts all numbers (ints and floats) from a string.
 * @author @dailker
 * @param {string} str - Input string.
 * @returns {number[]} Array of numbers.
 */
export function extractNumbersFromString(str: string): number[] {
  return (str.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g) || []).map(Number);
}
