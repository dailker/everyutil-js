/**
 * Strips disallowed keys from an object (deep).
 *
 * @author @dailker
 * @param {object} input - The input object.
 * @param {string[]} disallowedKeys - Keys to remove.
 * @returns {object} The sanitized object.
 */
export function blockObjectKeys(input: object, disallowedKeys: string[]): object {
    if (typeof input !== 'object' || input === null) return input;
    const out: any = Array.isArray(input) ? [] : {};
    for (const k in input) {
        if (!disallowedKeys.includes(k)) {
            out[k] = typeof (input as any)[k] === 'object' ? blockObjectKeys((input as any)[k], disallowedKeys) : (input as any)[k];
        }
    }
    return out;
}
