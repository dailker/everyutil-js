/**
 * Safely parses JSON without throwing on invalid input.
 *
 * @author @dailker
 * @template T
 * @param {string} json - The JSON string to parse.
 * @returns {T | null} The parsed object or null if invalid.
 */
export function safeParseJSON<T>(json: string): T | null {
    try {
        return JSON.parse(json) as T;
    } catch {
        return null;
    }
}
