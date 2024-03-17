/**
 * Converts CIE XYZ to RGB color space.
 *
 * Example: xyzToRgb({ x: 0.41, y: 0.21, z: 0.02 }) → { r: 255, g: 0, b: 128 }
 *
 * @author @dailker
 * @param {object} xyz - XYZ object with x, y, z properties.
 * @returns {{ r: number, g: number, b: number }} RGB object.
 */
export function xyzToRgb(xyz: { x: number; y: number; z: number }): { r: number; g: number; b: number } {
  let { x, y, z } = xyz;
  x /= 100;
  y /= 100;
  z /= 100;
  let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  let b = x * 0.0557 + y * -0.2040 + z * 1.0570;
  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g;
  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b;
  return {
    r: Math.max(0, Math.min(255, Math.round(r * 255))),
    g: Math.max(0, Math.min(255, Math.round(g * 255))),
    b: Math.max(0, Math.min(255, Math.round(b * 255)))
  };
}
