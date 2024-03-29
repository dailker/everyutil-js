/**
 * Extracts path parameters from a URL given a route pattern.
 *
 * Example: extractPathParams("/user/123", "/user/:id") → { id: "123" }
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @param {string} routePattern - The route pattern.
 * @returns {Record<string, string>} Extracted params.
 */
export function extractPathParams(url: string, routePattern: string): Record<string, string> {
  const paramNames = [...routePattern.matchAll(/:([^/]+)/g)].map(m => m[1]);
  const regex = new RegExp('^' + routePattern.replace(/:[^/]+/g, '([^/]+)') + '$');
  const match = url.match(regex);
  if (!match) return {};
  const params: Record<string, string> = {};
  paramNames.forEach((name, i) => {
    params[name] = match[i + 1];
  });
  return params;
}
