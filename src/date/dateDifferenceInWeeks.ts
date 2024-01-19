/**
 * Calculates whole weeks difference between two dates.
 * @author @dailker
 * @param {Date} a
 * @param {Date} b
 * @returns {number}
 */
export function dateDifferenceInWeeks(a: Date, b: Date): number {
  return Math.floor(Math.abs(a.getTime() - b.getTime()) / (7 * 24 * 60 * 60 * 1000));
}
