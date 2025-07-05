/**
 * Checks if value is an array.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is an array, otherwise false.
 * @category Lang
 * @example
 * isArray([1, 2, 3]); // true
 * isArray('abc'); // false
 */
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}
