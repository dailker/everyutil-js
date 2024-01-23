/**
 * Checks if a year is a leap year.
 * @author @dailker
 * @param {number} year
 * @returns {boolean}
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
