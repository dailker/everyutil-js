"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial = initial;
// Returns all but the last element of array.
function initial(array) {
    if (!Array.isArray(array))
        return [];
    return array.slice(0, -1);
}
