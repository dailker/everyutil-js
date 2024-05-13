/**
 * Converts a Node.js stream to a Buffer.
 *
 * Example: await streamToBuffer(stream)
 *
 * @author @dailker
 * @param {import('stream').Readable} stream - Readable stream.
 * @returns {Promise<Buffer>} The buffer.
 */
export async function streamToBuffer(stream: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', (chunk: Buffer) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

/**
 * Converts a Buffer to a Node.js Readable stream.
 *
 * Example: bufferToStream(buf)
 *
 * @author @dailker
 * @param {Buffer} buffer - The buffer.
 * @returns {import('stream').Readable} The readable stream.
 */
export function bufferToStream(buffer: Buffer): any {
  const { Readable } = require('stream');
  return Readable.from(buffer);
}
