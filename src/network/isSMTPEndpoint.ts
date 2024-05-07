/**
 * Checks if a URL is a likely SMTP endpoint.
 *
 * @author @dailker
 * @param {string} url - The URL to check.
 * @returns {boolean} True if likely SMTP, false otherwise.
 */
export function isSMTPEndpoint(url: string): boolean {
  return /^smtp:\/\//i.test(url) || /(:25|:465|:587)(\/|$)/.test(url);
}
