/**
 * Removes invalid or dangerous characters from filenames.
 *
 * @author @dailker
 * @param {string} name - The filename to sanitize.
 * @returns {string} The sanitized filename.
 */
export function sanitizeFilename(name: string): string {
    // Prevents path traversal and invalid characters
    return name.replace(/[\\/:*?"<>|]/g, '_').replace(/\.\.(\/|\\)/g, '_');
}
