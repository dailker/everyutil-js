/**
 * Obfuscates sensitive headers (auth/cookie) in a headers object.
 *
 * Example: maskSensitiveHeaders({ Authorization: 'Bearer ...' }) → { Authorization: '***' }
 *
 * @author @dailker
 * @param {Headers|Record<string, string>} headers - Headers object or plain object.
 * @returns {Headers|Record<string, string>} Masked headers.
 */
export function maskSensitiveHeaders(headers: Headers | Record<string, string>): Headers | Record<string, string> {
  const keys = ['authorization', 'cookie', 'set-cookie'];
  if (headers instanceof Headers) {
    keys.forEach(k => { if (headers.has(k)) headers.set(k, '***'); });
    return headers;
  } else {
    const out = { ...headers };
    for (const k of Object.keys(out)) {
      if (keys.includes(k.toLowerCase())) out[k] = '***';
    }
    return out;
  }
}
