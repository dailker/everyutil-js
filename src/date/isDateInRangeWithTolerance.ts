/**
 * Checks if date falls within range allowing for some tolerance (e.g., plus/minus 1 day).
 * @author @dailker
 * @param {Date} d
 * @param {Date} start
 * @param {Date} end
 * @param {number} [tolerance=0] - Tolerance in days
 * @returns {boolean}
 */
export function isDateInRangeWithTolerance(d: Date, start: Date, end: Date, tolerance: number = 0): boolean {
  const t = tolerance * 24 * 60 * 60 * 1000;
  return d.getTime() >= start.getTime() - t && d.getTime() <= end.getTime() + t;
}
