/**
 * Validates if a string is a valid email address (basic regex).
 *
 * @author @dailker
 * @param {string} email - The email to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email);
}
