/**
 * Parses an SMTP-style email URL (smtp://user:pass@host:port).
 *
 * Example: parseEmailURL('smtp://user:pass@host:25')
 *
 * @author @dailker
 * @param {string} url - The email URL.
 * @returns {{ protocol: string, username?: string, password?: string, host: string, port?: string }} Parsed info.
 */
export function parseEmailURL(url: string): { protocol: string, username?: string, password?: string, host: string, port?: string } {
  try {
    const u = new URL(url);
    return {
      protocol: u.protocol.replace(':', ''),
      username: u.username || undefined,
      password: u.password || undefined,
      host: u.hostname,
      port: u.port || undefined
    };
  } catch {
    return { protocol: '', host: '' };
  }
}
