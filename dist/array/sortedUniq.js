"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedUniq = sortedUniq;
// Returns the unique values from a sorted array.
function sortedUniq(array) {
    if (!Array.isArray(array) || array.length === 0)
        return [];
    const result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1])
            result.push(array[i]);
    }
    return result;
}
