/**
 * Removes SQL meta-characters to prevent SQL injection.
 *
 * @author @dailker
 * @param {string} input - The input string.
 * @returns {string} The sanitized string.
 */
export function stripSQLMeta(input: string): string {
    return input.replace(/[;\'"`--]/g, '');
}
