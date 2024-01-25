/**
 * Gets the start of the month for a date.
 * @author @dailker
 * @param {Date} date
 * @returns {Date}
 */
export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
