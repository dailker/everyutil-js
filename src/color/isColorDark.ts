/**
 * Determines if a color is dark.
 *
 * Example: isColorDark("#336699") → true
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @returns {boolean} True if the color is dark.
 */
import { getBrightness } from './getBrightness';

export function isColorDark(color: string): boolean {
  return getBrightness(color) < 128;
}
