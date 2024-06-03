/**
 * Recursively removes dangerous keys like __proto__, $ from an object.
 *
 * @author @dailker
 * @param {Record<string, any>} obj - The object to sanitize.
 * @returns {Record<string, any>} The sanitized object.
 */
export function sanitizeObject(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) return obj;
    const dangerous = ['__proto__', 'constructor', 'prototype', '$'];
    const clean: Record<string, any> = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (!dangerous.includes(key)) {
            clean[key] = typeof obj[key] === 'object' ? sanitizeObject(obj[key]) : obj[key];
        }
    }
    return clean;
}
