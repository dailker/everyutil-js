/**
 * Fetches a URL and returns the parsed JSON, with error handling.
 *
 * Example: fetchJSON("https://api.com/data") → { ... }
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options] - Fetch options.
 * @returns {Promise<any|null>} Parsed JSON or null if error.
 */
export async function fetchJSON(url: string, options?: RequestInit): Promise<any | null> {
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch {
    return null;
  }
}
