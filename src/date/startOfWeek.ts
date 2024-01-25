/**
 * Gets the start of the week for a date.
 * @author @dailker
 * @param {Date} date
 * @param {number} [firstDay=1] - 0=Sunday, 1=Monday
 * @returns {Date}
 */
export function startOfWeek(date: Date, firstDay: number = 1): Date {
  const result = new Date(date);
  const diff = (result.getDay() + 7 - firstDay) % 7;
  result.setDate(result.getDate() - diff);
  result.setHours(0,0,0,0);
  return result;
}
