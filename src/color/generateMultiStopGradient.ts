/**
 * Generates a gradient with multiple colors and stops.
 *
 * Example: generateMultiStopGradient(["#336699", "#ff0080", "#fff"], 10)
 *
 * @author @dailker
 * @param {string[]} colors - Array of color strings.
 * @param {number} stops - Number of steps in the gradient.
 * @returns {string[]} Array of hex color strings.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function generateMultiStopGradient(colors: string[], stops: number): string[] {
  if (colors.length < 2) return colors;
  const result: string[] = [];
  const segments = colors.length - 1;
  const stepsPerSegment = Math.floor(stops / segments);
  for (let i = 0; i < segments; i++) {
    const start = parseColorString(colors[i]);
    const end = parseColorString(colors[i + 1]);
    if (!start || !end) continue;
    for (let j = 0; j < stepsPerSegment; j++) {
      const t = j / stepsPerSegment;
      const r = Math.round(start.r + (end.r - start.r) * t);
      const g = Math.round(start.g + (end.g - start.g) * t);
      const b = Math.round(start.b + (end.b - start.b) * t);
      result.push(rgbToHex(r, g, b));
    }
  }
  result.push(colors[colors.length - 1]);
  return result;
}
