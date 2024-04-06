/**
 * Temporarily mocks global fetch for a single URL/response pair.
 *
 * Example: mockFetchOnce('/api', { status: 200, body: 'ok' })
 *
 * @author @dailker
 * @param {string} url - The URL to mock.
 * @param {{ status?: number, body?: any, headers?: Record<string, string> }} response - The mock response.
 * @returns {() => void} Restore function.
 */
export function mockFetchOnce(url: string, response: { status?: number, body?: any, headers?: Record<string, string> }): () => void {
  const origFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    if (!called && ((typeof input === 'string' && input === url) || (input instanceof Request && input.url === url) || (input instanceof URL && input.toString() === url))) {
      called = true;
      return new Response(response.body !== undefined ? JSON.stringify(response.body) : '', {
        status: response.status || 200,
        headers: response.headers || { 'Content-Type': 'application/json' },
      });
    }
    return origFetch(input, init);
  };
  return () => { globalThis.fetch = origFetch; };
}
