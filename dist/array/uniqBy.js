"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqBy = uniqBy;
/**
 * Returns unique elements, using the result of iteratee for comparison.
 * @author dailker
 * @param arr - The array to process.
 * @param iteratee - Function to produce the value to compare.
 * @returns Array of unique elements.
 */
function uniqBy(arr, iteratee) {
    const seen = new Set();
    return arr.filter(item => {
        const val = iteratee(item);
        if (seen.has(val))
            return false;
        seen.add(val);
        return true;
    });
}
