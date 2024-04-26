/**
 * Monitors available disk space at a path and triggers callback when it drops below threshold.
 *
 * @author @dailker
 * @param {string} path - Path to monitor.
 * @param {number} thresholdBytes - Threshold in bytes.
 * @param {(freeSpace: number) => void} callback - Callback when below threshold.
 * @returns {Promise<void>}
 */
export async function monitorDiskSpace(path: string, thresholdBytes: number, callback: (freeSpace: number) => void): Promise<void> {
  const check = async () => {
    const { free } = await import('diskusage').then(m => m.default || m).then(disk => disk.check(path));
    if (free < thresholdBytes) callback(free);
  };
  setInterval(check, 10000);
  await check();
}
