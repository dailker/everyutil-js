/**
 * Converts an http(s) URL to a ws(s) WebSocket URL.
 *
 * @author @dailker
 * @param {string} url - The HTTP/HTTPS URL.
 * @returns {string} The WebSocket URL.
 */
export function parseWebSocketURL(url: string): string {
  return url.replace(/^http/, 'ws');
}
