/**
 * Generates an RSA key pair for asymmetric encryption.
 *
 * @author @dailker
 * @returns {{ publicKey: string, privateKey: string }} The RSA key pair (PEM format).
 */
export function generateRSAKeyPair(): { publicKey: string, privateKey: string } {
    const crypto = require('crypto');
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs1', format: 'pem' }
    });
    return { publicKey, privateKey };
}
