/**
 * Converts CIELAB to RGB color space.
 *
 * Example: labToRgb(53.2, 80.1, -67.2) → { r: 255, g: 0, b: 128 }
 *
 * @author @dailker
 * @param {number} l - Lightness (0-100).
 * @param {number} a - Green-Red (-128 to 127).
 * @param {number} b - Blue-Yellow (-128 to 127).
 * @returns {{ r: number, g: number, b: number }} RGB object.
 */
import { xyzToRgb } from './xyzToRgb';

export function labToRgb(l: number, a: number, b: number): { r: number; g: number; b: number } {
  let y = (l + 16) / 116;
  let x = a / 500 + y;
  let z = y - b / 200;
  [x, y, z] = [x, y, z].map(v => {
    const v3 = v ** 3;
    return v3 > 0.008856 ? v3 : (v - 16 / 116) / 7.787;
  });
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return xyzToRgb({ x, y, z });
}
