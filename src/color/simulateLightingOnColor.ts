/**
 * Adjusts a color as if lit by a colored light source.
 *
 * Example: simulateLightingOnColor("#336699", 0.5, "#fff")
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @param {number} lightIntensity - Intensity of the light (0-1).
 * @param {string} lightColor - Color of the light (hex or rgb).
 * @returns {string} The adjusted color in hex.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function simulateLightingOnColor(color: string, lightIntensity: number, lightColor: string): string {
  const c = parseColorString(color);
  const l = parseColorString(lightColor);
  if (!c || !l) return color;
  const r = Math.min(255, Math.round(c.r * (1 - lightIntensity) + l.r * lightIntensity));
  const g = Math.min(255, Math.round(c.g * (1 - lightIntensity) + l.g * lightIntensity));
  const b = Math.min(255, Math.round(c.b * (1 - lightIntensity) + l.b * lightIntensity));
  return rgbToHex(r, g, b);
}
