/**
 * Finds the Nth occurrence of a specific weekday in a month.
 * @author @dailker
 * @param {number} year
 * @param {number} month - 0=Jan, 11=Dec
 * @param {number} weekday - 0=Sun, 6=Sat
 * @param {number} n - Nth occurrence
 * @returns {Date|null}
 */
export function dateNthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date | null {
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    const d = new Date(year, month, day);
    if (d.getMonth() !== month) break;
    if (d.getDay() === weekday) {
      count++;
      if (count === n) return d;
    }
  }
  return null;
}
