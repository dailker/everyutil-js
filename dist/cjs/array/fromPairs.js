"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPairs = fromPairs;
/**
 * Creates an object from an array of key-value pairs.
 * @author dailker
 * @param pairs - The array of key-value pairs.
 * @returns The composed object.
 */
function fromPairs(pairs) {
    const result = {};
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
}
