"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique = unique;
/**
 * Returns a new array with only unique elements.
 * @author dailker
 * @param arr - The array to process.
 * @returns An array of unique elements.
 */
function unique(arr) {
    return Array.from(new Set(arr));
}
