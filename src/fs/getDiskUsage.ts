/**
 * Returns disk usage stats for the volume containing the path.
 *
 * @author @dailker
 * @param {string} path - Path to check.
 * @returns {Promise<{ total: number; free: number; used: number }>} Disk usage stats.
 */
export async function getDiskUsage(path: string): Promise<{ total: number; free: number; used: number }> {
  const disk = await import('diskusage').then(m => m.default || m);
  const { total, free } = await disk.check(path);
  return { total, free, used: total - free };
}
