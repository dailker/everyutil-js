/**
 * Counts how many weekdays fall between two dates (inclusive).
 * @author @dailker
 * @param {Date} start
 * @param {Date} end
 * @returns {number}
 */
export function countWeekdaysBetween(start: Date, end: Date): number {
  let count = 0;
  let d = new Date(start);
  while (d <= end) {
    if (d.getDay() !== 0 && d.getDay() !== 6) count++;
    d.setDate(d.getDate() + 1);
  }
  return count;
}
