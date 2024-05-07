/**
 * Checks if a TCP port is open on a host (Node.js only).
 *
 * Example: isPortOpen('localhost', 80)
 *
 * @author @dailker
 * @param {string} host - Hostname or IP.
 * @param {number} port - Port number.
 * @returns {Promise<boolean>} True if open.
 */
export async function isPortOpen(host: string, port: number): Promise<boolean> {
  const net = await import('net');
  return new Promise(resolve => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.once('connect', () => { socket.destroy(); resolve(true); });
    socket.once('timeout', () => { socket.destroy(); resolve(false); });
    socket.once('error', () => { socket.destroy(); resolve(false); });
    socket.connect(port, host);
  });
}
