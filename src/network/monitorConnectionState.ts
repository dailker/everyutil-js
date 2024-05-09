/**
 * Hooks into connection state changes for a peer connection.
 *
 * Example: monitorConnectionState(pc, cb)
 *
 * @author @dailker
 * @param {RTCPeerConnection} pc - The peer connection.
 * @param {(state: RTCPeerConnectionState) => void} cb - Callback for state changes.
 */
export function monitorConnectionState(pc: RTCPeerConnection, cb: (state: RTCPeerConnectionState) => void) {
  pc.addEventListener('connectionstatechange', () => {
    cb(pc.connectionState);
  });
}
