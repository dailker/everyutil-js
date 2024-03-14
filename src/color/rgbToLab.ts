/**
 * Converts RGB to CIELAB color space.
 *
 * Example: rgbToLab(255, 0, 128) → { l: 53.2, a: 80.1, b: -67.2 }
 *
 * @author @dailker
 * @param {number} r - Red value (0-255).
 * @param {number} g - Green value (0-255).
 * @param {number} b - Blue value (0-255).
 * @returns {{ l: number, a: number, b: number }} LAB object.
 */
import { rgbToXyz } from './rgbToXyz';

export function rgbToLab(r: number, g: number, b: number): { l: number; a: number; b: number } {
  const xyz = rgbToXyz(r, g, b);
  let x = xyz.x / 95.047, y = xyz.y / 100, z = xyz.z / 108.883;
  [x, y, z] = [x, y, z].map(v => v > 0.008856 ? Math.cbrt(v) : (7.787 * v) + 16 / 116);
  return {
    l: 116 * y - 16,
    a: 500 * (x - y),
    b: 200 * (y - z)
  };
}
