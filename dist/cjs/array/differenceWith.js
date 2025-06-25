"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceWith = differenceWith;
/**
 * Returns the difference between arrays, using a comparator function.
 * @author dailker
 * @param arr - The array to inspect.
 * @param others - The arrays to compare against.
 * @param comparator - The comparator invoked per element.
 * @returns Elements in arr not present in others, compared by comparator.
 */
function differenceWith(arr, others, comparator) {
    const flatOthers = others.flat();
    return arr.filter(a => !flatOthers.some(b => comparator(a, b)));
}
