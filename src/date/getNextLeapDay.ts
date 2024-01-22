/**
 * Gets the next Feb 29 after a given date.
 * @author @dailker
 * @param {Date} date
 * @returns {Date}
 */
export function getNextLeapDay(date: Date): Date {
  let year = date.getFullYear();
  let d = new Date(year, 1, 29);
  if (d <= date) year++;
  while (!(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) year++;
  return new Date(year, 1, 29);
}
