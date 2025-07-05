"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
/**
 * Reverses a string.
 * @author dailker
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
