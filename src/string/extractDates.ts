/**
 * Extracts date-like substrings from a string.
 *
 * Example: extractDates("Today is 2023-05-01 and tomorrow is 02/05/2023") → ["2023-05-01", "02/05/2023"]
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string[]} Array of date-like substrings found.
 */
export function extractDates(str: string): string[] {
  const regex = /\b\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}\b|\b\d{4}-\d{2}-\d{2}\b/g;
  return str.match(regex) || [];
}
