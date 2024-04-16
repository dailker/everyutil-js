/**
 * Creates an auto-reconnecting WebSocket client.
 *
 * Example: webSocketReconnect(url, { onMessage, maxRetries: 3 })
 *
 * @author @dailker
 * @param {string} url - The WebSocket URL.
 * @param {{ onOpen?: Function, onMessage?: Function, onClose?: Function, onError?: Function, maxRetries?: number, retryDelay?: number }} options - Handlers and options.
 * @returns {() => WebSocket} Function to get the current WebSocket instance.
 */
export function webSocketReconnect(
  url: string,
  options: {
    onOpen?: (ev: Event) => void,
    onMessage?: (ev: MessageEvent) => void,
    onClose?: (ev: CloseEvent) => void,
    onError?: (ev: Event) => void,
    maxRetries?: number,
    retryDelay?: number
  }
): () => WebSocket {
  let ws: WebSocket | null = null;
  let retries = 0;
  const max = options.maxRetries ?? 5;
  const delay = options.retryDelay ?? 1000;
  function connect() {
    ws = new WebSocket(url);
    if (options.onOpen) ws.addEventListener('open', options.onOpen as EventListener);
    if (options.onMessage) ws.addEventListener('message', options.onMessage as EventListener);
    if (options.onError) ws.addEventListener('error', options.onError as EventListener);
    ws.addEventListener('close', (ev) => {
      if (options.onClose) options.onClose(ev);
      if (retries < max) {
        retries++;
        setTimeout(connect, delay);
      }
    });
  }
  connect();
  return () => ws!;
}
