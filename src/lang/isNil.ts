/**
 * Checks if value is null or undefined.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is null or undefined, otherwise false.
 * @category Lang
 * @example
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 */
export function isNil(value: any): value is null | undefined {
    return value == null;
}
