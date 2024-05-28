/**
 * Escapes a string for safe use in RegExp.
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The escaped string.
 */
export function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
