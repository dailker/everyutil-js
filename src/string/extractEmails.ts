/**
 * Finds all email addresses in a string.
 *
 * Example: extractEmails("Contact me at john@example.com or jane@site.org") → ["john@example.com", "jane@site.org"]
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string[]} Array of email addresses found.
 */
export function extractEmails(str: string): string[] {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return str.match(regex) || [];
}
