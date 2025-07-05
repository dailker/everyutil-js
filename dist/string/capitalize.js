"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
/**
 * Capitalizes the first letter of a string.
 * @author dailker
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
