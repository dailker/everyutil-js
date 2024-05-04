/**
 * Creates a mailto: URL from components.
 *
 * Example: formatMailtoLink({ to: 'a@b.com', subject: 'Hi', body: 'Hello' })
 *
 * @author @dailker
 * @param {{ to: string, cc?: string, bcc?: string, subject?: string, body?: string }} opts - Mailto components.
 * @returns {string} The mailto URL.
 */
export function formatMailtoLink(opts: { to: string, cc?: string, bcc?: string, subject?: string, body?: string }): string {
  const params = new URLSearchParams();
  if (opts.cc) params.set('cc', opts.cc);
  if (opts.bcc) params.set('bcc', opts.bcc);
  if (opts.subject) params.set('subject', opts.subject);
  if (opts.body) params.set('body', opts.body);
  return `mailto:${encodeURIComponent(opts.to)}${params.toString() ? '?' + params.toString() : ''}`;
}
