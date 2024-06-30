/**
 * Watches a source directory and synchronizes changes to the destination directory in real time.
 *
 * @author @dailker
 * @param {string} src - Source directory.
 * @param {string} dest - Destination directory.
 * @returns {Promise<void>} Resolves when watching is set up.
 */
export async function watchAndSync(src: string, dest: string): Promise<void> {
    const chokidar = await import('chokidar');
    const { syncDirectories } = await import('./syncDirectories');
    await syncDirectories(src, dest, { overwrite: true });
    const watcher: any = chokidar.watch(src, { ignoreInitial: true });
    watcher.on('all', async () => {
        await syncDirectories(src, dest, { overwrite: true });
    });
}
