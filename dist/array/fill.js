"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = fill;
// Fills elements of array with value from start up to, but not including, end.
function fill(array, value, start = 0, end = array.length) {
    if (!Array.isArray(array))
        return [];
    const result = array.slice();
    for (let i = start; i < end && i < result.length; i++) {
        result[i] = value;
    }
    return result;
}
