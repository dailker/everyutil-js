"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = findIndex;
// Returns the index of the first element predicate returns truthy for.
function findIndex(array, predicate) {
    if (!Array.isArray(array))
        return -1;
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array))
            return i;
    }
    return -1;
}
