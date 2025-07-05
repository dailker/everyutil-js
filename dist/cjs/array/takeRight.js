"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeRight = takeRight;
// Returns the last n elements of array.
function takeRight(array, n = 1) {
    if (!Array.isArray(array) || n <= 0)
        return [];
    return array.slice(-n);
}
