/**
 * Extracts the MIME type from response headers.
 *
 * Example: getContentType(headers) → "application/json"
 *
 * @author @dailker
 * @param {Headers|Record<string, string>} headers - Headers object or plain object.
 * @returns {string|null} The MIME type or null if not found.
 */
export function getContentType(headers: Headers | Record<string, string>): string | null {
  let val: string | null = null;
  if (headers instanceof Headers) val = headers.get('content-type');
  else if (typeof headers === 'object') val = headers['content-type'] || headers['Content-Type'] || null;
  if (!val) return null;
  return val.split(';')[0].trim();
}
