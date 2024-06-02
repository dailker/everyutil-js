/**
 * Tries to parse JSON, returns fallback on error.
 *
 * @author @dailker
 * @template T
 * @param {string} str - The JSON string.
 * @param {T} fallback - The fallback value.
 * @returns {T} The parsed object or fallback.
 */
export function safeJSONParse<T>(str: string, fallback: T): T {
    try {
        return JSON.parse(str) as T;
    } catch {
        return fallback;
    }
}
