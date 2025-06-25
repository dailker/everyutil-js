"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = chunk;
/**
 * Splits an array into chunks of a specified size.
 * @author dailker
 * @param arr - The array to chunk.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 */
function chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
