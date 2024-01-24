/**
 * Finds the next business day after a given date, skipping weekends and holidays.
 * @author @dailker
 * @param {Date} date
 * @param {Date[]} [holidays=[]]
 * @returns {Date}
 */
export function nextBusinessDay(date: Date, holidays: Date[] = []): Date {
  let d = new Date(date);
  do {
    d.setDate(d.getDate() + 1);
  } while (d.getDay() === 0 || d.getDay() === 6 || holidays.some(h => h.toDateString() === d.toDateString()));
  return d;
}
