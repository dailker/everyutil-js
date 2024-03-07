/**
 * Generates an array of colors forming a gradient between two colors.
 *
 * Example: generateGradientColors("#336699", "#ff0080", 5)
 *
 * @author @dailker
 * @param {string} startColor - Start color (hex or rgb).
 * @param {string} endColor - End color (hex or rgb).
 * @param {number} steps - Number of colors in the gradient.
 * @returns {string[]} Array of hex color strings.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function generateGradientColors(startColor: string, endColor: string, steps: number): string[] {
  const start = parseColorString(startColor);
  const end = parseColorString(endColor);
  if (!start || !end) return [];
  const result: string[] = [];
  for (let i = 0; i < steps; i++) {
    const r = Math.round(start.r + ((end.r - start.r) * i) / (steps - 1));
    const g = Math.round(start.g + ((end.g - start.g) * i) / (steps - 1));
    const b = Math.round(start.b + ((end.b - start.b) * i) / (steps - 1));
    result.push(rgbToHex(r, g, b));
  }
  return result;
}
