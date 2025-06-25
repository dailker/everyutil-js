"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = set;
/**
 * Sets the value at path of object.
 * @author dailker
 * @param obj - The object to modify.
 * @param path - The path of the property to set.
 * @param value - The value to set.
 * @returns The updated object.
 * @category Object
 * @example
 * set({}, 'a.b', 2); // { a: { b: 2 } }
 */
function set(obj, path, value) {
    if (!obj)
        return obj;
    const keys = Array.isArray(path) ? path : path.split('.');
    let curr = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!curr[keys[i]])
            curr[keys[i]] = {};
        curr = curr[keys[i]];
    }
    curr[keys[keys.length - 1]] = value;
    return obj;
}
