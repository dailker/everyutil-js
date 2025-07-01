/**
 * Checks if a value is a boolean.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 * @category Lang
 * @example
 * isBoolean(true); // true
 * isBoolean('false'); // false
 */
// Checks if value is a boolean.
export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
}
