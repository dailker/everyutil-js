/**
 * Implements exponential backoff login protection per identifier.
 *
 * @author @dailker
 * @param {string} identifier - The user/IP identifier.
 * @returns {{ ok: boolean, delay?: number }} Result and delay if locked out.
 */
const _loginAttempts: Record<string, { count: number, last: number }> = {};
export function trackLoginAttempts(identifier: string): { ok: boolean, delay?: number } {
    const now = Date.now();
    const entry = _loginAttempts[identifier] || { count: 0, last: 0 };
    if (entry.count >= 5 && now - entry.last < 2 ** entry.count * 1000) {
        return { ok: false, delay: 2 ** entry.count };
    }
    if (now - entry.last > 60000) entry.count = 0;
    entry.count++;
    entry.last = now;
    _loginAttempts[identifier] = entry;
    return { ok: true };
}
