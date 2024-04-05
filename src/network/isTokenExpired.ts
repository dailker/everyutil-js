/**
 * Checks if a JWT token is expired based on its payload.
 *
 * Example: isTokenExpired(token) → true
 *
 * @author @dailker
 * @param {string} token - The JWT token.
 * @returns {boolean} True if expired or invalid.
 */
export function isTokenExpired(token: string): boolean {
  try {
    const [, payload] = token.split('.');
    if (!payload) return true;
    const { exp } = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    if (!exp) return true;
    return Date.now() / 1000 >= exp;
  } catch {
    return true;
  }
}
