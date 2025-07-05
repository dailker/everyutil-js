/**
 * Checks if value is an object (not null).
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is an object and not null, otherwise false.
 * @category Lang
 * @example
 * isObject({}); // true
 * isObject(null); // false
 */
export function isObject(value: any): value is object {
    return typeof value === 'object' && value !== null;
}
