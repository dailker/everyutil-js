/**
 * Blends two colors by a given ratio.
 *
 * Example: blendColors("#336699", "#ff0080", 0.5) → "#9940b9"
 *
 * @author @dailker
 * @param {string} color1 - First color (hex or rgb).
 * @param {string} color2 - Second color (hex or rgb).
 * @param {number} ratio - Blend ratio (0-1).
 * @returns {string} The blended color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function blendColors(color1: string, color2: string, ratio: number): string {
  const c1 = parseColorString(color1);
  const c2 = parseColorString(color2);
  if (!c1 || !c2) return color1;
  const r = Math.round(c1.r * (1 - ratio) + c2.r * ratio);
  const g = Math.round(c1.g * (1 - ratio) + c2.g * ratio);
  const b = Math.round(c1.b * (1 - ratio) + c2.b * ratio);
  return rgbToHex(r, g, b);
}
