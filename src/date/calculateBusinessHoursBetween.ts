/**
 * Calculates business hours elapsed between two datetimes.
 * @author @dailker
 * @param {Date} start
 * @param {Date} end
 * @param {number} [workStart=9]
 * @param {number} [workEnd=17]
 * @returns {number}
 */
export function calculateBusinessHoursBetween(start: Date, end: Date, workStart: number = 9, workEnd: number = 17): number {
  let hours = 0;
  let d = new Date(start);
  while (d < end) {
    if (d.getDay() !== 0 && d.getDay() !== 6 && d.getHours() >= workStart && d.getHours() < workEnd) {
      hours++;
    }
    d.setHours(d.getHours() + 1);
  }
  return hours;
}
