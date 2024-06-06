/**
 * Validates password strength as 'weak', 'medium', or 'strong'.
 *
 * @author @dailker
 * @param {string} password - The password to check.
 * @returns {'weak' | 'medium' | 'strong'} The strength rating.
 */
export function validatePasswordStrength(password: string): 'weak' | 'medium' | 'strong' {
    if (password.length < 8) return 'weak';
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/.test(password)) return 'strong';
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) return 'medium';
    return 'weak';
}
