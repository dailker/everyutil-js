/**
 * Decrypts AES-256-CBC encrypted data.
 *
 * @author @dailker
 * @param {string} cipherText - The base64-encoded ciphertext (IV + encrypted data).
 * @param {string} key - The encryption key (32 bytes for AES-256).
 * @returns {string} The decrypted plaintext.
 */
export function decryptAES(cipherText: string, key: string): string {
    const crypto = require('crypto');
    const [ivB64, encrypted] = cipherText.split(':');
    const iv = Buffer.from(ivB64, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'utf8'), iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
