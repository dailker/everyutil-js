/**
 * Adds days/hours/minutes/seconds to a date.
 * @author @dailker
 * @param {Date} date
 * @param {object} add - {days, hours, minutes, seconds}
 * @returns {Date}
 */
export function dateAdd(date: Date, add: {days?: number, hours?: number, minutes?: number, seconds?: number}): Date {
  const d = new Date(date);
  if (add.days) d.setDate(d.getDate() + add.days);
  if (add.hours) d.setHours(d.getHours() + add.hours);
  if (add.minutes) d.setMinutes(d.getMinutes() + add.minutes);
  if (add.seconds) d.setSeconds(d.getSeconds() + add.seconds);
  return d;
}
