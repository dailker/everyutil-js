/**
 * RFC 3986-compliant URI component encoding.
 * @param value The value to encode.
 * @returns The encoded string.
 */
export function encodeURIComponentRFC3986(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}
