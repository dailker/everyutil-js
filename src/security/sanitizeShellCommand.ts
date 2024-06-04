/**
 * Ensures string is safe to use in shell (complementary to escapeShellArg).
 *
 * @author @dailker
 * @param {string} input - The input string.
 * @returns {string} The sanitized string.
 */
export function sanitizeShellCommand(input: string): string {
    return input.replace(/[;&|$><`\\]/g, '');
}
