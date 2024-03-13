import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';

/**
 * Parses any CSS color string (hex, rgb, rgba, hsl, hsla) to a standard color object.
 *
 * Example: parseColorString("rgba(255,0,128,0.5)") → { r: 255, g: 0, b: 128, a: 0.5 }
 *
 * @author @dailker
 * @param {string} str - CSS color string.
 * @returns {object | null} Standard color object or null if invalid.
 */
export function parseColorString(str: string): any {
  // Simple implementation for demo; production should use a robust parser
  str = str.trim();
  if (str.startsWith('#')) {
    const rgb = hexToRgb(str);
    if (!rgb) return null;
    return { ...rgb, a: 1 };
  }
  const rgbMatch = str.match(/^rgba?\(([^)]+)\)$/i);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(',').map(Number);
    return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
  }
  const hslMatch = str.match(/^hsla?\(([^)]+)\)$/i);
  if (hslMatch) {
    const parts = hslMatch[1].split(',').map(x => parseFloat(x));
    const rgb = hslToRgb(parts[0], parts[1], parts[2]);
    return { ...rgb, a: parts[3] ?? 1 };
  }
  return null;
}
