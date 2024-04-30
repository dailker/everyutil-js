/**
 * Awaits ICE candidate gathering to complete for a peer connection.
 *
 * Example: await awaitICEGatheringComplete(pc)
 *
 * @author @dailker
 * @param {RTCPeerConnection} pc - The peer connection.
 * @returns {Promise<void>} Resolves when ICE gathering is complete.
 */
export function awaitICEGatheringComplete(pc: RTCPeerConnection): Promise<void> {
  if (pc.iceGatheringState === 'complete') return Promise.resolve();
  return new Promise(resolve => {
    function check() {
      if (pc.iceGatheringState === 'complete') {
        pc.removeEventListener('icegatheringstatechange', check);
        resolve();
      }
    }
    pc.addEventListener('icegatheringstatechange', check);
  });
}
