/**
 * Waits until the browser is back online.
 *
 * @author @dailker
 * @returns {Promise<void>} Resolves when online.
 */
export function awaitOnline(): Promise<void> {
  if (navigator.onLine) return Promise.resolve();
  return new Promise(resolve => {
    window.addEventListener('online', () => resolve(), { once: true });
  });
}
