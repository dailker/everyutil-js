/**
 * Returns true if Content-Type header is JSON.
 *
 * Example: isJSONResponse(headers) → true
 *
 * @author @dailker
 * @param {Headers|Record<string, string>} headers - Headers object or plain object.
 * @returns {boolean} True if JSON response.
 */
export function isJSONResponse(headers: Headers | Record<string, string>): boolean {
  let val: string | null = null;
  if (headers instanceof Headers) val = headers.get('content-type');
  else if (typeof headers === 'object') val = headers['content-type'] || headers['Content-Type'] || null;
  if (!val) return false;
  return /application\/(json|[\w.+-]*\+json)(;|$)/i.test(val);
}
