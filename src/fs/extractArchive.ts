/**
 * Extracts files from ZIP, tarball, or other common archive formats.
 *
 * @author @dailker
 * @param {string} archivePath - Archive file path.
 * @param {string} destDir - Destination directory.
 * @returns {Promise<void>}
 */
export async function extractArchive(archivePath: string, destDir: string): Promise<void> {
  const AdmZip = (await import('adm-zip')).default;
  const zip = new AdmZip(archivePath);
  zip.extractAllTo(destDir, true);
}
