/**
 * Checks if a date lies between two dates inclusive.
 * @author @dailker
 * @param {Date} d
 * @param {Date} start
 * @param {Date} end
 * @returns {boolean}
 */
export function isDateBetween(d: Date, start: Date, end: Date): boolean {
  return d >= start && d <= end;
}
