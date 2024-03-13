/**
 * Parses a CSS color string into an object with rgba/hsl values.
 *
 * Example: parseCssColor("#336699") → { r: 51, g: 102, b: 153, a: 1, h: 210, s: 50, l: 40 }
 *
 * @author @dailker
 * @param {string} str - CSS color string.
 * @returns {object | null} Color object with rgba/hsl or null if invalid.
 */
import { parseColorString } from './parseColorString';
import { rgbToHsl } from './rgbToHsl';

export function parseCssColor(str: string): any {
  const c = parseColorString(str);
  if (!c) return null;
  const hsl = rgbToHsl(c.r, c.g, c.b);
  return { ...c, ...hsl };
}
