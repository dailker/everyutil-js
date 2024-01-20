/**
 * Gets the end of the month for a date.
 * @author @dailker
 * @param {Date} date
 * @returns {Date}
 */
export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
}
