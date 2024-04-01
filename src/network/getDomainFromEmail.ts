/**
 * Extracts the domain from an email address.
 *
 * Example: getDomainFromEmail("user@example.com") → "example.com"
 *
 * @author @dailker
 * @param {string} email - The email address.
 * @returns {string|null} The domain or null if invalid.
 */
export function getDomainFromEmail(email: string): string | null {
  const match = /@([^@]+)$/.exec(email);
  return match ? match[1] : null;
}
