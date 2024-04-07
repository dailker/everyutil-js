/**
 * Checks if a WebSocket is open.
 *
 * Example: isWebSocketOpen(ws) → true
 *
 * @author @dailker
 * @param {WebSocket} socket - The WebSocket instance.
 * @returns {boolean} True if open.
 */
export function isWebSocketOpen(socket: WebSocket): boolean {
  return socket.readyState === WebSocket.OPEN;
}
