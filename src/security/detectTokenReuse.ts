/**
 * Prevents JWT replay attacks by tracking token IDs.
 *
 * @author @dailker
 * @param {string} jwt - The JWT token.
 * @param {Set<string>} historyCache - Set of used token IDs.
 * @returns {boolean} True if token is reused, false otherwise.
 */
export function detectTokenReuse(jwt: string, historyCache: Set<string>): boolean {
    const jwtDecode = require('jsonwebtoken').decode;
    const payload = jwtDecode(jwt) as any;
    if (!payload || !payload.jti) return false;
    if (historyCache.has(payload.jti)) return true;
    historyCache.add(payload.jti);
    return false;
}
