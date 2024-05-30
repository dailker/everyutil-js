/**
 * Detects prototype pollution or circular structures in parsed JSON.
 *
 * @author @dailker
 * @param {any} data - The parsed JSON data.
 * @returns {boolean} True if safe, false if polluted/circular.
 */
export function isSafeJSONStructure(data: any): boolean {
    const seen = new WeakSet();
    function check(obj: any): boolean {
        if (typeof obj !== 'object' || obj === null) return true;
        if (seen.has(obj)) return false;
        seen.add(obj);
        if ('__proto__' in obj || 'constructor' in obj && typeof obj.constructor === 'function' && 'prototype' in obj.constructor) return false;
        for (const k in obj) if (!check(obj[k])) return false;
        return true;
    }
    return check(data);
}
