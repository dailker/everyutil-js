"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = truncate;
/**
 * Truncates a string to a specified length and appends an ending if needed.
 * @author dailker
 * @param str - The string to truncate.
 * @param length - The maximum length of the result string.
 * @param ending - The string to append if truncation occurs (default: '...').
 * @returns The truncated string.
 */
function truncate(str, length, ending = '...') {
    if (str.length <= length)
        return str;
    return str.slice(0, length - ending.length) + ending;
}
