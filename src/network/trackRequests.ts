/**
 * Wraps fetch to collect all request data during a function call.
 *
 * Example: trackRequests(async () => { ... }) → [{ input, init, response }]
 *
 * @author @dailker
 * @param {() => Promise<any>} fn - Function to run while tracking.
 * @returns {Promise<Array<{ input: RequestInfo | URL, init?: RequestInit, response?: Response, error?: any }>>} Array of tracked requests.
 */
export async function trackRequests(fn: () => Promise<any>): Promise<Array<{ input: RequestInfo | URL, init?: RequestInit, response?: Response, error?: any }>> {
  const history: Array<{ input: RequestInfo | URL, init?: RequestInit, response?: Response, error?: any }> = [];
  const origFetch = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const entry: any = { input, init };
    try {
      entry.response = await origFetch(input, init);
      return entry.response;
    } catch (e) {
      entry.error = e;
      throw e;
    } finally {
      history.push(entry);
    }
  }) as typeof fetch;
  try {
    await fn();
  } finally {
    globalThis.fetch = origFetch;
  }
  return history;
}
