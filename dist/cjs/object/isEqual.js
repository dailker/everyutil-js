"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = isEqual;
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @author dailker
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are equivalent, otherwise false.
 * @category Object
 * @example
 * isEqual({ a: 1 }, { a: 1 }); // true
 */
function isEqual(a, b) {
    if (a === b)
        return true;
    if (typeof a !== typeof b)
        return false;
    if (typeof a !== 'object' || a == null || b == null)
        return false;
    if (Array.isArray(a) !== Array.isArray(b))
        return false;
    if (Array.isArray(a)) {
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            if (!isEqual(a[i], b[i]))
                return false;
        }
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length)
        return false;
    for (const key of aKeys) {
        if (!bKeys.includes(key) || !isEqual(a[key], b[key]))
            return false;
    }
    return true;
}
