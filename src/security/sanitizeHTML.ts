/**
 * Removes potentially dangerous tags (<script>, <iframe>, etc).
 *
 * @author @dailker
 * @param {string} str - The input HTML string.
 * @returns {string} The sanitized string.
 */
export function sanitizeHTML(str: string): string {
    return str.replace(/<\/?(script|iframe|object|embed|style|link|meta)[^>]*>/gi, '');
}
