/**
 * Cleans directory names for compatibility and safety.
 *
 * @author @dailker
 * @param {string} name - Directory name.
 * @returns {string} Sanitized name.
 */
export function sanitizeDirectoryName(name: string): string {
  return name.replace(/[<>:"/\\|?*]+/g, '_').replace(/\s+/g, ' ').trim();
}
