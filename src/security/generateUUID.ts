/**
 * Generates a v4 UUID string.
 *
 * @author @dailker
 * @returns {string} A v4 UUID.
 */
export function generateUUID(): string {
    const { randomUUID } = require('crypto');
    return randomUUID();
}
