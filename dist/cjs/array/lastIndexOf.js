"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastIndexOf = lastIndexOf;
// Returns the index of the last occurrence of value in array.
function lastIndexOf(array, value, fromIndex) {
    if (!Array.isArray(array))
        return -1;
    let i = fromIndex === undefined ? array.length - 1 : fromIndex;
    for (; i >= 0; i--) {
        if (array[i] === value)
            return i;
    }
    return -1;
}
