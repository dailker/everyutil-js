/**
 * Finds all URLs in a string.
 *
 * Example: extractURLs("Visit https://github.com and http://example.com") → ["https://github.com", "http://example.com"]
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string[]} Array of URLs found.
 */
export function extractURLs(str: string): string[] {
  const regex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
  return str.match(regex) || [];
}
