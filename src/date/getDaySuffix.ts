/**
 * Adds “st”, “nd”, “rd”, “th” to date number (1st, 2nd, 3rd, 4th).
 * @author @dailker
 * @param {number} day
 * @returns {string}
 */
export function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}
