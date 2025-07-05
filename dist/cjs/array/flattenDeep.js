"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenDeep = flattenDeep;
/**
 * Recursively flattens an array.
 * @author dailker
 * @param arr - The array to flatten.
 * @returns The deeply flattened array.
 */
function flattenDeep(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten), []);
}
