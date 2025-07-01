"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = pick;
// Returns a new object with only the provided keys.
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
