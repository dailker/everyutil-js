/**
 * Detects online/offline changes and invokes a callback.
 *
 * @author @dailker
 * @param {(online: boolean) => void} cb - Callback for status changes.
 * @returns {() => void} Unsubscribe function.
 */
export function checkNetworkStatus(cb: (online: boolean) => void): () => void {
  const handler = () => cb(navigator.onLine);
  window.addEventListener('online', handler);
  window.addEventListener('offline', handler);
  return () => {
    window.removeEventListener('online', handler);
    window.removeEventListener('offline', handler);
  };
}
