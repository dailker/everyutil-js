/**
 * Checks if value is a string.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a string, otherwise false.
 * @category Lang
 * @example
 * isString('hello'); // true
 * isString(123); // false
 */
export function isString(value: any): value is string {
    return typeof value === 'string';
}
