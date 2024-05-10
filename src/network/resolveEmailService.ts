/**
 * Maps an email domain to a common SMTP provider.
 *
 * Example: resolveEmailService('gmail.com') → 'smtp.gmail.com'
 *
 * @author @dailker
 * @param {string} domain - Email domain.
 * @returns {string|null} SMTP host or null if unknown.
 */
export function resolveEmailService(domain: string): string | null {
  const map: Record<string, string> = {
    'gmail.com': 'smtp.gmail.com',
    'outlook.com': 'smtp-mail.outlook.com',
    'hotmail.com': 'smtp-mail.outlook.com',
    'yahoo.com': 'smtp.mail.yahoo.com',
    'icloud.com': 'smtp.mail.me.com',
    'aol.com': 'smtp.aol.com',
    'zoho.com': 'smtp.zoho.com',
    'protonmail.com': 'smtp.protonmail.com',
    'mail.com': 'smtp.mail.com',
  };
  return map[domain.toLowerCase()] || null;
}
