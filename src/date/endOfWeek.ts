import { startOfWeek } from "./startOfWeek";

/**
 * Gets the end of the week for a date.
 * @param {Date} date
 * @param {number} [firstDay=1] - 0=Sunday, 1=Monday
 * @returns {Date}
 */
export function endOfWeek(date: Date, firstDay: number = 1): Date {
  const start = startOfWeek(date, firstDay);
  const result = new Date(start);
  result.setDate(result.getDate() + 6);
  result.setHours(23, 59, 59, 999);
  return result;
}
