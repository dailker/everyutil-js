/**
 * Decodes a Base64-encoded string back to a string.
 *
 * @author @dailker
 * @param {string} encoded - The Base64-encoded string.
 * @returns {string} The decoded string.
 */
export function base64Decode(encoded: string): string {
    return Buffer.from(encoded, 'base64').toString('utf8');
}
