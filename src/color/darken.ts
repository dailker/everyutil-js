/**
 * Darkens a color by a percentage.
 *
 * Example: darken("#336699", 0.2) → "#264d73"
 *
 * @author @dailker
 * @param {string} color - The base color (hex).
 * @param {number} amount - Amount to darken (0-1).
 * @returns {string} The darkened color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function darken(color: string, amount: number): string {
  const c = parseColorString(color);
  if (!c) return color;
  const r = Math.max(0, Math.round(c.r * (1 - amount)));
  const g = Math.max(0, Math.round(c.g * (1 - amount)));
  const b = Math.max(0, Math.round(c.b * (1 - amount)));
  return rgbToHex(r, g, b);
}
