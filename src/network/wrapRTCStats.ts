/**
 * Normalizes and filters a WebRTC stats report.
 *
 * Example: wrapRTCStats(stats) → { ... }
 *
 * @author @dailker
 * @param {RTCStatsReport} stats - The stats report.
 * @returns {any[]} Array of normalized stats objects.
 */
export function wrapRTCStats(stats: RTCStatsReport): any[] {
  const arr: any[] = [];
  stats.forEach((v) => {
    arr.push({ ...v });
  });
  return arr;
}
