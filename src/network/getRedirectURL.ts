/**
 * Extracts the redirect URL from a fetch/HTTP response if present.
 *
 * Example: getRedirectURL(response) → "https://redirected.com" | null
 *
 * @author @dailker
 * @param {Response} response - The fetch Response object.
 * @returns {string|null} The redirect URL or null if not present.
 */
export function getRedirectURL(response: Response): string | null {
  // Standard: 'Location' header for 3xx responses
  const location = response.headers.get('location');
  return location || null;
}
