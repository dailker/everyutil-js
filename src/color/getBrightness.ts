/**
 * Calculates the perceived brightness of a color.
 *
 * Example: getBrightness("#336699") → 90.6
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @returns {number} The brightness (0-255).
 */
import { parseColorString } from './parseColorString';

export function getBrightness(color: string): number {
  const c = parseColorString(color);
  if (!c) return 0;
  return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
}
