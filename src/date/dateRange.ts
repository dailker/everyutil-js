/**
 * Generates an array of dates between two dates with a step (in days).
 * @author @dailker
 * @param {Date} start
 * @param {Date} end
 * @param {number} [step=1]
 * @returns {Date[]}
 */
export function dateRange(start: Date, end: Date, step: number = 1): Date[] {
  const result = [];
  let d = new Date(start);
  while (d <= end) {
    result.push(new Date(d));
    d.setDate(d.getDate() + step);
  }
  return result;
}
