/**
 * Validates an email transport URL (smtp://, smtps://, etc).
 *
 * Example: isValidEmailURL('smtp://user:pass@host:25') → true
 *
 * @author @dailker
 * @param {string} url - The email URL.
 * @returns {boolean} True if valid.
 */
export function isValidEmailURL(url: string): boolean {
  try {
    const u = new URL(url);
    return /^(smtp|smtps|imap|pop3):$/.test(u.protocol);
  } catch {
    return false;
  }
}
