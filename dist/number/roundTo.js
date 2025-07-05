"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundTo = roundTo;
/**
 * Rounds a number to a specified number of decimal places.
 * @author dailker
 * @param num - The number to round.
 * @param decimals - The number of decimal places.
 * @returns The rounded number.
 */
function roundTo(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
