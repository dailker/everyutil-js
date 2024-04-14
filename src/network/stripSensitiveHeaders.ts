/**
 * Removes sensitive headers (cookies, auth) from outgoing headers.
 *
 * Example: stripSensitiveHeaders(headers) → { ... }
 *
 * @author @dailker
 * @param {Headers|Record<string, string>} headers - Headers object or plain object.
 * @returns {Headers|Record<string, string>} Cleaned headers.
 */
export function stripSensitiveHeaders(headers: Headers | Record<string, string>): Headers | Record<string, string> {
  const keys = ['cookie', 'authorization', 'set-cookie'];
  if (headers instanceof Headers) {
    keys.forEach(k => headers.delete(k));
    return headers;
  } else {
    const out = { ...headers };
    keys.forEach(k => delete out[k]);
    return out;
  }
}
