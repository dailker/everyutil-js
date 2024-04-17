/**
 * Buffers the last N messages from a WebSocket.
 *
 * Example: webSocketMessageBuffer(ws, 10)
 *
 * @author @dailker
 * @param {WebSocket} ws - The WebSocket instance.
 * @param {number} bufferSize - Number of messages to retain.
 * @returns {string[]} The message buffer (most recent last).
 */
export function webSocketMessageBuffer(ws: WebSocket, bufferSize: number): string[] {
  const buffer: string[] = [];
  ws.addEventListener('message', (ev: MessageEvent) => {
    buffer.push(ev.data);
    if (buffer.length > bufferSize) buffer.shift();
  });
  return buffer;
}
