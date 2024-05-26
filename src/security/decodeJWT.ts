/**
 * Decodes a JWT without verifying signature.
 *
 * @author @dailker
 * @param {string} token - The JWT token.
 * @returns {object} The decoded payload.
 */
export function decodeJWT(token: string): object {
    const jwt = require('jsonwebtoken');
    return jwt.decode(token) as object;
}
