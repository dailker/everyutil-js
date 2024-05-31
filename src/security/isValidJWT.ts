/**
 * Checks if a string is a valid JWT format.
 *
 * @author @dailker
 * @param {string} token - The JWT token.
 * @returns {boolean} True if valid format, false otherwise.
 */
export function isValidJWT(token: string): boolean {
    return /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token);
}
