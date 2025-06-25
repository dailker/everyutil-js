"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = difference;
/**
 * Returns the difference between two arrays.
 * @author dailker
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns Elements in arr1 not present in arr2.
 */
function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
