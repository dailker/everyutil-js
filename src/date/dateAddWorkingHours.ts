/**
 * Adds working hours to a date, skipping non-working hours and weekends.
 * @author @dailker
 * @param {Date} date
 * @param {number} hours
 * @param {number} [workStart=9] - Start hour (24h)
 * @param {number} [workEnd=17] - End hour (24h)
 * @returns {Date}
 */
export function dateAddWorkingHours(date: Date, hours: number, workStart: number = 9, workEnd: number = 17): Date {
  let d = new Date(date);
  while (hours > 0) {
    if (d.getDay() !== 0 && d.getDay() !== 6 && d.getHours() >= workStart && d.getHours() < workEnd) {
      d.setHours(d.getHours() + 1);
      hours--;
    } else {
      d.setHours(workStart, 0, 0, 0);
      d.setDate(d.getDate() + 1);
    }
  }
  return d;
}
