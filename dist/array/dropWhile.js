"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropWhile = dropWhile;
/**
 * Creates a slice of array with elements dropped from the beginning while predicate returns truthy.
 * @author dailker
 * @param arr - The array to query.
 * @param predicate - The function invoked per iteration.
 * @returns The slice of array.
 */
function dropWhile(arr, predicate) {
    let i = 0;
    while (i < arr.length && predicate(arr[i], i, arr))
        i++;
    return arr.slice(i);
}
