/**
 * Extracts SMTP login info from a URL.
 *
 * @author @dailker
 * @param {string} url - The SMTP URL.
 * @returns {{user?: string, password?: string, host: string, port?: number}} Credentials/config.
 */
export function smtpURLToCredentials(url: string): {user?: string, password?: string, host: string, port?: number} {
  try {
    const u = new URL(url);
    return {
      user: u.username || undefined,
      password: u.password || undefined,
      host: u.hostname,
      port: u.port ? +u.port : undefined
    };
  } catch {
    return { host: '' };
  }
}
