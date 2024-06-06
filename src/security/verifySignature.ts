/**
 * Verifies a digital signature using a public RSA key (SHA256).
 *
 * @author @dailker
 * @param {string} data - The data that was signed.
 * @param {string} signature - The base64-encoded signature.
 * @param {string} publicKey - The public key (PEM format).
 * @returns {boolean} True if valid, false otherwise.
 */
export function verifySignature(data: string, signature: string, publicKey: string): boolean {
    const crypto = require('crypto');
    const verify = crypto.createVerify('SHA256');
    verify.update(data);
    verify.end();
    return verify.verify(publicKey, signature, 'base64');
}
