/**
 * Lightweight TCP ping alternative (Node.js only).
 *
 * Example: tcpPing('localhost', 80)
 *
 * @author @dailker
 * @param {string} host - Hostname or IP.
 * @param {number} port - Port number.
 * @returns {Promise<number|null>} Latency in ms or null if failed.
 */
export async function tcpPing(host: string, port: number): Promise<number | null> {
  const net = await import('net');
  return new Promise(resolve => {
    const start = Date.now();
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.once('connect', () => { socket.destroy(); resolve(Date.now() - start); });
    socket.once('timeout', () => { socket.destroy(); resolve(null); });
    socket.once('error', () => { socket.destroy(); resolve(null); });
    socket.connect(port, host);
  });
}
