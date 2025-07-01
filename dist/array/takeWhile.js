"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhile = takeWhile;
// Returns a new array with elements taken from the start while predicate returns truthy.
function takeWhile(array, predicate) {
    if (!Array.isArray(array))
        return [];
    let i = 0;
    while (i < array.length && predicate(array[i], i, array))
        i++;
    return array.slice(0, i);
}
