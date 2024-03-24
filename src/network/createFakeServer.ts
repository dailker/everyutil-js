/**
 * Creates a lightweight local mock server with route responses (browser only, Service Worker style).
 *
 * Example: createFakeServer({ '/api': { status: 200, body: 'ok' } })
 *
 * @author @dailker
 * @param {Record<string, { status?: number, body?: any, headers?: Record<string, string> }>} routes - Route to response mapping.
 * @returns {() => void} Function to unregister the fake server.
 */
export function createFakeServer(routes: Record<string, { status?: number, body?: any, headers?: Record<string, string> }>): () => void {
  const origFetch = globalThis.fetch;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    let url: string;
    if (typeof input === 'string') url = input;
    else if (input instanceof Request) url = input.url;
    else if (input instanceof URL) url = input.toString();
    else url = String(input);
    const match = routes[url] || routes['*'];
    if (!match) return new Response('Not Found', { status: 404 });
    return new Response(match.body !== undefined ? JSON.stringify(match.body) : '', {
      status: match.status || 200,
      headers: match.headers || { 'Content-Type': 'application/json' },
    });
  };
  return () => { globalThis.fetch = origFetch; };
}
