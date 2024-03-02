/**
 * Calculates the Euclidean distance between two colors in RGB space.
 *
 * Example: colorDistance("#336699", "#ff0080") → 221.6
 *
 * @author @dailker
 * @param {string} color1 - First color (hex or rgb).
 * @param {string} color2 - Second color (hex or rgb).
 * @returns {number} The color distance.
 */
import { parseColorString } from './parseColorString';

export function colorDistance(color1: string, color2: string): number {
  const c1 = parseColorString(color1);
  const c2 = parseColorString(color2);
  if (!c1 || !c2) return 0;
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}
