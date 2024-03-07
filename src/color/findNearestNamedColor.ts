/**
 * Finds the nearest named CSS color to the given color.
 *
 * Example: findNearestNamedColor("#87ceeb") → "#87ceeb"
 *
 * @author @dailker
 * @param {string} color - The color (hex or rgb).
 * @returns {string} The nearest named color hex.
 */
import { colorDistance } from './colorDistance';
import { colorNameMap } from './namedColors';
import { parseColorString } from './parseColorString';

export function findNearestNamedColor(color: string): string {
  let minDist = Infinity;
  let nearest = '';
  for (const hex in colorNameMap) {
    const dist = colorDistance(color, hex);
    if (dist < minDist) {
      minDist = dist;
      nearest = hex;
    }
  }
  return nearest;
}
