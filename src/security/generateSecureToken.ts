/**
 * Generates a secure random token using crypto.randomBytes.
 *
 * @author @dailker
 * @param {number} [bytes=32] - Number of bytes for the token.
 * @returns {string} The generated token (hex).
 */
export function generateSecureToken(bytes: number = 32): string {
    const { randomBytes } = require('crypto');
    return randomBytes(bytes).toString('hex');
}
