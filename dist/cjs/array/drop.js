"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = drop;
// Creates a slice of array with n elements dropped from the beginning.
function drop(arr, n = 1) {
    return arr.slice(n);
}
