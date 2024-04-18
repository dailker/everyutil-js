/**
 * Extracts the contents of a ZIP archive to the specified directory.
 * Note: Password protection is not supported by adm-zip (option is ignored).
 *
 * @author @dailker
 * @param {string} zipPath - Path to ZIP archive.
 * @param {string} destDir - Destination directory.
 * @param {{ password?: string }} [options]
 * @returns {Promise<void>}
 */
export async function extractZip(zipPath: string, destDir: string, options?: { password?: string }): Promise<void> {
  const AdmZip = (await import('adm-zip')).default;
  const zip = new AdmZip(zipPath);
  // Password protection is not supported by adm-zip; option is ignored.
  zip.extractAllTo(destDir, true);
}
