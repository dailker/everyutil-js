/**
 * Checks if a date is in the past relative to now.
 * @author @dailker
 * @param {Date} date
 * @returns {boolean}
 */
export function dateIsInPast(date: Date): boolean {
  return date.getTime() < Date.now();
}
