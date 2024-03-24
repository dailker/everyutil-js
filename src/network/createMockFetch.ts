/**
 * Creates a mock fetch implementation from a route-to-response mapping.
 *
 * Example: const mock = createMockFetch({ '/api': { status: 200, body: 'ok' } })
 *
 * @author @dailker
 * @param {Record<string, { status?: number, body?: any, headers?: Record<string, string> }>} responseMap - Route to response mapping.
 * @returns {(input: RequestInfo, init?: RequestInit) => Promise<Response>} Mock fetch function.
 */
export function createMockFetch(responseMap: Record<string, { status?: number, body?: any, headers?: Record<string, string> }>): (input: RequestInfo, init?: RequestInit) => Promise<Response> {
  return async (input, _init) => {
    const url = typeof input === 'string' ? input : input.url;
    const match = responseMap[url] || responseMap['*'];
    if (!match) return new Response('Not Found', { status: 404 });
    return new Response(match.body !== undefined ? JSON.stringify(match.body) : '', {
      status: match.status || 200,
      headers: match.headers || { 'Content-Type': 'application/json' },
    });
  };
}
