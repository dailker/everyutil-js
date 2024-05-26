/**
 * Decrypts RSA-encrypted data using a private key.
 *
 * @author @dailker
 * @param {string} cipher - The base64-encoded encrypted data.
 * @param {string} privateKey - The RSA private key (PEM format).
 * @returns {string} The decrypted plaintext.
 */
export function decryptRSA(cipher: string, privateKey: string): string {
    const crypto = require('crypto');
    return crypto.privateDecrypt(privateKey, Buffer.from(cipher, 'base64')).toString('utf8');
}
