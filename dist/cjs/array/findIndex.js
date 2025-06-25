"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = findIndex;
/**
 * Returns the index of the first element predicate returns truthy for.
 * @author dailker
 * @param arr - The array to search.
 * @param predicate - The function invoked per iteration.
 * @returns The index of the found element, else -1.
 */
function findIndex(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr))
            return i;
    }
    return -1;
}
