/**
 * Decodes a JWT payload without verification.
 *
 * Example: parseJwt(token) → { sub: ..., exp: ... }
 *
 * @author @dailker
 * @param {string} token - The JWT token.
 * @returns {any|null} The decoded payload or null if invalid.
 */
export function parseJwt(token: string): any | null {
  try {
    const [, payload] = token.split('.');
    if (!payload) return null;
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
  } catch {
    return null;
  }
}
