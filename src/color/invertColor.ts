/**
 * Inverts a color.
 *
 * Example: invertColor("#336699") → "#cc9966"
 *
 * @author @dailker
 * @param {string} color - The base color (hex).
 * @returns {string} The inverted color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function invertColor(color: string): string {
  const c = parseColorString(color);
  if (!c) return color;
  return rgbToHex(255 - c.r, 255 - c.g, 255 - c.b);
}
