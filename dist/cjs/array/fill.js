"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = fill;
/**
 * Fills elements of array with value from start up to, but not including, end.
 * @author dailker
 * @param arr - The array to fill.
 * @param value - The value to fill array with.
 * @param start - The start position (default 0).
 * @param end - The end position (default arr.length).
 * @returns The modified array.
 */
function fill(arr, value, start = 0, end = arr.length) {
    for (let i = start; i < end && i < arr.length; i++) {
        arr[i] = value;
    }
    return arr;
}
