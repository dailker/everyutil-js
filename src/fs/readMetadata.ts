/**
 * Extracts metadata from a file, like creation/modification times, EXIF data (for images), etc.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @returns {Promise<Record<string, any>>} Metadata object.
 */
export async function readMetadata(path: string): Promise<Record<string, any>> {
  const fs = await import('fs/promises');
  const stat = await fs.stat(path);
  const meta: Record<string, any> = {
    size: stat.size,
    created: stat.birthtime,
    modified: stat.mtime,
    mode: stat.mode,
    isFile: stat.isFile(),
    isDirectory: stat.isDirectory(),
  };
  if (/\.(jpe?g|png|gif|tiff|webp)$/i.test(path)) {
    try {
      const exif = await import('exif-parser');
      const buf = await fs.readFile(path);
      meta.exif = exif.create(buf).parse();
    } catch {}
  }
  return meta;
}
