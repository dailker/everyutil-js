/**
 * Resolves conflicts between two files using a specified strategy.
 *
 * @author @dailker
 * @param {string} fileA - Path to file A.
 * @param {string} fileB - Path to file B.
 * @param {ConflictStrategy} strategy - Conflict resolution strategy.
 * @returns {Promise<void>} Resolves when conflict is resolved.
 */
export async function resolveConflicts(fileA: string, fileB: string, strategy: import('./ConflictStrategy').ConflictStrategy): Promise<void> {
    const fs = await import('fs/promises');
    if (strategy === 'preferA') {
        await fs.copyFile(fileA, fileB);
    } else if (strategy === 'preferB') {
        await fs.copyFile(fileB, fileA);
    } else if (strategy === 'merge') {
        // Simple merge: concatenate contents
        const [a, b] = await Promise.all([
            fs.readFile(fileA, 'utf8'),
            fs.readFile(fileB, 'utf8')
        ]);
        await fs.writeFile(fileA, a + '\n' + b, 'utf8');
        await fs.writeFile(fileB, a + '\n' + b, 'utf8');
    }
}
