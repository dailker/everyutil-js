/**
 * Converts a numeric vector [r, g, b, a] to a color object.
 *
 * Example: vectorToColor([51, 102, 153, 1]) → { r: 51, g: 102, b: 153, a: 1 }
 *
 * @author @dailker
 * @param {number[]} vector - Numeric color vector.
 * @returns {object} Color object.
 */
export function vectorToColor(vector: number[]): { r: number; g: number; b: number; a: number } {
  return {
    r: vector[0],
    g: vector[1],
    b: vector[2],
    a: vector[3] ?? 1
  };
}
