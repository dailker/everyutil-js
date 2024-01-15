/**
 * Obscures an email address, hiding all but the first character and domain.
 *
 * Example: obscureEmail("john.doe@gmail.com") → "j***@gmail.com"
 *
 * @author @dailker
 * @param {string} email - The email address to obscure.
 * @returns {string} The obscured email.
 */
export function obscureEmail(email: string): string {
  return email.replace(/^(.).+(@.+)$/, (_, a, b) => a + '***' + b);
}
