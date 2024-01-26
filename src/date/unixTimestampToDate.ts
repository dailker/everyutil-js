/**
 * Converts UNIX timestamp to JS Date object.
 * @author @dailker
 * @param {number} ts
 * @param {'s'|'ms'} [unit='ms']
 * @returns {Date}
 */
export function unixTimestampToDate(ts: number, unit: 's'|'ms' = 'ms'): Date {
  return new Date(unit === 's' ? ts * 1000 : ts);
}
