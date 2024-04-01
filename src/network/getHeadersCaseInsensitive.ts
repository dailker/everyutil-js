/**
 * Retrieve HTTP header value ignoring case.
 * @param headers Headers object or plain object.
 * @param key Header key to search for.
 * @returns The header value or undefined.
 */
export function getHeadersCaseInsensitive(headers: Headers | Record<string, string>, key: string): string | undefined {
  if (headers instanceof Headers) {
    for (const [k, v] of headers.entries()) {
      if (k.toLowerCase() === key.toLowerCase()) return v;
    }
  } else {
    for (const k in headers) {
      if (k.toLowerCase() === key.toLowerCase()) return headers[k];
    }
  }
  return undefined;
}
