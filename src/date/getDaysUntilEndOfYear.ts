/**
 * Returns days left until December 31.
 * @author @dailker
 * @param {Date} date
 * @returns {number}
 */
export function getDaysUntilEndOfYear(date: Date): number {
  const end = new Date(date.getFullYear(), 11, 31);
  return Math.ceil((end.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
}
