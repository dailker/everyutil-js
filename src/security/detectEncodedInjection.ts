/**
 * Flags encoded XSS/payloads (e.g., %3Cscript, &#x3C;).
 *
 * @author @dailker
 * @param {string} input - The input string.
 * @returns {boolean} True if encoded injection detected.
 */
export function detectEncodedInjection(input: string): boolean {
    return /(%3C|&#x3C;|&#60;|%253C|%3e|&#x3e;|&#62;)/i.test(input);
}
