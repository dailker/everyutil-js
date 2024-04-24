/**
 * Detects the MIME type of a file based on content or extension.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @returns {Promise<string>} MIME type.
 */
export async function getFileMimeType(path: string): Promise<string> {
  const { lookup } = await import('mime-types');
  return lookup(path) || 'application/octet-stream';
}
