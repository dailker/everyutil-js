/**
 * Re-encrypts data with a new AES-256 key.
 *
 * @author @dailker
 * @param {string} oldKey - The old encryption key.
 * @param {string} newKey - The new encryption key.
 * @param {string} data - The encrypted data (AES-256).
 * @returns {string} The re-encrypted data.
 */
export function rotateEncryptionKey(oldKey: string, newKey: string, data: string): string {
    const { decryptAES, encryptAES } = require('./decryptAES');
    const plain = decryptAES(data, oldKey);
    return encryptAES(plain, newKey);
}
