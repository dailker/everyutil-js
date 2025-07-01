"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeRightWhile = takeRightWhile;
// Returns a new array with elements taken from the end while predicate returns truthy.
function takeRightWhile(array, predicate) {
    if (!Array.isArray(array))
        return [];
    let i = array.length;
    while (i-- && predicate(array[i], i, array)) { }
    return array.slice(i + 1);
}
