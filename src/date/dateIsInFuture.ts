/**
 * Checks if a date is in the future relative to now.
 * @author @dailker
 * @param {Date} date
 * @returns {boolean}
 */
export function dateIsInFuture(date: Date): boolean {
  return date.getTime() > Date.now();
}
