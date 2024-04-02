/**
 * Estimates network speed by downloading a known asset and timing it.
 *
 * Example: getNetworkSpeedEstimate() → { speedMbps: 10.5, latencyMs: 120 }
 *
 * @author @dailker
 * @returns {Promise<{speedMbps: number, latencyMs: number}|null>} Speed and latency or null if failed.
 */
export async function getNetworkSpeedEstimate(): Promise<{ speedMbps: number, latencyMs: number } | null> {
  const testUrl = 'https://speed.hetzner.de/100MB.bin'; // Use a public test file
  const sizeBytes = 100 * 1024 * 1024;
  const t0 = performance.now();
  try {
    const res = await fetch(testUrl, { method: 'GET', cache: 'no-store', headers: { Range: 'bytes=0-1048575' } });
    const t1 = performance.now();
    const latencyMs = t1 - t0;
    const blob = await res.blob();
    const t2 = performance.now();
    const duration = (t2 - t1) / 1000;
    const speedMbps = (blob.size * 8) / (duration * 1e6);
    return { speedMbps, latencyMs };
  } catch {
    return null;
  }
}
