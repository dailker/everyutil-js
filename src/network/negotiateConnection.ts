/**
 * Automates offer/answer negotiation for a peer connection.
 *
 * Example: await negotiateConnection(pc, remoteDesc)
 *
 * @author @dailker
 * @param {RTCPeerConnection} pc - The peer connection.
 * @param {RTCSessionDescriptionInit} remoteDesc - Remote offer/answer.
 * @returns {Promise<RTCSessionDescriptionInit>} Local description.
 */
export async function negotiateConnection(pc: RTCPeerConnection, remoteDesc: RTCSessionDescriptionInit): Promise<RTCSessionDescriptionInit> {
  await pc.setRemoteDescription(new RTCSessionDescription(remoteDesc));
  if (remoteDesc.type === 'offer') {
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    return answer;
  } else {
    return pc.localDescription!;
  }
}
