/**
 * Compares two strings in constant time to prevent timing attacks.
 *
 * @author @dailker
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {boolean} True if equal, false otherwise.
 */
export function constantTimeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
}
