"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = take;
// Returns the first n elements of array.
function take(array, n = 1) {
    if (!Array.isArray(array) || n <= 0)
        return [];
    return array.slice(0, n);
}
