/**
 * Securely deletes a file by overwriting it with random data before removal.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {number} [passes=3] - Number of overwrite passes.
 * @returns {Promise<void>} Resolves when file is securely deleted.
 */
export async function secureDelete(filePath: string, passes: number = 3): Promise<void> {
    const fs = await import('fs/promises');
    const { stat, open, rm } = fs;
    const fileStat = await stat(filePath);
    for (let i = 0; i < passes; i++) {
        const handle = await open(filePath, 'r+');
        const random = Buffer.allocUnsafe(fileStat.size);
        crypto.getRandomValues(random);
        await handle.write(random, 0, fileStat.size, 0);
        await handle.close();
    }
    await rm(filePath);
}
