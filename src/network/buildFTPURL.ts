/**
 * Composes an FTP URL from config parts.
 *
 * @author @dailker
 * @param {{host: string, port?: number, user?: string, password?: string, path?: string}} cfg - Config object.
 * @returns {string} The FTP URL.
 */
export function buildFTPURL(cfg: {host: string, port?: number, user?: string, password?: string, path?: string}): string {
  let auth = cfg.user ? encodeURIComponent(cfg.user) : '';
  if (cfg.password) auth += ':' + encodeURIComponent(cfg.password);
  if (auth) auth += '@';
  let url = `ftp://${auth}${cfg.host}`;
  if (cfg.port && cfg.port !== 21) url += `:${cfg.port}`;
  if (cfg.path) url += cfg.path.startsWith('/') ? cfg.path : '/' + cfg.path;
  return url;
}
