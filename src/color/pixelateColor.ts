/**
 * Reduces color precision to create a pixelation effect.
 *
 * Example: pixelateColor("#336699", 16) → "#330066"
 *
 * @author @dailker
 * @param {string} color - The color (hex or rgb).
 * @param {number} pixelSize - Pixelation size (e.g. 16).
 * @returns {string} Pixelated color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function pixelateColor(color: string, pixelSize: number): string {
  const c = parseColorString(color);
  if (!c) return color;
  const r = Math.floor(c.r / pixelSize) * pixelSize;
  const g = Math.floor(c.g / pixelSize) * pixelSize;
  const b = Math.floor(c.b / pixelSize) * pixelSize;
  return rgbToHex(r, g, b);
}
