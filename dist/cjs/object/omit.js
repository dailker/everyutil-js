"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = omit;
/**
 * Returns a new object omitting the provided keys.
 * @author dailker
 * @param obj - The source object.
 * @param keys - The keys to omit from the object.
 * @returns A new object without the specified keys.
 * @category Object
 * @example
 * omit({ a: 1, b: 2 }, ['a']); // { b: 2 }
 */
function omit(obj, keys) {
    if (!obj)
        return {};
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}
