/**
 * Implements blend modes (multiply, screen, overlay, etc.).
 *
 * Example: blendModes("#336699", "#ff0080", "multiply")
 *
 * @author @dailker
 * @param {string} color1 - First color (hex or rgb).
 * @param {string} color2 - Second color (hex or rgb).
 * @param {string} mode - Blend mode (multiply, screen, overlay, etc.).
 * @returns {string} The blended color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function blendModes(color1: string, color2: string, mode: string): string {
  const c1 = parseColorString(color1);
  const c2 = parseColorString(color2);
  if (!c1 || !c2) return color1;
  let r = 0, g = 0, b = 0;
  switch (mode) {
    case 'multiply':
      r = (c1.r * c2.r) / 255;
      g = (c1.g * c2.g) / 255;
      b = (c1.b * c2.b) / 255;
      break;
    case 'screen':
      r = 255 - ((255 - c1.r) * (255 - c2.r)) / 255;
      g = 255 - ((255 - c1.g) * (255 - c2.g)) / 255;
      b = 255 - ((255 - c1.b) * (255 - c2.b)) / 255;
      break;
    case 'overlay':
      r = c1.r < 128 ? (2 * c1.r * c2.r) / 255 : 255 - 2 * (255 - c1.r) * (255 - c2.r) / 255;
      g = c1.g < 128 ? (2 * c1.g * c2.g) / 255 : 255 - 2 * (255 - c1.g) * (255 - c2.g) / 255;
      b = c1.b < 128 ? (2 * c1.b * c2.b) / 255 : 255 - 2 * (255 - c1.b) * (255 - c2.b) / 255;
      break;
    default:
      r = c1.r; g = c1.g; b = c1.b;
  }
  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}
