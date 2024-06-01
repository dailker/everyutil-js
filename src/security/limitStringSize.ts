/**
 * Limits a string to a maximum byte size (UTF-8).
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {number} maxBytes - Maximum allowed bytes.
 * @returns {string} The truncated string.
 */
export function limitStringSize(str: string, maxBytes: number): string {
    let bytes = 0, i = 0;
    for (; i < str.length; i++) {
        bytes += Buffer.byteLength(str[i], 'utf8');
        if (bytes > maxBytes) break;
    }
    return str.slice(0, i);
}
