/**
 * Simulates common color blindness types on a color.
 *
 * Example: simulateColorBlindness("#336699", "protanopia")
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @param {string} type - Type of color blindness (protanopia, deuteranopia, tritanopia).
 * @returns {string} Simulated color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function simulateColorBlindness(color: string, type: string): string {
  const c = parseColorString(color);
  if (!c) return color;
  let r = c.r, g = c.g, b = c.b;
  // Simple simulation matrices
  switch (type) {
    case 'protanopia':
      r = 0.56667 * c.r + 0.43333 * c.g;
      g = 0.55833 * c.r + 0.44167 * c.g;
      b = 0.24167 * c.g + 0.75833 * c.b;
      break;
    case 'deuteranopia':
      r = 0.625 * c.r + 0.375 * c.g;
      g = 0.7 * c.g + 0.3 * c.r;
      b = 0.3 * c.g + 0.7 * c.b;
      break;
    case 'tritanopia':
      r = 0.95 * c.r + 0.05 * c.b;
      g = 0.433 * c.g + 0.567 * c.b;
      b = 0.475 * c.g + 0.525 * c.b;
      break;
  }
  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}
