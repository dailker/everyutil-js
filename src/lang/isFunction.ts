/**
 * Checks if value is a function.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a function, otherwise false.
 * @category Lang
 * @example
 * isFunction(() => {}); // true
 * isFunction(123); // false
 */
export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}
