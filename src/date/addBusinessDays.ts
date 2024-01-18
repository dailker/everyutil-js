/**
 * Adds N business days to a date, skipping weekends and optional holidays.
 * @author @dailker
 * @param {Date} date - The start date.
 * @param {number} days - Number of business days to add.
 * @param {Date[]} [holidays=[]] - Optional array of holidays.
 * @returns {Date} The resulting date.
 */
export function addBusinessDays(date: Date, days: number, holidays: Date[] = []): Date {
  let result = new Date(date);
  while (days > 0) {
    result.setDate(result.getDate() + 1);
    if (result.getDay() !== 0 && result.getDay() !== 6 && !holidays.some(h => h.toDateString() === result.toDateString())) {
      days--;
    }
  }
  return result;
}
