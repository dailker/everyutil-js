/**
 * Normalizes an angle to [0, 360) or [-π, π).
 * @author @dailker
 * @param {number} angle - The angle to normalize.
 * @param {'deg'|'rad'} [unit='deg'] - Unit: 'deg' or 'rad'.
 * @returns {number} Normalized angle.
 */
export function normalizeAngle(angle: number, unit: 'deg'|'rad' = 'deg'): number {
  if (unit === 'deg') {
    return ((angle % 360) + 360) % 360;
  } else {
    const pi = Math.PI;
    return ((angle + pi) % (2 * pi) + 2 * pi) % (2 * pi) - pi;
  }
}
