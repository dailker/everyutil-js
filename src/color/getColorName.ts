/**
 * Returns a human-readable name for a color (e.g. "Sky Blue").
 *
 * Example: getColorName("#87ceeb") → "Sky Blue"
 *
 * @author @dailker
 * @param {string} color - The color (hex or rgb).
 * @returns {string} The color name or closest match.
 */
import { findNearestNamedColor } from './findNearestNamedColor';
import { colorNameMap } from './namedColors';

export function getColorName(color: string): string {
  const nearest = findNearestNamedColor(color);
  return colorNameMap[nearest] || nearest;
}
