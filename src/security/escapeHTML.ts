/**
 * Escapes HTML tags to prevent XSS (< → &lt;, etc).
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The escaped string.
 */
export function escapeHTML(str: string): string {
    return str.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c] || ''));
}
