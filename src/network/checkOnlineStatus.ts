/**
 * Detects if the client is online using navigator.onLine or a test ping.
 *
 * Example: checkOnlineStatus() → true
 *
 * @author @dailker
 * @returns {Promise<boolean>} True if online.
 */
export async function checkOnlineStatus(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
    if (!navigator.onLine) return false;
  }
  try {
    const res = await fetch('https://api.ipify.org?format=json', { method: 'HEAD', cache: 'no-store' });
    return res.ok;
  } catch {
    return false;
  }
}
