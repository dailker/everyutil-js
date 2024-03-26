/**
 * Decodes a URL query parameter.
 * @param value The value to decode.
 * @returns The decoded string.
 */
export function decodeQueryParam(value: string): string {
  return decodeURIComponent(value.replace(/\+/g, ' '));
}
