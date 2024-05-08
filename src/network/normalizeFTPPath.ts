/**
 * Normalizes FTP paths to be cross-platform safe.
 *
 * Example: normalizeFTPPath('\\folder\\file.txt') → '/folder/file.txt'
 *
 * @author @dailker
 * @param {string} path - The FTP path.
 * @returns {string} Normalized path.
 */
export function normalizeFTPPath(path: string): string {
  return path.replace(/\\+/g, '/').replace(/\/+/g, '/');
}
