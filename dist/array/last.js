"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = last;
/**
 * Gets the last element of array.
 * @author dailker
 * @param arr - The array to query.
 * @returns The last element, or undefined.
 */
function last(arr) {
    return arr.length ? arr[arr.length - 1] : undefined;
}
