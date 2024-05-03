/**
 * Wrapper to create and configure an RTCPeerConnection.
 *
 * Example: createPeerConnection({ iceServers: [...] })
 *
 * @author @dailker
 * @param {RTCConfiguration} config - Peer connection config.
 * @returns {RTCPeerConnection} The peer connection.
 */
export function createPeerConnection(config: RTCConfiguration): RTCPeerConnection {
  return new RTCPeerConnection(config);
}
