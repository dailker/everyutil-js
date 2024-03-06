/**
 * Decreases the saturation of a color.
 *
 * Example: desaturate("#336699", 0.2) → "#4c6a8c"
 *
 * @author @dailker
 * @param {string} color - The base color (hex).
 * @param {number} amount - Amount to decrease saturation (0-1).
 * @returns {string} The desaturated color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHsl } from './rgbToHsl';
import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';

export function desaturate(color: string, amount: number): string {
  const c = parseColorString(color);
  if (!c) return color;
  let { h, s, l } = rgbToHsl(c.r, c.g, c.b);
  s = Math.max(0, s - s * amount);
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}
