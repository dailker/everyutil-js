/**
 * Encodes a value for safe use as a URL query parameter.
 * @param value The value to encode.
 * @returns The encoded string.
 */
export function encodeQueryParam(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}
