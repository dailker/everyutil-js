/**
 * Whitelist-based HTML tag filtering (<script>, <iframe>, <object>, etc).
 *
 * @author @dailker
 * @param {string} html - The HTML string.
 * @returns {string} The filtered HTML.
 */
export function filterDangerousHTMLTags(html: string): string {
    return html.replace(/<\/?(script|iframe|object|embed|style|link|meta)[^>]*>/gi, '');
}
