/**
 * Adds a Bearer token to request headers.
 *
 * Example: addAuthHeader({}, token) → { Authorization: 'Bearer ...' }
 *
 * @author @dailker
 * @param {Headers|Record<string, string>} headers - Headers object or plain object.
 * @param {string} token - The JWT token.
 * @returns {Headers|Record<string, string>} Headers with Authorization.
 */
export function addAuthHeader(headers: Headers | Record<string, string>, token: string): Headers | Record<string, string> {
  if (headers instanceof Headers) {
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  } else {
    return { ...headers, Authorization: `Bearer ${token}` };
  }
}
