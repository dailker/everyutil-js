"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = omit;
// Returns a new object omitting the provided keys.
function omit(obj, keys) {
    if (!obj)
        return {};
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}
