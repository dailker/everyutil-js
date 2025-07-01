"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceBy = differenceBy;
/**
 * Returns the difference between arrays, using an iteratee to compute comparison values.
 * @author dailker
 * @param arr - The array to compare.
 * @param others - Arrays to exclude values from.
 * @param iteratee - Function invoked per element for comparison.
 * @returns Elements in arr not present in any of the others, by iteratee.
 */
function differenceBy(arr, others, iteratee) {
    const exclude = new Set(others.flat().map(iteratee));
    return arr.filter(x => !exclude.has(iteratee(x)));
}
