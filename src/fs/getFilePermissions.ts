/**
 * Gets file permissions as a string (e.g., '755').
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @returns {Promise<string>} Permissions string (octal, e.g., '755').
 */
export async function getFilePermissions(filePath: string): Promise<string> {
    const fs = await import('fs/promises');
    const stat = await fs.stat(filePath);
    return (stat.mode & 0o777).toString(8);
}
