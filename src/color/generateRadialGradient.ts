/**
 * Generates a radial gradient between center and edge colors.
 *
 * Example: generateRadialGradient("#fff", "#000", 5)
 *
 * @author @dailker
 * @param {string} centerColor - Center color.
 * @param {string} edgeColor - Edge color.
 * @param {number} steps - Number of gradient steps.
 * @returns {string[]} Array of hex color strings.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function generateRadialGradient(centerColor: string, edgeColor: string, steps: number): string[] {
  const center = parseColorString(centerColor);
  const edge = parseColorString(edgeColor);
  if (!center || !edge) return [];
  const result: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const r = Math.round(center.r + (edge.r - center.r) * t);
    const g = Math.round(center.g + (edge.g - center.g) * t);
    const b = Math.round(center.b + (edge.b - center.b) * t);
    result.push(rgbToHex(r, g, b));
  }
  return result;
}
