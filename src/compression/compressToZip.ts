/**
 * Compresses multiple files into a ZIP archive at the specified destination.
 * Note: Password protection is not supported by adm-zip (option is ignored).
 *
 * @author @dailker
 * @param {string[]} files - Files to compress.
 * @param {string} zipPath - Destination ZIP path.
 * @param {{ password?: string; compressionLevel?: number; encrypt?: boolean }} [options]
 * @returns {Promise<void>}
 */
export async function compressToZip(files: string[], zipPath: string, options?: { password?: string; compressionLevel?: number; encrypt?: boolean }): Promise<void> {
  const AdmZip = (await import('adm-zip')).default;
  const zip = new AdmZip();
  for (const file of files) zip.addLocalFile(file);
  // Password protection is not supported by adm-zip; option is ignored.
  zip.writeZip(zipPath);
}
