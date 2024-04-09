/**
 * Automatically refreshes expired JWTs (dummy implementation, extend as needed).
 *
 * Example: refreshTokenIfNeeded(token)
 *
 * @author @dailker
 * @param {string} token - The JWT token.
 * @returns {Promise<string>} The valid token (refreshed if needed).
 */
export async function refreshTokenIfNeeded(token: string): Promise<string> {
  // Dummy: In real use, call your refresh endpoint here
  function isExpired(t: string) {
    try {
      const [, payload] = t.split('.');
      if (!payload) return true;
      const { exp } = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
      if (!exp) return true;
      return Date.now() / 1000 >= exp;
    } catch {
      return true;
    }
  }
  if (!isExpired(token)) return token;
  // Simulate refresh
  return Promise.resolve(token + '_refreshed');
}
