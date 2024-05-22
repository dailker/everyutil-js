/**
 * Serializes an object to JSON, optionally pretty-formatted.
 *
 * @author @dailker
 * @param {any} data - The data to serialize.
 * @param {boolean} [pretty=false] - Pretty-print the JSON output.
 * @returns {string} The JSON string.
 */
export function stringifyJSON(data: any, pretty: boolean = false): string {
    return JSON.stringify(data, null, pretty ? 2 : 0);
}
