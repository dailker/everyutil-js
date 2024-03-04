/**
 * Converts a color to a numeric vector [r, g, b, a].
 *
 * Example: colorToVector("#336699") → [51, 102, 153, 1]
 *
 * @author @dailker
 * @param {string|object} color - Color string or object.
 * @returns {number[]} Numeric vector.
 */
import { parseColorString } from './parseColorString';

export function colorToVector(color: any): number[] {
  const c = typeof color === 'string' ? parseColorString(color) : color;
  if (!c) return [0, 0, 0, 1];
  return [c.r, c.g, c.b, c.a ?? 1];
}
