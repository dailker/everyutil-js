/**
 * Encodes a string as Base64.
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The Base64-encoded string.
 */
export function base64Encode(str: string): string {
    return Buffer.from(str, 'utf8').toString('base64');
}
