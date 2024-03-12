/**
 * Lightens a color by a percentage.
 *
 * Example: lighten("#336699", 0.2) → "#4785c2"
 *
 * @author @dailker
 * @param {string} color - The base color (hex).
 * @param {number} amount - Amount to lighten (0-1).
 * @returns {string} The lightened color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function lighten(color: string, amount: number): string {
  const c = parseColorString(color);
  if (!c) return color;
  const r = Math.min(255, Math.round(c.r + (255 - c.r) * amount));
  const g = Math.min(255, Math.round(c.g + (255 - c.g) * amount));
  const b = Math.min(255, Math.round(c.b + (255 - c.b) * amount));
  return rgbToHex(r, g, b);
}
