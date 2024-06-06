/**
 * Verifies a JWT and returns the decoded payload or null if invalid.
 *
 * @author @dailker
 * @param {string} token - The JWT token.
 * @param {string} secret - The secret key.
 * @returns {object | null} The decoded payload or null.
 */
export function verifyJWT(token: string, secret: string): object | null {
    const jwt = require('jsonwebtoken');
    try {
        return jwt.verify(token, secret);
    } catch {
        return null;
    }
}
