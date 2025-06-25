"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nth = nth;
/**
 * Gets the nth element of array. If n is negative, the nth element from the end is returned.
 * @author dailker
 * @param arr - The array to query.
 * @param n - The index of the element to return.
 * @returns The nth element or undefined.
 */
function nth(arr, n = 0) {
    if (!arr.length)
        return undefined;
    if (n < 0)
        n = arr.length + n;
    return arr[n];
}
