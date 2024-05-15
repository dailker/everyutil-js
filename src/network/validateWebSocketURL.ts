/**
 * Checks if a string is a valid WebSocket URL (ws:// or wss://).
 *
 * @author @dailker
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateWebSocketURL(url: string): boolean {
  return /^wss?:\/\//.test(url);
}
