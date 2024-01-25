/**
 * Rounds date/time to nearest N minutes or seconds.
 * @author @dailker
 * @param {Date} date
 * @param {object} opts - {minutes?: number, seconds?: number}
 * @returns {Date}
 */
export function roundDateToNearest(date: Date, opts: {minutes?: number, seconds?: number}): Date {
  const d = new Date(date);
  if (opts.minutes) {
    const ms = opts.minutes * 60 * 1000;
    d.setTime(Math.round(d.getTime() / ms) * ms);
  } else if (opts.seconds) {
    const ms = opts.seconds * 1000;
    d.setTime(Math.round(d.getTime() / ms) * ms);
  }
  return d;
}
