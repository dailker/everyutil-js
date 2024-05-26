/**
 * Checks global prototypes for tampering (e.g., Array, Object).
 *
 * @author @dailker
 * @returns {boolean} True if tampering detected.
 */
export function detectPrototypeOverwrite(): boolean {
    return Object.prototype.hasOwnProperty('polluted') || Array.prototype.hasOwnProperty('polluted');
}
