"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = reverse;
// Returns a new array with the elements in reverse order.
function reverse(array) {
    if (!Array.isArray(array))
        return [];
    return array.slice().reverse();
}
