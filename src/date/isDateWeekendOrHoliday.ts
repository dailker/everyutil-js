/**
 * Checks if a date is a weekend or a holiday.
 * @author @dailker
 * @param {Date} date
 * @param {Date[]} holidays
 * @returns {boolean}
 */
export function isDateWeekendOrHoliday(date: Date, holidays: Date[]): boolean {
  return date.getDay() === 0 || date.getDay() === 6 || holidays.some(h => h.toDateString() === date.toDateString());
}
