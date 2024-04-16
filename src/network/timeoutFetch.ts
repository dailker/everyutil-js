/**
 * Aborts a fetch if it takes longer than ms.
 *
 * Example: timeoutFetch(fetchFn, 1000)
 *
 * @author @dailker
 * @param {(signal: AbortSignal) => Promise<any>} fetchFn - Fetch function accepting AbortSignal.
 * @param {number} ms - Timeout in ms.
 * @returns {Promise<any>} The fetch result or throws on timeout.
 */
export async function timeoutFetch(fetchFn: (signal: AbortSignal) => Promise<any>, ms: number): Promise<any> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    return await fetchFn(controller.signal);
  } finally {
    clearTimeout(timeout);
  }
}
