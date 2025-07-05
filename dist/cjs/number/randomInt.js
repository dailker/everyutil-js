"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = randomInt;
/**
 * Returns a random integer between min and max (inclusive).
 * @author dailker
 * @param min - The minimum integer.
 * @param max - The maximum integer.
 * @returns A random integer in the range [min, max].
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
