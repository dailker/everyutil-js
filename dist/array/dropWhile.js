"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropWhile = dropWhile;
// Drops elements from the start while predicate returns truthy.
function dropWhile(array, predicate) {
    if (!Array.isArray(array))
        return [];
    let i = 0;
    while (i < array.length && predicate(array[i], i, array))
        i++;
    return array.slice(i);
}
