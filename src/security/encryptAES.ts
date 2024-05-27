/**
 * Encrypts data using AES-256-CBC.
 *
 * @author @dailker
 * @param {string} data - The plaintext data.
 * @param {string} key - The encryption key (32 bytes for AES-256).
 * @returns {string} The base64-encoded ciphertext (IV + encrypted data).
 */
export function encryptAES(data: string, key: string): string {
    const crypto = require('crypto');
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'utf8'), iv);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return iv.toString('base64') + ':' + encrypted;
}
