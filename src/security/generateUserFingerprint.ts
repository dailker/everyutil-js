/**
 * Generates a user fingerprint from request headers (IP, User-Agent, Accept, etc).
 *
 * @author @dailker
 * @param {import('http').IncomingMessage} req - The HTTP request.
 * @returns {string} The fingerprint hash.
 */
export function generateUserFingerprint(req: import('http').IncomingMessage): string {
    const crypto = require('crypto');
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const ua = req.headers['user-agent'] || '';
    const accept = req.headers['accept'] || '';
    const raw = `${ip}|${ua}|${accept}`;
    return crypto.createHash('sha256').update(raw).digest('hex');
}
