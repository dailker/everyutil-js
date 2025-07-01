"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = shuffle;
/**
 * Returns a new array with elements shuffled randomly.
 * @author dailker
 * @param arr - The array to shuffle.
 * @returns The shuffled array.
 */
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
