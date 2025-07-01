"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceWith = differenceWith;
// Returns an array of elements not included in the other arrays, using a comparator function.
function differenceWith(array, values, comparator) {
    if (!Array.isArray(array) || !Array.isArray(values) || typeof comparator !== 'function')
        return [];
    return array.filter(a => !values.some(b => comparator(a, b)));
}
