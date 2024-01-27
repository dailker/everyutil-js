/**
 * Truncates a date to the start of the day.
 * @author @dailker
 * @param {Date} date
 * @returns {Date}
 */
export function truncateToDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
