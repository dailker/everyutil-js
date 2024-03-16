/**
 * Increases the saturation of a color.
 *
 * Example: saturate("#336699", 0.2) → "#295bb8"
 *
 * @author @dailker
 * @param {string} color - The base color (hex).
 * @param {number} amount - Amount to increase saturation (0-1).
 * @returns {string} The saturated color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHsl } from './rgbToHsl';
import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';

export function saturate(color: string, amount: number): string {
  const c = parseColorString(color);
  if (!c) return color;
  let { h, s, l } = rgbToHsl(c.r, c.g, c.b);
  s = Math.min(100, s + s * amount);
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}
