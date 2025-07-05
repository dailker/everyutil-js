"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedUniqBy = sortedUniqBy;
// Returns the unique values from a sorted array using an iteratee.
function sortedUniqBy(array, iteratee) {
    if (!Array.isArray(array) || array.length === 0)
        return [];
    const result = [array[0]];
    let prev = iteratee(array[0]);
    for (let i = 1; i < array.length; i++) {
        const computed = iteratee(array[i]);
        if (computed !== prev) {
            result.push(array[i]);
            prev = computed;
        }
    }
    return result;
}
