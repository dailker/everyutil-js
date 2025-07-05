"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = difference;
/**
 * Returns the difference between the first array and all others.
 * @author dailker
 * @param arr - The array to compare.
 * @param others - Arrays to exclude values from.
 * @returns Elements in arr not present in any of the others.
 */
function difference(arr, ...others) {
    const exclude = new Set(others.flat());
    return arr.filter(x => !exclude.has(x));
}
