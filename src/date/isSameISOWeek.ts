/**
 * Checks if two dates belong to the same ISO week number.
 * @author @dailker
 * @param {Date} a
 * @param {Date} b
 * @returns {boolean}
 */
export function isSameISOWeek(a: Date, b: Date): boolean {
  const getWeek = (d: Date) => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
    return Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  };
  return a.getUTCFullYear() === b.getUTCFullYear() && getWeek(a) === getWeek(b);
}
