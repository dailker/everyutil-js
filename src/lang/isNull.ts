/**
 * Checks if value is null.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is null, otherwise false.
 * @category Lang
 * @example
 * isNull(null); // true
 * isNull(undefined); // false
 */
export function isNull(value: any): value is null {
    return value === null;
}
