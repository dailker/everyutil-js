/**
 * Encrypts data using an RSA public key.
 *
 * @author @dailker
 * @param {string} data - The plaintext data.
 * @param {string} publicKey - The RSA public key (PEM format).
 * @returns {string} The base64-encoded encrypted data.
 */
export function encryptRSA(data: string, publicKey: string): string {
    const crypto = require('crypto');
    return crypto.publicEncrypt(publicKey, Buffer.from(data, 'utf8')).toString('base64');
}
