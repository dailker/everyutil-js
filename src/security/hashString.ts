/**
 * Hashes a string using the specified algorithm (default: sha256).
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {'sha256' | 'md5'} [algorithm='sha256'] - Hash algorithm.
 * @returns {string} The hash as a hex string.
 */
export function hashString(str: string, algorithm: 'sha256' | 'md5' = 'sha256'): string {
    const crypto = require('crypto');
    return crypto.createHash(algorithm).update(str, 'utf8').digest('hex');
}
