/**
 * Decompresses a compressed stream using the specified method and writes the decompressed data to output.
 * Supports gzip, deflate, brotli.
 *
 * @author @dailker
 * @param {import('stream').Readable} inputStream - Input stream.
 * @param {import('stream').Writable} outputStream - Output stream.
 * @param {{ method?: 'gzip' | 'deflate' | 'brotli'; password?: string }} [options]
 * @returns {Promise<void>}
 */
export async function decompressStream(
  inputStream: import('stream').Readable,
  outputStream: import('stream').Writable,
  options?: { method?: 'gzip' | 'deflate' | 'brotli'; password?: string }
): Promise<void> {
  const zlib = await import('zlib');
  let decompressor: import('zlib').Gunzip | import('zlib').Inflate | import('zlib').BrotliDecompress;
  switch (options?.method) {
    case 'deflate':
      decompressor = zlib.createInflate();
      break;
    case 'brotli':
      decompressor = zlib.createBrotliDecompress();
      break;
    default:
      decompressor = zlib.createGunzip();
  }
  await new Promise((resolve, reject) => {
    inputStream.pipe(decompressor).pipe(outputStream).on('finish', resolve).on('error', reject);
  });
}
