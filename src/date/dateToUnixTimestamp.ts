/**
 * Converts date to UNIX timestamp in seconds or milliseconds.
 * @author @dailker
 * @param {Date} date
 * @param {'s'|'ms'} [unit='ms']
 * @returns {number}
 */
export function dateToUnixTimestamp(date: Date, unit: 's'|'ms' = 'ms'): number {
  return unit === 's' ? Math.floor(date.getTime() / 1000) : date.getTime();
}
