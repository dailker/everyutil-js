"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = pick;
/**
 * Returns a new object with only the provided keys.
 * @author dailker
 * @param obj - The source object.
 * @param keys - The keys to pick from the object.
 * @returns A new object with only the specified keys.
 * @category Object
 * @example
 * pick({ a: 1, b: 2 }, ['a']); // { a: 1 }
 */
function pick(obj, keys) {
    if (!obj)
        return {};
    const result = {};
    for (const key of keys) {
        if (key in obj)
            result[key] = obj[key];
    }
    return result;
}
