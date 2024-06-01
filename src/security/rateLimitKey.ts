/**
 * Prevents brute force attempts per key (IP/user) with rate limiting.
 *
 * @author @dailker
 * @param {string} key - The key to rate limit.
 * @param {number} limit - Max allowed attempts.
 * @param {number} durationMs - Time window in ms.
 * @returns {boolean} True if allowed, false if rate limited.
 */
const _rateLimitMap: Record<string, { count: number, expires: number }> = {};
export function rateLimitKey(key: string, limit: number, durationMs: number): boolean {
    const now = Date.now();
    if (!_rateLimitMap[key] || _rateLimitMap[key].expires < now) {
        _rateLimitMap[key] = { count: 1, expires: now + durationMs };
        return true;
    }
    if (_rateLimitMap[key].count < limit) {
        _rateLimitMap[key].count++;
        return true;
    }
    return false;
}
