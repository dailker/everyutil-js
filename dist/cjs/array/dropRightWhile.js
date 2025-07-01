"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropRightWhile = dropRightWhile;
// Drops elements from the end while predicate returns truthy.
function dropRightWhile(array, predicate) {
    if (!Array.isArray(array))
        return [];
    let i = array.length;
    while (i-- && predicate(array[i], i, array)) { }
    return array.slice(0, i + 1);
}
