/**
 * Enforces password policy (length, entropy, blacklist, etc).
 *
 * @author @dailker
 * @param {string} password - The password to check.
 * @param {object} options - Policy options (minLength, blacklist, etc).
 * @returns {boolean} True if password passes policy.
 */
export function enforcePasswordPolicy(password: string, options: { minLength?: number, blacklist?: string[], requireUpper?: boolean, requireLower?: boolean, requireDigit?: boolean, requireSpecial?: boolean } = {}): boolean {
    if (options.minLength && password.length < options.minLength) return false;
    if (options.blacklist && options.blacklist.includes(password)) return false;
    if (options.requireUpper && !/[A-Z]/.test(password)) return false;
    if (options.requireLower && !/[a-z]/.test(password)) return false;
    if (options.requireDigit && !/\d/.test(password)) return false;
    if (options.requireSpecial && !/[^\w\s]/.test(password)) return false;
    return true;
}
