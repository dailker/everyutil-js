import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';

/**
 * Converts HSL to hex color string.
 *
 * Example: hslToHex(320, 100, 50) → "#ff0080"
 *
 * @author @dailker
 * @param {number} h - Hue (0-360).
 * @param {number} s - Saturation (0-100).
 * @param {number} l - Lightness (0-100).
 * @returns {string} Hex color string.
 */
export function hslToHex(h: number, s: number, l: number): string {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}
