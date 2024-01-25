/**
 * Finds the next date that is a specific weekday.
 * @author @dailker
 * @param {Date} date - Start date.
 * @param {number} weekday - 0=Sunday, 6=Saturday.
 * @returns {Date}
 */
export function nextWeekday(date: Date, weekday: number): Date {
  const result = new Date(date);
  const diff = (weekday + 7 - result.getDay()) % 7 || 7;
  result.setDate(result.getDate() + diff);
  return result;
}
