"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = slice;
// Returns a new array with the elements from start up to, but not including, end.
function slice(array, start, end) {
    if (!Array.isArray(array))
        return [];
    return array.slice(start, end);
}
