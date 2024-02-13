/**
 * Wraps an object in a Proxy to trap gets/sets or enforce rules.
 * @author @dailker
 * @param {object} obj
 * @param {ProxyHandler<any>} handler
 * @returns {object}
 */
export function objectProxyGuard(obj: object, handler: ProxyHandler<any>): object {
  return new Proxy(obj, handler);
}
