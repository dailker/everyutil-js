/**
 * Checks if a request is secure (HTTPS, trusted proxy).
 *
 * @author @dailker
 * @param {import('http').IncomingMessage} req - The HTTP request.
 * @returns {boolean} True if secure.
 */
export function isRequestSecure(req: import('http').IncomingMessage): boolean {
    return (req.connection && (req.connection as any).encrypted) || req.headers['x-forwarded-proto'] === 'https';
}
