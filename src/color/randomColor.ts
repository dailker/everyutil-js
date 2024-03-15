/**
 * Generates a random color in hex format.
 *
 * Example: randomColor() → "#a1b2c3"
 *
 * @author @dailker
 * @returns {string} Random hex color string.
 */
import { rgbToHex } from './rgbToHex';

export function randomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return rgbToHex(r, g, b);
}
