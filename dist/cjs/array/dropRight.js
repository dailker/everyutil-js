"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropRight = dropRight;
/**
 * Creates a slice of array with n elements dropped from the end.
 * @author dailker
 * @param arr - The array to process.
 * @param n - The number of elements to drop.
 * @returns The sliced array.
 */
function dropRight(arr, n = 1) {
    return arr.slice(0, arr.length - n);
}
