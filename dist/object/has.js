"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = has;
// Checks if path exists in object.
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
