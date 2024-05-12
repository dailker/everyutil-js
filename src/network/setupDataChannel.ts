/**
 * Sets up a RTCDataChannel with events and config.
 *
 * Example: setupDataChannel(pc, 'chat', { onMessage })
 *
 * @author @dailker
 * @param {RTCPeerConnection} pc - The peer connection.
 * @param {string} label - Channel label.
 * @param {{ onOpen?: Function, onMessage?: Function, onClose?: Function, onError?: Function, options?: RTCDataChannelInit }} handlers - Event handlers and options.
 * @returns {RTCDataChannel} The data channel.
 */
export function setupDataChannel(
  pc: RTCPeerConnection,
  label: string,
  handlers: {
    onOpen?: (ev: Event) => void,
    onMessage?: (ev: MessageEvent) => void,
    onClose?: (ev: Event) => void,
    onError?: (ev: Event) => void,
    options?: RTCDataChannelInit
  }
): RTCDataChannel {
  const dc = pc.createDataChannel(label, handlers.options);
  if (handlers.onOpen) dc.addEventListener('open', handlers.onOpen as EventListener);
  if (handlers.onMessage) dc.addEventListener('message', handlers.onMessage as EventListener);
  if (handlers.onClose) dc.addEventListener('close', handlers.onClose as EventListener);
  if (handlers.onError) dc.addEventListener('error', handlers.onError as EventListener);
  return dc;
}
