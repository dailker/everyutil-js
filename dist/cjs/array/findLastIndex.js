"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLastIndex = findLastIndex;
// Returns the index of the last element predicate returns truthy for.
function findLastIndex(array, predicate) {
    if (!Array.isArray(array))
        return -1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i], i, array))
            return i;
    }
    return -1;
}
