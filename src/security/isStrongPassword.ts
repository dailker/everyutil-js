/**
 * Checks if a password is strong (min 8 chars, upper, lower, digit, special).
 *
 * @author @dailker
 * @param {string} pwd - The password to check.
 * @returns {boolean} True if strong, false otherwise.
 */
export function isStrongPassword(pwd: string): boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
}
