"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection = intersection;
/**
 * Returns the intersection of two arrays.
 * @author dailker
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns Elements present in both arrays.
 */
function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
