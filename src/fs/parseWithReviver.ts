/**
 * Parses JSON with a custom reviver function.
 *
 * @author @dailker
 * @template T
 * @param {string} json - The JSON string to parse.
 * @param {(key: string, value: any) => any} reviver - The reviver function.
 * @returns {T} The parsed object.
 */
export function parseWithReviver<T>(json: string, reviver: (key: string, value: any) => any): T {
    return JSON.parse(json, reviver);
}
