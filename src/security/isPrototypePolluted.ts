/**
 * Checks for prototype pollution in an object.
 *
 * @author @dailker
 * @param {object} obj - The object to check.
 * @returns {boolean} True if polluted, false otherwise.
 */
export function isPrototypePolluted(obj: object): boolean {
    return '__proto__' in obj || 'constructor' in obj && typeof (obj as any).constructor === 'function' && 'prototype' in (obj as any).constructor;
}
