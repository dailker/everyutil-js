/**
 * Truncates a date to the start of the hour.
 * @author @dailker
 * @param {Date} date
 * @returns {Date}
 */
export function truncateToHour(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
}
