/**
 * Nicely formats a start/end date range.
 * @author @dailker
 * @param {Date} start
 * @param {Date} end
 * @returns {string}
 */
export function formatDateRange(start: Date, end: Date): string {
  if (start.toDateString() === end.toDateString()) return start.toDateString();
  return `${start.toDateString()} - ${end.toDateString()}`;
}
