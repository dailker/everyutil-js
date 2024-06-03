/**
 * Signs data using a private RSA key (SHA256).
 *
 * @author @dailker
 * @param {string} data - The data to sign.
 * @param {string} privateKey - The private key (PEM format).
 * @returns {string} The base64-encoded signature.
 */
export function signData(data: string, privateKey: string): string {
    const crypto = require('crypto');
    const sign = crypto.createSign('SHA256');
    sign.update(data);
    sign.end();
    return sign.sign(privateKey, 'base64');
}
