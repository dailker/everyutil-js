/**
 * Formats a date relative to today (e.g., "3 days ago").
 * @author @dailker
 * @param {Date} date
 * @returns {string}
 */
export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diff = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return 'today';
  if (diff === 1) return 'tomorrow';
  if (diff === -1) return 'yesterday';
  if (diff > 1) return `in ${diff} days`;
  return `${-diff} days ago`;
}
