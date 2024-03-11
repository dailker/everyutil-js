/**
 * Validates if a string is a valid color string (hex, rgb, rgba, hsl, hsla).
 *
 * Example: isValidColorString("#fff") → true
 *
 * @author @dailker
 * @param {string} str - The color string to validate.
 * @returns {boolean} True if valid color string.
 */
import { parseColorString } from './parseColorString';

export function isValidColorString(str: string): boolean {
  return !!parseColorString(str);
}
