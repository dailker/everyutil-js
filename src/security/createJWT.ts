/**
 * Creates a JWT from a payload and secret.
 *
 * @author @dailker
 * @param {object} payload - The JWT payload.
 * @param {string} secret - The secret key.
 * @param {object} [options] - JWT sign options.
 * @returns {string} The JWT token.
 */
export function createJWT(payload: object, secret: string, options?: object): string {
    const jwt = require('jsonwebtoken');
    return jwt.sign(payload, secret, options);
}
