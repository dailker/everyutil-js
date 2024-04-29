/**
 * Cleans and normalizes a filename by removing or replacing illegal characters.
 *
 * @author @dailker
 * @param {string} filename - The filename to sanitize.
 * @returns {string} The sanitized filename.
 */
export function sanitizeFilename(filename: string): string {
  return filename.replace(/[<>:"/\\|?*]+/g, '_').replace(/\s+/g, ' ').trim();
}
