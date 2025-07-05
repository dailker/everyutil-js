"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = clamp;
/**
 * Clamps a number within the inclusive [min, max] range.
 * @author dailker
 * @param num - The number to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped number.
 */
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
