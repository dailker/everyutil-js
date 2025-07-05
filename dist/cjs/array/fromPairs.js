"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPairs = fromPairs;
// Returns an array of grouped elements, the opposite of Object.entries.
function fromPairs(pairs) {
    const result = {};
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
}
