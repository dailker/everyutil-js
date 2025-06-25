"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = last;
// Gets the last element of array.
function last(arr) {
    return arr.length ? arr[arr.length - 1] : undefined;
}
