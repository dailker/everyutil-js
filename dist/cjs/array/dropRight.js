"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropRight = dropRight;
// Creates a slice of array with n elements dropped from the end.
function dropRight(arr, n = 1) {
    return arr.slice(0, arr.length - n);
}
