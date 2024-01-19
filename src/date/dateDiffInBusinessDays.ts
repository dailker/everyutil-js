/**
 * Counts business days between two dates.
 * @author @dailker
 * @param {Date} start
 * @param {Date} end
 * @param {Date[]} [holidays=[]]
 * @returns {number}
 */
export function dateDiffInBusinessDays(start: Date, end: Date, holidays: Date[] = []): number {
  let count = 0;
  let d = new Date(start);
  while (d <= end) {
    if (d.getDay() !== 0 && d.getDay() !== 6 && !holidays.some(h => h.toDateString() === d.toDateString())) {
      count++;
    }
    d.setDate(d.getDate() + 1);
  }
  return count;
}
