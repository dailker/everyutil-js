/**
 * Parses an FTP URL (ftp://user:pass@host:port/path).
 *
 * Example: extractFTPDetails('ftp://user:pass@host:21/path')
 *
 * @author @dailker
 * @param {string} url - The FTP URL.
 * @returns {{ protocol: string, username?: string, password?: string, host: string, port?: string, path?: string }} Parsed info.
 */
export function extractFTPDetails(url: string): { protocol: string, username?: string, password?: string, host: string, port?: string, path?: string } {
  try {
    const u = new URL(url);
    return {
      protocol: u.protocol.replace(':', ''),
      username: u.username || undefined,
      password: u.password || undefined,
      host: u.hostname,
      port: u.port || undefined,
      path: u.pathname || undefined
    };
  } catch {
    return { protocol: '', host: '' };
  }
}
