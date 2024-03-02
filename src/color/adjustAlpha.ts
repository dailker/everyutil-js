/**
 * Changes the alpha/opacity of a color.
 *
 * Example: adjustAlpha("#336699", 0.5) → "rgba(51,102,153,0.5)"
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @param {number} alpha - Alpha value (0-1).
 * @returns {string} The color as an rgba string.
 */
import { parseColorString } from './parseColorString';

export function adjustAlpha(color: string, alpha: number): string {
  const c = parseColorString(color);
  if (!c) return color;
  return `rgba(${c.r},${c.g},${c.b},${alpha})`;
}
