"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = flatten;
/**
 * Flattens a nested array recursively.
 * @author dailker
 * @param arr - The array to flatten.
 * @returns The flattened array.
 */
function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}
