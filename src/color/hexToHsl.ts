import { hexToRgb } from './hexToRgb';
import { rgbToHsl } from './rgbToHsl';

/**
 * Converts a hex color string to HSL.
 *
 * Example: hexToHsl("#ff0080") → { h: 320, s: 100, l: 50 }
 *
 * @author @dailker
 * @param {string} hex - Hex color string.
 * @returns {{ h: number, s: number, l: number } | null} HSL object or null if invalid.
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToHsl(rgb.r, rgb.g, rgb.b);
}
