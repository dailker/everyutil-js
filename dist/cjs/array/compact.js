"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compact = compact;
/**
 * Removes all falsy values from an array.
 * @author dailker
 * @param arr - The array to compact.
 * @returns A new array with falsy values removed.
 */
function compact(arr) {
    return arr.filter(Boolean);
}
