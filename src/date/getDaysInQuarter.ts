/**
 * Returns total days in the quarter for a given date.
 * @author @dailker
 * @param {Date} date
 * @returns {number}
 */
export function getDaysInQuarter(date: Date): number {
  const q = Math.floor(date.getMonth() / 3);
  const year = date.getFullYear();
  const months = [q * 3, q * 3 + 1, q * 3 + 2];
  return months.reduce((sum, m) => sum + new Date(year, m + 1, 0).getDate(), 0);
}
