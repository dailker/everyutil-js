/**
 * Converts RGB to CIE XYZ color space.
 *
 * Example: rgbToXyz(255, 0, 128) → { x: 0.41, y: 0.21, z: 0.02 }
 *
 * @author @dailker
 * @param {number} r - Red value (0-255).
 * @param {number} g - Green value (0-255).
 * @param {number} b - Blue value (0-255).
 * @returns {{ x: number, y: number, z: number }} XYZ object.
 */
export function rgbToXyz(r: number, g: number, b: number): { x: number; y: number; z: number } {
  r /= 255; g /= 255; b /= 255;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  r *= 100; g *= 100; b *= 100;
  return {
    x: r * 0.4124 + g * 0.3576 + b * 0.1805,
    y: r * 0.2126 + g * 0.7152 + b * 0.0722,
    z: r * 0.0193 + g * 0.1192 + b * 0.9505
  };
}
