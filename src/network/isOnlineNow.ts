/**
 * Checks if online using navigator.onLine and a test ping.
 *
 * @author @dailker
 * @param {string} [testURL] - Optional URL to ping.
 * @returns {Promise<boolean>} True if online, false otherwise.
 */
export async function isOnlineNow(testURL?: string): Promise<boolean> {
  if (!navigator.onLine) return false;
  if (!testURL) return true;
  try {
    const res = await fetch(testURL, { method: 'HEAD', cache: 'no-store' });
    return res.ok;
  } catch {
    return false;
  }
}
