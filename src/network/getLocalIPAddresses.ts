/**
 * Fetches all local IP addresses (Node.js & browser).
 *
 * Example: getLocalIPAddresses() → ["192.168.1.2", ...]
 *
 * @author @dailker
 * @returns {Promise<string[]>} Array of IP addresses.
 */
export async function getLocalIPAddresses(): Promise<string[]> {
  if (typeof window !== 'undefined' && window.RTCPeerConnection) {
    // Browser: use WebRTC
    return new Promise(resolve => {
      const ips = new Set<string>();
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel('');
      pc.onicecandidate = e => {
        if (e.candidate) {
          const ip = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(e.candidate.candidate);
          if (ip) ips.add(ip[1]);
        } else {
          resolve(Array.from(ips));
        }
      };
      pc.createOffer().then(o => pc.setLocalDescription(o));
    });
  } else {
    // Node.js: use os.networkInterfaces
    const os = await import('os');
    const nets = os.networkInterfaces();
    const results: string[] = [];
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] || []) {
        if (net.family === 'IPv4' && !net.internal) results.push(net.address);
      }
    }
    return results;
  }
}
