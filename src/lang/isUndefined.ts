/**
 * Checks if value is undefined.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is undefined, otherwise false.
 * @category Lang
 * @example
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 */
export function isUndefined(value: any): value is undefined {
    return value === undefined;
}
