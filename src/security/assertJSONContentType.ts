/**
 * Validates that Content-Type is application/json for JSON endpoints.
 *
 * @author @dailker
 * @param {Record<string, string>} headers - The request headers.
 * @returns {boolean} True if safe.
 */
export function assertJSONContentType(headers: Record<string, string>): boolean {
    return /application\/json/i.test(headers['content-type'] || '');
}
