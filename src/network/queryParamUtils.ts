/**
 * Encodes a string as a URL query parameter value (RFC 3986 safe).
 *
 * @author @dailker
 * @param {string} value - The value to encode.
 * @returns {string} Encoded value.
 */
export function encodeQueryParam(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16));
}

/**
 * Decodes a URL query parameter value.
 *
 * @author @dailker
 * @param {string} value - The value to decode.
 * @returns {string} Decoded value.
 */
export function decodeQueryParam(value: string): string {
  try {
    return decodeURIComponent(value.replace(/\+/g, ' '));
  } catch {
    return value;
  }
}

/**
 * RFC 3986-compliant URI component encoding.
 *
 * @author @dailker
 * @param {string} value - The value to encode.
 * @returns {string} Encoded value.
 */
export function encodeURIComponentRFC3986(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16));
}

/**
 * Safely decodes a URI component, handling malformed sequences.
 *
 * @author @dailker
 * @param {string} value - The value to decode.
 * @returns {string} Decoded value or original if malformed.
 */
export function decodeURIComponentSafe(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
