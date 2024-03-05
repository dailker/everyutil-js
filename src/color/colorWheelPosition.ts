/**
 * Finds the hue position of a color on the color wheel.
 *
 * Example: colorWheelPosition("#336699") → 210
 *
 * @author @dailker
 * @param {string} color - The color (hex or rgb).
 * @returns {number} The hue angle (0-360).
 */
import { parseColorString } from './parseColorString';
import { rgbToHsl } from './rgbToHsl';

export function colorWheelPosition(color: string): number {
  const c = parseColorString(color);
  if (!c) return 0;
  return rgbToHsl(c.r, c.g, c.b).h;
}
