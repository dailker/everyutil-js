/**
 * Sets file permissions using a string (e.g., '755').
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {string} permissions - Permissions string (octal, e.g., '755').
 * @returns {Promise<void>} Resolves when permissions are set.
 */
export async function setFilePermissions(filePath: string, permissions: string): Promise<void> {
    const fs = await import('fs/promises');
    await fs.chmod(filePath, parseInt(permissions, 8));
}
