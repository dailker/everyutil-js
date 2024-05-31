/**
 * Detects common injection patterns (XSS, SQLi) in a string.
 *
 * @author @dailker
 * @param {string} input - The string to check.
 * @returns {boolean} True if string is safe, false if suspicious patterns found.
 */
export function isSafeString(input: string): boolean {
    const patterns = [
        /<script|<iframe|<object|onerror=|onload=|javascript:/i, // XSS
        /(['"`])\s*;?\s*(or|and)\s*\1?\d+=\d+/i, // SQLi
        /union\s+select/i,
        /drop\s+table/i,
        /--|\/\*/
    ];
    return !patterns.some(re => re.test(input));
}
