/**
 * Bootstraps a TCP server with event handlers (Node.js only).
 *
 * Example: createSocketServer({ port, onConnection })
 *
 * @author @dailker
 * @param {{ port: number, onConnection?: (socket: any) => void, onError?: (...args: any[]) => void }} options - Server options and handlers.
 * @returns {Promise<any>} The server instance.
 */
export async function createSocketServer(options: { port: number, onConnection?: (socket: any) => void, onError?: (...args: any[]) => void }): Promise<any> {
  const net = await import('net');
  return new Promise(resolve => {
    const server = net.createServer(socket => {
      if (options.onConnection) options.onConnection(socket);
    });
    if (options.onError) server.on('error', options.onError);
    server.listen(options.port, () => resolve(server));
  });
}
