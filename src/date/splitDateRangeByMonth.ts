/**
 * Splits a date range into an array of month-range chunks.
 * @author @dailker
 * @param {Date} start
 * @param {Date} end
 * @returns {Array<{start: Date, end: Date}>}
 */
export function splitDateRangeByMonth(start: Date, end: Date): Array<{start: Date, end: Date}> {
  const result = [];
  let current = new Date(start.getFullYear(), start.getMonth(), 1);
  while (current <= end) {
    const monthEnd = new Date(current.getFullYear(), current.getMonth() + 1, 0, 23, 59, 59, 999);
    result.push({
      start: new Date(Math.max(current.getTime(), start.getTime())),
      end: new Date(Math.min(monthEnd.getTime(), end.getTime())),
    });
    current.setMonth(current.getMonth() + 1, 1);
  }
  return result;
}
