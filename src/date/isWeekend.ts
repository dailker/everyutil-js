/**
 * Checks if a date falls on a weekend.
 * @author @dailker
 * @param {Date} date
 * @returns {boolean}
 */
export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}
