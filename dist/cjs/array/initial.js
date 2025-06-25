"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial = initial;
/**
 * Gets all but the last element of array.
 * @author dailker
 * @param arr - The array to query.
 * @returns A slice of array excluding the last element.
 */
function initial(arr) {
    return arr.slice(0, -1);
}
