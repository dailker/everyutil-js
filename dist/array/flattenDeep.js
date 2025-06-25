"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenDeep = flattenDeep;
// Recursively flattens an array.
function flattenDeep(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten), []);
}
