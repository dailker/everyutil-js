/**
 * Returns fiscal quarter based on date and custom fiscal year start.
 * @author @dailker
 * @param {Date} date
 * @param {number} [fiscalYearStartMonth=0] - 0=Jan, 3=Apr, etc.
 * @returns {number}
 */
export function getFiscalQuarter(date: Date, fiscalYearStartMonth: number = 0): number {
  return Math.floor(((date.getMonth() - fiscalYearStartMonth + 12) % 12) / 3) + 1;
}
