"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = union;
// Returns the union of arrays, removing duplicates.
function union(...arrays) {
    const set = new Set();
    for (const arr of arrays) {
        if (Array.isArray(arr)) {
            for (const item of arr)
                set.add(item);
        }
    }
    return Array.from(set);
}
