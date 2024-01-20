/**
 * Gets the number of days in a given month and year.
 * @author @dailker
 * @param {number} year
 * @param {number} month - 0=Jan, 11=Dec
 * @returns {number}
 */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}
