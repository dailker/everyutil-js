"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compact = compact;
/**
 * Removes all falsy values from an array, or by a custom predicate.
 * @author dailker
 * @param arr - The array to compact.
 * @param predicate - Optional custom filter function.
 * @returns A new array with falsy or unwanted values removed.
 */
function compact(arr, predicate) {
    return predicate ? arr.filter(predicate) : arr.filter(Boolean);
}
