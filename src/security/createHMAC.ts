/**
 * Returns an HMAC signature of data using SHA256.
 *
 * @author @dailker
 * @param {string} data - The data to sign.
 * @param {string} secret - The secret key.
 * @returns {string} The HMAC signature (hex).
 */
export function createHMAC(data: string, secret: string): string {
    const { createHmac } = require('crypto');
    return createHmac('sha256', secret).update(data).digest('hex');
}
