/**
 * Converts duration in ms to human-readable form (e.g., "2 hours 5 minutes").
 * @author @dailker
 * @param {number} ms
 * @returns {string}
 */
export function humanizeDuration(ms: number): string {
  const sec = Math.floor(ms / 1000) % 60;
  const min = Math.floor(ms / 60000) % 60;
  const hr = Math.floor(ms / 3600000) % 24;
  const day = Math.floor(ms / 86400000);
  const parts = [];
  if (day) parts.push(`${day} day${day > 1 ? 's' : ''}`);
  if (hr) parts.push(`${hr} hour${hr > 1 ? 's' : ''}`);
  if (min) parts.push(`${min} minute${min > 1 ? 's' : ''}`);
  if (sec) parts.push(`${sec} second${sec > 1 ? 's' : ''}`);
  return parts.length ? parts.join(' ') : '0 seconds';
}
