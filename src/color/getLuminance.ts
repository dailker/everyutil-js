/**
 * Calculates the relative luminance of a color for contrast calculations.
 *
 * Example: getLuminance("#336699") → 0.13
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @returns {number} The relative luminance (0-1).
 */
import { parseColorString } from './parseColorString';

export function getLuminance(color: string): number {
  const c = parseColorString(color);
  if (!c) return 0;
  const rgb = [c.r, c.g, c.b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
