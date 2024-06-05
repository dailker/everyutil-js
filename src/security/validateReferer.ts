/**
 * Validates referer/origin against a whitelist for CSRF protection.
 *
 * @author @dailker
 * @param {string} origin - The referer/origin header.
 * @param {string[]} whitelist - Allowed origins.
 * @returns {boolean} True if valid.
 */
export function validateReferer(origin: string, whitelist: string[]): boolean {
    return whitelist.some(w => origin && origin.startsWith(w));
}
