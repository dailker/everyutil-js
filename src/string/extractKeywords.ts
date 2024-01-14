/**
 * Extracts keywords from a string, removing stopwords and punctuation.
 *
 * Example: extractKeywords("The cat sat on the mat.", ["the", "on"]) → ['cat', 'sat', 'mat']
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {string[]} [stopwords=[]] - Words to exclude from the result.
 * @returns {string[]} Array of keywords.
 */
export function extractKeywords(str: string, stopwords: string[] = []): string[] {
  const stops = new Set(stopwords.map(w => w.toLowerCase()));
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(w => w && !stops.has(w));
}
