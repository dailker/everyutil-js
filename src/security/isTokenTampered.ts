/**
 * Manually verifies JWT signature and structure integrity.
 *
 * @author @dailker
 * @param {string} jwt - The JWT token.
 * @param {string} secret - The secret key.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isTokenTampered(jwt: string, secret: string): boolean {
    const jwtLib = require('jsonwebtoken');
    try {
        jwtLib.verify(jwt, secret);
        return false;
    } catch {
        return true;
    }
}
