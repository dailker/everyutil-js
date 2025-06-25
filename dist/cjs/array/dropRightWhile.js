"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropRightWhile = dropRightWhile;
/**
 * Creates a slice of array with n elements dropped from the end while predicate returns truthy.
 * @author dailker
 * @param arr - The array to query.
 * @param predicate - The function invoked per iteration.
 * @returns The slice of array.
 */
function dropRightWhile(arr, predicate) {
    let i = arr.length;
    while (i-- && predicate(arr[i], i, arr)) { }
    return arr.slice(0, i + 1);
}
