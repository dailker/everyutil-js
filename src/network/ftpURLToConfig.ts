/**
 * Converts an FTP URL to a config object.
 *
 * @author @dailker
 * @param {string} url - The FTP URL.
 * @returns {{host: string, port: number, user?: string, password?: string, path?: string}} The config object.
 */
export function ftpURLToConfig(url: string): {host: string, port: number, user?: string, password?: string, path?: string} {
  try {
    const u = new URL(url);
    return {
      host: u.hostname,
      port: u.port ? +u.port : 21,
      user: u.username || undefined,
      password: u.password || undefined,
      path: u.pathname !== '/' ? u.pathname : undefined
    };
  } catch {
    return { host: '', port: 21 };
  }
}
