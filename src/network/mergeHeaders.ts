/**
 * Merges two sets of headers (case-insensitive, right wins).
 *
 * @author @dailker
 * @param {HeadersInit} a - First headers.
 * @param {HeadersInit} b - Second headers.
 * @returns {Headers} The merged headers.
 */
export function mergeHeaders(a: HeadersInit, b: HeadersInit): Headers {
  const result = new Headers(a);
  new Headers(b).forEach((v, k) => result.set(k, v));
  return result;
}
