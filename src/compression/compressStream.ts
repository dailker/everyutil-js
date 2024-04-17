/**
 * Compresses a readable stream and writes the compressed data to a writable stream.
 * Supports gzip, deflate, brotli.
 *
 * @author @dailker
 * @param {import('stream').Readable} inputStream - Input stream.
 * @param {import('stream').Writable} outputStream - Output stream.
 * @param {{ method?: 'gzip' | 'deflate' | 'brotli'; level?: number; password?: string }} [options]
 * @returns {Promise<void>}
 */
export async function compressStream(
  inputStream: import('stream').Readable,
  outputStream: import('stream').Writable,
  options?: { method?: 'gzip' | 'deflate' | 'brotli'; level?: number; password?: string }
): Promise<void> {
  const zlib = await import('zlib');
  let compressor: import('zlib').Gzip | import('zlib').Deflate | import('zlib').BrotliCompress;
  switch (options?.method) {
    case 'deflate':
      compressor = zlib.createDeflate({ level: options.level });
      break;
    case 'brotli':
      compressor = zlib.createBrotliCompress({ params: { [zlib.constants.BROTLI_PARAM_QUALITY]: options.level ?? 4 } });
      break;
    default:
      compressor = zlib.createGzip({ level: options?.level });
  }
  await new Promise((resolve, reject) => {
    inputStream.pipe(compressor).pipe(outputStream).on('finish', resolve).on('error', reject);
  });
}
