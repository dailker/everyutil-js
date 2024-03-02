/**
 * Finds the closest color in a palette to the given color.
 *
 * Example: closestColor("#336699", ["#000", "#fff"]) → "#000"
 *
 * @author @dailker
 * @param {string} color - The base color (hex or rgb).
 * @param {string[]} palette - Array of color strings.
 * @returns {string} The closest color in the palette.
 */
import { colorDistance } from './colorDistance';

export function closestColor(color: string, palette: string[]): string {
  let minDist = Infinity;
  let closest = palette[0];
  for (const p of palette) {
    const dist = colorDistance(color, p);
    if (dist < minDist) {
      minDist = dist;
      closest = p;
    }
  }
  return closest;
}
