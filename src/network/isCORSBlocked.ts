/**
 * Heuristically checks if a fetch error is likely CORS-related.
 *
 * Example: isCORSBlocked(error) → true
 *
 * @author @dailker
 * @param {any} error - The error object.
 * @returns {boolean} True if likely CORS error.
 */
export function isCORSBlocked(error: any): boolean {
  if (!error) return false;
  const msg = (error.message || '').toLowerCase();
  return msg.includes('failed to fetch') || msg.includes('cors') || msg.includes('networkerror');
}
