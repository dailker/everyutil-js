/**
 * Proxies global fetch to record all requests and responses.
 *
 * Example: const history = recordFetchHistory();
 *
 * @author @dailker
 * @returns {Array<{ input: RequestInfo | URL, init?: RequestInit, response?: Response, error?: any }>} The fetch history array.
 */
export function recordFetchHistory() {
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
  return history;
}
