"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nth = nth;
// Gets the element at index n. If n is negative, returns from the end.
function nth(array, n) {
    if (!Array.isArray(array))
        return undefined;
    if (n < 0)
        n = array.length + n;
    return array[n];
}
