"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tail = tail;
// Returns the tail of the array (all but the first element).
function tail(array) {
    if (!Array.isArray(array))
        return [];
    return array.slice(1);
}
