"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLastIndex = findLastIndex;
/**
 * Returns the index of the last element predicate returns truthy for.
 * @author dailker
 * @param arr - The array to search.
 * @param predicate - The function invoked per iteration.
 * @returns The index of the found element, else -1.
 */
function findLastIndex(arr, predicate) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i], i, arr))
            return i;
    }
    return -1;
}
