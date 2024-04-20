/**
 * Compresses an entire directory into a ZIP or tarball archive.
 *
 * @author @dailker
 * @param {string} srcDir - Source directory.
 * @param {string} destArchive - Destination archive path.
 * @param {'zip' | 'tar.gz'} [format='zip'] - Archive format.
 * @returns {Promise<void>}
 */
export async function compressDirectory(srcDir: string, destArchive: string, format: 'zip' | 'tar.gz' = 'zip'): Promise<void> {
  if (format === 'zip') {
    const AdmZip = (await import('adm-zip')).default;
    const zip = new AdmZip();
    zip.addLocalFolder(srcDir);
    zip.writeZip(destArchive);
  } else {
    throw new Error('tar.gz not implemented. Use a CLI tool or library.');
  }
}
