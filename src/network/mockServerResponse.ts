/**
 * Mocks server response for a method/route with a handler function.
 *
 * Example: mockServerResponse('GET', '/api', (req) => ...)
 *
 * @author @dailker
 * @param {string} method - HTTP method.
 * @param {string} route - Route to match.
 * @param {(req: Request) => Response|Promise<Response>} handler - Handler function.
 * @returns {() => void} Restore function.
 */
export function mockServerResponse(method: string, route: string, handler: (req: Request) => Response | Promise<Response>): () => void {
  const origFetch = globalThis.fetch;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    let req: Request;
    if (input instanceof Request) req = input;
    else req = new Request(input, init);
    if (req.method.toUpperCase() === method.toUpperCase() && req.url === route) {
      return await handler(req);
    }
    return origFetch(input, init);
  };
  return () => { globalThis.fetch = origFetch; };
}
