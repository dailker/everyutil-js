"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = has;
/**
 * Checks if path exists in object.
 * @author dailker
 * @param obj - The object to query.
 * @param path - The path to check.
 * @returns True if the path exists, otherwise false.
 * @category Object
 * @example
 * has({ a: { b: 2 } }, 'a.b'); // true
 */
function has(obj, path) {
    if (!obj)
        return false;
    const keys = Array.isArray(path) ? path : path.split('.');
    let curr = obj;
    for (const key of keys) {
        if (!Object.prototype.hasOwnProperty.call(curr, key))
            return false;
        curr = curr[key];
    }
    return true;
}
