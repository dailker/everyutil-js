"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
// Gets the value at path of object.
function get(obj, path, defaultValue) {
    if (!obj)
        return defaultValue;
    const keys = Array.isArray(path) ? path : path.split('.');
    let result = obj;
    for (const key of keys) {
        if (result == null)
            return defaultValue;
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
}
