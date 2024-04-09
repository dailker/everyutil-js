/**
 * Sends a HEAD request to a URL and returns the latency in ms.
 *
 * Example: pingURL("https://example.com") → 123
 *
 * @author @dailker
 * @param {string} url - The URL to ping.
 * @returns {Promise<number>} Latency in milliseconds.
 */
export async function pingURL(url: string): Promise<number> {
  const start = performance.now();
  try {
    await fetch(url, { method: 'HEAD', cache: 'no-store' });
  } catch {}
  return performance.now() - start;
}
