/**
 * Generates a consistent color from a string (useful for avatars).
 *
 * Example: colorHash("username") → "#a1b2c3"
 *
 * @author @dailker
 * @param {string} inputString - The input string.
 * @returns {string} Hex color string.
 */
import { rgbToHex } from './rgbToHex';

export function colorHash(inputString: string): string {
  let hash = 0;
  for (let i = 0; i < inputString.length; i++) {
    hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
  }
  const r = (hash >> 0) & 0xff;
  const g = (hash >> 8) & 0xff;
  const b = (hash >> 16) & 0xff;
  return rgbToHex(r, g, b);
}
