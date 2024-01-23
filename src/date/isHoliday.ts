/**
 * Checks if a date is a holiday based on a user-provided holiday list.
 * @author @dailker
 * @param {Date} date
 * @param {Date[]} holidays
 * @returns {boolean}
 */
export function isHoliday(date: Date, holidays: Date[]): boolean {
  return holidays.some(h => h.toDateString() === date.toDateString());
}
