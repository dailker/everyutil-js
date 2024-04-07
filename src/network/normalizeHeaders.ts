/**
 * Normalizes headers to lowercase keys (plain object only).
 *
 * Example: normalizeHeaders({ 'X-Foo': 'bar' }) → { 'x-foo': 'bar' }
 *
 * @author @dailker
 * @param {Record<string, string>} headers - Headers object.
 * @returns {Record<string, string>} Normalized headers.
 */
export function normalizeHeaders(headers: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k in headers) out[k.toLowerCase()] = headers[k];
  return out;
}
