/**
 * Masks sensitive parts (passwords, tokens, API keys) in a URL.
 *
 * @author @dailker
 * @param {string} url - The URL to mask.
 * @returns {string} The masked URL.
 */
export function maskSensitiveURLParts(url: string): string {
  try {
    const u = new URL(url);
    if (u.password) u.password = '***';
    if (u.username) u.username = '***';
    // Mask common sensitive query params
    ['token','apikey','api_key','access_token','secret','password'].forEach(k => {
      if (u.searchParams.has(k)) u.searchParams.set(k, '***');
    });
    return u.toString();
  } catch {
    return url;
  }
}
