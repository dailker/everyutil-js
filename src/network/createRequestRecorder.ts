/**
 * Records requests and responses for replay/testing.
 *
 * Example: const recorder = createRequestRecorder();
 *
 * @author @dailker
 * @returns {{ history: Array<{ input: RequestInfo | URL, init?: RequestInit, response?: Response, error?: any }>, stop: () => void }} Recorder object.
 */
export function createRequestRecorder() {
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
  return {
    history,
    stop: () => { globalThis.fetch = origFetch; }
  };
}
