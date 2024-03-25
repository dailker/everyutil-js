/**
 * Creates a quick WebSocket client wrapper with event handlers.
 *
 * Example: createWebSocketClient(url, { onOpen, onMessage })
 *
 * @author @dailker
 * @param {string} url - The WebSocket URL.
 * @param {{ onOpen?: (ev: Event) => void, onMessage?: (ev: MessageEvent) => void, onClose?: (ev: CloseEvent) => void, onError?: (ev: Event) => void }} handlers - Event handlers.
 * @returns {WebSocket} The WebSocket instance.
 */
export function createWebSocketClient(
  url: string,
  handlers: {
    onOpen?: (ev: Event) => void,
    onMessage?: (ev: MessageEvent) => void,
    onClose?: (ev: CloseEvent) => void,
    onError?: (ev: Event) => void
  }
): WebSocket {
  const ws = new WebSocket(url);
  if (handlers.onOpen) ws.addEventListener('open', handlers.onOpen as EventListener);
  if (handlers.onMessage) ws.addEventListener('message', handlers.onMessage as EventListener);
  if (handlers.onClose) ws.addEventListener('close', handlers.onClose as EventListener);
  if (handlers.onError) ws.addEventListener('error', handlers.onError as EventListener);
  return ws;
}
