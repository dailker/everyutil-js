/**
 * Checks if two dates fall on the same calendar day.
 * @author @dailker
 * @param {Date} a
 * @param {Date} b
 * @returns {boolean}
 */
export function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
