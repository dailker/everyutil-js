/**
 * Returns timezone offset formatted as +HH:mm or -HH:mm.
 * @author @dailker
 * @param {Date} date
 * @returns {string}
 */
export function getTimezoneOffsetString(date: Date): string {
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? '+' : '-';
  const abs = Math.abs(offset);
  const h = String(Math.floor(abs / 60)).padStart(2, '0');
  const m = String(abs % 60).padStart(2, '0');
  return `${sign}${h}:${m}`;
}
