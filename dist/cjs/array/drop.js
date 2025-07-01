"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = drop;
/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @author dailker
 * @param arr - The array to process.
 * @param n - The number of elements to drop.
 * @returns The sliced array.
 */
function drop(arr, n = 1) {
    return arr.slice(n);
}
