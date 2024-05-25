/**
 * Creates an ephemeral, in-memory token with expiry.
 *
 * @author @dailker
 * @param {number} expiryMs - Milliseconds until expiry.
 * @returns {string} The ephemeral token.
 */
const _ephemeralTokens: Record<string, number> = {};
export function createEphemeralToken(expiryMs: number): string {
    const { randomBytes } = require('crypto');
    const token = randomBytes(32).toString('hex');
    _ephemeralTokens[token] = Date.now() + expiryMs;
    setTimeout(() => { delete _ephemeralTokens[token]; }, expiryMs);
    return token;
}

/**
 * Checks if a token is expired based on creation time and TTL.
 *
 * @author @dailker
 * @param {number} tokenCreatedAt - Token creation timestamp (ms).
 * @param {number} ttlMs - Time-to-live in ms.
 * @returns {boolean} True if expired.
 */
export function isTokenExpired(tokenCreatedAt: number, ttlMs: number): boolean {
    return Date.now() > tokenCreatedAt + ttlMs;
}
